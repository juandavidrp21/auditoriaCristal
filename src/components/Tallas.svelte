<script>
  import Input from "../shareComponents/Input.svelte";
  import { get } from "svelte/store";
  let { dataTalla, dataTallaNew, edit, handleEdit, handleDelete } = $props();

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
</script>

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
  {#if $dataTalla.length >= 1}
    <div class="Talla-container-title">
      <div class="container-item">
        <p>Color<i class="fa-solid fa-arrow-down"></i></p>
      </div>
      <div class="container-item">
        <p>Und x color <i class="fa-solid fa-arrow-down"></i></p>
      </div>
      <div class="container-item">
        <p>Talla <i class="fa-solid fa-arrow-down"></i></p>
      </div>
      <div class="container-item">
        <p>Unidades <i class="fa-solid fa-arrow-down"></i></p>
      </div>
      <div class="options">Opciones</div>
    </div>
    <div class="Talla-container-table">
      {#each $dataTalla as tallas}
        <div class="Talla-container-table-item">
          <div class="container-item"><p>{tallas.color}</p></div>
          <div class="container-item"><p>{tallas.und_x_color}</p></div>
          <div class="container-item"><p>{tallas.talla}</p></div>
          <div class="container-item"><p>{tallas.unidades}</p></div>
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
    </div>
  {:else}
    <p class="message">Aquí verás los registros que vayas agregando.</p>
  {/if}
</div>

<style>
  .Tallas {
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
    margin-bottom: 20px;
  }

  .Tallas-form button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
  }
  .Talla-container-table-item,
  .Talla-container-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #eaecf0;
    justify-content: space-around;
  }

  .container-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20%;
  }

  .Talla-container-table-item p,
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
  .Talla-container-table {
    display: flex;
    flex-direction: column;
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
    justify-content: space-around;
    width: 10%;
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  .Talla-container-table-item input {
    border: 2px solid #00b0a7;
    padding: 0px 2px;
    border-radius: 5px;
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
    margin-top: 30px;
  }
  @media (max-width: 930px) {
    .Tallas-form-input {
      flex-direction: column;
    }
  }
</style>
