import React, { Component } from 'react'
import { Grid, Col, Row, PageHeader, Button, ControlLabel } from 'react-bootstrap'
import TraingroundForm from '../components/trainground_form'

class TraingroundNew extends Component {
    constructor(props) {
        super(props)
        this.state = { trainground: props.trainground || {} }
    }

    submit = (e) => {
        e.preventDefault()
        let { trainground } = this.state
        if(!trainground.traingroundName) return alert("Give your Trainground a name") 
        if(!trainground.address) return toast("Please enter the address") 
        if(!trainground.city) return toast("Please enter the city") 
        if(!trainground.sport) return toast("Please enter the type of sports you can do there")
        this.props.onSubmit(trainground)
    }

    handleChange = (e) => { this.setState({ trainground: { ...this.state.trainground, [e.target.name]: e.target.value }}) }

    render(){
        let { trainground } = this.state
        let { edit } = this.props
        
        return(
            <div>
                <div className="grey-background">
                    <Grid>
                        <Row className="white-text full-height">
                            <Col md={3}></Col>
                            <Col md={6}>
                                { !edit &&
                                    <PageHeader className="grey-text">Add a New Trainground</PageHeader>
                                }
                                { edit &&
                                    <PageHeader className="grey-text">Edit your Trainground</PageHeader>
                                }
                                <form onSubmit={this.submit}>
                                    <TraingroundForm name="city" label="City" placeholder="Enter the city" onChange={this.handleChange} value={trainground.city} />
                                    <TraingroundForm name="address" label="Address" placeholder="Enter the address" onChange={this.handleChange} value={trainground.address} /> 
                                    <TraingroundForm name="traingroundName" label="Trainground Name" placeholder="How is this place called?" onChange={this.handleChange} value={trainground.traingroundName} />
                                    <TraingroundForm name="sport" label="Sport" placeholder="What can you do here? e.g. calisthenics, yoga, TRX..." onChange={this.handleChange} value={trainground.sport} />
                                    <TraingroundForm name="atmosphere" label="Atmosphere" placeholder="e.g. quiet, busy, children..." onChange={this.handleChange} value={trainground.atmosphere} /> 
                                    <TraingroundForm name="features" label="Features" placeholder="e.g. pullup bar, soft floor..." onChange={this.handleChange} value={trainground.features} />
                                    <TraingroundForm name="image" type="file" label="Image" />
                                    <div>
                                        <Button type="submit" id="button-margin-top-right" bsStyle="info">Submit</Button>
                                        <Button bsStyle="danger" id="button-margin-top-right" href="/trainground/popular">Cancel</Button>
                                    </div>
                                </form>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default TraingroundNew