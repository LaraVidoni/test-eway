import React, { Component } from "react";
import messages from "./messages";
import "./styles.scss";


class DeliveryDetails extends Component {

    state = {
        isStandardDelivery: false,
        isScheduledDelivery: false,
        isUseAsDefault: false,
        isMultipleDeliveries: false,
        showDeliveryOptions: true,
        showDeliveryDates: true,
        companyName: "test",
        attention: "test",
        streetAddress: "test",
        addressDetails: "test",
        cityProvince: "test",
        postalCode: "test",
        deliveryInstruction: "test",
        typeDelivery: undefined,
        scheduledDate: "aaaa-mm-jj"
    }

    handleSelectDelivery = (event) => {
        this.setState({
            isStandardDelivery: event.target.value === "Standard",
            isScheduledDelivery: event.target.value === "Scheduled"
        })
    }
    handleUseAsDefault = () => {
        this.setState({
            isUseAsDefault: !this.state.isUseAsDefault
        })
    }
    onChange = (e) => {
        const {
            target: { value, name },
        } = e;

        this.setState({
            [name]: value
        });
    }

    renderDeliveryAddress(resources) {
        return (
            <>
                <h3>{resources.deliveryAddress}</h3>

                <form>
                    <span className={`${styles["delivery-details-indication"]} ${styles.grey-text}
                     ${styles.bold-text}`}>
                        {resources.indication}
                    </span>
                    <div>
                        <span className={styles["bold-text"]}>{resources.companyName}</span>
                        <span>
                            <input type="text" value={this.state.companyName}
                                name="companyName" onChange={this.onChange} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.attention}</span>
                        <input type="text" value={this.state.attention}
                            name="attention" onChange={this.onChange}></input>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.streetAddress}</span>
                        <span>
                            <input type="text" value={this.state.streetAddress}
                                name="streetAddress" onChange={this.onChange} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.addressDetails}</span>
                        <input type="text" value={this.state.addressDetails}
                            name="addressDetails" onChange={this.onChange}></input>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.cityProvince}</span>
                        <span>
                            <input type="text" value={this.state.cityProvince}
                                name="cityProvince" onChange={this.onChange} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.postalCode}</span>
                        <span>
                            <input type="text" value={this.state.postalCode}
                                name="postalCode" onChange={this.onChange} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className={styles["bold-text"]}>{resources.deliveryInstruction}</span>
                        <span>
                            <input type="text" value={this.state.deliveryInstruction}
                                name="deliveryInstruction" onChange={this.onChange}></input>
                            <span className={styles["delivery-details-message"]}>{resources.message}</span>
                        </span>
                    </div>
                </form>
            </>
        )
    }

    renderButtons(resources) {
        return (
            <div className={styles["delivery-details-buttons"]}>
                <input type="button" className={styles["return-to-cart-button"]} value={resources.returnToCart}></input>
                <input type="button" className={styles["next-button blue-button"]} value={resources.next}></input>
            </div>);
    }

    renderDeliveryOptions(resources) {
        let today = new Date();
        today = today.setDate(today.getDate());
        const today_string = (new Date(today)).toISOString().split('T')[0];

        return (
            <>
                <h3>
                    {resources.deliveryOptions}
                    <a href="#" className={styles["delivery-option-link"]}>{resources.learnMore}</a>
                </h3>

                <form>

                    <div>
                        <label>
                            <input
                                onChange={this.handleSelectDelivery}
                                className={styles['type-delivery-form-radios']}
                                type="radio"
                                label={resources.standardDelivery}
                                value="Standard"
                                name="type-delivery-form-radios"
                                id="type-delivery-form-radios"
                            />
                            {resources.standardDelivery}
                        </label>
                    </div>

                    {this.state.isStandardDelivery && (
                        <div className={styles["use-as-default"]}>
                            <label>
                                <input
                                    onChange={this.handleUseAsDefault}
                                    className={styles['use-as-default-checkbox']}
                                    type="checkbox"
                                    label={resources.useAsDefault}
                                    value={this.useAsDefault}
                                    name="use-as-default-checkbox"
                                    id="use-as-default-checkbox"
                                />
                                {resources.useAsDefault}
                            </label>
                        </div>
                    )}

                    <div>
                        <label>
                            <input
                                onChange={this.handleSelectDelivery}
                                className={styles['type-delivery-form-radios']}
                                type="radio"
                                label={resources.scheduledDelivery}
                                value="Scheduled"
                                name="type-delivery-form-radios"
                                id="type-delivery-form-radios"
                            />
                            {resources.scheduledDelivery}{this.state.isMultipleDeliveries && (resources.notApplicableDeliveredSeparately)}
                        </label>
                    </div>

                    {this.state.isScheduledDelivery && (
                        <div className={styles["select-date"]}>

                            <span className="bold-text">{resources.clickOnCalendar}</span>
                            <input
                                onChange={this.onChange}
                                className={styles['selected-date']}
                                name="scheduledDate"
                                type="date"
                                value={this.state.scheduledDate}
                                min={today_string}
                            />
                        </div>
                    )}

                </form>
            </>
        )
    }

    renderDeliveryDates(resources) {
        return (
            <>
                <h3>
                    {!this.state.isMultipleDeliveries && (resources.deliveryDates)}
                    {this.state.isMultipleDeliveries && (resources.multipleDeliveries)}
                </h3>

                <div className={styles["delivery-dates-line"]}>
                    <img src='/static/Green_Arrow_Circle.png' alt="Green arrow circle" />
                    <span>{resources.deliveryDatesInfo}</span>
                </div>

                {this.state.isMultipleDeliveries && (
                    <>
                        <div className={styles["delivery-dates-line"]}>
                            <img src='/static/Green_Arrow_Circle.png' alt="Green arrow circle" />
                            <span>{resources.inStockOrder}</span>
                        </div>

                        <div className={styles["delivery-dates-line"]}>
                            <img src='/static/ship_separately_truck.png' alt="These products ship separately" />
                            <span>{resources.deliveredSeparately}</span>
                        </div>
                    </>
                )}

            </>
        )
    }

    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];

        return (
            <div className={styles["delivery-details-container"]}>
                <h2>{resources.deliveryDetails}</h2>

                {this.renderDeliveryAddress(resources)}

                {this.state.showDeliveryOptions && (
                    this.renderDeliveryOptions(resources)
                )}

                {this.state.showDeliveryDates && (
                    this.renderDeliveryDates(resources)
                )}

                {this.renderButtons(resources)}
            </div>
        )
    }
}
export default DeliveryDetails;
