import React from 'react';

export default() => {
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
        <div className="carousel-item red white-text" href="#one!">
        <img src="https://source.unsplash.com/random" />
          <h2>First Panel</h2>
          <p className="white-text">This is your first panel</p>
        </div>
        <div className="carousel-item amber white-text" href="#two!">
        <img src="https://source.unsplash.com/random" />
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item green white-text" href="#three!">
        <img src="https://source.unsplash.com/random" />
          <h2>Third Panel</h2>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
        <img src="https://source.unsplash.com/random" />
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
      </div>
  
        </div>
    )
}