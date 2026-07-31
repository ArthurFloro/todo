import type { VariantProps } from "class-variance-authority";
import { inputCheckboxIconVariants, inputCheckboxVariants, inputCheckboxWrapperVariants } from "../utils/input-checkbox-variants";
import type React from "react";
import Icon from "./icon";
import CheckIcon from '../assets/icons/check.svg?react'
import Skeleton from "./skeleton";


interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean
}

export default function InputCheckbox({
    variant,
    size,
    disabled,
    className,
    loading,
    ...props
}: InputCheckboxProps) {
    if (loading) {
        return <Skeleton rounded={"sm"} className={inputCheckboxVariants({ variant: "none", size })} />
    }

    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input type="checkbox" className={inputCheckboxVariants({ variant, size, disabled })} {...props} />
            <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
        </label>
    )
}