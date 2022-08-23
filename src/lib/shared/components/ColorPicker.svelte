<script lang="ts">
  import { slide } from 'svelte/transition';

  const colorList: {[key: string]: { background: string, textColor: string }} = {
    RED: { background: "#ffcdd2", textColor: "#b71c1c" },
    PINK: { background: "#f8bbd0", textColor: "#880e4f" },
    PURPLE: { background: "#e1bee7", textColor: "#4a148c" },
    DEEP_PURPLE: { background: "#d1c4e9", textColor: "#311b92" },
    INDIGO: { background: "#c5cae9", textColor: "#1a237e" },
    BLUE: { background: "#bbdefb", textColor: "#0d47a1" },
    LIGHT_BLUE: { background: "#b3e5fc", textColor: "#01579b" },
    CYAN: { background: "#b2ebf2", textColor: "#006064" },
    TEAL: { background: "#b2dfdb", textColor: "#004d40" },
    GREEN: { background: "#c8e6c9", textColor: "#1b5e20" },
    LIGHT_GREEN: { background: "#dcedc8", textColor: "#33691e" },
    YELLOW: { background: "#fff9c4", textColor: "#f57f17" },
    ORANGE: { background: "#ffe0b2", textColor: "#e65100" },
  };

  let selectedColor: { background: string, textColor: string } = colorList.BLUE;
  let showColors = false;

  function selectColor(color: { background: string, textColor: string }): void {
    selectedColor = color;
    showColors = false;
  }
</script>

<div class="color-picker__wrapper">
  <div
    class="color-selected"
    style="background-color: {selectedColor.background};"
    on:click|self={() => showColors = !showColors}>
  </div>
  {#if showColors}
    <div class="color-picker__colors" transition:slide="{{duration: 300 }}">
      {#each Object.keys(colorList) as color}
        <div
          class="color-picker__box"
          style="background-color: {colorList[color].background}"
          on:click={() => selectColor(colorList[color])}>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .color-picker {
    &__wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      background-color: #FFFFFF;
      border-radius: 6px;
      cursor: pointer;
    }

    &__colors {
      position: absolute;
      top: 3.25rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      width: 206px;
      height: auto;
      padding: 0.75rem;
      background-color: #FFFFFF;
      box-shadow: 4px 4px 31px -6px colors.$grey-300;
      z-index: 2;
    }

    &__box {
      width: 30px;
      height: 30px;

      &:hover {
        transform: scale(1.1);
        transition: all 150ms ease;
      }
    }
  }

  .color-selected {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }
</style>