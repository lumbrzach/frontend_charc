import React, { Component } from 'react'
import { Form, Container, Header, Modal, Button } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { connect } from 'react-redux'


class JournalForm extends Component {
    state = {
        spot_id: this.props.spot.id,
        date: '',
        description: '',
        pref_charc: '',
        quality: '',
        height: '',
        flow: ''
      };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleDateChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }

    handleRadioChange = (e) => {
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
            description: this.state.description,
            pref_charc: this.state.pref_charc,
            quality: this.state.quality,
            height: this.state.height,
            flow: this.state.flow
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
                    this.props.dispatch({ type: 'ADD_JOURNAL', data})
                    // window.location.replace(`http://localhost:3001/spot/${this.state.spot_id}`)
                }
            })
            .catch(message => alert(message))
    }
    

  render() {
    const { value } = this.state
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
                    name="description"
                    placeholder="Give us all the juicy details..."
                    label="Description"
                    value={this.state.start_date}
                    onChange={this.handleChange}
                />

                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label="Flow (CFS)"
                        name="flow"
                        value={this.state.flow}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Height (ft)"
                        name="height"
                        value={this.state.height}
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

                <Form.Group inline>
                    <label>Quality:</label>
                    <Form.Radio
                        label='Poor'
                        value='poor'
                        checked={value === 'poor'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Moderate'
                        value='moderate'
                        checked={value === 'moderate'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Great'
                        value='great'
                        checked={value === 'great'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Epic'
                        value='epic'
                        checked={value === 'epic'}
                        onChange={this.handleRadioChange}
                    />
                    <Form.Radio
                        label='Exploratory'
                        value='exploratory'
                        checked={value === 'exploratory'}
                        onChange={this.handleRadioChange}
                    />
                </Form.Group>

                <Form.Button color="black">Submit</Form.Button>
            </Form>
        </Container>
        </Modal>
    )
  }
}

export default connect()(JournalForm);