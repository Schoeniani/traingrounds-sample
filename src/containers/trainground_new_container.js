import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { createTrainground } from '../actions/index_actions'
import TraingroundNew from '../components/trainground_new'


class TraingroundNewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onSubmit = async (values) => {
        await this.props.createTrainground(values)
        this.props.history.push('/trainground/popular')
    }

    render() {
        return (
            <TraingroundNew onSubmit={this.onSubmit} />
        )
    }
}

function mapDispatchToProps(dispatch) {  
  return { createTrainground: (values) => dispatch(createTrainground(values)) }
}

export default connect(null, mapDispatchToProps)(TraingroundNewContainer)