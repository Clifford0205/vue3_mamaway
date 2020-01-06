<template>
  <div class="SendOrderBottom">
    <!-- fixed留白區域 -->
    <div class="mobile-block-mobile"></div>
    <!-- fixed留白區域 -->
    <div class="sendorder-bottom-menu">
      <button class="menu-btn total">
        <p>
          總計
          <span class="price">＄100,000</span>
        </p>
      </button>
      <button class="menu-btn send-order-btn" data-toggle="modal" data-target="#nogiftModal">送出訂單</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="nogiftModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>您尚未選擇贈品</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">確 認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

