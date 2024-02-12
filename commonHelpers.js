import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as v,i as y}from"./assets/vendor-77e16229.js";const h=document.querySelector(".timer-box");let b=Date.now(),s;function F(){return`<input type="text" id="datetime-picker" placeholder="Оберіть дату та час"/>
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>`}h.innerHTML=F();const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s<b?y.show({iconUrl:"../img/Waring.png",message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(t.disabled=!1,t.style.background="#4E75FF",t.style.color="#FFF")}};v("#datetime-picker",g);const t=document.querySelector("button");t.disabled=!0;let a,i;t.addEventListener("click",()=>{t.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898",a=s-Date.now(),d(c(a)),i=setInterval(()=>{a-=1e3,d(c(a)),S(a)},1e3)});function S(e){e<=1e3&&clearInterval(i)}function c(e){const u=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:m,minutes:p,seconds:f}}const C=document.querySelector(".value[ data-days]"),k=document.querySelector(".value[ data-hours]"),M=document.querySelector(".value[ data-minutes]"),q=document.querySelector(".value[ data-seconds]");function n(e){return e.toString().padStart(2,"0")}function d({days:e,hours:o,minutes:r,seconds:l}){C.textContent=`${n(e)}`,k.textContent=`${n(o)}`,M.textContent=`${n(r)}`,q.textContent=`${n(l)}`}
//# sourceMappingURL=commonHelpers.js.map
