import React from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"

const SpotCard = (props) => {

    
        return (
            
            <Card as={Link} to={`/spot/${props.id}`} raised={true}>
                <Card.Content>
                    <Card.Header>
                        {props.name}
                    </Card.Header>
                </Card.Content>
            </Card>
            
        )
    
}
export default connect()(SpotCard)