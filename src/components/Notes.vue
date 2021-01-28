<template>
    <div class="notes grid grid-cols-1 gap-6 my-8">
        <NotesItem v-for="note in notes" :note="note" @removeNote="removeNote" @updateNote="updateNote" />
    </div>
</template>

<script>
import NotesItem from "@/components/NotesItem";

export default {
    name: 'Notes',
    components: {
        NotesItem
    },
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        updateNote(note) {
            this.$emit('updateNote', note);
        },

        removeNote(id) {
            this.$emit('removeNote', id);
        }
    }
}
</script>

<style scoped>

</style>