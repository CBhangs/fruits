const React = require('react');

class Show extends React.Component {
    render(){
        const veggie = this.props.veggie;
        return (
            <div>
                <h1>This is the Show Page for {veggie.name.toUpperCase()} </h1>
                <a href="/vegetables">Go Back to the index</a>
                <p>{veggie.name} is the color of {veggie.color}</p>
                <p>The {veggie.name} is {veggie.readyToEat? 'ready to eat' : 'not ready to eat... Can\'t touch this'}</p>
            </div>
        );  
    }
}

module.exports = Show;