import React from "react"
import { Card, Header } from 'semantic-ui-react'
import JournalShow from './JournalShow'
import { connect } from "react-redux"
import { getJournals } from '../services/backend'

class JournalCard extends React.Component {

    componentDidMount() {
        getJournals().then(data => this.props.dispatch({
            type: 'GET_JOURNALS',
            data
          }))
    }
    
    render() {
        return (
            <div>
                <Card className={'card'} style={{ margin: '0.5em' }} raised={true}>
                    <Card.Header style={{ padding: '0.5em' }} as='h3'>
                        {this.props.date}
                    </Card.Header>
                    <Card.Content style={{ padding: '0.5em'}}>
                        <Card.Description>
                            <Header>
                                Description:
                            </Header>
                            {this.props.description}
                        </Card.Description>

                        <Card.Content>
                            <Header>
                                Flow:
                            </Header>
                            {this.props.flow}
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Height:
                            </Header>
                            {this.props.height}
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Preferred Charc:
                            </Header>
                            {this.props.pref_charc}
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Quality:
                            </Header>
                            {this.props.quality}
                        </Card.Content>

                        <Card.Content>
                            <JournalShow style={{padding: '0.5em'}} journal={this.props} />
                        </Card.Content>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default connect()(JournalCard)