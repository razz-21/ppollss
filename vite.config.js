import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$store: resolve("./src/store"),
			$styles: resolve("./src/styles"),
			$sharedComponents: resolve("./src/lib/shared/components"),
			$types: resolve("./src/types")
		}
	}
};

export default config;
