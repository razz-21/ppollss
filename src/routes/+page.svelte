<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Pool } from "$interfaces/pool.interface";
  import PoolsCard from "$lib/shared/components/PoolsCard.svelte";

  export let data: {pools: Pool[]};
  export let errors;

  function handlePoolsCardClick(docId: string | undefined): void {
    goto(`/poll/${docId}`);
  }
</script>

<div class="page-container">
  <div class="pools__content-container">
    <h1>PUBLIC POOLS</h1>
    <p>List of public pools created by the users.</p>
    <p></p>
    <div class="pools__items">
      {#each data.pools as pool}
        <PoolsCard {pool} on:click={ () => handlePoolsCardClick(pool.docId) } />
      {/each}
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