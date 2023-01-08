import React from "react"
class Counter extends React.Component{
    constructor() {
        super()
        this.state = {
            count:1
        }
    }

    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button>Increment</button>
            </>
        )
    }
}

export default Counter