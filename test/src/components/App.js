import React from "react";

class Student extends React.Component {
    state = { roll : this.props.roll}

    
    onButtonClick = ()  => {
        console.log("Button clicked",this.state.roll )
        this.setState({ roll : 330})
    }

    render() {
        return (
            <div>
                Naame : {this.props.name}
                Roll : {this.state.roll}
<br/>
                <button onClick={this.onButtonClick}>Click Me</button>
            </div>

        );
    }
}


export default Student;
