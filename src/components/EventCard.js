import React from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class EventCard extends React.Component {
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
                        {this.props.location}
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default connect()(EventCard)