<template>
    <div class="sm:mx-auto p-4 max-w-screen-md">
        <h1 class="text-center text-3xl text-purple-600 font-bold">Notes App</h1>

        <new-note :note="note" @addNote="addNote" />

        <div class="flex">

            <SearchNote @search="search = $event" />

            <div class="flex text-gray-400">
                <button type="button" class="ml-4">
                    <svg class="w-7 h-7 active-element hover:text-purple-600 transition duration-300">
                        <use xlink:href="./assets/img/sprite.svg#icon-tile"></use>
                    </svg>
                </button>

                <button type="button" class="ml-4">
                    <svg class="w-7 h-7 hover:text-purple-600 transition duration-300">
                        <use xlink:href="./assets/img/sprite.svg#icon-list"></use>
                    </svg>
                </button>
            </div>
        </div>

        <Notes :notes="filteredNotes" @removeNote="removeNote" />

    </div>
</template>

<script>
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import SearchNote from "@/components/SearchNote";

export default {
    name: 'App',
    components: {
        NewNote,
        Notes,
        SearchNote
    },
    data() {
        return {
            note: {
                title: '',
                description: '',
            },
            notes: [
                {
                    id: 1,
                    title: 'First note',
                    description: 'anything about this note',
                    dataAdd: new Date().toLocaleString()
                },
                {
                    id: 2,
                    title: 'Second note',
                    description: 'anything about this note anything about this note anything about this note',
                    dataAdd: new Date().toLocaleString()
                },
                {
                    id: 3,
                    title: 'Third note',
                    description: 'anything about this note',
                    dataAdd: new Date().toLocaleString()
                },
            ],
            search: ''
        }
    },
    methods: {
        addNote(note) {
            if (this.note.title.length < 3) return false;
            let {title, description} = note;
            this.notes.push({
                id: this.notes.length + 1,
                title: title,
                description: description,
                dataAdd: new Date().toLocaleString()
            });

            this.note.title = '';
            this.note.description = '';
        },

        removeNote(id) {
            let index = this.notes.findIndex(item => id === item.id);
            this.notes.splice(index, 1);
        },
    },
    computed: {
        filteredNotes() {
            let notes = this.notes,
                search = this.search.toLowerCase();

            if (!search) return notes;
            notes = notes.filter(item => {
                if (item.title.toLowerCase().startsWith(search)) {
                    return item;
                }
            });
            return notes;
        }
    }
}
</script>

<style lang="scss">

</style>
