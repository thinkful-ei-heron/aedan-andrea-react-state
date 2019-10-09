import React from 'react'

export default class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    };

handleClick = () => {
    this.setState({
        spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
        let randomNum= Math.ceil(Math.random() * 8)

        this.setState({
            chamber: randomNum,
            spinningTheChamber: false,
        })
    }, 2000)
}

renderParagraph() {
    if(this.state.spinningTheChamber === true){
        return 'spinning the chamber and pulling the trigger!'
    } else if(this.state.chamber === this.props.bulletInChamber){
        return 'BANG!!!!'
    } else {
        return "you're safe!"
    }
}

    render() {
        return(
            <div>
                <button onClick= {this.handleClick}>
                    Pull the trigger!
                </button>
                <p>{this.renderParagraph()}</p>
            </div>
        )
    }
}

RouletteGun.defaultProps= {bulletInChamber: 8};