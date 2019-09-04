import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const SpotPhotoShow = (props) => {
    return (
        <Modal>
            <Modal.Content image>
                <Image wrapped size='medium' src={props.photo.source} />
                <Modal.Description>
                    <Header>Caption</Header>
                    <p>
                        {props.photo.comment}
                    </p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default SpotPhotoShow