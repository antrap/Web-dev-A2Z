import React from 'react'


export default function ContactCard(props) {

    return (
        <div className='card'>
            <img src={props.img} alt="RRR film" className='image' />
            <div className='details'>
                <h2>{props.name}</h2>
                <p>Rating : {props.rating} <span className="fa fa-star checked"></span></p>

            </div>


        </div>
    )
}
// <img src={require("../Images/RRR.jpg")} alt="RRR film" className='image' />