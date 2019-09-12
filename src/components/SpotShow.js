import React from "react"
import { Container, Header, Grid, List, Divider, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import MapContainer from '../containers/MapContainer'
import JournalForm from './JournalForm'
import JournalsContainer from '../containers/JournalsContainer'
import SpotEditForm from './SpotEditForm'
import SpotPhotoForm from './SpotPhotoForm'
import SpotPhotosContainer from '../containers/SpotPhotosContainer'
import SpotEventsContainer from '../containers/SpotEventsContainer'
import SpotEventForm from './SpotEventForm'


class SpotShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //State for modal function
            showJournalForm: false,
            showSpotEditForm: false,
            showSpotPhotoForm: false,
            showSpotEventForm: false,
            showSpotPhotoCard: false,
            spotCfs: '',
            spotHeight: '',
            spotTemp: '',
            spotTurbidity: '',
            spotPh: ''
        }
    }
//Trying to fetch live stream updates...
    componentDidMount() {
        this.grabLiveValues() 
    }


    grabLiveValues = () => {
        let theSpot = this.selectedSpot()[0]
    
        if (theSpot === undefined) { return null}
        if (theSpot.gauge_url.includes("usgs"))

        fetch(`https://waterservices.usgs.gov/nwis/iv/?site=${theSpot.gauge_num}&parameterCd=00060,00065&format=json,1.1`, {
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application-json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                // spotTemp: data.value.timeSeries[0].values[0].value[0].value,
                spotCfs: data.value.timeSeries[0].values[0].value[0].value,
                spotHeight: data.value.timeSeries[1].values[0].value[0].value
            })
            console.log(data)
        })
    }

// Journal Form Modal Controls
    revealJournalForm = () => {
        this.setState({ showJournalForm: true})
    }
    closeJournalForm = () => {
        this.setState({showJournalForm: false})
    }
// SpotEdit Form Modal Controls
    revealSpotEditForm = () => {
        this.setState({ showSpotEditForm: true})
    }
    closeSpotEditForm = () => {
        this.setState({showSpotEditForm: false})
    }
// SpotPhoto Form Modal Controls
    revealSpotPhotoForm = () => {
        this.setState({ showSpotPhotoForm: true})
    }
    closeSpotPhotoForm = () => {
        this.setState({showSpotPhotoForm: false})
    }

//SpotEvent Form Modal Controls
    revealSpotEventForm = () => {
        this.setState({ showSpotEventForm: true})
    }
    closeSpotEventForm = () => {
        this.setState({showSpotEventForm: false})
    }    

//SpotEvent Form Modal Controls
    revealSpotPhotoCard = () => {
        this.setState({ showSpotPhotoCard: true})
    }
    closeSpotPhotoCard = () => {
        this.setState({showSpotPhotoCard: false})
    }  


//Making sure the spot presented is the one the user requested
    selectedSpot = () => {
        return this.props.spots.filter((spot) => spot.id === parseInt(this.props.spotId))
    }
    
    render() {
        // debugger
        let currentSpot = this.selectedSpot()[0]

        console.log("Current Spot", currentSpot)
        if (currentSpot === undefined) { return null; }
        return (
            <div>
                {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
                    <Header textAlign="center" as='h1' style={{padding: '1em'}}>
                        {currentSpot.name}
                    </Header>

                    <Container textAlign="center">
                    <List horizontal >
                        <List.Item>
                            <List.Content>
                                <List.Header>
                                    Current Flow(cfs):
                                </List.Header>
                                <List.Description>
                                    <p>{this.state.spotCfs} cfs</p>
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>
                                    Current Height(ft):
                                </List.Header>
                                <List.Description>
                                    <p>{this.state.spotHeight} ft</p>
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                    </Container>

                    <Divider/>

                    <Grid.Row>
                        <Container textAlign="center">
                            <SpotEditForm getAllData={this.props.getAllData} showSpotEditForm={this.state.showSpotEditForm} revealSpotEditForm={this.revealSpotEditForm} closeSpotEditForm={this.closeSpotEditForm} spot={currentSpot} />
                            <SpotPhotoForm getAllData={this.props.getAllData} showSpotPhotoForm={this.state.showSpotPhotoForm} revealSpotPhotoForm={this.revealSpotPhotoForm} closeSpotPhotoForm={this.closeSpotPhotoForm} spot={currentSpot}/>
                            <JournalForm getAllData={this.props.getAllData} showJournalForm={this.state.showJournalForm} revealJournalForm={this.revealJournalForm} closeJournalForm={this.closeJournalForm} spot={currentSpot}/>
                            <SpotEventForm getAllData={this.props.getAllData} showSpotEventForm={this.state.showSpotEventForm} revealSpotEventForm={this.revealSpotEventForm} closeSpotEventForm={this.closeSpotEventForm} spot={currentSpot}/>
                            <Button onClick={this.grabLiveValues}>Referesh Live Stream Data (USGS Gauges Only)</Button>
                        </Container>
                    </Grid.Row>

                    <Divider horizontal >Spot Details</Divider>
                    
                    <Grid  inverted stackable padded relaxed columns='equal'>
                        <Grid.Row columns={"equal"}  style={{ paddingBottom: '3em'}} stackable>
                            <Grid.Column width={4} >
                                <Container style={{ paddingLeft: '10em'}} >
                                <MapContainer
                                    // initialCenter={{ lat: props.spot.lat, lng: props.spot.long }}
                                    lat={currentSpot.lat}
                                    long={currentSpot.long}
                                />
                                </Container>
                            </Grid.Column>
                            <Grid.Column >
                                <Container text style={{ paddingLeft: '15em'}} textAlign="left">
                                    <List>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Latitude:
                                                </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.lat}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Longitude:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.long}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Country:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.country}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    State:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.state}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    City:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.city}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Region:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.region}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    River:
                                                </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.river}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Container>
                            </Grid.Column>
                            {/* <Grid.Column >
                                <Container>
                                    <Embed 
                                        url={'https://waterdata.usgs.gov/wv/nwis/uv/?ts_id=160537&format=img_default&site_no=03070260&period=7'}
                                        active
                                        aspectRatio={'4:3'}
                                        className="embed"
                                    />
                                </Container>
                            </Grid.Column> */}
                            <Grid.Column >
                                <Container text textAlign="left">
                                    <List>
                                    <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Gauge:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.gauge_name}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Gauge Number:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.gauge_num}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Gauge/Flow Info URL:
                                                    </List.Header>
                                                <List.Description>
                                                    <a href={currentSpot.gauge_url} target="_blank" rel="noopener noreferrer">{currentSpot.gauge_url}</a>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Minumum Flow:
                                                </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.min_flow}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Maximum Flow:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.max_flow}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Ideal Flow:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.ideal_flow}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Quality:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.quality}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider horizontal >Spot Description</Divider>
                        
                        <Grid.Row>
                            <Container style={{marginTop: '1em', marginBottom: '2em'}} text textAlign="center">
                                <p>{currentSpot.description}</p>
                            </Container>
                        </Grid.Row>

                        <Divider horizontal >Journal Entries</Divider>

                        <Grid.Row >
                            <Grid.Column textAlign="center" >
                                <JournalsContainer spotId={currentSpot.id}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider horizontal >Events at this Spot</Divider>

                        <Grid.Row >
                            <Grid.Column textAlign="center" >
                                <SpotEventsContainer spotName={currentSpot.name}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider horizontal >Photos</Divider>

                        <Grid.Row style={{ paddingBottom: '5em'}}>
                            <Grid.Column textAlign="center" >
                                <SpotPhotosContainer showSpotPhotoCard={this.state.showSpotPhotoCard} revealSpotPhotoCard={this.revealSpotPhotoCard} closeSpotPhotoCard={this.closeSpotPhotoCard} spotId={currentSpot.id}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        spots: state.spots
    }
}

export default connect(mapStateToProps)(SpotShow)

