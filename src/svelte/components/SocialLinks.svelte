<script>
    export let items = []
</script>

<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each items as item}
        <a href="{ item.url }" rel="external" class="flex items-start justify-start sm:flex-none sm:block shadow bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg p-4 sm:p-8 text-center sociallink-bg">
            <div class="flex-none w-1/6 sm:flex sm:items-center sm:justify-center sm:mb-2 sm:w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 fill-current">
                    {@html item.icon }
                </svg>
            </div>

            <div>
                <h2 class="font-bold">{ item.title }</h2>
                <p class="text-sm italic">{ item.description }</p>
            </div>
        </a>
    {/each}
</div>