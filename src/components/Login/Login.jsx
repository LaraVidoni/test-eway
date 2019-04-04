import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";

class Login extends Component {
    state = {
        showDetails: false,
        user: "",
        password: "",
        saveUser: false
    }

    showDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails,
        })
    };
    handleChangeUser = (event) => {
        this.setState({
            user: event,
        })
    }
    handleChangePassword = (event) => {
        this.setState({
            password: event,
        })
    }
    handleChangeSave = () => {
        this.setState({
            saveUser: !this.state.saveUser,
        })
    }
    handleSubmit = (event) => {

    }
    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];
        const css = this.state.showDetails ? '' : 'hidden';

        return (
            <>
                <div id="login-background-shade" className={css} onClick={this.showDetails}></div>
                <div id="login-box-container">
                    <div id="login-box-container-top">
                        <div>
                            <input type="button" id="login-button" value={resources.login}
                                onClick={this.showDetails} />
                            <div className="triangle-down" onClick={this.showDetails}></div>
                        </div>
                        <div id="login-box-arrow" className={css}>
                            <div className="triangle-up"></div>
                        </div>
                    </div>

                    {this.state.showDetails && (
                        <div className="credential-box">
                            <div className="table-login-container">
                                <div id="close" onClick={this.showDetails}>
                                    <span>×</span>
                                </div>

                                <div id="details-login">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="line-user">
                                            <span>{resources.userId}</span>
                                            <input type="text" onChange={this.handleChangeUser} />
                                        </div>

                                        <div className="line-password">
                                            <span>{resources.password}</span>
                                            <input type="password" onChange={this.handleChangePassword} />
                                        </div>

                                        <div>
                                            <input name="saveUserID" type="checkbox" checked={this.state.saveUser} onChange={this.handleChangeSave} />
                                            <span>{resources.saveUser}</span>
                                        </div>

                                        <div>
                                            <input type="submit" id="login-submit" value={resources.login} />
                                        </div>
                                    </form>

                                    <div id="login-details-links">
                                        <a href="#">{resources.forgot}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
        )
    }
}
export default Login;
