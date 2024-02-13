import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const c="../img/bi_check2-circle.png",m="../img/bi_x-octagon.png",t=document.querySelector(".form");function d(){return`
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

  <button type="submit">Create notification</button>`}t.innerHTML=d();const f=document.querySelector("label > input");let l;f.addEventListener("input",o=>{l=o.currentTarget.value});t.addEventListener("submit",o=>{o.preventDefault();const n=t.elements.state.value;function r(e,a){return new Promise((s,u)=>{setTimeout(()=>{a==="fulfilled"?s(e):u(e)},e)})}r(l,n).then(e=>{i.show({icon:c,title:"OK",titleColor:"#fff",message:`Fulfilled promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{i.show({icon:m,title:"Error",titleColor:"#fff",message:`Rejected promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight"})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
