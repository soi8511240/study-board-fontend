import React, {useState} from "react";

export function useInputTest(intialValue: string, submitAction: (message: string) => void)
    : [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void]
{
    const [inputValue, setInputValue] = useState<string>(intialValue);

    const handleInputValueChange =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        }
        
    const handleSubmit = () => {
        submitAction(inputValue);
    }

    return [inputValue, handleInputValueChange, handleSubmit];
}