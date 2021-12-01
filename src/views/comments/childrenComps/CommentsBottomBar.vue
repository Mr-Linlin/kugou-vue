.<template>
  <div class="bottom-bar">
    <div class="comments-input">
      <input type="text" placeholder="随乐而起，有感而发" />
    </div>
    <div class="face">
        <img src="~@/assets/img/comments/face.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsBottomBar",
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 49px;
  line-height: 49px;
  border-top: 1px solid #ccc;
}
.comments-input{
    flex: 1;
    margin: 0 10px;
}
.comments-input input{
    outline: none;
    border: 0;
    width: 100%;
    height: 41px;
    line-height: 41px;
    border-radius: 30px;
    background: rgb(224, 219, 219);
    color: #ccc;
    padding-left: 5vw;
}
.face{
    margin-right: 10px;
}
.face img{
    position: relative;
    top: 8px;
}
</style>