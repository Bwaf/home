url = new URL(window.location.href);

function peramlink() {
if (url.searchParams.has('fish')) {
window.location("/search/fish");
}
}
