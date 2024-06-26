<script>
  import {
    FeatureCard
  } from '$entities';
  import {
    features
  } from '$shared';


const apiList = [
  {
    title: '/api/the-archaeo',
    link: '/api/the-archaeo'
  },
  {
    title: '/api/the-paleo',
    link: '/api/the-paleo'
  },
  {
    title: '/api/the-castles',
    link: '/api/the-castles'
  },
  {
    title: '/api/the-heritage',
    link: '/api/the-heritage'
  },
]
  // const apiFeature = 	{
	// };

</script>
<section class="section-home-services">
  <div class="page-padding">
    <div class="container-xlarge">
      <div class="padding-vertical padding-xhuge">
        <div class="home-services-grid">
          <div class="home-services-grid-left">
            <div class="home-services-grid-left-inner">
              <!-- <div class="margin-bottom margin-xsmall"><img
									src=""
									loading="lazy"
									width="50"
									alt=""
								/></div> -->
              <div class="max-width-medium">
                <div class="lg:heading-h1 heading-h2 text-uppercase"> THE Stories </div>
                <div class="heading-h1 text-uppercase"> Features </div>
              </div>
            </div>
            <div class="lg:home-services-about top-author-block ">
              <div class='flex flex-row flex-wrap'>
                <!-- <img
								src="/images/oleg-darkdev.png"
								loading="eager"
								width="80"
								alt="Oleg Medvedev"
							/> -->
                <div>
                  <a href='https://oleg-darkdev.vercel.app/' target="_blank" class=''>
                    <div class="margin-bottom margin-tiny">
                      <h2 class="heading-h5 text-uppercase">Oleg Medvedev</h2>
                    </div>
                    <div class="text-meta text-color-muted mb-4">Author & Boardgames designer</div>
                  </a>
                  <!-- portfolio</a> -->
                </div>
              </div>

              <div class=' flex flex-row flex-wrap'>
                <a href='https://github.com/oleg-darkdev/' target="_blank" >
                  <img src="/images/contact/github.svg" loading="eager" class='h-12 w-12' alt="Oleg Medvedev" />
                </a>
                <a href='https://www.linkedin.com/in/oleg-darkdev' target="_blank">
                  <img src="/images/contact/linkedin.svg" loading="eager" class='h-14 w-14'  alt="Oleg Medvedev" />
                </a>
              </div>
            </div>
          </div>
          <div class="home-services-grid-right -mt-14 lg:-mt-0">
            <div class="home-services-grid-right-inner">
              <div
                  class="home-services-card-wrapper"
              >
                  <div class="muted card">
                      <div class="card-padding ">
                          <div class="margin-bottom margin-xsmall">
                              <div class="home-services-item-heading">
                                  <img
                                      src="/images/minil-logo.svg"
                                      loading="lazy"
                                      width="40"
                                      alt=""
                                  />
                                  <h2 class="heading-h3 text-uppercase">Public API</h2>
                              </div>
                          </div>
                          <a name="api" />
                          <div class="text-size-medium mb-6">
                               The API should provide functionality that will allow to efficiently manage and analyze a variety of data obtained during the research of archaeological and paleontological excavations, castles and fortifications, cities included in the list of unesco analysis of cultural heritage used in educational historical board games.
                          </div>


                            {#each apiList as api}
                                  <a href='{api.link}' target="_blank" class=" w-full ">

                                    <div class="bg-[#713f13] px-6 py-3 h-10   my-2  marquee-secondary-text text-[#de7c29]">
                                            {api.title}
                                      </div>
                                  </a>

                              {/each}

                      </div>
                  </div>
              </div>
              {#each features as feature}
							<FeatureCard {feature}/>
							{/each}

						</div>
            <div class="mt-10 flex flex-row flex-wrap lg:hidden">
              <div class='flex flex-row flex-wrap'>
                <!-- <img
								src="/images/oleg-darkdev.png"
								loading="eager"
								width="80"
								alt="Oleg Medvedev"
							/> -->
                <div>
                  <a href='https://oleg-darkdev.vercel.app/' target="_blank" class=''>
                    <div class="margin-bottom margin-tiny">
                      <h2 class="heading-h5 text-uppercase">Oleg Medvedev</h2>
                    </div>
                    <div class="text-meta text-color-muted mb-4">Author & Boardgames designer</div>
                  </a>
                  <!-- portfolio</a> -->
                </div>
              </div>

              <div class='lg:mt-4 flex flex-row flex-wrap'>
                <a href='https://github.com/oleg-darkdev/' target="_blank" >
                  <img src="/images/contact/github.svg" loading="eager" class=' h-20 w-20' alt="Oleg Medvedev" />
                </a>
                <a href='https://www.linkedin.com/in/oleg-darkdev' target="_blank">
                  <img src="/images/contact/linkedin.svg" loading="eager" width="80" alt="Oleg Medvedev" />
                </a>
              </div>
            </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<style>



@media (max-width: 640px) {
  .top-author-block {
    display: none;
  }
}



.home-services-about {
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
</style>
