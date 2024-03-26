import { render, screen, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("Testing Joke Component", () => {

    test("Render Joke text", async () => {
        render(<Joke />);
        const element = screen.getByTestId("jokeHeadline"); 
        await waitFor(() => {expect(element.innerHTML).toBeTruthy();}, {timeout: 2000});
    });

});