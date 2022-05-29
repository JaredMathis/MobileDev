

export function ui_element(parent, tag_name) {
    let e = document.createElement(tag_name);
    parent.appendChild(e);
    return e;
}
