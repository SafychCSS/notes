<template>
    <div class="notes grid grid-cols-2 gap-6 my-8">
        <Note v-for="note in notes" :note="note" @removeNote="removeNote" />
    </div>
</template>

<script>
import Note from "@/components/Note";

export default {
    name: 'Notes',
    components: {
        Note
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