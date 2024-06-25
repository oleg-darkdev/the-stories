<script>
	import { boardgamesList } from '$shared';

</script>


<header class="header">
	<div class="navbar">
		<div class="page-padding">
			<header class="navbar-inner">
				<!-- <div id="w-node-a26b06a4-2c02-bc86-9274-74360e531fd7-0e531fd2" class="navbar-left">
					<div class="navbar-logo">
						<a href="/" aria-current="page" class="w-inline-block w--current">
							<img
								src="https://assets.website-files.com/6397824bd2c756220d7e63e9/63978bae11defc609cd91390_logo.svg"
								loading="eager"
								alt=""
								class="navbar-logo-image"
							/>
						</a>
					</div>
				</div> -->
				<div class="navbar-right">
					<nav class="navbar-menu">
            {#each boardgamesList as boardgame}
						<a href="#{boardgame.anchor}" class="navbar-menu-item-link w-inline-block">
              {boardgame.title}
							<!-- <div class="navbar-menu-item-inner">
								<div></div>
								<div class="navbar-menu-item-line" />
							</div> -->
						</a>
            {/each}
						
					</nav>
					<div class="navbar-right-button">
						<a
							href="https://oleg-darkdev.vercel.app/"
							target="_blank"
							class="button secondary w-inline-block"
						>
							<div class="button-inner">
								<div class="button-line-left" />
								<div class="button-inner-text">Get in touch</div>
								<div class="button-line-right" />
							</div>
						</a>
					</div>
					<div class="mobile-menu-toggle">
						<div class="mobile-menu-toggle-line _01" />
						<div class="mobile-menu-toggle-line _02" />
						<div class="mobile-menu-toggle-line _03" />
					</div>
				</div>
			</header>
		</div>
	</div>
	<div class="mobile-menu">
		<div class="page-padding">
			<div class="container-xxlarge">
				<div class="mobile-menu-wrapper">
					<div class="mobile-menu-nav">
						<a
							href="/"
							aria-current="page"
							class="mobile-menu-nav-link w-inline-block w--current"
						>
							<div class="mobile-menu-nav-text">Home</div>
						</a>
                        {#each boardgamesList as boardgame}

							<a href="#{boardgame.anchor}" class="mobile-menu-nav-link w-inline-block">
								<div class="mobile-menu-nav-text">{boardgame.title}</div>
							</a>
						{/each}

						<a href="https://oleg-darkdev.vercel.app/" class="button secondary w-inline-block">
							<div class="button-inner">
								<div class="button-line-left" />
								<div class="button-inner-text">Get in touch</div>
								<div class="button-line-right" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
