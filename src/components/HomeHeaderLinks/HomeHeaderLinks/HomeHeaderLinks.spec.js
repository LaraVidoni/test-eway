/* eslint-disable filenames/match-regex */
import React from "react";
import HomeHeaderLinks from "./HomeHeaderLinks";
import renderer from "react-test-renderer";

it(`hides the "about us"`, () => {
  const state = {
    showAboutUs: false,
  }
  const tree = renderer.create(<HomeHeaderLinks {...state} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it(`hides the "logoff"`, () => {
  const state = {
    showLogoff: false
  }
  const tree = renderer.create(<HomeHeaderLinks {...state} />).toJSON();
  expect(tree).toMatchSnapshot();

});
it(`hides the "language switcher"`, () => {
  const state = {
    showLanguage: false,
  }
  const tree = renderer.create(<HomeHeaderLinks {...state} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it(`shows the "English" word when in french`, () => {
  const state = {
    language: 'fr',
  }
  const tree = renderer.create(<HomeHeaderLinks {...state} />).toJSON();
  expect(tree).toMatchSnapshot();
});