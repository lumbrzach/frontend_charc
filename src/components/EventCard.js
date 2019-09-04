import React from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const EventCard = (props) => {

    // if (props.event === undefined) { return null; }
    return (
        <div>
            <Card className={'card'} as={Link} to={`/event/${props.id}`} style={{ margin: '0.5em' }} raised={true}>
                <Card.Header style={{ padding: '0.5em' }} as='h3'>
                    {props.name}
                </Card.Header>
                <Card.Content>
                    {props.date}
                </Card.Content>
                <Card.Content>
                    {props.description}
                </Card.Content>
                {/* </Card.Content> */}
                {/* <Card.Content extra>
                    <Icon name='user' />
                    {props.users.length} Zombie(s) Going
                </Card.Content> */}
            </Card>
        </div>
    )

}
export default EventCard