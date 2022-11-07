<template>
  <div class="w-full h-[60vh] custom-bg-1 relative">
    <div class="absolute top-0 left-0 w-full flex justify-center">
        <div @mouseleave="selectedMenu = null" class="container grid grid-cols-12 py-4 relative">
            <div  class="w-64 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <button @mouseenter="selectedMenu = item" v-for="(item,index) in model.filter(p=>!p.parent).slice(0,12)" :key="index" type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                    {{item.name}}
                </button>
            </div>
            <div v-if="selectedMenu && modelHover.length >0" class="absolute top-[1rem] bg-white left-[16.5rem] h-[456px] rounded-lg shadow-md w-[78%]">
                <div class="flex w-full">
                    <div class="flex-grow">
                        <div class="w-full grid grid-cols-3 gap-3 p-4">
                            <div v-for="(item,index) in modelHover" :key="index" class="w-full rounded-lg border-r">
                                <span class="w-full flex-noshink">
                                    <div class="grid grid-cols-1 gap-1">
                                        <NuxtLink :to="`/chuyen-muc/${item.slug}`" class="text-blue-500 font-semibold">
                                            {{item.name}}
                                        </NuxtLink>
                                        <span v-for="(item2,index2) in model.filter(p=>p.parent == item._id)" :key="index2">
                                            <NuxtLink :to="`/chuyen-muc/${item2.slug}`">
                                                • {{item2.name}}
                                            </NuxtLink>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex min-w-[234px] h-[456px]">
                        <img class="rounded-lg" src="https://lh3.googleusercontent.com/oGC6TqfN9v8qTKx4Zav3ajA5Nii1m4RaitT1vzix8yESfaTcSifPJw9gBzT3J6vIDZpo9-AIPzWXIypJIeM-9IAt_wsmos_f=w400-rw"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute bottom-[-100px] left-0 w-full flex justify-center">
        <div class="container grid grid-cols-4">
            <section class="rounded-lg">
                <img class="rounded-lg" src="https://lh3.googleusercontent.com/6jF1mjkKeFS6Qz_F9wjudUXWUpSwXfxjdn6lI1f_e08_jsIG3m659SZsvTNCtAqYGcH20pky-qg39Sh9KLQsBbktEHSL2yI=rw-w308"/>
            </section>
            <section class="rounded-lg">
                <img class="rounded-lg" src="https://lh3.googleusercontent.com/UqoVPGkH3mXurfX0lw5_aBQ7iHEXHmCurZxeXybhJvJatXcltHH-BMQbsnoHposdvmVExAhihCTPT1fo000UJKtExuiIG8te=rw-w308"/>
            </section>
            <section class="rounded-lg">
                <img class="rounded-lg" src="https://lh3.googleusercontent.com/abUTAqRZkSyRth-tLur5UahvV-foET4I8WcWjuG6m-h-aGKDZr-L3v7ieRM2RbLvClKkOAtPnPaUBcTWwL_rfGab7K8t6BCvng=rw-w308"/>
            </section>
            <section class="rounded-lg">
                <img class="rounded-lg" src="https://lh3.googleusercontent.com/dP7w2WYyCw_FkVtOt6XSnOYDAIVY901o4ap9Bs-HfZlsUGoLz-ouHgzX4Oj5MueXyNucoFC2Rwf2z1m5BFcBTjuRfKngAC7N=rw-w308"/>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            selectedMenu: null,
        }
    },
    computed:{
        model(){
            return JSON.parse(JSON.stringify(this.$store.state.productCategories.model));
        },
        modelHover(){
            return JSON.parse(JSON.stringify(this.$store.state.productCategories.model.filter(p=>p.parent == this.selectedMenu._id)));
        }
    },
    async mounted(){
        let res = await this.$store.dispatch('productCategories/init')
    }
}
</script>

<style>
.custom-bg-1{
    background-image:url('https://lh3.googleusercontent.com/T4faNR7WOsWykeMJ9HLvjQqJ6NOCmedAY895DIhr9AphLCEuYzNNhoj8SfUgHtDSIUMD5K39aQFS_AJIEI5OQw-ldZiNu-k=rw-w1920');
    background-size:cover;
}
</style>