import React from 'react'
// import JournalCard from '../components/JournalCard'
import { Segment, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SpotPhotoCard from '../components/SpotPhotoCard'

const PhotosContainer = (props) => {

    const spotPhotos = () => {
        return props.photos.filter((photo) => photo.spot_id === props.spotId)
    }

    return(
        // <div className='horizontalScroll'>
        //     {props.journals.map((journal) => <JournalCard claasName='card' {...journal}/>)}
        // </div>
        <Segment basic className='horizontalScroll' >
        <List horizontal>
            {spotPhotos().map((photo, i) => <List.Item key={i} display={'inline-block'}><SpotPhotoCard key={i} photo={photo}/></List.Item>)}
        </List>
        </Segment>
        // <Segment basic  >
        //     <Card.Group className='horizontalScroll'>
        //         {props.journals.map((journal, i) => <JournalCard  key={i} {...journal}/>)}
        //     </Card.Group> 
        // </Segment>
    )
}

const mapStateToProps = state => {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps)(PhotosContainer)