<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let prominent = false;
  let dense = false;
</script>

<div class="navbar-wrapper">
  <TopAppBar variant="static" color="primary" reversed={true}>
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>Ppolls</Title>
      </Section>
    </Row>
  </TopAppBar>
</div>

<style lang="scss">
  .navbar {
    &-wrapper {
      width: 100%;
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
