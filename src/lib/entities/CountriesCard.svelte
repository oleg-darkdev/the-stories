<script>
    export let countryData;
</script>


    <div class=" card max-w-sm bg-[#18181b] mx-6 my-4 ">
        <div class="card-padding">
            <div class="margin-bottom margin-xsmall">
                <div class="home-services-item-heading">
                    <h2 class="text-left heading-h5 text-[#de7c29] text-uppercase">{countryData.title} countries</h2>
                </div>
            </div>
            {#if countryData.countries.length == 0}
              <div class="margin-top margin-small">
                  <a href="https://oleg-darkdev.vercel.app/" target="_blank" class="button secondary w-inline-block">
                      <div class="button-inner">
                      <div class="button-line-left"></div>
                      <div class="button-inner-text">Get in Touch</div>
                      <div class="button-line-right"></div>
                      </div>
                  </a>
                </div>

            {:else}
                {#each countryData.countries as country}
            <div class='flex flex-row my-4 items-center content-center'>

                <img
                        src="/images/list-item.svg"
                        loading="lazy"
                        alt=""
                        class='h-6 mr-3 '
                    />

                <p class="text-size-large text-[#713f13]">
                    {country}
                </p>
                            </div>
            {/each}
          {/if}

        </div>
    </div>
							