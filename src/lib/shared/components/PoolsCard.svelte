<div class="pools__wrapper" on:click>
  <div class="pools__tags">
    {#each pool.tags as tag}
      <PoolChip color={tag.color} text={tag.name}/>
    {/each}
  </div>
  <div class="pools__title">{pool.title}</div>
  <div class="pools__details">
    <div class="pools__author-time-duration">
      <span class="author-name">{pool.author}</span>
      <div class="dot"></div> <span>{timeAgo(pool.createdAt.toDate())}</span>
    </div>
    <div class="pools__total-votes">{pool.totalVotes} Votes</div>
  </div>
</div>

<script lang="ts">
  import type { Pool } from "$interfaces/pool.interface";
  import PoolChip from "./PoolChip.svelte";
  import { timeAgo } from "$helpers/timeAgo";

  export let pool: Pool;
</script>

<style lang="scss">
  .pools {
    &__wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2.5rem 1.5rem;
      min-height: 120px;
      background-color: #FFFFFF;
      border: 1px solid colors.$grey-300;
      border-radius: 12px;
      cursor: pointer;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &__details {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__author-time-duration {
      display: flex;
      align-items: center;
      color: colors.$grey-600;
      font-size: 14px;

      .author-name { color: colors.$blue-900; font-style: italic; }
      .dot {
        width: 4px;
        height: 4px;
        margin: 0 0.5rem;
        background-color: colors.$grey-400;
        border-radius: 50px;
      }
    }

    &__total-votes {
      padding: 0.25rem 0.75rem;
      background-color: colors.$purple-50;
      color: colors.$purple-900;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 700;
    }

    &__tags {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
</style>