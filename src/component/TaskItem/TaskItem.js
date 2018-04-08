import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../../actions/';

class TaskItem extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.taskName}</td>
                <td>
                    <a onClick={this.props.deleteTask(this.props.id)}>Del</a>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    bindActionCreators({ deleteTask }, dispatch);
}

export default connect(()=>{}, mapDispatchToProps)(TaskItem)