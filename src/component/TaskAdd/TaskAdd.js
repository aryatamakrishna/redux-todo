import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../actions/';

class TaskAdd extends Component {
    haha(e){
        console.log(this.props.addTask(this.refs.taskFill.value))
    }
    render(){
        return (
            <div className="search-tab">
                <input type="text" ref="taskFill" />
                <button onClick={(e)=>this.haha(e)}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    bindActionCreators({addTask}, dispatch);
}

export default connect(()=>{}, mapDispatchToProps)(TaskAdd);