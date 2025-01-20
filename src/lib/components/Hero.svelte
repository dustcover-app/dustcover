<div class="hero">
  <div class="hero__text">
    <div class="hero__text-rows">
      <div class="hero__text-row">
        <span>reimagine</span>
      </div>
      <div class="hero__text-row">
        <span>your</span>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          width="24"
          height="24"
          color="#000000"
          ><defs
            ><style>
              .cls-63ce7424ea57ea6c8380058e-1 {
                fill: none;
                stroke: currentColor;
                stroke-miterlimit: 10;
              }
            </style></defs
          ><line
            class="cls-63ce7424ea57ea6c8380058e-1"
            x1="21.5"
            y1="12"
            x2="0.5"
            y2="12"
          ></line><polyline
            class="cls-63ce7424ea57ea6c8380058e-1"
            points="13.86 4.36 21.5 12 13.86 19.64"
          ></polyline></svg
        >
        <div class="hero__text-row__circle"></div>
      </div>
      <div class="hero__text-row">
        <div class="hero__text-row__square"></div>
        <span>personal</span>
      </div>
      <div class="hero__text-row">
        <span>library</span>
        <div class="hero__text-row__rectangle"></div>
      </div>
    </div>

    <p class="hero__text-blurb">
      Track your reading journey, discover new books, and connect with
      others&mdash;all in one place. Dustcover is the companion app that you've
      been waiting for. <a href="/">Join the conversation.</a>
    </p>
  </div>
  <div class="hero__graphic">lol</div>
</div>

<style lang="sass">
  @use '../sass/_variables'
  .hero
    width: 90vw
    margin: 0 auto
    display: flex
    padding-top: 8em
    padding-bottom: calc(8em + variables.$nav-height)
    .hero__text
      flex: 1
      padding: 0 calc(0.25 * (90vw / 2))
      .hero__text-blurb
        margin-top: 4em
        width: 30em
        a
          font-weight: 500
          color: variables.$orange

      .hero__text-rows
        display: flex
        width: fit-content
        flex-direction: column
        gap: 2.5em
        .hero__text-row
          display: flex
          align-items: center
          // justify-content: center
          gap: 1.8em
          svg
            height: 10rem
            width: 10rem
            color: variables.$text-off-black
          span
            font-family: variables.$font-title-serif
            font-size: 9rem
            line-height: 1
            margin-top: -0.25em
          .hero__text-row__square
            width: 9rem
            height: 9rem
            background-image: url('$lib/assets/images/green-square-noise.png')
            background-size: cover
          .hero__text-row__circle
            height: 9rem
            width: 9rem
            border-radius: 100%
            background: blue
            background-image: url('$lib/assets/images/blue-circle-noise.png')
            background-size: cover
          .hero__text-row__rectangle
            height: 9rem
            width: 18rem
            background-color: variables.$orange
            background-image: url('$lib/assets/images/orange-rect-noise.png')
            background-size: cover
    .hero__graphic
      flex: 1

</style>
