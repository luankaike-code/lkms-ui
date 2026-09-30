import { cn } from "@/lib/utils";
import { useCallback, type PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function LinkBasic({ children, href, className}: PropsWithChildren & {href: string, className?: string}) {
	const navigate = useNavigate();

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate(href);
	}, [navigate, href]);

 	return (
		<Button variant="link" className={cn("hover:text-emphasis", className)} onClick={handleClick}>
 			{ children }
 		</Button>
 	)
}