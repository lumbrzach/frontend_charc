import React from 'react'
import { Header, Button, Modal, Segment } from 'semantic-ui-react'

const JournalShow = (props) => {
    return (
        <Modal trigger={<Button color="black">Show Journal</Button>}>
            <Modal.Header>{props.journal.date}</Modal.Header>
            <Modal.Content scrolling>
                {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
                <Modal.Description>
                    <Header>Notes</Header>
                    <Segment basic style={{overflow: 'auto'}}>
                        <p>{props.journal.explore_notes}</p>
                    </Segment>
                </Modal.Description>
                <Modal.Description>
                    <Header>Details</Header>
                    <p><strong>Level:</strong> {props.journal.river_level}</p>
                    <p><strong>Preferred Charc:</strong> {props.journal.pref_charc}</p>
                    <p><strong>Quality:</strong> {props.journal.quality}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default JournalShow