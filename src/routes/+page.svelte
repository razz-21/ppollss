<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { firestore } from "../firebase";
  import { collection, getDocs, Timestamp } from "firebase/firestore";
  import type { Pool } from "$interfaces/pool.interface";
  import type { PageData } from "@sveltejs/kit/types/internal";
  import CircularProgress from '@smui/circular-progress';
  import Button, { Label } from "@smui/button";
  import PoolsCard from "$lib/shared/components/PoolsCard.svelte";

  export let data: PageData;
  export let errors;

  let pools: Pool[] = [];
  let isLoading = true;

  getPolls();

  async function getPolls(): Promise<void> {
    const poolsDocsSnapshot = await getDocs(collection(firestore, "pools"));
    pools = poolsDocsSnapshot.docs.map(doc => ({...doc.data(), docId: doc.id})) as Pool[];
    isLoading = false;
  }

  function handlePoolsCardClick(docId: string | undefined): void {
    goto(`/poll/${docId}`);
  }

  function navigateToAddPoll(event: CustomEvent): void {
    goto(`/poll/add`);
  }

  
</script>

<div class="page-container">
  <div class="pools__content-container">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div>
        <h1>PUBLIC POOLS</h1>
        <p>List of public pools created by the users.</p>
      </div>
      <Button variant="unelevated" on:click={navigateToAddPoll}>
        <Label>Add new Poll</Label>
      </Button>
    </div>
    <div class="pools__items">
      {#if isLoading }
        <CircularProgress style="height: 42px; width: 42px; margin: 0 auto;" indeterminate />
      {:else}
        {#if pools.length === 0}
          <div style="text-align: center;">No pools created.</div>
        {:else}
          {#each pools as pool}
            <PoolsCard {pool} on:click={ () => handlePoolsCardClick(pool.docId) } />
          {/each}
        {/if}
      {/if}
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

  #fab__add-poll {
    position: absolute;
    right: 0;
  }
</style>