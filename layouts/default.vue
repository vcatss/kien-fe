<template>
  <div class="w-full flex flex-wrap">
    <HomepageAds></HomepageAds>
    <HomepageTopNav></HomepageTopNav>
    <HomepageSearchBar></HomepageSearchBar>
    <Nuxt class="w-full"/>
    <HomepageFooter class="mt-12 border-t"></HomepageFooter>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media (min-width: 1536px)
{
  .container {
    max-width: 1300px;
  }
}
</style>