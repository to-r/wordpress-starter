MY_APP.GlobalHeader = ((ns) => {
  document.addEventListener("DOMContentLoaded", () => {
    const params = ns.Utils.getUrlParams();
    console.log("global footer");
    console.log("params", params);
  });
})(MY_APP);
