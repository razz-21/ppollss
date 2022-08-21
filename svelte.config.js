import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: {
			renderSync: true,
		},
		scss: {
			prependData: `@use '@material/theme/color-palette' as colors; @import './src/styles/variables.scss';`,
		}
	}),

	kit: {
		alias: {
			"$sharedComponents/*": "./src/lib/shared/components/*",
			"$types/*": "./src/types/*",
			"$styles/*": "./src/styles/*",
			"$interfaces/*": "./src/interfaces/*",
			"$src/*": "./src/*"
		},
		adapter: adapter()
	}
};

export default config;
