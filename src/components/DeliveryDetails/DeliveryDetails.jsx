import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";
import greenArrowCircle from '../../images/Green_Arrow_Circle.png';
import dropTruck from '../../images/ship_separately_truck.png';



class OrderInformation extends Component {
    constructor() {
        super();
        let today = new Date();
        today = today.setDate(today.getDate());
    }
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
    handleSelectDate = (event) => {
        this.setState({
            scheduledDate: event.target.value
        })
    }
    handleChangeCompanyName = (event) => {
        this.setState({
            companyname: event.target.value
        })
    }
    handleChangeAttention = (event) => {
        this.setState({
            attention: event.target.value
        })
    }
    handleChangeStreetAddress = (event) => {
        this.setState({
            streetAddress: event.target.value
        })
    }
    handleChangeAddressDetails = (event) => {
        this.setState({
            addressDetails: event.target.value
        })
    }
    handleChangeCityProvince = (event) => {
        this.setState({
            cityProvince: event.target.value
        })
    }
    handleChangePostalCode = (event) => {
        this.setState({
            postalCode: event.target.value
        })
    }
    handleChangeDeliveryInstruction = (event) => {
        this.setState({
            deliveryInstruction: event.target.value
        })
    }

    renderDeliveryAddress(resources) {
        return (
            <>
                <h3>{resources.deliveryAddress}</h3>

                <form>
                    <span id="delivery-details-indication" className="grey-text bold-text">
                        {resources.indication}
                    </span>
                    <div>
                        <span className="bold-text">{resources.companyName}</span>
                        <span>
                            <input type="text" value={this.state.companyName}
                                onChange={this.handleChangeCompanyName} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className="bold-text">{resources.attention}</span>
                        <input type="text" value={this.state.attention}
                            onChange={this.handleChangeAttention}></input>
                    </div>
                    <div>
                        <span className="bold-text">{resources.streetAddress}</span>
                        <span>
                            <input type="text" value={this.state.streetAddress}
                                onChange={this.handleChangeStreetAddress} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className="bold-text">{resources.addressDetails}</span>
                        <input type="text" value={this.state.addressDetails}
                            onChange={this.handleChangeAddressDetails}></input>
                    </div>
                    <div>
                        <span className="bold-text">{resources.cityProvince}</span>
                        <span>
                            <input type="text" value={this.state.cityProvince}
                                onChange={this.handleChangeCityProvince} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className="bold-text">{resources.postalCode}</span>
                        <span>
                            <input type="text" value={this.state.postalCode}
                                onChange={this.handleChangePostalCode} required></input>
                            {resources.required}
                        </span>
                    </div>
                    <div>
                        <span className="bold-text">{resources.deliveryInstruction}</span>
                        <span>
                            <input type="text" value={this.state.deliveryInstruction}
                                onChange={this.handleChangeDeliveryInstruction}></input>
                            <span className="delivery-details-message">{resources.message}</span>
                        </span>
                    </div>
                </form>
            </>
        )
    }

    renderButtons(resources) {
        return (
            <div className="delivery-details-buttons">
                <input type="button" className="return-to-cart-button" value={resources.returnToCart}></input>
                <input type="button" className="next-button blue-button" value={resources.next}></input>
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
                    <a href="#" className="delivery-option-link">{resources.learnMore}</a>
                </h3>

                <form>

                    <div>
                        <label>
                            <input
                                onChange={this.handleSelectDelivery}
                                className='type-delivery-form-radios'
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
                        <div id="use-as-default">
                            <label>
                                <input
                                    onChange={this.handleUseAsDefault}
                                    className='use-as-default-checkbox'
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
                                className='type-delivery-form-radios'
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
                        <div id="select-date">

                            <span className="bold-text">{resources.clickOnCalendar}</span>
                            <input
                                onChange={this.handleSelectDate}
                                className='selected-date'
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

                <div className="delivery-dates-line">
                    <img src={greenArrowCircle} alt="Green arrow circle" />
                    <span>{resources.deliveryDatesInfo}</span>
                </div>

                {this.state.isMultipleDeliveries && (
                    <>
                        <div className="delivery-dates-line">
                            <img src={greenArrowCircle} alt="Green arrow circle" />
                            <span>{resources.inStockOrder}</span>
                        </div>

                        <div className="delivery-dates-line">
                            <img src={dropTruck} alt="These products ship separately" />
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
            <div id="delivery-details-container">
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
export default OrderInformation;
