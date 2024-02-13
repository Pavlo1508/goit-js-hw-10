import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as v,i as y}from"./assets/vendor-77e16229.js";const h=document.querySelector(".timer-box");let b=Date.now(),n;function F(){return`<input type="text" id="datetime-picker" placeholder="Оберіть дату та час"/>
<button class="startBtn" type="button" data-start>Start</button>

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
</div>`}h.innerHTML=F();const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0],n<b?y.show({iconUrl:"./img/bi_x-octagon.png",message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(e.disabled=!1,e.style.background="#4E75FF",e.style.color="#FFF")}};v("#datetime-picker",g);const e=document.querySelector(".startBtn");e.disabled=!0;let a,i;e.addEventListener("click",()=>{e.disabled=!0,e.style.background="#CFCFCF",e.style.color="#989898",a=n-Date.now(),d(c(a)),i=setInterval(()=>{a-=1e3,d(c(a)),S(a)},1e3)});function S(t){t<=1e3&&clearInterval(i)}function c(t){const u=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:m,minutes:p,seconds:f}}const C=document.querySelector(".value[ data-days]"),k=document.querySelector(".value[ data-hours]"),x=document.querySelector(".value[ data-minutes]"),M=document.querySelector(".value[ data-seconds]");function s(t){return t.toString().padStart(2,"0")}function d({days:t,hours:o,minutes:r,seconds:l}){C.textContent=`${s(t)}`,k.textContent=`${s(o)}`,x.textContent=`${s(r)}`,M.textContent=`${s(l)}`}
//# sourceMappingURL=commonHelpers.js.map
