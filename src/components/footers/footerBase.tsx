import type { PropsWithChildren } from "react";

export function FooterBase({ children }: PropsWithChildren) {
	return (
		<footer>
			{ children }
		</footer>
	)
}