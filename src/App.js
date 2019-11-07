import React from 'react';
import './App.css';
import MenuHeader from './components/MenuHeader'
import HomeImage from './components/HomeImage'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './containers/Home'
import LogIn from './components/LogIn'
import UserForm from './components/UserForm'
import SpotShow from './components/SpotShow'
import EventShow from './components/EventShow'
import EventsContainer from './containers/EventsContainer';
import SpotsContainer from './containers/SpotsContainer';
import SpotForm from './components/SpotForm';
import { getSpots, getEvents, getJournals, getPhotos } from './services/backend';
import { Responsive, Container } from 'semantic-ui-react';

class App extends React.Component {
  
  getAllData = () => {
    getSpots().then(data => this.props.dispatch({
      type: 'GET_SPOTS',
      data
    }))
    getEvents().then(data => this.props.dispatch({
      type: 'GET_EVENTS',
      data
    }))
    getJournals().then(data => this.props.dispatch({
      type: 'GET_JOURNALS',
      data
    }))
    getPhotos().then(data => this.props.dispatch({
      type: 'GET_PHOTOS',
      data
    }))
  }
  
  
  componentDidMount() {
    this.getAllData()
  }

  showSpot = (id) => {
    let s = this.props.spots.find(spot => (spot.id === Number(id)))
    return s
  }

  showEvent = (id) => {
    let e = this.props.events.find(event => (event.id === Number(id)))
    return e
  }
  
  render() {
    return (
      // <Responsive as={Container}>
        <div>
        {/* <Container style={{ width: '100%', margin: '0px' }}> */}
          <MenuHeader/>
          {/* <HomeImage/> */}
          <Switch>
            <Route path='/login' render={() => (<LogIn/>)}/>
            <Route path='/register' render={() => (<UserForm/>)}/>
            <Route path='/events' render={() => (<EventsContainer getAllData={this.getAllData}/>)}/>
            <Route path='/spots' render={() => (<SpotsContainer/>)}/>
            <Route path='/spotform' render={() => (<SpotForm getAllData={this.getAllData} />)}/>
            <Route path='/spot/:id' render={({ match, history }) => {
            return <SpotShow getAllData={this.getAllData} history={history} spotId={match.params.id}/>
            }} />
            <Route path='/event/:id' render={({ match }) => {
            return <EventShow getAllData={this.getAllData} event={this.showEvent(match.params.id)}/>
            }} />
            <Route path='/' render={() => (<Home getAllData={this.getAllData} />)}/>
          </Switch>
        {/* </Container> */}
        </div>
      // </Responsive>
    )
  }
  
}

const mapStateToProps = (state) => {
  return { 
    spots: state.spots,
    events: state.events
  }
}

export default connect(mapStateToProps)(App);
