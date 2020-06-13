import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//class based component
class App extends React.Component {
    state = { lat : null, errorMessage : ''};

    // method 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState( { lat: position.coords.latitude } ), // success callback

            (err) => this.setState( {errorMessage : err.message}) // err callback
        ); 
    }

    // what content to render
    render() {
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat ={this.state.lat}/> // passing state latitude in child 
        }

        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }

        return <Spinner message="Please accept location request"/>;
    }
}


ReactDom.render(<App/>, 
    document.querySelector('#root')
)