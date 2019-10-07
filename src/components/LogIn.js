import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Container,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setCurrentUser = () => {
        fetch('https://charc-backend.herokuapp.com/api/v1/login', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                user: this.state
            })
        })
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => {
            if(data.jwt) {
                localStorage.jwt = data.jwt
                localStorage.username = data.user.username
                window.location.href = '/'       
            }
            else {
                alert(data.error)
                window.location.href = '/login'
            }
        })
    }

    render() {
        return (
            <div>
                <Container text style={{ marginTop: '3em', marginBottom: '10em' }}>
                    <Header textAlign="center">Welcome! Please Login Below.</Header>
                    <Grid centered columns={2}>
                        <Grid.Column>
                        {/* <Header as="h2" textAlign="center">
                            Login
                        </Header> */}
                        <Segment>
                            <Form size="large">
                            <Form.Input
                                fluid
                                icon="user"
                                name="username"
                                onChange={this.handleLogin}
                                iconPosition="left"
                                placeholder="Username"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                name="password"
                                onChange={this.handleLogin}
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button 
                                color="black" 
                                fluid size="large" 
                                onClick={this.setCurrentUser}
                            >
                                Login
                            </Button>
                            </Form>
                        </Segment>
                        <Message>
                            Not registered yet? 
                            <Link 
                            to='/register'
                            >
                                Sign Up
                            </Link>
                        </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }

}