import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Bye'
    //     })
    // }
    

    clickHandler = () => {
        this.setState({
            message: 'Byee'
        })
    }
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
               {/* <button onClick={this.clickHandler.bind(this)}>ClickBind</button>*/}
               {/* <button onClick={() => this.clickHandler()}>ClickBind</button>*/}
               <button onClick={this.clickHandler}>ClickBind</button>
            </div>
        )
    }
}

export default EventBind
