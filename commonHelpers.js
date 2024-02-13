import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as v,i as y}from"./assets/vendor-77e16229.js";const h="../img/bi_x-octagon.png",b=document.querySelector(".timer-box");let F=Date.now(),s;function g(){return`<input type="text" id="datetime-picker" placeholder="Оберіть дату та час"/>
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
</div>`}b.innerHTML=g();const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<F?y.show({iconUrl:h,message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(e.disabled=!1,e.style.background="#4E75FF",e.style.color="#FFF")}};v("#datetime-picker",S);const e=document.querySelector(".startBtn");e.disabled=!0;let a,i;e.addEventListener("click",()=>{e.disabled=!0,e.style.background="#CFCFCF",e.style.color="#989898",a=s-Date.now(),d(c(a)),i=setInterval(()=>{a-=1e3,d(c(a)),C(a)},1e3)});function C(t){t<=1e3&&clearInterval(i)}function c(t){const u=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:m,minutes:p,seconds:f}}const k=document.querySelector(".value[ data-days]"),x=document.querySelector(".value[ data-hours]"),M=document.querySelector(".value[ data-minutes]"),q=document.querySelector(".value[ data-seconds]");function n(t){return t.toString().padStart(2,"0")}function d({days:t,hours:o,minutes:r,seconds:l}){k.textContent=`${n(t)}`,x.textContent=`${n(o)}`,M.textContent=`${n(r)}`,q.textContent=`${n(l)}`}
//# sourceMappingURL=commonHelpers.js.map
