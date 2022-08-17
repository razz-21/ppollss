<script lang="ts">
  import { page } from "$app/stores";
  import Navbar from "$lib/shared/components/Navbar.svelte";

  import "$styles/style.scss";

  /** Catch if the system is on dark mode */
  // onMount(() => {
  //   darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // });
  const baseUrl = $page.url.origin
</script>

<svelte:head>
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

  <!-- Material Typography -->
  <!-- <link rel="stylesheet" href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css"/> -->
  <!-- <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/> -->

  <!-- SMUI -->
  <link rel="stylesheet" href={`${baseUrl}/src/styles/smui.css`} />
  <!-- <link rel="stylesheet" href="./src/styles/smui-dark.css" media="screen and (prefers-color-scheme: dark)" /> -->
</svelte:head>


<main>
  <Navbar />
  <slot />
</main>

<style lang="scss">
  :global(body)  {
    min-height: 100vh;
    background-color: colors.$grey-100;
  }
</style>