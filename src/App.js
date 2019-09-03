import React from 'react';
import './App.css';
import MenuHeader from './components/MenuHeader'
import HomeImage from './HomeImage'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './Home'
import LogIn from './components/LogIn'
import UserForm from './components/UserForm'
import SpotShow from './components/SpotShow'
import EventShow from './components/EventShow'
import EventsContainer from './containers/EventsContainer';
import SpotsContainer from './containers/SpotsContainer';
import EventForm from './components/EventForm';
import SpotForm from './components/SpotForm';
import { getSpots, getEvents } from './services/backend'

class App extends React.Component {
  
  componentDidMount() {
    getSpots().then(data => this.props.dispatch({
      type: 'GET_SPOTS',
      data
    }))
    getEvents().then(data => this.props.dispatch({
      type: 'GET_EVENTS',
      data
    }))
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
      <div>
        <MenuHeader/>
        <HomeImage/>
        <Switch>
          <Route path='/login' render={() => (<LogIn/>)}/>
          <Route path='/register' render={() => (<UserForm/>)}/>
          <Route path='/events' render={() => (<EventsContainer/>)}/>
          <Route path='/spots' render={() => (<SpotsContainer/>)}/>
          <Route path='/eventform' render={() => (<EventForm/>)}/>
          <Route path='/spotform' render={() => (<SpotForm/>)}/>
          <Route path='/spot/:id' render={({ match }) => {
           return <SpotShow spot={this.showSpot(match.params.id)}/>
          }} />
          <Route path='/event/:id' render={({ match }) => {
           return <EventShow event={this.showEvent(match.params.id)}/>
          }} />
          <Route path='/' render={() => (<Home/>)}/>
        </Switch>
        {/* <Footer /> */}
      </div>
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
