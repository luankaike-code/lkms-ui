import { type PropsWithChildren } from "react";

export function MainBase({children}: PropsWithChildren) {
	return (
		<main>
			<h1>Main</h1>
			{ children }
		</main>
	)
}