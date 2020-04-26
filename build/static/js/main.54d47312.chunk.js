(this.webpackJsonpbiocontrol=this.webpackJsonpbiocontrol||[]).push([[0],{28:function(e,t,a){e.exports=a(39)},34:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,o,r,l=a(0),c=a.n(l),i=a(24),s=a.n(i),u=(a(33),a(34),a(2)),m=a(27),p=c.a.createContext(),d=function(e){var t=e.initialState,a=e.reducer,n=e.children,o=c.a.useReducer(a,t),r=Object(m.a)(o,2),l=r[0],i=r[1];return c.a.createElement(p.Provider,{value:{state:l,dispatch:i}},n)},h=function(e,t,a){var n={},o=function(o){n[o]=function(){return e[o].apply(e,arguments)(t,a)}};for(var r in e)o(r);return n},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){return function(n){return c.a.createElement(p.Consumer,null,(function(o){var r=o.state,l=o.dispatch;return c.a.createElement(a,Object.assign({},n,e&&e(r),h(t,l,r)))}))}}},f="CALCULATE_CYCLES",E="SET_CHRONOCARDAMOUNT",g="SET_TIMETOFALLASLEEP",y="SET_SINGLECYCLETIME",b="ALERT_MESSAGE",C="HIDE_MESSAGE",T="DEFINE_CHRONOTYPE",N="CLEAR_CHRONOTYPE",k="SET_TIME_TO_GET_UP",w="SET_NOTIFICATION_KEY",_=a(41),O=function(e,t){var a=t.timeToWakeUp,n=a.hours,o=a.minutes,r=new Date;r.setHours(n),r.setMinutes(o);var l,c=function(e,t){var a=t.singleCycleTime,n=t.timeToFallAsleep,o=(e+1)*(parseInt(a)||0)+(parseInt(n)||0),r=0;return o>59&&(r+=Math.round(o/60),o%=60),{hours:r,minutes:o}}(e,t),i=Object(_.a)(r,c),s=i.getTime()-Date.now();return s<0&&(s=86400+s),{preparedTime:(l=i,l=[l.getHours(),l.getMinutes()],"".concat(l[0]<10?"0"+l[0]:l[0],":").concat(l[1]<10?"0"+l[1]:l[1])),timeout:s}},q=(n={settings:function(e,t){switch(t.type){case E:return Object(u.a)({},e,{chronoCardAmount:t.payload});case g:return Object(u.a)({},e,{timeToFallAsleep:t.payload});case y:return Object(u.a)({},e,{singleCycleTime:t.payload});default:return e}},cycles:function(e,t,a){switch(t.type){case f:for(var n=parseInt(a.settings.chronoCardAmount)||0,o={singleCycleTime:a.settings.singleCycleTime,timeToFallAsleep:a.settings.timeToFallAsleep,timeToWakeUp:e.timeToWakeUp},r=[],l=0;l<n;l++)r.push(O(l,o));return Object(u.a)({},e,{advices:r});case k:return Object(u.a)({},e,{timeToWakeUp:{hours:void 0===t.payload.hours?e.timeToWakeUp.hours:t.payload.hours,minutes:void 0===t.payload.minutes?e.timeToWakeUp.minutes:t.payload.minutes}});default:return e}},message:function(e,t){switch(t.type){case b:return Object(u.a)({},e,{text:t.payload,show:!0});case C:return Object(u.a)({},e,{show:!1});default:return e}},chronotype:function(e,t){switch(t.type){case T:var a=0,n="";for(var o in t.payload)a+=t.payload[o];return n=a<=10?"lark":a<=15?"pigeon":"owl",Object(u.a)({},e,{showTest:!1,type:n});case N:return Object(u.a)({},e,{showTest:!0,type:null});default:return e}},notification:function(e,t){switch(t.type){case w:return Object(u.a)({},e,{timeoutKey:t.payload});default:return e}}},function(e,t){var a={};for(var o in n){var r=e[o],l=n[o](r,t,e);a[o]=l}return Object(u.a)({},e,{},a)}),A={settings:{chronoCardAmount:6,timeToFallAsleep:30,singleCycleTime:90},cycles:{timeToWakeUp:{hours:0,minutes:0},advices:[]},chronotype:{type:null,showTest:!0},message:{text:"",show:!1},notification:{timeoutKey:0},load:!0,version:[1,0,1]};if(window&&window.localStorage&&A.load){var S=JSON.parse(window.localStorage.getItem("app-state"));null!==S&&void 0!==S.version&&(o=S.version,r=A.version,(o=100*o[0]+10*o[1]+o[2])>=(r=100*r[0]+10*r[1]+r[2]))?(A=S,console.log("[debug]: Load state from localStorage.")):console.log("[debug]: Rewrite state to localStorage. Old app version was ".concat(S.version.join("."),"."))}else console.log("[debug]: Didn't load state from localStorage because state.load flag is disabled.");var j=A,F=a(6),I={"/":"\u0446\u0438\u043a\u043b\u044b","/settings":"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","/definechronotype":"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u043e\u043d\u043e\u0442\u0438\u043f\u0430"},x=function(){return c.a.createElement("div",{className:"navigation"},c.a.createElement("span",{className:"navigation__title"},I[Object(F.e)().pathname]))},U=a(7),W=new Map([["chronotype","typcn-time"],["cycles","typcn-adjust-contrast"],["settings","typcn-cog"]]),M=function(e){var t=e.type,a=e.className,n=e.size,o=void 0===n?24:n;return c.a.createElement("span",{className:"typcn ".concat(W.get(t)," ").concat(a),style:{fontSize:o}})},L=function(){var e=Object(F.e)().pathname;return c.a.createElement("footer",{className:"Bottom-menu"},c.a.createElement(U.b,{to:"/settings"},c.a.createElement("div",{className:"Bottom-menu-tab ".concat("/settings"===e&&"Bottom-menu-tab_active")},c.a.createElement(M,{type:"settings"}),c.a.createElement("div",{className:"Bottom-menu-tab__text"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))),c.a.createElement(U.b,{to:"/"},c.a.createElement("div",{className:"Bottom-menu-tab ".concat("/"===e&&"Bottom-menu-tab_active")},c.a.createElement(M,{type:"cycles"}),c.a.createElement("div",{className:"Bottom-menu-tab__text"},"\u0426\u0438\u043a\u043b\u044b"))),c.a.createElement(U.b,{to:"/definechronotype"},c.a.createElement("div",{className:"Bottom-menu-tab ".concat("/definechronotype"===e&&"Bottom-menu-tab_active")},c.a.createElement(M,{type:"chronotype"}),c.a.createElement("div",{className:"Bottom-menu-tab__text"},"\u0425\u0440\u043e\u043d\u043e\u0442\u0438\u043f"))))},B=v((function(e){return{chronoCardAmount:e.settings.chronoCardAmount,timeToFallAsleep:e.settings.timeToFallAsleep,singleCycleTime:e.settings.singleCycleTime,version:e.version}}),{setChronoCardAmount:function(e){return function(t){return t({type:E,payload:e})}},setTimeToFallAsleep:function(e){return function(t){return t({type:g,payload:e})}},setSingleCycleTime:function(e){return function(t){return t({type:y,payload:e})}}})((function(e){var t=e.chronoCardAmount,a=e.timeToFallAsleep,n=e.singleCycleTime,o=e.setChronoCardAmount,r=e.setTimeToFallAsleep,l=e.setSingleCycleTime,i=e.version;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){return e.preventDefault}},c.a.createElement("label",{htmlFor:"chronoCardAmount"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442-\u0446\u0438\u043a\u043b\u043e\u0432"),c.a.createElement("input",{type:"number",value:t,onChange:function(e){return o(e.target.value)},id:"chronoCardAmount",placeholder:"0"}),c.a.createElement("label",{htmlFor:"timeToFallAsleep"},"\u0412\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0441\u043d\u0443\u0442\u044c (\u043c\u0438\u043d)"),c.a.createElement("input",{type:"number",value:a,onChange:function(e){return r(e.target.value)},id:"timeToFallAsleep",placeholder:"0"}),c.a.createElement("label",{htmlFor:"singleCycleTime"},"\u0412\u0440\u0435\u043c\u044f 1 \u0446\u0438\u043a\u043b\u0430 (\u043c\u0438\u043d)"),c.a.createElement("input",{type:"number",value:n,onChange:function(e){return l(e.target.value)},id:"singleCycleTime",placeholder:"0"})),c.a.createElement("div",null,"\u0412\u0435\u0440\u0441\u0438\u044f: ",i[0],".",i[1],".",i[2]))})),R=function(){return function(e){return e({type:f,payload:null})}},D=v((function(e){return{timeToWakeUp:e.cycles.timeToWakeUp}}),{setTimeToWakeUp:function(e){return function(t){return t({type:k,payload:e})}},calculateCycles:R})((function(e){var t=e.timeToWakeUp,a=e.setTimeToWakeUp,n=e.calculateCycles;return c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"cycles__title"},"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f:"),c.a.createElement("form",{className:"cycles-form"},c.a.createElement("label",null,c.a.createElement("input",{type:"text",className:"cycles-form__form-control",value:t.hours,onChange:function(e){return a({hours:e.target.value})}}),"\u0427\u0430\u0441\u043e\u0432"),c.a.createElement("label",null,c.a.createElement("input",{type:"text",className:"cycles-form__form-control",value:t.minutes,onChange:function(e){return a({minutes:e.target.value})}}),"\u041c\u0438\u043d\u0443\u0442")),c.a.createElement("button",{onClick:n},"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"))})),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(a){setTimeout(a,t,{type:C}),a({type:b,payload:e})}},H=a(10),G=a.n(H),Y=function(e){var t=e.count,a=e.cycle,n=e.onClickHandler;return c.a.createElement("div",{className:"card card_animated",onClick:n},c.a.createElement("span",{className:"card__subtitle"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0438\u043a\u043b\u043e\u0432: ",t),c.a.createElement("h3",{className:"card__time"},a.preparedTime))},J=v((function(e){return{advices:e.cycles.advices}}),{alertMessage:P,planNotification:function(e){return function(t,a){clearTimeout(a.notification.timeoutKey);var n=setTimeout((function(){return G.a.create("\u0412\u0440\u0435\u043c\u044f \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u043a\u043e \u0441\u043d\u0443!",{body:"Bio control app",vibrate:!0,requireInteraction:!0})}),e);t({type:w,payload:n})}}})((function(e){var t=e.advices,a=e.alertMessage,n=e.planNotification;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement(Y,{count:t+1,cycle:e,key:t,onClickHandler:function(){n(e.timeout),a("\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0432\u043d\u043e\u0432\u043b\u0435\u043d\u043e"),console.log(e.timeout/1e3)}})})))})),K=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(J,null))},z=a(13),$=a(14),Q=a(16),V=a(15),X=a(17),Z=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.calculateCycles(),this.initNotifications(),window.addEventListener("unload",(function(){return window.localStorage.setItem("app-state",JSON.stringify(e.props.state))}))}},{key:"initNotifications",value:function(){var e=this.props.alertMessage;G.a.Permission.has()||G.a.Permission.request((function(){return e("\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b",3e3)}),(function(){return e("\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b",3e3)}))}},{key:"render",value:function(){return null}}]),t}(l.Component),ee=v((function(e){return{state:e}}),{calculateCycles:R,alertMessage:P})(Z),te=a(12),ae=a(11),ne={name:{lark:"\u0416\u0430\u0432\u043e\u0440\u043e\u043d\u043e\u043a",pigeon:"\u0413\u043e\u043b\u0443\u0431\u044c",owl:"\u0421\u043e\u0432\u0430"},timeToGetUp:{lark:"4-6\u0447",pigeon:"6-8\u0447",owl:"8-10 \u0438 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"},timeToFallAsleep:{lark:"20-22\u0447",pigeon:"22-24\u0447",owl:"24\u0447 \u0438 \u043f\u043e\u0437\u0436\u0435"},highActivity:{lark:"6-12\u0447  \u0438 \u0441 19\u0447",pigeon:"10-12\u0447 \u0438 16-18\u0447",owl:"\u043f\u043e\u0441\u043b\u0435 16"},meals:{lark:["4-8\u0447"],pigeon:["6-10\u0447"],owl:["8-12\u0447"]}},oe=function(e){var t=e.type;return c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"block__title"},"\u0425\u0440\u043e\u043d\u043e\u0442\u0438\u043f: ",ne.name[t]),c.a.createElement("div",{className:"block__text"},"\u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f: ",c.a.createElement("span",{className:"block__value"},ne.timeToGetUp[t])),c.a.createElement("div",{className:"block__text"},"\u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0437\u0430\u0441\u044b\u043f\u0430\u043d\u0438\u044f: ",c.a.createElement("span",{className:"block__value"},ne.timeToFallAsleep[t])),c.a.createElement("div",{className:"block__text"},"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438: ",c.a.createElement("span",{className:"block__value"},ne.highActivity[t])),c.a.createElement("div",{className:"block__text"},"\u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430: ",c.a.createElement("span",{className:"block__value"},ne.meals[t][0])))},re=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(Q.a)(this,Object(V.a)(t).call(this,e))).state={q0:0,q1:0,q2:0,q3:0,q4:0},a.onInputChange=a.onInputChange.bind(Object(ae.a)(a)),a.onSubmit=a.onSubmit.bind(Object(ae.a)(a)),a}return Object(X.a)(t,e),Object($.a)(t,[{key:"onInputChange",value:function(e){var t=e.target;this.setState(Object(te.a)({},t.name,parseInt(t.value)))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=!0;for(var a in this.state)0===this.state[a]&&(t=!1);t?this.props.defineChronotype(this.state):this.props.alertMessage("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!")}},{key:"render",value:function(){var e=this.state,t=this.onInputChange,a=this.onSubmit,n=this.props,o=n.clearChronotype,r=n.type;return this.props.showTest?c.a.createElement("form",null,c.a.createElement("p",null,"\u0422\u0440\u0443\u0434\u043d\u043e \u043b\u0438 \u0432\u0430\u043c \u0432\u0441\u0442\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u043d\u043e \u0443\u0442\u0440\u043e\u043c?"),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q0",value:"4",checked:4===e.q0,onChange:t})," \u0414\u0430, \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q0",value:"3",checked:3===e.q0,onChange:t})," \u0418\u043d\u043e\u0433\u0434\u0430 "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q0",value:"2",checked:2===e.q0,onChange:t})," \u0420\u0435\u0434\u043a\u043e "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q0",value:"1",checked:1===e.q0,onChange:t})," \u041a\u0440\u0430\u0439\u043d\u0435 \u0440\u0435\u0434\u043a\u043e ")),c.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0431\u044b \u0443 \u0432\u0430\u0441 \u0431\u044b\u043b\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u0430, \u0432 \u043a\u0430\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b \u043b\u043e\u0436\u0438\u043b\u0438\u0441\u044c \u0431\u044b \u0441\u043f\u0430\u0442\u044c?"),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q1",value:"4",checked:4===e.q1,onChange:t})," \u041f\u043e\u0437\u0436\u0435 1 \u0447\u0430\u0441\u0430 \u043d\u043e\u0447\u0438 "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q1",value:"3",checked:3===e.q1,onChange:t})," \u041e\u043a\u043e\u043b\u043e 23 \u0447\u0430\u0441\u043e\u0432 "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q1",value:"2",checked:2===e.q1,onChange:t})," \u041e\u043a\u043e\u043b\u043e 22 \u0447\u0430\u0441\u043e\u0432 "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q1",value:"1",checked:1===e.q1,onChange:t})," \u0414\u043e 22 \u0447\u0430\u0441\u043e\u0432 ")),c.a.createElement("p",null,"\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0433\u043e\u043b\u043e\u0434\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f? "),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q2",value:"4",checked:4===e.q2,onChange:t})," \u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u044e \u043f\u043b\u043e\u0442\u043d\u044b\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q2",value:"3",checked:3===e.q2,onChange:t})," \u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q2",value:"2",checked:2===e.q2,onChange:t})," \u041b\u0435\u0433\u043a\u0438\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q2",value:"1",checked:1===e.q2,onChange:t})," \u041d\u0435 \u0433\u043e\u043b\u043e\u0434\u0435\u043d ")),c.a.createElement("p",null,"\u041e\u0442 \u0447\u0435\u0433\u043e \u0432\u0430\u043c \u043b\u0435\u0433\u0447\u0435 \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f? "),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q3",value:"3",checked:3===e.q3,onChange:t})," \u041e\u0442 \u0447\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u043e\u043c "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q3",value:"2",checked:2===e.q3,onChange:t})," \u041e\u0442 \u043a\u043e\u0444\u0435/\u0447\u0430\u044f \u0443\u0442\u0440\u043e\u043c ")),c.a.createElement("p",{className:"text-size-bug-fix"},"\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0433\u043a\u043e \u0432\u044b \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0435 \u0441\u0432\u043e\u0438\u043c \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u043f\u0438\u0449\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0443\u0441\u043a\u0430? "),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q4",value:"4",checked:4===e.q4,onChange:t})," \u041e\u0447\u0435\u043d\u044c \u043b\u0435\u0433\u043a\u043e "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q4",value:"3",checked:3===e.q4,onChange:t})," \u041b\u0435\u0433\u043a\u043e "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q4",value:"2",checked:2===e.q4,onChange:t})," \u0422\u0440\u0443\u0434\u043d\u043e "),c.a.createElement("p",{className:"label"},c.a.createElement("input",{type:"radio",name:"q4",value:"1",checked:1===e.q4,onChange:t})," \u041d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f ")),c.a.createElement("button",{onClick:a},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c")):c.a.createElement(c.a.Fragment,null,c.a.createElement(oe,{type:r}),c.a.createElement("button",{onClick:o,className:"button_secondary"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0437\u0430\u043d\u043e\u0432\u043e"))}}]),t}(c.a.Component),le=v((function(e){return e.chronotype}),{alertMessage:P,defineChronotype:function(e){return function(t){return t({type:T,payload:e})}},clearChronotype:function(){return function(e){return e({type:N})}}})(re),ce=v((function(e){return e.message}))((function(e){var t=e.text,a=e.show;return c.a.createElement("div",{className:"message ".concat(a?"message_shown":"message_hidden")},t)})),ie=function(){return c.a.createElement(U.a,null,c.a.createElement(d,{initialState:j,reducer:q},c.a.createElement(x,null),c.a.createElement("main",null,c.a.createElement(F.a,{path:"/",component:K,exact:!0}),c.a.createElement(F.a,{path:"/settings",component:B,exact:!0}),c.a.createElement(F.a,{path:"/definechronotype",component:le,exact:!0}),c.a.createElement(ce,null)),c.a.createElement(L,null),c.a.createElement(ee,null)))},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(c.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.54d47312.chunk.js.map