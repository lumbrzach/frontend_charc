import React from 'react';
import { Segment, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventCard from '../components/EventCard'

const SpotEventsContainer = (props) => {

    const spotEvents = () => {
        return props.events.filter((event) => event.location === props.spotName)
    }


    return(
        <Segment basic className='horizontalScroll' >
        <List horizontal>
            {spotEvents().map((event, i) => <List.Item key={i} display={'inline-block'}><EventCard className="card" {...event}/></List.Item>)}
        </List>
        </Segment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(SpotEventsContainer)