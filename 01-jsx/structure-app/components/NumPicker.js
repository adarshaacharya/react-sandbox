function getRandomNumber() {
    return Math.floor(Math.random() * 10)
}


class NumPicker extends React.Component {
    render() {
        const num = getRandomNumber() 
        return ( 
            <div>
                <h1>Your number is ... {num}</h1>
                {
                    num === 1 && 
                        <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"/>     
                }
            </div>
        )
    }
}

