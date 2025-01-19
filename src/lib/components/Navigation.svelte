<script lang="ts">
  import { page } from '$app/state'
  import { isAuthenticated } from '$lib/stores/store'
  import BookIcon from '@assets/icons/BookIcon.svelte'

  export let login: () => void, logout: () => void

  import SearchIcon from '@assets/icons/SearchIcon.svelte'

  const navLinks = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Explore',
      route: '/explore',
    },
    {
      title: 'Community',
      route: '/community',
    },
    {
      title: 'News',
      route: '/news',
    },
  ]
</script>

<div class="nav">
  <section class="nav__content">
    <div class="nav__left">
      <div class="nav__item">
        <a href="/">
          <div class="nav__logo">
            <span>dc.</span>
          </div>
        </a>
      </div>
      {#each navLinks as link}
        <div class="nav__item">
          <a
            href={link.route}
            class="nav__link {page.url.pathname === link.route
              ? 'nav__link--active'
              : ''}">{link.title}</a
          >
        </div>
      {/each}
    </div>
    <div class="nav__right">
      <div class="nav__search-wrapper nav__item">
        <SearchIcon />
        <!-- <input type="text" class="nav__search" placeholder="Search" /> -->
      </div>
      {#if !$isAuthenticated}
        <div class="nav__item">
          <button class="nav__button" on:click={login}>Login</button>
        </div>
      {:else}
        <!-- <div class="nav__item">
          <MessageIcon />
        </div>
        <div class="nav__item">
          <BellIcon />
        </div> -->
        <div class="nav__item">
          <div class="nav__profile-icon" on:click={logout}></div>
        </div>
        <div class="nav__item">
          <button class="nav__button"><BookIcon /><span>Add Book</span></button>
        </div>
      {/if}
    </div>
  </section>
</div>

<style lang="sass">
  @use '../sass/_variables'
  @use '../sass/_breakpoints'
  
  .nav
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: variables.$nav-height
    display: flex
    align-items: center
    justify-content: center

    .nav__content
      margin: 0 90px
      width: 100%
      height: 100%
      display: flex
      justify-content: space-between
      border-bottom: 2px solid black
      padding-left: calc(variables.$nav-gap / 2)
      padding-right: calc(variables.$nav-gap / 2)

      & > div
        display: flex
        align-items: center
        gap: variables.$nav-gap

      .nav__left
        & > .nav__item
          position: relative
          height: 60%
          display: flex
          align-items: center
          &:not(:last-child)::after
            position: absolute
            top: 0
            right: calc(-1 * (variables.$nav-gap / 2))
            width: auto
            height: 100%
            content: ''
            border: 1px solid black
            
        a
          text-decoration: none
          .nav__logo
            span
              font-size: 2.2rem
              font-weight: 700
              color: variables.$text-off-black
        
        .nav__link
          color: variables.$text-off-black
          text-decoration: none
          font-weight: 400
          &--active
            color: variables.$text-off-black
      .nav__right
        & > .nav__item
          position: relative
          height: 60%
          display: flex
          align-items: center
          &::before
            position: absolute
            top: 0
            left: calc(-1 * (variables.$nav-gap / 2))
            width: auto
            height: 100%
            content: ''
            border: 1px solid black
        .nav__search-wrapper
          // padding: 10px 18px 10px 10px
          // border-radius: 8px
          // background: variables.$lighter-gray
          display: flex
          
          // .nav__search
          //   flex: 1
          //   font-family: variables.$font-sans-serif
          //   font-weight: 500
          //   border: none
          //   font-size: 1.4rem
          //   background: none
          //   &::placeholder
          //     color: variables.$text-gray
          //   &:focus
          //     outline: none
        .nav__button
          cursor: pointer
          font-family: variables.$font-sans-serif
          padding: 1.1rem 4rem
          // font-weight: 500
          color: white
          font-size: 1.4rem
          border-radius: 100px
          border: none
          background: variables.$text-off-black
          display: inline-flex
          align-items: center
          span
            margin-top: 2px
            line-height: 0.9
        .nav__profile-icon
          height: 42px
          width: 42px
          background: variables.$light-gray
          border-radius: 100%
          cursor: pointer
            
          


</style>
