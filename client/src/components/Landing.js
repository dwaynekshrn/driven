import _ from 'lodash';
import React, { Component } from 'react';
import Selections from './landing/selections';
import Slider from './landing/slider';
import Paralax from './landing/paralax';

const SELECT = [
  {key: 1, heading: "Upcoming Events"},
  {key: 2, heading: "Previous Events"},
  {key: 3, heading: "Thought Leaders"}
]

class Landing extends Component{
  renderSelect(){
    return _.map(SELECT, ({key, heading}) => {
       return <Selections key={key} heading={heading} number={key} />
    });
  }
  render(){
    return(
      <div>
      <Slider />
      {this.renderSelect()}
      <Paralax />
    </div>
    )
  }
}

export default Landing;