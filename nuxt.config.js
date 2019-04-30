import { version } from './package.json'

const BASE_TITLE = 'Simpatico Makers'

function getVersion() {
    let string = JSON.stringify(version) || ''
    return string.replace(/"/g, '')
}

export default {
    mode: 'universal',

    /**
      Headers of the page
     */
    head: {
        htmlAttrs: { class: 'bg-white' },
        title: BASE_TITLE,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                meta: 'description',
                content: '',
            },

            { name: 'apple-mobile-web-app-title', content: BASE_TITLE },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: BASE_TITLE },
            {
                name: 'twitter:description',
                content: '',
            },
            // { name: 'twitter:creator', content: '@stormwarning' },
            // {
            //     name: 'twitter:image:src',
            //     content: 'https://polychroma.now.sh/icon-1024.png',
            // },

            { property: 'og:title', content: BASE_TITLE },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://simpaticomakers.ca/' },
            // {
            //     property: 'og:image',
            //     content: 'https://polychroma.now.sh/icon-1024.png',
            // },
            {
                property: 'og:description',
                content: '',
            },
            { property: 'og:site_name', content: BASE_TITLE },
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Raleway:300,400,600',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },

            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        ],
    },

    /**
      Global CSS
     */
    css: ['~assets/css/main.css'],

    env: {
        VERSION: getVersion(),
    },

    build: {
        postcss: {
            plugins: {
                // https://github.com/jonathantneal/postcss-advanced-variables#features
                // 'postcss-advanced-variables': {},

                // https://preset-env.cssdb.org/features
                'postcss-preset-env': {
                    stage: 0,
                },
            },
        },
    },

    plugins: [],

    modules: [
        // ['@nuxtjs/google-analytics', { ua: 'UA-58836125-4' }],
        ['@nuxtjs/markdownit', { preset: 'commonmark', typographer: true }],
    ],
}
