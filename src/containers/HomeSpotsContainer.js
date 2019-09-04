import React from "react";
import { Container, Header, Segment, List, Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import SpotCard from '../components/SpotCard'

const HomeSpotsContainer = (props) => {
    return (
        <Container fluid>
            <Header textAlign="center" as='h1'>Mystery Spots</Header>
            <Grid textAlign="center" rows={2}>
                <Grid.Row textAlign="center" >
                    <Header >Take a look at what may be happening at a watering hole near you...</Header>
                </Grid.Row>
                <Grid.Row textAlign="center" >
                    <Button as={Link} to='/spotform' color="black">
                        Find A New Spot??
                    </Button>
                </Grid.Row>
                <Grid.Row>
                    <Segment style={{height: '400px', overflow: 'auto'}}>
                    <List >
                        {props.spots.map((spot, i) => <List.Item key={i} ><SpotCard {...spot}/></List.Item>)}
                    </List>
                    </Segment>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { spots: state.spots }
}

export default connect(mapStateToProps)(HomeSpotsContainer);