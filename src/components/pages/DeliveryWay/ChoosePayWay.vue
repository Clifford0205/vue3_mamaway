<template>
  <div class="shop-cart-detail">
    <div class="choose-pay-way">
      <h3>選擇付款方式</h3>
      <div class="two-part">
        <div class="grey-area">
          <div class="discount-item bonus-points">
            <div class="bonus-points-text">
              <div class="title">紅利點數</div>
              <p class="balance">
                目前有
                <span class="red-text">1328</span>
                點，本次可使用
                <span class="red-text">1328</span>
                點
              </p>
            </div>
            <div class="purchase-money-form">
              <input type="text" placeholder="欲使用的紅利點數" class="money-input" />
              <button class="money-btn">送出</button>
            </div>
          </div>

          <div class="discount-item bonus-points">
            <div class="bonus-points-text">
              <div class="title">儲值金</div>
              <p class="balance">
                目前有
                <span class="red-text">1328</span>
                點，本次可使用
                <span class="red-text">1328</span>
                點
              </p>
            </div>
            <div class="purchase-money-form">
              <input type="text" placeholder="欲使用的儲值金" class="money-input" />
              <button class="money-btn">送出</button>
            </div>
          </div>

          <div class="discount-item bonus-points">
            <div class="bonus-points-text">
              <div class="title">退貨保留款</div>
              <p class="balance">
                目前有
                <span class="red-text">1328</span>
                點，本次可使用
                <span class="red-text">1328</span>
                點
              </p>
            </div>
            <div class="purchase-money-form">
              <input type="text" placeholder="欲使用的退貨保留款" class="money-input" />
              <button class="money-btn">送出</button>
            </div>
          </div>
        </div>

        <div class="white-area">
          <div class="the-pay-way">
            <input type="radio" name="location" value="line" class="radio-btn" /> LINE
            <br />
            <input type="radio" name="location" value="credit-card" class="radio-btn" /> 線上信用刷卡
            <br />
            <input type="radio" name="location" value="cash" class="radio-btn" /> 貨到付款
          </div>

          <div class="credit-card-part">
            <div class="card-num card-part-item">
              <p class="title">信用卡號</p>
              <input type="text" placeholder="請輸入信用卡號" />
            </div>

            <div class="eff-date card-part-item">
              <p class="title">有效日期</p>
              <div class="two-select">
                <div class="select-part">
                  <select name id class="the-select">
                    <option value>請選擇年</option>
                  </select>
                </div>

                <div class="select-part">
                  <select name id class="the-select">
                    <option value>請選擇月</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="safe-num card-part-item">
              <p class="title">信用卡安全碼</p>
              <input type="text" placeholder="請輸入信用卡背面3碼" />
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
