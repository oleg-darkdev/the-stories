<script>
  import {
    OtherBoardgameCard
  } from '$entities';
  import {
    boardgamesList
  } from '$shared';
</script>

<footer class="footer  pb-6">
  <div class="page-padding">
    <div class="container-xlarge">
      <div class="padding-vertical padding-huge">
        <div class="footer-grid">
          <div class="footer-grid-left">
            <a href="/" class="w-inline-block w--current">
              <img src="/images/logo.png" loading="lazy" alt="The-stories logo" />
            </a>
          </div>
          <div class="footer-grid-right">
            <div class="footer-grid-right-inner">
              <div class="footer-column">
                <div class="margin-bottom margin-medium">
                  <h3 class="heading-h6 text-uppercase">Boardgames</h3>
                </div>
                <div class="nav"> {#each boardgamesList as boardgame}
                    
									<a href="{boardgame.link}" target="_blank"  class="nav-item inverse w-inline-block w--current">
										<div class="nav-item-text">{boardgame.title}</div>
										<div class="nav-item-line inverse"></div>
									</a>
                  {/each}
                    
									<div class="w-[180px] -mt-4 margin-small">
										<a href="https://oleg-darkdev.vercel.app/" target="_blank" class="button secondary w-inline-block">
											<div class="button-inner">
												<div class="button-line-left" ></div>
												<div class="button-inner-text">Get in Touch</div>
												<div class="button-line-right"></div>
											</div>
										</a>
									</div>
								</div>
							</div>
              <OtherBoardgameCard />

            </div>
					</div>
        </div>
			</div>
		</div>
	</div>
</footer>