import React from "react";
import { Formik, Form } from 'formik';
import {Link, Navigate} from 'react-router-dom';
import './Style.css';

export class RegistrationForm extends React.Component{ 
    constructor(props){
        super(props);
        this.initialValues = {
            fname:'',
            lname:'',
            userid:'',
            password:'',
            emailid:'',
            phone:'',
        }
    }
    validate = (values) => {
        const errors = {};
        if(!values.fname){
            errors.fname = '*Required';
        }
        if(!values.lname){
            errors.lname = '*Required';
        }
        if(!values.userid){
            errors.userid = '*Required';
        }
        if(!values.password){
            errors.password = '*Required';
        }
        if(!values.emailid){
            errors.emailid = '*Required';
        }
        if(!values.phone){
            errors.phone = '*Required';
        }
        return errors;
    }

    handleSubmit = (values) =>{
        alert(JSON.stringify(values,null, 2));
        
    }

    

    render(){
        return(
            <>
             <h1>Registration</h1>
            <div id="formid">
               
                <Formik initialValues={this.initialValues}
                       validate={values =>this.validate(values)}
                       onSubmit={(values)=> this.handleSubmit(values)}>

                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleCancel,
                        isSubmitted,

                    }) =>
                    (
                        <Form >
                            <table border="0" align="center">
                            <tbody>
                            
                            <tr>
                            <td><label for='fname'>First Name</label></td>
                            <td><input type="text" id="fname" name="fname" value={values.fname} onChange={handleChange} ></input></td>
                            <td><span>{errors.fname && touched.fname && errors.fname}</span> </td>
                            </tr>

                            <tr>
                            <td><label for='lname'>Last Name</label></td>
                            <td><input type="text" id="lname" name="lname" value={values.lname} onChange={handleChange}></input></td>
                            <td><span>{errors.lname && touched.lname && errors.lname}</span></td>
                            </tr>

                            <tr>
                            <td><label for='userid'>User Id</label></td>
                            <td><input type="text" id="userid" name="userid" value={values.userid} onChange={handleChange}></input></td>
                            <td><span>{errors.userid && touched.userid && errors.userid}</span></td>
                            </tr>

                            <tr>
                            <td><label for='password'>Password</label></td>
                            <td><input type="text" id="password" name="password" value={values.password} onChange={handleChange}></input></td>
                            <td><span>{errors.password && touched.password && errors.password}</span></td>

                            </tr>

                            <tr>
                            <td><label for='emailid'>Email Id</label></td>
                            <td><input type="text" id="emailid" name="emailid" value={values.emailid} onChange={handleChange}></input></td>
                            <td><span>{errors.emailid && touched.emailid && errors.emailid}</span></td>

                            </tr>

                            <tr>
                            <td><label for='phone'>Phone</label></td>
                            <td><input type="text" id="phone" name="phone" value={values.phone} onChange={handleChange}></input></td>
                            <td><span>{errors.phone && touched.phone && errors.phone}</span></td>
                            </tr>

                            <tr>
                            <td><button type="submit" class="btn1" onClick={handleSubmit}>REGISTER</button></td>
                            <td><button type="reset" class="btn2">CANCEL</button></td>
                            </tr>
                            </tbody>
                           </table>
                        </Form>
                       
                    )

                }

                </Formik>               
            </div>
                           <div>
                            Already Registered?<br></br><Link to='/login'>Login Here</Link> 
                            </div>
                </>
        )
    }
}

export default RegistrationForm;