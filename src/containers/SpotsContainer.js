import React from "react"
import SpotCard from '../components/SpotCard'
import { Container, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const SpotsContainer = (props) => {

    return (
        <div>
            <Container style={{ marginTop: '2em', marginBottom: '20em' }}>
                <Header textAlign="center" as='h1'>Mysterious Locales</Header>
                {/* <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers} /> */}
                <Button style={{ marginBottom: '2em' }} fluid as={Link} to='/spotform' color="black">
                    Find A New Spot??
                </Button>
                {/* <Card.Group stackable > */}
                    {props.spots.map((spot) => <SpotCard fluid key={spot.id} {...spot} />)}
                {/* </Card.Group> */}
            </Container>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { spots: state.spots }
}

export default connect(mapStateToProps)(SpotsContainer)