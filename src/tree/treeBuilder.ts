import "./tree.css";

export function treeBuilder(height: number) {
    let text = `<div class="tree" style="font-size: calc((100vh - 5rem) / ${height}); line-height: calc((100vh - 5rem) / ${height})">`;
    const stumpHeight = Math.round(height / 5);

    for (let row = 1; row <= height; row++) {
        const content = row > height - stumpHeight ? '<a class="trunk">T</a>'.repeat(stumpHeight) : `<a class="leaf">${row % 10}</a>`.repeat(row);

        text += content + "<br>";
    }

    return text + "</div>";
}