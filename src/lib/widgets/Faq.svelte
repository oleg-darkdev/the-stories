<script>
  import {
    faqList
  } from '$shared';
</script>



<section class='w-full pb-20'>
    <div class=''>

{#each faqList as faq}
  <div class=''>
      <div  class="margin-bottom margin-xsmall">
          <div class="line"></div>
      </div>
      <!-- <div  class="margin-bottom margin-xsmall">
          <div class="clip">
          <h2  class="text-meta">{faq.q}</h2>
          </div>
      </div> -->
    <div class='flex flex-row px-14 py-6 max-w-[2000px] cursor-pointer' on:click={()=> faq.showAnswer = !faq.showAnswer}>
          <div  class=" heading-faq text-uppercase">
            {faq.q}
          </div>

      <span class="h-20 text-6xl text-color-secondary">+</span>
    </div>

    {#if faq.showAnswer}
      <div class=' px-14 py-6 max-w-[1200px]'>
        {#each faq.a as answer}
            <p  class="text-5xl mb-6">{answer}
            </p>
          {/each}
      </div>
    {/if}
  </div>
{/each}
</div>

</section>
