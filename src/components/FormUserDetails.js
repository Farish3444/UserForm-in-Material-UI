import React, { Component } from 'react';
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';



export class FormUserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="REGISTRATION FORM "></AppBar>
                    <TextField 
                        hintText="Enter the First Name"
                        floatingLabelText='First Name'
                        onChange={handleChange('FirstName')}
                        defaultValue={values.FirstName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter the Last Name"
                        floatingLabelText='Last Name'
                        onChange={handleChange('LastName')}
                        defaultValue={values.LastName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Email ID"
                        floatingLabelText='Email ID'
                        onChange={handleChange('Email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue} 
                     />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails
