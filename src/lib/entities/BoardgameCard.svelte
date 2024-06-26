<script>
    export let boardgame;
</script>

 <div role="listitem" class="home-work-item w-dyn-item">
    <div class="margin-bottom margin-small">
        <a name='{boardgame.anchor}' />
        
        <div class="home-work">
        <a href="{boardgame.link}" class="home-work-link w-inline-block">                            </a>

        <img src="{boardgame.img}" loading="lazy" alt="{boardgame.title}"  class="image-cover-link" />

        <!-- hover:display display-none -->
        <div class="">
            <div class="view-button">
                <div class="view-button-text">View</div>
            </div>
        </div>
        </div>
    </div>
    <div class="margin-bottom margin-tiny">
        <h3 class="heading-h4 text-uppercase">{boardgame.title}</h3>
    </div>
    <div class="w-dyn-list">
        <div role="list" class="home-work-category-list w-dyn-items">
        <div role="listitem" class="w-dyn-item">
            <div class="text-meta text-color-muted">{boardgame.desc}</div>
        </div>
        </div>
    </div>
</div>