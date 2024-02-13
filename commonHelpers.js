import{i as v}from"./assets/bi_x-octagon-1f4aacaa.js";import{f as y,i as h}from"./assets/vendor-77e16229.js";const b=document.querySelector(".timer-box");let F=Date.now(),n;function S(){return`<input type="text" id="datetime-picker" placeholder="Оберіть дату та час"/>
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
</div>`}b.innerHTML=S();const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],n<F?h.show({icon:v,message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(t.disabled=!1,t.style.background="#4E75FF",t.style.color="#FFF")}};y("#datetime-picker",C);const t=document.querySelector(".startBtn");t.disabled=!0;let a,i;t.addEventListener("click",()=>{t.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898",a=n-Date.now(),d(c(a)),i=setInterval(()=>{a-=1e3,d(c(a)),g(a)},1e3)});function g(e){e<=1e3&&clearInterval(i)}function c(e){const u=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:m,minutes:p,seconds:f}}const k=document.querySelector(".value[ data-days]"),M=document.querySelector(".value[ data-hours]"),q=document.querySelector(".value[ data-minutes]"),x=document.querySelector(".value[ data-seconds]");function s(e){return e.toString().padStart(2,"0")}function d({days:e,hours:o,minutes:r,seconds:l}){k.textContent=`${s(e)}`,M.textContent=`${s(o)}`,q.textContent=`${s(r)}`,x.textContent=`${s(l)}`}
//# sourceMappingURL=commonHelpers.js.map
