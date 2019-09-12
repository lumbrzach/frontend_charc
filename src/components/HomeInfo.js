import React from "react"
import { Container, Header, Item, Grid } from 'semantic-ui-react'

const HomeInfo = () => {

    return(
        <Container text>
                <Header size='huge'>
                    CHARC
                </Header>
                <br/>
                <Item>
                    THE Resource for the Squirt Boating Community
                <br/><br/>
                    This site is 100% user-contributed and user-maintained
                </Item>
        </Container>
    )
}

export default HomeInfo