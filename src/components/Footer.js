import React from "react";
import {
    Container,
    Menu,
    Image
  } from 'semantic-ui-react'

  export default class Footer extends React.Component {

    render() {
          return ( 
            <Menu fixed="bottom" inverted size="medium" style={{paddingTop: '5px'}}>
            <Container fluid>
                <Menu.Item
                    name='whirlpool'
                >
                    <Image centered size="tiny" src="http://blogs.discovermagazine.com/imageo/files/2018/07/gulfoffinland_oli_2018199_CROP.jpg" />
                </Menu.Item>

                <Menu.Item
                    name='editorials'
                >
                    Editorials
                </Menu.Item>
            </Container>
        </Menu>
          )
      }
  }