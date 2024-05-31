import React from "react"
import '../../UI/Styles/card.css'


import image1 from '../../../Assets/pexels-madebymath-331684.jpg';



const Card=(props)=>{
    return(
        <React.Fragment>
           <div className="outer-card-holder">
            <div className="inner-card-holder">
                <div className="image-card-holder">
                    <img src={image1} alt="alt" className="image-card" />
                </div>
                <div className="bottom-card-holder">
                  <div className="title-card-holder">
                    <h3 className="title-card">{props.item.name}</h3>
                  </div>
                  <div className="description-card-holer">
                    <p className="description-card">{props.item.description}</p>
                  </div>
                </div>
            </div>
           </div>
        </React.Fragment>
    )
}


export default Card;