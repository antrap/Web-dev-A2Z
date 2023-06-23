import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ContactCard from './components/contactCard'


function App() {
    return (
        <div>
            <ContactCard
                img={require("./Images/RRR.jpg")}
                name="RRR"
                rating="4.5"
            />
            <ContactCard
                img={require("./Images/mulk.jpg")}
                name="mulk"
                rating="4.3"
            />
            <ContactCard
                img={require("./Images/Highway.jpg")}
                name="Highway"
                rating="4.4"
            />
            <ContactCard
                img={require("./Images/Pathan.jpg")}
                name="Pathan"
                rating="4.1"
            />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))

