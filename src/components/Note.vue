<template>
    <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
        <p class="note__title font-medium text-2xl mb-4">{{ note.title }}</p>
        <p class="note__description text-lg my-4">{{ note.description }}</p>
        <span class="note__date text-sm text-gray-400 mt-auto">{{ note.dataAdd }}</span>
        <button @click="removeNote(note.id)" type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
    </div>
</template>

<script>
export default {
    name: 'Note',
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        removeNote(id) {
            this.$emit('removeNote', id);
        }
    }
}
</script>

<style scoped>

</style>