import React from "react";
import messages from "./messages";
import "./styles.scss";

function HomeHeaderLinks(props) {
  const {
    showLogoff = true,
    showAboutUs = true,
    showLanguage = true,
    contactAddress = "easyservice@staples.com",
    language = "en"
  } = props;
  let resources = messages[language];

  return (
    <div className="HeaderLinkComponent">
      {
        <HeaderLinkItem url={`${window.location.href}`}>
          {resources.home}
        </HeaderLinkItem>
      }
      {showLogoff && (
        <HeaderLinkItem url={`logoff.aspx`}>{resources.logout}</HeaderLinkItem>
      )}
      {showAboutUs && (
        <HeaderLinkItem url={`AboutUs.aspx`}>
          {resources.aboutUs}
        </HeaderLinkItem>
      )}
      {showLanguage && (
        <HeaderLinkItem
          url={`${language}/Core/Home/SetCulture?previousSearchParameters=${language}`}
        >
          {resources.language}
        </HeaderLinkItem>
      )}
    </div>
  );
}

function HeaderLinkItem(props) {
  return (
    <span className="HeaderLinkItem">
      <a href={props.url}>{props.children}</a>
    </span>
  );
}

export default HomeHeaderLinks;
