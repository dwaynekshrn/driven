import React from 'react';

export default() => {
    return(
        <div className="row">
           <h5>Upcoming Events</h5>
           <div className="row">
           <div className="col s6 m3">
             <div className="card">
               <div className="card-image">
                 <img src="https://source.unsplash.com/random" />
               </div>
               <div className="card-content">
               <span className="card-title">Card Title</span>
                 <p>I am a very simple card. I am good at containing small bits of information.
                 I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                 <a href="#">This is a link</a>
               </div>
             </div>
           </div>

           <div className="col s6 m3">
           <div className="card">
             <div className="card-image">
               <img src="https://source.unsplash.com/random" />
             </div>
             <div className="card-content">
             <span className="card-title">Card Title</span>
               <p>I am a very simple card. I am good at containing small bits of information.
               I am convenient because I require little markup to use effectively.</p>
             </div>
             <div className="card-action">
               <a href="#">This is a link</a>
             </div>
           </div>
         </div>

         <div className="col s6 m3">
         <div className="card">
           <div className="card-image">
             <img src="https://source.unsplash.com/random" />
           </div>
           <div className="card-content">
           <span className="card-title">Card Title</span>
             <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           </div>
           <div className="card-action">
             <a href="#">This is a link</a>
           </div>
         </div>
       </div>

       <div className="col s6 m3">
       <div className="card">
         <div className="card-image">
           <img src="https://source.unsplash.com/random" />
         </div>
         <div className="card-content">
         <span className="card-title">Card Title</span>
           <p>I am a very simple card. I am good at containing small bits of information.
           I am convenient because I require little markup to use effectively.</p>
         </div>
         <div className="card-action">
           <a href="#">This is a link</a>
         </div>
       </div>
     </div>
               
           </div>
        </div>
    )
}