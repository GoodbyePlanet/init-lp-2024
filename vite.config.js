import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer({
		filename: './stats.html', // Output file for the visualizer report
		open: true,               // Automatically open the report in your default browser after build
		gzipSize: true,           // Include gzipped size in the report
		brotliSize: true,         // Include Brotli compressed size in the report
	})],
	build: {
		rollupOptions: {
			plugins: [visualizer()], // Include the visualizer plugin in Rollup's options
		},
	},
	resolve: {
		alias: {
			'three$': fileURLToPath(new URL('./src/three-exports.js', import.meta.url)),
			// 'node_modules/three/build/three.module.js': fileURLToPath(new URL('./src/three-exports.js', import.meta.url))
		},
	},
});
