import React from "react";
import { Container, Header, Segment, List, Grid } from 'semantic-ui-react'
import EventCard from '../components/EventCard'
import { connect } from 'react-redux'
import HomeEventForm from '../components/HomeEventForm'
import { Link } from 'react-router-dom'

class HomeEventsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showHomeEventForm: false
        }
    }

    // Journal Form Modal Controls
    revealHomeEventForm = () => {
        this.setState({ showHomeEventForm: true})
    }
    closeHomeEventForm = () => {
        this.setState({ showHomeEventForm: false })
    }

    render() {
        return (
            <Container fluid>
                <Header textAlign="center" size="huge" as={Link} to='/events'>Events</Header>
                <Grid textAlign="center" rows={2}>
                    <Grid.Row textAlign="center" >
                        <Header >Take a look at what may be happening at a watering hole near you...</Header>
                    </Grid.Row>
                    <Grid.Row textAlign="center" >
                        <HomeEventForm getAllData={this.props.getAllData} showHomeEventForm={this.state.showHomeEventForm} revealHomeEventForm={this.revealHomeEventForm} closeHomeEventForm={this.closeHomeEventForm}/>
                    </Grid.Row>
                    <Grid.Row>
                        {/* <Segment className='horizontalScroll' >
                        <List horizontal>
                            {this.props.events.map((event, i) => <List.Item key={i} display={'inline-block'}><EventCard {...event}/></List.Item>)}
                        </List>
                        </Segment> */}
                        <Segment secondary style={{height: '400px', overflow: 'auto'}}>
                        <List >
                            {this.props.events.map((event, i) => <List.Item key={i} ><EventCard {...event}/></List.Item>)}
                        </List>
                        </Segment>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

    
}

const mapStateToProps = (state) => {
    return { events: state.events }
}

export default connect(mapStateToProps)(HomeEventsContainer);