<template>
    <div class="notes grid grid-cols-2 gap-6 my-8">
        <NotesItem v-for="note in notes" :note="note" @removeNote="removeNote" />
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
        removeNote(id) {
            this.$emit('removeNote', id);
        }
    }
}
</script>

<style scoped>

</style>