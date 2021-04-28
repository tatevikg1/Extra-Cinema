<template>
  <div class="wrap">
    <form>
      <div class="input-groups">
        <div class="input-group">
          <label for="name" class="text-regular">Введите имя и фамилию</label>
          <input type="text" id="name" />
        </div>
        <div class="input-group">
          <label for="name" class="text-regular">Номер карты</label>
          <input
            type="password"
            id="name"
            class="input-secret"
            placeholder="●●●● ●●●● ●●●● ●●●●"
          />
        </div>

        <div class="row">
          <div class="input-group">
            <label for="name" class="text-regular">Срок действия карты</label>
            <input type="text" id="name" placeholder="ММ/ГГ" />
          </div>
          <div class="input-group">
            <label for="name" class="text-regular">CVV2/CVC2</label>
            <input
              type="password"
              id="name"
              class="input-secret"
              placeholder="●●●"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 365px;
  .input-groups {
    .row {
      display: flex;
      justify-content: space-between;
      .input-group {
        max-width: 192px;
        &:nth-child(1) {
          margin-right: 20px;
        }
        &:nth-child(2) {
          max-width: 154px;
        }
      }
    }
    .input-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: relative;
      margin-top: 17px;
      input[type="password"] {
        color: #27ae60;
        font-size: 30px;
        letter-spacing: 3px;
      }
      &::focus {
        label {
          color: #ffffff;
        }
      }
      label {
        color: #777777;
        font-size: 14px;
      }
      input {
        height: 42px;
        background: transparent;
        border: 0.5px solid #777777;
        max-width: 560px;
        width: 100%;
        outline: 0;
        margin-top: 10px;
        cursor: pointer;
        transition: 0.1s;
        padding: 17px 23px;
        color: #ffffff;
        &:hover {
          border: 0.5px solid #ffffff;
        }
        &:focus {
          border: 0.5px solid #ffffff;
        }

        &::placeholder {
          color: #777777;
          font-family: "Regular";
        }
      }
      .input-secret {
        &::placeholder {
          font-size: 17px !important;
          text-transform: uppercase;
          letter-spacing: 3px;
          transform: translateY(-7px);
        }
      }
    }
  }
}
</style>