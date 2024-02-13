import{i as m}from"./assets/bi_x-octagon-1f4aacaa.js";import{i as o}from"./assets/vendor-77e16229.js";const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgB3VVtccMwDFUYhMHMYIUQBiuEMFgYJEwSBtsQdAx6Q+AyaBlo8vo8+3z+3PqnfXfvcrGkJymxZaJ7R1dyYOZeHqPwWaiwfBF+CD+7rjvRXyDCSriygxYewLO3vqKIMH6XEx8gYriYZIkCNiRWgW1G8l1MfA/jMSZcgie+UKIqDfY3FYfDCgdFjagRV/anUSOK4nAaw+qzO6FFHI5vZtf44gic/y0O54NhsLakkqTE5f1VOFUlSCXJVZ7SMYafQ0Px7n6TlD4LXw/ne8wwIfCpkCQnbnfiGDP2uWAvyZSxr+FODB02tKioEVxzjuBkEpg5VD0q0L3myOCLOQ+opOzsijoiZk814OtE1bZlTo/rmd1YH6gF7Oa9xZndhaO99TXXac2VqeQxCF+E9r+chF/CTa7MCz00vgGTokbYR7IkrwAAAABJRU5ErkJggg==",t=document.querySelector(".form");function f(){return`
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

  <button type="submit">Create notification</button>`}t.innerHTML=f();const g=document.querySelector("label > input");let r;g.addEventListener("input",i=>{r=i.currentTarget.value});t.addEventListener("submit",i=>{i.preventDefault();const a=t.elements.state.value;function l(e,n){return new Promise((A,s)=>{setTimeout(()=>{n==="fulfilled"?A(e):s(e)},e)})}l(r,a).then(e=>{o.show({image:u,title:"OK",titleColor:"#fff",message:`Fulfilled promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{o.show({image:m,imageWidth:50,title:"Error",titleColor:"#fff",message:`Rejected promise in ${e} ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight"})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
