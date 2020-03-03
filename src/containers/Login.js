import React from "react";
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {Password} from 'primereact/password';
import {InputText} from "primereact/inputtext";
import {login, registration, setAnswer, setLogin} from "../actions/userActions";

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.props.setAnswer("");
        this.justLogin = this.justLogin.bind(this);
        this.justRegister = this.justRegister.bind(this);
    }

    justLogin(e){
        this.props.setAnswer("");
        let login = document.getElementById("login").value.trim();
        let password = document.getElementById("password").value.trim();
        if (login === null || login === ""){
            this.props.setAnswer("Please, write your login.")
        }else if(password === null || password === ""){
            this.props.setAnswer("Please, write your password.")
        }else{
            let info = {
                username: login,
                password: password
            };
            this.props.login(info);
        }
    }

    justRegister(e){
        this.props.setAnswer("");
        let login = document.getElementById("login").value.trim();
        let password = document.getElementById("password").value.trim();
        if (login === null || login === ""){
            this.props.setAnswer("Please, write your login.")
        }else if(password === null || password === ""){
            this.props.setAnswer("Please, write your password.")
        }else{
            let info = {
                username: login,
                password: password
            };
            this.props.registration(info);
        }
    }

    render() {
        const {style, user} = this.props;
        return(
            <div style={style.style.loginField.align}>
                <br/>
                <InputText placeholder=" Login" style={style.style.loginField.login} maxLength={20} id={"login"}/>
                <br/>
                <br/>
                <Password placeholder=" Password" maxLength={10} id={"password"} style={style.style.loginField.register}/>
                <div className={"userAnswer"} style={style.style.loginField.userAnswer}>
                    {user.userAnswer === "" ? <br/> : user.userAnswer}
                </div>
                <table width="100%" style={style.style.loginField.tableBut}>
                    <tr>
                        <td width='50%'>
                            <Button label="Login" style={style.style.loginField.loginButton}  onClick={this.justLogin}/>
                        </td>
                        <td width='50%'>
                            <Button label="Register" style={style.style.loginField.registerButton} onClick={this.justRegister}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

const mapStateToProps = store =>{
    return{
        user: store.user,
        style: store.style
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        setLogin: info => dispatch(setLogin(info)),
        setAnswer: userAnswer => dispatch(setAnswer(userAnswer)),
        registration: butch => dispatch(registration(butch)),
        login: butch => dispatch(login(butch)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
