import {describe, it, expect} from "vitest";
import CalculatorComp from "src/components/CalculatorComp.vue";
import { mount } from "@vue/test-utils";


describe("CalculatorComp.vue", () => {
    it("Testing PLUS button", async () => {
        const wrapper = mount(CalculatorComp, {
            data() {
                return{
                    numone: 10,
                    input: "15",
                    firstNum: false,
                    method: "PLUS",
                    numtwo:0
                }
            }
        });
        //wrapper.find("#PLUS").trigger("click");
        await -wrapper.find("#EQUALS").trigger("click");
        expect(parseInt(wrapper.find(".inputholder").text())).toBe(25)
    })

    it("Testing MINUS button", async () => {
        const wrapper = mount(CalculatorComp, {
            data() {
                return{
                    numone: 10,
                    input: "15",
                    firstNum: false,
                    method: "MINUS",
                    numtwo:0
                }
            }
        });
        //wrapper.find("#PLUS").trigger("click");
        await -wrapper.find("#EQUALS").trigger("click");
        expect(parseInt(wrapper.find(".inputholder").text())).toBe(-5)
    })

    it("Testing MULTIPLY button", async () => {
        const wrapper = mount(CalculatorComp, {
            data() {
                return{
                    numone: 10,
                    input: "15",
                    firstNum: false,
                    method: "MULTIPLY",
                    numtwo:0
                }
            }
        });
        //wrapper.find("#PLUS").trigger("click");
        await -wrapper.find("#EQUALS").trigger("click");
        expect(parseInt(wrapper.find(".inputholder").text())).toBe(150)
    })

    it("Testing DIVIDE button", async () => {
        const wrapper = mount(CalculatorComp, {
            data() {
                return{
                    numone: 100,
                    input: "20",
                    firstNum: false,
                    method: "DIVIDE",
                    numtwo:0
                }
            }
        });
        await -wrapper.find("#EQUALS").trigger("click");
        expect(parseInt(wrapper.find(".inputholder").text())).toBe(5)
    })
});