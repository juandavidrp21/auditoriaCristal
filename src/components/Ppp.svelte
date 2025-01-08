<script>
  import Input from "../shareComponents/Input.svelte";

  let { dataAll, handleSubmit } = $props();
</script>

<div class="PPP">
  <div class="PPP-content">
    <p class="PPP-title">EmpaqueAQL:0</p>
    <div class="PPP-content">
      <div class="PPP-content-one">
        <Input
          type="text"
          text="Filete"
          bind:value={$dataAll.filete}
          id="filete"
        />

        <Input
          type="text"
          text="Realce"
          bind:value={$dataAll.realce}
          id="realce"
        />

        <Input
          type="text"
          text="Costura prenda"
          bind:value={$dataAll.costura}
          id="costura"
        />
      </div>

      <div class="PPP-content-two">
        <div class="PPP-observation">
          <label class="PPP-text-label" for="observations">observaciones</label>
          <textarea
            class="PPP-text-input"
            id="observations"
            bind:value={$dataAll.observaciones}
          ></textarea>
        </div>
      </div>
      <button onclick={handleSubmit} type="button" class="PPP-Guardar">
        Guardar
      </button>
    </div>
  </div>
</div>

<style>
  .PPP {
    margin-top: 35px;
    position: relative;
    width: calc(100%-78px);
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 3px solid #dedddd;
    border-radius: 6px;
    padding: 29px 39px;
  }
  .PPP-title {
    position: absolute;
    background-color: white;
    top: -43px;
    left: 15px;
    color: #888;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    padding: 0 10px;
  }
  .PPP-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px 0px;
  }
  .PPP-content-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .PPP-content-two {
    display: flex;
    width: 100%;
  }
  .PPP-observation {
    position: relative;
    width: 100%;
    display: flex;
  }
  .PPP-text-label {
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

  .PPP-text-input {
    flex: 1;
    background-color: white;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    padding: 5px 8px;
    font-family: "Roboto", sans-serif;
    height: 55px;
  }

  .PPP-text-input:focus {
    border-color: #00b0a7;
    outline: none;
  }

  .PPP-Guardar {
    width: 12%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background: #00b0a7;
    color: white;
    text-align: center;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    justify-content: start;
  }
  .PPP-Guardar:hover {
    background-color: white;
    color: #00b0a7;
    border: 2px solid #00b0a7;
  }
  @media (max-width: 900px) {
    .PPP-Guardar{
      width: 18%;
      font-size: 12px;
      transition: 0.3s ease-in;
    }
  }
  @media (max-width: 730px) {
    .PPP-content-one {
      flex-direction: column;
      width: 100%;
    }
    .PPP-Guardar{
      width: 18%;
      font-size: 14px;
      transition: 0.3s ease-in;
    }
  }
</style>
