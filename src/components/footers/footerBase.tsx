import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function FooterBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<footer className={cn("", className)} {...props}>
			{ children }
		</footer>
	)
}