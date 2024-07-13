import { Button as ButtonAnt } from 'antd';
import React from 'react';

export interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "primary" | "default" | "dashed" | "link" | "text";
    shape?: "default" | "circle" | "round"
    isLoading?: boolean;
}

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