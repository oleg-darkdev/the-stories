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
                    <div role="listitem" class="home-work-item w-dyn-item">
                        <div class="margin-bottom margin-small">
                            <a name='{boardgame.anchor}' />
                            
                            <div class="home-work">
                            <a href="{boardgame.link}" class="home-work-link w-inline-block">                            </a>

                            <img src="{boardgame.img}" loading="lazy" alt="{boardgame.title}"  class="image-cover-link" />
                            <!-- <div class="home-project-button-wrapper">
                                <div class="view-button">
                                    <div class="view-button-text">View</div>
                                </div>
                            </div> -->
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