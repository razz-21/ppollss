<script lang="ts">
  import PoolChip from "$lib/shared/components/PoolChip.svelte";
  import Button from "@smui/button/src/Button.svelte";
  import { PoolChipColor } from "$types/pool-chip-color";
  import { Label } from "@smui/button";
  import { goto } from "$app/navigation";

  let poolChoice = "";
</script>


<div class="pool-details__container">
  <div class="pool-details__tags">
    <PoolChip color={PoolChipColor.ORANGE} text="Sample" />
  </div>
  <div class="pool-details__title">
    How do you like you coffee and make it sweet like you never did it before?
  </div>
  <div class="pool-details__subtext">
    by <span>Ernesto Razo Jr</span> about 4 hours ago.
  </div>
  
  <div class="pool-details__choices">
    <div class="choices-item" class:selected={poolChoice === "Value 1"} on:click={() => poolChoice = "Value 1"}>
      <div class="checkmark"></div>
      <input type="radio" bind:group={poolChoice} checked={poolChoice === "Value 1"} value="Value 1">
      <span>Text here</span>
      <span style="margin-left: auto;">50%</span>
      <div class="progress" style:width={"0"}></div>
    </div>
    <div class="choices-item" class:selected={poolChoice === "Value 2"} on:click={() => poolChoice = "Value 2"}>
      <div class="checkmark"></div>
      <input type="radio" bind:group={poolChoice} checked={poolChoice === "Value 2"} value="Value 2">
      <span>Text here</span>
      <span style="margin-left: auto;">50%</span>
      <div class="progress" style:width={"0"}></div>
    </div>
    <div class="choices-item" class:selected={poolChoice === "Value 3"} on:click={() => poolChoice = "Value 3"}>
      <div class="checkmark"></div>
      <input type="radio" bind:group={poolChoice} checked={poolChoice === "Value 3"} value="Value 3">
      <span>Text here</span>
      <span style="margin-left: auto;">50%</span>
      <div class="progress" style:width={"0"}></div>
    </div>
  </div>

  <div class="pool-details__actions-btns">
    <Button on:click={() => history.back()}>
      <Label>Back</Label>
    </Button>
    <Button variant="unelevated">
      <Label>Submit Vote</Label>
    </Button>
  </div>
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
      gap: 2rem 1rem;
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