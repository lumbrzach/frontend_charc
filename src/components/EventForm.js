import React, { Component } from 'react'
import { Form, Container, Modal, Button } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { connect } from 'react-redux'


class EventForm extends Component {
    state = {
        name: '',
        location: '',
        description: '',
        date: '',
        alt_spot_1: '',
        alt_spot_2: '',
        alt_spot_3: '',
        alt_spot_4: ''
      };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleDateChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }

    handleSubmit = e => {
      // adding in e.persist because of synthetic events probably causing values to be wiped and sent back to pool
      e.persist()

      const jwt = localStorage.jwt

      fetch("http://localhost:3000/api/v1/events",{
        method: "POST",
        headers: {
          // taking out extra headers. thinking they might be conflicting with the backend auth. had no effect. moving on to console.log logging this.state directly on submit callback
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": `Bearer ${jwt}`
        },
        body: JSON.stringify({
            event: this.state
        })
      })
      .then(res => res.json())
    //   .then(data => {
    //     this.props.addCohort(data)
    //     this.props.history.push('/')
    //   })
      .then(data => {
        if(data.message) {
          alert(data.message)
        }
        else {
          this.props.dispatch({ type: 'ADD_EVENT', data})
          // window.location.replace('http://localhost:3001/events')
        }
      })
      .catch(message => alert(message))
    }
    

  render() {
    return (
        <Modal trigger={<Button color="black">Create A New Event</Button>}>
        <Container style={{ padding: '2em' }}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        label='Name' 
                        placeholder='e.g. Bombing Run at The Leslie' 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        fluid 
                        label='Location' 
                        placeholder='e.g. The Leslie' 
                        name="location" 
                        value={this.state.location} 
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <DateInput
                    name="date"
                    placeholder="Date"
                    iconPosition="left"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />

                <Form.TextArea
                    name="description"
                    placeholder="Give us all the juicy details..."
                    label="Description"
                    value={this.state.start_date}
                    onChange={this.handleChange}
                />

                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label="Alternate Spot 1"
                        name="alt_spot_1"
                        placeholder="e.g. Cats Pajamas"
                        value={this.state.alt_spot_1}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Alternate Spot 2"
                        name="alt_spot_2"
                        placeholder="e.g. Frustration Alley"
                        value={this.state.alt_spot_2}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Alternate Spot 3"
                        name="alt_spot_3"
                        placeholder="e.g. Sweet Cheeks"
                        value={this.state.alt_spot_3}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Alternate Spot 4"
                        name="alt_spot_4"
                        placeholder="e.g. Digital Dropbox"
                        value={this.state.alt_spot_4}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
        </Modal>
    )
  }
}

export default connect()(EventForm);