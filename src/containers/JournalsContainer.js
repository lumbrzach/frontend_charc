import React from 'react'
import JournalCard from '../components/JournalCard'
import { Segment, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const JournalsContainer = (props) => {

    const spotJournals = () => {
        if (props.journals.length > 0) {
            return props.journals.filter((journal) => journal.spot_id === props.spotId)
        }
        else {
            return false
        }
    }

    return(
        // <div className='horizontalScroll'>
        //     {props.journals.map((journal) => <JournalCard claasName='card' {...journal}/>)}
        // </div>
        <Segment basic className='horizontalScroll' >
        <List horizontal>
            {spotJournals().map((journal, i) => <List.Item key={i} display={'inline-block'}><JournalCard className="card" {...journal}/></List.Item>)}
        </List>
        </Segment>
        // <Segment basic  >
        //     <Card.Group className='horizontalScroll'>
        //         {props.journals.map((journal, i) => <JournalCard  key={i} {...journal}/>)}
        //     </Card.Group> 
        // </Segment>
    )
}

const mapStateToProps = state => {
    return {
        journals: state.journals
    }
}

export default connect(mapStateToProps)(JournalsContainer)