(function(){"use strict";var t={3661:function(t,e,l){var o=l(5130),a=l(1387),n=l(6768),r=l(4232);const u=t=>((0,n.Qi)("data-v-54336193"),t=t(),(0,n.jt)(),t),i=u((()=>(0,n.Lk)("span",{class:"headline"},"Welcome Calculation app",-1))),s=u((()=>(0,n.Lk)("p",null,"All calculations are saved into db.",-1))),c=u((()=>(0,n.Lk)("p",null,"It is possible to see history of calculations next to calculator.",-1))),p=u((()=>(0,n.Lk)("span",{class:"headline"},"Tech stack",-1)));function d(t,e,l,o,a,u){const d=(0,n.g2)("v-card-title"),h=(0,n.g2)("v-card-text"),f=(0,n.g2)("v-card"),y=(0,n.g2)("v-col"),b=(0,n.g2)("v-row"),v=(0,n.g2)("v-list-item-content"),m=(0,n.g2)("v-list-item"),k=(0,n.g2)("v-list"),F=(0,n.g2)("v-container");return(0,n.uX)(),(0,n.Wv)(F,null,{default:(0,n.k6)((()=>[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(y,{cols:"12",md:"6"},{default:(0,n.k6)((()=>[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[i])),_:1}),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[s])),_:1}),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[c])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(y,{cols:"12",md:"4"},{default:(0,n.k6)((()=>[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[p])),_:1}),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.items,(t=>((0,n.uX)(),(0,n.Wv)(m,{key:t},{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,r.v_)(t),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var h={name:"HomePage",data(){return{items:["Vue 3","Vuetify 3","Axios",".Net Framework Core","Entity Famework Core"]}},methods:{}},f=l(1241);const y=(0,f.A)(h,[["render",d],["__scopeId","data-v-54336193"]]);var b=y;function v(t,e,l,o,a,u){const i=(0,n.g2)("v-text-field"),s=(0,n.g2)("v-card-title"),c=(0,n.g2)("v-btn"),p=(0,n.g2)("v-col"),d=(0,n.g2)("v-row"),h=(0,n.g2)("v-card-subtitle"),f=(0,n.g2)("v-card"),y=(0,n.g2)("v-data-table"),b=(0,n.g2)("v-container");return(0,n.uX)(),(0,n.Wv)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,{cols:"12",md:"6"},{default:(0,n.k6)((()=>[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{modelValue:a.display,"onUpdate:modelValue":e[0]||(e[0]=t=>a.display=t),readonly:"",outlined:"",dense:"",class:"text-right",variant:"outlined",label:"Display","hide-details":""},null,8,["modelValue"])])),_:1}),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.buttons,(t=>((0,n.uX)(),(0,n.Wv)(p,{key:t,cols:"3"},{default:(0,n.k6)((()=>[(0,n.bF)(c,{onClick:e=>u.appendToDisplay(t),block:"",color:t.color},{default:(0,n.k6)((()=>[(0,n.eW)((0,r.v_)(t.text),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1}),(0,n.bF)(c,{onClick:u.clearDisplay,block:"",color:"red"},{default:(0,n.k6)((()=>[(0,n.eW)(" C ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,n.bF)(p,{cols:"12",md:"6"},{default:(0,n.k6)((()=>[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.eW)("History")])),_:1}),(0,n.bF)(y,{items:a.history,headers:a.headers,dense:"","hide-default-footer":"",class:"elevation-1"},null,8,["items","headers"])])),_:1})])),_:1})])),_:1})])),_:1})}var m=l(4373);const k=m.A.create({baseURL:"https://localhost:7179/api",timeout:5e3,headers:{"Content-Type":"application/json"}});var F=k,g={name:"CalculatorPage",data(){return{display:"",history:[],input1:"",input2:"",operation:null,resultcalculated:!1,result:null,buttons:[{text:"7",color:"primary",type:"number"},{text:"8",color:"primary",type:"number"},{text:"9",color:"primary",type:"number"},{text:"/",color:"secondary",type:"operation"},{text:"4",color:"primary",type:"number"},{text:"5",color:"primary",type:"number"},{text:"6",color:"primary",type:"number"},{text:"*",color:"secondary",type:"operation"},{text:"1",color:"primary",type:"number"},{text:"2",color:"primary",type:"number"},{text:"3",color:"primary",type:"number"},{text:"-",color:"secondary",type:"operation"},{text:"0",color:"primary",type:"number"},{text:".",color:"primary",type:"number"},{text:"=",color:"secondary",type:"result"},{text:"+",color:"secondary",type:"operation"}],headers:[{text:"Kalkulace",value:"calculation"},{text:"Operation",value:"operation"}]}},computed:{},methods:{addFunc(){this.result=parseFloat(this.input1)+parseFloat(this.input2)},divideFunc(){this.result=parseFloat(this.input1)/parseFloat(this.input2)},multipleFunc(){this.result=parseFloat(this.input1)*parseFloat(this.input2)},minusFunc(){this.result=parseFloat(this.input1)-parseFloat(this.input2)},appendToDisplay(t){this.resultcalculated&&this.clearDisplay(),"result"===t.type?(this.resultcalculated=!0,this.calculateResult()):"operation"===t.type?(this.operation=t.text,this.display+=t.text.toString()):(null!=this.operation&&this.display.indexOf(this.operation)>0?this.input2+=t.text:this.input1+=t.text,this.display+=t.text.toString())},getHistory(){F.get("/home").then((t=>{console.log(t),this.history=t.data})).catch((t=>{console.error("Chyba p�i odes�l�n� po�adavku:",t)}))},clearDisplay(){this.input1="",this.input2="",this.operation=null,this.result=null,this.display="",this.resultcalculated=!1},calculateResult(){try{switch(this.operation){case"*":this.multipleFunc();break;case"/":this.divideFunc();break;case"+":this.addFunc();break;case"-":this.minusFunc();break;default:break}this.display=this.result,this.resultcalculated=!0;let t={message:this.display};F.post("/home/Error",t);let e={calculation:`${this.input1} ${this.operation} ${this.input2} = ${this.result}`,input1:this.input1.toString(),input2:this.input2.toString(),operation:this.operation.toString(),result:this.result.toString()};F.post("/home",e).then((t=>{console.log("Data odesl�na na server:",t.data),this.getHistory()})).catch((t=>{console.error("Chyba p�i odes�l�n� po�adavku:",t),F.post("/home/Error",t)}))}catch(t){this.display="Error"}}},mounted(){this.getHistory()}};const _=(0,f.A)(g,[["render",v],["__scopeId","data-v-7ffc01d4"]]);var x=_;const C=[{path:"/",component:b},{path:"/calculator",component:x}],w=(0,a.aE)({history:(0,a.LA)("/"),routes:C});var O=w,W=(l(5524),l(7768)),S=l(1920),j=l(5741);function E(t,e,l,o,a,r){const u=(0,n.g2)("router-link"),i=(0,n.g2)("v-col"),s=(0,n.g2)("v-row"),c=(0,n.g2)("router-view"),p=(0,n.g2)("v-container"),d=(0,n.g2)("v-app");return(0,n.uX)(),(0,n.Wv)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{cols:"12"},{default:(0,n.k6)((()=>[(0,n.Lk)("nav",null,[(0,n.bF)(u,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("Home")])),_:1}),(0,n.bF)(u,{to:"/calculator"},{default:(0,n.k6)((()=>[(0,n.eW)("Calculator")])),_:1})])])),_:1})])),_:1}),(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.bF)(i,{cols:"12"},{default:(0,n.k6)((()=>[(0,n.bF)(c)])),_:1})])),_:1})])),_:1})])),_:1})}var A={name:"App"};const T=(0,f.A)(A,[["render",E]]);var D=T;const L=(0,W.$N)({components:S,directives:j});(0,o.Ef)(D).use(L).use(O).mount("#app")}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,l),n.exports}l.m=t,function(){var t=[];l.O=function(e,o,a,n){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],n=t[c][2];for(var u=!0,i=0;i<o.length;i++)(!1&n||r>=n)&&Object.keys(l.O).every((function(t){return l.O[t](o[i])}))?o.splice(i--,1):(u=!1,n<r&&(r=n));if(u){t.splice(c--,1);var s=a();void 0!==s&&(e=s)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,a,n]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};l.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,r=o[0],u=o[1],i=o[2],s=0;if(r.some((function(e){return 0!==t[e]}))){for(a in u)l.o(u,a)&&(l.m[a]=u[a]);if(i)var c=i(l)}for(e&&e(o);s<r.length;s++)n=r[s],l.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return l.O(c)},o=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=l.O(void 0,[504],(function(){return l(3661)}));o=l.O(o)})();
//# sourceMappingURL=app.c24d64f8.js.map