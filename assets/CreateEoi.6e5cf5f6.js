import{b as V,r,j as s,a as l,L as g,Q as m}from"./index.8d209275.js";import{H as w}from"./HomeBredCurbs.56396cea.js";import{I as B,M as D}from"./index.0514ba4e.js";import{a as n}from"./axios.74c9240f.js";import"./index.esm.f6a38425.js";import"./iconBase.3b0c2950.js";const $=()=>{const{id:p}=V();console.log(p),r.exports.useEffect(()=>{n.get(`https://constrobackend17-4.onrender.com/api/get_all_tenders/${p}`).then(e=>{console.log(e.data.Result);const t=e.data.Result;i({...a,developer:o==null?void 0:o._id,developerName:o==null?void 0:o.firmName,projectId:t.projectId,projectName:t.projectName,cityId:t.cityId,cityName:t.cityName,building:t.building,scope:t.scope,scopeName:t.scopeName,isOpen:!0,isLive:t.isLive,startDate:t.startDate,lastDate:t.lastDate,maxContractValue:t.maxContractValue,remark:t.remark})}).catch(e=>{console.log(e)})},[p]),r.exports.useState([]);const[d,x]=r.exports.useState([]),[O,f]=r.exports.useState(""),[v,N]=r.exports.useState([]),[A,I]=r.exports.useState(""),[H,S]=r.exports.useState(""),[h,y]=r.exports.useState([]);r.exports.useState("");const C=localStorage.getItem("profile"),o=JSON.parse(C),[a,i]=r.exports.useState({developer:o==null?void 0:o._id,developerName:o==null?void 0:o.firmName,projectId:"",projectName:"",cityId:"",cityName:"",building:"",scope:"",scopeName:"",isOpen:!0,isLive:"",startDate:"",lastDate:"",maxContractValue:"",remark:"",isActive:!0});r.exports.useEffect(()=>{n.get(`https://constrobackend17-4.onrender.com/api/getProjectByReceiver/${o==null?void 0:o._id}`).then(e=>{console.log(100,e.data.Result),x(e.data.Result)}).catch(e=>{console.log(e)}),n.get("https://constrobackend17-4.onrender.com/api/get_all_expertise").then(e=>{y(e.data.Result)}).catch(e=>{console.log(e)})},[]);const b=e=>{e.preventDefault(),a.isLive=!0,console.log(89,a),a&&n.post("https://constrobackend17-4.onrender.com/api/post_tender",a).then(t=>{t.data,console.log(95,t.data),m.success("Created EOI Successfully.")}).catch(t=>{console.error("API Error:",t.message),m.error("Submission failed. Please try again.")})},E=e=>{e.preventDefault(),a.isLive=!1,console.log(89,a),a&&n.post("https://constrobackend17-4.onrender.com/api/post_tender",a).then(t=>{t.data,console.log(95,t.data),m.success("Created EOI Successfully.")}).catch(t=>{console.error("API Error:",t.message),m.error("Submission failed. Please try again.")})},j=()=>{window.history.back()},k=e=>{const t=e.target.value;console.log("Selected projects id:",t);const c=d.filter(u=>u._id===t);console.log("Selected projects:",c),f(c[0].projectName),N(c),i({...a,projectName:c[0].projectName,projectId:t,cityId:c[0].city._id,cityName:c[0].city.city})},P=e=>{const t=e.target.value,c=e.target.name;I(t),console.log("Selected building:",t),i({...a,[c]:t})},_=e=>{const t=e.target.value;console.log("Selected scope id:",t);const c=h.filter(u=>u._id===t);console.log("Selected scope:",c[0].expertise),S(c[0].expertise),i({...a,scopeName:c[0].expertise,scope:t})};return s("div",{children:[l(w,{title:"Create EOI "}),s("div",{className:"flex items-center text-slate-400 ",children:[s(g,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:j,children:[l(B,{className:"text-xl font-semibold"}),"Back"]}),l("span",{className:"mx-2",children:" / "}),s(g,{to:"/dashboard",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[l(D,{className:"text-lg font-semibold"}),"Home"]})]}),l("div",{className:"row mt-4",children:l("form",{onSubmit:b,children:s("div",{className:"row",children:[s("div",{class:"mb-3 col-lg-6",children:[s("label",{for:"exampleInputEmail1",class:"form-label",children:["Contractor Type"," "]}),s("select",{class:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"developer",children:[l("option",{value:"",className:"text-sm ",selected:!0,disabled:!0,children:"Select Contractor  Type"}),l("option",{value:"All Contractors",className:"text-sm ",children:"All Contractors"}),l("option",{value:"My Contractors",className:"text-sm ",children:"My Contractors"})]})]}),s("div",{class:"mb-3 col-lg-6",children:[s("label",{for:"exampleInputEmail1",class:"form-label",children:["Project"," "]}),s("select",{className:"form-select text-sm",id:"exampleInputEmail1",name:"projectName","aria-describedby":"emailHelp",value:a.projectName,defaultValue:a.projectName,onChange:e=>k(e),children:[l("option",{value:"",className:"text-sm",disabled:!0,children:"Select Project"}),d==null?void 0:d.map(e=>l("option",{value:e._id,className:"text-sm",children:e.projectName},e._id))]})]}),s("div",{class:"mb-3 col-lg-6",children:[s("label",{for:"exampleInputEmail1",class:"form-label",children:["Building"," "]}),s("select",{className:"form-select text-sm",id:"exampleInputEmail1",name:"building","aria-describedby":"emailHelp",value:a.building,defaultValue:a.building,onChange:e=>P(e),children:[l("option",{value:"",className:"text-sm",disabled:!0,children:"Select Building"}),v.map(e=>l("option",{value:e.id,className:"text-sm",children:e.buildings},e.id))]})]}),s("div",{className:"mb-3 col-lg-6",children:[s("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Scope"," "]}),s("select",{className:"form-select text-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"scope",value:a.scopeName,defaultValue:a.scopeName,onChange:e=>_(e),children:[l("option",{value:"",className:"text-sm ",disabled:!0,children:"Select Scope"}),h.map(e=>l("option",{value:e._id,className:"text-sm",children:e.expertise},e._id))]})]}),s("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputPassword1",class:"form-label",children:"Probable Start Date"}),l("input",{type:"date",class:"form-control",id:"exampleInputPassword1",name:"startDate",value:a.startDate,defaultValue:a.startDate,onChange:e=>{i({...a,startDate:e.target.value})}})]}),s("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputPassword1",class:"form-label",children:"Last Day of Application"}),l("input",{type:"date",class:"form-control",id:"exampleInputPassword1",name:"lastDate",value:a.lastDate,defaultValue:a.lastDate,onChange:e=>{i({...a,lastDate:e.target.value})}})]}),s("div",{class:"mb-3 col-lg-6",children:[l("label",{for:"exampleInputEmail1",class:"form-label",children:"Approximate EOI Value"}),s("div",{class:"input-group",children:[l("span",{class:"input-group-text",children:"\u20B9"}),l("input",{type:"number",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"maxContractValue",value:a.maxContractValue,defaultValue:a.maxContractValue,onChange:e=>{i({...a,maxContractValue:e.target.value})}})]})]}),s("div",{class:"mb-3 col-lg-12",children:[l("label",{for:"exampleInputEmail1",class:"form-label",children:"Remark"}),l("textarea",{class:"form-control",placeholder:"",id:"floatingTextarea2",name:"remark",value:a.remark,defaultValue:a.remark,onChange:e=>{i({...a,remark:e.target.value})}})]}),s("div",{class:"row ",children:[l("div",{class:"col-lg-6 mt-2 sm:mt-0",children:l("button",{type:"submit",class:"btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100",onClick:e=>E(e),children:"Save As Draft"})}),l("div",{class:"col-lg-6 mt-2 sm:mt-0",children:l("button",{type:"submit",class:"btn bg-[#00adee] hover:bg-[#6fcaeb] text-white w-100",onClick:e=>b(e),children:"Float EOI"})})]})]})})})]})};export{$ as default};
