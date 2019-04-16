import React, { Component } from "react";
import messages from "./messages";
import "./styles.scss";


class OrderConfirmation extends Component {
    state = {
        orderNumberOne: "EW76946663",
        orderNumberTwo: "EW24545964",
        email: "Maxime.Larichelliere@Staples.com",
        isDoubleOrder: false,
        isSpecialOrder: false,
    }

    renderNumberOrder() {
        let language = this.props.language || 'en';
        let resources = messages[language];

        if (this.state.isSpecialOrder) {
            return this.renderSpecialOrder(resources)
        } else {
            if (this.state.isDoubleOrder) {
                return this.renderDoubleOrder(resources)
            }
            else {
                return (
                    <div className={styles["line-order-confirmation line-order-number"]}>
                        <span>{resources.orderBeginning} {this.state.orderNumberOne} {resources.orderEnding}</span>
                    </div>
                )
            }
        }
    }

    renderDoubleOrder(resources) {
        return (
            <div className={styles["line-order-confirmation line-order-number"]}>
                <span>{resources.orderBeginningDouble} {this.state.orderNumberOne} {resources.and} {this.state.orderNumberTwo} {resources.orderEndingDouble}</span>
            </div>
        );
    }

    renderSpecialOrder(resources) {
        return (
            <div className={styles["line-order-confirmation line-order-number"]}>
                <span>{resources.orderSpecial}</span>
            </div>
        )
    }

    renderNotification(resources, email) {
        const mail = email;

        if (this.state.isSpecialOrder) {
            return (
                <div className={styles["line-order-confirmation"]}>
                    <span>{resources.notificationSpecial}</span>
                </div>
            )
        }
        else {
            return (
                <div className={styles["line-order-confirmation"]}>
                    <span>{resources.email} {mail}{resources.point}</span>
                </div>
            )
        }
    }

    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];

        return (
            <div className={styles["order-confirmation"]}>

                <h1 className={`${styles["red-text"]} ${styles.title}`}>{resources.thanks}</h1>

                {this.renderNumberOrder()}
                {this.renderNotification(resources, this.state.email)}

                <div className={`${styles["line-order-confirmation"]} ${styles.line-contact}`}>
                    <span>{resources.contact}</span>
                </div>

                <div className={styles["continue-btn"]}>
                    <input className={styles["grey-button"]} type="btn" value={resources.continue} readOnly></input>
                </div>
            </div>
        )
    }
}
export default OrderConfirmation;
