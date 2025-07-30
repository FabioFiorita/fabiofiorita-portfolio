import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: "jsdom",
		setupFiles: ["./src/test-setup.ts"],
		dangerouslyIgnoreUnhandledErrors: true,
		exclude: ["tests/**", "e2e/**", "node_modules/**"],
	},
});
