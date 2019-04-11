import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";
import miniCart from '../../images/Mini_Cart_image.png'

class MiniCart extends Component {
    state = {
        showMiniCartExtender: false,
        orderNo: "EW78053790",
        lineInCart: 5,
        amount: 24.49,
        miniCartProductModel: [
            {
                productCode: "MMM654CYP24C",
                quantity: 1
            },
            {
                productCode: "HEWHPM1420",
                quantity: 1
            },
            {
                productCode: "SAN30001",
                quantity: 1
            },
            {
                productCode: "MMMR33018CPC",
                quantity: 1
            },
            {
                productCode: "MMM65424SSCPC",
                quantity: 1
            }
        ],
    };

    showMiniCartExtender = () => {
        this.setState({
            showMiniCartExtender: true,
        })
    };

    hideMiniCartExtender = () => {
        this.setState({
            showMiniCartExtender: false
        })
    };

    render() {
        let language = this.props.language || 'en';
        let resources = messages[language];
        return (
            <div id="mini-cart-container" onMouseOver={this.showMiniCartExtender} onMouseLeave={this.hideMiniCartExtender}>
                <div id="mini-cart-top">
                    <img id="mini-cart-img" src={miniCart} alt="Mini cart" />
                    <div id="cart-order">
                        <div id="cart-order-text">
                            <span>{resources.order} <br></br>
                                {resources.orderNumber}</span>
                        </div>
                        <div id="cart-order-order-number">
                            <span>{this.state.orderNo}</span>
                        </div>
                    </div>
                </div>
                <div id="mini-cart-info">
                    <div id="view-cart">
                        <div className="inline">
                            <span className="text-grey">{resources.numberLine} </span>
                            <span className="text-red">{this.state.lineInCart}</span>
                        </div>
                        <div id="btn-view-cart">
                            <input className="grey-button" type="submit" value={resources.viewCart}></input>
                        </div>
                    </div>
                    <div id="checkout-cart">
                        <div><span className="text-red amount"><Price amount={this.state.amount} lang={language} /></span></div>
                        <div><input className="grey-button" type="submit" value={resources.checkOut}></input></div>
                    </div>
                </div>

                {/*permet d'afficher le détail du panier*/}
                {this.state.showMiniCartExtender && (
                    <div id="mini-cart-extender">
                        <div id="mini-cart-table">
                            <div id="mini-cart-table-line-title">
                                <span id="mini-cart-table-title-product">{resources.product}</span>
                                <span id="mini-cart-table-title-quantity">{resources.quantity}</span>
                            </div>
                            <RenderLines miniCartProductModel={this.state.miniCartProductModel} lineInCart={this.state.lineInCart} />
                            <div id="mini-cart-table-line-total">
                                <span id="mini-cart-table-total-text">{resources.orderTotal}</span>
                                <span id="mini-cart-table-total"><Price amount={this.state.amount} lang={language} /></span>
                            </div>
                        </div>
                        {this.state.lineInCart > 5 && (
                            <div className="grey-text center">{resources.messageMoreThan5Products}</div>
                        )}
                        <div id="mini-cart-links">
                            <a className="mini-cart-link" href="#">{resources.clickAddCatalogue}</a>
                            <a className="mini-cart-link" href="/showp/Cart.aspx?No=0">{resources.clickViewCart}</a>
                            <a className="mini-cart-link" href="../UserControls/ToolBoxes/Orders/showwOrderPrintView.aspx">{resources.clickPrintVersion}</a>
                        </div>
                    </div>)}
            </div>
        )
    }
}
export default MiniCart;

//affiche les lignes des 5 premiers produits du panier
function RenderLines(props) {
    const miniCartProductModel = props.miniCartProductModel
    const lineInCart = props.lineInCart
    var max
    var line = []

    if (lineInCart > 5) { max = 5 } else { max = lineInCart }

    for (let i = max; i > 0; i--) {
        line.push(
            <div className="mini-cart-table-line" key={i-1}>
                <span className="mini-cart-table-product">{miniCartProductModel[i-1].productCode}</span>
                <span className="mini-cart-table-quantity">{miniCartProductModel[i-1].quantity}</span>
            </div>)
    } return line;
}

//change l'emplacement du $ en fonction de la langue
function Price(props) {
    return (
        <span>
            {props.lang === "en" ? "$" + props.amount : props.amount + "$"}{" "}
        </span>
    );
}