import React from 'react';
import { Responsive, Menu, Image, Card, Segment, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const logout = () => {
    if(localStorage.length !== 0) {
        window.localStorage.clear()
        alert('You have been successfully logged out.')
        window.location.href = '/login'
    }
}

const loginButtonDisplay = () => {
    if(localStorage.length === 0) {
      return <Link name='login' to='/login'>Login</Link>
    } 
    else {
      return <Link name='logout' to='/login' onClick={logout}>Log {localStorage.username} Out</Link>
    }
}


const MenuHeader = () => {
    return(
            <Responsive as={Menu} inverted compact stackable style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <Menu.Item
                    name='whirlpool'
                    as={Link}
                    to='/'
                >
                    <Image centered size="tiny" src="https://i.ytimg.com/vi/SuZcVyYDWwE/maxresdefault.jpg" />
                </Menu.Item>
                <Menu.Item
                    name='register'
                    as={Link}
                    to='/register'
                >
                    Register
                </Menu.Item>
                <Menu.Item
                    name='events'
                    as={Link}
                    to='/events'
                >
                    Events
                </Menu.Item>
                <Menu.Item
                    name='spots'
                    as={Link}
                    to='/spots'
                >
                    Spots
                </Menu.Item>

                <Menu.Item position="right">
                    {loginButtonDisplay()}
                </Menu.Item>
            </Responsive>
    )
}

export default MenuHeader;
