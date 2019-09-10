import React, { Component } from 'react'
import { Form, Container, Header, Modal, Button, Select } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { connect } from 'react-redux'


class JournalForm extends Component {
    state = {
        spot_id: this.props.spot.id,
        date: '',
        explore_notes: '',
        pref_charc: '',
        quality: '',
        river_level: ''
      };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleDateChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }

    // handleRadioChange = (e) => {
    //     this.setState({
    //         quality: e.target.innerText
    //     })
    // }

    handleDropdownChange = (e) => {
        this.setState({
            quality: e.target.innerText
        })
    }

    handleCloseModal = e => {
        e.persist()
        this.props.closeJournalForm()
        this.handleSubmit()
    }

    handleSubmit = () => {

        const jwt = localStorage.jwt
        let journal = {
            spot_id: this.state.spot_id,
            date: this.state.date,
            explore_notes: this.state.explore_notes,
            pref_charc: this.state.pref_charc,
            quality: this.state.quality,
            river_level: this.state.river_level
        }

        fetch("http://localhost:3000/api/v1/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify({
                journal: journal
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert(data.message)
                }
                else {
                    console.log(data)
                    this.props.getAllData()
                    // window.location.replace(`http://localhost:3001/spot/${this.state.spot_id}`)
                }
            })
            .catch(message => alert(message))
    }
    

  render() {
    const { quality } = this.state
    const qualityOptions = [
        { key: '1', text: '1', value: '1' },
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
        { key: '5', text: '5', value: '5' },
        { key: '6', text: '6', value: '6' },
        { key: '7', text: '7', value: '7' },
        { key: '8', text: '8', value: '8' },
        { key: '9', text: '9', value: '9' },
        { key: '10', text: '10', value: '10' }
      ]
    return (
        <Modal onClose={this.props.closeJournalForm} open={this.props.showJournalForm} trigger={<Button color="black" onClick={() => this.props.revealJournalForm()}>Add a Journal Entry</Button>}>
        <Container style={{ marginTop: '1em', marginBottom: '1em', padding: '2em' }}>
            <Header>Add a Journal Entry</Header>
            <Form onSubmit={this.handleCloseModal}>
                
                <DateInput
                    name="date"
                    placeholder="Date"
                    iconPosition="left"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />

                <Form.TextArea
                    name="explore_notes"
                    placeholder="Give us all the juicy details..."
                    label="Notes"
                    value={this.state.explore_notes}
                    onChange={this.handleChange}
                />

                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label="River Level"
                        name="river_level"
                        value={this.state.river_level}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Preferred Charc"
                        name="pref_charc"
                        value={this.state.pref_charc}
                        onChange={this.handleChange}
                    />
                    
                </Form.Group>

                <Form.Field
                    control={Select}
                    options={qualityOptions}
                    label={{ children: 'Quality', htmlFor: 'form-select-control-quality' }}
                    placeholder='Quality'                        
                    search
                    value={this.state.quality}
                    searchInput={{ id: 'form-select-control-quality' }}
                    onChange={this.handleDropdownChange}
                />

                {/* <Form.Group inline>
                    <label>Quality:</label>
                    <Form.Radio
                        label='Poor'
                        value='poor'
                        checked={quality === 'Poor'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Moderate'
                        value='moderate'
                        checked={quality === 'Moderate'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Great'
                        value='great'
                        checked={quality === 'Great'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Epic'
                        value='epic'
                        checked={quality === 'Epic'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Exploratory'
                        value='exploratory'
                        checked={quality === 'Exploratory'}
                        onChange={this.handleRadioChange}
                    />
                </Form.Group> */}

                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
        </Modal>
    )
  }
}

export default connect()(JournalForm);