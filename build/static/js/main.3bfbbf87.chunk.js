(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(8),s=n.n(r),c=n(2),i=n(3),o=n(5),l=n(4),j=n(0),d=function(e){return console.log(e),Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("center",{children:Object(j.jsxs)("h2",{children:["\xa9 Developer Funnel ",e.year," ",e.month]})})]})},h=(n(14),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){console.log(t.target.value),e.setState({keyword:t.target.value?t.target.value:"User Text Here"}),e.props.userData(t.target.value)},e.state={title:"React App",keyword:"User text here"},e}return Object(i.a)(n,[{key:"render",value:function(){return console.log("inside render"),Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:"logo",children:this.state.title}),Object(j.jsxs)("center",{children:[Object(j.jsx)("input",{onChange:this.handleChange}),Object(j.jsx)("div",{style:{color:"black"},children:this.state.keyword})]}),Object(j.jsx)("hr",{})]})}}]),n}(a.Component)),u=n(7),b=function(e){console.log(e);var t=e.newsdata.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("p",{children:e.age})]})}));return Object(j.jsx)("div",{children:t})},O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).filterNews=function(t){var n=e.state.news.filter((function(e){return e.name.indexOf(t)>-1}));e.setState({filtered:n})},e.state={news:u,filtered:u},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{userData:function(t){e.filterNews(t)}}),Object(j.jsx)(b,{newsdata:this.state.filtered}),Object(j.jsx)(d,{year:"2021",month:"march"})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":"1","name":"teja","age":"24"},{"id":"2","name":"rupesh","age":"30"},{"id":"3","name":"gaya","age":"14"},{"id":"4","name":"batheyya","age":"51"},{"id":"5","name":"annapurna","age":"45"},{"id":"6","name":"rekha","age":"27"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.3bfbbf87.chunk.js.map