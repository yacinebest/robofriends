import { Component } from "react";

    
class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state={
            hasErrors: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasErrors:true})
    }

    render(){
        if(this.state.hasErrors)
            return <h1>Ooops!</h1>
        else
            return this.props.children;
    }
}

export default ErrorBoundry;