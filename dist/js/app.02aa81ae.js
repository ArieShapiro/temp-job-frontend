(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],p=0,d=[];p<r.length;p++)s=r[p],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={0:0},i=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,1]),o()})({"/7rh":function(e,t,o){},0:function(e,t,o){e.exports=o("Vtdi")},"1ttx":function(e,t,o){"use strict";var a=o("/7rh"),n=o.n(a);n.a},A4oB:function(e,t,o){},Dcbb:function(e,t,o){"use strict";var a=o("eVit"),n=o.n(a);n.a},Fsf3:function(e,t,o){},HXXM:function(e,t,o){"use strict";var a=o("A4oB"),n=o.n(a);n.a},IbvK:function(e,t,o){"use strict";var a=o("h3a7"),n=o.n(a);n.a},PWpj:function(e,t,o){"use strict";var a=o("ZZw/"),n=o.n(a);n.a},QMVz:function(e,t,o){},SfSJ:function(e,t,o){},Vtdi:function(e,t,o){"use strict";o.r(t);o("yt8O"),o("VRzm");var a=o("Kw5r"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticClass:"nav-cmp"},[o("div",{staticClass:"burger-nav"},[o("div",{staticClass:"burger-and-logo"},[o("div",{staticClass:"site-logo"},[o("i",{staticClass:"fas fa-briefcase",staticStyle:{"margin-top":"8px","font-size":"1.5em"},on:{click:e.goHome}}),o("h2",{on:{click:e.goHome}},[e._v("Temp Job")])]),e.loggedInStatusQuery?o("div",{staticClass:"hellow-user-mobile",on:{click:e.viewProfile}},[e._v("Hello "+e._s(e.loggedInProfileDataQuery.name)+"!")]):e._e(),e.loggedInStatusQuery?o("div",{staticClass:"logout-mobile",on:{click:e.logout}},[o("i",{staticClass:"fas fa-power-off po"})]):e._e(),e.burger?o("i",{staticClass:"fas fa-bars hamburger",on:{click:e.toggleNavbar}}):e._e(),e.xIcon?o("i",{staticClass:"far fa-times-circle hamburger",on:{click:e.toggleNavbar}}):e._e()]),o("div",{staticClass:"responsive-bar-container animated",class:{fadeIn:!0,fadeOut:!1}},[o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"burger-nav-element",class:{opened:e.isResponsiveBarOpened},on:{click:e.toggleNavbar}},[e._v("Home")])]),o("router-link",{attrs:{to:"/about"}},[o("div",{staticClass:"burger-nav-element",class:{opened:e.isResponsiveBarOpened},on:{click:e.toggleNavbar}},[e._v("About")])]),o("router-link",{attrs:{to:"/contact"}},[o("div",{staticClass:"burger-nav-element",class:{opened:e.isResponsiveBarOpened},on:{click:e.toggleNavbar}},[e._v("Contact")])]),o("router-link",{attrs:{to:"/sign-up"}},[o("div",{staticClass:"burger-nav-element",class:{opened:e.isResponsiveBarOpened},on:{click:e.toggleNavbar}},[e._v("SignUp")])]),o("router-link",{attrs:{to:"/login"}},[o("div",{staticClass:"burger-nav-element",class:{opened:e.isResponsiveBarOpened},on:{click:e.toggleNavbar}},[e._v("Login")])])],1)]),o("div",{staticClass:"navbar nav-cmp"},[o("i",{staticClass:"fas fa-briefcase home-icon",on:{click:e.goHome}}),o("router-link",{staticClass:"nav-element",attrs:{to:"/"}},[e._v("Home")]),o("router-link",{staticClass:"nav-element",attrs:{to:"/about"}},[e._v("About")]),o("router-link",{staticClass:"nav-element",attrs:{to:"/contact"}},[e._v("Contact")]),e.loggedInStatusQuery?e._e():o("router-link",{staticClass:"nav-element",attrs:{to:"/sign-up"}},[e._v("SignUp")]),e.loggedInStatusQuery?e._e():o("router-link",{staticClass:"nav-element",attrs:{to:"/login"}},[e._v("Login")]),e.loggedInStatusQuery?o("div",{staticClass:"hellow-user",on:{click:e.viewProfile}},[e._v("Hello "+e._s(e.loggedInProfileDataQuery.name)+"!")]):e._e(),e.loggedInStatusQuery?o("div",{staticClass:"logout",on:{click:e.logout}},[o("i",{staticClass:"fas fa-power-off"})]):e._e(),o("div",{staticClass:"empty-nav-element nav-cmp"})],1)]),o("router-view")],1)},i=[],s=o("GUC0"),r=o.n(s),l={data:function(){return{burger:!0,xIcon:!1,isResponsiveBarOpened:!1,navGo:!0}},methods:{toggleNavbar:function(){this.isResponsiveBarOpened=!this.isResponsiveBarOpened,this.burger=!this.burger,this.xIcon=!this.xIcon},goHome:function(){this.$router.push("/"),ye.$emit("homeIconClicked")},viewProfile:function(){this.updateTempData("view/edit profile!"),this.$router.push("/my-profile")},logout:function(){r()("Bye, until next time :)",{buttons:!1,timer:4e3}),this.updateLoggenInStatus(""),this.updateLoggedInProfileData(""),this.$router.push("/")},updateLoggedInProfileData:function(e){this.$store.commit({type:"updateLoggedInProfileData",profileData:e})},updateLoggenInStatus:function(e){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:e})},updateTempData:function(e){this.$store.commit({type:"updateTempData",newData:e})}},computed:{loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery},loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},created:function(){},watch:{loggedInStatusQuery:function(){}}},c=l,u=(o("XDEY"),o("KHd+")),p=Object(u["a"])(c,n,i,!1,null,null,null),d=p.exports,m=o("jE9Z"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"home"},[o("Filtering",{staticClass:"filtering"}),o("RenderedJobs"),o("i",{staticClass:"fas fa-angle-double-up animated bounceIn",attrs:{id:"myBtn"},on:{click:e.scrollToTop}})],1)},h=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"filter-conteiner"},[o("div",{staticClass:"search"},[o("i",{staticClass:"fas fa-search"}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"Job Title, Keywords or Company"},domProps:{value:e.searchInput},on:{input:[function(t){t.target.composing||(e.searchInput=t.target.value)},function(t){e.filterBySubject()}]}})]),o("div",{staticClass:"search-field-button"},[o("div",{staticClass:"search location"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.locationInput,expression:"locationInput"}],attrs:{type:"text",placeholder:"Location"},domProps:{value:e.locationInput},on:{input:function(t){t.target.composing||(e.locationInput=t.target.value)}}})]),o("button",{on:{click:function(t){e.filterByLocation()}}},[e._v("Search")])])])},v=[],b={data:function(){return{searchInput:"",locationInput:""}},methods:{filterBySubject:function(){ye.$emit("searchInputChanged",this.searchInput)},filterByLocation:function(){ye.$emit("searchByLocationLunched",this.locationInput)}},computed:{},watch:{searchInput:function(){}}},y=b,w=(o("wYZZ"),Object(u["a"])(y,g,v,!1,null,null,null)),_=w.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"home-background"},[e.throbber?o("div",{staticClass:"throbber"},[o("i",{staticClass:"fa fa-refresh fa-spin"})]):e._e(),o("ul",e._l(e.displayFilteredJobs,function(e,t){return o("li",{key:t},[o("JobItem",{attrs:{job:e}})],1)}))])},I=[],P=(o("SRfc"),o("Oyvg"),o("vDqi")),D=o.n(P),k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"rendered-job"},[e.job?o("div",{on:{click:e.descriptionToggle}},[o("div",[o("h1",{staticClass:"job-title"},[e._v(e._s(e.job.title))])]),o("div",{staticClass:"company-location"},[o("div",[o("h2",[e._v(e._s(e.job.company)+"  "),o("span",[e._v("-")])])]),o("div",[o("h2",{staticClass:"job-loc"},[e._v(e._s(e.job.location))])])]),o("div",[e._v(e._s(e.job.createdAt))]),e.isOpen?o("div",{staticClass:"animated fadeIn",class:{fadeOut:e.fadeOut}},[o("div",{staticClass:"description"},[e._v(e._s(e.job.description))]),e.isApplicationFormOpened?o("h3",{staticClass:"fill-in"},[e._v("Fill in your details to apply:")]):e._e(),e.isApplicationFormOpened?o("div",{staticClass:"application-form animated fadeIn"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.applicationFullName,expression:"applicationFullName"}],attrs:{type:"text",placeholder:"Your full name",required:""},domProps:{value:e.applicationFullName},on:{click:e.stopPropo,input:function(t){t.target.composing||(e.applicationFullName=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.applicationEmail,expression:"applicationEmail"}],attrs:{type:"text",placeholder:"Your email",required:""},domProps:{value:e.applicationEmail},on:{click:e.stopPropo,input:function(t){t.target.composing||(e.applicationEmail=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.aboutYourself,expression:"aboutYourself"}],staticClass:"about-yourself",attrs:{type:"text",placeholder:"About youself, your experience, relavant links...",required:""},domProps:{value:e.aboutYourself},on:{click:e.stopPropo,input:function(t){t.target.composing||(e.aboutYourself=t.target.value)}}}),o("button",{staticClass:"upload-cv-btn",on:{click:e.uploadCV}},[e._v("Upload your CV"),o("i",{staticClass:"fas fa-file-upload cv-icon"})]),o("button",{staticClass:"apply-btn",on:{click:e.submitApplication}},[e._v("Submit Application")])]):e._e(),e.isApplicationFormOpened?e._e():o("button",{on:{click:e.apply}},[e._v("Apply")])]):e._e()]):e._e()])},j=[],x=(o("rGqo"),{props:["job"],data:function(){return{fadeOut:!1,isApplicationFormOpened:!1,isOpen:!1,applicationFullName:"",applicationEmail:"",aboutYourself:"",jobData:this.job}},methods:{descriptionToggle:function(){var e=this;if(this.isOpen,this.isOpen)return this.fadeOut=!this.fadeOut,void setTimeout(function(){e.isOpen=!e.isOpen,e.fadeOut=!e.fadeOut},500);this.isOpen=!this.isOpen},apply:function(e){e.stopPropagation(),this.isApplicationFormOpened=!0},uploadCV:function(e){e.stopPropagation()},submitApplication:function(e){var t=this;e.stopPropagation();var o,a={name:this.applicationFullName,email:this.applicationEmail,aboutYourself:this.aboutYourself,appliedFor:this.jobData.id},n="/employers";D.a.get("".concat(n)).then(function(e){e.data.forEach(function(e){e.offeredJobs.forEach(function(i){i.id===t.job.id&&(o=JSON.parse(JSON.stringify(e)),delete o._id,o.applicants.push(a),o.id=t._makeId(),D.a.post("".concat(n),o).then(function(t){var o=e.id;D.a.delete("".concat(n,"?id=").concat(o)).then(function(){swal("Your application for this job was submitted successfuly!","","success")}).catch()}).catch())})})}).catch(),this.isOpen=!1,this.$router.push("/")},stopPropo:function(e){e.stopPropagation()},_makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}},computed:{loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},created:function(){var e=this;ye.$on("openJobCardClicked",function(){e.isOpen=!1})}}),O=x,J=(o("PWpj"),Object(u["a"])(O,k,j,!1,null,null,null)),N=J.exports,S={components:{JobItem:N},data:function(){return{jobs:[],jobsToDisplay:"",locationToDisplay:"",throbber:!0}},methods:{},computed:{displayFilteredJobs:function(){if(this.locationToDisplay){e=this.locationToDisplay,t=new RegExp(e,"gi");return this.jobs.filter(function(e){return e.location.match(t)})}var e=this.jobsToDisplay,t=new RegExp(e,"gi");return this.jobs.filter(function(e){return e.title.match(t)||e.company.match(t)||e.location.match(t)||e.description.match(t)})},jobsQuery:function(){return this.$store.getters.jobsQuery},loadJobsFromStorage:function(){return this.$store.getters.loadJobsFromStorage}},created:function(){var e=this;ye.$on("searchInputChanged",function(t){e.jobsToDisplay=t}),ye.$on("searchByLocationLunched",function(t){e.locationToDisplay=t}),ye.$on("homeIconClicked",function(){e.jobsToDisplay="",e.locationToDisplay=""}),ye.$on("jobAddedToDB",function(){var t="/jobs";D.a.get("".concat(t)).then(function(t){e.jobs=t.data})});var t="/jobs";D.a.get("".concat(t)).then(function(t){e.throbber=!1,e.jobs=t.data})}},E=S,Q=(o("ow/s"),Object(u["a"])(E,C,I,!1,null,"8ecbdca4",null)),$=Q.exports,L={name:"home",components:{Filtering:_,RenderedJobs:$},methods:{scrollToTop:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(this.scrollToTop),window.scrollTo(0,e-e/5))}},created:function(){}},T=L,F=(o("IbvK"),Object(u["a"])(T,f,h,!1,null,null,null)),A=F.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"about"},[o("h1",{staticClass:"about-us-title"},[e._v("About TempJob")]),o("p",{staticClass:"about-content"},[e._v("\n    TempJob is possibly the #1 job site in the world with  unique \n    visitors. TempJob strives to put job seekers first, giving \n    them free access to search for jobs, post resumes, and research companies. \n    Every day, we connect people to new opportunities.")]),o("p",{staticClass:"about-content",staticStyle:{"margin-top":"20px"}},[e._v('Contacting as many people as possible is a highly \n      effective way to find a job. It is estimated that 50% or higher of all jobs are found through \n      networking.\n\n     Job recruiters and decision makers are increasingly using online social networking sites to \n     gather information about job applicants, according to a mid-2011 Jobvite survey of 800 employers\n      in the US.\n\n     Likewise, job seekers are beginning to use social networking sites to advertise their skills \n     and post resumes. Today, job seekers can use resources such as Google+’s Circles, Facebook’s \n     BranchOut, LinkedIn’s InMaps, and Twitter’s Lists to make employers notice them in a unique way.\n      In 2014, using these social media networks has led to 1 of 6 job seekers finding employment.\n\n     Job seekers need to begin to pay more attention to what employers and recruiters find when they \n     do their pre-interview information gathering about applicants, according to this 2010 study by\n      Microsoft, "Online Reputation in a Connected World".')]),o("h2",[e._v("Our People")]),o("p",{staticClass:"about-content"},[e._v("At TempJob, our mission is to help people get jobs. We have more than ever \n    global employees passionately pursuing this purpose and improving the \n    recruitment journey through real stories and data. We foster a collaborative \n    workplace that strives to create the best experience for job seekers.\n  ")])])}],M=(o("lTO6"),{}),R=Object(u["a"])(M,B,Y,!1,null,null,null),U=R.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h1",[e._v("Contact Us!")]),o("div",{staticClass:"contact-icons"},[o("div",{staticClass:"phone"},[o("i",{staticClass:"fas fa-mobile-alt i"}),o("h5",[e._v("\n        Call us at\n        04-8325877\n      ")])]),o("div",{staticClass:"adress"},[o("i",{staticClass:"fas fa-map-marker-alt i"}),o("h5",[e._v("4 Habonim St.")]),o("h5",[e._v("Ramat Gan, Israel")])]),o("div",{staticClass:"email"},[o("i",{staticClass:"fas fa-envelope i"}),o("h5",[e._v("Email us at")]),o("h5",[e._v("aryehshapiro@gmail.com")])])]),o("div",{staticClass:"contact-form"},[o("input",{staticClass:"name-input",attrs:{type:"text",placeholder:"Name"}}),o("input",{staticClass:"email-input",attrs:{type:"email",placeholder:"Email"}}),o("input",{staticClass:"message-input",attrs:{type:"text",placeholder:"Message"}}),o("button",{attrs:{disabled:"disabled"}},[e._v("Send")])])])}],q={data:function(){return{}},created:function(){}},V=q,z=(o("ZP2P"),Object(u["a"])(V,H,Z,!1,null,"6e009b07",null)),K=z.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticClass:"sign-up-form"},[o("h1",[e._v("Sign Up ")]),o("small",[e._v("(as an employer. If you are looking for a job, you don't need to sign up)")]),e.errEmail?o("p",[e._v("Please type a valid email")]):e._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errPassword?o("p",[e._v("The password should contain at least 6 characters")]):e._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("button",{on:{click:e.signUp}},[e._v("Sign Up")])])])},G=[],W=(o("Z2Ku"),o("L9s1"),{data:function(){return{email:"",password:"",errEmail:!1,errPassword:!1}},methods:{updateTempData:function(e){this.$store.commit({type:"updateTempData",newData:e})},signUp:function(){if(!this.email.includes("@")||!this.email.includes("."))return this.errEmail=!0,void(this.password.length<6&&(this.errPassword=!0));if(this.password.length<6)this.errPassword=!0;else{var e=["newSignUp",this.email,this.password];this.updateTempData(e),this.$router.push("/my-profile")}}},computed:{loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery}},created:function(){},watch:{}}),ee=W,te=(o("Dcbb"),Object(u["a"])(ee,X,G,!1,null,null,null)),oe=te.exports,ae=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",["newSignUp"===e.tempDataQuery[0]?o("div",{staticClass:"employer-sing-up-form"},[o("h2",[e._v("Please complete your profile:")]),e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Full name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone number"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],staticClass:"company",attrs:{type:"text",placeholder:"Company"},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.about,expression:"about"}],staticClass:"about",attrs:{type:"text",placeholder:"About"},domProps:{value:e.about},on:{input:function(t){t.target.composing||(e.about=t.target.value)}}}),e.newJobFormOpened?o("div",{staticClass:"added-jobs added-job"},[o("h2",[e._v("New Job:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"title",placeholder:"Title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"location",placeholder:"Location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"description",attrs:{type:"description",placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),o("br")]):e._e(),e.newJobFormOpened?e._e():o("button",{on:{click:e.addJobButtonClicked}},[e._v("Post New Job")]),e.errNewJobFields?o("p",[e._v("Please fill in all required New Job fields")]):e._e(),o("button",{on:{click:e.submitEmployer}},[e._v("Submit")])]):e._e(),e.editProfile?o("div",{staticClass:"edit-form"},[o("h1",[e._v("My Profile")]),e._m(1),o("button",{staticClass:"edit-btn",on:{click:e.editClicked}},[e._v("Edit Profile")]),e.nonEdit?o("p",{staticClass:"non-edit"},[e._v("Full Name: "+e._s(e.name))]):o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Full name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.nonEdit?o("p",{staticClass:"non-edit"},[e._v("Phone number: "+e._s(this.phone))]):o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone number"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e.nonEdit?o("p",{staticClass:"non-edit"},[e._v("Email: "+e._s(this.email))]):o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.nonEdit?o("div",{staticClass:"non-edit"},[o("p",[e._v("Password:")]),e._l(e.passLength,function(t,a){return o("p",{key:a},[e._v("*")])})],2):o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.nonEdit?o("p",{staticClass:"non-edit"},[e._v("Company: "+e._s(e.company))]):o("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],staticClass:"company",attrs:{type:"text",placeholder:"Company"},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),e.nonEdit?o("p",{staticClass:"non-edit"},[e._v("About: "+e._s(e.about))]):o("input",{directives:[{name:"model",rawName:"v-model",value:e.about,expression:"about"}],staticClass:"about",attrs:{type:"text",placeholder:"About"},domProps:{value:e.about},on:{input:function(t){t.target.composing||(e.about=t.target.value)}}}),o("div",{staticClass:"jobs-and-applicants"},[o("div",{staticClass:"my-jobs"},[o("h3",[e._v("My Jobs:")]),e.loggedInProfileDataQuery.offeredJobs?o("ul",e._l(e.loggedInProfileDataQuery.offeredJobs,function(t,a){return o("li",{key:a},[o("h4",[e._v(e._s(t.title))]),o("button",{staticClass:"del-btn",on:{click:function(o){e.deleteJob(t.id,e.loggedInProfileDataQuery.id)}}},[o("i",{staticClass:"fas fa-trash-alt"})]),o("h4",[e._v(" "+e._s(t.company))]),o("h4",[e._v(" "+e._s(t.location))]),o("p",[e._v(" "+e._s(t.description))])])})):e._e()]),o("div",{staticClass:"my-applicants"},[o("h3",[e._v("Applications for my job")]),e.loggedInProfileDataQuery.applicants?o("ul",e._l(e.loggedInProfileDataQuery.applicants,function(t,a){return o("li",{key:a},[o("h4",[e._v(e._s(t.name))]),o("button",{staticClass:"del-btn",on:{click:function(t){e.deleteApplicant(a,e.loggedInProfileDataQuery.id)}}},[o("i",{staticClass:"fas fa-trash-alt"})]),o("h4",[e._v(" "+e._s(t.email))]),o("p",[e._v(" "+e._s(t.aboutYourself))]),o("p",[e._v(" "+e._s(t.appliedFor))])])})):e._e()])]),e.newJobFormOpened?o("div",{staticClass:"added-jobs added-job"},[o("h2",[e._v("New Job:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"title",placeholder:"Title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"location",placeholder:"Location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"description",attrs:{type:"description",placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),o("br")]):e._e(),e.newJobFormOpened?e._e():o("button",{on:{click:e.addJobButtonClicked}},[e._v("Post New Job")]),e.nonEdit?e._e():o("button",{on:{click:e.updateEmployer}},[e._v("Save Changes")])]):e._e()])},ne=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"avatar-and-btn-container"},[o("div",{staticClass:"avatar"}),o("button",{staticClass:"upload-image"},[e._v("Upload Image")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"avatar-and-btn-container"},[o("div",{staticClass:"avatar"}),o("button",{staticClass:"upload-image"},[e._v("Upload Image")])])}],ie=(o("f3/d"),{data:function(){return{errNewJobFields:!1,nonEdit:!1,passLength:[],editProfile:!1,isNewSignIn:!1,newJobFormOpened:!1,buttonsDisplayed:!0,employerDisplayed:!1,name:"",phone:"",email:"",image:"",password:"",company:"",about:"",title:"",location:"",description:"",newJob:""}},methods:{deleteApplicant:function(e,t){var o=this,a=JSON.parse(JSON.stringify(this.loggedInProfileDataQuery));a.applicants.splice(e,1);var n="/employers";D.a.delete("".concat(n,"?id=").concat(t)).then(function(){D.a.post("".concat(n),a).then(function(e){o.updateLoggedInProfileData(e.data)}).catch(function(e){})}).catch(function(e){})},deleteJob:function(e,t){var o=this;swal({title:"Are you sure you want to delete this job?",text:"Once deleted, you will not be able to recover this!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(a){if(a){var n="/jobs";D.a.delete("".concat(n,"?id=").concat(e)).then(function(e){}).catch(function(e){});var i,s=JSON.parse(JSON.stringify(o.loggedInProfileDataQuery));s.offeredJobs.forEach(function(t){t.id===e&&(i=s.offeredJobs.indexOf(t))}),s.offeredJobs.splice(i,1),n="/employers",D.a.delete("".concat(n,"?id=").concat(t)).then(function(){D.a.post("".concat(n),s).then(function(e){o.updateLoggedInProfileData(e.data),swal("Poof! Your job has been deleted!",{icon:"success"})}).catch(function(e){})}).catch(function(e){})}else swal("Your job is safe!")})},editClicked:function(){this.nonEdit=!1},addJobButtonClicked:function(){this.newJobFormOpened=!0,this.nonEdit=!1},submitEmployer:function(){var e=this;if(this.newJobFormOpened){if(""===this.title||""===this.location||""===this.description)return void(this.errNewJobFields=!0);this.newJob={title:this.title,createdAt:"",location:this.location,company:this.company,description:this.description,jobTypeIcon:"",id:this._makeId()};var t="/jobs";D.a.post("".concat(t),this.newJob).then(function(e){ye.$emit("jobAddedToDB")}).catch(function(e){})}var o={name:this.name,company:this.company,rating:-1,phone:this.phone,email:this.email,about:this.about,offeredJobs:[],image:"",password:this.password,applicants:[],id:this._makeId(),isNowCreated:!0};this.newJobFormOpened&&o.offeredJobs.push(this.newJob),t="/employers",D.a.post("".concat(t),o).then(function(t){swal("Your profile was created successfuly!","","success"),e.updateLoggedInProfileData(t.data)}),this.updateLoggenInStatus(this.name),ye.$emit("someoneLoggedIn",this.name),this.$router.push("/")},updateEmployer:function(){var e=this;if(this.newJobFormOpened){this.newJob={title:this.title,location:this.location,description:this.description,id:this._makeId(),company:this.company};var t="/jobs";D.a.post("".concat(t),this.newJob).then(function(e){}).catch(function(e){})}var o={offeredJobs:this.loggedInProfileDataQuery.offeredJobs,applicants:this.loggedInProfileDataQuery.applicants,name:this.name,company:this.company,rating:this.loggedInProfileDataQuery.rating,phone:this.phone,email:this.email,about:this.about,image:this.loggedInProfileDataQuery.image,password:this.password,id:this._makeId(),isNowCreated:!1};this.newJobFormOpened&&o.offeredJobs.push(this.newJob);var a=this.loggedInProfileDataQuery.id;t="/employers",D.a.delete("".concat(t,"?id=").concat(a)).then().catch(),D.a.post("".concat(t),o).then(function(t){e.updateLoggedInProfileData(t.data)}).catch(),ye.$emit("jobAddedToDB"),this.$router.push("/")},updateLoggenInStatus:function(e){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:e})},updateLoggedInProfileData:function(e){this.$store.commit({type:"updateLoggedInProfileData",profileData:e})},_makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}},computed:{tempDataQuery:function(){return this.$store.getters.tempDataQuery},loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery},loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},watch:{},created:function(){for(var e=0;e<this.password.length;e++)this.passLength.push("*");"view/edit profile!"===this.tempDataQuery?(this.editProfile=!0,this.nonEdit=!0,this.name=this.loggedInProfileDataQuery.name,this.phone=this.loggedInProfileDataQuery.phone,this.email=this.loggedInProfileDataQuery.email,this.password=this.loggedInProfileDataQuery.password,this.company=this.loggedInProfileDataQuery.company,this.about=this.loggedInProfileDataQuery.about):(this.email=this.tempDataQuery[1],this.password=this.tempDataQuery[2])}}),se=ie,re=(o("HXXM"),Object(u["a"])(se,ae,ne,!1,null,null,null)),le=re.exports,ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticClass:"login-form"},[o("h1",[e._v("Login")]),e.accessDenied?o("p",{staticClass:"access-denied"},[e._v("Email or password are incorrect. Please try again.")]):e._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("button",{on:{click:e.login}},[e._v("Login")])])])},ue=[],pe={data:function(){return{email:"",password:"",accessDenied:null,userProfile:null}},methods:{updateLoggenInStatus:function(e){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:e})},login:function(){var e=this,t="/employers";D.a.get("".concat(t)).then(function(t){var o=null;t.data.forEach(function(t){t.email===e.email&&t.password===e.password&&(!0,o=t.name,e.userProfile=t,e.updateLoggedInProfileData(t),e.updateLoggenInStatus(o),ye.$emit("someoneLoggedIn",o),e.$router.push("/"))}),e.accessDenied=!0,e.email="",e.password=""})},updateLoggedInProfileData:function(e){this.$store.commit({type:"updateLoggedInProfileData",profileData:e})}},computed:{loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}}},de=pe,me=(o("1ttx"),Object(u["a"])(de,ce,ue,!1,null,null,null)),fe=me.exports;a["a"].use(m["a"]);var he=new m["a"]({routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:U},{path:"/contact",name:"contact",component:K},{path:"/sign-up",name:"sign-up",component:oe},{path:"/my-profile",name:"my-profile",component:le},{path:"/login",name:"login",component:fe}]}),ge=o("L2JU");a["a"].use(ge["a"]);var ve=new ge["a"].Store({state:{tempData:"",loggedIn:"",loggedInProfileData:""},mutations:{updateLoggenInStatus:function(e,t){var o=t.newLoggedIn;e.loggedIn=o},updateTempData:function(e,t){var o=t.newData;e.tempData=o},updateLoggedInProfileData:function(e,t){var o=t.profileData;e.loggedInProfileData=o}},getters:{tempDataQuery:function(e){return e.tempData},loggedInStatusQuery:function(e){return e.loggedIn},loggedInProfileDataQuery:function(e){return e.loggedInProfileData}},actions:{},created:function(){}}),be=o("lIOY");Object(be["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o.d(t,"bus",function(){return ye}),a["a"].config.productionTip=!1;var ye=new a["a"];new a["a"]({router:he,store:ve,render:function(e){return e(d)}}).$mount("#app")},XDEY:function(e,t,o){"use strict";var a=o("Fsf3"),n=o.n(a);n.a},ZP2P:function(e,t,o){"use strict";var a=o("rzxx"),n=o.n(a);n.a},"ZZw/":function(e,t,o){},eVit:function(e,t,o){},gtzs:function(e,t,o){},h3a7:function(e,t,o){},lTO6:function(e,t,o){"use strict";var a=o("gtzs"),n=o.n(a);n.a},"ow/s":function(e,t,o){"use strict";var a=o("QMVz"),n=o.n(a);n.a},rzxx:function(e,t,o){},wYZZ:function(e,t,o){"use strict";var a=o("SfSJ"),n=o.n(a);n.a}});
//# sourceMappingURL=app.02aa81ae.js.map