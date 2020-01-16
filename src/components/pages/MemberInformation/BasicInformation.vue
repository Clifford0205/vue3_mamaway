<template>
  <div class="basic-information">
    <h3>會員基本資料</h3>
    <div class="information-area">
      <form action class="form-area">
        <div class="form-inside">
          <div class="name single-item">
            <div class="little-title">姓名</div>
            <input type="text" placeholder="請輸入姓名" class="name-input text-input" />
          </div>

          <div class="gender single-item">
            <div class="little-title">性別</div>
            <div class="select-part">
              <select name id class="my-select">
                <option value>女性</option>
                <option value>男性</option>
              </select>
            </div>
          </div>

          <div class="birth-day single-item">
            <div class="little-title">出生年月日</div>
            <div class="multi-select">
              <div class="select-part">
                <select name id class="my-select">
                  <option value>1922</option>
                  <option value>1922</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>01</option>
                  <option value>02</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>01</option>
                  <option value>01</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mobile single-item">
            <div class="little-title">手機號碼</div>
            <input type="text" placeholder="請輸入手機號碼" class="name-input text-input" />
          </div>

          <div class="phone single-item">
            <div class="little-title">聯絡電話</div>
            <input type="text" placeholder="請輸入聯絡電話" class="name-input text-input" />
          </div>

          <div class="address single-item">
            <div class="little-title">聯絡地址</div>
            <div class="multi-select">
              <div class="select-part">
                <select name id class="my-select">
                  <option value>台灣</option>
                  <option value>台灣</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>台北市</option>
                  <option value>台北市</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>中山區</option>
                  <option value>中山區</option>
                </select>
              </div>
            </div>

            <div class="address-info">
              <input type="text" placeholder="請輸入地址" class="name-input text-input" />
            </div>
          </div>

          <div class="email single-item">
            <div class="little-title">電子信箱</div>
            <input type="text" placeholder="請輸入電子信箱" class="name-input text-input" />
          </div>

          <div class="birth-day single-item">
            <div class="little-title">預產期或寶寶生日</div>
            <div class="multi-select">
              <div class="select-part">
                <select name id class="my-select">
                  <option value>1922</option>
                  <option value>1922</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>01</option>
                  <option value>02</option>
                </select>
              </div>

              <div class="select-part">
                <select name id class="my-select">
                  <option value>01</option>
                  <option value>01</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="two-buttons">
          <button type="button" class="the-btn cancel-btn">取&nbsp;&nbsp;消</button>
          <button type="button" class="the-btn send-btn">確&nbsp;&nbsp;認</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
