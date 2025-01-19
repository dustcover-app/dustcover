<script lang="ts">
  import Navigation from '@components/Navigation.svelte'

  import '@sass/app.sass'

  let { children } = $props()
</script>

<div class="app">
  <div class="content-wrapper">
    <Navigation />
    <main class="container">
      {@render children()}
    </main>
  </div>
</div>

<style lang="sass">
  @use '../lib/sass/_variables'
  .content-wrapper
    main.container
      margin-top: variables.$nav-height
</style>
