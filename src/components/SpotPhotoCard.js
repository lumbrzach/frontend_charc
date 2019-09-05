import React from "react"
import { Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
import { getPhotos } from '../services/backend'
import { connect } from 'react-redux'

class SpotPhotoCard extends React.Component {
    componentDidMount() {
        getPhotos().then(data => this.props.dispatch({
            type: 'GET_PHOTOS',
            data
          }))
    }

    // if (props.event === undefined) { return null; }
    render() {
        return (
            <div>
                <Image bordered size="medium" label={this.props.photo.comment} src={this.props.photo.source}/>
            </div>
        )
    }
}
export default connect()(SpotPhotoCard)