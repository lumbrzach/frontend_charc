import React from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { getEvents } from '../services/backend'
import { connect } from 'react-redux'

class EventCard extends React.Component {
    // componentDidMount() {
    //     getEvents().then(data => this.props.dispatch({
    //         type: 'GET_EVENTS',
    //         data
    //       }))
    // }

    // if (props.event === undefined) { return null; }
    render() {
        return (
            <div>
                <Card className={'card'} as={Link} to={`/event/${this.props.id}`} style={{ margin: '0.5em' }} raised={true}>
                    <Card.Header style={{ padding: '0.5em' }} as='h3'>
                        {this.props.name}
                    </Card.Header>
                    <Card.Content>
                        {this.props.date}
                    </Card.Content>
                    <Card.Content>
                        {this.props.description}
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
}
export default connect()(EventCard)