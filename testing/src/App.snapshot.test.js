import React from "react";
import renderer from 'react-test-renderer';
import App from "./App";

it('SnapShot testing of App Component',()=>{
    const tree=renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
})