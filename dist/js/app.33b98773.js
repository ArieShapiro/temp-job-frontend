(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)s=r[p],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={0:0},i=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,1]),o()})({"/7rh":function(t,e,o){},0:function(t,e,o){t.exports=o("Vtdi")},"1ttx":function(t,e,o){"use strict";var a=o("/7rh"),n=o.n(a);n.a},A4oB:function(t,e,o){},Dcbb:function(t,e,o){"use strict";var a=o("eVit"),n=o.n(a);n.a},Fsf3:function(t,e,o){},HXXM:function(t,e,o){"use strict";var a=o("A4oB"),n=o.n(a);n.a},PWpj:function(t,e,o){"use strict";var a=o("ZZw/"),n=o.n(a);n.a},QhSI:function(t,e,o){},SfSJ:function(t,e,o){},Vtdi:function(t,e,o){"use strict";o.r(e);o("yt8O"),o("VRzm");var a=o("Kw5r"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"nav-cmp"},[o("div",{staticClass:"burger-nav"},[o("div",{staticClass:"burger-and-logo"},[o("i",{staticClass:"fas fa-bars hamburger",on:{click:t.openBurgerBar}}),t.loggedInStatusQuery?o("div",{staticClass:"hellow-user-mobile",on:{click:t.viewProfile}},[t._v("Hello "+t._s(t.loggedInProfileDataQuery.name)+"!")]):t._e(),t.loggedInStatusQuery?o("div",{staticClass:"logout-mobile",on:{click:t.logout}},[o("i",{staticClass:"fas fa-power-off po"})]):t._e(),o("i",{staticClass:"fas fa-briefcase",staticStyle:{"margin-top":"8px","font-size":"1.5em"},on:{click:t.goHome}})]),o("div",{staticClass:"responsive-bar-container opened"},[o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"burger-nav-element",class:{opened:t.isResponsiveBarOpened},on:{click:t.openBurgerBar}},[t._v("Home")])]),o("router-link",{attrs:{to:"/about"}},[o("div",{staticClass:"burger-nav-element",class:{opened:t.isResponsiveBarOpened},on:{click:t.openBurgerBar}},[t._v("About")])]),o("router-link",{attrs:{to:"/contact"}},[o("div",{staticClass:"burger-nav-element",class:{opened:t.isResponsiveBarOpened},on:{click:t.openBurgerBar}},[t._v("Contact")])]),o("router-link",{attrs:{to:"/sign-up"}},[o("div",{staticClass:"burger-nav-element",class:{opened:t.isResponsiveBarOpened},on:{click:t.openBurgerBar}},[t._v("SignUp")])]),o("router-link",{attrs:{to:"/login"}},[o("div",{staticClass:"burger-nav-element",class:{opened:t.isResponsiveBarOpened},on:{click:t.openBurgerBar}},[t._v("Login")])])],1)]),o("div",{staticClass:"navbar nav-cmp"},[o("i",{staticClass:"fas fa-briefcase home-icon",on:{click:t.goHome}}),o("router-link",{staticClass:"nav-element",attrs:{to:"/"}},[t._v("Home")]),o("router-link",{staticClass:"nav-element",attrs:{to:"/about"}},[t._v("About")]),o("router-link",{staticClass:"nav-element",attrs:{to:"/contact"}},[t._v("Contact")]),t.loggedInStatusQuery?t._e():o("router-link",{staticClass:"nav-element",attrs:{to:"/sign-up"}},[t._v("SignUp")]),t.loggedInStatusQuery?t._e():o("router-link",{staticClass:"nav-element",attrs:{to:"/login"}},[t._v("Login")]),t.loggedInStatusQuery?o("div",{staticClass:"hellow-user",on:{click:t.viewProfile}},[t._v("Hello "+t._s(t.loggedInProfileDataQuery.name)+"!")]):t._e(),t.loggedInStatusQuery?o("div",{staticClass:"logout",on:{click:t.logout}},[o("i",{staticClass:"fas fa-power-off"})]):t._e(),o("div",{staticClass:"empty-nav-element nav-cmp"})],1)]),o("router-view")],1)},i=[],s=o("GUC0"),r=o.n(s),l={data:function(){return{isResponsiveBarOpened:!1}},methods:{openBurgerBar:function(){this.isResponsiveBarOpened=!this.isResponsiveBarOpened},goHome:function(){this.$router.push("/"),bt.$emit("homeIconClicked")},viewProfile:function(){this.updateTempData("view/edit profile!"),this.$router.push("/my-profile")},logout:function(){r()("Bye, until next time :)",{buttons:!1,timer:4e3}),this.updateLoggenInStatus(""),this.updateLoggedInProfileData(""),this.$router.push("/")},updateLoggedInProfileData:function(t){this.$store.commit({type:"updateLoggedInProfileData",profileData:t})},updateLoggenInStatus:function(t){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:t})},updateTempData:function(t){this.$store.commit({type:"updateTempData",newData:t})}},computed:{loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery},loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},created:function(){},watch:{loggedInStatusQuery:function(){}}},c=l,u=(o("XDEY"),o("KHd+")),p=Object(u["a"])(c,n,i,!1,null,null,null),d=p.exports,m=o("jE9Z"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home"},[o("Filtering",{staticClass:"filtering"}),o("RenderedJobs")],1)},g=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"filter-conteiner"},[o("div",{staticClass:"search"},[o("i",{staticClass:"fas fa-search"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"Job Title, Keywords or Company"},domProps:{value:t.searchInput},on:{input:[function(e){e.target.composing||(t.searchInput=e.target.value)},function(e){t.filterBySubject()}]}})]),o("div",{staticClass:"search-field-button"},[o("div",{staticClass:"search location"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.locationInput,expression:"locationInput"}],attrs:{type:"text",placeholder:"Location"},domProps:{value:t.locationInput},on:{input:function(e){e.target.composing||(t.locationInput=e.target.value)}}})]),o("button",{on:{click:function(e){t.filterByLocation()}}},[t._v("Search")])])])},v=[],b={data:function(){return{searchInput:"",locationInput:""}},methods:{filterBySubject:function(){bt.$emit("searchInputChanged",this.searchInput)},filterByLocation:function(){bt.$emit("searchByLocationLunched",this.locationInput)}},computed:{},watch:{searchInput:function(){}}},y=b,w=(o("wYZZ"),Object(u["a"])(y,h,v,!1,null,null,null)),_=w.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[t.throbber?o("div",{staticClass:"throbber"},[o("i",{staticClass:"fa fa-refresh fa-spin"})]):t._e(),o("ul",t._l(t.displayFilteredJobs,function(t,e){return o("li",{key:e},[o("JobItem",{attrs:{job:t}})],1)}))])},I=[],P=(o("SRfc"),o("Oyvg"),o("vDqi")),D=o.n(P),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"rendered-job"},[t.job?o("div",{on:{click:t.descriptionToggle}},[o("div",[o("h1",{staticClass:"job-title"},[t._v(t._s(t.job.title))])]),o("div",{staticClass:"company-location"},[o("div",[o("h2",[t._v(t._s(t.job.company)+"  "),o("span",[t._v("-")])])]),o("div",[o("h2",{staticClass:"job-loc"},[t._v(t._s(t.job.location))])])]),o("div",[t._v(t._s(t.job.createdAt))]),t.isOpen?o("div",[o("div",{staticClass:"description"},[t._v(t._s(t.job.description))]),t.isApplicationFormOpened?o("h3",{staticClass:"fill-in"},[t._v("Fill in your details to apply:")]):t._e(),t.isApplicationFormOpened?o("div",{staticClass:"application-form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.applicationFullName,expression:"applicationFullName"}],attrs:{type:"text",placeholder:"Your full name"},domProps:{value:t.applicationFullName},on:{click:t.stopPropo,input:function(e){e.target.composing||(t.applicationFullName=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.applicationEmail,expression:"applicationEmail"}],attrs:{type:"text",placeholder:"Your email"},domProps:{value:t.applicationEmail},on:{click:t.stopPropo,input:function(e){e.target.composing||(t.applicationEmail=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.aboutYourself,expression:"aboutYourself"}],staticClass:"about-yourself",attrs:{type:"text",placeholder:"About youself, your experience, relavant links..."},domProps:{value:t.aboutYourself},on:{click:t.stopPropo,input:function(e){e.target.composing||(t.aboutYourself=e.target.value)}}}),o("button",{staticClass:"upload-cv-btn",on:{click:t.uploadCV}},[t._v("Upload your CV"),o("i",{staticClass:"fas fa-file-upload cv-icon"})]),o("button",{staticClass:"apply-btn",on:{click:t.submitApplication}},[t._v("Submit Application")])]):t._e(),t.isApplicationFormOpened?t._e():o("button",{on:{click:t.apply}},[t._v("Apply")])]):t._e()]):t._e()])},k=[],x=(o("rGqo"),{props:["job"],data:function(){return{isApplicationFormOpened:!1,isOpen:!1,applicationFullName:"",applicationEmail:"",aboutYourself:"",jobData:this.job}},methods:{descriptionToggle:function(){this.isOpen=!this.isOpen},apply:function(t){t.stopPropagation(),this.isApplicationFormOpened=!0},uploadCV:function(t){t.stopPropagation()},submitApplication:function(t){var e=this;t.stopPropagation();var o,a={name:this.applicationFullName,email:this.applicationEmail,aboutYourself:this.aboutYourself,appliedFor:this.jobData.id},n="/employers";D.a.get("".concat(n)).then(function(t){t.data.forEach(function(t){t.offeredJobs.forEach(function(i){i.id===e.job.id&&(o=JSON.parse(JSON.stringify(t)),delete o._id,o.applicants.push(a),o.id=e._makeId(),D.a.post("".concat(n),o).then(function(e){var o=t.id;D.a.delete("".concat(n,"?id=").concat(o)).then(function(){swal("Your application for this job was submitted successfuly!","","success")}).catch()}).catch())})})}).catch(),this.isOpen=!1,this.$router.push("/")},stopPropo:function(t){t.stopPropagation()},_makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=o.charAt(Math.floor(Math.random()*o.length));return e}},computed:{loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},created:function(){}}),J=x,O=(o("PWpj"),Object(u["a"])(J,j,k,!1,null,null,null)),S=O.exports,Q={components:{JobItem:S},data:function(){return{jobs:[],jobsToDisplay:"",locationToDisplay:"",throbber:!0}},methods:{},computed:{displayFilteredJobs:function(){if(this.locationToDisplay){t=this.locationToDisplay,e=new RegExp(t,"gi");return this.jobs.filter(function(t){return t.location.match(e)})}var t=this.jobsToDisplay,e=new RegExp(t,"gi");return this.jobs.filter(function(t){return t.title.match(e)||t.company.match(e)||t.location.match(e)||t.description.match(e)})},jobsQuery:function(){return this.$store.getters.jobsQuery},loadJobsFromStorage:function(){return this.$store.getters.loadJobsFromStorage}},created:function(){var t=this;bt.$on("searchInputChanged",function(e){t.jobsToDisplay=e}),bt.$on("searchByLocationLunched",function(e){t.locationToDisplay=e}),bt.$on("homeIconClicked",function(){t.jobsToDisplay="",t.locationToDisplay=""}),bt.$on("jobAddedToDB",function(){var e="/jobs";D.a.get("".concat(e)).then(function(e){t.jobs=e.data})});var e="/jobs";D.a.get("".concat(e)).then(function(e){t.throbber=!1,t.jobs=e.data})}},E=Q,N=(o("pwH0"),Object(u["a"])(E,C,I,!1,null,"41b8a426",null)),$=N.exports,L={name:"home",components:{Filtering:_,RenderedJobs:$},created:function(){}},F=L,B=(o("zMuA"),Object(u["a"])(F,f,g,!1,null,null,null)),T=B.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("h1",{staticClass:"about-us-title"},[t._v("About TempJob")]),o("p",{staticClass:"about-content"},[t._v("\n    TempJob is possibly the #1 job site in the world with  unique \n    visitors. TempJob strives to put job seekers first, giving \n    them free access to search for jobs, post resumes, and research companies. \n    Every day, we connect people to new opportunities.")]),o("p",{staticClass:"about-content",staticStyle:{"margin-top":"20px"}},[t._v('Contacting as many people as possible is a highly \n      effective way to find a job. It is estimated that 50% or higher of all jobs are found through \n      networking.\n\n     Job recruiters and decision makers are increasingly using online social networking sites to \n     gather information about job applicants, according to a mid-2011 Jobvite survey of 800 employers\n      in the US.\n\n     Likewise, job seekers are beginning to use social networking sites to advertise their skills \n     and post resumes. Today, job seekers can use resources such as Google+’s Circles, Facebook’s \n     BranchOut, LinkedIn’s InMaps, and Twitter’s Lists to make employers notice them in a unique way.\n      In 2014, using these social media networks has led to 1 of 6 job seekers finding employment.\n\n     Job seekers need to begin to pay more attention to what employers and recruiters find when they \n     do their pre-interview information gathering about applicants, according to this 2010 study by\n      Microsoft, "Online Reputation in a Connected World".')]),o("h2",[t._v("Our People")]),o("p",{staticClass:"about-content"},[t._v("At TempJob, our mission is to help people get jobs. We have more than ever \n    global employees passionately pursuing this purpose and improving the \n    recruitment journey through real stories and data. We foster a collaborative \n    workplace that strives to create the best experience for job seekers.\n  ")])])}],M=(o("lTO6"),{}),R=Object(u["a"])(M,A,Y,!1,null,null,null),U=R.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h1",[t._v("Contact Us!")]),o("div",{staticClass:"contact-icons"},[o("div",{staticClass:"phone"},[o("i",{staticClass:"fas fa-mobile-alt i"}),o("h5",[t._v("Call us at\n      053-529-4075")])]),o("div",{staticClass:"adress"},[o("i",{staticClass:"fas fa-map-marker-alt i"}),o("h5",[t._v("4 Habonim St.")]),o("h5",[t._v("Ramat Gan, Israel")])]),o("div",{staticClass:"email"},[o("i",{staticClass:"fas fa-envelope i"}),o("h5",[t._v("Email us at")]),o("h5",[t._v("aryehshapiro@gmail.com")])])]),o("div",{staticClass:"contact-form"},[o("input",{staticClass:"name-input",attrs:{type:"text",placeholder:"Name"}}),o("input",{staticClass:"email-input",attrs:{type:"email",placeholder:"Email"}}),o("input",{staticClass:"message-input",attrs:{type:"text",placeholder:"Message"}}),o("button",{attrs:{disabled:"disabled"}},[t._v("Send")])])])}],V=(o("jNdX"),{}),X=Object(u["a"])(V,H,Z,!1,null,"137532c5",null),W=X.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"sign-up-form"},[o("h1",[t._v("Sign Up ")]),o("small",[t._v("(as an employer. If you are looking for a job, you don't need to sign up)")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("button",{on:{click:t.signUp}},[t._v("Sign Up")])])])},G=[],q={data:function(){return{email:"",password:""}},methods:{updateTempData:function(t){this.$store.commit({type:"updateTempData",newData:t})},signUp:function(){var t=["newSignUp",this.email,this.password];this.updateTempData(t),this.$router.push("/my-profile")}},computed:{loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery}},created:function(){},watch:{}},K=q,tt=(o("Dcbb"),Object(u["a"])(K,z,G,!1,null,null,null)),et=tt.exports,ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",["newSignUp"===t.tempDataQuery[0]?o("div",{staticClass:"employer-sing-up-form"},[o("h2",[t._v("Please complete your profile:")]),t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Full name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"company",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.about,expression:"about"}],staticClass:"about",attrs:{type:"text",placeholder:"About"},domProps:{value:t.about},on:{input:function(e){e.target.composing||(t.about=e.target.value)}}}),t.newJobFormOpened?o("div",{staticClass:"added-jobs added-job"},[o("h2",[t._v("New Job:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"title",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"location",placeholder:"Location"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"description",attrs:{type:"description",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("br")]):t._e(),t.newJobFormOpened?t._e():o("button",{on:{click:t.addJobButtonClicked}},[t._v("Post New Job")]),o("button",{on:{click:t.submitEmployer}},[t._v("Submit")])]):t._e(),t.editProfile?o("div",{staticClass:"edit-form"},[o("h1",[t._v("My Profile")]),t._m(1),o("button",{staticClass:"edit-btn",on:{click:t.editClicked}},[t._v("Edit Profile")]),t.nonEdit?o("p",{staticClass:"non-edit"},[t._v("Full Name: "+t._s(t.name))]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Full name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.nonEdit?o("p",{staticClass:"non-edit"},[t._v("Phone number: "+t._s(this.phone))]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t.nonEdit?o("p",{staticClass:"non-edit"},[t._v("Email: "+t._s(this.email))]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.nonEdit?o("div",{staticClass:"non-edit"},[o("p",[t._v("Password:")]),t._l(t.passLength,function(e,a){return o("p",{key:a},[t._v("*")])})],2):o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.nonEdit?o("p",{staticClass:"non-edit"},[t._v("Company: "+t._s(t.company))]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"company",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),t.nonEdit?o("p",{staticClass:"non-edit"},[t._v("About: "+t._s(t.about))]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.about,expression:"about"}],staticClass:"about",attrs:{type:"text",placeholder:"About"},domProps:{value:t.about},on:{input:function(e){e.target.composing||(t.about=e.target.value)}}}),o("div",{staticClass:"jobs-and-applicants"},[o("div",{staticClass:"my-jobs"},[o("h3",[t._v("My Jobs:")]),t.loggedInProfileDataQuery.offeredJobs?o("ul",t._l(t.loggedInProfileDataQuery.offeredJobs,function(e,a){return o("li",{key:a},[o("h4",[t._v(t._s(e.title))]),o("button",{staticClass:"del-btn",on:{click:function(o){t.deleteJob(e.id,t.loggedInProfileDataQuery.id)}}},[o("i",{staticClass:"fas fa-trash-alt"})]),o("h4",[t._v(" "+t._s(e.company))]),o("h4",[t._v(" "+t._s(e.location))]),o("p",[t._v(" "+t._s(e.description))])])})):t._e()]),o("div",{staticClass:"my-applicants"},[o("h3",[t._v("Applications for my job")]),t.loggedInProfileDataQuery.applicants?o("ul",t._l(t.loggedInProfileDataQuery.applicants,function(e,a){return o("li",{key:a},[o("h4",[t._v(t._s(e.name))]),o("button",{staticClass:"del-btn",on:{click:function(e){t.deleteApplicant(a,t.loggedInProfileDataQuery.id)}}},[o("i",{staticClass:"fas fa-trash-alt"})]),o("h4",[t._v(" "+t._s(e.email))]),o("p",[t._v(" "+t._s(e.aboutYourself))]),o("p",[t._v(" "+t._s(e.appliedFor))])])})):t._e()])]),t.newJobFormOpened?o("div",{staticClass:"added-jobs added-job"},[o("h2",[t._v("New Job:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"title",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"location",placeholder:"Location"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"description",attrs:{type:"description",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("br")]):t._e(),t.newJobFormOpened?t._e():o("button",{on:{click:t.addJobButtonClicked}},[t._v("Post New Job")]),t.nonEdit?t._e():o("button",{on:{click:t.updateEmployer}},[t._v("Save Changes")])]):t._e()])},at=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"avatar-and-btn-container"},[o("div",{staticClass:"avatar"}),o("button",{staticClass:"upload-image"},[t._v("Upload Image")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"avatar-and-btn-container"},[o("div",{staticClass:"avatar"}),o("button",{staticClass:"upload-image"},[t._v("Upload Image")])])}],nt=(o("f3/d"),{data:function(){return{nonEdit:!1,passLength:[],editProfile:!1,isNewSignIn:!1,newJobFormOpened:!1,buttonsDisplayed:!0,employerDisplayed:!1,name:"",phone:"",email:"",image:"",password:"",company:"",about:"",title:"",location:"",description:"",newJob:""}},methods:{deleteApplicant:function(t,e){var o=this,a=JSON.parse(JSON.stringify(this.loggedInProfileDataQuery));a.applicants.splice(t,1);var n="/employers";D.a.delete("".concat(n,"?id=").concat(e)).then(function(){D.a.post("".concat(n),a).then(function(t){o.updateLoggedInProfileData(t.data)}).catch(function(t){})}).catch(function(t){})},deleteJob:function(t,e){var o=this;swal({title:"Are you sure you want to delete this job?",text:"Once deleted, you will not be able to recover this!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(a){if(a){var n="/jobs";D.a.delete("".concat(n,"?id=").concat(t)).then(function(t){}).catch(function(t){});var i,s=JSON.parse(JSON.stringify(o.loggedInProfileDataQuery));s.offeredJobs.forEach(function(e){e.id===t&&(i=s.offeredJobs.indexOf(e))}),s.offeredJobs.splice(i,1),n="/employers",D.a.delete("".concat(n,"?id=").concat(e)).then(function(){D.a.post("".concat(n),s).then(function(t){o.updateLoggedInProfileData(t.data),swal("Poof! Your job has been deleted!",{icon:"success"})}).catch(function(t){})}).catch(function(t){})}else swal("Your job is safe!")})},editClicked:function(){this.nonEdit=!1},addJobButtonClicked:function(){this.newJobFormOpened=!0,this.nonEdit=!1},submitEmployer:function(){var t=this;if(this.newJobFormOpened){this.newJob={title:this.title,createdAt:"",location:this.location,company:this.company,description:this.description,jobTypeIcon:"",id:this._makeId()};var e="/jobs";D.a.post("".concat(e),this.newJob).then(function(t){bt.$emit("jobAddedToDB")}).catch(function(t){})}var o={name:this.name,company:this.company,rating:-1,phone:this.phone,email:this.email,about:this.about,offeredJobs:[],image:"",password:this.password,applicants:[],id:this._makeId()};this.newJobFormOpened&&o.offeredJobs.push(this.newJob),e="/employers",D.a.post("".concat(e),o).then(function(e){swal("Your profile was created successfuly!","","success"),t.updateLoggedInProfileData(e.data)}),this.updateLoggenInStatus(this.name),bt.$emit("someoneLoggedIn",this.name),this.$router.push("/")},updateEmployer:function(){var t=this;if(this.newJobFormOpened){this.newJob={title:this.title,location:this.location,description:this.description,id:this._makeId(),company:this.company};var e="/jobs";D.a.post("".concat(e),this.newJob).then(function(t){}).catch(function(t){})}var o={offeredJobs:this.loggedInProfileDataQuery.offeredJobs,applicants:this.loggedInProfileDataQuery.applicants,name:this.name,company:this.company,rating:this.loggedInProfileDataQuery.rating,phone:this.phone,email:this.email,about:this.about,image:this.loggedInProfileDataQuery.image,password:this.password,id:this._makeId()};this.newJobFormOpened&&o.offeredJobs.push(this.newJob);var a=this.loggedInProfileDataQuery.id;e="/employers",D.a.delete("".concat(e,"?id=").concat(a)).then().catch(),D.a.post("".concat(e),o).then(function(e){t.updateLoggedInProfileData(e.data)}).catch(),bt.$emit("jobAddedToDB"),this.$router.push("/")},updateLoggenInStatus:function(t){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:t})},updateLoggedInProfileData:function(t){this.$store.commit({type:"updateLoggedInProfileData",profileData:t})},_makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=o.charAt(Math.floor(Math.random()*o.length));return e}},computed:{tempDataQuery:function(){return this.$store.getters.tempDataQuery},loggedInStatusQuery:function(){return this.$store.getters.loggedInStatusQuery},loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}},watch:{},created:function(){for(var t=0;t<this.password.length;t++)this.passLength.push("*");"view/edit profile!"===this.tempDataQuery?(this.editProfile=!0,this.nonEdit=!0,this.name=this.loggedInProfileDataQuery.name,this.phone=this.loggedInProfileDataQuery.phone,this.email=this.loggedInProfileDataQuery.email,this.password=this.loggedInProfileDataQuery.password,this.company=this.loggedInProfileDataQuery.company,this.about=this.loggedInProfileDataQuery.about):(this.email=this.tempDataQuery[1],this.password=this.tempDataQuery[2])}}),it=nt,st=(o("HXXM"),Object(u["a"])(it,ot,at,!1,null,null,null)),rt=st.exports,lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"login-form"},[o("h1",[t._v("Login")]),t.accessDenied?o("p",{staticClass:"access-denied"},[t._v("Email or password are incorrect. Please try again.")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("button",{on:{click:t.login}},[t._v("Login")])])])},ct=[],ut={data:function(){return{email:"",password:"",accessDenied:null,userProfile:null}},methods:{updateLoggenInStatus:function(t){this.$store.commit({type:"updateLoggenInStatus",newLoggedIn:t})},login:function(){var t=this,e="/employers";D.a.get("".concat(e)).then(function(e){var o=null;e.data.forEach(function(e){e.email===t.email&&e.password===t.password&&(!0,o=e.name,t.userProfile=e,t.updateLoggedInProfileData(e),t.updateLoggenInStatus(o),bt.$emit("someoneLoggedIn",o),t.$router.push("/"))}),t.accessDenied=!0,t.email="",t.password=""})},updateLoggedInProfileData:function(t){this.$store.commit({type:"updateLoggedInProfileData",profileData:t})}},computed:{loggedInProfileDataQuery:function(){return this.$store.getters.loggedInProfileDataQuery}}},pt=ut,dt=(o("1ttx"),Object(u["a"])(pt,lt,ct,!1,null,null,null)),mt=dt.exports;a["a"].use(m["a"]);var ft=new m["a"]({routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:U},{path:"/contact",name:"contact",component:W},{path:"/sign-up",name:"sign-up",component:et},{path:"/my-profile",name:"my-profile",component:rt},{path:"/login",name:"login",component:mt}]}),gt=o("L2JU");a["a"].use(gt["a"]);var ht=new gt["a"].Store({state:{tempData:"",loggedIn:"",loggedInProfileData:""},mutations:{updateLoggenInStatus:function(t,e){var o=e.newLoggedIn;t.loggedIn=o},updateTempData:function(t,e){var o=e.newData;t.tempData=o},updateLoggedInProfileData:function(t,e){var o=e.profileData;t.loggedInProfileData=o}},getters:{tempDataQuery:function(t){return t.tempData},loggedInStatusQuery:function(t){return t.loggedIn},loggedInProfileDataQuery:function(t){return t.loggedInProfileData}},actions:{},created:function(){}}),vt=o("lIOY");Object(vt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o.d(e,"bus",function(){return bt}),a["a"].config.productionTip=!1;var bt=new a["a"];new a["a"]({router:ft,store:ht,render:function(t){return t(d)}}).$mount("#app")},XDEY:function(t,e,o){"use strict";var a=o("Fsf3"),n=o.n(a);n.a},"ZZw/":function(t,e,o){},eVit:function(t,e,o){},gtzs:function(t,e,o){},jNdX:function(t,e,o){"use strict";var a=o("rkWQ"),n=o.n(a);n.a},lTO6:function(t,e,o){"use strict";var a=o("gtzs"),n=o.n(a);n.a},pwH0:function(t,e,o){"use strict";var a=o("QhSI"),n=o.n(a);n.a},rkWQ:function(t,e,o){},uGFv:function(t,e,o){},wYZZ:function(t,e,o){"use strict";var a=o("SfSJ"),n=o.n(a);n.a},zMuA:function(t,e,o){"use strict";var a=o("uGFv"),n=o.n(a);n.a}});
//# sourceMappingURL=app.33b98773.js.map