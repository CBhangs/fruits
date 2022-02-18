const React = require('react')

class Index extends React.Component {
    render(){
        const vegetables = this.props.vegetables 
        return (
            <div>
                <h1>This is the Index Page of My Beautiful Collection of Vegetables</h1>
                <nav>
                    <a href="/vegetables/new">Go to the new page</a>
                </nav>
                <ul>
                {
                    vegetables.map((veggie) => {
                        return (
                            <li key={`${veggie._id}`}><a href={`/vegetables/${veggie._id}`}>{veggie.name}</a> is the color of {veggie.color}</li>
                        )
                    })
                }
                </ul> 
            </div>
        )
    }
}


module.exports = Index;