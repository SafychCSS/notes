(function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={app:0},r=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},4882:function(t,e,i){t.exports=i.p+"img/sprite.18f848cb.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sm:mx-auto p-4 max-w-screen-md"},[o("h1",{staticClass:"text-center text-3xl text-purple-600 font-bold"},[t._v("Notes App")]),o("new-note",{on:{addNote:t.addNote}}),o("div",{staticClass:"flex"},[o("SearchNote",{on:{search:function(e){t.search=e}}}),o("div",{staticClass:"flex text-gray-400"},[o("button",{staticClass:"ml-4 hover:text-purple-600 transition duration-300",class:{"active-element":t.active},attrs:{type:"button"},on:{click:function(e){t.active=!0}}},[o("svg",{staticClass:"w-7 h-7"},[o("use",{attrs:{"xlink:href":i("4882")+"#icon-tile"}})])]),o("button",{staticClass:"ml-4 hover:text-purple-600 transition duration-300",class:{"active-element":!t.active},attrs:{type:"button"},on:{click:function(e){t.active=!1}}},[o("svg",{staticClass:"w-7 h-7"},[o("use",{attrs:{"xlink:href":i("4882")+"#icon-list"}})])])])],1),o("Notes",{class:{"sm:grid-cols-2":t.active}},t._l(t.filteredNotes,(function(e){return o("NotesItem",{key:e.id,attrs:{note:e},on:{removeNote:t.removeNote,updateNote:t.updateNote}})})),1)],1)},r=[],s=(i("a4d3"),i("e01a"),i("4de4"),i("c740"),i("a434"),i("ac1f"),i("841c"),i("2ca0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form mx-auto mb-12"},[i("form",{attrs:{action:"/",method:"post"}},[i("div",{staticClass:"form__block my-5"},[i("label",{staticClass:"block text-xl",attrs:{for:"note-title"}},[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"form__input block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300",attrs:{name:"note-title",id:"note-title",type:"text",placeholder:"Title note"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),i("div",{staticClass:"form__block my-5 flex"},t._l(t.priorities,(function(e,o){return i("div",{key:o,staticClass:"radio mr-5"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPriority,expression:"currentPriority"}],staticClass:"visibility-hidden radio__input",attrs:{id:"priority"+e.value,type:"radio",name:"priority"},domProps:{value:e.value,checked:t._q(t.currentPriority,e.value)},on:{change:function(i){t.currentPriority=e.value}}}),i("label",{staticClass:"radio__label",attrs:{for:"priority"+e.value}},[t._v(t._s(e.label))])])})),0),i("div",{staticClass:"form__block my-5"},[i("label",{staticClass:"block text-xl",attrs:{for:"note-description"}},[t._v("Description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.description,expression:"note.description"}],staticClass:"form__textarea block border w-full rounded-lg p-4 focus:border-purple-400 transition duration-300",attrs:{name:"note-description",id:"note-description",cols:"30",rows:"4",placeholder:"Description note",maxlength:"200"},domProps:{value:t.note.description},on:{input:function(e){e.target.composing||t.$set(t.note,"description",e.target.value)}}})]),i("button",{staticClass:"flex mx-auto bg-purple-600 inline-block text-white px-7 py-4 rounded-full text-xl hover:shadow-xl transition-shadow duration-300",class:{"cursor-not-allowed opacity-50":t.note.title.length<3},attrs:{disabled:t.note.title.length<3},on:{click:function(e){return e.preventDefault(),t.addNote(e)}}},[t._v(" Add new ")])])])}),a=[],l={name:"NewNote",data:function(){return{currentPriority:"no",note:{title:"",description:""},priorities:[{label:"No priority",value:"no"},{label:"Medium priority",value:"medium"},{label:"High priority",value:"high"}]}},methods:{addNote:function(){if(this.note.title.length<3)return!1;this.note.priority=this.currentPriority,this.$emit("addNote",this.note),this.note.title="",this.note.description=""}}},c=l,d=i("2877"),u=Object(d["a"])(c,s,a,!1,null,"695a08e5",null),p=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notes grid grid-cols-1 gap-6 my-8"},[t._t("default")],2)},h=[],v={},m=Object(d["a"])(v,f,h,!1,null,null,null),x=m.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"find relative flex-auto mr-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"border w-full rounded-full py-4 pl-8 pr-20 focus:border-purple-400 transition duration-300",attrs:{type:"text",name:"find",placeholder:"Search note..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),o("svg",{staticClass:"find__icon absolute right-0 text-gray-400 w-7 h-7 transition duration-300"},[o("use",{attrs:{"xlink:href":i("4882")+"#icon-search"}})])])},y=[],g={name:"SearchNote",data:function(){return{search:""}},watch:{search:function(t){this.$emit("search",t)}}},_=g,w=Object(d["a"])(_,b,y,!1,null,"0fd86ace",null),C=w.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative note bg-white shadow hover:shadow-lg transition duration-300"},[o("div",{staticClass:"note__content flex flex-col h-full relative px-8 py-6 border-l-2 border-transparent",class:"priority-"+t.note.priority},[o("div",{staticClass:"note__top flex justify-between"},[o("p",{staticClass:"note__title font-medium text-2xl mb-4"},[t._v(t._s(t.note.title))]),o("div",{staticClass:"btn-group flex-shrink-0 ml-3 flex items-start"},[o("button",{staticClass:"btn-edit mr-3 text-gray-400 hover:text-green-400 transition duration-300",attrs:{type:"button"},on:{click:t.isEditing}},[o("svg",{staticClass:"w-4 h-4"},[o("use",{attrs:{"xlink:href":i("4882")+"#icon-edit"}})])]),o("button",{staticClass:"note__remove transform text-3xl text-gray-400 hover:text-red-400 transition duration-300 hover:rotate-90",attrs:{type:"button"},on:{click:function(e){return t.removeNote(t.note.id)}}},[t._v(" × ")])])]),o("p",{staticClass:"note__description text-lg my-4"},[t._v(t._s(t.note.description))]),o("span",{staticClass:"note__date text-sm text-gray-400 mt-auto"},[t._v(t._s(t.note.dataAdd))])]),t.editMode?o("div",{staticClass:"note__edit absolute flex flex-col w-full h-full left-0 top-0 bg-white p-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"},{name:"focus",rawName:"v-focus"}],staticClass:"top-0 w-full mb-3 px-3 py-1 border rounded-md",attrs:{name:"edit-title",type:"text"},domProps:{value:t.title},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"w-full my-3 px-3 py-1 flex-grow border rounded-md",attrs:{name:"edit-description",cols:"10"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("div",{staticClass:"flex"},[o("button",{staticClass:"save mr-3 text-gray-400 hover:text-green-400 transition duration-300",attrs:{type:"button"},on:{click:t.saveNote}},[o("svg",{staticClass:"w-4 h-4"},[o("use",{attrs:{"xlink:href":i("4882")+"#icon-save"}})])]),o("button",{staticClass:"note__remove transform text-3xl text-gray-400 hover:text-red-400 transition duration-300 hover:rotate-90",attrs:{type:"button"},on:{click:t.cancelEdit}},[t._v(" × ")])])]):t._e()])},k=[],P=(i("498a"),{name:"NotesItem",props:{note:{type:Object,required:!0}},data:function(){return{title:"",description:"",editMode:!1}},methods:{saveNote:function(){this.title.trim()||(this.title=this.note.title),this.$emit("updateNote",{title:this.title,description:this.description,id:this.note.id}),this.editMode=!1},cancelEdit:function(){this.editMode=!1,this.title="",this.description=""},isEditing:function(){this.editMode=!0,this.title=this.note.title,this.description=this.note.description},removeNote:function(t){this.$emit("removeNote",t),this.title="",this.description=""}},directives:{focus:{inserted:function(t){t.focus()}}},created:function(){var t=this,e=function(e){!t.$el.contains(e.target)&&t.editMode&&t.cancelEdit()};document.addEventListener("click",e),this.$on("hook:beforeDestroy",(function(){return document.removeEventListener("click",e)}))}}),O=P,j=Object(d["a"])(O,N,k,!1,null,"25f9ce40",null),E=j.exports,S={name:"App",components:{NewNote:p,Notes:x,NotesItem:E,SearchNote:C},data:function(){return{notes:[{id:1,title:"First note",description:"anything about this note",priority:"no",dataAdd:(new Date).toLocaleString()},{id:2,title:"Second note",description:"anything about this note anything about this note anything about this note",priority:"medium",dataAdd:(new Date).toLocaleString()},{id:3,title:"Third note",description:"anything about this note",priority:"high",dataAdd:(new Date).toLocaleString()}],search:"",active:!0,countNote:3}},methods:{addNote:function(t){this.countNote++;var e=t.title,i=t.description,o=t.priority;this.notes.push({id:this.countNote,title:e,description:i,priority:o,dataAdd:(new Date).toLocaleString()})},updateNote:function(t){var e=this.notes.findIndex((function(e){return t.id===e.id}));this.notes[e].title=t.title,this.notes[e].description=t.description},removeNote:function(t){var e=this.notes.findIndex((function(e){return t===e.id}));this.notes.splice(e,1)}},computed:{filteredNotes:function(){var t=this.notes,e=this.search.toLowerCase();return e?(t=t.filter((function(t){if(t.title.toLowerCase().startsWith(e))return t})),t):t}}},$=S,M=Object(d["a"])($,n,r,!1,null,null,null),A=M.exports;i("c1c3");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(A)}}).$mount("#app")},c1c3:function(t,e,i){}});