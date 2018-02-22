import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component{
  renderContent(){
    switch (this.props.auth){
      case null:
         return;
      case false:
         return (
           <div>
           <li><a href="/login">Login</a></li>
           <li><a href="/register">Register</a></li>
           </div>
          )
        
      default:
         return [
           <li key={1}><Payments /></li>,
           <li key={2} style={{ margin: '0 10px' }}>
             Credits: {this.props.auth.credits}
           </li>,
           <li key={3}><a href="/api/logout">Logout</a></li>
        ];
    }
  }
    render(){
        return(
            <nav>
            <div className="nav-wrapper blue-grey darken-4">
            <div className="container">
              <Link 
                 to={this.props.auth ? '/surveys' : '/'} 
                 className="brand-logo">DRIVEN</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
              </div>
            </div>
          </nav>
        )
    }
}

function mapToProps({ auth }){
  return { auth };
}

export default connect(mapToProps)(Header);