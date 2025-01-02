<script>
  import { writable, get } from "svelte/store";
  import Input from "../shareComponents/Input.svelte";

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

  /*------------------Talla------------------------*/
  let dataTalla = writable([]);
  let dataTallaNew = writable({
    id: Date.now(),
    color: "",
    und_x_color: "",
    talla: "",
    unidades: "",
  });

  const addTalla = (e) => {
    e.preventDefault();
    const newTalla = get(dataTallaNew);
    if ($edit) {
      dataTalla.update((lista) =>
        lista.map((reg) =>
          reg.id === $dataTallaNew.id ? { ...$dataTallaNew } : reg
        )
      );
      dataTallaNew.set({
        id: Date.now(),
        color: "",
        und_x_color: "",
        talla: "",
        unidades: "",
      });
      edit.set(false);
    } else if (
      newTalla.color &&
      newTalla.und_x_color &&
      newTalla.talla &&
      newTalla.unidades
    ) {
      dataTalla.update((tallas) => [...tallas, newTalla]);
      dataTallaNew.set({
        id: Date.now(),
        color: "",
        und_x_color: "",
        talla: "",
        unidades: "",
      });
    } else {
      alert("¡Todos los campos son obligatorios!");
    }
  };

  /*------------------Confección------------------------*/
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

  const addConfeccion = (e) => {
    e.preventDefault();
    const newConfeccion = get(dataConfeccionNew);

    if ($edit) {
      dataConfeccion.update((lista) =>
        lista.map((reg) =>
          reg.id === $dataConfeccionNew.id ? { ...$dataConfeccionNew } : reg
        )
      );
      dataConfeccionNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        descripcion: "",
        totalesDefectuosas: "",
        group1: "",
        group2: "",
        group3: "",
        unidades: "",
      });
      edit.set(false);
    } else if (
      newConfeccion.tamañoMuestra &&
      newConfeccion.descripcion &&
      newConfeccion.group1 &&
      newConfeccion.totalesDefectuosas &&
      newConfeccion.group2 &&
      newConfeccion.group3 &&
      newConfeccion.unidades
    ) {
      dataConfeccion.update((data) => [...data, newConfeccion]);
      dataConfeccionNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        descripcion: "",
        totalesDefectuosas: "",
        group1: "",
        group2: "",
        group3: "",
        unidades: "",
      });
    } else {
      alert("¡Todos los campos son obligatorios!");
    }
  };

  /*------------------Medidas------------------------*/
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

  const addMedida = (e) => {
    e.preventDefault();
    const newDataMedida = get(dataMedidaNew);
    if ($edit) {
      dataMedida.update((lista) =>
        lista.map((reg) =>
          reg.id === $dataMedidaNew.id ? { ...$dataMedidaNew } : reg
        )
      );
      dataMedidaNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        group1: "",
        descripcion: "",
        totalesDefectuosas: "",
        group2: "",
        unidades: "",
      });
      edit.set(false);
    } else if (
      newDataMedida.tamañoMuestra &&
      newDataMedida.descripcion &&
      newDataMedida.totalesDefectuosas &&
      newDataMedida.unidades &&
      newDataMedida.group1 &&
      newDataMedida.group2
    ) {
      dataMedida.update((data) => [...data, newDataMedida]);
      dataMedidaNew.set({
        id: Date.now(),
        tamañoMuestra: "",
        group1: "",
        descripcion: "",
        totalesDefectuosas: "",
        group2: "",
        unidades: "",
      });
    } else {
      alert("¡Todos los campos son obligatorios!");
    }
  };

  /*------------------Empaque------------------------*/
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
        <div class="Proveedor">
          <div class="Proveedor-container">
            <div class="Proveedor-first">
              <Input
                text="PROVEEDOR:"
                type="text"
                bind:value={$dataAll.proveedor}
                id="proveedor"
              />
              <Input
                text="REFERENCIA:"
                type="text"
                bind:value={$dataAll.referencia}
                id="referencia"
              />
              <Input
                text="ENTREGA:"
                type="text"
                bind:value={$dataAll.entrega}
                id="entrega"
              />
      
              <Input
                text="IMPORTACIÓN:"
                type="text"
                bind:value={$dataAll.importacion}
                id="importacion"
              />
            </div>
      
            <div class="Proveedor-mid">
              <Input
                text="FECHA:"
                type="date"
                bind:value={$dataAll.fecha}
                id="fecha"
              />
      
              <Input
                text="MARCA:"
                type="text"
                bind:value={$dataAll.marca}
                id="marca"
              />
              <Input
                text="PPK"
                type="text"
                bind:value={$dataAll.ppk}
                id="ppk"
              />
              <Input
                text="INDIVIDUAL"
                type="text"
                bind:value={$dataAll.individual}
                id="individual"
              />
            </div>
      
            <div class="Proveedor-end">
              <Input
                text="HORA INICIO:"
                type="time"
                bind:value={$dataAll.horaInicio}
                id="horaInicio"
              />
      
              <Input
                text="HORA FINAL:"
                type="time"
                bind:value={$dataAll.horaFinal}
                id="horaFinal"
              />
      
              <Input
                text="TIPO PRENDA:"
                type="text"
                bind:value={$dataAll.tipoPrenda}
                id="tipoPrenda"
              />
              <Input text="PO:" type="text" bind:value={$dataAll.po} id="po" />
            </div>
          </div>
      </div>
      </div>

      <div class={$page === 2 ? "steps-item-active" : "steps-item"}>
        <div class="Tallas">
          <div onsubmit={addTalla} class="Tallas-form">
            <div class="Tallas-form-input">
              <Input
                text="Color:"
                type="text"
                bind:value={$dataTallaNew.color}
                id="color"
                required={true}
              />
              <Input
                text="UND x Color:"
                type="number"
                bind:value={$dataTallaNew.und_x_color}
                id="und_x_color"
                required={true}
              />
              <Input
                text="Talla"
                type="text"
                bind:value={$dataTallaNew.talla}
                id="talla"
                required={true}
              />
              <Input
                text="Unidades"
                type="number"
                bind:value={$dataTallaNew.unidades}
                id="unidades"
                required={true}
              />
            </div>
            <button type="button" onclick={addTalla}>+</button>
          </div>
          <div class="Talla-container-title">
            <p>Color <i class="fa-solid fa-arrow-down"></i></p>
            <p>Und x color <i class="fa-solid fa-arrow-down"></i></p>
            <p>Talla <i class="fa-solid fa-arrow-down"></i></p>
            <p>Unidades <i class="fa-solid fa-arrow-down"></i></p>
            <div class="options"></div>
          </div>
          <div class="Talla-container-table">
            {#if $dataTalla.length > 0}
              {#each $dataTalla as tallas}
                <div class="Talla-container-table-item">
                  <p>{tallas.color}</p>
                  <p>{tallas.und_x_color}</p>
                  <p>{tallas.talla}</p>
                  <p>{tallas.unidades}</p>
                  <div class="options">
                    <input
                      type="button"
                      class="edit"
                      value="✎"
                      onclick={(e) => {
                        handleEdit(tallas.id, dataTalla, dataTallaNew);
                      }}
                    />
                    <input
                      type="button"
                      class="delete"
                      value="X"
                      onclick={(e) => handleDelete(tallas.id, dataTalla.update)}
                    />
                  </div>
                </div>
              {/each}
            {:else}
              <p>Aquí verás los registros que vayas agregando.</p>
            {/if}
          </div>
        </div>
      </div>

      <div class={$page === 3 ? "steps-item-active" : "steps-item"}>
        <div class="Confeccion">
          <p class="Confeccion-title">Confeccion AQL:15 ó 2.5</p>
          <div class="Confeccion-content">
            <div onsubmit={addConfeccion}>
              <div class="Confeccion-form-group-one">
                <div class="Confeccion-form-group-one-left">
                  <Input
                    type="text"
                    text="Tamaño muestra"
                    bind:value={$dataConfeccionNew.tamañoMuestra}
                    id="tamaño-muestra"
                  />
                </div>
                <div class="Confeccion-form-checkbox-one">
                  <label for="A">A</label>
                  <input
                    bind:group={$dataConfeccionNew.group1}
                    type="radio"
                    name="gr-1"
                    class="Chexbox-style"
                    value="A"
                    id="A"
                  />
                  <label for="R">R</label>
                  <input
                    bind:group={$dataConfeccionNew.group1}
                    type="radio"
                    name="gr-1"
                    class="Chexbox-style"
                    id="R"
                    value="R"
                  />
                </div>
                <div class="Confeccion-form-group-one-right">
                  <Input
                    type="text"
                    text="Descripción"
                    bind:value={$dataConfeccionNew.descripcion}
                    id="descripcion"
                  />
                </div>
              </div>

              <div class="Confeccion-form-group-two">
                <div class="Confeccion-form-group-two-left">
                  <Input
                    type="number"
                    text="Totales Defectuosas"
                    bind:value={$dataConfeccionNew.totalesDefectuosas}
                    id="totales-defectuosas"
                  />
                </div>

                <div class="Confeccion-form-checkbox-two">
                  <label for="pin-blando">Pin <br />Blando</label>
                  <input
                    bind:group={$dataConfeccionNew.group2}
                    type="radio"
                    name="gr-2"
                    class="Chexbox-style"
                    id="pin-blando"
                    value="Blando"
                  />
                  <label for="pin-duro">Pin <br />Duro</label>
                  <input
                    bind:group={$dataConfeccionNew.group2}
                    type="radio"
                    name="gr-2"
                    class="Chexbox-style"
                    id="pin-duro"
                    value="Duro"
                  />
                </div>
                <div class="Confeccion-form-checkbox-three">
                  <label for="AA">A</label>
                  <input
                    bind:group={$dataConfeccionNew.group3}
                    type="radio"
                    name="gr-3"
                    class="Chexbox-style"
                    value="AA"
                    id="AA"
                  />
                  <label for="RR">R</label>
                  <input
                    bind:group={$dataConfeccionNew.group3}
                    type="radio"
                    name="gr-3"
                    class="Chexbox-style"
                    value="RR"
                    id="RR"
                  />
                </div>
                <div class="Confeccion-form-group-two-right">
                  <Input
                    type="number"
                    text="Unidades"
                    bind:value={$dataConfeccionNew.unidades}
                    id="unidades"
                  />
                  <button type="button" onclick={addConfeccion}>+</button>
                </div>
              </div>
            </div>

            <div class="Confeccion-container-title">
              <div class="title-one">
                <p class="title-text">
                  Tamaño muestra &nbsp; <i class="fa-solid fa-arrow-down"></i>
                </p>
              </div>
              <div class="Confeccion-title-two">
                <p class="title-text">A</p>
                <p class="title-text">R</p>
              </div>
              <div class="Confeccion-title-three">
                <p class="title-text">Totales Defectuosas</p>
                <p class="title-text">Pin</p>
              </div>
              <div class="Confeccion-title-four">
                <p class="title-text">A</p>
                <p class="title-text">R</p>
              </div>
              <p class="title-text-description">Descripción</p>
              <p class="title-text-unidades">Unidades x Descrip</p>
              <div
                style="width: 5%; height: 100%; margin-left: 20px; text-align: center; font-size: 28px;"
              >
                ...
            </div>
            </div>
            {#each $dataConfeccion as confeccion}
            <div class="Confeccion-container-table">
                <div class="title-one">
                  <p class="title-text">{confeccion.tamañoMuestra}</p>
                </div>
                  <div class="Confeccion-title-two">
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="A"
                      disabled
                      checked={confeccion.group1 === "A"}
                    />
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="R"
                      disabled
                      checked={confeccion.group1 === "R"}
                    />
                  </div>
                <div class="Confeccion-title-three">
                  <p class="title-text">{confeccion.totalesDefectuosas}</p>
                  <p class="title-text">
                    {confeccion.pinDuro ? "Duro" : "Blando"}
                    </p>
                </div>
                  <div class="Confeccion-title-four">
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="check-all"
                      value="AA"
                      disabled
                      checked={confeccion.group3 === "AA"}
                    />
                    <input
                      type="radio"
                      class="Chexbox-style"
                      id="check-all"
                      value="RR"
                      disabled
                      checked={confeccion.group3 === "RR"}
                    />
                  </div>
                <p class="title-text-description">{confeccion.descripcion}</p>
                <p class="title-text-unidades">{confeccion.unidades}</p>
                <div
                  style="width: 5%; height: 100%; margin-left: 20px; justify-content: space-between; align-items: center; display: flex;"
                >
                    <input
                    style="font-size: 11px;"
                      type="button"
                      class="edit"
                      value="✎"
                      onclick={(e) => {
                        handleEdit(
                          confeccion.id,
                          dataConfeccion,
                          dataConfeccionNew
                        );
                      }}
                    />
                    <input
                      type="button"
                      class="delete"
                      value="X"
                      onclick={(e) => {
                        handleDelete(confeccion.id, dataConfeccion.update);
                      }}
                    />
                  </div>
                </div>
              {/each}
          </div>
        </div>
      </div>

      <div class={$page === 4 ? "steps-item-active" : "steps-item"}>
        <div class="Medidas">
          <p class="Medidas-title">Medidas: Nivel inspec: 1 ó s-4</p>
          <div class="Medidas-content">
            <div onsubmit={addMedida}>
              <div class="Medidas-form-group-one">
                <div class="Medidas-form-group-one-left">
                  <Input
                    type="text"
                    text="Tamaño muestra"
                    id="tamañoMuestra"
                    bind:value={$dataMedidaNew.tamañoMuestra}
                  />
                </div>
                <div class="Medidas-form-checkbox-one">
                  <label for="AMedida">A</label>
                  <input
                    type="radio"
                    class="Chexbox-style"
                    name="group1"
                    id="A"
                    value="A"
                    bind:group={$dataMedidaNew.group1}
                  />
                  <label for="RMedida">R</label>
                  <input
                    type="radio"
                    class="Chexbox-style"
                    name="group1"
                    id="R"
                    value="R"
                    bind:group={$dataMedidaNew.group1}
                  />
                </div>
                <div class="Medidas-form-group-one-right">
                  <Input
                    type="text"
                    text="Descripción de defecto"
                    bind:value={$dataMedidaNew.descripcion}
                    id="descripcion"
                  />
                </div>
              </div>

              <div class="Medidas-form-group-two">
                <div class="Medidas-form-group-two-left">
                  <Input
                    type="number"
                    text="Unid. total problemas de medidas"
                    bind:value={$dataMedidaNew.totalesDefectuosas}
                    id="totalesDefectuosas"
                  />
                </div>
                <div class="Medidas-form-checkbox-three">
                  <label for="AA">A</label>
                  <input
                    type="radio"
                    name="group2"
                    class="Chexbox-style"
                    id="AA"
                    value="AA"
                    bind:group={$dataMedidaNew.group2}
                  />
                  <label for="RR">R</label>
                  <input
                    type="radio"
                    name="group2"
                    class="Chexbox-style"
                    id="RR"
                    value="RR"
                    bind:group={$dataMedidaNew.group2}
                  />
                </div>
                <div class="Medidas-form-group-two-right">
                  <Input
                    type="number"
                    text="Unidades"
                    bind:value={$dataMedidaNew.unidades}
                    id="unidades"
                  />
                  <button type="button" onclick={addMedida}>+</button>
                </div>
              </div>
            </div>

            <div class="Medidas-container-title">
              <div class="Medidas-title-one">
                <p class="Medidas-title-text">
                  Tamaño muestra &nbsp; <i class="fa-solid fa-arrow-down"></i>
                </p>
              </div>
              <div class="Medidas-title-two">
                <p class="Medidas-title-text">A</p>
                <p class="Medidas-title-text">R</p>
              </div>
              <div class="Medidas-title-three">
                <p class="Medidas-title-text">Totales Defectuosas</p>
              </div>
              <div class="Medidas-title-four">
                <p class="Medidas-title-text">A</p>
                <p class="Medidas-title-text">R</p>
              </div>
              <p class="Medidas-title-text-description">Descripción</p>
              <p class="Medidas-title-text-unidades">Unidades x Descrip</p>
              <div
                style="width: 5%; height: 100%; margin-left: 20px; text-align: center; font-size: 28px;"
              >
                ...
              </div>
            </div>
            {#each $dataMedida as medida}
              <div class="Medidas-container-table">
                <div class="Medidas-title-one">
                  <p class="Medidas-title-text">{medida.tamañoMuestra}</p>
                </div>
                <div class="Medidas-title-two">
                  <input
                    type="radio"
                    class="Chexbox-style"
                    id="A"
                    value="A"
                    disabled
                    checked={medida.group1 === "A"}
                  />
                  <input
                    type="radio"
                    class="Chexbox-style"
                    id="R"
                    value="R"
                    disabled
                    checked={medida.group1 === "R"}
                  />
                </div>
                <div class="Medidas-title-three">
                  <p class="Medidas-title-text">{medida.totalesDefectuosas}</p>
                </div>
                <div class="Medidas-title-four">
                  <input
                    type="radio"
                    class="Chexbox-style"
                    id="AA"
                    value="AA"
                    disabled
                    checked={medida.group2 === "AA"}
                  />
                  <input
                    type="radio"
                    class="Chexbox-style"
                    id="RR"
                    value="RR"
                    disabled
                    checked={medida.group2 === "RR"}
                  />
                </div>
                <p class="Medidas-title-text-description">
                  {medida.descripcion}
                </p>
                <p class="Medidas-title-text-unidades">{medida.unidades}</p>
                <div
                  style="width: 5%; height: 100%; margin-left: 20px; justify-content: space-between; align-items: center; display: flex;"
                >
                  <input
                    style="font-size: 11px;"
                    type="button"
                    class="edit"
                    value="✎"
                    onclick={(e) => {
                      handleEdit(medida.id, dataMedida, dataMedidaNew);
                    }}
                  />
                  <input
                    type="button"
                    class="delete"
                    value="X"
                    onclick={(e) => {
                      handleDelete(medida.id, dataMedida.update);
                    }}
                  />
                </div>
              </div>
            {/each}
          </div>
        </div>
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

  .Tallas,
  .DetalleEmpaque,
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
  .Tallas-form,
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

    .Proveedor-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
      padding: 10px 15px;
    }
    .Proveedor-first,
    .Proveedor-mid,
    .Proveedor-end {
      width: 100%;
      margin-bottom: 10px;
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
