import React from "react"
import { Header, Grid, List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

// const eventToggle = () => {
  
// }

const EventShow = (props) => {

        // console.log("Spot Show Page")
    if (props.event === undefined) { return null; }
    return (
        <div>
            {/* <Container text fluid style={{ marginTop: '2em', marginBottom: '10em' }}> */}
                <Header textAlign="center" as='h1' style={{padding: '1em'}}>
                    {props.event.name}
                </Header>
                
                <Grid  inverted divided stackable padded >
                    <Grid.Row centered>
                        <Button style={{ marginBottom: '2em' }} color="black" onClick={() => props.dispatch({ type: 'JOIN_EVENT', event_id: props.event.id })}>
                            Join Event
                        </Button>
                    </Grid.Row>
                    <Grid.Row centered columns={3}>
                        <Grid.Column textAlign='right' verticalAlign='middle'>
                            <Header as='h3'>
                                Location:
                            </Header> 
                            <p>
                                {props.event.location}
                            </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Header as='h3' style={{padding: '1em'}}>
                                Attendees:
                            </Header>
                            <List bulleted> 
                                {props.event.users.map((user) => <List.Item key={user.id}>{user.username}</List.Item>)}
                            </List>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' textAlign='left'>
                            <Header as='h3'>
                                Description:
                            </Header> 
                            <p>
                                {props.event.description}
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            {/* </Container> */}
        </div>
    )
}

export default connect()(EventShow)