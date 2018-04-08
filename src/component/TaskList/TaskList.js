import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskItem from '../TaskItem/TaskItem.js';
import TaskAdd from '../TaskAdd/TaskAdd.js';

class TaskList extends Component {

    render() {
        return(
            <div>
                <TaskAdd />
                <table border="1">
                    <thead>
                        <tr>
                            <th width="150px">Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)