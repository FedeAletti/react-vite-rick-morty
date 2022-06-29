import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://fedealetti.github.io/react-vite-rick-morty/",
	plugins: [react()],
})
