import React, { Component } from "react";

class Symbol extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: props.src,
            altFr: props.altFr,
            altEn: props.altEn,
            lang: props.lang
        }
    }

    render() {
        let alt;
        this.state.lang === "en" ? alt = this.state.altEn : alt = this.state.altFr

        return (
            <>
                <span className="tooltip">
                    <img className="symbols" src={this.state.src} alt={alt} />
                    <div className="tooltipTextSymbol">
                        {alt}
                    </div>
                </span>
            </>)

    }
}
export default Symbol;