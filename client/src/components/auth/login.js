import React from 'react';
   
export default() => {
    return (
      <div className="container">
        <form action="/auth/login" method="post">
        <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_box</i>
          <input id="icon_prefix" type="text" name="username" placeholder="Username" />
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">assignment</i>
          <input id="icon_password" type="password" name="password" placeholder="Password" />
        </div>

        <a href="/register" className="btn-flat grey lighten-3 left">Register</a>
        <button type="submit" className="btn-flat red white-text right">Login</button>
        <a href="/auth/google" className="btn-flat red lighten-2 white-text right">Google Login</a>
        </div>
        </form>
      </div>
            
    )
}