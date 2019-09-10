import React from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { getSpots } from '../services/backend'

class SpotCard extends React.Component {
    
    // componentDidMount() {
    //     getSpots().then(data => this.props.dispatch({
    //         type: 'GET_SPOTS',
    //         data
    //       }))
    // }

    render() {
        return (
            <div>
                <Card as={Link} to={`/spot/${this.props.id}`} raised={true}>
                    {/* <Card.Content>
                        <Image size='medium' placeholder='http://blogs.discovermagazine.com/imageo/files/2018/07/gulfoffinland_oli_2018199_CROP.jpg' wrapped ui={true} />
                    </Card.Content> */}
                    <Card.Content>
                        <Card.Header>
                            {this.props.name}
                        </Card.Header>
                        {/* <Card.Meta>
                                <span className='date'>Cohort(s): {this.props.user.cohorts}</span>
                            </Card.Meta> */}
                        {/* <Card.Description>
                                {this.props.user.bio}
                            </Card.Description> */}
                        {/* </Card.Content> */}
                        {/* <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                        </Card.Content> */}
                        {/* <Card.Content> */}


                        {/* <Button color='black' fluid style={{marginTop: '3em'}} as={Link} to={`/spot/${props.id}`}>{props.name}'s Detail Page</Button> */}
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default connect()(SpotCard)