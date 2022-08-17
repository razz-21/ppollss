<script lang="ts">
  import Navbar from "$lib/shared/components/Navbar.svelte";
  import PoolsCard from "$lib/shared/components/PoolsCard.svelte";
</script>

<div class="page-container">
  <Navbar />

  <div class="pools__content-container">
    <h1>PUBLIC POOLS</h1>
    <p>List of public pools created by the users.</p>
    <p></p>
    <div class="pools__items">
      <PoolsCard />
      <PoolsCard />
      <PoolsCard />
    </div>
  </div>
</div>

<style lang="scss">
  .pools {
    &__content {
      &-container {
        max-width: 800px;
        margin: 0 auto;
        padding-top: 5rem;
        padding-bottom: 5rem;

        h1 {
          font-size: 48px;
          font-weight: 900;
        }
        p {
          font-size: 18px;
          font-style: italic;
          color: colors.$grey-600;
        }
      }
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem 1rem;
      margin-top: 3rem;
    }
  }
</style>