<script>
	import { BoardgameCard } from '$entities';
	import { boardgamesList } from '$shared';
</script>


<section class="section-home-work">
    <div class="page-padding">
    <div class="padding-bottom padding-xxlarge">
        <div class="padding-top padding-xlarge">
        <div class="margin-bottom margin-medium">
            <div class="w-dyn-list">
            <div role="list" class="home-work-grid w-dyn-items">
                
                {#each boardgamesList as boardgame}
                    <div role="listitem" class="home-work-item w-dyn-item group">
                        <div class="margin-bottom margin-small ">
                            <a name='{boardgame.anchor}' />
                            
                            <div class="home-work">
                            <a href="{boardgame.link}" target="_blank" class="w-full h-full">                            

                            <img src="{boardgame.img}" loading="lazy" alt="{boardgame.title}"  class="image-cover-link" />
                                <div class="home-project-button-wrapper invisible  group-hover:visible">
                                    <div class="view-button">
                                        <div class="view-button-text">View</div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        </div>
                        <div class="margin-bottom margin-tiny">
                            <div class="home-services-item-heading">
                                <img
                                    src="/images/minil-logo.svg"
                                    loading="lazy"
                                    width="40"
                                    alt=""
                                />
                            <h3 class="heading-h4 text-uppercase">{boardgame.title}</h3>
                </div>

                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="home-work-category-list w-dyn-items">
                            <div role="listitem" class="w-dyn-item">
                                <div class="text-meta text-color-muted">{boardgame.desc}</div>
                            </div>
                            </div>
                        </div>
                    </div>
                {/each}
                
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>



<style>
.home-project-button-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.view-button {
  z-index: 30;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
  height: 100px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 50%;
  background-color: #DE7C29;
  -webkit-backdrop-filter: blur(2rem);
  backdrop-filter: blur(2rem);
  -webkit-transition: -webkit-transform 0.1s linear;
  transition: transform 0.1s linear;
  transition: transform 0.1s linear, -webkit-transform 0.1s linear;
}
.view-button-text {
  font-family: "Clash Display", sans-serif;
  font-size: 13px;
  line-height: 140%;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>