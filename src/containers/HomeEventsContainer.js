import React from "react";
import { Container, Header, Segment, List, Grid, Button } from 'semantic-ui-react'
import EventCard from '../components/EventCard'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const HomeEventsContainer = (props) => {
    return (
        <Container fluid>
            <Header textAlign="center" as='h1'>Events</Header>
            <Grid textAlign="center" rows={2}>
                <Grid.Row textAlign="center" >
                    <Header >Take a look at what may be happening at a watering hole near you...</Header>
                </Grid.Row>
                <Grid.Row textAlign="center" >
                    <Button as={Link} to='/eventform' color="black">
                        Create A New Event
                    </Button>
                </Grid.Row>
                <Grid.Row>
                    <Segment style={{height: '200px', overflow: 'auto'}}>
                    <List horizontal>
                        {props.events.map((event, i) => <List.Item key={i} ><EventCard {...event}/></List.Item>)}
                    </List>
                    </Segment>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { events: state.events }
}

export default connect(mapStateToProps)(HomeEventsContainer);