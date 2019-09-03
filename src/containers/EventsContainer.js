import React from "react"
import EventCard from '../components/EventCard'
import { Container, Card, Header, Search, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const EventsContainer = (props) => {

    return (
        <div>
            <Container style={{ marginTop: '2em', marginBottom: '20em' }}>
                <Header textAlign="center" as='h1'>Mysterious Happennings</Header>
                {/* <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers} /> */}
                <Button style={{ marginBottom: '2em' }} fluid as={Link} to='/eventform' color="black">
                        Create A New Event
                </Button>
                <Card.Group centered={true} itemsPerRow={3}>
                    {props.events.map((event) => <EventCard key={event.id} {...event} />)}
                </Card.Group>
            </Container>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(EventsContainer)