import React from "react";
import { Container, Image } from 'semantic-ui-react';


const HomeImage = () => {
    return (
        <Container fluid style={{paddingTop: '60px'}}> 
            <Image fluid style={{height: '250px'}} src="https://i.ytimg.com/vi/SuZcVyYDWwE/maxresdefault.jpg"/>
        </Container> 
    )
}

export default HomeImage;