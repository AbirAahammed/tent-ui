import React from "react";
import { TextField } from "@mui/material";

type TextBoxSelectProps<T> = {
    name: string;
    label: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: T;
    options: T[];
    renderOption: (option: T) => React.ReactNode;
};

const TextFieldSelect : React.FC<TextBoxSelectProps<any>> = ({name, label, handleChange, value, options, renderOption }) => {
    return (
        <TextField name={name} label={label} select value={value} onChange={handleChange} sx={{ width: '100%' }}>
            {options.map((option) => renderOption(option))}
        </TextField> 
        )
};


export default TextFieldSelect;