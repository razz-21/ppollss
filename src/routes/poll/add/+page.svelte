<script lang="ts">
  import { collection, addDoc, Timestamp } from "firebase/firestore";
  import { firestore } from "$src/firebase";
  import type { SnackbarComponentDev } from '@smui/snackbar';
  import PoolChip from "$sharedComponents/PoolChip.svelte";
  import ColorPicker from "$sharedComponents/ColorPicker.svelte";
  import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  import Snackbar, { Actions, Label as SnackLabel } from '@smui/snackbar';

  interface AddPoll {
    question: string;
    options: string[];
    tags: { name: string, color: string }[]
  }

  let pollData: AddPoll = {
    question: "",
    options: [""],
    tags: []
  };
  let tag = { name: "", color: "" };
  let snackbar: SnackbarComponentDev;
  let snackbarMessage = "";

  async function addNewPoll(): Promise<void> {
    const options = pollData.options.map((option) => ({ text: option, numberOfVotes: 0 }))
    const addPollDocRef = await addDoc(collection(firestore, "pools"), {
      title: pollData.question,
      author: "Ernesto",
      color: "BLUE",
      discussions: [],
      options,
      tags: pollData.tags,
      totalVotes: 0,
      userVotes: [],
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    })
    snackbarMessage = "Poll successfully created."
    snackbar.open();
    resetPollData();
  }

  function addOption(): void {
    pollData.options.push("");
    pollData = pollData;
  }

  function addTag(): void {
    const newTag = { name: tag.name, color: "BLUE" };
    pollData.tags.push(newTag);
    tag = {
      name: "",
      color: "BLUE"
    };
    pollData = pollData;
  }

  function resetPollData(): void {
    pollData = {
      question: "",
      options: [""],
      tags: []
    }
  }

  function onFormSubmit(): void {};

  function handleSnackbarClose(e: CustomEvent<{ reason: string | undefined }>): void {
    // reason = e.detail.reason ?? 'Undefined.';
  }
</script>

<!-- Template -->
<div class="add-poll__container">
  <form on:submit|preventDefault={onFormSubmit}>
    <div class="form-input">
      <label class="form-label" for="poll-title">Question:</label>
      <input
        type="text"
        name="poll-title"
        id="poll-title"
        placeholder="What is your poll about?"
        bind:value={pollData.question}
      />
    </div>
    <div class="form-options">
      <label class="form-label" for="poll-title">Options:</label>
      {#each pollData.options as option, index}
        <div class="form-input">
          <input
            type="text"
            class="small"
            name="poll-option-{index + 1}"
            id="poll-option-{index + 1}"
            placeholder="Add Option"
            bind:value={option}
          />
        </div>
      {/each}
      <Button type="button" on:click={() => addOption()}><Label>Add option</Label></Button>
    </div>
    <div class="form-poll-tags">
      <div class="form-input">
        <label class="form-label" for="poll-tags">Tags:</label>
        <ColorPicker />
        <input
          type="text"
          name="poll-tags"
          id="poll-tags"
          class="small"
          placeholder="Add tags"
          bind:value={tag.name}
          on:keyup|preventDefault={(event) => event.key === "Enter" && addTag()}
        />
      </div>
      <div class="tag-list">
        {#each pollData.tags as tag}
          <PoolChip text={tag.name} color={tag.color} />
        {/each}
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: flex-end; column-gap: 0.5rem;">
      <Button type="button" on:click={() => history.back()}><Label>Back</Label></Button>
      <Button type="button" variant="unelevated" on:click={() => addNewPoll() }><Label>Add Poll</Label></Button>
    </div>
  </form>
</div>

<div>
  <Snackbar bind:this={snackbar} on:SMUISnackbar:closed={handleSnackbarClose}>
  <SnackLabel>{snackbarMessage}</SnackLabel>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>
</div>
<!-- /Template -->

<style lang="scss">
  .add-poll {
    &__container {
      max-width: 800px;
      margin: 0 auto;
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .form-input {
    margin-bottom: 0.5rem;

    input {
      display: block;
      width: 100%;
      padding: 1rem;
      font-size: 22px;
      outline: 0;
      border-radius: 6px;
      border: 1px solid transparent;
      appearance: none;
      transition: all ease 300ms;

      &:focus {
        border-color: #2196f3;
        box-shadow: 4px 4px 31px -6px rgb(33 150 243 / 15%);
        transition: border-color ease 300ms;
      }

      &::placeholder {
        color: colors.$grey-400;
      }

      &.small {
        padding: 0.75rem;
        font-size: 18px;
      }
    }
  }

  label.form-label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 18px;
    color: colors.$grey-800;
  }

  .form-options {
    margin: 1.5rem 0;
  }
  .form-poll-tags {
    margin-bottom: 2rem;

    .tag-list {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
</style>