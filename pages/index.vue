<template>
    <section>
        <div class="content" v-html="comingSoon"></div>
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
