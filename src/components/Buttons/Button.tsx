import React from 'react'

// Components
import Basic from './components/Basic'
import Switch from './components/Switch'

/**
 * @typedef {Object} IButtonProps Props of Button component
 */
export interface IButtonProps {
    activeOpacity?: number;
    disabled?: boolean;
    icon?: any;
    iconPosition?: "left" | "right";
    onLongPress?: () => void;
    onPress?: () => void;
    onValueChange?: (value: boolean) => void;
    styleButton?: IStyles;
    styleText?: IStyles;
    styleTextDisabled?: IStyles;
    text?: string;
    thumbColor?: { [key: string]: string };
    trackColor?: { [key: string]: string };
    type?: "basic" | "button" | "switch" ;
    value?: boolean;
    variant?: "primary" | "secondary";
}

/**
 * @typedef {Object} IStyles Styles of Button component
 */
interface IStyles {
    [key: string]: any
}

const Button = (props: IButtonProps) => {
    // Constant with the type of button, default is button
    const type = props.type || 'button'
    // Constant with the variant of button, default is primary
    const variant = props.variant || 'primary'
    switch (type) {
        case "basic":
        case "button":
            return (
                <Basic
                    activeOpacity={props.activeOpacity}
                    disabled={props.disabled}
                    icon={props.icon}
                    iconPosition={props.iconPosition}
                    onLongPress={props.onLongPress}
                    onPress={props.onPress}
                    styleButton={props.styleButton}
                    styleText={props.styleText}
                    styleTextDisabled={props.styleTextDisabled}
                    text={props.text}
                    type={props.type}
                    variant={variant}

                />
            );
        case "switch":
            return (
                <Switch
                    disabled={props.disabled}
                    onValueChange={props.onValueChange}
                    styleButton={props.styleButton}
                    styleText={props.styleText}
                    trackColor={props.trackColor}
                    thumbColor={props.thumbColor}
                    text={props.text}
                    value={props.value}
                />
            );       
    }
};

export default Button