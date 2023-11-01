import { defineConfig } from 'vite'
const path = require('path')
export default defineConfig({
    resolve: {
        alias: {
            '@orillusion/core': path.resolve(__dirname, '../../src'),
            '@orillusion': path.resolve(__dirname, '../')
        }
    },
    build: {
        lib: {
            entry: path.resolve('index.ts'),
            name: 'Effect',
            fileName: (format) => `effect.${format}.js`
        },
        rollupOptions: {
            external: ['@orillusion/core'],
            output: {
                globals: {
                    '@orillusion/core': 'Orillusion'
                }
            }
        }
    }
})