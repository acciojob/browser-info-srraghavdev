//your JS code here. If required.
const nav= document.getElementsByClassName("browser-info")[0]
console.log(nav)
nav.innerText=`You are using ${window.navigator.appName} version ${window.navigator.appVersion}`