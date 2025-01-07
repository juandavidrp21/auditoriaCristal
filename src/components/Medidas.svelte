<script>
  import Input from "../shareComponents/Input.svelte";
  import { get } from "svelte/store";

  let { dataMedida, dataMedidaNew, edit, handleEdit, handleDelete } = $props();

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
</script>

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
            text="total problemas de medidas"
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
    {#if $dataMedida.length >= 1}
      <div class="Medidas-container-title">
        <div class="container-item">
          <p>Tamaño muestra</p>
        </div>
        <div class="Medidas-title-two">
          <p class="Medidas-title-text">A</p>
          <p class="Medidas-title-text">R</p>
        </div>
        <div class="container-item">
          <p>Totales Defectuosas</p>
        </div>
        <div class="Medidas-title-four">
          <p class="Medidas-title-text">A</p>
          <p class="Medidas-title-text">R</p>
        </div>
        <div class="container-item">
          <p>Descripción</p>
        </div>
        <div class="container-item">
          <p>Unidades x Descrip</p>
        </div>
        <div class="options">Opciones</div>
      </div>
      {#each $dataMedida as medida}
        <div class="Medidas-container-table">
          <div class="container-item">
            <p>{medida.tamañoMuestra}</p>
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
          <div class="container-item">
            <p>{medida.totalesDefectuosas}</p>
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
          <div class="container-item">
            <p>
              {medida.descripcion}
            </p>
          </div>
          <div class="container-item">
            <p>{medida.unidades}</p>
          </div>
          <div class="options">
            <input
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
              onclick={(e) => handleDelete(medida.id, dataMedida.update)}
            />
          </div>
        </div>
      {/each}
    {:else}
      <p class="message">Aquí verás los registros que vayas agregando.</p>
    {/if}
  </div>
</div>

<style>
  .Medidas {
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
  .Medidas-title {
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

  .Medidas-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .container-item {
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    width: 16%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .Medidas-form-group-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
  }
  .Medidas-form-group-one-left {
    width: 25%;
    display: flex;
  }
  .Medidas-form-checkbox-one {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .Medidas-form-group-one-right {
    display: flex;
    width: 60%;
  }
  .Medidas-form-group-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .Medidas-form-group-two-left {
    display: flex;
    width: 25%;
  }
  .Medidas-form-checkbox-three {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #dedddd;
  }
  .Medidas-form-group-two-right {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .Medidas-form-group-two-right button {
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
  .Medidas-container-title,
  .Medidas-container-table {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #eaecf0;
    justify-content: space-around;
  }

  .Medidas-container-title{
    margin-top: 30px;
  }

  .Medidas-title-two,
  .Medidas-title-four {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 8%;
  }
  .Medidas-title-two p,
  .Medidas-title-four p {
    border: 2px solid #00b0a7;
    padding: 0px 2px;
    border-radius: 5px;
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
  .delete:hover {
    cursor: pointer;
    background-color: rgb(165, 80, 80);
    color: white;
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
    width: 28px;
    height: 28px;
    border-radius: 15%;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
  }
  .options {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 10%;
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  .message {
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 45px;
  }

  @media (max-width: 930px) {
    .Medidas-form-group-two-left,
    .Medidas-form-group-two,
    .Medidas-form-group-one-left,
    .Medidas-form-group-one {
      flex-direction: column;
      width: 100%;
    }

    .Medidas-form-group-two-right,
    .Medidas-form-group-one-right {
      width: 100%;
    }
    .Medidas-form-checkbox-one {
      margin: 10px 0px;
      width: 100%;
      margin-left: 13px;
      justify-content: start;
    }
    .Medidas-form-checkbox-three {
      margin: 10px 13px;
      width: 30%;
      padding: 5px 0px;
      justify-content: space-around;
      border-right: none;
      border-bottom: 1px solid #dedddd;
    }
    .Medidas-form-group-two-right button {
      margin: 0px 20px;
    }
  }
</style>
