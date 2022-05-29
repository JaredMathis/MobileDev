import { ui_element } from "../../ui/element.mjs";
import { ui_element_html_inner_set } from "../../ui/element/html/inner/set.mjs";
import { ui_element_input } from "../../ui/element/input.mjs"

export function app_component_main(parent) {
    let input = ui_element_input(parent, 'GitHub Personal access token');
    input.focus();

    ui_element_button(parent, 'Login');
}

function ui_element_button(parent, button_text) {
    let button = ui_element(parent, 'button');
    ui_element_html_inner_set(button, button_text);
}
