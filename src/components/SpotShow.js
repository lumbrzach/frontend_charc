import React from "react"
import { Container, Header, Image, Grid, List, Divider } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import MapContainer from '../containers/MapContainer'
// import { getSpotData } from '../services/backend'
import JournalForm from './JournalForm'
import JournalsContainer from '../containers/JournalsContainer'
import SpotEditForm from './SpotEditForm'
import SpotPhotoForm from './SpotPhotoForm'


class SpotShow extends React.Component {
    state = {
        showJournalForm: false
    }
    // console.log("Spot Show Page")

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
    
    render() {
        console.log(this.props.spot)
        if (this.props.spot === undefined) { return null; }
        return (
            <div>
                {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
                    <Header textAlign="center" as='h1' style={{padding: '1em'}}>
                        {this.props.spot.name}
                    </Header>

                    <Divider/>

                    <Grid.Row>
                        <Container textAlign="center">
                            <SpotEditForm spot={this.props.spot} />
                            <SpotPhotoForm spot={this.props.spot}/>
                            <JournalForm showJournalForm={this.state.showJournalForm} revealJournalForm={this.revealJournalForm} closeJournalForm={this.closeJournalForm} spot={this.props.spot}/>
                        </Container>
                    </Grid.Row>

                    <Divider horizontal >Spot Details</Divider>
                    
                    <Grid  inverted stackable padded relaxed columns='equal'>
                        <Grid.Row columns={3}  style={{ paddingBottom: '3em'}}>
                            <Grid.Column width={5} >
                                <MapContainer
                                    // initialCenter={{ lat: props.spot.lat, lng: props.spot.long }}
                                    lat={this.props.spot.lat}
                                    long={this.props.spot.long}
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
                                                    <p>{this.props.spot.lat}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Longitude:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.long}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Country:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.country}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    State:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.state}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    City:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.city}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Region:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.region}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    River:
                                                </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.river}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Quality:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.quality}</p>
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
                                                    <p>{this.props.spot.gauge_name}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Gauge Number:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.gauge_num}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Gauge/Flow Info URL:
                                                    </List.Header>
                                                <List.Description>
                                                    <a href={this.props.spot.gauge_url} target="_blank">{this.props.spot.gauge_url}</a>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Current CFS:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.current_cfs}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Current Height:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.current_height}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Water Temp:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.water_temp}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Minumum Flow:
                                                </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.min_flow}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Maximum Flow:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.max_flow}</p>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Ideal Flow:
                                                    </List.Header>
                                                <List.Description>
                                                    <p>{this.props.spot.ideal_flow}</p>
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
                                {/* <Header  as='h2' textAlign="center">
                                    Spot Description
                                </Header> */}
                                <p>{this.props.spot.description}</p>
                            </Container>
                        </Grid.Row>

                        <Divider horizontal >Journal Entries</Divider>

                        {/* <Grid.Row >
                            <Grid.Column textAlign="center" >
                                <JournalForm showJournalForm={this.state.showJournalForm} revealJournalForm={this.revealJournalForm} closeJournalForm={this.closeJournalForm} spot={this.props.spot}/>
                            </Grid.Column>
                        </Grid.Row> */}
                        <Grid.Row >
                            <Grid.Column textAlign="center" >
                                <JournalsContainer journals={this.props.spot.journals}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider horizontal >Photos</Divider>

                        {/* <Grid.Row >
                            <Grid.Column textAlign="center" >
                                <SpotPhotoForm spot={this.props.spot}/>
                            </Grid.Column>
                        </Grid.Row> */}
                        <Grid.Row style={{ paddingBottom: '5em'}}>
                            <Grid.Column textAlign="center" >
                                {this.props.spot.photos.map((photo, i) => <Image key={i} size="medium" bordered label={photo.comment} src={photo.source}/>)}
                            </Grid.Column>
                        </Grid.Row>

                        {/* <Divider />

                        <Grid.Row >
                            <Grid.Column  textAlign="center" >
                                <SpotEditForm spot={this.props.spot} />
                            </Grid.Column>
                        </Grid.Row> */}
                    </Grid>
                {/* </Container> */}
            </div>
        )
    }
    
}

export default (SpotShow)

