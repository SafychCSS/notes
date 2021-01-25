<template>
    <div class="find relative flex-auto mr-8">
        <input v-model="search" type="text" name="find" class="border w-full rounded-full py-4 pl-8 pr-20 focus:border-purple-400 transition duration-300" placeholder="Search note...">
        <svg class="find__icon absolute right-0 text-gray-400 w-7 h-7 transition duration-300">
            <use xlink:href="../assets/img/sprite.svg#icon-search"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'SearchNote',
    data() {
        return {
            search: ''
        }
    },

    watch: {
        search(value) {
            this.$emit('search', value)
        }
    }
}
</script>

<style scoped>

</style>