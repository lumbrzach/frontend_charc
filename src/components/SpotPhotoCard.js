import React from "react"
import { Image, Container, Modal } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class SpotPhotoCard extends React.Component {

    handleCloseModal = e => {
        e.persist()
        this.props.closeSpotPhotoCard()
        this.handleSubmit()
    }

    render() {
        return (
            // <div>
            //     <Image bordered size="medium" label={this.props.photo.comment} src={this.props.photo.source}/>
            // </div>
            <Modal onClose={this.props.closeSpotPhotoCard} open={this.props.showSpotPhotoCard} trigger={<Image size="small" src={this.props.photo.source} alt='kayaking' onClick={() => this.props.revealSpotPhotoCard()}/>}>
                <Container style={{ marginTop: '1em', marginBottom: '1em', padding: '2em' }}>
                    {/* <Modal.Header></Modal.Header> */}
                    <Modal.Content image>
                        <Image wrapped size='large' src={this.props.photo.source} />
                    </Modal.Content>
                    <Modal.Content>
                        {this.props.photo.description}
                    </Modal.Content>

                </Container>
            </Modal>
    )
  }
}

export default connect()(SpotPhotoCard)