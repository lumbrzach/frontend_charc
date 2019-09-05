import React from "react"
import { Container, Header, Grid, List, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import MapContainer from '../containers/MapContainer'
// import { getSpotData, getSpots } from '../services/backend'
import JournalForm from './JournalForm'
import JournalsContainer from '../containers/JournalsContainer'
import SpotEditForm from './SpotEditForm'
import SpotPhotoForm from './SpotPhotoForm'
import PhotosContainer from '../containers/PhotosContainer'


class SpotShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showJournalForm: false,
            showSpotEditForm: false,
            showSpotPhotoForm: false
        }
    }

    // componentDidMount() {
    //     const spotGaugeNum = this.props.spot.gauge_num
    //     fetch(`https://waterservices.usgs.gov/nwis/iv/?site=${spotGaugeNum}&parameterCd=00060,00065,00011`, {
    //         method: "GET",
    //         headers: {
    //             accept: "application/json",
    //             "content-type": "application-json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(console.log)
    // }

    revealJournalForm = () => {
        this.setState({ showJournalForm: true})
    }
    closeJournalForm = () => {
        console.log("inside closeJournalForm")
        this.setState({showJournalForm: false})
    }

    revealSpotEditForm = () => {
        this.setState({ showSpotEditForm: true})
    }
    closeSpotEditForm = () => {
        console.log("inside closeSpotEditForm")
        this.setState({showSpotEditForm: false})
    }

    revealSpotPhotoForm = () => {
        this.setState({ showSpotPhotoForm: true})
    }
    closeSpotPhotoForm = () => {
        console.log("inside closeSpotPhotoForm")
        this.setState({showSpotPhotoForm: false})
    }

    selectedSpot = () => {
        return this.props.spots.filter((spot) => spot.id === parseInt(this.props.spotId))
    }
    
    render() {
        // debugger
        let currentSpot = this.selectedSpot()[0]

        console.log(currentSpot)
        if (currentSpot === undefined) { return null; }
        return (
            <div>
                {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
                    <Header textAlign="center" as='h1' style={{padding: '1em'}}>
                        {currentSpot.name}
                    </Header>

                    <Divider/>

                    <Grid.Row>
                        <Container textAlign="center">
                            <SpotEditForm showSpotEditForm={this.state.showSpotEditForm} revealSpotEditForm={this.revealSpotEditForm} closeSpotEditForm={this.closeSpotEditForm} spot={currentSpot} />
                            <SpotPhotoForm showSpotPhotoForm={this.state.showSpotPhotoForm} revealSpotPhotoForm={this.revealSpotPhotoForm} closeSpotPhotoForm={this.closeSpotPhotoForm} spot={currentSpot}/>
                            <JournalForm showJournalForm={this.state.showJournalForm} revealJournalForm={this.revealJournalForm} closeJournalForm={this.closeJournalForm} spot={currentSpot}/>
                        </Container>
                    </Grid.Row>

                    <Divider horizontal >Spot Details</Divider>
                    
                    <Grid  inverted stackable padded relaxed columns='equal'>
                        <Grid.Row columns={3}  style={{ paddingBottom: '3em'}}>
                            <Grid.Column width={5} >
                                <MapContainer
                                    // initialCenter={{ lat: props.spot.lat, lng: props.spot.long }}
                                    lat={currentSpot.lat}
                                    long={currentSpot.long}
                                />
                            </Grid.Column>
                            <Grid.Column >
                                <Container text style={{ paddingLeft: '3em'}} textAlign="left">
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
                                                    <a href={currentSpot.gauge_url} target="_blank">{currentSpot.gauge_url}</a>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Current CFS:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.current_cfs}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Current Height:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.current_height}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Water Temp:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{currentSpot.water_temp}</p>
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

                        <Divider horizontal >Photos</Divider>

                        <Grid.Row style={{ paddingBottom: '5em'}}>
                            <Grid.Column textAlign="center" >
                                <PhotosContainer spotId={currentSpot.id}/>
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

