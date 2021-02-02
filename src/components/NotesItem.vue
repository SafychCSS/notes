<template>
    <div class="relative note bg-white shadow hover:shadow-lg transition duration-300">
        <div :class="'priority-' + note.priority" class="note__content flex flex-col h-full relative px-8 py-6 border-l-2 border-transparent">
            <div class="note__top flex justify-between">
                <p class="note__title font-medium text-2xl mb-4">{{ note.title }}</p>
                <div class="btn-group flex-shrink-0 ml-3 flex items-start">
                    <button @click="isEditing" type="button" class="btn-edit mr-3 text-gray-400 hover:text-green-400 transition duration-300">
                        <svg class="w-4 h-4">
                            <use xlink:href="../assets/img/sprite.svg#icon-edit"></use>
                        </svg>
                    </button>
                    <button @click="removeNote(note.id)" type="button"
                            class="note__remove transform text-3xl text-gray-400 hover:text-red-400 transition duration-300 hover:rotate-90">
                        &times;
                    </button>
                </div>
            </div>
            <p class="note__description text-lg my-4">{{ note.description }}</p>
            <span class="note__date text-sm text-gray-400 mt-auto">{{ note.dataAdd }}</span>

        </div>

        <div v-if="editMode" class="note__edit absolute flex flex-col w-full h-full left-0 top-0 bg-white p-4">
            <input
                v-model="title"
                v-focus
                @keydown.esc="cancelEdit"
                name="edit-title"
                class="top-0 w-full mb-3 px-3 py-1 border rounded-md"
                type="text"
            >
            <textarea
                v-model="description"
                name="edit-description"
                class="w-full my-3 px-3 py-1 flex-grow border rounded-md"
                cols="10"
            >
            </textarea>
            <div class="flex">
                <button @click="saveNote" type="button" class="save mr-3 text-gray-400 hover:text-green-400 transition duration-300">
                    <svg class="w-4 h-4">
                        <use xlink:href="../assets/img/sprite.svg#icon-save"></use>
                    </svg>
                </button>
                <button
                    @click="cancelEdit"
                    type="button"
                    class="note__remove transform text-3xl text-gray-400 hover:text-red-400 transition duration-300 hover:rotate-90">
                    &times;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotesItem',
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            description: '',
            editMode: false,
        }
    },
    methods: {
        saveNote() {
            if (!this.title.trim()) {
                this.title = this.note.title;
            }
            this.$emit('updateNote', {
                title: this.title,
                description: this.description,
                id: this.note.id
            });
            this.editMode = false;
        },

        cancelEdit() {
            this.editMode = false;
            this.title = '';
            this.description = '';
        },

        isEditing() {
            this.editMode = true;
            this.title = this.note.title;
            this.description = this.note.description;
        },

        removeNote(id) {
            this.$emit('removeNote', id);
            this.title = '';
            this.description = '';
        }
    },
    /*watch: {
        note() {
            this.localNote = {...this.note}
        }
    },*/
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        },
    },

    created() {
        const onClickOutside = e => {
            if (!this.$el.contains(e.target) && this.editMode)
                this.cancelEdit()
        };
        document.addEventListener('click', onClickOutside);
        this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
    },
}
</script>

<style scoped>

</style>