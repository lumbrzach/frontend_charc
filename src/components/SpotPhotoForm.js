import React, { Component } from 'react'
import { Form, Container, Header, Modal, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'



class SpotPhotoForm extends Component {
  state = {
      spot_id: this.props.spot.id,
      source: '',
      comment: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleRadioChange = (e) => {
    this.setState({
        quality: e.target.innerText
    })
  }

  handleSpotPhotoSubmit = (e) => {
      e.persist()
      let photo = this.state
      const jwt = localStorage.jwt

      fetch(`http://localhost:3000/api/v1/photos`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${jwt}`
          },
          body: JSON.stringify({
              photo: photo
          })
        })
          .then(res => res.json())
          .then(data => {
              if (data.message) {
                  alert(data.message)
              }
            //   else {
            //       this.props.dispatch({ type: 'EDIT_SPOT', data})
            //       this.props.history.push('/spots')
            //   }
          })
          .catch(message => alert(message))
  }

  render() {
    return (
        <Modal trigger={<Button color="black">Add a Photo</Button>}>
        <Container text style={{ padding: '2em' }}>
            <Header>Create/Edit Spot</Header>
            <Form
                onSubmit={this.handleSpotPhotoSubmit}
            >
                <Form.Input fluid name='source' label="Photo's Source URL" onChange={this.handleChange}/>
                
                <Form.Input fluid name='comment' label='Caption' value={this.state.description} onChange={this.handleChange}/>
                
                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
        </Modal>
    )
  }
}

export default connect()(SpotPhotoForm);