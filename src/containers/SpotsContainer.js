import React from "react"
import SpotCard from '../components/SpotCard'
import { Container, Header, Button, Search, Divider, Grid, Statistic, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class SpotsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameFilter: '',
            stateFilter: '',
            riverFilter: ''
        }
    }

    //Setting and filtering by name
    setNameFilter= (e, { value }) => {
        this.setState({
            nameFilter: value
        })
    }
    filterSpotsName = () => {
        return this.props.spots.filter((spot) => spot.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
    }

    //Setting and filtering by State
    setStateFilter= (e, { value }) => {
        this.setState({
            stateFilter: value
        })
    }
    filterSpotsState = () => {
        return this.props.spots.filter((spot) => spot.state.toLowerCase().includes(this.state.stateFilter.toLowerCase()))
    }

    //Setting and filtering by River
    setRiverFilter= (e, { value }) => {
        this.setState({
            riverFilter: value
        })
    }
 
    filterSpotsRiver = () => {
        return this.props.spots.filter((spot) => spot.river.toLowerCase().includes(this.state.riverFilter.toLowerCase()))
    }



    render() {
        return (
            <div>
                <Container style={{ marginTop: '2em', marginBottom: '20em' }}>
                    <Grid>
                        <Grid.Row textAlign="center">
                            <Grid.Column>
                                <Header  size="huge">Mysterious Locales</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign="center">
                            <Grid.Column>
                                <Statistic horizontal >
                                    <Statistic.Value>
                                        <Icon name='tint' />{this.props.spots.length}
                                    </Statistic.Value>
                                    <Statistic.Label>and counting...</Statistic.Label>
                                </Statistic>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Button style={{ marginBottom: '2em' }} fluid as={Link} to='/spotform' color="black">
                                Find A New Spot??
                            </Button>
                        </Grid.Row>

                        <Divider />
                        
                        <Grid.Row columns={"equal"}>
                            <Grid.Column>
                                <Header>
                                    Search By Name
                                </Header>
                                <Search showNoResults={false} onSearchChange={this.setNameFilter} placeholder={'e.g. Fascination Alley'}/>
                                {this.filterSpotsName().map((spot, i) => <SpotCard fluid key={i} {...spot} />)}
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                    Search By State
                                </Header>
                                <Search showNoResults={false} onSearchChange={this.setStateFilter} placeholder={'e.g. WV'}/>
                                {this.filterSpotsState().map((spot, i) => <SpotCard fluid key={i} {...spot} />)}
                            </Grid.Column>
                            <Grid.Column>
                                <Header>
                                    Search By River
                                </Header>
                                <Search showNoResults={false} onSearchChange={this.setRiverFilter} placeholder={'e.g. Cheat'}/>
                                {this.filterSpotsRiver().map((spot, i) => <SpotCard fluid key={i} {...spot} />)}
                            </Grid.Column>
                        </Grid.Row>
                        
                        {/* <Search fluid placeholder={"Search by name"} size={"huge"} showNoResults={false} loading={false} input={{ icon: 'search', iconPosition: 'left' }} onSearchChange={this.props.filterUsers} /> */}
                        
                        
                        {/* <Card.Group stackable > */}
                            
                        {/* </Card.Group> */}
                    </Grid>
                </Container>
            </div>
        )
    }
    

}

const mapStateToProps = (state) => {
    return { spots: state.spots }
}

export default connect(mapStateToProps)(SpotsContainer)