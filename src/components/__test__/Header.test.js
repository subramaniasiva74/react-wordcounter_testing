import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Testing Header component", () => {

    test("Render headings", () => {
        render(<Header subHeading="Free online character and word count tool." />);
        const heading = screen.getByTestId("heading");
        const subHeading = screen.getByTestId("subHeading"); 
        expect(subHeading.innerHTML).toBe("Free online character and word count tool.");
        expect(heading).toBeTruthy();
    });

});