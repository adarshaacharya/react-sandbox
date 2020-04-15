import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component {
    state = { text : ''};

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text : this.state.text,
            complete : false
        });

        this.setState({
            text : ""
        })
    }
 
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>    
        )
    }
}

export default TodoForm;