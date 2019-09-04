import React from "react"
import { Card, Header } from 'semantic-ui-react'
import JournalShow from './JournalShow'

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
                            Description:
                        </Header>
                        {props.description}
                    </Card.Description>

                    <Card.Content>
                        <Header>
                            Flow:
                        </Header>
                        {props.flow}
                    </Card.Content>

                    <Card.Content >
                        <Header>
                            Height:
                        </Header>
                        {props.height}
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
export default JournalCard