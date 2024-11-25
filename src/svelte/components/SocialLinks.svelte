<script>
    export let items = []
</script>

<div class="grid grid-cols-3 xl:grid-cols-5 gap-4">
    {#each items as item}
        <a href="{ item.url }" rel="external" class="shadow bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white rounded-lg p-8 text-center">
            <div class="flex items-center justify-center mb-2 w-full">
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