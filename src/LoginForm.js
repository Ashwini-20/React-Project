import React from "react";
import { Formik , Form} from "formik";
import './Style.css';
import SearchOrganization from "./SearchOrganization";
import { Link, Navigate, useNavigate} from "react-router-dom";

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.initialValues = {
            userid:'',
            password:'',
        }
        this.islogged = false;

    
    }
    
    validate = (values) => {
        const errors = {};
        if(!values.userid){
            errors.userid = '*Required';
        }
        if(!values.password){
            errors.password = '*Required';
        }
        return errors;
    }
    
    handleLogin = (values) =>{
        /*alert(JSON.stringify(values,null,2));  
       /* this.islogged = true;
        
         {
            this.islogged && <SearchOrganization/>
         }*/
         return <Navigate to = "/homepage"/>;
        
    }


    render(){
        return(
            <>
            <h1>Login</h1>
            <Formik initialValues = {this.initialValues}
                    validate = { values => this.validate(values)}
                    onSubmit={(values)=> this.handleLogin(values)}>

            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                }) => (
                    <Form>
                        <table border="0" align="center">
                        <tbody>
                        
                        <tr>
                        <td><label for='userid'>User Id</label></td>
                        <td><input type="text" id="userid" name="userid" value={values.userid} onChange={handleChange} ></input></td>
                        <td><span>{errors.userid && touched.userid && errors.userid}</span></td>

                        </tr>

                        <tr>
                        <td><label for='password'>Password</label></td>
                        <td><input type="text" id="password" name="password" value={values.password} onChange={handleChange} ></input></td>
                        <td><span>{errors.password && touched.password && errors.password}</span></td>

                        </tr>

                        <tr>
                        <td><button type="submit" class="btn3">LOGIN</button></td>
                        <td><button type="reset" class="btn4">CANCEL</button></td>
                        </tr>

                        </tbody>
                        </table>
                    </Form>
                )
            }
            </Formik>

                            <div>
                            New User?<br></br><Link to='/'>Register Here</Link> 
                            </div>
 
            </>
        )
    }
}


export default LoginForm;




