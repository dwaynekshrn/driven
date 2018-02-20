import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';

const Dashboard = () => {
    return(
        <div>
        <SurveyList/>
        <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">chat_bubble</i>
        </Link>
      </div>
            
        </div>
    )
}

export default Dashboard;