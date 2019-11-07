import React from "react"
import { Responsive, Segment, Container, Header, Item } from 'semantic-ui-react'

const HomeInfo = () => {

    return(
        <Responsive as={Container} text fluid>
                <Header size='huge'>
                    CHARC
                </Header>
                <Item>
                    THE Resource for the Squirt Boating Community
                <br/><br/>
                    This site is 100% user-contributed and user-maintained
                </Item>
        </Responsive>
    )
}

export default HomeInfo