import React from "react"
import EventCard from '../components/EventCard'
import { Container, Card, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventForm from '../components/EventForm'


class EventsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            showEventForm: false,
            eventList: this.props.events
        }
    }

    // Journal Form Modal Controls
    revealEventForm = () => {
        this.setState({ showEventForm: true})
    }
    closeEventForm = () => {
        this.setState({ showEventForm: false })
    }

    render() {
        return (
            <div>
                <Container textAlign='center' style={{ marginTop: '2em', marginBottom: '20em' }}>
                    <Header textAlign="center" as='h1'>Mysterious Happennings</Header>
                    {/* <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers} /> */}
                    <EventForm getAllData={this.props.getAllData} showEventForm={this.state.showEventForm} revealEventForm={this.revealEventForm} closeEventForm={this.closeEventForm}/>
                    <Card.Group style={{marginTop: '1em'}} centered={true} itemsPerRow={3}>
                        {this.props.events.map((event, i) => <EventCard key={i} {...event} />)}
                    </Card.Group>
                </Container>
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(EventsContainer)