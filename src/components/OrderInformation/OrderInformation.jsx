import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";
import book from '../../images/book.png'


class OrderInformation extends Component {
    state = {
        firstName: "Test",
        name: "Test",
        creationDate: "4/2/2019",
        submittedDate: "4/2/2019",
        poNumber: "Test",
        costCenter: "BRIAN MISENER 826-BC",
        accountNo: 735450,
        deliveryInstruction: "Test",
        streetAddress: "Test",
        addressDetails: "Test",
        city: "bc",
        province: "bc",
        postalCode: "V6A2T4",
        isOnAccount: true,
        itemsList: [
            {
                quantityOrdered: 4,
                quantityShipped: 3,
                productNumber: "STP17866",
                description: "Staples Standard ",
                yourPrice: "1.80",
                total: "7.2",
                isInInventory: true,
                hasEnvironmentalFee: false,
                uom: "Box",
            },
            {
                quantityOrdered: 2,
                quantityShipped: 1,
                productNumber: "HGF17866",
                description: "Staples Standard ",
                yourPrice: "8.5",
                total: "17",
                isInInventory: true,
                hasEnvironmentalFee: true,
                uom: "Box",
            },
            {
                quantityOrdered: 1,
                quantityShipped: 1,
                productNumber: "OHL17866",
                description: "Staples Standard ",
                yourPrice: "11",
                total: "11",
                isInInventory: true,
                hasEnvironmentalFee: false,
                uom: "Each",
            }
        ],
        grandTotal: 0,
    }

    renderOrderInformation(resources) {
        return (
            <div id="render-order-information">

                <h3 className="order-information-title">{resources.orderInformation}</h3>

                <div className="order-information-elements">

                    <div className="left-block">
                        <div className="order-information-line">
                            <span className="bold-text">{resources.orderedBy}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.orderCreationDate}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.submittedDate}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.poNumber}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.costCenter}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.accountNo}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.deliveryInstruction}</span>
                        </div>
                    </div>

                    <div className="right-block">
                        <div className="order-information-line">
                            <span>{this.state.firstName} {this.state.name}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.creationDate}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.submittedDate}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.poNumber}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.costCenter}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.accountNo}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.deliveryInstruction}</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    renderBillingInformation(resources) {
        return (
            <div id="render-billing-information">

                <h3 className="order-information-title">{resources.billingInformation}</h3>

                <div className="order-information-elements">
                    {this.state.isOnAccount && (
                        <div className="order-information-line">
                            <span>{resources.billingInformationDetails}</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    renderDeliveryAddress(resources) {
        return (
            <div id="render-delivery-address">

                <h3 className="order-information-title">{resources.deliveryAddress}</h3>

                <div className="order-information-elements">

                    <div className="left-block">
                        <div className="order-information-line">
                            <span className="bold-text">{resources.name}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.streetAddress}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.addressDetails}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.cityProvince}</span>
                        </div>
                        <div className="order-information-line">
                            <span className="bold-text">{resources.postalCode}</span>
                        </div>
                    </div>

                    <div className="right-block">
                        <div className="order-information-line">
                            <span>{this.state.name}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.streetAddress}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.addressDetails}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.city},{this.state.province}</span>
                        </div>
                        <div className="order-information-line">
                            <span>{this.state.postalCode}</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    renderTable(resources, language) {
        return (
            <div id="render-table">
                <div className="first-line bold-text">
                    <span className="col-1">{resources.quantity}</span>
                    <span className="col-2">{resources.productNumber}</span>
                    <span className="col-3">{resources.description}</span>
                    <span className="col-4">{resources.yourPrice}</span>
                    <span className="col-5">{resources.uom}</span>
                    <span className="col-6">{resources.total}</span>
                </div>
                <div id="render-lines">
                    <RenderLinesTopTable lang={language} resources={resources} itemsList={this.state.itemsList} />
                </div>

                <div id="render-table-info"></div>
                <div id="render-table-total">
                    <RenderLinesBottomTable lang={language} resources={resources} />
                </div>

            </div>
        )
    }

    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];

        return (
            <div id="order-information-container">
                {this.renderOrderInformation(resources)}
                {this.renderBillingInformation(resources)}
                {this.renderDeliveryAddress(resources)}
                {this.renderTable(resources, language)}
            </div>
        )
    }
}
export default OrderInformation;

function RenderLinesTopTable(props) {
    const itemsList = props.itemsList;
    console.log(itemsList)
    const numberOfProducts = itemsList.length;
    const resources = props.resources;
    const lang = props.lang;
    var line = [];
    var css;

    for (let i = 0; i < numberOfProducts; i++) {

        if (i % 2 === 0) { css = "order-information-table-line"; }
        else { css = "order-information-table-line grey-background" }

        line.push(
            <div className={css} key={i}>
                <div className="order-information-table-line-normal">
                    <span className="order-information-table-quantity col-1">
                        <div className="order-information-table-quantity-order">
                            {resources.order} {itemsList[i].quantityOrdered}
                        </div>
                        <div className="order-information-table-quantity-ship">
                            {resources.ship} {itemsList[i].quantityShipped}
                        </div>
                    </span>

                    <span className="order-information-table-product-number col-2">
                        <div className="order-information-table-product-number-number">
                            {itemsList[i].productNumber}</div>
                        <div className="order-information-table-product-number-img">
                            <img src={book} alt="Book" /></div>
                    </span>

                    <span className="order-information-table-description col-3">
                        <div>{itemsList[i].description}</div>
                        {itemsList[i].isInInventory && (
                            <div>{resources.inInventory}</div>
                        )}
                    </span>

                    <span className="order-information-table-yourPrice col-4">
                        <Price amount={itemsList[i].yourPrice} lang={lang} />
                    </span>

                    <span className="order-information-table-uom col-5">
                        {itemsList[i].uom}
                    </span>

                    <span className="order-information-table-total col-6">
                        <Price amount={itemsList[i].total} lang={lang} />
                    </span>
                    </div>
                    {itemsList[i].hasEnvironmentalFee && (
                        <div className="order-information-table-line-special lightgrey-background">
                            <span className="order-information-table- col-1">
                                <div className="order-information-table-quantity-order">
                                    1
                            </div>
                            </span>

                            <span className="order-information-table-product-number col-2"></span>

                            <span className="order-information-table-description col-3">
                                {resources.environmentalFee} {itemsList[i].productNumber}
                        </span>

                            <span className="order-information-table-yourPrice col-4">
                                <Price amount={itemsList[i].yourPrice} lang={lang} />
                            </span>

                            <span className="order-information-table-uom col-5">
                                {itemsList[i].uom}
                            </span>

                            <span className="order-information-table-total col-6">
                                <Price amount={itemsList[i].total} lang={lang} />
                            </span>
                        </div>
                    )}
                </div>
            
        )
    } return line;
}

function RenderLinesBottomTable(props) {
    const resources = props.resources;
    const lang = props.lang;
    return (
        <>
            <div>
                <div>title</div>
                <div>price</div>
            </div>
        </>
    )
}


function Price(props) {
    return (
        <span>
            {props.lang === "en" ? "$" + props.amount : props.amount + "$"}
        </span>
    );
}
