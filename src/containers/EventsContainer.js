import React from "react"
import EventCard from '../components/EventCard'
import { Container, Card, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventForm from '../components/EventForm'


const EventsContainer = (props) => {

    return (
        <div>
            <Container textAlign='center' style={{ marginTop: '2em', marginBottom: '20em' }}>
                <Header textAlign="center" as='h1'>Mysterious Happennings</Header>
                {/* <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers} /> */}
                <EventForm/>
                <Card.Group style={{marginTop: '1em'}} centered={true} itemsPerRow={3}>
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