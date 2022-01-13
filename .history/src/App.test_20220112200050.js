import { render } from "@testing-library/react";
import { screen } from '@testing-library/any-framework';
import React from "react";
import App from "./App";

test("renders an h1", () => {
    render( <App />);
    const h1 = screen.getByText(/Hi React Test Library/);
    expect(h1).toHaveTextContent(
        "Hi React Test Library"
    );
});