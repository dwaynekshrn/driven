import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import {Link} from 'react-router-dom';
import formFields from './formFields';

class SurveyForm extends Component {
renderFields(){
    return _.map(formFields, ({label, name}) =>{
        return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    })
}
    render(){
        return(
            <div className="container">
            <h5>Send Survey</h5>
            <form className="col s12" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              <div className="row">
            {this.renderFields()}
              <Link to="/surveys" className="btn-flat left grey darken-2 white-text">Cancel</Link>
              <button  type="submit" className="btn-flat right black white-text">Next <i className="material-icons right">done</i></button>
              </div>
         
            </form>
          </div>
        )
    }
}

function validate(values){
   const errors = {};

   errors.emails = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
       if(!values[name]){
          errors[name] = 'You must provide a value';
       }
    });



   return errors;
}

export default reduxForm({
    validate,
    destroyOnUnmount: false,
    form: 'surveyForm'
})(SurveyForm);