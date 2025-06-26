import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContextProvider, useAppContext } from "./AppContext";
import { AppState } from "../reducer/model/AppState";
import { AppActionType } from "../reducer/model/AppAction";

const TestComponent = () => {
    const { state, dispatch } = useAppContext();
    return (
        <div>
            <span data-testid="state">{JSON.stringify(state)}</span>
            <button onClick={() => dispatch({ type: AppActionType.CLOSE_CONFIRMATION_DIALOG })}>Dispatch</button>
        </div>
    );
};

describe("AppContext", () => {
    it("should provide the initial state", () => {
        const initialState: AppState = {"loading": false};
        render(
            <AppContextProvider>
                <TestComponent />
            </AppContextProvider>
        );
        expect(screen.getByTestId("state").textContent).toBe(JSON.stringify(initialState));
    });

    it("should throw error when useAppContext is used outside of AppContextProvider", () => {
        const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
        expect(() => render(<TestComponent />)).toThrow(
            "useStepperContext must be used within a StepperProvider"
        );
        consoleError.mockRestore();
    });
});