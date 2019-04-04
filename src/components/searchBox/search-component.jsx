import React, { Component } from "react";
import messages from "./messages";
import "./styles.css";

let timeout;
const PredictiveElement = ({ children, ...rest }) => <li className="predictive-element" {...rest}>{children}</li>

export default class SearchComponent extends Component {
  state = {
    searchValue: ``,
    words: [], 
    hidePredictiveSearch: true
  }

  render() {
    let language = this.props.language || 'en';
    let resources = messages[language];
    const { words, hidePredictiveSearch, searchValue } = this.state;
    const classNames = hidePredictiveSearch ? 'hide' : 'show';
    return (
      <div className="search-component">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-container">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder={resources.placeHolder}
                onChange={this.filterWords}
                onFocus={this.showSearchContainer}
                value={searchValue}
                onBlur={this.hideSearchContainer}
              />
              <ul className={`predictive-list ${classNames}`}>
                {words.map((word, index) => <PredictiveElement onMouseDown={this.handleSelectPreditiveElement} key={index}>{word}</PredictiveElement>)}
              </ul>
            </div>
            <input
              type="submit"
              className="search-button"
              value={resources.searchButton}
            />
          </div>
        </form>
      </div>
    )
  }

  handleSubmit = (value) => {
    window.location.replace(`/Eway/${this.props.language}/Shopping/Search/SearchByKeyword/${typeof value === "string" ? value : value.currentTarget[0].value}`);
  }

  handleSelectPreditiveElement = (e) => {
    const value = e.currentTarget.textContent;
    this.getWords(value);
    this.setState({
      searchValue: value
    });
    this.handleSubmit(value);
  }

  hideSearchContainer = () => {
    this.setState({
      hidePredictiveSearch: true
    })
  }

  showSearchContainer = () => {
    this.setState({
      hidePredictiveSearch: false
    })
  }

  filterWords = (e) => {
    const value = e.currentTarget.value.toLowerCase()
    // Updates the words. 
    this.getWords(value);
    // Updates the search input
    this.setState({
      searchValue:value,
    })
  }

  getWords = function (searchValue) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!searchValue) {
        return;
      }
      const terms = this.getTermsList()
      //const words = terms.filter(term => term.includes(searchValue))
      this.setState({
        words: terms,
        hidePredictiveSearch: false
      })
    }, 500);
  }

  getTermsList = () => {
    return [
        "hello",
        "bonjour",
        "hey",
        "hola",
        "hi",
        "maybe",
        "this",
        "is",
        "text",
        "zebra",
        "internationalization"
      ]
    
    //   fetch('https://api.thecatapi.com/v1/images/search?format=json', {mode: 'no-cors', headers: new Headers({'Content-Type': 'application/json'}, {'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f'})})
    //     .then(function (response) {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(function (myJson) {
    //       console.log(JSON.stringify(myJson));
    //     });
  }
}