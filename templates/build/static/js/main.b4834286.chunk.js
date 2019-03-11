(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getDevicesList",function(){return v}),a.d(r,"getDevice",function(){return b}),a.d(r,"showCurrentDevice",function(){return h});var n=a(0),c=a.n(n),s=a(18),i=a(8),l=a(1),o=a(2),u=a(5),d=a(3),m=a(4),p=(a(31),a(32),a(34),a(6));function v(){return{type:"GET_DEVICES_LIST",api:{url:"/api/devices",method:"GET"}}}function b(e,t){return{type:"GET_DEVICE",api:{url:"/api/device",method:"GET",data:{ip:e,port:t}}}}function h(){return{type:"HIDE_CURRENT_DEVICE"}}a(35);var E=function(e){var t=e.id,a=e.text,r=e.onClick,n=e.active,s=e.pending;return c.a.createElement("button",{key:t,type:"button",onClick:r,className:"list-group-item d-flex justify-content-between list-group-item-action".concat(n?" active":"")},a,s?c.a.createElement("div",{className:"typing_loader"}):null)},f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dashboardActions.getDevicesList()}},{key:"render",value:function(){var e=this,t=this.props.list.map(function(t,a){return c.a.createElement(E,{key:a,text:"".concat(t.ip,":").concat(t.port),onClick:function(){e.props.dashboardActions.getDevice(t.ip,t.port)},active:e.props.currentDevice.data.ip===t.ip&&e.props.currentDevice.data.port===t.port&&e.props.currentDevice.show,pending:e.props.currentDevice.data.ip===t.ip&&e.props.currentDevice.data.port===t.port&&e.props.currentDevice.pending})});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col d-flex align-items-baseline justify-content-between"},c.a.createElement("span",{className:"h5 m-0"},"Devices ",c.a.createElement("a",{className:"d-sm-inline-block d-md-none small","data-toggle":"collapse",href:"#collapseDevicesList",role:"button","aria-expanded":"false","aria-controls":"collapseDevicesList"},"toggle")),this.props.devices.pending?c.a.createElement("div",{className:"typing_loader"}):c.a.createElement("a",{href:"#",onClick:function(){e.props.dashboardActions.getDevicesList()}},"Reload"))),c.a.createElement("div",{className:"collapse show",id:"collapseDevicesList"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"list-group"},t)))))}}]),t}(c.a.Component),D=Object(i.b)(function(e){return{list:e.dashboardReducer.list.devices,devices:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice}},function(e){return{dashboardActions:Object(p.b)(r,e)}})(f),N=(a(36),function(e){return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Device Information"),c.a.createElement("div",{className:"card"},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Address: ","".concat(e.currentDeviceData.ip,":").concat(e.currentDeviceData.port)),c.a.createElement("li",{className:"list-group-item"},"Manufacturer: ",e.currentDeviceData.Manufacturer),c.a.createElement("li",{className:"list-group-item"},"Model: ",e.currentDeviceData.Model),c.a.createElement("li",{className:"list-group-item"},"Firmware Version: ",e.currentDeviceData["Firmware Version"]),c.a.createElement("li",{className:"list-group-item"},"Serial Number: ",e.currentDeviceData["Serial Number"]),c.a.createElement("li",{className:"list-group-item"},"Hardware ID: ",e.currentDeviceData["Hardware ID"]))))}),g="http://onvif.auditory.ru",j=(a(37),a(38),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).togglePicture=function(){"snapshot"===a.state.tab?a.setState({tab:"stream"}):a.setState({tab:"snapshot"})},a.state={tab:"snapshot"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=g+("snapshot"===this.state.tab?this.props.snapshot_url:this.props.stream_url);e=e+(~e.indexOf("?")?"&":"?")+"t=".concat(Date.now());var t=c.a.createElement("div",{className:"switch-wrapper"},"Show snapshot",c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",checked:"stream"===this.state.tab,onClick:this.togglePicture}),c.a.createElement("span",{className:"slider"})),"Show Stream"),a=c.a.createElement("img",{src:e,className:"stream-image"});return c.a.createElement(c.a.Fragment,null,t,a)}}]),t}(c.a.Component)),O=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentDeviceData.avaliable_tests.filter(function(t){return t.service===e.props.selected_test}),a=t.length?t[0].available_tests.map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,"".concat(t+1)),c.a.createElement("td",null,c.a.createElement("input",{type:"checkbox"})),c.a.createElement("td",null,"".concat(e))))}):null;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Select"),c.a.createElement("th",{scope:"col"},"Test"))),c.a.createElement("tbody",null,a))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{currentDeviceData:e.currentDeviceData,selected_test:e.selected_test}}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={selected_test:null},a.chooseTestType=function(e){a.setState({selected_test:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentDeviceData["Supported Services"].map(function(t,a){return c.a.createElement("a",{className:"dropdown-item".concat(e.state.selected_test===t?" active":""),href:"#",key:a,onClick:function(){e.chooseTestType(t)}},t)});return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Device Test"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-4"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.selected_test?this.state.selected_test:"Choose test"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},t))),c.a.createElement("div",{className:"col-sm-12 col-md-4"},c.a.createElement("button",{className:"btn btn-secondary",type:"button"},"About Test")),c.a.createElement("div",{className:"col-sm-12 col-md-4"}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-1"},c.a.createElement(O,{currentDeviceData:this.props.currentDeviceData,selected_test:this.state.selected_test}))))}}]),t}(n.Component);var y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={currentTab:"info"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=null;return"info"===this.state.currentTab&&(t=c.a.createElement(N,{currentDeviceData:this.props.currentDeviceData})),"stream"===this.state.currentTab&&(t=c.a.createElement(j,{snapshot_url:this.props.currentDeviceData.snapshot_url,stream_url:this.props.currentDeviceData.stream_url})),"testing"===this.state.currentTab&&(t=c.a.createElement(_,{currentDeviceData:this.props.currentDeviceData})),this.props.currentDevice.show?c.a.createElement("div",{className:"card text-left"},c.a.createElement("div",{className:"card-header"},c.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("info"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"info"})},href:"#"},"Information")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("stream"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"stream"})},href:"#"},"Stream")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("testing"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"testing"})},href:"#"},"Testing")))),t):c.a.createElement("div",{className:"card text-center"},c.a.createElement("div",{className:"card-body d-flex align-items-center justify-content-center"},c.a.createElement("h4",{className:"card-title text-center mb-0"},this.props.currentDevice.pending||this.props.list.pending?"Loading...":"Choose device from the list"),this.props.currentDevice.pending||this.props.list.pending?c.a.createElement("div",{className:"loader"}):null))}}]),t}(c.a.Component),w=Object(i.b)(function(e){return{list:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice,currentDeviceData:e.dashboardReducer.currentDevice.data}},function(e){return{dashboardActions:Object(p.b)(r,e)}})(y);var T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-3  mb-3"},c.a.createElement(D,null)),c.a.createElement("div",{className:"col-sm-12 col-md-9"},c.a.createElement(w,null)))}}]),t}(c.a.Component),k=Object(i.b)(function(e){return{dashboard:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice}},function(e){return{dashboardActions:Object(p.b)(r,e)}})(T),C=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-primary mb-3"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"ONVIF Compliance Tester"))},I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null),c.a.createElement("div",{className:"container"},c.a.createElement(k,null)))}}]),t}(n.Component),S=a(20),R=a(21),x=a.n(R),G=a(7),V={list:{devices:[],pending:!1,error:!1},currentDevice:{data:{},pending:!1,error:!1,show:!1}};var L=Object(p.c)({dashboardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DEVICES_LIST":if(t.data){var a={devices:t.data,pending:!1,error:!1};return Object(G.a)({},e,{list:a})}break;case"GET_DEVICES_LIST__PENDING":return Object(G.a)({},e,{currentDevice:{data:{},pending:!1,error:!1,show:!1},list:{devices:[],pending:!0,error:!1}});case"GET_DEVICES_LIST__ERROR":return Object(G.a)({},e,{list:{devices:[],pending:!1,error:!0}});case"GET_DEVICE":if(t.data){var r={data:t.data,pending:!1,error:!1,show:!0};return Object(G.a)({},e,{currentDevice:r})}break;case"GET_DEVICE__PENDING":var n={data:Object(G.a)({},t.api.data),pending:!0,error:!1,show:!1};return Object(G.a)({},e,{currentDevice:n});case"GET_DEVICE__ERROR":return Object(G.a)({},e,{currentDevice:{data:{},pending:!1,error:!0,show:!1}});case"HIDE_CURRENT_DEVICE":var c=Object(G.a)({},e.currentDevice,{show:!1});return Object(G.a)({},e,c)}return e}}),A=a(13),F=function(e){var t=A.Deferred();return e.api.url=g+e.api.url,A.ajax(e.api).done(function(e){t.resolve(e)}).fail(function(e){t.reject(e)}),t.promise()},M=function(e){return function(e){return function(t){var a=t.type;t.api?(F(t).done(function(r){t.type=a,t.data=r,delete t.api,e(t)}).fail(function(r){t.type=a+"__ERROR",t.data=r,e(t)}),t.type=a+"__PENDING",e(t)):e(t)}}};var P=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Object(p.d)(L,Object(p.a)(S.a,M,x.a))}();Object(s.render)(c.a.createElement(i.a,{store:P},c.a.createElement(I,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b4834286.chunk.js.map