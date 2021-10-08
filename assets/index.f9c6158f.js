var E=Object.defineProperty;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(n,o,i)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,U=(n,o)=>{for(var i in o||(o={}))M.call(o,i)&&F(n,i,o[i]);if(D)for(var i of D(o))z.call(o,i)&&F(n,i,o[i]);return n};var G=(n,o)=>{var i={};for(var t in n)M.call(n,t)&&o.indexOf(t)<0&&(i[t]=n[t]);if(n!=null&&D)for(var t of D(n))o.indexOf(t)<0&&z.call(n,t)&&(i[t]=n[t]);return i};import{T as X,a as K,L as W,b as Q,c as Y,d as Z,r as $,e as ee,f as te,D as oe,g as se,h as ie,i as m,w as H,u as ne,j as f,o as l,k as r,l as v,m as g,n as e,p as h,t as p,q as w,v as le,F as L,s as O,x as I,y as A,z as S,A as ae,B as re,C as B,E as ce,G as de,H as ue}from"./vendor.d9cb49c9.js";const ve=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const c of d)if(c.type==="childList")for(const _ of c.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&t(_)}).observe(document,{childList:!0,subtree:!0});function i(d){const c={};return d.integrity&&(c.integrity=d.integrity),d.referrerpolicy&&(c.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?c.credentials="include":d.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(d){if(d.ep)return;d.ep=!0;const c=i(d);fetch(d.href,c)}};ve();var fe=(n,o)=>{for(const[i,t]of o)n[i]=t;return n};const pe=[{label:"White",value:"bg-white"},{label:"Light Gray",value:"bg-gray-100"},{label:"Heavy Gray",value:"bg-gray-300"},{label:"Light Green",value:"bg-green-100"},{label:"Heavy Green",value:"bg-green-300"},{label:"Light Red",value:"bg-red-100"},{label:"Heavy Red",value:"bg-red-300"}],be={components:{TransitionRoot:X,TransitionChild:K,Listbox:W,ListboxButton:Q,ListboxOptions:Y,ListboxOption:Z,CheckIcon:$,SelectorIcon:ee,XIcon:te,Dialog:oe,DialogOverlay:se,DialogTitle:ie},setup(){const n=m(!1),o=m(),i=m(null),t=m(!0);H(t,(a,b)=>{i.value&&(o.value.techniques.find(R=>R.id===i.value).applicable=a)});const d=m("bg-white");H(d,(a,b)=>{i.value&&(o.value.techniques.find(R=>R.id===i.value).color=a)});const c=m(null),_=a=>{y.value=!0,i.value=a,c.value=o.value.techniques.find(b=>b.id===a),t.value=c.value.applicable,d.value=c.value.color},y=m(!1),V=()=>{const a=o.value.techniques.find(b=>b.id===i.value);a.comment=c.value.comment,a.intruder=parseInt(c.value.intruder),a.protect=parseInt(c.value.protect),a.detect=parseInt(c.value.detect)},x=m(!1),k=()=>{x.value=!1},T=()=>{x.value=!0};let q;const u=ne({onDrop:(a,b)=>{q=a[0],C()}}),{getRootProps:j,getInputProps:N}=u,P=G(u,["getRootProps","getInputProps"]),C=()=>{let a=new FileReader;a.onload=b=>o.value=JSON.parse(b.target.result),a.onerror=b=>console.log(b),a.readAsText(q),k()};return U({isActionsDialogVisible:n,matrix:o,activeTechiqueId:i,activeTechique:c,setActiveTechique:_,saveTechnique:V,isTechniqueDialogVisible:y,activeTechniqueColor:d,colors:pe,activeTechniqueApplicability:t,isOpen:x,closeModal:k,openModal:T,loadJSON:C,saveJSON:()=>{let a=new Blob([JSON.stringify(o.value)],{type:"application/json;charset=utf-8"});ae.exports.saveAs(a,"matrix.json")},getRootProps:j,getInputProps:N},P)}},ge={class:"fixed inset-0 z-10 overflow-y-auto"},he={class:"min-h-screen px-4 text-center"},me=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),_e={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},ye=de(" Load JSON-data "),xe=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Choose json-file to load your data to application. ")],-1),we={class:"h-32 bg-gray-100 border rounded-lg my-4 flex items-center justify-center text-xs"},ke={key:0},Te={key:1,class:"cursor-pointer"},qe={class:"mt-4"},Ce={key:0,class:"absolute bottom-10 right-4 h-96 w-96 border bg-white flex flex-col z-10"},De={class:"h-10 bg-gray-100 flex items-center justify-end px-1"},Le=e("div",{class:"flex-1 overflow-auto"},"Actions",-1),Oe={key:1,class:"absolute bg-gray-50 w-96 border-l inset-y-0 right-0 shadow-lg overflow-auto z-10 opacity-100"},Ie={class:"h-16 w-full bg-gray-100 flex justify-between items-center pr-1 pl-4"},Ae={key:0,class:"p-4 relative"},Se={class:"my-2 font-bold text-lg"},Ve={class:"block"},je={class:"mt-2"},Ne={class:"inline-flex items-center"},Pe=e("span",{class:"ml-2"},"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E",-1),Re={class:"relative mt-1"},Be={class:"block truncate"},Je={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},Me={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},ze={class:"my-4 space-y-2"},Fe=e("header",{class:"text-xs font-bold uppercase text-gray-400"},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",-1),Ue={class:"text-sm"},Ge={key:0,class:"my-4 space-y-2"},He=e("header",{class:"text-xs font-bold uppercase text-gray-400"},"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",-1),Ee={class:"text-sm list-disc ml-4"},Xe={class:"my-4 space-y-2"},Ke={class:"block"},We=e("span",{class:"text-gray-700"},"Comments",-1),Qe={class:"my-4 space-y-2"},Ye={class:"block"},Ze=e("span",{class:"text-gray-700"},"\u041D\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u044C",-1),$e={class:"my-4 space-y-2"},et={class:"block"},tt=e("span",{class:"text-gray-700"},"\u0417\u0430\u0449\u0438\u0442\u0430",-1),ot={class:"my-4 space-y-2"},st={class:"block"},it=e("span",{class:"text-gray-700"},"\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u0435",-1),nt={class:"flex flex-col w-screen h-screen"},lt={class:"flex-1 overflow-auto p-4 pb-20"},at={key:0,class:"flex space-x-1 text-xs"},rt={class:"h-16"},ct={class:"font-bold"},dt={class:"pr-8"},ut={class:"space-y-1 mt-1"},vt=["onClick"],ft={class:"flex justify-between"},pt={class:""},bt={class:"flex items-center space-x-1"},gt={key:0},ht={key:1},mt={key:2},_t={key:1,class:"flex items-center justify-center h-full"},yt={class:"flex space-x-8"},xt={class:"w-72 border rounded-lg p-8"},wt=e("div",{class:"font-bold text-lg"},"Load your matrix",-1),kt={class:"h-32 bg-gray-100 border rounded-lg my-4 p-8 flex items-center justify-center text-xs"},Tt={key:0},qt={key:1,class:"cursor-pointer"},Ct=e("div",{class:"w-72 border rounded-lg p-8"},[e("div",{class:"font-bold text-lg"},"Use template...")],-1),Dt={class:"h-10 bg-gray-50 border-t flex justify-between items-center text-xs px-4"},Lt=e("div",{class:"font-semibold"},"Sinfores FSTEK Navigator",-1),Ot={class:"flex items-center space-x-2"};function It(n,o,i,t,d,c){const _=f("DialogOverlay"),y=f("TransitionChild"),V=f("DialogTitle"),x=f("Dialog"),k=f("TransitionRoot"),T=f("XIcon"),q=f("SelectorIcon"),J=f("ListboxButton"),j=f("CheckIcon"),N=f("ListboxOption"),P=f("ListboxOptions"),C=f("Listbox");return l(),r("div",null,[v(k,{appear:"",show:t.isOpen,as:"template"},{default:g(()=>[v(x,{as:"div",onClose:t.closeModal},{default:g(()=>[e("div",ge,[e("div",he,[v(y,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:g(()=>[v(_,{class:"fixed inset-0"})]),_:1}),me,v(y,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:g(()=>[e("div",_e,[v(V,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:g(()=>[ye]),_:1}),xe,e("div",we,[e("div",A(S(t.getRootProps())),[e("input",A(S(t.getInputProps())),null,16),n.isDragActive?(l(),r("p",ke,"Drop the files here ...")):(l(),r("p",Te,"Drag 'n' drop some files here, or click to select files"))],16)]),e("div",qe,[e("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:o[0]||(o[0]=s=>t.loadJSON())}," Load it! ")])])]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),t.isActionsDialogVisible?(l(),r("div",Ce,[e("div",De,[e("div",{onClick:o[1]||(o[1]=s=>t.isActionsDialogVisible=!1),class:"flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-200 cursor-pointer"},[v(T,{class:"w-5 h-5","aria-hidden":"true"})])]),Le])):h("",!0),t.isTechniqueDialogVisible?(l(),r("div",Oe,[e("div",Ie,[e("div",null,[e("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:o[2]||(o[2]=s=>t.saveTechnique())}," Save it! ")]),e("div",{onClick:o[3]||(o[3]=s=>t.isTechniqueDialogVisible=!1),class:"cursor-pointer h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-200"},[v(T,{class:"w-5 h-5","aria-hidden":"true"})])]),t.activeTechiqueId?(l(),r("div",Ae,[e("div",Se,p(t.activeTechiqueId),1),e("div",Ve,[e("div",je,[e("div",null,[e("label",Ne,[w(e("input",{type:"checkbox",class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":o[4]||(o[4]=s=>t.activeTechniqueApplicability=s)},null,512),[[le,t.activeTechniqueApplicability]]),Pe])])])]),v(C,{modelValue:t.activeTechniqueColor,"onUpdate:modelValue":o[5]||(o[5]=s=>t.activeTechniqueColor=s)},{default:g(()=>[e("div",Re,[v(J,{class:"relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"},{default:g(()=>[e("span",Be,p(t.colors.find(s=>s.value===t.activeTechniqueColor).label),1),e("span",Je,[v(q,{class:"w-5 h-5 text-gray-400","aria-hidden":"true"})])]),_:1}),v(ce,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:g(()=>[v(P,{class:"absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:g(()=>[(l(!0),r(L,null,O(t.colors,s=>(l(),re(N,{key:s.value,value:s.value,as:"template"},{default:g(({active:u,selected:a})=>[e("li",{class:B([u?"text-amber-900 bg-amber-100":"text-gray-900","cursor-default select-none relative py-2 pl-10 pr-4",s.value])},[e("span",{class:B([a?"font-medium":"font-normal","block truncate"])},p(s.label),3),a?(l(),r("span",Me,[v(j,{class:"w-5 h-5","aria-hidden":"true"})])):h("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),e("section",ze,[Fe,e("div",Ue,p(t.activeTechique.name),1)]),t.activeTechique.examples.length>0?(l(),r("section",Ge,[He,e("ul",Ee,[(l(!0),r(L,null,O(t.activeTechique.examples,s=>(l(),r("li",{key:s.id},p(s.content),1))),128))])])):h("",!0),e("section",Xe,[e("label",Ke,[We,w(e("textarea",{class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",rows:"3","onUpdate:modelValue":o[6]||(o[6]=s=>t.activeTechique.comment=s)},null,512),[[I,t.activeTechique.comment]])])]),e("section",Qe,[e("label",Ye,[Ze,w(e("input",{type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"","onUpdate:modelValue":o[7]||(o[7]=s=>t.activeTechique.intruder=s)},null,512),[[I,t.activeTechique.intruder]])])]),e("section",$e,[e("label",et,[tt,w(e("input",{type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"","onUpdate:modelValue":o[8]||(o[8]=s=>t.activeTechique.protect=s)},null,512),[[I,t.activeTechique.protect]])])]),e("section",ot,[e("label",st,[it,w(e("input",{type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"","onUpdate:modelValue":o[9]||(o[9]=s=>t.activeTechique.detect=s)},null,512),[[I,t.activeTechique.detect]])])])])):h("",!0)])):h("",!0),e("div",nt,[e("div",lt,[t.matrix?(l(),r("div",at,[(l(!0),r(L,null,O(t.matrix.tactics,s=>(l(),r("div",{key:s.id,class:"w-40"},[e("div",null,[e("header",rt,[e("div",ct,p(s.id),1),e("div",dt,p(s.short_name),1)]),e("div",ut,[(l(!0),r(L,null,O(t.matrix.techniques,u=>(l(),r("div",{key:u.id},[s.techniques.includes(u.id)?(l(),r("div",{key:0,class:B(["border p-2 cursor-pointer hover:bg-gray-100 h-8",[u.color,u.id===t.activeTechiqueId?"border-gray-900":"",u.applicable?"":"opacity-10"]]),onClick:a=>t.setActiveTechique(u.id)},[e("div",ft,[e("div",pt,p(u.id),1),e("div",bt,[parseInt(u.intruder)!==0?(l(),r("div",gt,"H"+p(u.intruder),1)):h("",!0),parseInt(u.protect)!==0?(l(),r("div",ht,"P"+p(u.protect),1)):h("",!0),parseInt(u.detect)!==0?(l(),r("div",mt,"D"+p(u.detect),1)):h("",!0)])])],10,vt)):h("",!0)]))),128))])])]))),128))])):(l(),r("div",_t,[e("div",yt,[e("div",xt,[wt,e("div",kt,[e("div",A(S(t.getRootProps())),[e("input",A(S(t.getInputProps())),null,16),n.isDragActive?(l(),r("p",Tt,"Drop the files here ...")):(l(),r("p",qt,"Drag 'n' drop some files here, or click to select files"))],16)])]),Ct])]))]),e("div",Dt,[Lt,e("div",Ot,[e("div",{class:"py-1 px-2 rounded hover:bg-gray-200 cursor-pointer font-semibold",type:"button",onClick:o[10]||(o[10]=s=>t.isActionsDialogVisible=!0)},"Actions"),e("div",{class:"py-1 px-2 rounded hover:bg-gray-200 cursor-pointer font-semibold",type:"button",onClick:o[11]||(o[11]=(...s)=>t.openModal&&t.openModal(...s))},"Load"),e("div",{class:"py-1 px-2 rounded hover:bg-gray-200 cursor-pointer font-semibold",type:"button",onClick:o[12]||(o[12]=s=>t.saveJSON())},"Save")])])])])}var At=fe(be,[["render",It]]);ue(At).mount("#app");
