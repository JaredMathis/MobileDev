import { ui_element } from "../element.mjs";

export function ui_element_input(parent, placeholder) {
    let input = ui_element(parent, 'input');
    input.placeholder = placeholder;
    return input;
}