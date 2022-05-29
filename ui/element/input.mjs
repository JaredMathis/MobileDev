export function ui_element_input(parent, placeholder) {
    let input = ui_element(parent, 'input');
    input.placeholder = placeholder;
    return input;
}

function ui_element(parent, tag_name) {
    let e = document.createElement(tag_name);
    parent.appendChild(e);
    return e;
}
