<script>
  import Input from "../shareComponents/Input.svelte";

  let { dataProveedor } = $props();
</script>

<div class="Proveedor">
  <div class="Proveedor-container">
    <div class="Proveedor-first">
      <Input
        text="PROVEEDOR:"
        type="text"
        bind:value={$dataProveedor.proveedor}
        id="proveedor"
      />
      <Input
        text="REFERENCIA:"
        type="text"
        bind:value={$dataProveedor.referencia}
        id="referencia"
      />
      <Input
        text="ENTREGA:"
        type="text"
        bind:value={$dataProveedor.entrega}
        id="entrega"
      />

      <Input
        text="IMPORTACIÓN:"
        type="text"
        bind:value={$dataProveedor.importacion}
        id="importacion"
      />
    </div>

    <div class="Proveedor-mid">
      <Input
        text="FECHA:"
        type="date"
        bind:value={$dataProveedor.fecha}
        id="fecha"
      />

      <Input
        text="MARCA:"
        type="text"
        bind:value={$dataProveedor.marca}
        id="marca"
      />
      <Input text="PPK" type="text" bind:value={$dataProveedor.ppk} id="ppk" />
      <Input
        text="INDIVIDUAL"
        type="text"
        bind:value={$dataProveedor.individual}
        id="individual"
      />
    </div>

    <div class="Proveedor-end">
      <Input
        text="HORA INICIO:"
        type="time"
        bind:value={$dataProveedor.horaInicio}
        id="horaInicio"
      />

      <Input
        text="HORA FINAL:"
        type="time"
        bind:value={$dataProveedor.horaFinal}
        id="horaFinal"
      />

      <Input
        text="TIPO PRENDA:"
        type="text"
        bind:value={$dataProveedor.tipoPrenda}
        id="tipoPrenda"
      />
      <Input text="PO:" type="text" bind:value={$dataProveedor.po} id="po" />
    </div>
  </div>
</div>

<style>
  .Proveedor {
    width: calc(100%-78px);
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 3px solid #dedddd;
    border-radius: 6px;
    padding: 29px 39px;
  }

  .Proveedor-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .Proveedor-first,
  .Proveedor-mid,
  .Proveedor-end {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }

  @media (max-width: 930px) {
    .Proveedor-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 10px 15px;
    }
    .Proveedor-first,
    .Proveedor-mid,
    .Proveedor-end {
      width: 100%;
    }
  }
</style>
