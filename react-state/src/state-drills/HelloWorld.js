import React from 'react';


class HelloWorld extends React.Component {
    state= {
       who: 'world!'
    };

    handleClick = (string) => {
       this.setState({
           who: string 
       }) ;
    };

    render() {
        return (
            <div className= 'hello-container'>
                <div>
                    <button onClick = {() => this.handleClick('friend!')}>
                        Friend
                    </button>
                    <button onClick = {() => this.handleClick('React!')}>
                        React
                    </button>
                    <button onClick = {() => this.handleClick('world!')}>
                        World
                    </button>
                </div>
                <p>Hello, {this.state.who}</p>
            </div>
        )
    }
}

export default HelloWorld;