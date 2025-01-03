<script>
  import { writable, get } from "svelte/store";
  import Input from "../shareComponents/Input.svelte";
  import Proveedor from "./Proveedor.svelte";
  import Tallas from "./Tallas.svelte";
  import Confeccion from "./Confeccion.svelte";
  import Medidas from "./Medidas.svelte";

  let page = writable(1);

  const handleBack = () => {
    if ($page > 1) {
      $page--;
    } else {
      $page = $page;
    }
  };

  const handleNext = () => {
    if ($page < 7) {
      $page++;
    } else {
      $page = $page;
    }
  };

  let edit = writable(false);

  const handleEdit = (id, key, keyNew) => {
    key.subscribe((lista) => {
      const registro = lista.find((reg) => reg.id === id);
      if (registro) {
        keyNew.set({ ...registro });
        edit.set(true);
      }
    });
  };

  const handleDelete = (id, key) => {
    key((lista) => lista.filter((reg) => reg.id !== id));
  };

  let dataProveedor = writable({
    proveedor: "",
    referencia: "",
    entrega: "",
    importacion: "",
    fecha: "",
    marca: "",
    ppk: "",
    individual: "",
    horaInicio: "",
    horaFinal: "",
    tipoPrenda: "",
    po: "",
  });

  let dataTalla = writable([]);
  let dataTallaNew = writable({
    id: Date.now(),
    color: "",
    und_x_color: "",
    talla: "",
    unidades: "",
  });

  let dataConfeccion = writable([]);
  let dataConfeccionNew = writable({
    id: Date.now(),
    tamañoMuestra: "",
    descripcion: "",
    totalesDefectuosas: "",
    group1: "",
    group2: "",
    group3: "",
    unidades: "",
  });

  let dataMedida = writable([]);
  let dataMedidaNew = writable({
    id: Date.now(),
    tamañoMuestra: "",
    group1: "",
    descripcion: "",
    totalesDefectuosas: "",
    group2: "",
    unidades: "",
  });

  let dataEmpaque = writable([]);
  let dataEmpaqueNew = writable({
    id: Date.now(),
    tamañoMuestra: "",
    groupCheck: "",
    totalesCajas: "",
    raizCajas: "",
    codigosCajas: "",
    descripcionDefecto: "",
  });

  const addEmpaque = (e) => {
    e.preventDefault();
    const newDataEmpaque = get(dataEmpaqueNew);
    if ($edit) {
      dataEmpaque.update((lista) =>
        lista.map((reg) =>
          reg.id === $dataEmpaqueNew.id ? { ...$dataEmpaqueNew } : reg
        )
      );
      dataEmpaqueNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        groupCheck: "",
        totalesCajas: "",

        raizCajas: "",
        codigosCajas: "",
        descripcionDefecto: "",
      });
    } else if (
      newDataEmpaque.tamañoMuestra &&
      newDataEmpaque.groupCheck &&
      newDataEmpaque.totalesCajas &&
      newDataEmpaque.raizCajas &&
      newDataEmpaque.codigosCajas &&
      newDataEmpaque.descripcionDefecto
    ) {
      dataEmpaque.update((data) => [...data, newDataEmpaque]);
      dataEmpaqueNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        groupCheck: "",
        totalesCajas: "",
        raizCajas: "",
        codigosCajas: "",
        descripcionDefecto: "",
      });
    } else {
      alert("¡Todos los campos son obligatorios!");
    }
  };

  /*------------------Guarda el formulario completo------------------------*/
  let dataAll = writable({
    id: Date.now(),
    composicionCheck: "",
    proveedorCertificadoCheck: "",
    cuidadosCheck: "",
    pictogramaCheck: "",
    codeSiCheck: "",
    pvpCheck: "",
    codePumCheck: "",
    elongacionCheck: "",
    LaboratorioCheck: "",
    segundoTesteoCheck: "",
    aprobadoCheck: "",
    compIncorrecta: "",
    ventaPublico: "",
    ventaSap: "",
    cant1: "",
    cant2: "",
    cant3: "",
    color: "",
    talla: "",
    filete: "",
    realce: "",
    costura: "",
    observaciones: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dataAll.update((current) => {
      return {
        ...current,
        dataProveedor: $dataProveedor,
        tallas: $dataTalla,
        confeccion: $dataConfeccion,
        medidas: $dataMedida,
        empaque: $dataEmpaque,
      };
    });
    console.log($dataAll);
  }
</script>

<div class="container-principal">
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
      onclick={() => ($page = 6)}>Detalle de Empaque</button
    >
    <button
      class={$page === 7 ? "active-header" : "Header-content-button"}
      onclick={() => ($page = 7)}>PPP</button
    >
  </div>

  <div class="body">
    <form onsubmit={handleSubmit} class="steps">
      <div class={$page === 1 ? "steps-item-active" : "steps-item"}>
        <Proveedor {dataProveedor} />
      </div>

      <div class={$page === 2 ? "steps-item-active" : "steps-item"}>
        <Tallas {dataTalla} {dataTallaNew} {edit} {handleEdit} {handleDelete} />
      </div>

      <div class={$page === 3 ? "steps-item-active" : "steps-item"}>
        <Confeccion
          {dataConfeccion}
          {dataConfeccionNew}
          {edit}
          {handleEdit}
          {handleDelete}
        />
      </div>

      <div class={$page === 4 ? "steps-item-active" : "steps-item"}>
        <Medidas
          {dataMedida}
          {dataMedidaNew}
          {edit}
          {handleEdit}
          {handleDelete}
        />
      </div>

      <div class={$page === 5 ? "steps-item-active" : "steps-item"}>
        <div class="Empaque">
          <div class="Empaque-content">
            <p class="Empaque-title">Empaque AQL:0</p>
            <div class="Empaque-content">
              <div class="Empaque-form-group-one">
                <div class="Empaque-form-group-one-left">
                  <Input
                    type="text"
                    text="Tamaño muestra"
                    bind:value={$dataEmpaqueNew.tamañoMuestra}
                    id="tamaño-muestra"
                  />
                </div>
                <div class="Empaque-form-checkbox-one">
                  <label for="A">A</label>
                  <input
                    type="radio"
                    name="groupCheck"
                    value="A"
                    class="Chexbox-style"
                    bind:group={$dataEmpaqueNew.groupCheck}
                    id="A"
                  />
                  <label for="R">R</label>
                  <input
                    type="radio"
                    name="groupCheck"
                    value="R"
                    class="Chexbox-style"
                    bind:group={$dataEmpaqueNew.groupCheck}
                    id="R"
                  />
                </div>
                <div class="Empaque-form-group-one-right">
                  <Input
                    type="number"
                    text="Totales Cajas"
                    bind:value={$dataEmpaqueNew.totalesCajas}
                    id="totales-cajas"
                  />
                  <Input
                    type="number"
                    text="Raíz + cajas"
                    bind:value={$dataEmpaqueNew.raizCajas}
                    id="raiz-cajas"
                  />
                  <Input
                    type="text"
                    text="Códigos de cajas auditadas"
                    bind:value={$dataEmpaqueNew.codigosCajas}
                    id="codigos-cajas"
                  />
                </div>
              </div>

              <div class="Empaque-form-group-two">
                <div class="Empaque-form-group-two-left">
                  <Input
                    type="text"
                    text="Descripción de defecto"
                    bind:value={$dataEmpaqueNew.descripcionDefecto}
                    id="descripcion-defecto"
                  />
                </div>
                <button type="button" onclick={addEmpaque}>+</button>
              </div>

              <div class="Empaque-container-title">
                <div class="Empaque-title-one">
                  <p class="Empaque-title-text">
                    Tamaño muestra &nbsp; <i class="fa-solid fa-arrow-down"></i>
                  </p>
                </div>

                <div class="Empaque-title-two">
                  <p class="Empaque-title-text">A</p>
                  <p class="Empaque-title-text">R</p>
                </div>

                <div class="Empaque-title-three">
                  <p class="Empaque-title-text">Totales Defectuosas</p>
                </div>

                <div class="Empaque-title-four">
                  <p class="Empaque-title-text">
                    Raíz + cajas &nbsp; <i class="fa-solid fa-arrow-down"></i>
                  </p>
                </div>

                <div class="Empaque-title-five">
                  <p class="Empaque-title-text">
                    Códigos cajas auditadas &nbsp; <i
                      class="fa-solid fa-arrow-down"
                    ></i>
                  </p>
                </div>

                <p class="Empaque-title-text-description">Descripción</p>
                <div
                  style="width: 5%; height: 100%; margin-left: 20px; text-align: center; font-size: 28px;"
                >
                  ...
                </div>
              </div>

              {#each $dataEmpaque as empaque}
                <div class="container-table">
                  <div class="Empaque-title-one">
                    <p class="Empaque-title-text">{empaque.tamañoMuestra}</p>
                  </div>
                  <div class="Empaque-title-two">
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="A"
                      value="A"
                      disabled
                      checked={empaque.groupCheck === "A"}
                    />
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="R"
                      value="R"
                      disabled
                      checked={empaque.groupCheck === "R"}
                    />
                  </div>
                  <div class="Empaque-title-three">
                    <p class="Empaque-title-text">{empaque.totalesCajas}</p>
                  </div>
                  <div class="Empaque-title-four">
                    <p class="Empaque-title-text">{empaque.raizCajas}</p>
                  </div>
                  <div class="Empaque-title-five">
                    <p class="Empaque-title-text">{empaque.codigosCajas}</p>
                  </div>
                  <p class="Empaque-title-text-description">
                    {empaque.descripcionDefecto}
                  </p>
                  <div
                    style="width: 5%; height: 100%; margin-left: 20px; justify-content: space-between; align-items: center; display: flex;"
                  >
                    <input
                      style="font-size: 11px;"
                      type="button"
                      class="edit"
                      value="✎"
                      onclick={(e) => {
                        handleEdit(empaque.id, dataEmpaque, dataEmpaqueNew);
                      }}
                    />
                    <input
                      type="button"
                      class="delete"
                      value="X"
                      onclick={(e) => {
                        handleDelete(empaque.id, dataEmpaque.update);
                      }}
                    />
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class={$page === 6 ? "steps-item-active" : "steps-item"}>
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
      </div>

      <div class={$page === 7 ? "steps-item-active" : "steps-item"}>
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
                  <label class="PPP-text-label" for="observations"
                    >observaciones</label
                  >
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
      </div>
    </form>
  </div>

  <div class="Footer">
    <button onclick={handleBack}
      ><i class="fa-solid fa-arrow-left"></i> Anterior
    </button>
    <button onclick={handleNext}
      >Siguiente <i class="fa-solid fa-arrow-right"></i></button
    >
  </div>
</div>

<style>
  .container-principal {
    width: 100%;
    height: 100%;
  }

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

  .body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 140px);
  }

  .steps {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .steps-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
  }

  .steps-item-active {
    visibility: visible;
    opacity: 1;
    width: 100%;
    height: 100%;
  }
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
  .Tallas-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  .Tallas-form-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 35px);
  }

  .Talla-container-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    border-bottom: 1px solid #eaecf0;
    justify-content: space-between;
  }
  .Talla-container-title p {
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-right: 15%;
  }
  .Talla-container-title p i {
    color: #667085;
    margin-left: 5px;
    font-size: 10px;
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
  .Talla-container-table {
    display: flex;
    flex-direction: column;
  }
  .Talla-container-table-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    border-bottom: 1px solid #eaecf0;
    align-items: center;
    justify-content: space-between;
  }
  .Talla-container-table p {
    color: #667085;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-right: 16%;
  }
  .delete:hover {
    cursor: pointer;
    background-color: rgb(165, 80, 80);
    color: white;
    border: 2px solid red;
    border-radius: 5px;
  }
  .edit:hover {
    cursor: pointer;
    background-color: rgb(61, 117, 61);
    color: white;
    border: 2px solid green;
    border-radius: 5px;
  }
  .edit,
  .delete {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
  }
  .options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70px;
  }

  .Medidas,
  .Empaque,
  .PPP,
  .Confeccion {
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
  .PPP-title,
  .Empaque-title,
  .Medidas-title,
  .Confeccion-title {
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
  .PPP-content,
  .Empaque-content,
  .Medidas-content,
  .Confeccion-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .PPP-content-one,
  .Empaque-form-group-one,
  .Medidas-form-group-one,
  .Confeccion-form-group-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
  }
  .Empaque-form-group-one-left,
  .Medidas-form-group-one-left,
  .Confeccion-form-group-one-left {
    width: 25%;
    display: flex;
  }
  .Empaque-form-checkbox-one,
  .Medidas-form-checkbox-one,
  .Confeccion-form-checkbox-one {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .Empaque-form-group-one-right,
  .Medidas-form-group-one-right,
  .Confeccion-form-group-one-right {
    display: flex;
    width: 60%;
  }
  .PPP-content-two,
  .Empaque-form-group-two,
  .Medidas-form-group-two,
  .Confeccion-form-group-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .Medidas-form-group-two-left,
  .Confeccion-form-group-two-left {
    display: flex;
    width: 25%;
  }
  .Empaque-container-title p i,
  .Medidas-container-title p i,
  .Confeccion-container-title p i {
    color: #667085;
    font-size: 10px;
  }
  .Confeccion-form-checkbox-two {
    display: flex;
    flex-direction: row;
    width: 20%;
    align-items: center;
    justify-content: space-around;
    border-right: 1px solid #dedddd;
    border-left: 1px solid #dedddd;
  }
  .Medidas-form-checkbox-three,
  .Confeccion-form-checkbox-three {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #dedddd;
  }
  .Medidas-form-group-two-right,
  .Confeccion-form-group-two-right {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .Tallas-form button,
  .Empaque-form-group-two button,
  .Medidas-form-group-two-right button,
  .Confeccion-form-group-two-right button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
    margin-left: 50px;
  }
  .Empaque-container-title,
  .container-table,
  .Medidas-container-title,
  .Medidas-container-table,
  .Confeccion-container-title,
  .Confeccion-container-table {
    border-bottom: 1px solid #cfd1d8;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container-table,
  .Medidas-container-table,
  .Confeccion-container-table {
    margin: 0px 0px;
  }
  .Empaque-title-one,
  .Medidas-title-one,
  .title-one {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 14%;
    padding-right: 4px;
  }
  .Empaque-title-text,
  .Medidas-title-text,
  .title-text {
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
  .Empaque-title-two,
  .Medidas-title-two,
  .Medidas-title-four,
  .Confeccion-title-two,
  .Confeccion-title-four {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 8%;
  }
  .Talla-container-table-item input,
  .Empaque-title-two p,
  .Medidas-title-two p,
  .Medidas-title-four p,
  .Confeccion-title-two p,
  .Confeccion-title-four p {
    border: 2px solid #00b0a7;
    padding: 0px 2px;
    border-radius: 5px;
  }
  .Empaque-title-three,
  .Medidas-title-three,
  .Confeccion-title-three {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 12%;
    padding: 0px 10px;
  }
  .Medidas-title-text-description,
  .title-text-description {
    width: 42%;
    padding: 0px 10px;
    text-align: start;
    color: #888;
  }
  .title-text-unidades {
    width: 8%;
    text-align: center;
    color: #888;
  }

  .Medidas-title-text-unidades {
    width: 8%;
    text-align: center;
    color: #888;
  }

  .Empaque-form-group-two-left {
    display: flex;
    width: calc(100% - 40px);
  }

  .Empaque-title-five,
  .Empaque-title-four {
    width: 16%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .Empaque-title-text-description {
    width: 20%;
    padding: 0px 10px;
    text-align: start;
    color: #888;
  }

  .DetalleEmpaque-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .DetalleEmpaque-content-left {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .DetalleEmpaque-left-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 71%;
  }
  .DetalleEmpaque-left-item-checks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
  }
  .DetalleEmpaque-content-right {
    width: 66%;
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
    flex-direction: row;
    width: 100%;
  }
  .Detalle-Empaque-right-end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .PPP-observation {
    position: relative;
    width: 100%;
    display: flex;
    margin: 10px;
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

  .Footer {
    width: 100%;
    height: 30px;
    background-color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    padding: 0px;
    justify-content: space-between;
  }

  .PPP-Guardar,
  .Footer button {
    width: 120px;
    height: 100%;
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
    margin: 0px 100px;
    cursor: pointer;
  }
  .Footer button:hover {
    background-color: white;
    color: #00b0a7;
    border: 2px solid #00b0a7;
  }

  @media (max-width: 930px) {
    .Header {
      justify-content: space-around;
    }
    .active-header,
    .Header-content-button {
      font-size: 11px;
      width: 20%;
    }

    .Medidas-form-group-two-left,
    .Medidas-form-group-two,
    .Medidas-form-group-one-left,
    .Medidas-form-group-one,
    .Confeccion-form-group-two,
    .Confeccion-form-group-one,
    .Tallas-form-input {
      flex-direction: column;
    }

    .Empaque-form-group-one-right,
    .Empaque-form-group-one-left,
    .Medidas-form-group-two-right,
    .Medidas-form-group-one-right,
    .Confeccion-form-group-two-right,
    .Confeccion-form-group-two-left,
    .Confeccion-form-group-one-right,
    .Confeccion-form-group-one-left {
      width: 100%;
    }
    .Medidas-form-checkbox-one,
    .Confeccion-form-checkbox-one {
      margin: 10px 0px;
      width: 100%;
      margin-left: 13px;
      justify-content: start;
    }
    .Confeccion-form-checkbox-two {
      margin: 10px 13px;
      width: 30%;
      padding: 5px 0px;
      justify-content: space-around;
      border-left: none;
      border-right: none;
      border-top: 1px solid #dedddd;
      border-bottom: 1px solid #dedddd;
    }
    .Medidas-form-checkbox-three,
    .Confeccion-form-checkbox-three {
      margin: 10px 13px;
      width: 30%;
      padding: 5px 0px;
      justify-content: space-around;
      border-right: none;
      border-bottom: 1px solid #dedddd;
    }
    .Medidas-form-group-two-right button,
    .Confeccion-form-group-two-right button {
      margin: 0px 20px;
    }
    .title-text-description {
      width: 30%;
    }

    .Empaque-form-group-one {
      flex-direction: column;
      height: 140px;
      justify-content: space-between;
    }
    .Empaque-form-checkbox-one {
      margin-left: 13px;
    }

    .DetalleEmpaque-content-left {
      width: 50%;
    }
    .DetalleEmpaque-content-right {
      width: 45%;
    }

    .Detalle-Empaque-right-end,
    .DetalleEmpaque-mid-inputs {
      width: 100%;
      flex-direction: column;
    }
  }
</style>
