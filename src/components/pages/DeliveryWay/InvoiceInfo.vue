<template>
  <div class="shop-cart-detail">
    <div class="invoice-info">
      <h3>發票資料</h3>
      <div class="choose-invoive-type">
        <div class="invoive-type">
          <p class="text little-title">發票類型</p>
        </div>

        <div class="select-part">
          <select name="invoice" id class="invoice-select" v-model="invoiceValue">
            <option value="雲端發票" selected>雲端發票</option>
            <option value="發票捐贈">發票捐贈</option>
            <option value="三聯式發票">三聯式發票</option>
          </select>
        </div>
      </div>

      <div class="grey-area">
        <div class="triple-invoice" v-if="invoiceValue=='三聯式發票'">
          <div class="mail-and-phone triple-invoice-info">
            <div class="bar-code single-item">
              <div class="little-title">發票抬頭</div>
              <input type="text" placeholder="請輸入發票抬頭" class="email-input text-input" />
            </div>

            <div class="bar-code-again single-item">
              <div class="little-title">統一編號</div>
              <input type="text" placeholder="請輸入統一編號" class="phone-input text-input" />
            </div>

            <div class="bar-code-again single-item">
              <div class="little-title">發票地址</div>
              <input type="text" placeholder="請輸入發票地址" class="phone-input text-input" />
            </div>
          </div>
        </div>
        <div class="donate" v-if="invoiceValue=='發票捐贈'">
          <div class="choose-invoive-type">
            <div class>
              <p class="text little-title">捐贈對象</p>
            </div>

            <div class="select-part">
              <select name="invoice" id class="invoice-select">
                <option value selected>111 心路基金會</option>
              </select>
            </div>
          </div>
        </div>
        <div class="cloud" v-if="invoiceValue=='雲端發票'">
          <div class="choose-invoive-type">
            <div class>
              <p class="text little-title">使用載具</p>
            </div>

            <div class="select-part">
              <select name="invoice" id class="invoice-select">
                <option value selected>自然人憑證條碼</option>
              </select>
            </div>
          </div>

          <div class="mail-and-phone bar-code-out">
            <div class="bar-code single-item">
              <div class="little-title">載具條碼</div>
              <input type="text" placeholder="請輸入載具條碼" class="email-input text-input" />
            </div>

            <div class="bar-code-again single-item">
              <div class="little-title">確認載具條碼</div>
              <input type="text" placeholder="請再次輸入載具條碼" class="phone-input text-input" />
            </div>
          </div>
        </div>
      </div>

      <div class="cloud-invoice-check">
        <input type="checkbox" name="vehicle1" value="add" class="common-address cloud-invoice-box" />
        <p
          class="cloud-invoice-text"
        >雲端發票服務「雲端發票實施作業要點」我同意辦理退貨時，由媽媽餵Mamaway代為處理發票及銷貨退回證明書，已加速退貨退款作業。</p>
      </div>
    </div>

    <div class="mobile-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoiceType: ["雲端發票", "發票捐贈", "三聯式發票"],
      invoiceValue: "雲端發票"
    };
  }
};
</script>
