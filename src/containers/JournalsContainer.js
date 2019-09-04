import React from 'react'
import JournalCard from '../components/JournalCard'
import { Segment, List } from 'semantic-ui-react'

const JournalsContainer = (props) => {
    return(
        // <div className='horizontalScroll'>
        //     {props.journals.map((journal) => <JournalCard claasName='card' {...journal}/>)}
        // </div>
        <Segment basic className='horizontalScroll' >
        <List horizontal>
            {props.journals.map((journal, i) => <List.Item key={i} display={'inline-block'}><JournalCard className="card" {...journal}/></List.Item>)}
        </List>
        </Segment>
        // <Segment basic  >
        //     <Card.Group className='horizontalScroll'>
        //         {props.journals.map((journal, i) => <JournalCard  key={i} {...journal}/>)}
        //     </Card.Group> 
        // </Segment>
    )
}

export default JournalsContainer