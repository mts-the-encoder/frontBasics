<template>
  <div>
    <form action="">
      <mts-input id="username" class="filled"></mts-input><br />
      <mts-button @click="oie" class="void"></mts-button>
    </form>
  </div>
</template>

<script>
import MtsButton from "@/components/mts-button.vue";
import MtsInput from "@/components/mts-Input.vue";

export default {
    components: { MtsButton, MtsInput },
    name: "home",
    methods: {
        oie: function (event) {
        const change = document.querySelector("input");
        var name = username.value;

        if (name.length < 3) {
            change.className = "failed";
            alert("Nome Inválido");
        } else {
            change.className = "sucess";
            alert("Cadastro Realizado");
        }
        },
    },
};
</script>
<style src="./style.scss" lang="scss" scoped/>

/*
        <input type="text" placeholder="Texto" class="mts-input empty"><br>
        <input type="text" placeholder="Texto" class="mts-input filled"><br>
        <input type="text" placeholder="Texto" class="mts-input sucess"><br>
        <input type="text" placeholder="Texto" class="mts-input warning"><br>
        <input type="text" placeholder="Texto" class="mts-input failed"><br>
        <button class="mts-button void">matheus</button><br>
        <button class="mts-button large">matheus</button><br>
        <button class="mts-button medium">matheus</button><br>
        <button class="mts-button small">matheus</button><br>
*/