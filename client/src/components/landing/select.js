import React from 'react';

export default({ image, title, description}) => {
    return(
        <div className="col s6 m4 l3">
        <div className="card">
          <div className="card-image" style={{ height: '200px', overflow: 'hidden' }}>
            <img src={image} alt="image" />
          </div>
          <div className="card-content">
          <span className="card-title"><small><b>{title}</b></small></span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href="/">This is a link</a>
          </div>
        </div>
      </div>   
    )
}