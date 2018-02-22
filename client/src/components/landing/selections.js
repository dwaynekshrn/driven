import _ from 'lodash';
import React, {Component} from 'react';
import Select from './select';

const UPCOMING = [
{key: 1, image: "https://source.unsplash.com/user/erondu/", title: "Event Name", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 2, image: "https://source.unsplash.com/daily", title: "Event Name", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 3, image: "https://source.unsplash.com/weekly", title: "Event Name", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 4, image: "https://source.unsplash.com/random", title: "Event Name", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."}
];

const PREVIOUS = [
{key: 1, image: "https://source.unsplash.com/collection/190727", title: "Previous Event", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 2, image: "https://source.unsplash.com/user/erondu/", title: "Previous Event", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 3, image: "https://source.unsplash.com/daily", title: "Previous Event", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 4, image: "https://source.unsplash.com/random", title: "Previous Event", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."}    
];

const LEADERS = [
{key: 1, image: "https://source.unsplash.com/user/taki/", title: "Event Leader", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 2, image: "https://source.unsplash.com/user/seanstratton/", title: "Event Leader", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 3, image: "https://source.unsplash.com/user/yamonf16/", title: "Event Leader", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
{key: 4, image: "https://source.unsplash.com/user/chrisjoelcampbell/", title: "Event Leader", description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."}    
];

class Selections extends Component{
upcomingEvents(){

const propsNum = this.props.number;
if(propsNum === 1){
   return _.map(UPCOMING, ({key, image, title, description }) => {
       return <Select key={key} image={image} title={title} description={description} />
   })
} else if(propsNum === 2){
    return _.map(PREVIOUS, ({key, image, title, description }) => {
        return <Select key={key} image={image} title={title} description={description} />
    })
 } else {
    return _.map(LEADERS, ({key, image, title, description }) => {
        return <Select key={key} image={image} title={title} description={description} />
    })
 }
}
 render(){
    return(
        <div className="container-fluid">
           <h5 style={{marginLeft: '20px'}}>{this.props.heading}</h5>
           <div className="row">
  
           {this.upcomingEvents()}   
           
           </div>
        </div>
    )
 }
}

export default Selections;