(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{21:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var a=r(3),c=r.n(a),n=r(14),s=r.n(n),o=(r(21),r(16)),i=[{Header:"First Name",accessor:"first_name"},{Header:"Last Name",accessor:"last_name"},{Header:"City",accessor:"city"},{Header:"State",accessor:"state"},{Header:"Age",accessor:"age"},{Header:"E-mail",accessor:"email"},{Header:"Phone",accessor:"phone"}],l=r(2),u=r(4),j=(r(25),r(0)),d=function(e){var t=e.filter,r=e.setFilter;return Object(j.jsx)("span",{children:Object(j.jsx)("input",{value:t||"",placeholder:"Search table here...",onChange:function(e){return r(e.target.value)}})})},b=(r(27),function(e){var t=Object(a.useMemo)((function(){return e.columns}),[]),r=Object(a.useMemo)((function(){return e.data}),[]),c=Object(u.useTable)({columns:t,data:r},u.useGlobalFilter,u.useSortBy),n=c.getTableProps,s=c.getTableBodyProps,o=c.headerGroups,i=c.rows,b=c.prepareRow,O=c.state,h=c.setGlobalFilter,p=O.globalFilter;return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{filter:p,setFilter:h}),Object(j.jsxs)("table",Object(l.a)(Object(l.a)({},n()),{},{children:[Object(j.jsx)("thead",{children:o.map((function(e){return Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsxs)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(j.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(j.jsx)("tbody",Object(l.a)(Object(l.a)({},s()),{},{children:i.map((function(e){return b(e),Object(j.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(j.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}),O=r(15),h=r.n(O);var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){h.a.get("https://randomuser.me/api?results=10&nat=us&inc=name,location,email,dob,phone").then((function(e){var t=e.data.results.map((function(e){return{first_name:e.name.first,last_name:e.name.last,city:e.location.city,state:e.location.state,age:e.dob.age,email:e.email,phone:e.phone}}));console.log(t),c(t)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(b,{columns:i,data:r})})},m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,47)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.e2fe5d4c.chunk.js.map