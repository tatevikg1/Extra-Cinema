<template>
  <div class="form">
    <div class="top-block"></div>
    <div v-if="hardware" class="scroll-wrap">
      <ul>
        <li v-for="(item, idx) in hardware" :key="idx">
          <span class="type text-white text-regular">{{ item.type }}</span>
          <span class="serialNum text-white text-regular">{{
            item.serialNum
          }}</span>
          <delete-btn
            @click.native="deleteHandler(item)"
            :show-text="showText"
          />
        </li>
      </ul>
    </div>
    <div class="actions-wrap">
      <add-btn
        @click.native="addHardwareActive = !addHardwareActive"
        text="Добавить устройство"
      />
      <div v-if="addHardwareActive" class="add-form">
        <div class="row">
          <div class="input-group">
            <span class="type text-regular">Устройство:</span>
            <input
              v-model="newHardware.type"
              @input="changeHandler"
              type="text"
            />
          </div>
          <div class="input-group">
            <span class="text-regular">Серийный номер:</span>
            <input
              v-model="newHardware.serialNum"
              @input="changeHandler"
              type="text"
            />
          </div>
        </div>
        <Btn
          @click.native="addHardware"
          text="Добавить"
          :disabled="btnDisabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddBtn from "@/components/AddBtn";
import Btn from "@/components/Btn";
import DeleteBtn from "@/components/DeleteBtn";

export default {
  components: { AddBtn, Btn, DeleteBtn },
  data() {
    return {
      btnDisabled: true,
      addHardwareActive: false,
      showText: true,
      newHardware: {
        type: "",
        serialNum: "",
      },
      hardware: [
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
        { type: "Проектор", serialNum: "00000 27" },
      ],
    };
  },
  mounted() {
    if (window.screen.width < 500) {
      this.showText = false;
    }
  },
  methods: {
    changeHandler() {
      if (
        this.newHardware.type.length > 1 &&
        this.newHardware.serialNum.length > 1
      ) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    addHardware() {
      this.hardware.push({
        type: this.newHardware.type,
        serialNum: this.newHardware.serialNum,
      });
      this.newHardware.type = "";
      this.newHardware.serialNum = "";
      this.btnDisabled = true;
    },
    deleteHandler(item) {
      this.hardware = this.hardware.filter((el) => el !== item);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding-bottom: 71px;
  border-radius: 10px;
  max-width: 655px;
  margin: 101px auto 60px auto;
  width: 100%;
  background: #161616;
  .top-block {
    height: 33px;
    width: 100%;
    box-shadow: 10px 13px 25px rgba(0, 0, 0, 0.24);
  }
  .scroll-wrap {
    padding: 20px 60px;

    ul {
      overflow-y: scroll;
      max-height: 200px;
      height: 100%;
      padding-right: 28px;
      li {
        display: flex;
        justify-content: space-between;
        &:first-child {
          span,
          button {
            padding: 0 0 10px 0;
          }
        }
        span,
        button {
          padding: 20px 0 10px 0;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .type {
          width: 100px;
          word-wrap: break-word; /* IE 5.5-7 */
          white-space: pre-wrap;
        }
        .serialNum {
          max-width: 163px;
          width: 100%;
          margin: 0 20px;
          border-bottom: 1px solid #3d3c3c;
          justify-content: center;
        }
      }
    }
  }
  .actions-wrap {
    padding: 32px 60px 0 60px;
    box-shadow: 10px -21px 25px rgba(0, 0, 0, 0.24);
    .add-form {
      background: #252424;
      padding: 22px 26px 27px 26px;
      border-radius: 5px;
      margin-top: 32px;
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .input-group {
          display: flex;
          align-items: center;
          &:first-child {
            margin-right: 23px;
            input {
              max-width: 151px;
            }
          }
          &:last-child {
            input {
              max-width: 108px;
            }
          }
          span {
            color: #767676;
            font-size: 12px;
            margin-right: 6px;
          }
          input {
            width: 100%;
            height: 25px;
            background: #161616;
            border-radius: 2px;
            border: 0;
            outline: 0;
            color: #ffffff;
            padding: 0 10px;
            font-family: "Regular";
          }
        }
      }
      .btn {
        margin-top: 29px;
      }
    }
  }
}

@media screen and (max-width: 834px) {
  .form {
    margin: 88px auto 60px auto;
  }
}

@media screen and (max-width: 620px) {
  .form {
    .scroll-wrap {
      padding: 20px 30px;
    }
    .actions-wrap {
      padding: 32px 30px 0 30px;
    }
  }
}
@media screen and (max-width: 480px) {
  .form {
    background: transparent;
    margin: 70px auto 60px auto;
    .scroll-wrap {
      padding: 0;
      ul li {
        span,
        button {
          padding: 15px 0 7.5px 0;
        }
        span {
          font-size: 14px;
        }
        .serialNum {
          margin: 0 10px;
        }
      }
    }
    .actions-wrap {
      padding: 20px 0 0 0;
      .add-form {
        padding: 17px 21px;
        margin-top: 26px;
        .row {
          flex-wrap: wrap;
          .input-group {
            display: flex;
            justify-content: space-between;
            width: 100%;
            &:nth-child(1) {
              margin-right: 0;
              margin-bottom: 15px;
            }
            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>