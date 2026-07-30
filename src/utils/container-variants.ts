import { cva } from "class-variance-authority";


export const containerVariants = cva("mx-auto", {
    variants: {
        size: {
            md: "max-w-126 px-2"
        }
    },
    defaultVariants: {
        size: "md"
    }
})