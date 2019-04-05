import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";
import catalogLogo from '../../images/cataloglogo.png'
import promo from '../../images/PromoLogoSmall.png'


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
                uom: "Box",
                isInInventory: true,
                hasFee: true,
                hasEnvironmentalFee: false,
                hasAssembly: true,
                listOfFees: [
                    {
                        yourPrice: "1.80",
                        total: "7.2",
                        uom: "Box",
                    }
                ]
            },
            {
                quantityOrdered: 2,
                quantityShipped: 1,
                productNumber: "HGF17866",
                description: "Staples Standard ",
                yourPrice: "8.5",
                total: "17",
                isInInventory: true,
                hasFee: true,
                hasEnvironmentalFee: true,
                uom: "Box",
                listOfFees: [
                    {
                        yourPrice: "1.80",
                        total: "7.2",
                        uom: "Box",
                    }
                ]
            },
            {
                quantityOrdered: 1,
                quantityShipped: 1,
                productNumber: "OHL17866",
                description: "Staples Standard ",
                yourPrice: "11",
                total: "11",
                isInInventory: true,
                hasFee: true,
                hasEnvironmentalFee: false,
                uom: "Each",
                listOfFees: [
                    {
                        yourPrice: "1.80",
                        total: "7.2",
                        uom: "Box",
                    },
                    {
                        yourPrice: "1.90",
                        total: "7.2",
                        uom: "Box",
                    }
                ]
            }
        ],
        grandTotal: 0,
        summary: [
            {
                name: "PRODUCT TOTAL",
                price: 1.56
            },
            {
                name: "ASSEMBLY",
                price: 52
            },
            {
                name: "ENVIRONMENTAL HANDLING FEES",
                price: 52
            },
            {
                name: "GST",
                price: 52
            },
            {
                name: "PST",
                price: 52
            },
            {
                name: "TOTAL BEFORE DISCOUNT",
                price: 52
            },
            {
                name: "DISCOUNT",
                price: 52
            },
            {
                name: "PRODUCT HANDLING/SPECIAL TARIF FEES",
                price: 52
            },
            {
                name: "TOTAL",
                price: 52
            }
        ],
        listPossibility: [{
            hasProductHandling: true,
            hasEnvironmentalFee: true,
            hasGst: true,
            hasPst: true,
            hasDiscount: true,
            hasFurnitureDeliveryInstallation: true,
            hasAssembly: true,
            hasEcoFee: true
        }]
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
                <div className="render-table-bottom">
                    <div id="render-table-info"> </div>
                    <div id="render-table-total">
                        <RenderLinesBottomTable lang={language} summary={this.state.summary}
                            resources={resources} listPossibility={this.state.listPossibility} />
                    </div>
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
                            <img src={catalogLogo} alt="catalogLogo" /></div>
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
                {itemsList[i].hasFee && (
                    <RenderSpecialsLine product={itemsList[i].productNumber} resources={resources}
                        lang={lang} listOfFees={itemsList[i].listOfFees} />
                )}
            </div>

        )
    } return line;
}
function RenderSpecialsLine(props) {
    const product = props.product;
    const listOfFees = props.listOfFees;
    const numberOfLines = listOfFees.length
    const lang = props.lang;
    const resources = props.resources;
    var line = [];

    for (let i = 0; i < numberOfLines; i++) {
        line.push(
            <div className="order-information-table-line-special lightgrey-background" key={i}>
                <span className="order-information-table- col-1">
                    <div className="order-information-table-quantity-order">
                        {i + 1}
                    </div>
                </span>

                <span className="order-information-table-product-number col-2"></span>

                <span className="order-information-table-description col-3">
                    {resources.environmentalFee} {product}
                </span>

                <span className="order-information-table-yourPrice col-4">
                    <Price amount={listOfFees[i].yourPrice} lang={lang} />
                </span>

                <span className="order-information-table-uom col-5">
                    {listOfFees[i].uom}
                </span>

                <span className="order-information-table-total col-6">
                    <Price amount={listOfFees[i].total} lang={lang} />
                </span>
            </div>
        )
    } return line;
}
function RenderLinesBottomTable(props) {
    const summary = props.summary;
    const listPossibility = props.listPossibility;
    const numberOfLines = summary.length;
    const lang = props.lang;
    const resources = props.resources;
    var line = [];

    for (let i = 0; i < numberOfLines; i++) {
        if (summary[i].name === "PRODUCT TOTAL" || summary[i].name === "ENVIRONMENTAL HANDLING FEES"
            || summary[i].name === "GST" || summary[i].name === "PST" || summary[i].name === "ASSEMBLY")
            line.push(
                <div key={i}>
                    {summary[i].name}
                    <Price amount={summary[i].price} lang={lang} />

                </div>
            )
        if (summary[i].name === "DISCOUNT")
            line.push(
                <div key={i}>
                    {summary[i].name}<img src={promo} alt="catalogLogo" />
                    <Price amount={summary[i].price} lang={lang} />

                </div>
            )

        if (listPossibility.hasProductHandling)
            line.push(
                <div key={i}>
                    {summary[i].name} <span>{resources.include}</span>
                    <Price amount={summary[i].price} lang={lang} />

                </div>
            )
        if (summary[i].name === "PRODUCT TOTAL" && listPossibility.hasEcoFee)
            line.push(
                <div key={i}>
                    {summary[i].name} <span>{resources.star} {resources.includesApplicable}</span>
                    <Price amount={summary[i].price} lang={lang} />

                </div>
            )
        if (summary[i].name === "FURNITURE DELIVERY & INSTALLATION"
            && listPossibility.hasFurnitureDeliveryInstallation)
            line.push(
                <div key={i}>
                    {summary[i].name} <span>{resources.star}
                        <Price amount={summary[i].price} lang={lang} /></span>

                </div>
            )
        if (summary[i].name === "TOTAL" && listPossibility.hasFurnitureDeliveryInstallation)
            line.push(
                <div key={i}>
                    {summary[i].name} <span>{resources.totalFurnitureDeliveryInstallation}
                        <Price amount={summary[i].price} lang={lang} /></span>

                </div>
            )
        /** { listPossibility.hasEnvironmentalFee }
        { listPossibility.hasGst }
        { listPossibility.hasPst }
        
        { listPossibility.hasAssembly }*/
    } return line;
}


function Price(props) {
    return (
        <span>
            {props.lang === "en" ? "$" + props.amount : props.amount + "$"}
        </span>
    );
}
