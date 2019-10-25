// import React from 'react'
// import './login.css';
// // import { Form, TextField, SubmitField } from 'react-components-form';
// // import { Form, Icon, Input, Button, Checkbox } from 'antd';
// class Login extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.formSubmit = this.formSubmit.bind(this);
//         this.state = {
//             username: '',
//             password: '',
//             // isLoaded:false
//         }
//     }
//     formSubmit = (event) =>  {
//         event.preventDefault();
//         // console.log(this.refs.user_name.value);
//         const data = {
//             "username": this.state.username,
//             "password": this.state.password,
//             "tenant": 83
//            }
//        fetch('https://api-preprod.blackbucklabs.com/gateway/api/v1/sessions/login',
//        {
//          method: 'post',
//          headers: {'Content-Type':'application/json'},
//          body: JSON.stringify(data)
//        }).then(response => {
//         response.json().then(res => {
//             localStorage.setItem(`loginDetails`, JSON.stringify(res))
//             this.props.history.push(`/list`)
//         })
//        }, err => {
//            console.log(err)
//        })
       
   
   
 
     
       
//     }
//     usernameChanged= (e) =>{
//         this.setState({
//             username: (e.target.value)
//         })
//     }
//     passwordChanged =(e) =>{
//         this.setState({
//             password: (e.target.value)
//         })
//     }
    
//     render() {
//         return(
//             <div>
//               <form onSubmit = {this.formSubmit} > 
//                <div className="container-wrapper">
//                     <input  onChange={this.usernameChanged} type="text" placeholder="enter user name" name="username" defaultValue = {this.state.username}></input>
//                     <input   onChange={this.passwordChanged} type="password" placeholder="enter password" name="password" defaultValue = {this.state.password}></input>
//                     <button type= "submit" className="button-wrpper">submit</button>
//                 </div>
//                </form> 
//             </div>
//         )
//     }
// }

// export default Login






import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  
  
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // this.props.form.validateFields();
    }

    submitLogin = (data) => {
        data.tenant = 83
        fetch('https://api-preprod.blackbucklabs.com/gateway/api/v1/sessions/login',
        {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response => {
            response.json().then(res => {
                localStorage.setItem(`loginDetails`, JSON.stringify(res))
                this.props.history.push(`/list`)
            })
        }, err => {
            console.log(err)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values) =>{
          if(!err){
            this.submitLogin(values)
          }
        });
        
    };
    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                Log in
              </Button>
            </Form.Item>
          </Form>
     
        )
    }
}
const Wrapperloginform = Form.create()(Login);
export default Wrapperloginform