<template>
    <div class="form mx-auto mb-12">
        <form action="/" method="post">
            <div class="form__block my-5">
                <label for="note-title" class="block text-xl">Title</label>
                <input v-model="note.title" class="form__input block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-title" id="note-title" type="text" placeholder="Title note">
            </div>

            <div class="form__block my-5 flex">
                <div class="radio mr-5" v-for="(priority, index) in priorities" :key="index">
                    <input
                        v-model="currentPriority"
                        :value="priority.value"
                        :id="'priority' + priority.value"
                        class="visibility-hidden radio__input"
                        type="radio"
                        name="priority"
                    >
                    <label class="radio__label" :for="'priority' + priority.value">{{ priority.label }}</label>
                </div>
            </div>

            <div class="form__block my-5">
                <label class="block text-xl" for="note-description">Description</label>
                <textarea v-model="note.description" class="form__textarea block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-description" id="note-description" cols="30" rows="4" placeholder="Description note" maxlength="200"></textarea>
            </div>

            <button
                @click.prevent="addNote"
                :disabled="note.title.length < 3"
                :class="{'cursor-not-allowed opacity-50': note.title.length < 3 }"
                class="flex mx-auto bg-purple-600 inline-block text-white px-7 py-4 rounded-full text-xl hover:shadow-xl transition-shadow duration-300"
            >
              Add new
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewNote',
    data() {
        return {
            currentPriority: 'no',
            note: {
                title: '',
                description: '',
            },
            priorities: [
                {
                    label: 'No priority',
                    value: 'no'
                },
                {
                    label: 'Medium priority',
                    value: 'medium'
                },
                {
                    label: 'High priority',
                    value: 'high'
                }
            ]
        }
    },
    methods: {
        addNote() {
            if (this.note.title.length < 3) return false;

            this.note.priority = this.currentPriority;
            this.$emit('addNote', this.note);

            this.note.title = '';
            this.note.description = '';
        }
    }
}
</script>

<style scoped>

</style>