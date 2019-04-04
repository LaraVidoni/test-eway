import React from 'react';
import {BudgetCalculator} from './budgetCalculator';
import renderer from "react-test-renderer";

it('renders in english (without periods and weekly)', () => {
    const state = {
        isWeeklyBudget : true,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "",
        periodStart : "",
        language : "en"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in english (with periods and weekly)', () => {
    const state = {
        isWeeklyBudget : true,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "en"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in french (without periods and weekly)', () => {
    const state = {
        isWeeklyBudget : true,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "",
        periodStart : "",
        language : "fr"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in french (with periods and weekly)', () => {
    const state = {
        isWeeklyBudget : true,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "fr"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in french (non-weekly)', () => {
    const state = {
        isWeeklyBudget : false,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "fr"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in english (non-weekly)', () => {
    const state = {
        isWeeklyBudget : false,
        budgetAmount : "100.00",
        availableAmount : "100.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "en"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in english (huge amount)', () => {
    const state = {
        isWeeklyBudget : false,
        budgetAmount : "999999999999999.00",
        availableAmount : "999999999999999.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "en"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in french (huge amount)', () => {
    const state = {
        isWeeklyBudget : false,
        budgetAmount : "999999999999999.00",
        availableAmount : "999999999999999.00",
        periodEnd : "2019-03-22",
        periodStart : "2019-03-22",
        language : "fr"
    } 
  const div = document.createElement('div');
  const tree = renderer.create(<BudgetCalculator {...state} />, div).toJSON();
  expect(tree).toMatchSnapshot();
});