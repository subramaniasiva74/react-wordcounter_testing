const { render } = require("@testing-library/react");
import {PageNotFound} from "../PageNotFound";
import { BrowserRouter } from "react-router-dom";

describe('Testing PageNotFound page', () => { 
    
    test("Render img and text", () => {
        const {getByAltText, getByTestId} = render(<PageNotFound />, { wrapper: BrowserRouter });
        const pnfText = getByTestId("pnfText");
        const pnfImg = getByAltText("Page Not Found!");

        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");
        expect(pnfImg).toBeTruthy();
    });
 });