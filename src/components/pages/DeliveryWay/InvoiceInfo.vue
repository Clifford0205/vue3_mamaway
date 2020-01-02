<template>
  <div class="shop-cart-detail">
    <div class="invoice-info">
      <h3>發票資料</h3>
      <div class="choose-invoive-type">
        <div class="invoive-type">
          <p class="text little-title">發票類型</p>
        </div>

        <div class="select-part">
          <select name="invoice" id class="invoice-select">
            <option value selected>雲端發票</option>
          </select>
        </div>
      </div>

      <div class="grey-area">
        <div class="choose-invoive-type">
          <div class="invoive-type">
            <p class="text little-title">使用載具</p>
          </div>

          <div class="select-part">
            <select name="invoice" id class="invoice-select">
              <option value selected>雲端發票</option>
            </select>
          </div>
        </div>

        <div class="mail-and-phone">
          <div class="mail single-item">
            <div class="little-title">載具條碼</div>
            <input type="text" placeholder="請輸入載具條碼" class="email-input text-input" />
          </div>

          <div class="phone single-item">
            <div class="little-title">確認載具條碼</div>
            <input type="text" placeholder="請再次輸入載具條碼" class="phone-input text-input" />
          </div>
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal">確 認</button>
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
