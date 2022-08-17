<div
  class="pool-chip__container"
  style="background-color: {colorList[color].background}; color: {colorList[color].textColor}">
  {text}
</div>

<script lang="ts">
  import { PoolChipColor } from "$types/pool-chip-color";

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

  }

  export let color: PoolChipColor = PoolChipColor.ORANGE;
  export let text: string = "";
</script>

<style lang="scss">
  .pool-chip__container {
    width: min-content;
    padding: 0.315rem 0.75rem;
    // color: ;
    border-radius: 25px;
    font-size: 12px;
  }
</style>