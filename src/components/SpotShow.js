import React from "react"
import { Container, Header, Image, Grid, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import MapContainer from '../containers/MapContainer'


const SpotShow = (props) => {
        // console.log("Spot Show Page")
    if (props.spot === undefined) { return null; }
    return (
        <div>
            {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
                <Header textAlign="center" as='h1' style={{padding: '1em'}}>
                    {props.spot.name}
                </Header>
                <Grid celled divided inverted stackable padded relaxed columns='equal'>
                    <Grid.Row columns={3}  style={{ paddingBottom: '3em'}}>
                        <Grid.Column width={5} >
                            <MapContainer
                                // initialCenter={{ lat: props.spot.lat, lng: props.spot.long }}
                                lat={props.spot.lat}
                                long={props.spot.long}
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
                                                <p>{props.spot.lat}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Longitude:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.long}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Country:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.country}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                State:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.state}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                City:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.city}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Region:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.region}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                River:
                                            </List.Header>
                                            <List.Description>
                                                <p>{props.spot.river}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Quality:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.quality}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Container>
                        </Grid.Column>
                        {/* <Grid.Column >
                            <Container text textAlign="center">
                                <List>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                River:
                                            </List.Header>
                                            <List.Description>
                                                <p>{props.spot.river}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Gauge:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.gauge_name}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Gauge Number:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.gauge_num}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Gauge/Flow Info URL:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.gauge_url}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current CFS:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.current_cfs}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current Height:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.current_height}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Water Temp:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.water_temp}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
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
                                                <p>{props.spot.gauge_name}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Gauge Number:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.gauge_num}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Gauge/Flow Info URL:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.gauge_url}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current CFS:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.current_cfs}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Current Height:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.current_height}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Water Temp:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.water_temp}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Minumum Flow:
                                            </List.Header>
                                            <List.Description>
                                                <p>{props.spot.min_flow}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Maximum Flow:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.max_flow}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                Ideal Flow:
                                                </List.Header>
                                            <List.Description>
                                                <p>{props.spot.ideal_flow}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Container>
                        </Grid.Column>
                        {/* <Grid.Column></Grid.Column> */}
                    </Grid.Row>
                    <Grid.Row>
                        <Container text textAlign="center">
                            <Header as='h2' textAlign="center">
                                Spot Description
                            </Header>
                            <p>{props.spot.description}</p>
                        </Container>
                    </Grid.Row>
                    <Grid.Row columns={2} width="equal">
                        <Grid.Column textAlign="center">
                            <p>Place for Weather</p>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <p>Place for Map</p>
                            {/* <Map
                                google={props.google}
                                zoom={8}
                                style={mapStyles}
                                initialCenter={{ lat: props.spot.lat, lng: props.spot.long}}
                            /> */}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column textAlign="center" >
                            <p>Place for Comments???</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column textAlign="center" >
                            <p>Place for Photos</p>
                            {props.spot.photos.map((photo) => <Image size="medium" bordered label={photo.comment} src={photo.source}/>)}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            {/* </Container> */}
        </div>
    )
}

export default connect()(SpotShow)

