import { Button as ButtonAnt } from 'antd';
import React from 'react';

/**
 * Button component props
 */
export interface ButtonProps {
    /**
     * The text to display on the button
     */
    text: string;
    /**
     * The function to be called when the button is clicked
     */
    onClick: () => void;
    /**
     * Whether the button is disabled or not
     */
    disabled?: boolean;
    /**
     * The type of the button
     */
    type?: "primary" | "default" | "dashed" | "link" | "text";
    /**
     * The shape of the button
     */
    shape?: "default" | "circle" | "round";
    /**
     * Whether the button is in loading state or not
     */
    isLoading?: boolean;
}

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.
 */
const Button: React.FC<ButtonProps> = ({ 
    text, 
    onClick,
    disabled = false,
    type = "default",
    shape = "default",
    isLoading = false
}) => {
    return (
        <ButtonAnt 
            disabled={disabled}
            type={type}
            shape={shape}
            onClick={onClick}
            loading={isLoading}
        >
            {text}
        </ButtonAnt>
    );
};

export default Button;