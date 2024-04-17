import{r,j as l,a as e,L as s}from"./index.8d209275.js";import{H as m}from"./HomeBredCurbs.21086e30.js";import{I as d,M as p}from"./index.0514ba4e.js";import"./index.esm.f6a38425.js";import"./iconBase.3b0c2950.js";const v=()=>{r.exports.useState({building:"",scope:"",startDate:"",lastDate:"",eoiNo:"",remark:""});const[o,i]=r.exports.useState("Client"),[c,h]=r.exports.useState({Contractor:["H Hydra","H Pocklain + JCB","H Towercrane","H Tractor","L BBM Plaster","L Carpentry Works","L Corecutting","L Demolition","L Department Supply","L Earthwork","L Electrical","L Fabrication","L Firefighting","L Glass Works","L Gypsum","L Interior","L Painting","L Piling","L Plumbing","L RCC","L Rebarring","L Rockanchoring","L Structural Steel","L Swimming Pool","L Tiling Works","L Tremix","L Waterproofing","L+M BBM Plaster","L+M Carpentry Works","L+M Electrical-LT","L+M Fabrication","L+M Ferrocrete","L+M FireFighting","L+M Glass Works","L+M Gypsum","L+M HVAC","L+M Hardscape","L+M Interior","L+M Lock N Key","L+M MEP","L+M Painting","L+M Plumbing","L+M RCC","L+M RoadWorks","L+M Shell and Core","L+M Solar","L+M Structural Steel","L+M Tiling Works","L+M Waterproofing","Other","Surveyor"]});return l("div",{children:[e(m,{title:"Create EOI "}),l("div",{className:"flex items-center text-slate-400 ",children:[l(s,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:()=>{window.history.back()},children:[e(d,{className:"text-xl font-semibold"}),"Back"]}),e("span",{className:"mx-2",children:" / "}),l(s,{to:"/dashboard",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[e(p,{className:"text-lg font-semibold"}),"Home"]})]}),e("div",{className:"row mt-4",children:e("form",{children:l("div",{className:"row",children:[l("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputEmail1",class:"form-label",children:["Select Contractor Bank"," "]}),l("select",{class:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"expertiseId",children:[e("option",{value:"",className:"text-sm ",selected:!0,disabled:!0,children:"All Contractors"}),e("option",{value:"option1",className:"text-sm ",children:"My Contractors"})]})]}),l("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputEmail1",class:"form-label",children:["Select Project"," "]}),l("select",{class:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",children:[e("option",{value:"",className:"text-sm ",selected:!0,disabled:!0,children:"Vishwaganga"}),e("option",{value:"option1",className:"text-sm ",children:"Wondervilla"}),e("option",{value:"option2",className:"text-sm ",children:"Konark"})]})]}),l("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputEmail1",class:"form-label",children:["Select Building"," "]}),l("select",{class:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",children:[e("option",{value:"",className:"text-sm ",selected:!0,disabled:!0,children:"A"}),e("option",{value:"option1",className:"text-sm ",children:"B"}),e("option",{value:"option1",className:"text-sm ",children:"C"})]})]}),l("div",{className:"mb-3 col-lg-6",children:[l("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Select Scope"," "]}),e("select",{className:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:o,onChange:a=>i(a.target.value),children:Object.entries(c).map(([a,n])=>e("optgroup",{label:a,children:n.map(t=>e("option",{value:t,children:t},t))},a))})]}),l("div",{class:"mb-3 col-lg-6",children:[e("label",{for:"exampleInputPassword1",class:"form-label",children:"Probable Start Date"}),e("input",{type:"date",class:"form-control",id:"exampleInputPassword1",placeholder:" "})]}),l("div",{class:"mb-3 col-lg-6",children:[e("label",{for:"exampleInputPassword1",class:"form-label",children:"Last Day of Application"}),e("input",{type:"date",class:"form-control",id:"exampleInputPassword1",placeholder:" "})]}),l("div",{class:"mb-3 col-lg-6",children:[e("label",{for:"exampleInputEmail1",class:"form-label",children:"Approximate EOI Value"}),l("div",{class:"input-group",children:[e("span",{class:"input-group-text",children:"\u20B9"}),e("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:""})]})]}),l("div",{class:"mb-3 col-lg-12",children:[e("label",{for:"exampleInputEmail1",class:"form-label",children:"Remark"}),e("textarea",{class:"form-control",placeholder:"",id:"floatingTextarea2"})]}),l("div",{class:"row ",children:[e("div",{class:"col-lg-6 mt-2 sm:mt-0",children:e("button",{type:"submit",class:"btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100",children:"Save As Draft"})}),e("div",{class:"col-lg-6 mt-2 sm:mt-0",children:e("button",{type:"submit",class:"btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100",children:"Float EOI"})})]})]})})})]})};export{v as default};
