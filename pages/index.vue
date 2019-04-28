<template>
    <section class="mt5 measure center">
        <div class="content f3" v-html="comingSoon"></div>
    </section>
</template>

<script>
import comingSoon from './_content/placeholder.md'

export default {
    computed: {
        comingSoon() {
            return comingSoon
        },
    },
}
</script>
