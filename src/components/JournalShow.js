import React from 'react'
import { Header, Button, Modal, Segment } from 'semantic-ui-react'

const JournalShow = (props) => {
    return (
        <Modal trigger={<Button color="black">Show Journal</Button>}>
            <Modal.Header>{props.journal.date}</Modal.Header>
            <Modal.Content image>
                {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
                <Modal.Description>
                    <Header>Notes</Header>
                    <Segment basic style={{overflow: 'auto'}}>
                        {props.journal.explore_notes}
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