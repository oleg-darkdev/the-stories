<script>
  import {
    faqList
  } from '$shared';
</script>



<section class='w-full pb-20'>
    <div class=''>

{#each faqList as faq}
  <div class=' faq-item  '>
      <div  class="margin-bottom margin-xsmall">
          <div class="line"></div>
      </div>
      <!-- <div  class="margin-bottom margin-xsmall">
          <div class="clip">
          <h2  class="text-meta">{faq.q}</h2>
          </div>
      </div> -->
    <div class='flex flex-row lg:px-14 px-2 py-6 max-w-[2000px] cursor-pointer' on:click={()=> faq.showAnswer = !faq.showAnswer}>
          <div  class="heading-faq text-uppercase">
            {faq.q}
          </div>

      <span class="h-20 text-6xl text-color-secondary">+</span>
    </div>

    {#if faq.showAnswer}
      <div class=' lg:px-14 px-2 py-6 max-w-[1200px]'>
        {#each faq.a as answer}
            <p  class="text-size-medium mb-6">{answer}
            </p>
          {/each}
      </div>
    {/if}
  </div>
{/each}
</div>

</section>


<style>
  .faq-item:hover {
    border: 10px solid #DE7C29;
  }
  .faq-item:hover {
    border: 10px solid #DE7C29;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: border-width 0.3s;
    transition: border-width 0.3s;
  }

  .heading-faq {
  font-family: "Clash Display", sans-serif;
  font-size: 3rem;
  line-height: 110%;
  font-weight: 500;
}
.heading-faq.text-uppercase {
  line-height: 100%;
  font-weight: 600;
  letter-spacing: 2px;
}
@media screen and (max-width: 991px) {
  .faq-item {
    cursor: auto;
  }
  .faq-item:hover {
    border-style: none;
    border-width: 0;
  }
}
@media screen and (max-width: 991px) {
  .heading-faq {
    font-size: 3rem;
  }
}

@media screen and (max-width: 767px) {
  .heading-faq {
    font-size: 2.25rem;
  }
}
@media screen and (max-width: 479px) {
  .heading-faq {
    font-size: 1.25rem;
  }
}
</style>
