import React from "react"
import '../../UI/Styles/card.css'


import image1 from '../../../Assets/pexels-monoar-rahman-22660-109371.jpg';
import Button from "../../UI/Button/Button";



const Card=(props)=>{
  const handleClick=(e)=>{
     e.preventDefault();
     console.log("Clicked add")
  }
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
                    <h5 className="description-card">{props.item.description}</h5>
                  </div>
                  <Button type="button" className="button-card" onClick={handleClick} buttonName="ADD" />
                </div>
            </div>
           </div>
        </React.Fragment>
    )
}


export default Card;