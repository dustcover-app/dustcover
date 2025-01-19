<script lang="ts">
  import { page } from '$app/state'
  import { isAuthenticated } from '$lib/stores/store'

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
  ]
</script>

<div class="nav">
  <section class="nav__content">
    <div class="nav__left">
      <a href="/">
        <div class="nav__logo">
          <span>Dustcover</span>
        </div>
      </a>
      <div class="nav__links">
        {#each navLinks as link}
          <a
            href={link.route}
            class="nav__link {page.url.pathname === link.route
              ? 'nav__link--active'
              : ''}">{link.title}</a
          >
        {/each}
      </div>
    </div>
    <div class="nav__right">
      <div class="nav__search-wrapper">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          class="nav__search-icon"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
          />
        </svg>
        <input type="text" class="nav__search" placeholder="Search" />
      </div>
      {#if $isAuthenticated}
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          class="nav__icon-messages"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
          ></path>
        </svg>

        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          class="nav__icon-bell"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
          ></path>
        </svg>
        <div class="nav__profile-icon"></div>
      {/if}
    </div>
  </section>
</div>

<style lang="sass">
  @use '../sass/_variables'
  
  .nav
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: variables.$nav-height
    border-bottom: 1px solid variables.$light-gray
    display: flex
    align-items: center
    justify-content: center

    .nav__content
      margin: 0 90px
      display: flex
      justify-content: space-between
      width: 80em

      & > div
        display: flex
        align-items: center
        gap: 2.5em

      .nav__left
        & > a
          text-decoration: none
          .nav__logo
            span
              font-size: 2.2rem
              font-weight: 700
              color: variables.$text-off-black
        
        .nav__links
          display: inline-flex
          gap: 2.5em
          .nav__link
            color: variables.$text-gray
            text-decoration: none
            font-weight: 500
            &--active
              color: variables.$text-off-black
      .nav__right
        .nav__search-wrapper
          padding: 10px 18px 10px 10px
          border-radius: 8px
          background: variables.$lighter-gray
          display: flex
          .nav__search-icon
            margin-right: 8px
            color: variables.$text-gray
          
          .nav__search
            flex: 1
            font-family: variables.$font-sans-serif
            font-weight: 500
            border: none
            font-size: 1.4rem
            background: none
            &::placeholder
              color: variables.$text-gray
            &:focus
              outline: none

        svg[class*="nav__icon-"]
          color: variables.$text-gray
          cursor: pointer
        .nav__profile-icon
          height: 42px
          width: 42px
          background: variables.$light-gray
          border-radius: 100%
          cursor: pointer
          


</style>
