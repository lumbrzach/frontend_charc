import React, { Component } from 'react'
import { Form, Container, Header, Modal, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';



class SpotEditForm extends Component {
  state = {
      name: '',
      lat: '',
      long: '',
      country: '',
      city: '',
      state: '',
      quality: '',
      river: '', 
      river_section: '',
      gauge_url: '',
      gauge_name: '',
      gauge_num: '',
      min_flow: '',
      max_flow: '',
      ideal_flow: '',
      description: '',
      id: ''
  }

  componentDidMount() {
      this.setState(this.props.spot)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleRadioChange = (e) => {
    this.setState({
        quality: e.target.innerText
    })
  }

  handleCloseModal = e => {
    e.persist()
    this.props.closeSpotEditForm()
    this.handleSpotSubmit(e)
}

  handleSpotSubmit = (e) => {
      e.persist()
      let spot = this.state
      const jwt = localStorage.jwt

      console.log(spot)
      fetch(`https://charc-backend.herokuapp.com/api/v1/spots/${spot.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${jwt}`
          },
          body: JSON.stringify({
              spot: spot
          })
        })
          .then(res => res.json())
          .then(data => {
              if (data.message) {
                  alert(data.message)
              }
              else {
                  this.props.getAllData()
                  this.props.history.push(`/spot/${spot.id}`)
              }
          })
          .catch(message => alert(message))
  }

  render() {
    const { quality } = this.state
    return (
        <Modal onClose={this.props.closeSpotEditForm} open={this.props.showSpotEditForm} trigger={<Button color="black" onClick={() => this.props.revealSpotEditForm()}>Edit this Spot</Button>}>
        <Container text style={{ padding: '2em' }}>
            <Header>Create/Edit Spot</Header>
            <Form
                onSubmit={this.handleCloseModal}
            >
                <Form.Group widths='equal'>
                    <Form.Field required>
                    <label>Name</label>
                    <Form.Input fluid name='name' placeholder='e.g. Fascination Alley' value={this.state.name} onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>River</label>
                    <Form.Input fluid name='river' placeholder='e.g. Cheat' value={this.state.river} onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>Country</label>
                    <Form.Input fluid name='country' placeholder='e.g. USA' value={this.state.country} onChange={this.handleChange}/>
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='lat' label='Latitude' placeholder='' value={this.state.lat} onChange={this.handleChange}/>
                    <Form.Input fluid name='long' label='Longitude' placeholder='' value={this.state.long} onChange={this.handleChange}/>
                    <Form.Input fluid name='city' label='City' placeholder='' value={this.state.city} onChange={this.handleChange}/>
                    <Form.Input fluid name='state' label='State' placeholder='' value={this.state.state} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='gauge_name' label='Gauge Name' value={this.state.gauge_name} onChange={this.handleChange}/>
                    <Form.Input fluid name='gauge_num' label='Gauge Number' value={this.state.gauge_num} onChange={this.handleChange}/>
                </Form.Group>
                
                <Form.Input fluid name='gauge_url' label='Gauge URL/Flow Information' value={this.state.gauge_url} onChange={this.handleChange}/>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='min_flow' label='Minimum Flow' placeholder='Please indicate cfs or ft' value={this.state.min_flow} onChange={this.handleChange}/>
                    <Form.Input fluid name='ideal_flow' label='Ideal Flow' placeholder='Please indicate cfs or ft' value={this.state.ideal_flow} onChange={this.handleChange}/>
                    <Form.Input fluid name='max_flow' label='Maximum Flow' placeholder='Please indicate cfs or ft' value={this.state.max_flow} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group inline>
                    <label>Quality:</label>
                    <Form.Radio
                        label='Poor'
                        value='poor'
                        checked={quality === 'Poor'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Moderate'
                        value='moderate'
                        checked={quality === 'Moderate'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Great'
                        value='great'
                        checked={quality === 'Great'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Epic'
                        value='epic'
                        checked={quality === 'Epic'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Exploratory'
                        value='exploratory'
                        checked={quality === 'Exploratory'}
                        onChange={this.handleRadioChange}
                    />
                </Form.Group>
                
                <Form.TextArea label='Description' name='description' placeholder='Give us all the juicy details...' value={this.state.description} onChange={this.handleChange}/>
                
                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
        </Modal>
    )
  }
}

export default connect()(withRouter(SpotEditForm));