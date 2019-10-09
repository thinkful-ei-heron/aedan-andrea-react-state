import React from 'react';

export default class Accordion extends React.Component {

    state = {
        active: null
    };

    handleClick(index) {
        this.setState({
            active: index
        });
    }

    render () {
        let sectionArray = this.props.sections.map((item, index) => {
            return (
                <li key = {index}>
                    <button onClick = {() => this.handleClick(index)}>{item.title}</button>
                    {this.state.active === index ? <p>{item.content}</p> : null}
                </li>
            );
        });
        return (
            <ul>
                {sectionArray}
            </ul>
        );
    }
}