import { cva } from "class-variance-authority";


export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      none: "",
      primary: "bg-green-light",
      secondary: "bg-pink-light"
    },
    size: {
      sm: "py-0.5 px-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
})