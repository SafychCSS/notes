<template>
    <div class="form mx-auto mb-12">
        <form action="/" method="post">
            <div class="form__block my-5">
                <label for="note-title" class="block text-xl">Title</label>
                <input v-model="note.title" class="form__input block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-title" id="note-title" type="text" placeholder="Title note">
            </div>

            <div class="form__block my-5">
                <label class="block text-xl" for="note-description">Description</label>
                <textarea v-model="note.description" class="form__textarea block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-description" id="note-description" cols="30" rows="4" placeholder="Description note" maxlength="200"></textarea>
            </div>
            <button @click.prevent="addNote" class="flex mx-auto bg-purple-600 inline-block text-white px-7 py-4 rounded-full text-xl hover:shadow-xl transition-shadow duration-300">Add new</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewNote',
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
        addNote() {
            this.$emit('addNote', this.note);
        }
    }
}
</script>

<style scoped>

</style>