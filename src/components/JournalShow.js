import React from 'react'
import { Header, Button, Modal, Segment } from 'semantic-ui-react'

const JournalShow = (props) => {
    return (
        <Modal trigger={<Button color="black">Show Journal</Button>}>
            <Modal.Header>{props.journal.date}</Modal.Header>
            <Modal.Content image>
                {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
                <Modal.Description>
                    <Header>Description</Header>
                    <Segment basic style={{overflow: 'auto'}}>
                        {props.journal.description}
                    </Segment>
                </Modal.Description>
                <Modal.Description>
                    <Header>Details</Header>
                    <p><strong>Flow:</strong> {props.journal.flow}</p>
                    <p><strong>Height:</strong> {props.journal.height}</p>
                    <p><strong>Preferred Charc:</strong> {props.journal.pref_charc}</p>
                    <p><strong>Qulity:</strong> {props.journal.quality}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default JournalShow