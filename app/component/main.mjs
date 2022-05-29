import { ui_element } from "../../ui/element.mjs";
import { ui_element_html_inner_set } from "../../ui/element/html/inner/set.mjs";
import { ui_element_html_inner_clear } from "../../ui/element/html/inner/clear.mjs";
import { ui_element_input } from "../../ui/element/input.mjs"
import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { _ } from "https://cdn.skypack.dev/lodash";

export function app_component_main(parent) {
    let input = ui_element_input(parent, 'GitHub Personal access token');
    input.focus();

    let button = ui_element_button(parent, 'Login');

    let login_message = ui_element_div(parent);

    let repos_container = ui_element_div(parent);

    let repos_container2 = ui_element_div(parent);

    button.addEventListener('click', async () => {
        let octokit = new Octokit({ auth: input.value });
        let {
            data: { login },
        } = await octokit.rest.users.getAuthenticated();

        ui_element_html_inner_set(login_message, `Logged in as ${login}`);

        let repos = await octokit.rest.repos.listForAuthenticatedUser();
        let mapped = _.map(repos.data, 'full_name')
        ui_element_html_inner_clear(repos_container);
        let repos_select = ui_element_select(repos_container, [''].concat(mapped))

        repos_select.addEventListener('change', async () => {
            let repo_name = ui_element_select_selection(repos_select).value;
            let repo = await octokit.rest.repos.get('/repos/' + repo_name + '/git/trees/main');
            console.log({repo})
            ui_element_html_inner_clear(repos_container2);
            let mapped2 = _.map(repo.data.tree, 'path')
            let repos_select2 = ui_element_select(repos_container2, [''].concat(mapped2))
        });
    });
}

function ui_element_select_selection(select) {
    var selection = select.options[select.selectedIndex]
    return selection
}

function ui_element_select(parent, options) {
    let select = ui_element(parent, 'select');
    _.forEach(options, o => {
        ui_element_option(select, o, o);
    })
    return select;
}

function ui_element_option(parent, option_value, option_label) {
    let option = ui_element(parent, 'option');
    ui_element_html_inner_set(option, option_label);
    option.setAttribute('value', option_value);
    return option;
}

function ui_element_span(parent) {
    let button = ui_element(parent, 'span');
    return button;
}

function ui_element_div(parent) {
    let button = ui_element(parent, 'div');
    return button;
}

function ui_element_button(parent, button_text) {
    let button = ui_element(parent, 'button');
    ui_element_html_inner_set(button, button_text);
    return button;
}
