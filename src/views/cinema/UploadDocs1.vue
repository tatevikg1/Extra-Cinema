<template>
  <div>
    <Header />
    <section class="wrap">
      <div class="container">
        <router-link
          :to="{ name: 'for-halls' }"
          class="text-white text-regular arrow-back"
          ><img
            src="../../assets/images/cinema-for-halls-page/arrow_back.svg"
            alt="Назад"
          />
          Вернуться назад</router-link
        >
        <h1 class="text-white text-regular">
          Введите данные и прикрепите фото
        </h1>
        <form>
          <div class="form-wrap">
            <div class="form-row">
              <div class="text-wrap text-white text-regular">
                <p>Название юр. лица</p>
              </div>
              <div class="input-wrap">
                <input type="text" placeholder="Введите название" />
              </div>
            </div>
            <div class="form-row">
              <div class="text-wrap text-white text-regular">
                <p>Уставные документы</p>
              </div>
              <div class="input-wrap">
                <input
                  type="text"
                  placeholder="Прикрепите документы"
                  disabled
                />
                <div class="picker">
                  <label for="upload-docs">
                    <img
                      src="../../assets/images/cinema-upload-docs-page/attachment.svg"
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    id="upload-docs"
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="text-wrap text-white text-regular">
                <p>Населенный пункт</p>
              </div>
              <div class="input-wrap">
                <input type="text" placeholder="Ваш населенный пункт" />
              </div>
            </div>
            <div class="form-row">
              <div class="text-wrap text-white text-regular">
                <p>Ответственные лица</p>
              </div>
              <div class="input-wrap">
                <button type="button">
                  Убрать или добавить
                  <div class="picker">
                    <label for="upload-docs">
                      <img
                        src="../../assets/images/cinema-upload-docs-page/attachment.svg"
                        alt=""
                      />
                    </label>
                    <input
                      type="file"
                      id="upload-docs"
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "UploadDocs",
  components: { Header, Footer },
  mounted() {
    document.title = "Extra Cinema | Загрузка документов";
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px 0 63px 0;
  .container {
    position: relative;
    .arrow-back {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #999999;
      transition: 0.2s;
      &:hover {
        color: #ffffff;
      }
      img {
        margin-right: 10px;
        transform: translateY(2px);
      }
    }
    h1 {
      margin: auto;
      text-align: center;
      font-size: 24px;
      margin-bottom: 26px;
    }
    form {
      padding: 41px 45px;
      background: #161616;
      max-width: 883px;
      width: 100%;
      margin: auto;
      border-radius: 10px;
      .form-wrap {
        border: 1px solid #444444;
        border-radius: 10px;
        overflow: hidden;
        .form-row {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: -3px;
          .text-wrap {
            padding: 5px 20px;
            font-size: 16px;
            max-width: 240px;
            width: 100%;
            p {
              padding: 10px 0;
              // display: flex;
              // width: 100%;
              border-bottom: 1px solid #444444;
            }
          }
          .input-wrap {
            padding: 5px 20px;
            border-left: 1px solid #444444;
              border-bottom: 1px solid #444444;

            max-width: 591px;
            width: 100%;
            position: relative;
            button {
              padding: 10px;
              background: transparent;
              border: 0;
              border-bottom: 1px solid #444444;
              outline: 0;
              width: 100%;
              background: #252424;
              text-align: left;
              color: #555555;
              font-family: "Regular";
              font-size: 14px;
              border-radius: 5px;
              .picker {
                right: 30px;
              }
            }
            input {
              padding: 10px 0;
              background: transparent;
              border: 0;
              border-bottom: 1px solid #444444;
              outline: 0;
              width: 100%;
              color: #ffffff;
              font-family: "Regular";
              font-size: 14px;
              &:focus {
                border-bottom: 1px solid #ffffff;
                &::placeholder {
                  transform: translateX(10px);
                }
              }
              &::placeholder {
                font-family: "Regular";
                color: #555555;
                font-size: 14px;
                display: none;
                transition: 0.2s;
              }
            }
            .picker {
              position: absolute;
              top: 15px;
              right: 20px;
              width: 24px;
              &:hover {
                label {
                  img {
                    filter: brightness(100%);
                  }
                }
              }
              label img {
                filter: brightness(70%);
              }
              input {
                opacity: 0;
                z-index: -1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
