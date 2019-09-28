import React, { Component } from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router'


class UserForm extends Component {
  state = {
      username: '',
      email: '',
      password: '',
      location: '',
      avatar: '',
      bio: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUserSubmit = () => {
    let user = this.state
      
      console.log(user)
      fetch('https://charc-backend.herokuapp.com/api/v1/users', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              user: user
          })
        })
        .then(resp => resp.json())
        // .then(user => {
        //     this.props.addUser(user)
        //     this.props.history.push('/login')
        // })
        .then(user => { 
            this.props.history.push('/login')
        })
  }

  render() {

    return (
        <Container text style={{ marginTop: '6em', marginBottom: '4em' }}>
            <Header>Create/Edit User Profile</Header>
            <Form 
                onSubmit={this.handleUserSubmit}
            >
                <Form.Group widths='equal'>
                    <Form.Field required>
                    <label>Username</label>
                    <Form.Input fluid name='username' placeholder='e.g. lumbrzach' 
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field required>
                    <label>Email</label>
                    <Form.Input fluid name='email' placeholder='johndoe@email.com' 
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field required>
                    <label>Password</label>
                    <Form.Input fluid type='password' name='password' placeholder='' 
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid name='location' label='Current Location' placeholder='e.g. Atlanta, GA' 
                        onChange={this.handleChange}
                    />
                    <Form.Input fluid name='avatar' label='Avatar Image' placeholder='Image URL' 
                        onChange={this.handleChange}
                    />
                </Form.Group>

                {/* <Form.TextArea label='About' name='bio' placeholder='Tell us more about you...' onChange={this.handleChange}/>
                
                <Label color={'blue'}>Social Media Information</Label>
                <Form.Group widths='equal' label='Social Media Information'>
                    <Form.Input fluid name='github' label='GitHub' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='linkedIn' label='LinkedIn' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='twitter' label='Twitter' placeholder='' onChange={this.handleChange}/>
                    <Form.Input fluid name='facebook' label='Facebook' placeholder='' onChange={this.handleChange}/>
                </Form.Group>

                <Label color={'blue'}>Featured Projects</Label>
                <Form.Group widths='equal' label='Social Media Information'>
                    <Form.Input fluid name='project_1' label='Project 1' placeholder='Project Repo URL' onChange={this.handleChange}/>
                    <Form.Input fluid name='project_2' label='Project 2' placeholder='Project Repo URL' onChange={this.handleChange}/>
                </Form.Group> */}
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    )
  }
}

export default withRouter(UserForm)