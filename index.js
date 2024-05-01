url = new URL(window.location.href);

if (url.searchParams.has('fish')) {
window.location("/search/fish");
}