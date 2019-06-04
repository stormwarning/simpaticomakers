<template>
    <article class="min-vh-100 lh-copy">
        <header class="center ph3 tc violet">
            <h1
                class="dib center mt3 pv4 ma0 f2 f1-ns f-subheadline-l fw3 lh-solid ttu tracked overflow-hidden bg-white"
            >
                <span>Simpatico</span><br />
                <span class="subtitle relative f3 f2-ns f1-l fw6">
                    Makers
                </span>
            </h1>
        </header>
        <main class="center ph3">
            <nuxt />
        </main>
        <footer class="center mt4 ph3 pv3 bg-near-white">
            <div class="ph4">
                <nav class="mt3">
                    <a
                        class="link dib w2 h2 pa1 violet dim"
                        href="https://www.etsy.com/ca/shop/simpaticomakers"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Etsy</title>
                            <path
                                fill="currentColor"
                                d="M8.564 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.64L1.526.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2L20 19.846c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305H15.63l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z"
                            />
                        </svg>
                    </a>
                    <a
                        class="link dib w2 h2 pa1 violet dim"
                        href="https://www.instagram.com/simpaticomakers/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Twitter</title>
                            <path
                                fill="currentColor"
                                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                            />
                        </svg>
                    </a>
                    <a
                        class="link dib w2 h2 pa1 violet dim"
                        href="https://www.facebook.com/simpatico.makers.1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Facebook</title>
                            <path
                                fill="currentColor"
                                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
                            />
                        </svg>
                    </a>
                </nav>
                <p class="mt5 pt3 bt bw1 b--light-gray"
                    >Made in Edmonton, Alberta</p
                >
            </div>
        </footer>
    </article>
</template>

<script>
export default {
    components: {},

    computed: {},
}
</script>

<style scoped>
header,
main,
footer {
    max-width: 1200px;
}

h1 > span {
    margin-left: 0.1em;
}

.subtitle::before,
.subtitle::after {
    position: absolute;
    top: 50%;
    width: 100%;
    content: '';
    border-top: 2px solid currentColor;
}
.subtitle::before {
    right: calc(100% + 0.5em);
}
.subtitle::after {
    left: calc(100% + 0.5em);
}
</style>
