<template>
  <div class="parent">
    <div class="div1" id="numbar">
      <div class="inputholder">{{ input }}</div>
    </div>
    <button class="div2 button" @click="clear()" id="C">
      <div class="buttontext">C</div>
    </button>
    <button class="div3 button" @click="answer()" id="ANS">
      <div class="buttontext">ANS</div>
    </button>
    <button class="div4 button" @click="backspace()" id="DEL">
      <div class="buttontext">DEL</div>
    </button>
    <button class="div5 button" @click="mathFunc('PLUS')" id="PLUS">
      <div class="buttontext">+</div>
    </button>
    <button class="div6 button" @click="numPressed('1')" id="ONE">
      <div class="buttontext">1</div>
    </button>
    <button class="div7 button" @click="numPressed('2')" id="TWO">
      <div class="buttontext">2</div>
    </button>
    <button class="div8 button" @click="numPressed('3')" id="THREE">
      <div class="buttontext">3</div>
    </button>
    <button class="div9 button" @click="mathFunc('MINUS')" id="MINUS">
      <div class="buttontext">-</div>
    </button>
    <button class="div10 button" @click="numPressed('4')" id="FOUR">
      <div class="buttontext">4</div>
    </button>
    <button class="div11 button" @click="numPressed('5')" id="FIVE">
      <div class="buttontext">5</div>
    </button>
    <button class="div12 button" @click="numPressed('6')" id="SIX">
      <div class="buttontext">6</div>
    </button>
    <button class="div13 button" @click="mathFunc('MULTIPLY')" id="MULTIPLY">
      <div class="buttontext">×</div>
    </button>
    <button class="div14 button" @click="numPressed('7')" id="SEVEN">
      <div class="buttontext">7</div>
    </button>
    <button class="div15 button" @click="numPressed('8')" id="EIGHT">
      <div class="buttontext">8</div>
    </button>
    <button class="div16 button" @click="numPressed('9')" id="NINE">
      <div class="buttontext">9</div>
    </button>
    <button class="div17 button" @click="mathFunc('DIVIDE')" id="DIVIDE">
      <div class="buttontext">÷</div>
    </button>
    <button class="div18 button" id="BLANK">
      <div class="buttontext"></div>
    </button>
    <button class="div19 button" @click="numPressed('0')" id="NULL">
      <div class="buttontext">0</div>
    </button>
    <button class="div20 button" @click="numPressed('.')" id="DOT">
      <div class="buttontext">.</div>
    </button>
    <button class="div21 button button2" @click="mathFunc('')" id="EQUALS">
      <div class="buttontext">=</div>
    </button>
  </div>
</template>
<script>
export default {
  name: "CalculatorComp",
  created() {
    window.addEventListener("keydown", this.onKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
  data() {
    return {
      input: "",
      numone: 0,
      numtwo: 0,
      sum: 0,
      firstNum: true,
      method: "",
    };
  },
  methods: {
    numPressed(num) {
      if (num == ".") {
        if (this.input.indexOf(".") === -1) {
          this.input += num;
        }
      } else {
        this.input += num;
      }
    },
    mathFunc(math) {
      if (this.input !== "" && this.input !== ".") {
        if (this.firstNum) {
          this.numone = this.input * 1;
          this.input = "";
          this.firstNum = false;
          this.numtwo = 0;
          this.method = math;
        } else {
          this.numone = this.equals(math);
          this.numtwo = 0;
          this.sum = 0;
        }
      }
    },
    equals(math) {
      if (!this.firstNum && this.input !== "" && this.input !== ".") {
        switch (math) {
          case "PLUS":
            this.numtwo = this.input * 1;
            this.sum = this.numone + this.numtwo;
            this.input = this.sum.toString();
            this.logMath("+", this.numone, this.numtwo, this.sum);
            this.reset();
            break;
          case "MINUS":
            this.numtwo = this.input * 1;
            this.sum = this.numone - this.numtwo;
            this.input = this.sum.toString();
            this.logMath("-", this.numone, this.numtwo, this.sum);
            this.reset();
            break;
          case "MULTIPLY":
            this.numtwo = this.input * 1;
            this.sum = this.numone * this.numtwo;
            this.input = this.sum.toString();
            this.logMath("×", this.numone, this.numtwo, this.sum);
            this.reset();
            break;
          case "DIVIDE":
            this.numtwo = this.input * 1;
            if (this.numtwo == 0) {
              alert("You can't divide by zero!");
              this.clear();
              break;
            }
            this.sum = this.numone / this.numtwo;
            this.input = this.sum.toString();
            this.logMath("÷", this.numone, this.numtwo, this.sum);
            this.reset();
            break;
          case "":
            this.equals(this.method);
        }
      }
    },
    reset() {
      this.numone = 0;
      this.numtwo = 0;
      this.firstNum = true;
    },
    clear() {
      this.input = "";
      this.reset();
    },

    backspace() {
      this.input = this.input.slice(0, -1);
    },
    answer() {
      this.input = this.sum.toString();
    },

    logMath(symbol, n1, n2, sum) {
      this.$emit("log", symbol, n1, n2, sum);
    },
    onKeyPress(e) {
      switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          this.numPressed(e.key);
          break;
        case ".":
          this.numPressed(e.key);
          break;
        case "Enter":
          this.equals("");
          break;
        case "Backspace":
          this.backspace();
          break;
        case "Escape":
          this.clear();
          break;
        case "+":
          this.mathFunc("PLUS");
          break;
        case "-":
          this.mathFunc("MINUS");
          break;
        case "*":
          this.mathFunc("MULTIPLY");
          break;
        case "/":
          this.mathFunc("DIVIDE");
          break;
      }
    },
  },
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  border-style: solid;
  overflow: hidden;
  border-color: black;
  border-width: 1px;
  border-radius: 15px;
  height: 756px;
  width: 576px;
}
.div1 {
  grid-area: 1 / 1 / 2 / 5;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
}
.div4 {
  grid-area: 2 / 3 / 3 / 4;
}
.div5 {
  grid-area: 2 / 4 / 3 / 5;
}
.div6 {
  grid-area: 3 / 1 / 4 / 2;
}
.div7 {
  grid-area: 3 / 2 / 4 / 3;
}
.div8 {
  grid-area: 3 / 3 / 4 / 4;
}
.div9 {
  grid-area: 3 / 4 / 4 / 5;
}
.div10 {
  grid-area: 4 / 1 / 5 / 2;
}
.div11 {
  grid-area: 4 / 2 / 5 / 3;
}
.div12 {
  grid-area: 4 / 3 / 5 / 4;
}
.div13 {
  grid-area: 4 / 4 / 5 / 5;
}
.div14 {
  grid-area: 5 / 1 / 6 / 2;
}
.div15 {
  grid-area: 5 / 2 / 6 / 3;
}
.div16 {
  grid-area: 5 / 3 / 6 / 4;
}
.div17 {
  grid-area: 5 / 4 / 6 / 5;
}
.div18 {
  grid-area: 6 / 1 / 7 / 2;
}
.div19 {
  grid-area: 6 / 2 / 7 / 3;
}
.div20 {
  grid-area: 6 / 3 / 7 / 4;
}
.div21 {
  grid-area: 6 / 4 / 7 / 5;
}

.button {
  display: flex;
  align-content: center;
  align-items: center;
  background-color: #b0a8a7;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}
.buttontext {
  font-size: 2.5vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 0px;
  margin-left: auto;
  margin-right: auto;
}
#numbar {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #b0a8a7;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  height: 20vh;
}

.button2 {
  background-color: #42b983;
}
.inputholder {
  font-size: 2.5vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 0px;
  text-align: right;
  vertical-align: middle;
  margin-top: auto;
  margin-bottom: auto;
}

@media only screen and (max-width: 600px) {
  .parent {
    width: 100vw;
    height: 80vh;
  }
}
</style>
