import React from 'react'
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: '',
            allowSearch: false
        }
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => {
            return res.json()
        }).then(robots => {
            this.setState({robots: robots})
            this.setState({allowSearch: true})
        })
    }

    render() {
        const {searchField, allowSearch, robots} = this.state
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField))

        return (
            <div className={`tc`}>
                <h1 className={`f2`}>Robot Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange} allowSearch={allowSearch}/>
                {!filteredRobots.length ? (<h1>Loading..</h1>) : (<Scroll>
                    <ErrorBoundary><CardList robots={filteredRobots}/></ErrorBoundary>
                </Scroll>)}
            </div>
        )
    }
}

export default App