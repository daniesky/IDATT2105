import {describe, it, expect} from "vitest";
import LogComp from "src/components/LogComp.vue";
import { mount } from "@vue/test-utils";
import { assert } from "@vue/compiler-core";

describe("Testing log functionality", () => {
    it("Testing log items are displayed", () => {
        const wrapper = mount(LogComp, {
            props: {
                log : ["4 + 4 = 8"]
            }
        })
        const item = wrapper.findAll("#list").at(0).text();
        expect(wrapper.vm.log.at(0)).toBe(item);
    })
})