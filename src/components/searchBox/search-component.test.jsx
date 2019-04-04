import React from 'react';
import {SearchComponent} from './search-component';
import renderer from "react-test-renderer";

it('renders in english (as default language)', () => {
  const div = document.createElement('div');
  const tree = renderer.create(<SearchComponent />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in english', () => {
  const div = document.createElement('div');
  const tree = renderer.create(<SearchComponent language="en" />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in french', () => {
  const div = document.createElement('div');
  const tree = renderer.create(<SearchComponent language="fr" />, div).toJSON();
  expect(tree).toMatchSnapshot();
});