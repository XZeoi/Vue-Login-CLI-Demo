<template>
  <div>
      <div class="modal-box">
          <span>Err!</span>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-box {
    font-size: 12px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10px;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%,0);
    display: block;
    width: 240px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    color: rgb(60, 123, 160);
    background:linear-gradient(120deg,#afdefd,#ca92e2);
    /* transition: .5s; */
}
</style>