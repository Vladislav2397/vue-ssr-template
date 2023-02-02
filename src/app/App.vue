<template lang="pug">
#app
    router-view
    ul
        each val in [1, 2, 3, 4, 5]
            li= val
</template>

<script>
export default {
    name: 'App',
}
</script>
