import React, { Component } from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'



class SpotForm extends Component {
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
      description: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleRadioChange = (e) => {
    this.setState({
        quality: e.target.innerText
    })
  }

  handleSpotSubmit = (e) => {
      e.persist()
      let spot = this.state
      const jwt = localStorage.jwt

      console.log(spot)
      fetch('http://localhost:3000/api/v1/spots', {
          method: "POST",
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
                  this.props.history.push('/spots')
              }
          })
          .catch(message => alert(message))
  }

  render() {
    const { quality } = this.state
    return (
        <Container text style={{ marginTop: '6em', marginBottom: '4em' }}>
            <Header>Create/Edit Spot</Header>
            <Form
                onSubmit={this.handleSpotSubmit}
            >
                <Form.Group widths='equal'>
                    <Form.Field required>
                    <label>Name</label>
                    <Form.Input fluid name='name' placeholder='e.g. Fascination Alley' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>River</label>
                    <Form.Input fluid name='river' placeholder='e.g. Cheat' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                    <label>Country</label>
                    <Form.Input fluid name='country' placeholder='e.g. USA' onChange={this.handleChange}/>
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='lat' label='Latitude' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='long' label='Longitude' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='city' label='City' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='state' label='State' placeholder='' onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='gauge_name' label='Gauge Name' onChange={this.handleChange}/>
                    <Form.Input fluid name='gauge_num' label='Gauge Number' onChange={this.handleChange}/>
                </Form.Group>
                
                <Form.Input fluid name='gauge_url' label='Gauge URL/Flow Information' onChange={this.handleChange}/>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='min_flow' label='Minimum Flow' placeholder='Please indicate cfs or ft' onChange={this.handleChange}/>
                    <Form.Input fluid name='ideal_flow' label='Ideal Flow' placeholder='Please indicate cfs or ft' onChange={this.handleChange}/>
                    <Form.Input fluid name='max_flow' label='Maximum Flow' placeholder='Please indicate cfs or ft' onChange={this.handleChange}/>
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
                
                <Form.TextArea label='Description' name='description' placeholder='Give us all the juicy details...' onChange={this.handleChange}/>
                
                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
    )
  }
}

export default connect()(withRouter(SpotForm));