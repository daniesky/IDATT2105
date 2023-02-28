import { describe, it, expect } from "vitest";
import CalculatorComp from "src/components/CalculatorComp.vue";
import { mount } from "@vue/test-utils";

describe("CalculatorComp.vue", () => {
  it("Testing PLUS button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 10,
          input: "15",
          firstNum: false,
          method: "PLUS",
          numtwo: 0,
        };
      },
    });
    //wrapper.find("#PLUS").trigger("click");
    await -wrapper.find("#EQUALS").trigger("click");
    expect(parseInt(wrapper.find(".inputholder").text())).toBe(25);
  });

  it("Testing MINUS button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 10,
          input: "15",
          firstNum: false,
          method: "MINUS",
          numtwo: 0,
        };
      },
    });
    //wrapper.find("#PLUS").trigger("click");
    await -wrapper.find("#EQUALS").trigger("click");
    expect(parseInt(wrapper.find(".inputholder").text())).toBe(-5);
  });

  it("Testing MULTIPLY button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 10,
          input: "15",
          firstNum: false,
          method: "MULTIPLY",
          numtwo: 0,
        };
      },
    });
    //wrapper.find("#PLUS").trigger("click");
    await -wrapper.find("#EQUALS").trigger("click");
    expect(parseInt(wrapper.find(".inputholder").text())).toBe(150);
  });

  it("Testing DIVIDE button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 100,
          input: "20",
          firstNum: false,
          method: "DIVIDE",
          numtwo: 0,
        };
      },
    });
    await -wrapper.find("#EQUALS").trigger("click");
    expect(parseInt(wrapper.find(".inputholder").text())).toBe(5);
  });

  it("Testing emit math history to log", async () => {
    //We first simulate a math event performed by the user, causing the emit to occur.
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 100,
          input: "20",
          firstNum: false,
          method: "DIVIDE",
          numtwo: 0,
        };
      },
    });
    await -wrapper.find("#EQUALS").trigger("click");

    const emitOccured = wrapper.emitted("log");
    expect(emitOccured).toHaveLength(1);

    const expectedPayload = ["÷", 100, 20, 5];
    expect(wrapper.emitted("log")[0]).toMatchObject(expectedPayload);
  });

  it("Testing the clear button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 100,
          input: "20",
          firstNum: false,
          method: "DIVIDE",
          numtwo: 0,
        };
      },
    });
    await wrapper.find("#EQUALS").trigger("click");
    await wrapper.find("#C").trigger("click");
    expect(wrapper.find(".inputholder").text()).toBe("");
    expect(wrapper.vm.numone).toBe(0);
    expect(wrapper.vm.numtwo).toBe(0);
    expect(wrapper.vm.firstNum).toBe(true);
    expect(wrapper.vm.method).toBe("");
  });

  it("Testing that answer button displays properly", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          numone: 10,
          input: "15",
          firstNum: false,
          method: "MULTIPLY",
          numtwo: 0,
        };
      },
    });
    await wrapper.find("#EQUALS").trigger("click");
    expect(wrapper.find(".inputholder").text()).toBe("150");
    wrapper.find("#C").trigger("click");
    wrapper.find("#ANS").trigger("click");
    expect(wrapper.find(".inputholder").text()).toBe("150");
  });

  it("Testing delete button", async () => {
    const wrapper = mount(CalculatorComp, {
      data() {
        return {
          input: "15",
        };
      },
    });
    await wrapper.find("#DEL").trigger("click");
    expect(wrapper.find(".inputholder").text()).toBe("1");
  });
});
