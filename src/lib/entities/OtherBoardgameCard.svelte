<script>
    import {
    otherBoardgames
  } from '$shared';

  
</script>

<div class="bg-[#b91c1c] card lg:w-[720px] xl:w-[900px] lg:h-72">
    <div class="card-padding flex flex-row flex-wrap">
      <div class="avatar mr-6">
        <div class="lg:w-24 w-40 rounded-full">
          <img src="/images/boardgames/by-pl.png" />
        </div>
      </div>


<div class="max-w-xl">
        <div class="margin-bottom margin-xsmall">
            <div class="home-services-item-heading">
                <h2 class="heading-h3 text-uppercase">Other history related boardgame</h2>
            </div>
        </div>


          <!-- <img
            src="/images/minil-logo.svg"
            loading="lazy"
            width="40"
            alt=""
        /> -->
        <div class="text-meta ">
          {otherBoardgames[0].desc}
        </div>

        <div class="w-[180px] mt-6 mx-6 ">
          <a href="{otherBoardgames[0].link}" target="_blank" class="button--by-pl  w-inline-block">
            <div class="button-inner">
              <div class="button-line-left "></div>
              <div class="button-inner-text">More</div>
              <div class="button-line-right " ></div>
            </div>
          </a>
        </div>
        </div>
    </div>
</div>

							