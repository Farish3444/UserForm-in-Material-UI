import React, { Component } from 'react';
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';
import {List, ListItem} from 'material-ui/List';


export class Success extends Component {

    continue = e =>{
        e.preventDefault();
        //Processing the From and sending to the API
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="SUCCESSFULLY REGISTERED"></AppBar>
                    <h1>Thank you for the Registration</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success;
