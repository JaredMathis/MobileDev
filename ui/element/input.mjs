export function ui_element_input(parent, placeholder) {
    let input = document.createElement('input');
    parent.appendChild(input)

    input.placeholder = placeholder;
    return input;
}