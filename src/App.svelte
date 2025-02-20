<script>
  import Container from "./components/Container.svelte";
  import Pdf from "./components/Pdf.svelte";

</script>

<div class="app">
  <Pdf/>
</div>

<style>
  :global(body) {
    background-color: white;
    color: black;
    font-family: "Roboto", sans-serif;
  }
  
  .app {
    padding: 20px 50px;
  }

</style>
