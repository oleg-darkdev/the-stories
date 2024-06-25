<script>
  // Hero, Footer, Aside 
  import {
    Header,
    Hero,
    Features,
    BoardgamesList,
    BoardgamesLogos,
    Footer,
    FooterTags,
    Stats
  } from '$widgets';
  import { CountriesCard } from '$entities';
  import { coutriesList } from '$shared';
  
</script>
<svelte:head>
  <title>THE Stories</title>
</svelte:head>

<div class="page-wrapper">
  <main class="main-wrapper">
    <Header />
    <Hero />
    <Stats />
    <!-- <BoardgamesLogos />         -->
    <Features />
    <section class="section-marquee">
      <div class="line"></div>
      <div class="marquee-inner">
        <div class="marquee-heading text-outline  text-[#de7c29]">·</div>
        <div class="marquee-heading">#ARCHAEO</div>
        <div class="marquee-heading text-outline  text-[#de7c29]">·</div>
        <div class="marquee-heading text-outline">#PALEO</div>
        <div class="marquee-heading text-outline text-[#de7c29]">·</div>
        <div class="marquee-heading">#CASTLES</div>
        <div class="marquee-heading text-outline  text-[#de7c29]">·</div>
        <div class="marquee-heading text-outline">#HERITAGE</div>
        <div class="marquee-heading text-outline  text-[#de7c29]">·</div>
      </div>
    </section>
    <BoardgamesList />
    <section class="section-cta-contact">
      <FooterTags />
      <div class="page-padding">
        <div class="padding-vertical padding-xhuge">
          <div class="text-align-center">
           

            <!-- <div class="margin-bottom margin-small">
              <div>
                <img src="/images/minil-logo.svg" loading="lazy" alt="favicon images" class='h-20' />
              </div>
            </div> -->
            <div class="margin-bottom margin-medium">
              <div>
                <div class="heading-medium text-uppercase">Let's add </div>
              </div>
              <div>
                <div class="heading-medium text-uppercase">Your country</div>
              </div>
            </div>
            <div class=''>
							<a href="https://oleg-darkdev.vercel.app/" target='_blank' class="button secondary w-inline-block">
              <div class="button-inner">
                <div class="button-line-left"></div>
                <div class="button-inner-text">Get in touch</div> 
                <div class="button-line-right"></div>
              </div>
              </a>
            </div>


            <div class="mt-16 mx-auto max-w-2xl">
            <div class=" margin-xsmall">
                <div class="home-services-item-heading">
                    <h2 class="text-center heading-h3 text-uppercase">Currently available</h2>
                </div>
            </div>
             <div class='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  mx-auto max-w-2xl items-start justify-between content-start'>
            {#each coutriesList as countryData}
              <CountriesCard {countryData}/>
            {/each}
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</div>


<style>
  /* Make text look crisper and more legible in all browsers */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Get rid of top margin on first element in any rich text element */
  .w-richtext> :not(div):first-child,
  .w-richtext>div:first-child> :first-child {
    margin-top: 0 !important;
  }

  /* Get rid of bottom margin on last element in any rich text element */
  .w-richtext>:last-child,
  .w-richtext ol li:last-child,
  .w-richtext ul li:last-child {
    margin-bottom: 0 !important;
  }

  /* Prevent all click and hover interaction with an element */
  .pointer-events-off {
    pointer-events: none;
  }

  /* Enables all click and hover interaction with an element */
  .pointer-events-on {
    pointer-events: auto;
  }

  /* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
  a,
  .w-input,
  .w-select,
  .w-tab-link,
  .w-nav-link,
  .w-dropdown-btn,
  .w-dropdown-toggle,
  .w-dropdown-link {
    color: inherit;
    text-decoration: inherit;
    font-size: inherit;
  }
</style>