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
          <div class='flex flex-row pr-14 pl-14 max-w-[2000px]'>

      <div class="">
          <div  class=" heading-faq text-uppercase">{faq.q} 
          </div>
      </div>

      <span class="h-20 text-6xl text-color-secondary">+</span>
    </div>
  </div>
{/each}
</div>

</section>