import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const lineBasicVariants = cva("self-center block border-boder", {
	variants: {
		border: {
			bottom: "border-b-2 boder-b-solid",
			top: "border-t-2 boder-t-solid",
			left: "border-l-2 boder-l-solid",
			right: "border-r-2 boder-r-solid",
		},
	},
	defaultVariants: {
		border: "bottom"
	}
})

export function LineBasic({className, children, border="bottom", ...props}: VariantProps<typeof lineBasicVariants> & HTMLAttributes<HTMLSpanElement>) {
	return (
		<span className={cn(lineBasicVariants({border, className}))} {...props} />
	)
}