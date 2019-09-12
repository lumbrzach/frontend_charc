import React from "react";
import {
    Container,
    Grid
  } from 'semantic-ui-react';
import HomeEventsContainer from './HomeEventsContainer';
import HomeSpotsContainer from './HomeSpotsContainer';
import HomeInfo from '../components/HomeInfo';




const Home = (props) => {

    return (
        <div>
            <Container fluid style={{ marginTop: '2em', maginBottom: '10em' }}>
                <Grid rows={2}>
                    <Grid.Row textAlign={'center'}>
                        <Grid.Column centered>
                            <HomeInfo/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={"equal"} textAlign={'center'}>
                        <Grid.Column centered>
                            <HomeEventsContainer getAllData={props.getAllData}/>
                        </Grid.Column>
                        <Grid.Column centered>
                            <HomeSpotsContainer getAllData={props.getAllData}/>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </Container>
        </div>
    )

}

export default Home