import{r as o,a as e,F as l,j as r,L as c}from"./index.8d209275.js";import{H as n}from"./HomeBredCurbs.57ffe4e9.js";import{I as i,M as h}from"./index.0514ba4e.js";import{a as m}from"./axios.74c9240f.js";import"./index.esm.f6a38425.js";import"./iconBase.3b0c2950.js";const p=s=>(o.exports.useState(s.data),console.log(55,s.data),e(l,{children:e("div",{className:"overflow-x-auto",children:r("table",{className:"min-w-full border-collapse  border-gray-50",children:[e("thead",{children:r("tr",{className:"bg-[#18b9f9] text-white ",children:[e("th",{className:"px-4 py-2 border border-gray-200  ",children:"Reg No"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"EOI No"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Building"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Start Date"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Last Date"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Max Contract Value"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Registration On"})]})}),e("tbody",{children:s.data.map((a,d)=>e(l,{children:r("tr",{className:"hover:bg-black-50 text-sm",children:[e("td",{className:"px-4 py-2  shadow-sm",children:a.regNo}),e("td",{className:"px-4 py-2  shadow-sm",children:a.eoiNo}),e("td",{className:"px-4 py-2  shadow-sm",children:a.buildings}),e("td",{className:"px-4 py-2  shadow-sm",children:a.startDate}),e("td",{className:"px-4 py-2  shadow-sm",children:a.lastDate}),e("td",{className:"px-4 py-2  shadow-sm",children:a.maxContractValue}),e("td",{className:"px-4 py-2  shadow-sm",children:a.regOn})]},d)}))})]})})})),f=()=>{const[s,a]=o.exports.useState([]);return o.exports.useEffect(()=>{m.get("https://constrobackend17-4.onrender.com/api/get_all_projects").then(t=>{console.log(16,t.data.Result),a(t.data.Result)}).catch(t=>{console.log(t)})},[]),r(l,{children:[e(n,{title:"Active Projects"}),r("div",{className:"flex items-center text-slate-400 ",children:[r(c,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:()=>{window.history.back()},children:[e(i,{className:"text-xl font-semibold"}),"Back"]}),e("span",{className:"mx-2",children:" / "}),r(c,{to:"/AdminDash",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[e(h,{className:"text-lg font-semibold"}),"Home"]})]}),e("div",{className:"container mx-auto mt-3",children:e(p,{data:s})})]})};export{f as default};
