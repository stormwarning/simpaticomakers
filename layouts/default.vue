<template>
    <article class="min-vh-100 lh-copy">
        <header class="center ph2 tc violet">
            <h1
                class="dib center mt3 pv4 ma0 f2 f1-ns f-subheadline-l fw3 lh-solid ttu tracked overflow-hidden bg-white"
            >
                <span>Simpatico</span><br />
                <span class="subtitle relative f1 fw6">
                    Makers
                </span>
            </h1>
        </header>
        <main class="center ph2">
            <nuxt />
        </main>
        <footer class="center mt4 ph2 pv3 bg-near-white">
            <div class="ph4">
                <nav class="mt3">
                    <a
                        class="link dib w2 h2 violet dim"
                        href="#"
                        rel="noopener norefer"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path
                                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            ></path>
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
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
