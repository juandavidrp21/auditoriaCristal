<script>
  import Input from "../shareComponents/Input.svelte";
  import { get } from "svelte/store";

  let { dataEmpaque, dataEmpaqueNew, edit, handleEdit, handleDelete } =
    $props();

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
</script>

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
        <input class="addFile" type="button" onclick={addEmpaque} />
      </div>

      {#if $dataEmpaque.length >= 1}
        <div class="Empaque-container-title">
          <div class="container-item">
            <p>
              Tamaño muestra &nbsp; <i class="fa-solid fa-arrow-down"></i>
            </p>
          </div>

          <div class="Empaque-title-two">
            <p>A</p>
            <p>R</p>
          </div>

          <div class="container-item">
            <p>Totales Defectuosas</p>
          </div>

          <div class="container-item">
            <p>
              Raíz + cajas &nbsp; <i class="fa-solid fa-arrow-down"></i>
            </p>
          </div>

          <div class="container-item">
            <p>
              Códigos cajas auditadas &nbsp; <i class="fa-solid fa-arrow-down"
              ></i>
            </p>
          </div>
          <div class="container-item">
            <p>Descripción</p>
          </div>
          <div class="options">Opciones</div>
        </div>

        {#each $dataEmpaque as empaque}
          <div class="container-table">
            <div class="container-item">
              <p>{empaque.tamañoMuestra}</p>
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
            <div class="container-item">
              <p>{empaque.totalesCajas}</p>
            </div>
            <div class="container-item">
              <p>{empaque.raizCajas}</p>
            </div>
            <div class="container-item">
              <p>{empaque.codigosCajas}</p>
            </div>
            <p class="container-item">
              {empaque.descripcionDefecto}
            </p>
            <div class="options">
              <input
                style="font-size: 11px;"
                type="button"
                class="edit"
                onclick={(e) => {
                  handleEdit(empaque.id, dataEmpaque, dataEmpaqueNew);
                }}
              />
              <input
                type="button"
                class="delete"
                onclick={(e) => {
                  handleDelete(empaque.id, dataEmpaque.update);
                }}
              />
            </div>
          </div>
        {/each}
      {:else}
        <p class="message">Aquí verás los registros que vayas agregando.</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .Empaque {
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
  .Empaque-title {
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
  .Empaque-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .Empaque-form-group-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
  }
  .Empaque-form-group-one-left {
    width: 25%;
    display: flex;
  }
  .Empaque-form-checkbox-one {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .Empaque-form-group-one-right {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }
  .Empaque-form-group-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .addFile {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 15%;
    transition: fill 0.3s ease;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill="white"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
    margin-left: 50px;
  }
  .addFile:hover {
    background-color: white;
    border: 2px solid #00b0a7;
    border-radius: 15%;
    transition: fill 0.3s ease;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }

  .Empaque-container-title,
  .container-table {
    border-bottom: 1px solid #cfd1d8;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .Empaque-container-title {
    margin-top: 30px;
  }

  .options,
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

  .container-table {
    margin: 0px 0px;
  }
  .Empaque-title-two {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 8%;
  }
  .Empaque-title-two p {
    border: 2px solid #00b0a7;
    padding: 0px 2px;
    border-radius: 5px;
  }
  .Empaque-form-group-two-left {
    display: flex;
    width: calc(100% - 40px);
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
    background-color: white;
    border: 2px solid #00b0a7;
    border-radius: 15%;
    transition: fill 0.3s ease;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }
  .edit:hover {
    background-color: white;
    border: 2px solid #00b0a7;
    border-radius: 15%;
    transition: fill 0.3s ease;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }
  .edit {
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 15%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="undefined"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" fill="white"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
  }
  .delete {
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 15%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="white"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background-color: #00b0a7;
  }

  .options {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 8%;
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

  @media (max-width: 1050px) {
    .Empaque-form-group-one-right,
    .Empaque-form-group-one-left {
      width: 100%;
    }
    .Empaque-form-group-one {
      flex-direction: column;
      height: auto;
      justify-content: space-between;
    }
    .Empaque-form-checkbox-one {
      margin: 10px 0px;
      width: 100%;
      margin-left: 13px;
      justify-content: start;
    }
  }
  @media (max-width: 840px) {
    .Empaque-form-group-one-right{
      flex-direction: column;
    }
  }
</style>
