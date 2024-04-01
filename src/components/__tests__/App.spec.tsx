import React from "react";
import {render} from "@testing-library/react";
import App from "~src/components/App";

describe("src/components/App",()=>{
    it('should render component', function () {
       const {container}  = render(<App/>);
       expect(container).toBeInTheDocument();
    });
});
