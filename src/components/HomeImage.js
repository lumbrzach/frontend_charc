import React from "react";
import { Responsive, Container, Image } from 'semantic-ui-react';


const HomeImage = () => {
    return (
        <Responsive as={Container} fluid> 
            <Image fluid style={{height: '15rem' }} src="https://i.ytimg.com/vi/SuZcVyYDWwE/maxresdefault.jpg"/>
        </Responsive> 
    )
}

export default HomeImage;