// import { renderHook, act } from "@testing-library/react-hooks";
import { renderHook, act } from '@testing-library/react';

import { AppActionType } from "./model/AppAction";
import { useAppReducer } from "./AppReducer";

describe("AppReducer", () => {
    it("should show notification", () => {
        const { result } = renderHook(() => useAppReducer());

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_NOTIFICATION,
                payload: { message: "Test message", severity: "info" },
            });
        });

        expect(result.current[0].notification).toEqual({
            message: "Test message",
            severity: "info",
        });
    });

    it("should clear notification", () => {
        const { result } = renderHook(() => useAppReducer());

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_NOTIFICATION,
                payload: { message: "Test message", severity: "info" },
            });
        });

        act(() => {
            result.current[1]({
                type: AppActionType.CLEAR_NOTIFICATION,
                payload: undefined
            });
        });

        expect(result.current[0].notification).toBeUndefined();
    });

    it("should show loading", () => {
        const { result } = renderHook(() => useAppReducer());

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_LOADING,
                payload: undefined
            });
        });

        expect(result.current[0].loading).toBe(true);
    });

    it("should hide loading", () => {
        const { result } = renderHook(() => useAppReducer());

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_LOADING,
                payload: undefined
            });
        });

        act(() => {
            result.current[1]({
                type: AppActionType.HIDE_LOADING,
                payload: undefined
            });
        });

        expect(result.current[0].loading).toBe(false);
    });

    it("should show confirmation dialog", () => {
        const { result } = renderHook(() => useAppReducer());

        const onConfirm = jest.fn();
        const onCancel = jest.fn();

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_CONFIRMATION_DIALOG,
                payload: {
                    message: "Are you sure?",
                    onConfirm,
                    onCancel,
                },
            });
        });

        expect(result.current[0].confirmationDialog).toEqual({
            isOpen: true,
            message: "Are you sure?",
            onConfirm,
            onCancel,
        });
    });

    it("should close confirmation dialog", () => {
        const { result } = renderHook(() => useAppReducer());

        act(() => {
            result.current[1]({
                type: AppActionType.SHOW_CONFIRMATION_DIALOG,
                payload: {
                    message: "Are you sure?",
                    onConfirm: jest.fn(),
                    onCancel: jest.fn(),
                },
            });
        });

        act(() => {
            result.current[1]({
                type: AppActionType.CLOSE_CONFIRMATION_DIALOG,
                payload: undefined
            });
        });

        expect(result.current[0].confirmationDialog).toBeUndefined();
    });
});