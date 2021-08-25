(this["webpackJsonpreact-redux-test-procedure"]=this["webpackJsonpreact-redux-test-procedure"]||[]).push([[0],{71:function(t,e,r){},77:function(t,e,r){},82:function(t,e,r){},94:function(t,e,r){},95:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r.n(n),i=r(9),s=r.n(i),a=(r(71),r(12)),o=r(22),j=r(20),d=r(129),b=r(133),l=r(135),u=r(134),h=(r(77),r(2));var O=function(t){return Object(h.jsx)("div",{className:"navBar",children:Object(h.jsx)(d.a,{position:"relative",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(u.a,{container:!0,spacing:10,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(u.a,{item:!0,children:Object(h.jsxs)(j.b,{to:"/",style:{textDecoration:"none",color:"white"},children:[" ",Object(h.jsx)(l.a,{variant:"h4",noWrap:!0,children:"Test Library"})]})}),Object(h.jsx)(u.a,{item:!0,children:Object(h.jsx)(j.b,{to:"/newtest",style:{textDecoration:"none",color:"white"},children:Object(h.jsx)(l.a,{variant:"h4",noWrap:!0,children:"New Test"})})}),Object(h.jsx)(u.a,{item:!0,children:Object(h.jsx)(l.a,{variant:"h4",noWrap:!0,children:Object(h.jsx)("a",{style:{textDecoration:"none",color:"white"},href:"https://github.com/TaylorFurman/react-redux-test-procedure",children:"Github Repo"})})})]})})})})},x=r(28),p=r(29),f=r(32),v=r(30),m=r(137),y=r(141),D=r(140),T=r(136),g=r(138),I=r(139),w=r(96),P=(r(82),function(t){Object(f.a)(r,t);var e=Object(v.a)(r);function r(){return Object(x.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:"Test Library"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"body1",gutterBottom:!0,children:'Click test below to access the test method, or click "New Test" to add additional test procedures'}),Object(h.jsx)("br",{}),Object(h.jsx)(T.a,{component:w.a,children:Object(h.jsxs)(m.a,{"aria-label":"leaderboard",children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(I.a,{children:[Object(h.jsx)(D.a,{children:"Test ID"}),Object(h.jsx)(D.a,{align:"left",children:"Test Description"})]})}),Object(h.jsx)(y.a,{children:this.props.testProcedure.map((function(t,e){return Object(h.jsxs)(I.a,{children:[Object(h.jsx)(D.a,{component:"th",scope:"row",children:Object(h.jsx)(j.b,{to:"/test/{".concat(t.testId,"}"),children:t.testId})}),Object(h.jsx)(D.a,{align:"left",children:t.testDescription})]},e)}))})]})})]})}}]),r}(c.a.Component));var k=Object(o.b)((function(t){return{testProcedure:t.testProcedure}}),(function(t){return{TestLibrary:function(e){t(P(e))}}}))(P),C=r(142),S=r(143);var A=function(t){Object(f.a)(r,t);var e=Object(v.a)(r);function r(t){var n;return Object(x.a)(this,r),(n=e.call(this,t)).state={id:0,testId:"",testDescription:""},n}return Object(p.a)(r,[{key:"handleSubmit",value:function(t){console.log(t),t.preventDefault(),this.state.testId&&this.state.testDescription?(this.props.addTest({id:this.state.id,testId:this.state.testId,testDescription:this.state.testDescription}),this.setState({id:this.state.id+1,testId:"",testDescription:""})):alert("All fields are required")}},{key:"updateTestId",value:function(t){this.setState({id:this.state.id}),this.setState({testId:t.target.value})}},{key:"updateTestDescription",value:function(t){this.setState({testDescription:t.target.value})}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:"New Test Procedure"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"body1",gutterBottom:!0,children:"Fill out all items below than click submit when completed."}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(C.a,{id:"standard-required",value:this.state.testId,onChange:function(e){return t.updateTestId(e)},label:"Test ID",defaultValue:""}),Object(h.jsx)("br",{}),Object(h.jsx)(C.a,{id:"standard-multiline-flexible",value:this.state.testDescription,onChange:function(e){return t.updateTestDescription(e)},label:"Test Description",multiline:!0,maxRows:4}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{type:"submit",variant:"contained",color:"primary",children:"Add to Library"})]})]})}}]),r}(c.a.Component);var B=Object(o.b)((function(t){return{}}),(function(t){return{addTest:function(e){t(function(t){return{type:"ADD_TEST",data:t}}(e))}}}))(A),L=(r(84),c.a.createRef()),E=function(t){return Object(h.jsx)("div",{className:"Print",ref:L})},F=function(t){Object(f.a)(r,t);var e=Object(v.a)(r);function r(){return Object(x.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:"Print out Test Procedure"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"body1",gutterBottom:!0,children:"Review and print"}),Object(h.jsx)(T.a,{component:w.a,children:Object(h.jsxs)(m.a,{"aria-label":"leaderboard",children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(I.a,{children:[Object(h.jsx)(D.a,{children:"Test ID"}),this.props.testProcedure.map((function(t,e){return Object(h.jsx)(D.a,{align:"left",children:t.testId},e)}))]})}),Object(h.jsx)(y.a,{children:this.props.testProcedure.map((function(t,e){return Object(h.jsxs)(I.a,{children:[Object(h.jsx)(D.a,{component:"th",scope:"row",children:"Test Description"}),Object(h.jsx)(D.a,{align:"left",children:t.testDescription})]},e)}))})]})}),Object(h.jsx)(E,{})]})}}]),r}(c.a.Component);var R=Object(o.b)((function(t){return{testProcedure:t.testProcedure}}),(function(t){return{TestPrint:function(e){t(F(e))}}}))(F);console.log(R);var N=R,q=r(55),M=r(54),_=r.n(M),G={testProcedure:[{id:0,testId:"pH by Probe",testDescription:"Get the pH of a liquid via probe (1-6 acidic, 7 neutral, 8-14 basic)"},{id:1,testId:"Density by Hydrometer",testDescription:"Get the density of a liquid via hydrometer (Density of pure water at ambient conditions = 1.000g/mL)"}]};var H=function(t,e){if(void 0===t)return G;var r=_()(t);return"ADD_TEST"===e.type?r.testProcedure.push(e.data):"ADD_MATERIAL"===e.type||"REMOVE_MATERIAL"===e.type||e.type,r},V=Object(q.a)(H),W=(r(94),function(t){var e=t.location;return Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Page not Found: ",e.pathname]})})});var J=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{store:V,children:Object(h.jsxs)(a.c,{children:[Object(h.jsxs)(a.a,{exact:!0,path:"/",children:[Object(h.jsx)(O,{}),Object(h.jsx)(k,{})]}),Object(h.jsxs)(a.a,{path:"/newtest",children:[Object(h.jsx)(O,{}),Object(h.jsx)(B,{})]}),Object(h.jsxs)(a.a,{path:"/test/:id",children:[Object(h.jsx)(O,{}),Object(h.jsx)(N,{})]}),Object(h.jsx)(a.a,{component:W})]})})})},z=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,145)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;r(t),n(t),c(t),i(t),s(t)}))};s.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(J,{})})}),document.getElementById("root")),z()}},[[95,1,2]]]);
//# sourceMappingURL=main.8947e537.chunk.js.map