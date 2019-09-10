import React from "react"
import { Card, Header } from 'semantic-ui-react'
import JournalShow from './JournalShow'
import { connect } from "react-redux"

const JournalCard = (props) => {

    
        return (
            <div>
                <Card className={'card'} style={{ margin: '0.5em' }} raised={true}>
                    <Card.Header style={{ padding: '0.5em' }} as='h3'>
                        {props.date}
                    </Card.Header>
                    <Card.Content style={{ padding: '0.5em'}}>
                        <Card.Description>
                            <Header>
                                Explorer:
                            </Header>
                            {props.username}
                        </Card.Description>

                        <Card.Content>
                            <Header>
                                Level:
                            </Header>
                            {props.river_level}
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Preferred Charc:
                            </Header>
                            {props.pref_charc}
                        </Card.Content>

                        <Card.Content >
                            <Header>
                                Quality:
                            </Header>
                            {props.quality}
                        </Card.Content>

                        <Card.Content>
                            <JournalShow style={{padding: '0.5em'}} journal={props} />
                        </Card.Content>
                    </Card.Content>
                </Card>
            </div>
        )

}
export default connect()(JournalCard)