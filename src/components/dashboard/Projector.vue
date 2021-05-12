<template>
  <div class="form">
    <div class="top-block"></div>
    <div class="scroll-wrap">
      <ul>
        <li v-for="(item, idx) in hardware" :key="idx">
          <span class="type text-white text-regular">{{ item.type }}</span>
          <span class="serialNum text-white text-regular">{{
            item.serialNum
          }}</span>
          <button @click="deleteHandler(item)" class="text-regular">
            Удалить <img :src="DeleteIcon" alt="" />
          </button>
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
import DeleteIcon from "@/assets/images/dashboard/cancel.svg";

export default {
  components: { AddBtn, Btn },
  data() {
    return {
      DeleteIcon,
      btnDisabled: true,
      addHardwareActive: false,
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
          max-width: 100px;
          word-wrap: break-word; /* IE 5.5-7 */
          white-space: pre-wrap;
        }
        .serialNum {
          max-width: 163px;
          width: 100%;
          border-bottom: 1px solid #3d3c3c;
          justify-content: center;
        }
        button {
          background: transparent;
          color: #27ae60;
          border: 0;
          outline: 0;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          img {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .actions-wrap {
    padding: 32px 60px 0 60px;
    box-shadow: 10px -21px 25px rgba(0, 0, 0, 0.24);
    .addBtn {
      margin-bottom: 32px;
    }
    .add-form {
      background: #252424;
      padding: 22px 26px 27px 26px;
      border-radius: 5px;
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
</style>