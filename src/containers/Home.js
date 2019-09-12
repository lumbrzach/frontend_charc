import React from "react";
import {
    Container,
    Grid
  } from 'semantic-ui-react';
import HomeEventsContainer from './HomeEventsContainer';
import HomeSpotsContainer from './HomeSpotsContainer';




const Home = (props) => {

    return (
        <div>
            <Container fluid style={{ marginTop: '2em', maginBottom: '10em' }}>
                <Grid rows={2}>
                    <Grid.Row centered>
                        <HomeEventsContainer getAllData={props.getAllData}/>
                    </Grid.Row>
                    
                    <Grid.Row centered >
                        <HomeSpotsContainer getAllData={props.getAllData}/>  
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )

}

export default Home