import React from "react";
import {
    Container,
    Grid
  } from 'semantic-ui-react';
import HomeEventsContainer from './containers/HomeEventsContainer';
import HomeSpotsContainer from './containers/HomeSpotsContainer';




const Home = () => {

    return (
        <div>
            <Container fluid style={{ marginTop: '2em', maginBottom: '10em' }}>
                <Grid rows={2}>
                    <Grid.Row centered>
                        <HomeEventsContainer/>
                    </Grid.Row>
                    
                    <Grid.Row centered >
                        <HomeSpotsContainer/>  
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )

}

export default Home