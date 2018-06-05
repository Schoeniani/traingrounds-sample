import  React, { Component } from 'react'
import { editTrainground, fetchOneTrainground } from '../actions/index_actions'
import { FormControl, ControlLabel } from 'react-bootstrap'

class TraingroundForm extends Component {
    render(){
        return(
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type={this.props.type || 'text'} name={this.props.name} placeholder={this.props.placeholder} 
                    value={this.props.value} onChange={this.props.onChange}/> 
            </div>
        )
    }
}

export default TraingroundForm
