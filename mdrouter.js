// Markdown router that renders markdown client-side using JavaScript,
// ensuring hyperlinks still work within the files
// This thing is public domain as far as I'm concerned
const MD = new showdown.Converter({
    tables: true
});
const rootpath = window.location

function onLinkClicked(e) {
    let href = e.target.getAttribute("href");
    if (href.endsWith(".md")) {
        e.preventDefault();
        goto(href)
    }
}

function getCurrentUrl() {
    let root = new URL(window.location.href)
    let hash = decodeURIComponent(root.hash).substring(1);
    root.hash = "";
    root = root.toString();

    let current = (new URL(hash, root)).toString()
    return current;
}

function goto(where) {
    let current = getCurrentUrl();
    let final = new URL(where, current);
    fetchMarkdown(final.toString())
    window.location.hash = encodeURIComponent(final.pathname);
}

async function fetchMarkdown(address) {
    const mdc = document.getElementById("mdcontent")
    mdc.innerHTML = "";
    let f = await fetch(address);
    let md = await f.text();

    mdc.innerHTML = MD.makeHtml(md);
    let links = document.querySelectorAll("a");
    links.forEach(k => {
        k.onclick = onLinkClicked;
    })
}

function loadFromHash() {
    let h = window.location.hash.substring(1);
    if (!h) {
        window.location.hash = "index.md"
    }
    fetchMarkdown(getCurrentUrl());
}

document.addEventListener("DOMContentLoaded", loadFromHash, { once: true });
window.addEventListener("hashchange", loadFromHash);