var refs={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},colorChangeId=null;function startChanges(){colorChangeId=setInterval((function(){return refs.body.style.backgroundColor=getRandomHexColor()}),1e3),refs.btnStart.disabled=!0}function stopChanges(){clearInterval(colorChangeId),refs.btnStart.disabled=!1}function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}refs.btnStart.addEventListener("click",startChanges),refs.btnStop.addEventListener("click",stopChanges);
//# sourceMappingURL=01-color-switcher.5c167a59.js.map