import React from "react"
import { Header, Grid, List, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'


class EventShow extends React.Component{
    handleJoinEvent = () => {
        const USER_EVENTS_API = "https://charc-backend.herokuapp.com/api/v1/user_events/"
        fetch(USER_EVENTS_API, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
              authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({
              user_event: {
                event_id: this.props.event.id
              }
            })
          })
          .then(res => res.json())
          .then(data => {
            //   mockData = {
            //       user_event: {
            //           event:: {
            //               ...,
            //             users: []}
            //       }
            //   }
              this.props.dispatch({ type: 'JOIN_EVENT', event: data.event })
          })
        // console.log('asfdasd')
    
    }
    render(){
    if (this.props.event === undefined) { return null; }
    return (
        <div>
            {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
            <Header textAlign="center" as='h1' style={{ padding: '1em' }}>
                {this.props.event.name}
            </Header>

            <Grid inverted divided stackable padded >
                <Grid.Row centered>
                    <Button style={{ marginBottom: '2em' }} color="black" onClick={this.handleJoinEvent}>
                        Join Event
                        </Button>
                </Grid.Row>

                <Divider horizontal>Location</Divider>

                <Grid.Row textAlign="center">
                    <Grid.Column >
                        <p>
                            {this.props.event.location}
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Divider horizontal>Description</Divider>
                
                <Grid.Row textAlign="center">
                    <Grid.Column >
                        <p>
                            {this.props.event.description}
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Divider horizontal>Zombies Going</Divider>

                <Grid.Row textAlign="center">
                    <Grid.Column >
                        <List bulleted>
                            {this.props.event.users ? this.props.event.users.map((user) => <List.Item key={user.id}>{user.username}</List.Item>) : null}
                        </List>
                    </Grid.Column>
                </Grid.Row >
                
            </Grid>
            {/* </Container> */}
        </div>
    )
    }
}

export default connect()(EventShow)