import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");function m(){return`
  <label class="delay-label">
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>`}t.innerHTML=m();const c=document.querySelector("label > input");let o;c.addEventListener("input",l=>{o=l.currentTarget.value});t.addEventListener("submit",l=>{l.preventDefault();const r=t.elements.state.value;function n(e,a){return new Promise((s,u)=>{setTimeout(()=>{a==="fulfilled"?s(e):u(e)},e)})}n(o,r).then(e=>{i.show({iconUrl:"../img/bi_check2-circle.png",title:"OK",titleColor:"#fff",message:`Fulfilled promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{i.show({iconUrl:"../img/bi_x-octagon.png",title:"Error",titleColor:"#fff",message:`Rejected promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight"})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
