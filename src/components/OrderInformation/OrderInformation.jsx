import React, { Component } from "react";
import assembly from '../../images/assembly.png';
import catalog from '../../images/catalog.png';
import contract from '../../images/contract.png';
import deliveryChargesTruck from '../../images/delivery_charges_truck.png';
import flyerItem from '../../images/flyer_item.png';
import infoIcon from '../../images/information_icon.png';
import marketPrice from '../../images/market_price.png';
import promo from '../../images/promo.png';
import question from '../../images/question.png';
import restricted from '../../images/restricted.png';
import shipSeparatelyTruck from '../../images/ship_separately_truck.png';
import Symbol from '../Symbol/Symbol';
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
        deliveryInstruction: "Test",
        streetAddress: "Test",
        addressDetails: "Test",
        city: "bc",
        province: "bc",
        postalCode: "V6A2T4",
        accountNo: 735450,
        totalAfterPromo: 0,
        missedSavings: 0,
        subTotal: 83.34,
        environmentalHandlingFees: 0,
        ecoGreenFees: 0,
        specialFees: 0,
        areaDeliveryFees: 0,
        federalTaxTotal: 0,
        provincialTaxTotal: 10.8342, //pst
        promoDiscount: 0,
        assemblyFees: 0,
        totalSavedWithSales: 0,
        isOnAccount: true,
        hasProductHandling: true,
        isPromo: true,
        invoices: null,
        buyerId: undefined, //??
        showContractIcon: false,
        client: undefined,
        hasCombinedFees: false,
        orderPromoDescriptionFR: undefined,
        orderPromoDescriptionEN: undefined,
        deliveryPostalCode: null,
        isDeliUnknown: true,
        hasDeliveryInstallationExtra: true,
        orderProducts: [
            {
                quantityOrdered: 4,
                quantityShipped: 3,
                productNumber: "STP17866",
                description: "Staples Standard ",
                comment1: "In stock",
                comment2: "5-7 business day",
                priceWithFees: 3.42,
                total: 7.20,
                unitSellPrice: 3.42,
                basePrice: 3.42,
                uom: "Box",
                productFees: [
                    {
                        type: "environmentalFee",
                        text: "Environmental Handling Fee for ",
                        price: 1.80,
                        total: 7.20,
                        uom: "Box"
                    },
                    {
                        type: "assemblyFee",
                        text: "Assembly Fee for",
                        price: 1.80,
                        total: 7.20,
                        uom: "Box"
                    }
                ],
                hasEnvironmentalFee: true,
                hasAssembly: true,
                isInSourcebook: false,
                isInPromoPubli: false,
                hasDeliveryCharges: false,
                isRestricted: false,
                isMarketPrice: false,
                isInPromo: false,
                isShipSeparately: false,
                isContractProduct: false
            },
            {
                quantityOrdered: 2,
                quantityShipped: 1,
                productNumber: "HGF17866",
                description: "Staples Standard ",
                comment1: "In stock",
                comment2: "",
                priceWithFees: 8.50,
                unitSellPrice: 3.42,
                total: 17,
                basePrice: 3.42,
                uom: "Box",
                productFees: [],
                hasEnvironmentalFee: false,
                isInSourcebook: false,
                isInPromoPubli: false,
                hasDeliveryCharges: false,
                isRestricted: false,
                isMarketPrice: false,
                isInPromo: false,
                isShipSeparately: false,
                isContractProduct: false
            },
            {
                quantityOrdered: 1,
                quantityShipped: 1,
                productNumber: "OHL17866",
                description: "Loover Medium Back Weight Sensing Synchro-Tilter, 'Urban - Gravel Road' Fabric, 'Vue - Quarry Grey' Mesh (GREY), 2662-8 UR21 BLK G5 CX 15 ",
                comment1: "In stock",
                comment2: "",
                priceWithFees: 11,
                total: 11,
                basePrice: 3.42,
                unitSellPrice: 3.42,
                uom: "Each",
                productFees: [],
                hasEnvironmentalFee: false,
                isInSourcebook: false,
                isInPromoPubli: false,
                hasDeliveryCharges: false,
                isRestricted: false,
                isMarketPrice: false,
                isInPromo: false,
                isShipSeparately: false,
                isContractProduct: false
            }
        ],
        listTotal: [
            {
                type: "subTotal",
                text: "PRODUCT TOTAL",
                price: 83.34
            },
            {
                type: "productHandlingSpecialTariff",
                text: "PRODUCT HANDLING/SPECIAL TARIFF FEES",
                price: 4
            },
            {
                type: "federalTaxTotal",
                text: "Federal Tax Total",
                price: 4
            },
            {
                type: "provincialTaxTotal",
                text: "PST",
                price: 10.8342
            },
            {
                type: "environmentalHandlingFees",
                text: "ENVIRONMENTAL HANDLING FEES",
                price: 10.8342
            },
            {
                type: "assemblyFees",
                text: "ASSEMBLY FEES",
                price: 10.8342
            },
            {
                type: "ecoGreenFees",
                text: "Eco Green Fees",
                price: 10.8342
            },
            {
                type: "furnitureDeliveryInstallation",
                text: "FURNITURE DELIVERY & INSTALLATION",
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
                type: "totalBeforeDiscpunt",
                text: "TOTAL BEFORE DISCOUNT",
                price: 2
            },
            {
                type: "discount",
                text: "DISCOUNT",
                price: 10.8342
            },
            {
                type: "total",
                text: "TOTAL",
                price: 94.17
            }
        ]
        /*list: {
            hasProductHandling: true,
            hasEnvironmentalFee: true,
            hasHST: true, //taxe de vente harmonisée
            hasGst: true, //good and service taxe
            hasPst: true, //taxe provinciale
            hasDiscount: true,
            
            hasAssembly: true,
            hasEcoFee: true
        },*/
    }

    renderOrderInformation(resources) {
        return (
            <div className="render-order-information">

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
            <div className="render-billing-information">

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
            <div className="render-delivery-address">

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
            <div className="render-table">
                <div className="first-line bold-text">
                    <span className="col-1">{resources.quantity}</span>
                    <span className="col-2">{resources.productNumber}</span>
                    <span className="col-3">{resources.description}</span>
                    <span className="col-4">{resources.yourPrice}</span>
                    <span className="col-5">{resources.uom}</span>
                    <span className="col-6">{resources.total}</span>
                </div>
                <div className="render-lines">
                    <RenderLinesTopTable lang={language} resources={resources}
                        orderProducts={this.state.orderProducts} />
                </div>
                <div className="render-table-bottom">
                    <div className="render-table-info">
                        {this.state.hasProductHandling && (
                            resources.messageProductHandlingBottom
                        )}
                    </div>

                    <div className="render-table-total">
                        <RenderLinesBottomTable lang={language} listTotal={this.state.listTotal}
                            resources={resources}
                            hasDeliveryInstallationExtra={this.state.hasDeliveryInstallationExtra} />
                    </div>
                </div>

            </div>
        )
    }

    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];

        return (
            <div className="order-information-container">

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
                            {orderProducts[i].productNumber}
                        </div>
                        <div className="order-information-table-product-number-img">
                            {orderProducts[i].isInPromoPubli && (<Symbol lang={lang} src={flyerItem} altEn="Flyer item" altFr="Article de la circulaire"/>)}
                            {orderProducts[i].isRestricted && (<Symbol lang={lang} src={restricted} altEn="restricted" altFr="Accès limité"/>)}
                            {orderProducts[i].isMarketPrice && (<Symbol lang={lang} src={marketPrice} altEn="marketPrice" altFr="Prix du marché"/>)}
                            {orderProducts[i].hasDeliveryCharges && (<Symbol lang={lang} src={deliveryChargesTruck} altEn="Delivery charges may apply" altFr="Des frais de livraison pourraient s'appliquer"/>)}
                            {orderProducts[i].hasAssembly && (<Symbol lang={lang} src={assembly} altEn="Assembly required" altFr="Assemblage requis"/>)}
                            {orderProducts[i].isContractProduct && (<Symbol lang={lang} src={contract} altEn="Contract" altFr="Soumission"/>)}
                            {orderProducts[i].isInSourcebook && (<Symbol lang={lang} src={catalog} altEn="Catalogue" altFr="Catalogue"/>)}
                            {orderProducts[i].isInPromo && (<Symbol lang={lang} src={promo} altEn="Discount" altFr="Promotion"/>)}
                            {orderProducts[i].isShipSeparately && (<Symbol lang={lang} src={shipSeparatelyTruck} altEn="These products ship separately" altFr="Ce produits sont expédiés séparément"/>)}
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

                    <span className="order-information-table-yourPrice col-4">
                        <Price amount={orderProducts[i].priceWithFees} lang={lang} />
                        {orderProducts[i].productFees.length > 0 && (

                            <span className="tooltip">
                                <img className="info-icon " src={infoIcon}
                                    alt="info icon" />
                                <div className="tooltipText">

                                    <div className="tooltip-left">
                                        <div>{resources.price}</div>
                                        <div>Eco fee:</div>
                                    </div>

                                    <div className="tooltip-right">
                                        <div><Price amount={orderProducts[i].unitSellPrice} lang={lang} /></div>
                                        <div><Price amount={orderProducts[i].productFees[0].price} lang={lang} /></div>
                                        <div>{orderProducts[i].uom}</div>
                                    </div>

                                </div>
                            </span>
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
                        lang={lang} productFees={orderProducts[i].productFees} hasAssembly={orderProducts[i].hasAssembly}>
                        {orderProducts[i].hasAssembly && (<Symbol lang={lang} src={assembly} altEn="Assembly required" />)}
                        {orderProducts[i].hasAssembly && (<Symbol lang={lang} src={question} altEn="info" />)}
                    </RenderSpecialsLine>
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

                <span className="order-information-table-product-number col-2">
                    {productFees[i].type === "assemblyFee" && (
                        props.children[0]
                    )}
                </span>

                <span className="order-information-table-special-description col-3">
                    {productFees[i].text} {product} {productFees[i].type === "assemblyFee" && (
                        props.children[1]
                    )}
                </span>

                <span className="order-information-table-yourPrice col-4">
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
    const lang = props.lang;
    const resources = props.resources
    const listTotal = props.listTotal;
    var line = [];
    const hasDeliveryInstallationExtra = props.hasDeliveryInstallationExtra;

    listTotal.map((list, i) => {
        if (list.price === 0.0) return null
        line.push(

            <div key={i} className="render-bottom-table-line">

                <span>
                    {list.text} <TextSupp lang={lang} type={list.type} resources={resources}
                        hasDeliveryInstallationExtra={hasDeliveryInstallationExtra} />
                </span>
                <span className="render-bottom-table-float-right">
                    <Price amount={list.price} lang={lang} />
                </span>

            </div>

        )
        return line;
    })
    return line;
}

function TextSupp(props) {
    const lang = props.lang;
    const type = props.type;
    const resources = props.resources
    const hasDeliveryInstallationExtra = props.hasDeliveryInstallationExtra;

    if (type === "discount")
        return (
            <><Symbol lang={lang} src={promo} altEn="Discount" /></>
        )

    if (type === "total" && hasDeliveryInstallationExtra)
        return (
            <>{resources.deliveryInstallationExtra}</>
        )


    return null
}



function Price(props) {
    return (
        <span>
            {props.lang === "en" ? "$" + props.amount : props.amount + "$"}
        </span>
    );
}
