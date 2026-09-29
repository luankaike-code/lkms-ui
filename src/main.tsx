import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { RoutesApp } from "./routesApp.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
		<ThemeProvider>
			<RoutesApp />
		</ThemeProvider>
  </StrictMode>
)
