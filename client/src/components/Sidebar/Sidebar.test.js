import React, {Fragment} from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Sidebar from "./Sidebar";
import FavCard from "./../FavCard/FavCard";
import FilterCardContainer from '../FilterCardContainer/FilterCardContainer';
import { Collapsible, CollapsibleItem, Card, Badge } from "react-materialize";
import store from "./../../redux/store";

enzyme.configure({ adapter: new Adapter() });

const SidebarWrapper = shallow(<Sidebar />);

describe("Sidebar", function() {
    it("should render <Sidebar /> without throwing an error", function() {
        expect(SidebarWrapper.exists(<Card className="sidebar cyan darken-2"></Card>)).toBe(true)
    });
    it("should render accordion dropdown without throwing an error", function() {
        expect(SidebarWrapper.exists(<Collapsible accordion></Collapsible>)).toBe(true);
    });
    it("should render Filter section without throwing an error", function() {
        expect(SidebarWrapper.exists(<CollapsibleItem header="Filter" icon="search"></CollapsibleItem>)).toBe(true);
    });
    it("should render <FilterCardContainer /> without throwing an error", function() {
        expect(SidebarWrapper.exists(<FilterCardContainer />)).toBe(true);
    });
    it("should render Badge with length of favorites without throwing an error", function() {
      expect(
          SidebarWrapper.exists(<Badge>
            {store.getState().favData.length}
          </Badge>)).toBe(true);
    });
    it("should render Favorites section without throwing an error", function() {
        expect(SidebarWrapper.exists(
            <CollapsibleItem header="Favorites" icon="favorite" className="favorite">
            </CollapsibleItem>
        )).toBe(true);
    });
    it("should render <FavCard /> without throwing an error", function() {
      expect(SidebarWrapper.exists(<FavCard />)).toBe(true);
    });
});
