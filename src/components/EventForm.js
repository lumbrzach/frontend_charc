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

  //Close modal function
  handleCloseModal = (e) => {
    e.persist()
    this.props.closeEventForm()
    this.handleSubmit(e)
  }
        
  //Setting up Event in local state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  handleLocationChange = (event, { value }) => {
    this.setState({
      location: value
    })
  }

  //Submitting event and creating a EventSpot in the backend
  handleSubmit = e => {
    e.persist()
    let filteredSpot = this.props.spots.filter((spot) => spot.name === this.state.location)[0]
    let spotId = filteredSpot.id
    const jwt = localStorage.jwt

    fetch("https://charc-backend.herokuapp.com/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        event: this.state, 
        spot_id: spotId
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        }
        else {
          // console.log('razadata', data)
          this.props.dispatch({type: 'ADD_EVENT', data})
          // this.props.getAllData()
          // console.log(data)
          // this.makeEventSpot(data.id)
        }
      })
      .catch(message => alert(message))
  }

  

  render() {
    const spotOptions = this.props.spots.map((spot) => { return {value: spot.name, text: spot.name} })
    // debugger

    return (
        <Modal onClose={this.props.closeEventForm} open={this.props.showEventForm} trigger={<Button color="black" onClick={() => this.props.revealEventForm()}>Create A New Event</Button>}>
        <Container style={{ padding: '2em' }}>
            <Form onSubmit={this.handleCloseModal}>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        label='Name' 
                        placeholder='e.g. Bombing Run at The Leslie' 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    {/* <Form.Input 
                        fluid 
                        label='Location' 
                        placeholder='e.g. The Leslie' 
                        name="location" 
                        value={this.state.location} 
                        onChange={this.handleChange}
                    /> */}
                </Form.Group>

                <Form.Select
                  fluid
                  label='Mystery Spot'
                  name='location'
                  options={spotOptions}
                  placeholder="Pick a spot, unless maybe you aren't going kayaking..."
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                  search
                />


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

const mapStateToProps = state => {
  return {
    spots: state.spots
  }
}

export default connect(mapStateToProps)(EventForm);