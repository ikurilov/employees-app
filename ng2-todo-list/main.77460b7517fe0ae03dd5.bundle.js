webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var o=t("/oeL"),e=t("aR8+"),u=t("wQAS"),i=t("q4dy"),r=t("qbdv"),c=t("fc+i"),s=t("f9zQ"),d=t("fL27"),a=t("EyWH"),f=t("bm2B"),p=t("WNH4");t.d(l,"a",function(){return g});var g=o.b(e.a,[u.a],function(n){return o.c([o.d(512,o.e,o.f,[[8,[i.a]],[3,o.e],o.g]),o.d(5120,o.h,o.i,[[3,o.h]]),o.d(4608,r.a,r.b,[o.h]),o.d(4608,o.j,o.j,[]),o.d(5120,o.k,o.l,[]),o.d(5120,o.m,o.n,[]),o.d(5120,o.o,o.p,[]),o.d(4608,c.b,c.c,[r.c]),o.d(6144,o.q,null,[c.b]),o.d(4608,c.d,c.e,[]),o.d(5120,c.f,function(n,l,t,o){return[new c.g(n),new c.h(l),new c.i(t,o)]},[r.c,r.c,r.c,c.d]),o.d(4608,c.j,c.j,[c.f,o.r]),o.d(135680,c.k,c.k,[r.c]),o.d(4608,c.l,c.l,[c.j,c.k]),o.d(5120,s.a,d.a,[]),o.d(5120,s.b,d.b,[]),o.d(4608,s.c,d.c,[s.a,s.b]),o.d(5120,o.s,d.d,[c.l,s.c,o.r]),o.d(6144,c.m,null,[c.k]),o.d(4608,o.t,o.t,[o.r]),o.d(4608,c.n,c.n,[r.c]),o.d(4608,c.o,c.o,[r.c]),o.d(4608,a.a,d.e,[o.s]),o.d(4608,f.a,f.a,[]),o.d(4608,p.a,p.a,[]),o.d(512,r.d,r.d,[]),o.d(1024,o.u,c.p,[]),o.d(1024,o.v,function(n,l){return[c.q(n,l)]},[[2,c.r],[2,o.w]]),o.d(512,o.x,o.x,[[2,o.v]]),o.d(131584,o.y,o.y,[o.r,o.z,o.A,o.u,o.e,o.x]),o.d(2048,o.B,null,[o.y]),o.d(512,o.C,o.C,[o.B]),o.d(512,c.s,c.s,[[3,c.s]]),o.d(512,d.f,d.f,[]),o.d(512,f.b,f.b,[]),o.d(512,f.c,f.c,[]),o.d(512,e.a,e.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"3pTo":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=["[_nghost-%COMP%]{text-align:center}"]},"5Dk3":function(n,l,t){"use strict";var o=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(){this.hostClass="panel-footer",this.onFilter=new o.R,this.onRemoveCompleted=new o.R,this.onToggleAll=new o.R,this.filters=[{title:"All",value:"all"},{title:"Active",value:"active"},{title:"Completed",value:"completed"}]}return n.prototype.ngOnInit=function(){},n.prototype.apply=function(n){this.onFilter.emit(n)},n.prototype.removeCompleted=function(){this.onRemoveCompleted.emit()},n.prototype.toggleAll=function(){this.onToggleAll.emit(this.uncompleted>0)},n.ctorParameters=function(){return[]},n}()},"7Z0U":function(n,l,t){"use strict";var o=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(n){this.el=n,this.onDelete=new o.R,this.onEdit=new o.R,this.hostClass="list-group"}return n.prototype.onResize=function(n){var l=this;if(this.currentEditingTodo){var t=this.todoComponents.find(function(n){return n.todo.id===l.currentEditingTodo.id}).el.nativeElement,o=this.el.nativeElement,e=t.offsetTop,u=t.offsetHeight,i=o.scrollTop,r=o.offsetHeight,c=e-r/2+u/2;i>e?o.scrollTop=c:i+r<e+u&&(o.scrollTop=c)}},n.prototype.onDeleteTodo=function(n){this.onDelete.emit(n)},n.prototype.onEditTodo=function(n){this.onEdit.emit(n)},n.prototype.toggleEditingTodo=function(n){this.currentEditingTodo=n||null},n.prototype.trackByTodos=function(n,l){return l.id},n.ctorParameters=function(){return[{type:o.J}]},n}()},Anfw:function(n,l,t){"use strict";var o=t("RZJt"),e=t.n(o);t.d(l,"a",function(){return u});var u=function(){function n(n,l){void 0===l&&(l=!1),this.text=n,this.completed=l,this.id=e()()}return n}()},FVk8:function(n,l,t){"use strict";function o(n){return a._17(0,[(n()(),a._18(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a._22(null,["",""]))],null,function(n,l){n(l,1,0,l.component.todo.text)})}function e(n){return a._17(0,[(n()(),a._18(0,[[1,0],["todoitem",1]],null,1,"input",[["autoFocus",""],["class","form-control input-sm"],["type","text"]],[[8,"value",0]],[[null,"keypress"],[null,"keyup.escape"],[null,"focus"]],function(n,l,t){var o=!0,e=n.component;if("keypress"===l){o=!1!==e.onKeypress(t)&&o}if("keyup.escape"===l){o=!1!==e.cancelEditingTodo()&&o}if("focus"===l){o=!1!==e.setCurrentTodo()&&o}return o},null,null)),a._19(4210688,null,0,f.a,[a.J],null,null)],null,function(n,l){n(l,0,0,l.component.todo.text)})}function u(n){return a._17(0,[(n()(),a._18(0,null,null,1,"button",[["class","btn btn-success btn-sm"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.updateTodo()&&o}return o},null,null)),(n()(),a._18(0,null,null,0,"i",[["class","glyphicon glyphicon-ok"]],null,null,null,null,null))],null,null)}function i(n){return a._17(0,[(n()(),a._18(0,null,null,3,"button",[["class","btn btn-default btn-sm"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.startEditingTodo()&&o}return o},null,null)),(n()(),a._22(null,["\n      "])),(n()(),a._18(0,null,null,0,"i",[["class","glyphicon glyphicon-cog"]],null,null,null,null,null)),(n()(),a._22(null,["\n    "]))],null,null)}function r(n){return a._17(0,[(n()(),a._18(0,null,null,3,"button",[["class","btn btn-default btn-sm"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.cancelEditingTodo()&&o}return o},null,null)),(n()(),a._22(null,["\n      "])),(n()(),a._18(0,null,null,0,"i",[["class","glyphicon glyphicon-ban-circle"]],null,null,null,null,null)),(n()(),a._22(null,["\n    "]))],null,null)}function c(n){return a._17(2,[a._27(671088640,1,{todoItem:0}),(n()(),a._18(0,null,null,3,"div",[["class","todo-toggle"]],null,null,null,null,null)),(n()(),a._22(null,["\n  "])),(n()(),a._18(0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.toggleTodo()&&o}return o},null,null)),(n()(),a._22(null,["\n"])),(n()(),a._22(null,["\n"])),(n()(),a._18(0,null,null,9,"div",[["class","todo-title"]],null,[[null,"dblclick"]],function(n,l,t){var o=!0,e=n.component;if("dblclick"===l){o=!1!==e.startEditingTodo()&&o}return o},null,null)),a._19(278528,null,0,g.j,[a.m,a.o,a.J,a._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._28({completed:0,editing:1}),(n()(),a._22(null,["\n  "])),(n()(),a._24(16777216,null,null,1,null,o)),a._19(16384,null,0,g.h,[a._10,a._11],{ngIf:[0,"ngIf"]},null),(n()(),a._22(null,["\n  "])),(n()(),a._24(16777216,null,null,1,null,e)),a._19(16384,null,0,g.h,[a._10,a._11],{ngIf:[0,"ngIf"]},null),(n()(),a._22(null,["\n"])),(n()(),a._22(null,["\n"])),(n()(),a._18(0,null,null,16,"div",[["class","todo-buttons"]],null,null,null,null,null)),(n()(),a._22(null,["\n  "])),(n()(),a._18(0,null,null,10,"div",[["class","btn-group"]],null,null,null,null,null)),(n()(),a._22(null,["\n    "])),(n()(),a._24(16777216,null,null,1,null,u)),a._19(16384,null,0,g.h,[a._10,a._11],{ngIf:[0,"ngIf"]},null),(n()(),a._22(null,["\n    "])),(n()(),a._24(16777216,null,null,1,null,i)),a._19(16384,null,0,g.h,[a._10,a._11],{ngIf:[0,"ngIf"]},null),(n()(),a._22(null,["\n    "])),(n()(),a._24(16777216,null,null,1,null,r)),a._19(16384,null,0,g.h,[a._10,a._11],{ngIf:[0,"ngIf"]},null),(n()(),a._22(null,["\n  "])),(n()(),a._22(null,["\n  "])),(n()(),a._18(0,null,null,1,"button",[["class","btn btn-danger btn-sm"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.deleteTodo()&&o}return o},null,null)),(n()(),a._18(0,null,null,0,"i",[["class","glyphicon glyphicon-trash"]],null,null,null,null,null)),(n()(),a._22(null,["\n"])),(n()(),a._22(null,["\n\n"]))],function(n,l){var t=l.component;n(l,7,0,"todo-title",n(l,8,0,t.todo.completed,t.isEditing)),n(l,11,0,!t.isEditing),n(l,14,0,t.isEditing),n(l,22,0,t.isEditing),n(l,25,0,!t.isEditing),n(l,28,0,t.isEditing)},function(n,l){n(l,3,0,l.component.todo.completed)})}function s(n){return a._17(0,[(n()(),a._18(0,null,null,1,"todo-item",[],[[8,"className",0]],null,null,c,m)),a._19(49152,null,0,p.a,[a.J],null,null)],null,function(n,l){n(l,0,0,a._20(l,1).hostClass)})}var d=t("yrJ5"),a=t("/oeL"),f=t("uP48"),p=t("ba1g"),g=t("qbdv");t.d(l,"b",function(){return m}),l.a=c;var _=[d.a],m=a._16({encapsulation:0,styles:_,data:{}});a._26("todo-item",p.a,s,{todo:"todo"},{onEdit:"onEdit",onDelete:"onDelete",onToggleEditing:"onToggleEditing"},[])},HAtf:function(n,l,t){"use strict";function o(n){return i._17(0,[(n()(),i._18(0,null,null,14,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),i._22(null,["\n  "])),(n()(),i._18(0,null,null,5,"input",[["class","form-control"],["placeholder","I want to do..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,e=n.component;if("input"===l){o=!1!==i._20(n,3)._handleInput(t.target.value)&&o}if("blur"===l){o=!1!==i._20(n,3).onTouched()&&o}if("compositionstart"===l){o=!1!==i._20(n,3)._compositionStart()&&o}if("compositionend"===l){o=!1!==i._20(n,3)._compositionEnd(t.target.value)&&o}if("keypress"===l){o=!1!==e.onKeyPress(t)&&o}if("ngModelChange"===l){o=!1!==(e.todoText=t)&&o}return o},null,null)),i._19(16384,null,0,c.d,[i.I,i.J,[2,c.e]],null,null),i._29(1024,null,c.f,function(n){return[n]},[c.d]),i._19(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),i._29(2048,null,c.h,null,[c.g]),i._19(16384,null,0,c.i,[c.h],null,null),(n()(),i._22(null,["\n  "])),(n()(),i._18(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(n()(),i._22(null,["\n    "])),(n()(),i._18(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.addTodo()&&o}return o},null,null)),(n()(),i._18(0,null,null,0,"i",[["class","glyphicon glyphicon-plus"]],null,null,null,null,null)),(n()(),i._22(null,["\n  "])),(n()(),i._22(null,["\n"])),(n()(),i._22(null,["\n"]))],function(n,l){n(l,5,0,l.component.todoText)},function(n,l){n(l,2,0,i._20(l,7).ngClassUntouched,i._20(l,7).ngClassTouched,i._20(l,7).ngClassPristine,i._20(l,7).ngClassDirty,i._20(l,7).ngClassValid,i._20(l,7).ngClassInvalid,i._20(l,7).ngClassPending)})}function e(n){return i._17(0,[(n()(),i._18(0,null,null,1,"todo-header",[],[[8,"className",0]],null,null,o,d)),i._19(114688,null,0,r.a,[],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,i._20(l,1).hostClass)})}var u=t("lwXv"),i=t("/oeL"),r=t("nR4a"),c=t("bm2B");t.d(l,"b",function(){return d}),l.a=o;var s=[u.a],d=i._16({encapsulation:0,styles:s,data:{}});i._26("todo-header",r.a,e,{},{onAdd:"onAdd"},[])},HH7d:function(n,l,t){"use strict";function o(n){return s._17(0,[(n()(),s._18(0,null,null,0,"i",[["class","glyphicon glyphicon-ok"]],null,null,null,null,null))],null,null)}function e(n){return s._17(0,[(n()(),s._18(0,null,null,0,"i",[["class","glyphicon glyphicon-ban-circle"]],null,null,null,null,null))],null,null)}function u(n){return s._17(0,[(n()(),s._18(0,null,null,3,"button",[["class","btn btn-default btn-sm"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.apply(n.context.$implicit.value)&&o}return o},null,null)),s._19(278528,null,0,d.j,[s.m,s.o,s.J,s._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._28({active:0}),(n()(),s._22(null,["",""]))],function(n,l){n(l,1,0,"btn btn-default btn-sm",n(l,2,0,l.component.currentFilter===l.context.$implicit.value))},function(n,l){n(l,3,0,l.context.$implicit.title)})}function i(n){return s._17(0,[(n()(),s._18(0,null,null,13,"div",[["class","toggle-all pull-left"]],null,null,null,null,null)),(n()(),s._22(null,["\n  "])),(n()(),s._18(0,null,null,7,"button",[["class","btn btn-default btn-sm"],["title","Toggle all"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.toggleAll()&&o}return o},null,null)),(n()(),s._22(null,["\n    "])),(n()(),s._24(16777216,null,null,1,null,o)),s._19(16384,null,0,d.h,[s._10,s._11],{ngIf:[0,"ngIf"]},null),(n()(),s._22(null,["\n    "])),(n()(),s._24(16777216,null,null,1,null,e)),s._19(16384,null,0,d.h,[s._10,s._11],{ngIf:[0,"ngIf"]},null),(n()(),s._22(null,["\n  "])),(n()(),s._22(null,["\n  "])),(n()(),s._18(0,null,null,1,"span",[["class","hidden-xs"]],null,null,null,null,null)),(n()(),s._22(null,["Uncompleted: ",""])),(n()(),s._22(null,["\n"])),(n()(),s._22(null,["\n"])),(n()(),s._18(0,null,null,4,"div",[["class","btn-group filters"]],null,null,null,null,null)),(n()(),s._22(null,["\n  "])),(n()(),s._24(16777216,null,null,1,null,u)),s._19(802816,null,0,d.i,[s._10,s._11,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._22(null,["\n"])),(n()(),s._22(null,["\n"])),(n()(),s._18(0,null,null,1,"button",[["class","btn btn-default btn-sm remove-completed pull-right"],["title","Remove completed"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var o=!0,e=n.component;if("click"===l){o=!1!==e.removeCompleted()&&o}return o},null,null)),(n()(),s._18(0,null,null,0,"i",[["class","glyphicon glyphicon-trash"]],null,null,null,null,null)),(n()(),s._22(null,["\n"]))],function(n,l){var t=l.component;n(l,5,0,t.uncompleted>0),n(l,8,0,0===t.uncompleted),n(l,18,0,t.filters)},function(n,l){var t=l.component;n(l,12,0,t.uncompleted),n(l,21,0,0===t.completed)})}function r(n){return s._17(0,[(n()(),s._18(0,null,null,1,"todo-footer",[],[[8,"className",0]],null,null,i,p)),s._19(114688,null,0,a.a,[],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,s._20(l,1).hostClass)})}var c=t("3pTo"),s=t("/oeL"),d=t("qbdv"),a=t("5Dk3");t.d(l,"b",function(){return p}),l.a=i;var f=[c.a],p=s._16({encapsulation:0,styles:f,data:{}});s._26("todo-footer",a.a,r,{currentFilter:"currentFilter",uncompleted:"uncompleted",completed:"completed"},{onFilter:"onFilter",onRemoveCompleted:"onRemoveCompleted",onToggleAll:"onToggleAll"},[])},Qgft:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=["[_nghost-%COMP%]{position:relative}"]},WNH4:function(n,l,t){"use strict";var o=t("Anfw");t.d(l,"a",function(){return u});var e=this&&this.__assign||Object.assign||function(n){for(var l,t=1,o=arguments.length;t<o;t++){l=arguments[t];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e])}return n},u=function(){function n(){this.todos=JSON.parse(localStorage.getItem("todos"))||[],this.updateCounters()}return n.prototype.addTodo=function(n){this.todos=this.todos.concat(new o.a(n)),this.afterUpdate()},n.prototype.updateTodo=function(n){this.todos=this.todos.map(function(l){return l.id===n.id?n:l}),this.afterUpdate()},n.prototype.deleteTodo=function(n){this.todos=this.todos.filter(function(l){return l.id!==n.id}),this.afterUpdate()},n.prototype.toggleAll=function(n){this.todos=this.todos.map(function(l){return n&&!l.completed?e({},l,{completed:!0}):!n&&l.completed?e({},l,{completed:!1}):l}),this.afterUpdate()},n.prototype.removeCompleted=function(){this.todos=this.todos.filter(function(n){return!n.completed}),this.afterUpdate()},n.prototype.afterUpdate=function(){this.writeToStorage()},n.prototype.writeToStorage=function(){localStorage.setItem("todos",JSON.stringify(this.todos)),this.updateCounters()},n.prototype.updateCounters=function(){this.completed=this.todos.filter(function(n){return n.completed}).length,this.uncompleted=this.todos.length-this.completed},n.ctorParameters=function(){return[]},n}()},ZgFM:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=[".container[_ngcontent-%COMP%]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;max-width:768px;padding:5px}.container[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}.panel[_ngcontent-%COMP%]{margin:0;max-height:800px;overflow:hidden}.list-group[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;height:100%;min-height:42px}"]},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n}()},ba1g:function(n,l,t){"use strict";var o=t("/oeL");t.d(l,"a",function(){return u});var e=this&&this.__assign||Object.assign||function(n){for(var l,t=1,o=arguments.length;t<o;t++){l=arguments[t];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e])}return n},u=function(){function n(n){this.el=n,this.hostClass="list-group-item",this.onEdit=new o.R,this.onDelete=new o.R,this.onToggleEditing=new o.R}return n.prototype.startEditingTodo=function(){this.isEditing=!0},n.prototype.cancelEditingTodo=function(){this.isEditing=!1,this.onToggleEditing.emit(),this.todoItem.nativeElement.value=this.todo.text},n.prototype.updateTodo=function(){this.isEditing=!1,this.onToggleEditing.emit();var n=e({},this.todo);n.text=this.todoItem.nativeElement.value,this.onEdit.emit(n)},n.prototype.toggleTodo=function(){var n=e({},this.todo);n.completed=!n.completed,this.onEdit.emit(n)},n.prototype.deleteTodo=function(){this.onDelete.emit(this.todo)},n.prototype.onKeypress=function(n){13===n.keyCode&&this.updateTodo()},n.prototype.setCurrentTodo=function(){this.onToggleEditing.emit(this.todo)},n.ctorParameters=function(){return[{type:o.J}]},n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("/oeL"),e=t("p5Ee"),u=t("+h1B"),i=t("fc+i");e.a.production&&t.i(o.a)(),t.i(i.a)().bootstrapModuleFactory(u.a)},e4aZ:function(n,l,t){"use strict";function o(n){return c._17(0,[(n()(),c._18(0,null,null,1,"todo-item",[],[[24,"@flyInOut",0],[8,"className",0]],[[null,"onDelete"],[null,"onEdit"],[null,"onToggleEditing"]],function(n,l,t){var o=!0,e=n.component;if("onDelete"===l){o=!1!==e.onDeleteTodo(t)&&o}if("onEdit"===l){o=!1!==e.onEditTodo(t)&&o}if("onToggleEditing"===l){o=!1!==e.toggleEditingTodo(t)&&o}return o},s.a,s.b)),c._19(49152,[[1,4]],0,d.a,[c.J],{todo:[0,"todo"]},{onEdit:"onEdit",onDelete:"onDelete",onToggleEditing:"onToggleEditing"})],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,0,0,"in",c._20(l,1).hostClass)})}function e(n){return c._17(0,[(n()(),c._18(0,null,null,1,"div",[["class","list-group-item"]],null,null,null,null,null)),(n()(),c._22(null,["There is no todos"]))],null,null)}function u(n){return c._17(2,[c._27(671088640,1,{todoComponents:1}),(n()(),c._24(16777216,null,null,1,null,o)),c._19(802816,null,0,a.i,[c._10,c._11,c.m],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(n()(),c._22(null,["\n"])),(n()(),c._24(16777216,null,null,1,null,e)),c._19(16384,null,0,a.h,[c._10,c._11],{ngIf:[0,"ngIf"]},null),(n()(),c._22(null,["\n"]))],function(n,l){var t=l.component;n(l,2,0,t.todos,t.trackByTodos),n(l,5,0,!t.todos.length)},null)}function i(n){return c._17(0,[(n()(),c._18(0,null,null,1,"todo-list",[],[[8,"className",0]],[["window","resize"]],function(n,l,t){var o=!0;if("window:resize"===l){o=!1!==c._20(n,1).onResize(t)&&o}return o},u,g)),c._19(49152,null,0,f.a,[c.J],null,null)],null,function(n,l){n(l,0,0,c._20(l,1).hostClass)})}var r=t("Qgft"),c=t("/oeL"),s=t("FVk8"),d=t("ba1g"),a=t("qbdv"),f=t("7Z0U");t.d(l,"b",function(){return g}),l.a=u;var p=[r.a],g=c._16({encapsulation:0,styles:p,data:{animation:[{type:7,name:"flyInOut",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)",opacity:0},offset:null},{type:4,styles:null,timings:300}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)",opacity:0},offset:null},timings:300}],options:null}],options:{}}]}});c._26("todo-list",f.a,i,{todos:"todos"},{onDelete:"onDelete",onEdit:"onEdit"},[])},lwXv:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=["[_nghost-%COMP%]{box-shadow:0 0 8px 0 rgba(0,0,0,.1);z-index:3}"]},nR4a:function(n,l,t){"use strict";var o=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(){this.onAdd=new o.R,this.hostClass="panel-heading",this.todoText=""}return n.prototype.ngOnInit=function(){},n.prototype.addTodo=function(){this.todoText=this.todoText.trim(),this.todoText.length&&(this.onAdd.emit(this.todoText),this.todoText="")},n.prototype.onKeyPress=function(n){13===n.keyCode&&this.addTodo()},n.ctorParameters=function(){return[]},n}()},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o={production:!0}},q4dy:function(n,l,t){"use strict";function o(n){return r._17(0,[(n()(),r._18(0,null,null,1,"todo-footer",[],[[8,"className",0]],[[null,"onFilter"],[null,"onToggleAll"],[null,"onRemoveCompleted"]],function(n,l,t){var o=!0,e=n.component;if("onFilter"===l){o=!1!==e.applyFilter(t)&&o}if("onToggleAll"===l){o=!1!==e.toggleAllTodo(t)&&o}if("onRemoveCompleted"===l){o=!1!==e.removeCompleted()&&o}return o},c.a,c.b)),r._19(114688,null,0,s.a,[],{currentFilter:[0,"currentFilter"],uncompleted:[1,"uncompleted"],completed:[2,"completed"]},{onFilter:"onFilter",onRemoveCompleted:"onRemoveCompleted",onToggleAll:"onToggleAll"})],function(n,l){var t=l.component;n(l,1,0,t.filter,t.todosService.uncompleted,t.todosService.completed)},function(n,l){n(l,0,0,r._20(l,1).hostClass)})}function e(n){return r._17(0,[r._21(0,d.a,[]),(n()(),r._18(0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(n()(),r._22(null,["\n  "])),(n()(),r._18(0,null,null,11,"div",[["class","panel panel-default"]],null,null,null,null,null)),(n()(),r._22(null,["\n    "])),(n()(),r._18(0,null,null,1,"todo-header",[],[[8,"className",0]],[[null,"onAdd"]],function(n,l,t){var o=!0,e=n.component;if("onAdd"===l){o=!1!==e.addTodo(t)&&o}return o},f.a,f.b)),r._19(114688,null,0,p.a,[],null,{onAdd:"onAdd"}),(n()(),r._22(null,["\n    "])),(n()(),r._18(0,null,null,2,"todo-list",[],[[8,"className",0]],[[null,"onDelete"],[null,"onEdit"],["window","resize"]],function(n,l,t){var o=!0,e=n.component;if("window:resize"===l){o=!1!==r._20(n,9).onResize(t)&&o}if("onDelete"===l){o=!1!==e.deleteTodo(t)&&o}if("onEdit"===l){o=!1!==e.updateTodo(t)&&o}return o},g.a,g.b)),r._19(49152,null,0,_.a,[r.J],{todos:[0,"todos"]},{onDelete:"onDelete",onEdit:"onEdit"}),r._23(2),(n()(),r._22(null,["\n    "])),(n()(),r._24(16777216,null,null,1,null,o)),r._19(16384,null,0,m.h,[r._10,r._11],{ngIf:[0,"ngIf"]},null),(n()(),r._22(null,["\n  "])),(n()(),r._22(null,["\n"])),(n()(),r._22(null,["\n\n"]))],function(n,l){var t=l.component;n(l,6,0),n(l,9,0,r._25(l,9,0,n(l,10,0,r._20(l,0),t.todosService.todos,t.filter))),n(l,13,0,t.todosService.todos.length)},function(n,l){n(l,5,0,r._20(l,6).hostClass),n(l,8,0,r._20(l,9).hostClass)})}function u(n){return r._17(0,[(n()(),r._18(0,null,null,1,"todo-app",[],null,null,null,e,y)),r._19(49152,null,0,a.a,[h.a],null,null)],null,null)}var i=t("ZgFM"),r=t("/oeL"),c=t("HH7d"),s=t("5Dk3"),d=t("xg9G"),a=t("wQAS"),f=t("HAtf"),p=t("nR4a"),g=t("e4aZ"),_=t("7Z0U"),m=t("qbdv"),h=t("WNH4");t.d(l,"a",function(){return b});var v=[i.a],y=r._16({encapsulation:0,styles:v,data:{}}),b=r._26("todo-app",a.a,u,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},uP48:function(n,l,t){"use strict";var o=t("/oeL");t.d(l,"a",function(){return e});var e=function(){function n(n){this.el=n}return n.prototype.ngAfterViewInit=function(){this.el.nativeElement.focus()},n.ctorParameters=function(){return[{type:o.J}]},n}()},wQAS:function(n,l,t){"use strict";var o=t("WNH4");t.d(l,"a",function(){return e});var e=function(){function n(n){this.todosService=n,this.filter="all"}return n.prototype.applyFilter=function(n){this.filter!==n&&(this.filter=n)},n.prototype.addTodo=function(n){this.todosService.addTodo(n)},n.prototype.deleteTodo=function(n){this.todosService.deleteTodo(n)},n.prototype.updateTodo=function(n){this.todosService.updateTodo(n)},n.prototype.toggleAllTodo=function(n){this.todosService.toggleAll(n)},n.prototype.removeCompleted=function(){this.todosService.removeCompleted()},n.ctorParameters=function(){return[{type:o.a}]},n}()},xg9G:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n.prototype.transform=function(n,l){return void 0===l&&(l="all"),"completed"===l?n.filter(function(n){return n.completed}):"active"===l?n.filter(function(n){return!n.completed}):n},n}()},yrJ5:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=["[_nghost-%COMP%]{padding:6px 12px;width:100%}.todo-toggle[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.todo-toggle[_ngcontent-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;width:20px;text-align:center}.todo-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer;margin:0}.todo-buttons[_ngcontent-%COMP%]{-ms-flex-negative:0;flex-shrink:0}.todo-title[_ngcontent-%COMP%]{padding:5px 12px;width:100%}.todo-title.completed[_ngcontent-%COMP%]{text-decoration:line-through;color:#c9c9c9}.todo-title.editing[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;text-decoration:none}"]}},[0]);