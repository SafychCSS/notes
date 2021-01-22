<template>
    <div class="sm:mx-auto p-4 max-w-screen-md">
        <h1 class="text-center text-3xl text-purple-600 font-bold">Notes App</h1>

        <div class="form mx-auto mb-12">
            <form action="/" method="post">
                <div class="form__block my-5">
                    <label for="note-title" class="block text-xl">Title</label>
                    <input class="form__input block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-title" id="note-title" type="text" placeholder="Title note">
                </div>

                <div class="form__block my-5">
                    <label class="block text-xl" for="note-description">Description</label>
                    <textarea class="form__textarea block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300" name="note-description" id="note-description" cols="30" rows="4" placeholder="Description note" maxlength="200"></textarea>
                </div>
                <button @click.prevent="" class="flex mx-auto bg-purple-600 inline-block text-white px-7 py-4 rounded-full text-xl hover:shadow-xl transition-shadow duration-300">Add new</button>
            </form>
        </div>

        <div class="flex">
            <div class="find relative flex-auto mr-8">
                <input type="text" name="find" class="border w-full rounded-full py-4 pl-8 pr-20 focus:border-purple-400 transition duration-300" placeholder="Search note...">
                <button class="find__icon absolute right-0 text-gray-400" type="button">
                    <svg class="w-7 h-7 hover:text-purple-600 transition duration-300">
                        <use xlink:href="./assets/img/sprite.svg#icon-search"></use>
                    </svg>
                </button>
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

        <div class="notes grid grid-cols-2 gap-6 my-8">
            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">First note</p>
                <p class="note__description text-lg my-4">asfaswe aerg serhg asfaswe aerg serhg asfaswe aerg asfaswe aerg serhg asfaswe aerg serhg asfaswe aerg asfaswe aerg serhg asfaswe aerg serhg asfaswe aerg asfaswe aerg serhg asfaswe aerg serhg asfaswe a</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>

            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">Second note</p>
                <p class="note__description text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsam.</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>

            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">Second note</p>
                <p class="note__description text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>

            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">Second note</p>
                <p class="note__description text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsam.</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>

            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">Second note</p>
                <p class="note__description text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsam.</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>

            <div class="note relative flex flex-col bg-white shadow p-8 hover:shadow-lg transition duration-300">
                <p class="note__title font-medium text-2xl mb-4">Second note</p>
                <p class="note__description text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsam.</p>
                <span class="note__date text-sm text-gray-400 mt-auto">22.01.2021, 22:27:58</span>
                <button type="button" class="note__remove transform absolute text-3xl text-gray-400 hover:text-purple-600 transition duration-300 hover:rotate-90">&times;</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style lang="scss">

</style>
