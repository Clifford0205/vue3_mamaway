<template>
  <div class="shop-cart-detail">
    <div class="recipient-information">
      <h3>收件人資訊</h3>

      <div class="name">
        <div class="little-title">姓名</div>
        <input type="text" placeholder="請輸入姓名" class="name-input error text-input" />
        <small class="err-text show">輸入錯誤</small>
      </div>

      <div class="mail-and-phone">
        <div class="mail single-item">
          <div class="little-title">Email</div>
          <input type="text" placeholder="請輸入Email" class="email-input text-input" />
          <small class="err-text">輸入錯誤</small>
        </div>

        <div class="phone single-item">
          <div class="little-title">手機號碼</div>
          <input type="text" placeholder="請輸入手機號碼" class="phone-input text-input" />
          <small class="err-text">輸入錯誤</small>
        </div>
      </div>
      <div class="choose-address">
        <div class="delivery-address">
          <p class="text little-title">收件地址</p>
          <a class="order-oversea" data-toggle="modal" data-target="#addressModal">常用地址</a>
        </div>

        <div class="select-address">
          <div class="select-part select-city">
            <select name="country" id class="country-select">
              <option value selected>請選擇縣市</option>
            </select>
          </div>
          <div class="select-part select-zone">
            <select name="country" id class="country-select">
              <option value selected>請選擇縣市</option>
            </select>
          </div>

          <input type="text" placeholder="請輸入地址" class="address-input text-input" />
        </div>
      </div>

      <input type="checkbox" name="vehicle1" value="add" class="common-address" />
      加入常用地址
      <div class="arrival-date">
        <p class="text little-title">
          到貨日期
          <span class="red-text">(物流周日不配送)(限台灣區使用)</span>
        </p>
        <div class="options">
          <div class="single-option">
            <input type="radio" name="location" value="allcan" />
            <p class="text">皆可</p>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="onetofive" />
            <div class="text">
              <p>一~五</p>
            </div>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="saturday" />
            <div class="text">
              <p>六</p>
            </div>
          </div>
        </div>
      </div>

      <div class="arrival-time">
        <p class="text little-title">
          到貨時間
          <span class="red-text">(限台灣區使用)</span>
        </p>
        <div class="options">
          <div class="single-option">
            <input type="radio" name="location" value="allcan" />
            <p class="text">皆可</p>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="onetofive" />
            <div class="text">
              <p>13時前</p>
            </div>
          </div>

          <div class="single-option">
            <input type="radio" name="location" value="saturday" />
            <div class="text">
              <p>14~18時</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="addressModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">常用地址</h5>
            </div>
            <div class="modal-body">
              <ul>
                <li class="single-address">
                  <input type="radio" name="my-address" value="allcan" />
                  <div class="my-address">
                    <h6 class="address-title">地址1</h6>
                    <p>220 台北市中山區復興北路800號12樓</p>
                  </div>
                </li>
                <li class="single-address">
                  <input type="radio" name="my-address" value="allcan" />
                  <div class="my-address">
                    <h6 class="address-title">地址1</h6>
                    <p>220 台北市中山區復興北路800號12樓</p>
                  </div>
                </li>
                <li class="single-address">
                  <input type="radio" name="my-address" value="allcan" />
                  <div class="my-address">
                    <h6 class="address-title">地址1</h6>
                    <p>220 台北市中山區復興北路800號12樓</p>
                  </div>
                </li>
                <li class="single-address">
                  <input type="radio" name="my-address" value="allcan" />
                  <div class="my-address">
                    <h6 class="address-title">地址1</h6>
                    <p>220 台北市中山區復興北路800號12樓</p>
                  </div>
                </li>
                <li class="single-address">
                  <input type="radio" name="my-address" value="allcan" />
                  <div class="my-address">
                    <h6 class="address-title">地址1</h6>
                    <p>220 台北市中山區復興北路800號12樓</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary cancel-btn" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary confirm-btn">確認</button>
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
