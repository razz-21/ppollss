import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$sharedComponents: resolve("./src/lib/shared/components"),
			$helpers: resolve("./src/lib/shared/helpers"),
			$actions: resolve("./src/lib/actions"),
			$store: resolve("./src/store"),
			$styles: resolve("./src/styles"),
			$types: resolve("./src/types"),
			$src: resolve("./src")
		}
	}
};

export default config;
