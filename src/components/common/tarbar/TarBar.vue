<template>
    <div class="tar-bar">
       <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TarBar",
};
</script>

<style scoped>
.tar-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    box-shadow: 0 -1px 10px rgba(107, 68, 68, 0.1);
    height: 49px;
}
</style>