import { ui_element } from "../../ui/element.mjs";
import { ui_element_html_inner_set } from "../../ui/element/html/inner/set.mjs";
import { ui_element_input } from "../../ui/element/input.mjs"
import { Octokit, App } from "https://cdn.skypack.dev/octokit";

export function app_component_main(parent) {
    let input = ui_element_input(parent, 'GitHub Personal access token');
    input.focus();

    let button = ui_element_button(parent, 'Login');
    button.addEventListener('click', async () => {
        let octokit = new Octokit({ auth: input.value });
        let {
            data: { login },
        } = await octokit.rest.users.getAuthenticated();

        let repos = await octokit.rest.repos.listForAuthenticatedUser();
        console.log(repos)
    });
}

function ui_element_button(parent, button_text) {
    let button = ui_element(parent, 'button');
    ui_element_html_inner_set(button, button_text);
    return button;
}
