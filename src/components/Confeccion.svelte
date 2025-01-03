<script>
  import Input from "../shareComponents/Input.svelte";
  import { get } from "svelte/store";

  let { dataConfeccion, dataConfeccionNew, edit, handleEdit, handleDelete } =
    $props();

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
</script>

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
    {#if $dataConfeccion.length >= 1}
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
      </div>
      <div class="Confeccion-title-five">
        <p class="title-text">Pin</p>
      </div>
      
      <div class="Confeccion-title-four">
        <p class="title-text">A</p>
        <p class="title-text">R</p>
      </div>

      <p class="title-text-description">Descripción</p>
      <p class="title-text-unidades">Unds x Descrip</p>

      <div class="options">
      </div>
    </div>
    {:else}
      <p style="margin-top: 50px;" class="message">Sin datos para mostrar.</p>
    {/if}

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
        </div>
        <div class="Confeccion-title-five">
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
        <div class="options">
          <input
            style="font-size: 11px;"
            type="button"
            class="edit"
            value="✎"
            onclick={(e) => {
              handleEdit(confeccion.id, dataConfeccion, dataConfeccionNew);
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

<style>
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
    width: 5%;
  }

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
  .Confeccion-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .Confeccion-form-group-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
  }
  .Confeccion-form-group-one-left {
    width: 25%;
    display: flex;
  }
  .Confeccion-form-checkbox-one {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .Confeccion-form-group-one-right {
    display: flex;
    width: 60%;
  }
  .Confeccion-form-group-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .Confeccion-form-group-two-left {
    display: flex;
    width: 25%;
  }
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
  .Confeccion-form-checkbox-three {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #dedddd;
  }
  .Confeccion-form-group-two-right {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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
  .Confeccion-container-title,
  .Confeccion-container-table {
    border-bottom: 1px solid #cfd1d8;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .Confeccion-container-title{
    margin-top: 35px;
  }
  .Confeccion-container-table {
    margin: 0px 0px;
  }
  .title-one {
    display: flex;
    width: 11%;
    justify-content: center;
  }
  .message,
  .title-text {
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .Confeccion-title-two,
  .Confeccion-title-four {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 8%;
  }
  .Confeccion-title-two p,
  .Confeccion-title-four p {
    border: 2px solid #00b0a7;
    padding: 0px 2px;
    border-radius: 5px;
  }
  .Confeccion-title-three {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 8%;
    height: 100%;
    text-align: center;
    justify-content: center;
  }
  .Confeccion-title-five{
    display: flex;
    width: 7%;
    text-align: center;
    justify-content: center;
  }
  .title-text-description {
    width: 38%;
    padding: 0px 10px;
    text-align: start;
    color: #888;
    text-align: center;
  }
  .title-text-unidades {
    width: 8%;
    text-align: center;
    color: #888;
  }

  @media (max-width: 930px) {
    .Confeccion-form-group-two,
    .Confeccion-form-group-one {
      flex-direction: column;
    }

    .Confeccion-form-group-two-right,
    .Confeccion-form-group-two-left,
    .Confeccion-form-group-one-right,
    .Confeccion-form-group-one-left {
      width: 100%;
    }
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
    .Confeccion-form-checkbox-three {
      margin: 10px 13px;
      width: 30%;
      padding: 5px 0px;
      justify-content: space-around;
      border-right: none;
      border-bottom: 1px solid #dedddd;
    }
    .Confeccion-form-group-two-right button {
      margin: 0px 20px;
    }
    .title-text-description {
      width: 30%;
    }
  }
</style>
