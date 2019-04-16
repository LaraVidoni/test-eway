import React, { Component } from "react";
import messages from "./messages";
import "./styles.scss";

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
    onChange = (e) => {
        const {
            target: { value, name },
        } = e;

        this.setState({
            [name]: value
        });
    }
    handleChangeSave = () => {
        this.setState({
            saveUser: !this.state.saveUser,
        })
    }
    handleSubmit = (event) => {
        /**TODO */
    }
    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];
        const css = this.state.showDetails ? '' : 'hidden';

        return (
            <>
                <div className={`${styles["login-background-shade"]} ${styles.css}`} onClick={this.showDetails}></div>
                <div className={styles["login-box-container"]}>
                    <div className="login-box-container-top">
                        <div>
                            <input type="button" className={styles["login-button"]} value={resources.login}
                                onClick={this.showDetails} />
                            <div className={styles["triangle-down"]} onClick={this.showDetails}></div>
                        </div>
                        <div className={`${styles["login-box-arrow"]} ${styles.css}`}>
                            <div className={styles["triangle-up"]}></div>
                        </div>
                    </div>

                    {this.state.showDetails && (
                        <div className={styles["credential-box"]}>
                            <div className={styles["table-login-container"]}>
                                <div className={styles["close"]} onClick={this.showDetails}>
                                    <span>×</span>
                                </div>

                                <div className={styles["details-login"]}>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className={styles["line-user"]}>
                                            <span>{resources.userId}</span>
                                            <input type="text" name="user" onChange={this.onChange} />
                                        </div>

                                        <div className={styles["line-password"]}>
                                            <span>{resources.password}</span>
                                            <input type="password" name="password" onChange={this.onChange} />
                                        </div>

                                        <div>
                                            <input name="saveUserID" type="checkbox"
                                                checked={this.state.saveUser}
                                                onChange={this.handleChangeSave} />
                                            <span>{resources.saveUser}</span>
                                        </div>

                                        <div>
                                            <input type="submit" className={styles["login-submit"]} value={resources.login} />
                                        </div>
                                    </form>

                                    <div className={styles["login-details-links"]}>
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
