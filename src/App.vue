<template>
    <div class="sm:mx-auto p-4 max-w-screen-md">
        <h1 class="text-center text-3xl text-purple-600 font-bold">Notes App</h1>

        <new-note @addNote="addNote" />

        <div class="flex">

            <SearchNote @search="search = $event" />

            <div class="flex text-gray-400">
                <button @click="active = true" :class="{'active-element': active}" type="button" class="ml-4 hover:text-purple-600 transition duration-300">
                    <svg class="w-7 h-7">
                        <use xlink:href="./assets/img/sprite.svg#icon-tile"></use>
                    </svg>
                </button>

                <button @click="active = false" :class="{'active-element': !active}" type="button" class="ml-4 hover:text-purple-600 transition duration-300">
                    <svg class="w-7 h-7">
                        <use xlink:href="./assets/img/sprite.svg#icon-list"></use>
                    </svg>
                </button>
            </div>
        </div>

        <Notes :class="{'sm:grid-cols-2': active}">
            <NotesItem v-for="note in filteredNotes" :key="note.id" :note="note" @removeNote="removeNote" @updateNote="updateNote" />
        </Notes>

    </div>
</template>

<script>
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import SearchNote from "@/components/SearchNote";
import NotesItem from "@/components/NotesItem";

export default {
    name: 'App',
    components: {
        NewNote,
        Notes,
        NotesItem,
        SearchNote
    },
    data() {
        return {
            notes: [
                {
                    id: 1,
                    title: 'First note',
                    description: 'anything about this note',
                    priority: 'no',
                    dataAdd: new Date().toLocaleString()
                },
                {
                    id: 2,
                    title: 'Second note',
                    description: 'anything about this note anything about this note anything about this note',
                    priority: 'medium',
                    dataAdd: new Date().toLocaleString()
                },
                {
                    id: 3,
                    title: 'Third note',
                    description: 'anything about this note',
                    priority: 'high',
                    dataAdd: new Date().toLocaleString()
                },
            ],
            search: '',
            active: true,
            countNote: 3
        }
    },
    methods: {
        addNote(note) {
            this.countNote++;
            let {title, description, priority} = note;
            this.notes.push({
                id: this.countNote,
                title,
                description,
                priority,
                dataAdd: new Date().toLocaleString()
            });
        },

        updateNote(note) {
            let index = this.notes.findIndex(item => note.id === item.id);
            this.notes[index].title = note.title;
            this.notes[index].description = note.description;
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
