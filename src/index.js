import React from "react"
import ReactDOM from "react-dom"

import Header from "./Header"
import Greeting from "./Greeting"

class App extends React.Component {
    render () {
        return (
            <div>
                <Header 
                    username = "Alberto"
                />
                <Greeting />
             </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
