<template>
  <div class="flex w-full justify-center flex-wrap">
    <div class="container w-full flex flex-wrap">
      <div class="w-full my-2">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="w-full grid grid-cols-1 md:grid-cols-12">
        <span class="col-span-9">
          aa
        </span>
        <span class="col-span-3 grid grid-cols-1 gap-3">
          <section class="rounded-lg shadow-md p-4">
            <span class="w-full my-2 text-green-500 font-semibold pb-2 border-b border-green-500 flex items-center space-x2">
              <span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span class="ml-3">
                Miễn phí giao hàng
              </span>
            </span>
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400 mt-4">
              <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Team size: <span class="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
              </li>
              <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Premium support: <span class="font-semibold text-gray-900 dark:text-white">6 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>Free updates: <span class="font-semibold text-gray-900 dark:text-white">6 months</span></span>
              </li>
          </ul>
          </section>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      model: {
        "_id": "6367efd97bf6d3a3a11c7a3c",
        "buildTags": [
            "SOCKET1155"
        ],
        "qty": 1,
        "customOptions": [],
        "seo": {
            "title": "",
            "description": "",
            "keywords": ""
        },
        "properties": [
            {
                "name": "111",
                "value": "12312312"
            },
            {
                "name": "11",
                "value": "11"
            },
            {
                "name": "12412",
                "value": "4124124"
            },
            {
                "name": "1251251",
                "value": "51251"
            }
        ],
        "categories": [
            {
                "_id": "636344cae8fd69ff63384e21",
                "sort": 0,
                "status": 0,
                "parent": {
                    "_id": "635eb7cb4d32a8bc61e58dde",
                    "parent": {
                        "_id": "635eb7a24d32a8bc61e58dcd",
                        "name": "PC Gaming, Đồ Hoạ"
                    },
                    "name": "PC Gaming, Streaming"
                },
                "slug": "pc-core-i3",
                "name": "PC Core I3",
                "createdAt": "2022-11-03T04:34:18.829Z",
                "updatedAt": "2022-11-03T04:34:27.609Z",
                "__v": 0
            }
        ],
        "content": "123",
        "description": "123",
        "discount": 50,
        "sellPrice": 200,
        "price": 100,
        "gallery": [
            "",
            ""
        ],
        "image": "https://file.huyphungpc.vn/images/temp/1667755982464-1667755981967-logojpg",
        "name": "Ten san pham",
        "createdAt": "2022-11-06T17:33:13.109Z",
        "updatedAt": "2022-11-06T17:33:13.109Z",
        "slug": "ten-san-pham",
        "__v": 0
    }
    }
  }
}
</script>

<style>

</style>