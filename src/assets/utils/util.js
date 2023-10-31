//处理最大宽度(封装在util.js中)
export const handleMaxWidth = function handleMaxWidth() {
  let HTML = document.documentElement,
    app = document.querySelector("#app"),
    size = parseFloat(HTML.style.fontsize);
  if (size > 75) {
    HTML.style.fontsize = "75px";
    app.style.width = "750px";
    return;
  }
  app.style.width = "100%";
};
