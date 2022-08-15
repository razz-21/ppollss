<script lang="ts">
  import Navbar from "$lib/shared/components/Navbar.svelte";
  import Button, { Label } from "@smui/button";
</script>

<div class="page-container">
  <Navbar />
</div>


<Button variant="raised">
  <Label>Raised</Label>
</Button>
<Button variant="unelevated" size={1}>
  <Label>Send a bill</Label>
</Button>
<Button variant="outlined">
  <Label>Outlined</Label>
</Button>
<Button color="secondary" variant="raised">
  <Label>Raised</Label>
</Button>
<Button color="secondary" variant="unelevated">
  Usad
</Button>

<style lang="scss">
  .page-container {
    height: 250px;
    // background-color: colors.$blue-50;
  }
</style>