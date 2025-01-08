<script>
  import Input from "../shareComponents/Input.svelte";

  let { dataAll } = $props();
</script>

<div class="DetalleEmpaque">
  <div class="DetalleEmpaque-content">
    <div class="DetalleEmpaque-content-left">
      <div class="DetalleEmpaque-left-item">
        <p>Cumple composición:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="composicionCheck"
            bind:group={$dataAll.composicionCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="composicionCheck"
            bind:group={$dataAll.composicionCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Proveedor certificado por empaque:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="proveedorCertificadoCheck"
            bind:group={$dataAll.proveedorCertificadoCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="proveedorCertificadoCheck"
            bind:group={$dataAll.proveedorCertificadoCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Cumple texto de cuidados:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="cuidadosCheck"
            bind:group={$dataAll.cuidadosCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="cuidadosCheck"
            bind:group={$dataAll.cuidadosCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Cumple pictogramas?</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="pictogramaCheck"
            bind:group={$dataAll.pictogramaCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="pictogramaCheck"
            bind:group={$dataAll.pictogramaCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Cumple codigo SIC?</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="codeSiCheck"
            bind:group={$dataAll.codeSiCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="codeSiCheck"
            bind:group={$dataAll.codeSiCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Cumple PVP:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="pvpCheck"
            bind:group={$dataAll.pvpCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="pvpCheck"
            bind:group={$dataAll.pvpCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Cumple Codigo PUM:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="codePumCheck"
            bind:group={$dataAll.codePumCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="codePumCheck"
            bind:group={$dataAll.codePumCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Prueba elongacion de cuello:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="elongacionCheck"
            bind:group={$dataAll.elongacionCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="elongacionCheck"
            bind:group={$dataAll.elongacionCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Testeo Laboratorio:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="LaboratorioCheck"
            bind:group={$dataAll.LaboratorioCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="LaboratorioCheck"
            bind:group={$dataAll.LaboratorioCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Muestra segundo testeo tejido punto:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="segundoTesteoCheck"
            bind:group={$dataAll.segundoTesteoCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="segundoTesteoCheck"
            bind:group={$dataAll.segundoTesteoCheck}
          />
        </div>
      </div>
      <div class="DetalleEmpaque-left-item">
        <p>Estandar aprobado:</p>
        &nbsp;
        <div class="DetalleEmpaque-left-item-checks">
          <label for="cumple-composicion-si">Si</label>
          <input
            type="radio"
            value="si"
            class="Chexbox-style"
            id="si"
            name="aprobadoCheck"
            bind:group={$dataAll.aprobadoCheck}
          />
          <label for="cumple-composicion-no">No</label>
          <input
            type="radio"
            value="no"
            class="Chexbox-style"
            id="no"
            name="aprobadoCheck"
            bind:group={$dataAll.aprobadoCheck}
          />
        </div>
      </div>
    </div>

    <div class="DetalleEmpaque-content-right">
      <div class="DetalleEmpaque-right-start">
        <Input
          type="text"
          text="Composición incorrecta"
          bind:value={$dataAll.compIncorrecta}
          id="composicionIncorrecta"
        />
        <Input
          type="text"
          text="Precio venta al público"
          bind:value={$dataAll.ventaPublico}
          id="ventaPublico"
        />
        <Input
          type="text"
          text="Precio venta SAP"
          bind:value={$dataAll.ventaSap}
          id="ventaSap"
        />
      </div>
      <div class="DetalleEmpaque-right-mid">
        <p>Cantidad de Muestras:</p>
        <div class="DetalleEmpaque-mid-inputs">
          <Input
            type="number"
            text="1"
            bind:value={$dataAll.cant1}
            id="cant1"
          />
          <Input
            type="number"
            text="2"
            bind:value={$dataAll.cant2}
            id="cant2"
          />
          <Input
            type="number"
            text="3"
            bind:value={$dataAll.cant3}
            id="cant3"
          />
        </div>
      </div>
      <div class="Detalle-Empaque-right-end">
        <Input
          type="text"
          text="Color"
          bind:value={$dataAll.color}
          id="color"
        />
        <Input
          type="text"
          text="Talla"
          bind:value={$dataAll.talla}
          id="talla"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .DetalleEmpaque {
    width: calc(100%-78px);
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 3px solid #dedddd;
    border-radius: 6px;
    padding: 29px 39px;
  }

  .DetalleEmpaque-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }

  .DetalleEmpaque-content-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .DetalleEmpaque-left-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .DetalleEmpaque-left-item p {
    color: #000;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #eaeaea;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 40%;
  }

  .DetalleEmpaque-left-item-checks {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 25%;
  }

  .DetalleEmpaque-content-right {
    width: 45%;
    height: 100%;
    padding: 20px 0px;
  }

  .DetalleEmpaque-right-start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .DetalleEmpaque-right-mid {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .DetalleEmpaque-right-mid p {
    align-self: start;
    color: #000;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #eaeaea;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .DetalleEmpaque-mid-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .Detalle-Empaque-right-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .Chexbox-style {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #00b0a7;
    border-radius: 3px;
    margin-right: 5%;
    position: relative;
    cursor: pointer;
  }
  .Chexbox-style:checked {
    background-color: #00b0a7;
  }
  .Chexbox-style:checked::after {
    content: "✓";
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
  @media (max-width: 1250px) {
    .Detalle-Empaque-right-end {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 930px) {
    .DetalleEmpaque-content-left {
      width: 60%;
    }
    .DetalleEmpaque-content-right {
      width: 35%;
    }

    .DetalleEmpaque-left-item p {
      width: 60%;
    }
    .DetalleEmpaque-left-item-checks {
      width: 35%;
    }
  }
</style>
