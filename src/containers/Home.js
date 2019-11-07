import React from "react";
import {
    Container,
    Responsive,
    Image,
    Grid
  } from 'semantic-ui-react';
import HomeEventsContainer from './HomeEventsContainer';
import HomeSpotsContainer from './HomeSpotsContainer';
import HomeInfo from '../components/HomeInfo';




const Home = (props) => {

    return (
            // <Responsive as={Container} fluid style={{ maginBottom: '10em' }}>
                <Grid rows={3} stackable>
                    <Grid.Row textAlign='center'>
                            <Image fluid style={{height: '15em' }} src="https://i.ytimg.com/vi/SuZcVyYDWwE/maxresdefault.jpg"/>
                    </Grid.Row>
                    <Grid.Row textAlign={'center'}>
                        <Grid.Column >
                            <HomeInfo/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={"equal"} textAlign={'center'}>
                        <Grid.Column >
                            <HomeEventsContainer getAllData={props.getAllData}/>
                        </Grid.Column>
                        <Grid.Column >
                            <HomeSpotsContainer getAllData={props.getAllData}/>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            // </Responsive>
    )

}

export default Home