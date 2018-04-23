import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar , Container} from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Header from './Header';

const HeaderWrapper = shallow(<Header />);

describe("Header", function() {
  it("should render <Header /> without throwing an error", function() {
    expect(HeaderWrapper.exists(<header></header>)).toBe(true);
  });
  it("should render div with a class of 'my-container' without throwing an error", function() {
    expect(HeaderWrapper.exists(<div className='my-container'></div>)).toBe(true);
  });
  it("should render <Navbar /> without throwing an error", function() {
    expect(HeaderWrapper.exists(<Navbar brand='Font Finder' />)).toBe(true);
  });
});