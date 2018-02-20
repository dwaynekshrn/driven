import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return(
          <div key={name}>
             <label>{label}</label>
             <div>{formValues[name]}</div>
          </div>
        );
    })
    return(
        <div className="container">
        <h5>Please confirm:</h5>
        <div>
         {reviewFields}
        </div>
        <button onClick={onCancel} className="btn-flat left grey darken-2 white-text">Back</button>
        <button onClick={() => submitSurvey(formValues, history)} className="btn-flat right black white-text">Send Survey <i className="material-icons right">email</i></button>
        
        </div>
    )
}

function mapStateToProps(state){
    return {
       formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));