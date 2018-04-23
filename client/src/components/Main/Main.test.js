import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./Main";
import CardDisplayContainer from "./../CardDisplayContainer/CardDisplayContainer";
import Sidebar from './../Sidebar/Sidebar';

enzyme.configure({ adapter: new Adapter() });

const MainComponent = (
  <main>
    <div className="my-container">
      <CardDisplayContainer />
      <Sidebar />
    </div>
  </main>
);

const MainWrapper = shallow(<Main />);

describe("Main", function() {
  it("should render <CardDisplayContainer /> without throwing an error", function() {
    expect(MainWrapper.contains(<CardDisplayContainer />)).toBe(true);
  });
  it("should render <Sidebar /> without throwing an error", function() {
    expect(MainWrapper.contains(<Sidebar />)).toBe(true);
  });
  it('should have a class "my-container"', function(){
    expect(MainWrapper.find(".my-container").exists()).toEqual(true)
  })
  it('should render MainComponent without throwing an error', function(){
    expect(MainWrapper.contains(MainComponent)).toBe(true)
  })
});
