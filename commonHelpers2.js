import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const m="../img/bi_check2-circle.png",c="../img/bi_x-octagon.png",t=document.querySelector(".form");function d(){return`
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

  <button type="submit">Create notification</button>`}t.innerHTML=d();const f=document.querySelector("label > input");let l;f.addEventListener("input",i=>{l=i.currentTarget.value});t.addEventListener("submit",i=>{i.preventDefault();const r=t.elements.state.value;function n(e,a){return new Promise((s,u)=>{setTimeout(()=>{a==="fulfilled"?s(e):u(e)},e)})}n(l,r).then(e=>{o.show({image:m,title:"OK",titleColor:"#fff",message:`Fulfilled promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{o.show({image:c,title:"Error",titleColor:"#fff",message:`Rejected promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight"})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
