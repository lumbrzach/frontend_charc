import React from "react";
import { Container, Header, Segment, List, Grid } from 'semantic-ui-react'
import EventCard from '../components/EventCard'
import { connect } from 'react-redux'
import EventForm from '../components/EventForm'
import { Link } from 'react-router-dom'

const HomeEventsContainer = (props) => {
    return (
        <Container fluid>
            <Header textAlign="center" size="huge" as={Link} to='/events'>Events</Header>
            <Grid textAlign="center" rows={2}>
                <Grid.Row textAlign="center" >
                    <Header >Take a look at what may be happening at a watering hole near you...</Header>
                </Grid.Row>
                <Grid.Row textAlign="center" >
                    <EventForm getAllData={props.getAllData} />
                </Grid.Row>
                <Grid.Row>
                    <Segment className='horizontalScroll' >
                    <List horizontal>
                        {props.events.map((event, i) => <List.Item key={i} display={'inline-block'}><EventCard {...event}/></List.Item>)}
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