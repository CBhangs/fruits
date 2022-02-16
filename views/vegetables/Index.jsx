const React = require('react')

class Index extends React.Component {
    render(){
        const vegetables = this.props.vegetables  
        return (
            <div>
                <h1>This is the Index Page of My Beautiful Collection of Vegetables</h1>
                <nav>
                    <a href='/vegetables/new'>Go to new page</a>
                </nav>
                <ul>
                {
                    vegetables.map((veggie, i) => {
                        return (
                            <li><a href={`/vegetables/${i}`}>{veggie.name}</a> is the color of {veggie.color}</li>
                        )
                    })
                }
                </ul> 
            </div>
        )
    }
}


module.exports = Index;