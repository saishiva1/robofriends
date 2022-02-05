import React from 'react'
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import {setSearchField} from "../actions";
import {connect} from "react-redux";
import {requestRobots} from "../actions";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         robots: [],
    //         allowSearch: false
    //     }
    // }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        //     return res.json()
        // }).then(robots => {
        //     this.setState({robots: robots})
        //     this.setState({allowSearch: true})
        // })
        this.props.onRequestRobots()
    }

    render() {
        const {searchField, onSearchChange, robots, isPending, error} = this.props
        console.log('robots',this.props)
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField))
//Array.isArray(robots)?
        return (
            <div className={`tc`}>
                <h1 className={`f2`}>Robot Friends</h1>
                <SearchBox onSearchChange={onSearchChange} allowSearch={error===''&&!isPending}/>
                {isPending
                    ? (<h1>Loading..</h1>)
                    : (
                        <Scroll>
                            {error === '' && !isPending
                                ? <ErrorBoundary><CardList robots={filteredRobots}/></ErrorBoundary>
                                : <h2 style={{fontSize: '20px'}}>Oops! Something went wrong</h2>
                            }
                        </Scroll>
                    )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)