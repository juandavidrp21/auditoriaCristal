<script>
  import { writable } from "svelte/store";
  import Proveedor from "./Proveedor.svelte";
  import Tallas from "./Tallas.svelte";
  import Confeccion from "./Confeccion.svelte";
  import Medidas from "./Medidas.svelte";
  import Empaque from "./Empaque.svelte";
  import DetalleEmpaque from "./DetalleEmpaque.svelte";
  import Ppp from "./Ppp.svelte";
  import Navigation from "./Navigation.svelte";

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
        proveedor: $dataProveedor,
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
  <Navigation {page} />

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
        <Empaque
          {dataEmpaque}
          {dataEmpaqueNew}
          {edit}
          {handleEdit}
          {handleDelete}
        />
      </div>

      <div class={$page === 6 ? "steps-item-active" : "steps-item"}>
        <DetalleEmpaque {dataAll} />
      </div>

      <div class={$page === 7 ? "steps-item-active" : "steps-item"}>
        <Ppp {dataAll} {handleSubmit} />
      </div>
    </form>
  </div>

  <div class="Footer">
    <button class={$page === 1 ? "off":"on"} onclick={handleBack}>
      <i class="fa-solid fa-arrow-left"></i>
      Anterior
    </button>

    <button class={$page === 7 ? "off":"on"} onclick={handleNext}
      >Siguiente<i class="fa-solid fa-arrow-right"></i></button
    >
  </div>
</div>

<style>
  .container-principal {
    width: 100%;
    height: 100%;
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

  .Footer {
    width: 100%;
    height: 35px;
    background-color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    padding: 0px;
    justify-content: space-between;
  }

  .on {
    width: 12%;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  } 

  .on:hover {
    background-color: white;
    color: #00b0a7;
    border: 2px solid #00b0a7;
  }

  .off{
    visibility: hidden;
  }

  @media (max-width: 984px) {
    
    .on {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: 0.3s ease-in;
    }

    .Footer {
    height: 45px;
    transition: 0.3s ease-in;
    }
  }
  @media (max-width: 750px) {
    .on {
      font-size: 14px;
      transition: 0.3s ease-in;
    }
  }

</style>
