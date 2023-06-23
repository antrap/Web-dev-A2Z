import React from 'react'
import ReactDOM from 'react-dom'

function ContactCard() {
    return (
        <div className='card'>
            <img src={require("./Images/RRR.jpg")} alt="RRR film" />

        </div>
    )
}

ReactDOM.render(<ContactCard />, document.getElementById("root"))

//document.getElementById("root").innerHTML = "Hello wolrd";