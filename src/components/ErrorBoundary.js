import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }
componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    console.log(error,errorInfo)
}

    render() {
        if(this.state.hasError){
            return (
                <h2 style={{fontsize:'10px'}}>Oops! Something went wrong</h2>
            )
        }

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;