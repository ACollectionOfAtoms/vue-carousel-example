webpackJsonp([0],[function(t,s,i){function e(t){i(4)}var n=i(10)(i(3),i(11),e,null,null);t.exports=n.exports},,function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(1),n=i(0),a=i.n(n);e.a.config.productionTip=!1,new e.a({el:"#app",template:"<Carousel/>",components:{Carousel:a.a}})},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"carousel",data:function(){return{slides:[{imgLink:i(5),id:1},{imgLink:i(6),id:2},{imgLink:i(7),id:3},{imgLink:i(8),id:4},{imgLink:i(9),id:5}]}},methods:{next:function(){var t=this.slides.shift();this.slides=this.slides.concat(t)},previous:function(){var t=this.slides.pop();this.slides=[t].concat(this.slides)}}}},function(t,s){},function(t,s,i){t.exports=i.p+"static/img/catA.9babf15.jpg"},function(t,s,i){t.exports=i.p+"static/img/catB.e138520.jpg"},function(t,s,i){t.exports=i.p+"static/img/catC.f191b10.jpg"},function(t,s,i){t.exports=i.p+"static/img/catD.6954947.jpg"},function(t,s,i){t.exports=i.p+"static/img/catE.016bd61.jpg"},,function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"carousel-view"},[i("h1",{staticClass:"carousel-view__header"},[t._v(" Transition-Group Carousel Example ")]),t._v(" "),i("transition-group",{staticClass:"carousel",attrs:{name:"carousel",tag:"div"}},t._l(t.slides,function(t,s){return i("div",{key:t.id,staticClass:"slide"},[i("img",{staticClass:"slide__image",attrs:{src:t.imgLink}})])})),t._v(" "),i("div",{staticClass:"carousel-controls"},[i("button",{staticClass:"carousel-controls__button",on:{click:t.previous}},[t._v("prev")]),t._v(" "),i("button",{staticClass:"carousel-controls__button",on:{click:t.next}},[t._v("next")])])],1)},staticRenderFns:[]}}],[2]);
//# sourceMappingURL=app.14afb2ad036341b02803.js.map