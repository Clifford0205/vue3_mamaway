<template>
  <div class="shop-cart-detail">
    <div class="choose-delivery-way">
      <h3>配送方式</h3>
      <div class="choose-country">
        <div class="delivery-country">
          <p class="text little-title">配送國家</p>
          <a class="order-oversea" data-toggle="modal" data-target="#orderModal">海外訂購說明</a>
        </div>

        <div class="select-part">
          <select name="country" id class="country-select">
            <option value selected>台灣本島</option>
          </select>
        </div>
      </div>

      <div class="pickup-method">
        <p class="text little-title">取貨方式</p>
        <div class="options">
          <div class="single-option">
            <input type="radio" name="location" value="Taipei" />
            <p class="text">宅配到府</p>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="Taoyuan" />
            <div class="text">
              <p>超商取貨(線上付款)</p>
              <p class="red-text">若總體積過大，將改為宅配送貨</p>
            </div>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="Taoyuan" />
            <div class="text">
              <p>超商取貨(取貨付款)</p>
              <p class="red-text">若總體積過大，將改為宅配送貨</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="orderModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div
              class="modal-body"
            >ＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩＡＰＩ</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >確{{ '\xa0\xa0\xa0\xa0'}} 認</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-line"></div>
  </div>
</template>

<script>
export default {};
</script>
