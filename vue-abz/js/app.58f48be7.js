(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-abz/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07ea":function(e,t,a){},"09be":function(e,t,a){},"199c":function(e,t){},"1a27":function(e,t,a){},"1ae4":function(e,t,a){e.exports=a.p+"img/logo.146e2926.svg"},"1d0f":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[]},"23be":function(e,t,a){"use strict";var n=a("199c"),r=a.n(n);t["default"]=r.a},"28cc":function(e,t,a){},"294d":function(e,t,a){"use strict";var n=a("9ea8"),r=a.n(n);r.a},3687:function(e,t,a){},"3dfd":function(e,t,a){"use strict";var n=a("1d0f"),r=a("23be"),i=(a("cf25"),a("2877")),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("1dce"),i=a.n(r),s=a("58ca"),o=a("5f5b"),l=a("3dfd"),c=a("9483");Object(c["a"])("".concat("/vue-abz/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Menu"),a("Banner"),a("About"),a("Users"),a("Register"),a("Footer")],1)},m=[],f=(a("4989"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{ref:"header",staticClass:"header animate__animated animate__fadeInDown",on:{scroll:e.handleScroll}},[n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"header__logo"},[n("a",{staticClass:"header__logo-link",attrs:{href:"#"},on:{click:e.handleLink}},[n("img",{attrs:{src:a("1ae4"),alt:""}})])]),n("div",{staticClass:"header__menu"},[n("Sidebar",[n("nav",{staticClass:"menu"},[n("ul",{staticClass:"menu-list"},e._l(e.li,(function(t,a){return n("li",{key:a},[n("a",{staticClass:"menu-list-item",class:{active:e.active===a},attrs:{href:t.link},on:{click:function(t){return e.handleLink(a)}}},[e._v(e._s(t.name))])])})),0)])])],1),n("Burger")],1)])])}),p=[],h=a("2f62"),v=(a("99af"),a("d3b7"),a("96cf"),a("1da1")),g={state:{positionsUrl:"https://frontend-test-assignment-api.abz.agency/api/v1/positions",userUrl:"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",token:null,nextUrl:null,showMore:!1,pageSuccess:null,httpStatus:null,totalPages:null,currentPage:null,loading:!0,userList:[]},mutations:{createUserList:function(e,t){e.nextUrl=t.links.next_url,e.userList=t.users,e.pageSuccess=t.success,e.totalPages=t.total_pages,e.currentPage=t.page,null!==e.nextUrl?e.showMore=!0:e.showMore=!1,e.loading=!1},updateUserList:function(e,t){e.loading=!0,e.currentPage=t.page,e.pageSuccess=t.success,e.pageSuccess&&(e.nextUrl=t.links.next_url,e.userList=e.userList.concat(t.users),null!==e.nextUrl?e.showMore=!0:e.showMore=!1,e.currentPage===e.totalPages&&(e.showMore=!1)),e.loading=!1},httpStatusCode:function(e,t){e.httpStatus=t}},actions:{fetchUsers:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.prev=1,a.next=4,fetch("".concat(t.state.users.userUrl)).then((function(e){return e.json()}));case 4:r=a.sent,n("createUserList",r),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log("err",a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()},registerUser:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.dispatch,a.prev=1,i="",a.next=5,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(e){return e.json()}));case 5:return s=a.sent,a.next=8,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",headers:{Token:s.token},body:t}).then((function(e){console.log(e.json()),i=e.status}));case 8:n("httpStatusCode",i),r("fetchUsers"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),console.log("err",a.t0);case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))()},showMoreUsers:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.commit,e.dispatch,a.prev=1,r=null,!t.state.users.showMore){a.next=7;break}return a.next=6,fetch("".concat(t.state.users.nextUrl)).then((function(e){return e.json()}));case 6:r=a.sent;case 7:n("updateUserList",r),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](1),console.log("err",a.t0);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})))()}},getters:{getPositionsUrl:function(e){return e.positionsUrl},getUserList:function(e){return e.userList},getShowMoreBtn:function(e){return e.showMore},getSuccess:function(e){return e.pageSuccess},getHttpStatus:function(e){return e.httpStatus},getLoading:function(e){return e.loading}}};n["default"].use(h["a"]);var _=new h["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{users:g}}),w=n["default"].observable({isNavOpen:!0}),b={setIsNavOpen:function(e){w.isNavOpen=e},toggleNav:function(){w.isNavOpen=!w.isNavOpen},mobileWindow:function(){w.isNavOpen=!1}},C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar"},[e.isPanelOpen?a("div",{staticClass:"sidebar-backdrop",on:{click:e.closeSidebarPanel}}):e._e(),a("transition",{attrs:{name:"slide"}},[e.isPanelOpen?a("div",{staticClass:"sidebar-panel"},[e._t("default")],2):e._e()])],1)},y=[],x={name:"Sidebar",methods:{closeSidebarPanel:b.toggleNav},computed:{isPanelOpen:function(){return w.isNavOpen}}},k=x,$=(a("cca0"),a("2877")),E=Object($["a"])(k,C,y,!1,null,null,null),S=E.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{active:e.isBurgerActive},attrs:{id:"burger"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._t("default",[e._m(0)])],2)},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[a("span",{staticClass:"hidden"},[e._v("Toggle menu")]),a("span",{staticClass:"burger-bar burger-bar--1"}),a("span",{staticClass:"burger-bar burger-bar--2"}),a("span",{staticClass:"burger-bar burger-bar--3"})])}],L={name:"Burger",computed:{isBurgerActive:function(){return w.isNavOpen}},methods:{toggle:function(){b.toggleNav()}}},U=L,I=(a("f142"),Object($["a"])(U,O,j,!1,null,null,null)),M=I.exports,P={name:"Menu",data:function(){return{width:null,active:null,li:[{name:"About",link:"#about"},{name:"Relationships",link:"#register"},{name:"Requirements",link:"#register"},{name:"Users",link:"#users"},{name:"Sign Up",link:"#register"}]}},components:{Sidebar:S,Burger:M},methods:{updateWidth:function(){this.width=window.innerWidth,this.width<769&&b.mobileWindow()},handleLink:function(e){this.width<769&&b.toggleNav(),this.active=e},handleScroll:function(e){var t=this.$refs.header;window.scrollY>60?t.setAttribute("style","box-shadow: 0 5px 5px rgba(0,0,0,0.2)"):window.scrollY<60&&t.setAttribute("style","box-shadow: none")}},created:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},R=P,N=(a("cd78"),Object($["a"])(R,f,p,!1,null,null,null)),A=N.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"wow animate__animated animate__fadeIn",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"about-header"},[n("h1",{staticClass:"section-title wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.5s"}},[e._v("Let's get acquainted")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 col-sm-4"},[n("img",{staticClass:"about-img wow animate__animated animate__jackInTheBox",attrs:{src:a("92cc"),alt:"","data-wow-duration":"1.8s","data-wow-delay":"1s"}})]),n("div",{staticClass:"col-md-7 col-sm-8"},[n("h2",{staticClass:"about-title wow animate__animated animate__fadeInLeft",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"1s"}},[e._v("I am cool frontend developer")]),n("p",{staticClass:"about-text wow animate__animated animate__fadeInRight",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"1s"}},[e._v("We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),n("br"),n("br"),e._v(" If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3. ")]),n("a",{staticClass:"btn btn-flat wow animate__animated animate__fadeInDown",attrs:{href:"#register","data-wow-duration":"1.8s","data-wow-delay":"1.2s"}},[e._v("Sign up now")])])])])])}],F={name:"About"},D=F,B=(a("6419"),Object($["a"])(D,q,z,!1,null,null,null)),T=B.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"wow animate__animated animate__fadeIn",attrs:{id:"users"}},[a("div",{staticClass:"container"},[e._m(0),e.getLoading?a("div",{staticClass:"row"},[a("div",{staticClass:"col text-center mt-5"},[a("Loader")],1)]):a("div",{staticClass:"row wow animate__animated animate__fadeInUp",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.9s"}},[e._l(e.getUserList,(function(t){return a("div",{key:t.id,staticClass:"col-md-4 col-sm-6"},[a("div",{staticClass:"user-card-container"},[a("div",{staticClass:"user-card__photo"},[a("img",{staticClass:"user-card__photo-img",attrs:{src:t.photo,alt:""}})]),a("div",{staticClass:"user-card__name",class:{"user-card__name-long":t.name.length>15}},[e._v(e._s(t.name))]),a("div",{staticClass:"user-card__desc"},[e._v(e._s(t.position))]),t.email.length>=23?a("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],staticClass:"user-card__email",attrs:{title:t.email}},[e._v(e._s(t.email))]):a("div",{staticClass:"user-card__email"},[e._v(e._s(t.email))]),a("div",{staticClass:"user-card__phone"},[e._v(e._s(t.phone))])])])})),e.getSuccess&&e.getShowMoreBtn?a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-primary btn-abz mx-auto",attrs:{type:"button"},on:{click:e.showMoreUsers}},[e._v("Show more")])]):e._e()],2)])])},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"users-header"},[a("h1",{staticClass:"section-title wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.5s"}},[e._v("Our cheerful users")]),a("span",{staticClass:"section-attention wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.7s"}},[e._v("Attention! Sorting users by registration date")])])}],H={name:"Users",computed:Object(h["c"])(["getUserList","getShowMoreBtn","getSuccess","getLoading"]),mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchUsers();case 1:case"end":return t.stop()}}),t)})))()},methods:Object(h["b"])(["fetchUsers","showMoreUsers"])},Y=H,J=(a("8ec5"),Object($["a"])(Y,W,X,!1,null,null,null)),G=J.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"wow animate__animated animate__fadeIn",attrs:{id:"register"}},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row justify-content-center wow animate__animated animate__fadeInUp",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.9s"}},[a("div",{staticClass:"col-md-6"},[a("form",{staticClass:"register-form",on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputName"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":e.$v.name.$dirty&&!e.$v.name.required||e.$v.name.$dirty&&!e.$v.name.minLength||e.$v.name.$dirty&&!e.$v.name.maxLength},attrs:{type:"text",id:"inputName",placeholder:"Your name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.$v.name.$dirty&&!e.$v.name.required?a("div",{staticClass:"invalid-feedback"},[e._v("Введите имя")]):e.$v.name.$dirty&&!e.$v.name.minLength?a("div",{staticClass:"invalid-feedback"},[e._v("Имя должно быть не меньше "+e._s(e.$v.name.$params.minLength.min)+" символов. Длина имени "+e._s(e.name.length)+" символ(ов)")]):e.$v.name.$dirty&&!e.$v.name.maxLength?a("div",{staticClass:"invalid-feedback"},[e._v("Имя должно быть не больше "+e._s(e.$v.name.$params.maxLength.max)+" символов. Длина имени "+e._s(e.name.length)+" символ(ов)")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.email.$dirty&&!e.$v.email.required||e.$v.email.$dirty&&!e.$v.email.email},attrs:{type:"email",id:"inputEmail",placeholder:"Your email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.email.$dirty&&!e.$v.email.required?a("div",{staticClass:"invalid-feedback"},[e._v("Поле email не должно быть пустым")]):e.$v.email.$dirty&&!e.$v.email.email?a("div",{staticClass:"invalid-feedback"},[e._v("Введите корректный email")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPhone"}},[e._v("Phone number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",class:{"is-invalid":e.$v.phone.$dirty&&!e.$v.phone.required||e.$v.phone.$dirty&&!e.$v.phone.minLength},attrs:{type:"text",id:"inputPhone",placeholder:"+380 XX XXX XX XX"},domProps:{value:e.phone},on:{input:[function(t){t.target.composing||(e.phone=t.target.value)},e.acceptNumber]}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"phoneHelp"}},[e._v("Еnter phone number in open format")]),e.$v.phone.$dirty&&!e.$v.phone.required?a("div",{staticClass:"invalid-feedback"},[e._v("Введите номер телефона")]):e._e(),e.$v.phone.$dirty&&!e.$v.phone.minLength?a("div",{staticClass:"invalid-feedback"},[e._v("Номер телефона должен содержать "+e._s(e.$v.phone.$params.minLength.min-5)+" цифр. Сейчас введено "+e._s(e.phone.length-5))]):e._e()]),a("fieldset",{staticClass:"form-group"},[a("legend",{staticClass:"col-form-label"},[e._v("Select your position")]),e._l(e.positions.positions,(function(t){return a("div",{key:t.id,staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.positionId,expression:"positionId"}],staticClass:"form-check-input",attrs:{type:"radio",name:"radios",id:"radios"+t.id},domProps:{value:t.id,checked:1==t.id,checked:e._q(e.positionId,t.id)},on:{change:function(a){e.positionId=t.id}}}),a("label",{staticClass:"form-check-label",attrs:{for:"radios"+t.id}},[e._v(" "+e._s(t.name)+" ")])])}))],2),a("div",{staticClass:"form-group custom-file"},[a("label",{staticClass:"upload-file-label",attrs:{for:"photoFormControlFile"}},[e._v("Photo")]),a("input",{ref:"myFile",staticClass:"form-control-file custom-file-input",class:{"is-invalid":e.imageError},attrs:{type:"file",id:"photoFormControlFile",accept:"image/*"},on:{change:e.selectedFile}}),a("label",{staticClass:"custom-file-label",attrs:{for:"photoFormControlFile"}},[e._v(e._s(!e.image.name||null==e.image.name||e.fileError?"Upload your photo":e.image.name))]),e.imageError?a("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.imageError)+" ")]):e._e()]),401==e.httpStatus||409==e.httpStatus||422==e.httpStatus?a("div",{staticClass:"invalid-feedback text-center d-block mb-3"},[e._v(" "+e._s(e.msgAfterRegister)+" ")]):e._e(),e._m(1)])])])]),a("b-modal",{attrs:{centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(t){var n=t.close;return[a("h5",{staticClass:"modal-title"},[e._v("Congratulations")]),a("b-button",{attrs:{variant:"link"},on:{click:function(e){return n()}}},[a("span",[e._v("×")])])]}},{key:"modal-footer",fn:function(t){var n=t.ok;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return n()}}},[e._v(" Great ")])]}}]),model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[[a("p",{staticClass:"modal-text"},[e._v("You have successfully passed the registration")])]],2)],1)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-header"},[a("h1",{staticClass:"section-title wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.5s"}},[e._v("Register to get a work")]),a("span",{staticClass:"section-attention wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s","data-wow-delay":"0.7s"}},[e._v("Attention! After successful registration and alert, update the "),a("br"),e._v(" list of users in the block from the top")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary btn-abz",attrs:{type:"submit"}},[e._v("Sign up now")])])}],K=(a("c975"),a("a15b"),a("b0c0"),a("ac1f"),a("466d"),a("5319"),a("1276"),a("b5ae")),Q={name:"Register",data:function(){return{name:"",email:"",phone:"",positionId:"1",image:{size:"",height:"",width:"",name:null},imageError:"",token:null,fileError:!0,positions:[],formSuccess:!1,showModal:!1,msgAfterRegister:"",httpStatus:null}},validations:{name:{required:K["required"],minLength:Object(K["minLength"])(2),maxLength:Object(K["maxLength"])(60)},email:{email:K["email"],required:K["required"]},phone:{required:K["required"],minLength:Object(K["minLength"])(17)}},created:function(){this.loadPositions()},methods:{loadPositions:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.$store.getters.getPositionsUrl)).then((function(e){return e.json()}));case 2:e.positions=t.sent;case 3:case"end":return t.stop()}}),t)})))()},acceptNumber:function(){var e=this.phone.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);this.phone=e[2]?"+"+e[1]+" "+e[2]+(e[3]?" "+e[3]:"")+(e[4]?" "+e[4]:"")+(e[5]?" "+e[5]:""):e[1]},submitHandler:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$v.$invalid&&!t.fileError){e.next=6;break}return t.httpStatus=null,t.showModal=!1,t.$v.$touch(),t.fileError&&!t.imageError&&(t.imageError="Image not found"),e.abrupt("return");case 6:return t.showModal=!1,a=document.querySelector('input[type="file"]'),n=new FormData,n.append("photo",a.files[0]),n.append("name",t.name),n.append("email",t.email),n.append("phone",t.phone.split(" ").join("")),n.append("position_id",t.positionId),e.next=16,t.$store.dispatch("registerUser",n);case 16:t.httpStatus=t.$store.getters.getHttpStatus,e.t0=t.httpStatus,e.next=201===e.t0?20:401===e.t0?29:409===e.t0?32:422===e.t0?35:38;break;case 20:return t.msgAfterRegister="New user successfully registered",t.showModal=!0,a.value="",t.image.name="",t.name="",t.email="",t.phone="",t.positionId="1",e.abrupt("break",40);case 29:return t.msgAfterRegister="The token expired",t.showModal=!1,e.abrupt("break",40);case 32:return t.msgAfterRegister="User with this phone or email already exist",t.showModal=!1,e.abrupt("break",40);case 35:return t.msgAfterRegister="Validation failed",t.showModal=!1,e.abrupt("break",40);case 38:return t.showModal=!1,e.abrupt("break",40);case 40:case"end":return e.stop()}}),e)})))()},selectedFile:function(){var e=this,t=5242880,a=70,n=70,r=this.$refs.myFile.files[0];if(r&&(this.image.name=r.name),!r)return r=null,console.log(r),this.imageError="Image not found",this.fileError=!0,console.log("error Image not found  fileError: "+this.fileError);if(0!==r.type.indexOf("image/jpeg"))return r=null,this.imageError="Extension not supported. Use jpg/jpeg",this.fileError=!0,console.log("Extension not supported. Use jpg/jpeg 219 fileError: "+this.fileError);if(this.image.size=r.size,this.image.size>t)return r=null,this.imageError="The image size (".concat(this.image.size," MB) is too much (max is ").concat(t," MB)."),this.fileError=!0,console.log("Слишком большой размер файла 226 fileError: "+this.fileError);var i=new FileReader;i.readAsDataURL(r),i.onload=function(t){var i=new Image;i.onload=function(){return e.image.width=i.width,e.image.height=i.height,console.log(e.image),e.imageError="",e.fileError=!1,e.image.height>n?(r=null,e.imageError="The image height (".concat(e.image.height,"px) is too much (max is ").concat(n,"px)."),e.fileError=!0,console.log("Слишком большая высота файла 244 fileError: "+e.fileError)):e.image.width>a?(r=null,e.imageError="The image width (".concat(e.image.width,"px) is too much (max is ").concat(a,"px)."),e.fileError=!0,console.log("Слишком большая ширина файла 250 fileError: "+e.fileError)):void 0},i.src=t.target.result,e.fileError=!1},i.onerror=function(e){console.error(e)},this.fileError=!1}}},ee=Q,te=(a("c179"),Object($["a"])(ee,V,Z,!1,null,null,null)),ae=te.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer wow animate__fadeIn animate__animated"},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row align-items-center h-100"},[a("div",{staticClass:"col"},[a("div",{staticClass:"footer__text text-center wow animate__fadeInUp animate__animated"},[e._v(" © abz.agency specially for the test task ")])])])])])}],ie={name:"Footer"},se=ie,oe=(a("294d"),Object($["a"])(se,ne,re,!1,null,null,null)),le=oe.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"banner"}},[a("div",{staticClass:"container h-100"},[a("div",{staticClass:"row align-items-center h-100"},[a("div",{staticClass:"col-lg-6 col-md-8"},[a("div",{staticClass:"banner-wrapper"},[a("h1",{staticClass:"banner-title wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.5s"}},[e._v("Test assignment for Frontend Developer position")]),a("p",{staticClass:"banner-text wow animate__animated animate__fadeInDown",attrs:{"data-wow-duration":"1.8s"}},[e._v("We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")]),a("a",{staticClass:"btn btn-primary btn-abz wow animate__animated animate__slideInDown",attrs:{href:"#register","data-wow-duration":"2s"}},[e._v("Sign up now")])])])])])])}],de=a("bc1b"),me={name:"Banner",mounted:function(){var e=new de["WOW"]({boxClass:"wow",animateClass:"animate__animated",offset:0,mobile:!0,live:!1});e.init()}},fe=me,pe=(a("7724"),Object($["a"])(fe,ce,ue,!1,null,null,null)),he=pe.exports,ve={name:"Home",metaInfo:{title:"ABZ"},components:{Banner:he,Register:ae,About:T,Menu:A,Users:G,Footer:le}},ge=ve,_e=Object($["a"])(ge,d,m,!1,null,null,null),we=_e.exports;n["default"].use(u["a"]);var be=[{path:"/",name:"Home",component:we}],Ce=new u["a"]({mode:"history",base:"/vue-abz/",routes:be}),ye=Ce,xe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ke=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lds-roller"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])}],$e={name:"Loader"},Ee=$e,Se=(a("56f8"),Object($["a"])(Ee,xe,ke,!1,null,"779a6d08",null)),Oe=Se.exports;n["default"].config.productionTip=!1,n["default"].use(o["a"]),n["default"].use(i.a),n["default"].use(s["a"]),n["default"].component("Loader",Oe),new n["default"]({router:ye,store:_,render:function(e){return e(l["default"])}}).$mount("#app")},"56f8":function(e,t,a){"use strict";var n=a("09be"),r=a.n(n);r.a},6419:function(e,t,a){"use strict";var n=a("28cc"),r=a.n(n);r.a},"6bc2":function(e,t,a){},7724:function(e,t,a){"use strict";var n=a("07ea"),r=a.n(n);r.a},"7fa2":function(e,t,a){},"8ec5":function(e,t,a){"use strict";var n=a("6bc2"),r=a.n(n);r.a},"92cc":function(e,t,a){e.exports=a.p+"img/man-laptop-v1.3cdf7897.svg"},"9e83":function(e,t,a){},"9ea8":function(e,t,a){},c179:function(e,t,a){"use strict";var n=a("7fa2"),r=a.n(n);r.a},cca0:function(e,t,a){"use strict";var n=a("3687"),r=a.n(n);r.a},cd78:function(e,t,a){"use strict";var n=a("9e83"),r=a.n(n);r.a},cf25:function(e,t,a){"use strict";var n=a("fea6"),r=a.n(n);r.a},f142:function(e,t,a){"use strict";var n=a("1a27"),r=a.n(n);r.a},fea6:function(e,t,a){}});
//# sourceMappingURL=app.58f48be7.js.map