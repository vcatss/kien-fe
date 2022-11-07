export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as ProductCard } from '../../components/product/card.vue'
export { default as HomepageAds } from '../../components/homepage/ads.vue'
export { default as HomepageFooter } from '../../components/homepage/footer.vue'
export { default as HomepageSearchBar } from '../../components/homepage/searchBar.vue'
export { default as HomepageSlide } from '../../components/homepage/slide.vue'
export { default as HomepageTopNav } from '../../components/homepage/topNav.vue'
export { default as HomepageTopProduct } from '../../components/homepage/topProduct.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
