const React = require('react')
const Default = require('../layout/Default.jsx');

class Index extends React.Component {
    render(){
        const fruits = this.props.fruits   
        return (
            <Default title="Index Page" subhead="hello">
                 <div className ="myDiv">
                        <nav>
                            <a href="/fruits/new">Go to the new page</a>
                        </nav>
                        <ul>
                        {
                            fruits.map((fruit) => {
                                return (
                                    <li key={`${fruit._id}`}>
                                        <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is the color of {fruit.color}
                                        <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value={`DELETE ${fruit.name.toUpperCase()}`} />
                                        </form>
                                    </li>
                                )
                            })
                        }
                        </ul> 
                    </div>
            </Default>
        )
    }
}


module.exports = Index;