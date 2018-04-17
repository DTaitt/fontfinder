import React from 'react';
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer';

enzyme.configure({ adapter: new Adapter() });


describe("App", function() {
  it("should render <Header /> without throwing an error", function() {
    expect(shallow(<App />).contains(<Header />)).toBe(
      true
    );
  });

  it("should render <MainContainer /> without throwing an error", function() {
    expect(shallow(<App />).contains(<MainContainer />)).toBe(
      true
    );
  });
});