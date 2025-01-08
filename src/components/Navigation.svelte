<script>
  let { page } = $props();
</script>

<div class="Header">
  <button
    class={$page === 1 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 1)}>Proveedor</button
  >
  <button
    class={$page === 2 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 2)}>Tallas</button
  >
  <button
    class={$page === 3 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 3)}>Confeccion</button
  >
  <button
    class={$page === 4 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 4)}>Medidas</button
  >
  <button
    class={$page === 5 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 5)}>Empaque</button
  >
  <button
    class={$page === 6 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 6)}>Detalle</button
  >
  <button
    class={$page === 7 ? "active-header" : "Header-content-button"}
    onclick={() => ($page = 7)}>PPP</button
  >
</div>

<style>
  .Header {
    width: 100%;
    height: 45px;
    display: flex;
    margin-top: 10px;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
  }
  .Header-content-button {
    width: 10%;
    height: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border: none;
    color: black;
    font-size: 14px;
    font-weight: 600;
    background-color: #eaeaea;
    font-family: "DM Sans", sans-serif;
  }
  .Header-content-button:hover {
    cursor: pointer;
    border: 1px solid #00b0a7;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    font-family: "DM Sans", sans-serif;
  }
  .active-header {
    width: 10%;
    height: 100%;
    color: black;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid #00b0a7;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    font-family: "DM Sans", sans-serif;
  }

  @media (max-width: 985px) {
    .Header {
      justify-content: space-around;
    }
    .active-header,
    .Header-content-button {
      font-size: 14px;
      width: 20%;
    }
  }
  @media (max-width: 700px) {
    .active-header,
    .Header-content-button {
      font-size: 12px;
      transition: 0.3s ease-in;
    }
  }

</style>
