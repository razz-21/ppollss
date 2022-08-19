<script lang="ts">
  import { doc, getDoc } from "firebase/firestore";
  import { firestore } from "../../../firebase"
  import type { Pool } from "$interfaces/pool.interface";
  import { PoolChipColor } from "$types/pool-chip-color";
  import PoolChip from "$lib/shared/components/PoolChip.svelte";
  import Button, { Label } from "@smui/button";
  import CircularProgress from '@smui/circular-progress';

  // export let data;
  // export let errors;
  let poolDetails: Pool;
  let poolChoice = "";
  let isLoading = true;
  let userAlreadyVoted = false;


  getPoolDetails();

  async function getPoolDetails(): Promise<void> {
    const poolDetailsDocSnapshot = await getDoc(doc(firestore, "pools", "QKYOXVMWb0JgipxFCLWq"));
    poolDetails = poolDetailsDocSnapshot.data() as Pool;
    isLoading = false;
  }
</script>


<div class="pool-details__container">
  {#if isLoading}
    <CircularProgress style="height: 42px; width: 42px; display: flex; margin: 0 auto;" indeterminate />
  {:else}
    <div class="pool-details__tags">
    {#each poolDetails?.tags as tag}
      <PoolChip color={tag.color} text={tag.name}/>
    {/each}
  </div>
  <div class="pool-details__title">
    {poolDetails?.title}
  </div>
  <div class="pool-details__subtext">
    by <span>{poolDetails?.author}</span> about 4 hours ago.
  </div>
  
  <div class="pool-details__choices">
    {#each poolDetails.options as option}
      <div class="choices-item" class:selected={poolChoice === option.text} on:click={() => poolChoice = option.text}>
        <div class="checkmark"></div>
        <input type="radio" bind:group={poolChoice} checked={poolChoice === option.text} value={option.text}>
        <span>{option.text}</span>
        <span style="margin-left: auto;">50%</span>
        <div class="progress" style:width={"0"}></div>
      </div>
    {/each}
  </div>

  <div class="pool-details__actions-btns">
    <Button on:click={() => history.back()}>
      <Label>Back</Label>
    </Button>
    <Button variant="unelevated">
      <Label>Submit Vote</Label>
    </Button>
  </div>
  {/if}
</div>

<style lang="scss">
  .pool-details {
    &__container {
      max-width: 900px;
      margin: 0 auto;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    &__tags {
      display: flex;
      align-items: center;
      gap: 2rem 0.5rem;
      margin-bottom: 1rem;
    }

    &__title {
      font-size: 46px;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &__subtext {
      font-size: 16px;
      color: colors.$grey-600;
      margin-bottom: 3rem;

      span {
        &:nth-child(1) {
          color: colors.$light-blue-900;
        }
      }
    }

    &__choices {
      display: flex;
      flex-direction: column;
      row-gap: 1.25rem;
      position: relative;
      width: 100%;
      // -webkit-user-select: none;
      // -moz-user-select: none;
      // -ms-user-select: none;
      // user-select: none;

      .choices-item {
        position: relative;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        padding: 1.25rem 1.5rem;
        font-size: 18px;
        background-color: #FFFFFF;
        border-radius: 12px;
        cursor: pointer;
        overflow: hidden;
        transition: all ease 150ms;

        &.selected {
          box-shadow: 4px 4px 31px -6px rgba($color: colors.$blue-500, $alpha: 0.15);
          border-color: colors.$blue-500;
          transform: scale(1.02);
          transition: all ease 150ms;
          font-weight: 800 !important;

          .checkmark {
            background-color: colors.$blue-400;
          }
        }

        span {
          z-index: 2;
        }
      }

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        position: absolute;
        left: 0;
        width: 6px;
        height: 100%;
        background-color: unset;
      }

      .progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: rgba($color: colors.$blue-300, $alpha: 0.15);
      }
    }

    &__actions-btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      column-gap: 0.75rem;
      margin-top: 3rem;
    }
  }
</style>