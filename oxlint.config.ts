import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: [
    "dist/**"
  ],
	rules: {
		"react/set-state-in-effect": "error",
		"react/exhaustive-deps": "error",
		"react/rules-of-hooks": "error"
	}
});