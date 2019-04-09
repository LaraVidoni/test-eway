import React, { Component } from "react";
import assembly from '../../images/assembly.png';
import catalogLogo from '../../images/catalog.png';
import deliveryChargesTruck from '../../images/delivery_charges_truck.png';
import flyerItem from '../../images/flyer_item.png';
import infoIcon from '../../images/information_icon.png';
import marketPrice from '../../images/market_price.png';
import promo from '../../images/promo.png';
import restricted from '../../images/restricted.png';
import shipSeparatelyTruck from '../../images/ship_separately_truck.png';
import messages from "./messages";
import "./styles.css";

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
        hasProductHandling: true,
        orderProducts: [
            {
                quantityOrdered: 4,
                quantityShipped: 3,
                productNumber: "STP17866",
                description: "Staples Standard ",
                comment1: "In stock",
                comment2: "5-7 business day",
                unitSellPrice: "1.80",
                total: "7.2",
                uom: "Box",
                isInInventory: true,
                hasEnvironmentalFee: false,
                hasAssembly: true,
                productFees: [
                    {
                        type: "environmentalFee",
                        text: "Environmental Handling Fee for ",
                        price: "1.80",
                        total: "7.2",
                        uom: "Box"
                    },
                    {
                        type: "assemblyFee",
                        text: "Assembly Fee for",
                        price: "1.80",
                        total: "7.2",
                        uom: "Box"
                    },
                    /* {
                        isInPromo: false,
                        isDeliveryFee: false,
                        isInSourcebook: true,
                        isShipSeparately: false,
                        price: "1.80",
                        total: "7.2",
                        uom: "Box",
                    }*/
                ],
                listOfSymbols: {
                    isInSourcebook: true,
                    isInPromoPubli: true,
                    hasDeliveryCharges: false,
                    isRestricted: true,
                    isMarketPrice: true,
                    isAssembly: true,
                    isInPromo: false,
                    isShipSeparately: true
                }
            },
            {
                quantityOrdered: 2,
                quantityShipped: 1,
                productNumber: "HGF17866",
                description: "Staples Standard ",
                comment1: "In stock",
                comment2: "",
                unitSellPrice: "8.5",
                total: "17",
                isInInventory: true,
                hasEnvironmentalFee: true,
                uom: "Box",
                productFees: [],
                listOfSymbols: {
                    isInSourcebook: false,
                    isInPromoPubli: true,
                    hasDeliveryCharges: true,
                    isRestricted: true,
                    isMarketPrice: false,
                    isAssembly: true,
                    isInPromo: true,
                    isShipSeparately: true,
                }
            },
            {
                quantityOrdered: 1,
                quantityShipped: 1,
                productNumber: "OHL17866",
                description: "Staples Standard ",
                comment1: "In stock",
                comment2: "",
                unitSellPrice: "11",
                total: "11",
                isInInventory: true,
                hasEnvironmentalFee: false,
                uom: "Each",
                productFees: [],
                listOfSymbols: {
                    isInSourcebook: true,
                    isInPromoPubli: false,
                    hasDeliveryCharges: true,
                    isRestricted: true,
                    isMarketPrice: false,
                    isAssembly: true,
                    isInPromo: true,
                    isShipSeparately: false,
                },
                /*listImages: [
                    {
                        type: "sourcebook",
                        img: catalogLogo,
                        alt: "Sourcebook"
                    },
                    {
                        type: "promoPubli",
                        img: flyerItem,
                        alt: "in a promotional publication"
                    },
                    {
                        type: "deliveryCharges",
                        img: deliveryChargesTruck,
                        alt: "Delivery charges"
                    },
                    {
                        type: "restricted",
                        img: restricted,
                        alt: "Restricted"
                    },
                    {
                        type: "marketPrice",
                        img: marketPrice,
                        alt: "Market Price"
                    },
                    {
                        type: "assembly",
                        img: assembly,
                        alt: "Assembly"
                    },
                    {
                        type: "promotionItem",
                        img: promo,
                        alt: "Promotion Item"
                    },
                    {
                        type: "shipSeparately",
                        img: shipSeparatelyTruck,
                        alt: "Ship Separately"
                    }
                ]*/
            }
        ],
        /*listOfPossibleLines: {
            hasProductHandling: true,
            hasEnvironmentalFee: true,
            hasHST: true, //taxe de vente harmonisée
            hasGst: true, //good and service taxe
            hasPst: true, //taxe provinciale
            hasDiscount: true,
            hasFurnitureDeliveryInstallation: true,
            hasAssembly: true,
            hasEcoFee: true
        },*/

        totalAfterPromo: 0,
        isPromo: true,
        invoices: null,
        buyerId: undefined, //??
        showContractIcon: false,
        client: undefined,
        missedSavings: 0,
        hasCombinedFees: false,
        subTotal: 83.34,
        environmentalHandlingFees: 0,
        ecoGreenFees: 0,
        specialFees: 0,
        areaDeliveryFees: 0,
        federalTaxTotal: 1,
        provincialTaxTotal: 10.8342, //pst
        orderPromoDescriptionFR: undefined,
        orderPromoDescriptionEN: undefined,
        promoDiscount: 0,
        assemblyFees: 0,
        deliveryPostalCode: null,
        isDeliUnknown: true,
        totalSavedWithSales: 0,
        listTotal: [
            {
                type: "subTotal",
                text: "Product Total",
                price: 83.34
            },
            {
                type: "federalTaxTotal",
                text: "Federal Tax Total",
                price: 4
            },
            {
                type: "provincialTaxTotal",
                text: "Provincial Tax Total",
                price: 10.8342
            },
            {
                type: "totalAfterPromo",
                text: "Total After Promo",
                price: 2
            },
            {
                type: "discount",
                text: "Discount",
                price: 10.8342
            },
            {
                type: "environmentalHandlingFees",
                text: "Environmental Handling Fees",
                price: 10.8342
            },
            {
                type: "assemblyFees",
                text: "Assembly Fees",
                price: 10.8342
            },
            {
                type: "ecoGreenFees",
                text: "Eco Green Fees",
                price: 10.8342
            },
            {
                type: "specialFees",
                text: "Special Fees",
                price: 10.8342
            },
            {
                type: "areaDeliveryFees",
                text: "Area Delivery Fees",
                price: 10.8342
            },
            {
                type: "total",
                text: "Total",
                price: 94.17
            }
        ]
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
                    <span className="col-4">{resources.unitSellPrice}</span>
                    <span className="col-5">{resources.uom}</span>
                    <span className="col-6">{resources.total}</span>
                </div>
                <div id="render-lines">
                    <RenderLinesTopTable lang={language} resources={resources}
                        orderProducts={this.state.orderProducts} />
                </div>
                <div className="render-table-bottom">
                    <div id="render-table-info">
                        {this.state.hasProductHandling && (
                            resources.messageProductHandlingBottom
                        )}
                    </div>

                    <div id="render-table-total">
                        <RenderLinesBottomTable lang={language} listTotal={this.state.listTotal}
                            federalTaxTotal={this.state.federalTaxTotal} resources={resources}
                            provincialTaxTotal={this.state.provincialTaxTotal}>
                            <div>hello there</div></RenderLinesBottomTable>
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
    const orderProducts = props.orderProducts;
    const numberOfProducts = orderProducts.length;
    const resources = props.resources;
    const lang = props.lang;
    var line = [];
    var css;
    let isHidden = true;
    console.log("dep " + isHidden)

    function showTooltip() {
        isHidden = !isHidden
        console.log("show " + isHidden);
        return (<RenderTooltip isHidden={isHidden} />)
    }
    function hideTooltip() {
        isHidden = !isHidden
        console.log("hide " + isHidden);
        return (<RenderTooltip isHidden={isHidden} />)
    }

    for (let i = 0; i < numberOfProducts; i++) {

        if (i % 2 === 0) { css = "order-information-table-line"; }
        else { css = "order-information-table-line grey-background" }

        line.push(
            <div className={css} key={i}>
                <div className="order-information-table-line-normal">
                    <span className="order-information-table-quantity col-1">
                        <div className="order-information-table-quantity-order">
                            {resources.order} {orderProducts[i].quantityOrdered}
                        </div>
                        <div className="order-information-table-quantity-ship">
                            {resources.ship} {orderProducts[i].quantityShipped}
                        </div>
                    </span>

                    <span className="order-information-table-product-number col-2">
                        <div className="order-information-table-product-number-number">
                            {orderProducts[i].productNumber}</div>
                        <div className="order-information-table-product-number-img">
                            <RenderImages listOfSymbols={orderProducts[i].listOfSymbols} />
                        </div>
                    </span>

                    <span className="order-information-table-description col-3">
                        <div>{orderProducts[i].description}</div>
                        <div className="order-information-table-description-line">
                            {orderProducts[i].comment1}
                        </div>
                        <div className="order-information-table-description-line">
                            {orderProducts[i].comment2}
                        </div>
                    </span>

                    <span className="order-information-table-unitSellPrice col-4">
                        <Price amount={orderProducts[i].unitSellPrice} lang={lang} />
                        {orderProducts[i].productFees.length > 0 && (

                            <img className="info-icon" src={infoIcon}
                                alt="info icon"
                                onMouseOver={showTooltip} onMouseLeave={hideTooltip} />
                        )
                        }
                        {isHidden && (
                            <div className="tooltip">

                            </div>
                        )}
                    </span>

                    <span className="order-information-table-uom col-5">
                        {orderProducts[i].uom}
                    </span>

                    <span className="order-information-table-total col-6">
                        <Price amount={orderProducts[i].total} lang={lang} />
                    </span>
                </div>
                {orderProducts[i].productFees.length > 0 && (
                    <RenderSpecialsLine product={orderProducts[i].productNumber} resources={resources}
                        lang={lang} productFees={orderProducts[i].productFees} />
                )}
            </div>

        )
    } return line;
}
function RenderSpecialsLine(props) {
    const product = props.product;
    const productFees = props.productFees;
    const numberOfLines = productFees.length
    const lang = props.lang;
    var line = [];

    for (let i = 0; i < numberOfLines; i++) {
        line.push(
            <div className="order-information-table-line-special lightgrey-background" key={i}>
                <span className="order-information-table-number col-1">
                    {i + 1}
                </span>

                <span className="order-information-table-product-number col-2"></span>

                <span className="order-information-table-description col-3">
                    {productFees[i].text} {product}
                </span>

                <span className="order-information-table-unitSellPrice col-4">
                    <Price amount={productFees[i].price} lang={lang} />
                </span>

                <span className="order-information-table-uom col-5">
                    {productFees[i].uom}
                </span>

                <span className="order-information-table-total col-6">
                    <Price amount={productFees[i].total} lang={lang} />
                </span>
            </div>
        )
    } return line;
}
function RenderLinesBottomTable(props) {
    const lang = props.lang
    const resources = props.resources
    console.log("ren bot : " + props)
    return (
        <>
            <RenderFederalTaxTotal lang={lang} resources={resources} value={props.federalTaxTotal} />
            <RenderProvincialTaxTotal lang={lang} resources={resources} value={props.provincialTaxTotal} />
        </>
    )
}
function RenderFederalTaxTotal(props) {
    const lang = props.lang
    const resources = props.resources
    const value = props.value
    
    if (value === 0) return null

    return (
        <div className="render-bottom-table-line">
            {resources.text}
            <span className="render-bottom-table-float-right">
                <Price amount={value} lang={lang} />
            </span>
        </div>)
}function RenderProvincialTaxTotal(props) {
    const lang = props.lang
    const resources = props.resources
    const value = props.value
    
    if (value === 0) return null

    return (
        <div className="render-bottom-table-line">
            {resources.text}
            <span className="render-bottom-table-float-right">
                <Price amount={value} lang={lang} />
            </span>
        </div>)
}
function RenderImages(props) {
    const listOfSymbols = props.listOfSymbols;
    var line = [];
    var i = 0;
    /*const listImages = props.listImages

    listImages.map((image, i) => {

        line.push(
            <span key={i}><img src={catalogLogo} alt="catalogLogo" /></span >

        )
        return line;
    })
    return line;*/

    if (listOfSymbols.isInPromoPubli) {
        line.push(<span key={i}><img src={flyerItem} alt="flyerItem" /></span>)
        i++
    }

    if (listOfSymbols.isRestricted) {
        line.push(<span key={i}><img src={restricted} alt="restricted" /></span>)
        i++;
    }
    if (listOfSymbols.isMarketPrice) {
        line.push(<span key={i}><img src={marketPrice} alt="marketPrice" /></span>)
        i++;
    }
    if (listOfSymbols.hasDeliveryCharges) {
        line.push(<span key={i}><img src={deliveryChargesTruck} alt="deliveryChargesTruck" /></span>)
        i++;
    }
    if (listOfSymbols.isAssembly) {
        line.push(<span key={i}><img src={assembly} alt="assembly" /></span>)
        i++;
    }
    if (listOfSymbols.isInSourcebook) {
        line.push(<span key={i}><img src={catalogLogo} alt="catalogLogo" /></span >)
        i++;
    }
    if (listOfSymbols.isInPromo) {
        line.push(<span key={i}><img src={promo} alt="promo" /></span>)
        i++;
    }
    if (listOfSymbols.isShipSeparately) {
        line.push(<span key={i}><img src={shipSeparatelyTruck} alt="shipSeparatelyTruck" /></span>)
        i++;
    }
    return line;
}


function RenderTooltip(props) {
    console.log("props: " + props)
    const isHidden = props.isHidden;
    if (isHidden) return null
    else return (
        <div className="test">
            aa
        </div>
    )
}




function Price(props) {
    return (
        <span>
            {props.lang === "en" ? "$" + props.amount : props.amount + "$"}
        </span>
    );
}