import React, { Fragment } from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilterCardContainer from "./FilterCardContainer";
import FilterCard from '../FilterCard/FilterCard';
import store from "./../../redux/store";
import {
  updateSearchValue,
  updateCategoryValue,
  addVariantValue,
  removeVariantValue
} from "./../../redux/actions";

enzyme.configure({ adapter: new Adapter() });

const FilterCardContainerWrapper = shallow(<FilterCardContainer />);

describe("FilterCardContainer", function() {
  it("should render <FilterCardContainer /> without throwing an error", function() {
    expect(
      FilterCardContainerWrapper.exists(<Fragment></Fragment>)
    ).toBe(true);
  });
  it("should render <FilterCard /> without throwing an error", function() {
    expect(FilterCardContainerWrapper.exists(<FilterCard />)).toBe(true);
  });
});
