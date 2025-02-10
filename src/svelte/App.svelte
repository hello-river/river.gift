<script>
    import PriorityLinks from "./components/BubbleLinks.svelte"
    import SocialLinks from "./components/SocialLinks.svelte"
    import Divider from "./components/Divider.svelte"
    import { onMount } from "svelte";

    let promise

    async function getData() {
        const res = await fetch("/data.json");
        return await res.json();
    }

    onMount(() => {
        if (typeof window !== "undefined") promise = getData();
    })
</script>

<div class="w-full py-12">
    {#if promise}
        {#await promise}
            <div class="w-11/12 mx-auto mb-6">
                <div class="flex items-center justify-center">
                    <div class="w-fit bg-gray-800 text-gray-400 shadow rounded font-display font-normal px-8 p-4 text-center">
                        <h1 class="font-semibold text-xl">Loading&hellip;</h1>
                    </div>
                </div>
            </div>
        {:then res}
            <div class="w-11/12 mx-auto mb-6">
                <div class="flex items-center justify-center">
                    <img src="/images/pfp.png" alt="{ res.data.branding.name }'s Avatar" class="w-32 h-32 md:w-40 md:h-40 inline-block bg-gray-800 shadow-xl shadow-gray-950 rounded-full -mx-4 z-50" />
                    <div class="w-fit bg-gray-800 text-white shadow rounded-r font-display font-normal px-8 p-4">
                        <h1 class="font-semibold text-xl">{ res.data.branding.name }</h1>
                        <p class="italic text-sm">{ res.data.branding.description }</p>
                    </div>
                </div>
            </div>

            <Divider title="Support Me"></Divider>

            <div class="w-11/12 lg:w-3/4 2xl:w-1/2 mx-auto my-6">
                <PriorityLinks items={ res.data.links.priority }></PriorityLinks>
            </div>

            <Divider title="Social Links"></Divider>

            <div class="w-11/12 lg:w-3/4 2xl:w-1/2 mx-auto my-6">
                <SocialLinks items={ res.data.links.social }></SocialLinks>
            </div>
        {/await}
    {/if}
</div>