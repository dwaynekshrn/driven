import _ from 'lodash';
import React, {Component} from 'react';

const SLIDES = [
    {key: 1, alt: 'image', slide: "https://source.unsplash.com/user/erondu/1600x900"},
    {key: 2, alt: 'image', slide: "https://source.unsplash.com/collection/190727/1600x900"},
    {key: 3, alt: 'image', slide: "https://source.unsplash.com/daily/"},
    {key: 4, alt: 'image', slide: "https://source.unsplash.com/random/1600x900"}
]

class Slider extends Component{
    renderSlides(){
        return _.map(SLIDES, ({key, slide, alt}) => {
           return(
         <div key={key} className="carousel-item" href="#one!">
            <img src={slide} alt={alt} />
          </div>
           );
        });
    }

    render(){
    return(
        <div>
        <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
        <div className="container">
        <div className="input-field col s4">
        <input placeholder="Email Address" id="email_address" type="text" />
        <a className="btn waves-effect teal white-text">GET STARTED</a>
        </div>
        </div>
        </div>
        {this.renderSlides()}
 
      </div>
  
        </div>
    )
}

}

export default Slider;