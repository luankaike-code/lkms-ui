import type { PropsWithChildren } from "react";

export function HeaderBase({ children }: PropsWithChildren) {
	return (
		<header>
			{ children }
		</header>
	)
}

