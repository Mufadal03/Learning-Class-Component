import React from "react"
import axios from "axios"
class Counter extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 1,
            data:[]
        }
        this.handleClick = this.handleClick.bind(this)
        this.FetchFn=this.FetchFn.bind(this)
    }
    handleClick() {
        this.setState((prev) => ({
            count:prev.count+1
        }))
        console.log(this.state.data)
    }
    
    async FetchFn() {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            this.setState({
                data:[...data]
            })
            console.log(data)
        } catch (e) {
            console.log(e)
        }        
    }
    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
                <p>{this.props.statement}</p>
                <button onClick={this.FetchFn}>FETCH TODOS</button>
                {
                    this.state.data.length > 0 && this.state.data.map((t) => <h1>{ t.title}</h1>)
                }
            </>
        )
    }
}

export default Counter