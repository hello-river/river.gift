<script>
    export let items = []
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each items as item}
        <a href="{ item.url }" rel="external" class="shadow bg-white text-gray-700 hover:bg-rose-800 hover:text-white rounded-lg p-8 flex items-center justify-between">
            <div class="w-1/12 flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6 fill-current" viewBox="0 0 24 24">
                    {@html item.icon }
                </svg>
            </div>

            <div class="w-10/12">
                <h2 class="font-bold">{ item.title }</h2>
                <p class="text-sm italic">{ item.description }</p>
            </div>
        </a>
    {/each}
</div>