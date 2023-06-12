const fetches = [check, getData()];
function removeLoadingDivs() {
  let onlode = document.getElementById("on-lode");
  onlode.style.display = "none";
}
Promise.allSettled(fetches).then((results) => {
  removeLoadingDivs();
});
