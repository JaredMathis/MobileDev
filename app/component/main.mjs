import { ui_element_input } from "../../ui/element/input.mjs"

export function app_component_main(parent) {
    let input = ui_element_input(parent, 'GitHub Personal access token');
    input.focus();
}