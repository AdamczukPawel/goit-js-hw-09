!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.disabled=!0,t.addEventListener("click",(function(){n.style.backgroundColor=d(),o=setInterval((function(){n.style.backgroundColor=d()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.cfe64621.js.map
