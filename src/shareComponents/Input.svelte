<script>
  let { text = "", type = "text", value = $bindable(), id, required = false } = $props();
</script>

<span class="content">
  <label class="label" for={id}> {text} </label>
  <input class="input" {type} {id} bind:value {required} />
</span>

<style>
  .content {
    position: relative;
    width: 100%;
    display: flex;
    margin: 10px;
  }

  .label {
    position: absolute;
    top: -12px;
    left: 9px;
    background: white;
    padding: 0 5px;
    font-weight: 400;
    pointer-events: none;
    color: #303236;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: lowercase;
  }

  .input {
    flex: 1;
    background-color: white;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    padding: 5px 8px;
    font-family: "Roboto", sans-serif;
    height: 15px;
  }

  .input:focus {
    border-color: #00b0a7;
    outline: none;
  }

  .content:focus-within .label {
    top: -16px;
  }

</style>
