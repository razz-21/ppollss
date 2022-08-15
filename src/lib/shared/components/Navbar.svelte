<script lang="ts">
  import Button, { Label } from "@smui/button";
  import { page } from "$app/stores";

  let currentRoute = $page.url.pathname;

</script>

<div class="navbar">
  <div class="container">
    <div class="navbar__title">Ppollss</div>
    <div class="navbar__nav">
      <div class="navbar__nav-item" class:active={ currentRoute === "/" }>
        <a href="/">Public Pools</a>
      </div>
      <div class="divider"></div>
      <div class="navbar__nav-item" class:active={ currentRoute === "/login" }>
        <a href="/">Login</a>
      </div>
      <Button variant="unelevated">
        <Label>Sign up</Label>
      </Button>
    </div>
  </div>
</div>

<style lang="scss">
  .navbar {
    width: 100%;
    height: 70px;
    padding: 0.5rem 2rem;
    background-color: #FFFFFF;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      height: 100%;
      margin: 0 auto;
    }

    &__title {
      padding: 0.5rem 1.25rem;
      background-color: colors.$blue-50;
      font-size: 18px;
      font-style: italic;
      border-radius: 20px;
    }

    &__nav {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      color: colors.$grey-700;

      &-item {
        a {
          padding: 0.5rem;
          color: inherit;
          outline: 0;
          text-decoration: none;
          cursor: pointer;
        }

        &.active {
          a {
            color: colors.$orange-a400;
          }
        }
      }

      .divider {
        width: 1.5px;
        height: 20px;
        background-color: colors.$grey-300;
      }
    }
  }
</style>

<!-- <script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
</script>

<style>
  .top-app-bar-container {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }

  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style> -->
