// declare some global functions here. might move it into spacebarHelpers

renderTmp = function (template, data) {
    var node = document.createElement("div");
    document.body.appendChild(node);
    UI.renderWithData(template, data, node);
    return node;
};