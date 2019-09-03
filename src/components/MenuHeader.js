import React from 'react';
import {Menu, Image, Container } from 'semantic-ui-react';
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


const MenuHeader = (props) => {
    return(
        <Menu fixed="top" inverted style={{height: '60px'}}>
            <Container fluid>
                <Menu.Item
                    name='whirlpool'
                    as={Link}
                    to='/'
                >
                    <Image centered size="tiny" src="https://i.ytimg.com/vi/SuZcVyYDWwE/maxresdefault.jpg" />
                </Menu.Item>

                <Menu.Item>
                    {loginButtonDisplay()}
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
            </Container>
        </Menu>
    )
}

export default MenuHeader;
