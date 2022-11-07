<template>
  <div class="w-full container grid grid-cols-2 gap-3">
    <section class="box-title shadow-md rounded-lg p-3">
        <div class="flex w-full items-center">
            <h3 class="title-new flex-grow">LAPTOP – MACBOOK</h3>
            <span class="bg-green-500 text-white flex w-[140px] rounded-lg px-2">
                Xem tất cả >
            </span>
        </div>
        <div class="grid grid-cols-3 gap-3 w-full">
            <ProductCard v-for="item in 6" :key="item"></ProductCard>
        </div>
    </section>
    <section class="box-title shadow-md rounded-lg p-3">
        <div class="flex w-full items-center">
            <h3 class="title-new flex-grow">Linh kiện máy tính</h3>
            <span class="bg-green-500 text-white flex w-[140px] rounded-lg px-2">
                Xem tất cả >
            </span>
        </div>
        <div class="grid grid-cols-3 gap-3 w-full">
            <ProductCard v-for="item in 6" :key="item"></ProductCard>
        </div>
    </section>
    <section class="box-title shadow-md rounded-lg p-3 col-span-2">
        <div class="box-title flex w-full items-center">
            <h3 class="w-auto pl-2">DÀNH RIÊNG CHO BẠN</h3>
            <span class="flex-grow pl-12">
                <div class="flex w-full items-center">
                    <span class="w-full h-2 rounded-lg bg-blue-500"></span>
                </div>
            </span>
        </div>
        <div class="grid grid-cols-6 gap-3 w-full">
            <ProductCard v-for="item in 12" :key="item"></ProductCard>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/*! CSS Used from: https://itvungtau.vn/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.3.7 ; media=all */
@media all{
*,*:before,*:after{box-sizing:border-box;}
h3{color:#555;width:100%;margin-top:0;margin-bottom:.5em;text-rendering:optimizeSpeed;}
h3{font-size:1.25em;}
@media (max-width: 549px){
h3{font-size:1em;}
}
}
/*! CSS Used from: Embedded */
h3{font-family:"Roboto", sans-serif;}
h3{font-weight:700;}
h3{color:#2B2B2B;}
.box-title .title-new{padding:10px;}
.box-title h3{position:relative;margin-left:25px;}
.box-title h3:before{content:'';height:20px;width:8px;background:#34AA40;position:absolute;left:-15px;top:12px;}
.box-title h3:after{content:'';height:20px;width:8px;background:#34AA40;position:absolute;left:-6px;top:22px;}
/*! CSS Used from: Embedded */
.box-title h3:before,.box-title h3:after{background:#F88000!important;}
/*! CSS Used fontfaces */
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-03FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
</style>