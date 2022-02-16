const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>Hi This is the New Page</h1>
            <nav>
            <a href='/fruits'>Back To Fruits Index Page</a>
            </nav>
            {/*Hello Its me*/}
            <form action='/fruits' method='POST'>
               Name Here: <input name='name' type='text'/><br/>
               Enter Color: <input name='color' type='text'/><br/>
               Is Ready To Eat:  <input name='readyToEat' type='checkbox'/><br/>
                <input type='submit' value='Create a Fruit'/>
            </form>
        </div>
        )
    }
}

module.exports = New;