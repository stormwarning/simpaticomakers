<template>
    <article class="min-vh-100 lh-copy">
        <header class="tc violet">
            <h1
                class="dib center mt3 pv4 ma0 f2 f1-ns f-subheadline-l fw3 lh-solid ttu tracked overflow-hidden bg-white"
            >
                <span>Simpatico</span><br />
                <span class="subtitle relative f1 fw6">
                    Makers
                </span>
            </h1>
        </header>
        <main>
            <nuxt />
        </main>
    </article>
</template>

<script>
export default {
    components: {},

    computed: {},
}
</script>

<style scoped>
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
