!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.disabled=!0,t.addEventListener("click",(function(){n.style.backgroundColor=o(),intervalID=setInterval((function(){n.style.backgroundColor=o()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(intervalID)}))}();
//# sourceMappingURL=01-color-switcher.9d8aac09.js.map
