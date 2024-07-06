<script>
  import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
        const expeditionsCountUp = new CountUp('expeditions', 12, { enableScrollSpy: true, duration: 7 }),
        castlesCountUp = new CountUp('castles', 850, { enableScrollSpy: true, duration: 5 }),
        artifactsCountUp = new CountUp('artifacts', 20000, { enableScrollSpy: true, duration: 10 }),
        countriesCountUp = new CountUp('countries', 5, { enableScrollSpy: true, duration: 7 });
	});

  import { stats } from '$shared';
</script>

<section class="section-home-stats">
    <div class="page-padding">
    <div class="container-xlarge">
        <div class="padding-top padding-xxlarge">
        <div class="home-stats-grid">

        {#each stats as stat}
        <div >
            <div  class="margin-bottom margin-xsmall">
                <div class="line"></div>
            </div>
            <div  class="margin-bottom margin-xsmall">
                <div class="clip">
                <h2  class="text-meta">{stat.subTitle}</h2>
                </div>
            </div>
            <div class="clip">
                <div  class="heading-small text-uppercase" id={stat.id}> <span class="text-color-secondary">+</span>
                </div>
            </div>
            </div>
        {/each}

        </div>

        </div>
    </div>
    </div>
</section>
