import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component testing", () => {
    test("Render text area", () => {
        const {getByTestId} = render(<Counter />);
        const element = getByTestId("textArea");
        expect(element).toBeTruthy;
    });
    
    it("Render character result", () => {
        const {getByTestId} = render(<Counter />);
        const element = getByTestId("charLength");
        expect(element.innerHTML).toBe("Character: 0");
    });

    test("Render word result", () => {
        render(<Counter />);
        const element = screen.getByText("Word: 0");
        expect(element).toBeInTheDocument();
    });

    test("Change textArea and update result", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        userEvent.type(textArea, "Siva");

        expect(charLength.innerHTML).toBe("Character: 4");
        expect(wordLength.innerHTML).toBe("Word: 1");
    });

    test("Clear textArea and update result", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");
        const clearBtn = screen.getByTestId("clearBtn");

        userEvent.type(textArea, "Siva");

        expect(charLength.innerHTML).toBe("Character: 4");
        expect(wordLength.innerHTML).toBe("Word: 1");

        fireEvent.click(clearBtn);

        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
    });

});

