<script>
    export let feature;
</script>


<div
    id=""
    class="home-services-card-wrapper"
>
    <div class="muted card">
        <div class="card-padding">
            <div class="margin-bottom margin-xsmall">
                <div class="home-services-item-heading">
                    <img
                        src="/images/minil-logo.svg"
                        loading="lazy"
                        width="40"
                        alt=""
                    />
                    <h2 class="heading-h3 text-uppercase">{feature.title}</h2>
                </div>
            </div>
            <div class="text-size-medium">
                {feature.desc}
            </div>
        </div>
    </div>
</div>
