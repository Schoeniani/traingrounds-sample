import  React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import TraingroundNew from '../components/trainground_new'
import { editTrainground, fetchOneTrainground } from '../actions/index_actions'

class TraingroundEditContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, error: null }
    }

    async componentDidMount() {
        if(!this.props.trainground)
        {
            try {
                await this.props.fetchOneTrainground(this.props.match.params.id)
            } 
            catch(e) {
                this.setState({error: 'Loading Traingrounds has failed!'})
            }
        }
        this.setState({loading: false})
    }

    onSubmit = async (values) => {
        await this.props.editTrainground(this.props.match.params.id, values)
        this.props.history.push('/trainground/popular')
    }

    render() { 
        const loading = this.state.loading
        const error = this.state.error

        return (
            <div>
            {!loading && error &&
                <div>ERROR!!!</div>
            } 
            {loading && !error &&
                <div>LOADING!!!</div>
            } 
            {!loading && !error &&
                <TraingroundNew trainground={this.props.trainground} edit={true} onSubmit={this.onSubmit} />
            }
            </div>
        )
    }
}

function mapStateToProps({ traingrounds }, ownProps){
    return { trainground: traingrounds.map[ownProps.match.params.id] }
}

function mapDispatchToProps(dispatch) {  
    return {  
        editTrainground: (id, values) => dispatch(editTrainground(id, values)),
        fetchOneTrainground: (id) => dispatch(fetchOneTrainground(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TraingroundEditContainer)