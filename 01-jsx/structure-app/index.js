class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="John"  
                    from="Paul" 
                    bangs={3}
                    img="https://images.unsplash.com/photo-1580142866493-e39b5656f409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                />                
                <NumPicker />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))