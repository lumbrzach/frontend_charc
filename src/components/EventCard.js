import React from "react"
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const EventCard = (props) => {

    return (
        <div>
            <Card as={Link} to={`/event/${props.id}`} style={{ margin: '0.5em' }} raised={true}>
                <Card.Header style={{ padding: '0.5em'}} as='h3'>
                    {props.name}
                </Card.Header>
                <Card.Content>
                    {/* <Card.Meta>
                            <span className='date'>Cohort(s): {this.props.user.cohorts}</span>
                        </Card.Meta> */}
                    <Card.Description>
                        {props.description}
                    </Card.Description>
                    {/* </Card.Content> */}
                    <Card.Content extra>
                    <p>
                        <Icon name='user' />
                        {props.users.length} Zombie(s) Going
                    </p>
                    </Card.Content>
                    {/* <Card.Content> */}


                    {/* <Button color='black' fluid style={{marginTop: '3em'}} as={Link} to={`/event/${props.id}`}>Event Page</Button> */}
                </Card.Content>
            </Card>
        </div>
    )

}
export default EventCard