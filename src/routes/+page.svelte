<script lang="ts">
  import { isAuthenticated, user } from '$lib/stores/store'
  import Hero from '@components/Hero.svelte'
</script>

<main>
  <!-- Application -->
  {#if !$isAuthenticated}
    <!-- <p>Not logged in</p> -->
    <Hero />
  {:else}
    <p>Welcome back, {$user!.name?.split(' ')[0]}!</p>
  {/if}
</main>

<style>
</style>
