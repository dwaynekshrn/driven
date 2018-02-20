import React, { Component } from 'react';
import Selections from './landing/selections';
import Slider from './landing/slider';

class Landing extends Component{
  render(){
    return(
      <div>
      <Slider />
      <Selections />
      <Selections />
      <Selections />

      <div class="parallax-container">
      <div class="parallax"><img src="https://source.unsplash.com/random" /></div>
    </div>

    </div>
    )
  }
}

export default Landing;