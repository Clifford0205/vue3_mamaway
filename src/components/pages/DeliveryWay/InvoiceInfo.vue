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
        <p class="text little-title">中獎發票寄送</p>
        <div class="options">
          <div class="single-option">
            <input type="radio" name="location" value="Taipei" />
            <p class="text">同收件人</p>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="Taoyuan" />
            <div class="text">
              <p>其他地址</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grey-area">
        <div class="choose-invoive-type"></div>

        <div class="mail-and-phone">
          <div class="mail single-item">
            <div class="little-title">姓名</div>
            <input type="text" placeholder="請輸入姓名" class="email-input text-input" />
          </div>

          <div class="phone single-item">
            <div class="little-title">行動電話</div>
            <input type="text" placeholder="請輸入行動電話" class="phone-input text-input" />
          </div>
        </div>

        <div class="mail-and-phone">
          <div class="mail single-item">
            <div class="little-title">姓名</div>
            <input type="text" placeholder="請輸入姓名" class="email-input text-input" />
          </div>

          <div class="phone single-item">
            <div class="little-title">行動電話</div>
            <input type="text" placeholder="請輸入行動電話" class="phone-input text-input" />
          </div>
        </div>
      </div>

      <input type="checkbox" name="vehicle1" value="add" class="common-address" />
      雲端發票服務「雲端發票實施作業要點」我同意辦理退貨時，由媽媽餵Mamaway代為處理發票及銷貨退回證明書，已加速退貨退款作業。
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
