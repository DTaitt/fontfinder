import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Header from './Header';

const HeaderWrapper = shallow(<Header />);

const HeaderComponent = (
  <header>
    <div className="my-container">
      <Navbar brand="Font Finder" />
    </div>
  </header>
);

describe("Header", function() {
  it("should render <Header /> without throwing an error", function() {
    expect(HeaderWrapper.contains(HeaderComponent)).toBe(true);
  });
});