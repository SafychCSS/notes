<template>
    <div class="sm:mx-auto p-4 max-w-screen-md">
        <h1 class="text-center text-3xl text-purple-600 font-bold">Notes App</h1>

        <NewNote :note="note" @addNote="addNote" />

        <div class="flex">
            <div class="find relative flex-auto mr-8">
                <input type="text" name="find" class="border w-full rounded-full py-4 pl-8 pr-20 focus:border-purple-400 transition duration-300" placeholder="Search note...">
                <svg class="find__icon absolute right-0 text-gray-400 w-7 h-7 transition duration-300">
                    <use xlink:href="./assets/img/sprite.svg#icon-search"></use>
                </svg>
            </div>

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

        <Notes :notes="notes" @removeNote="removeNote" />

    </div>
</template>

<script>
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";

export default {
    name: 'App',
    components: {
        NewNote,
        Notes
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
            ]
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
        }
    }
}
</script>

<style lang="scss">

</style>
