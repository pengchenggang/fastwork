"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[558],{558:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("div",[t("Menu",{staticStyle:{position:"fixed",height:"calc(100% - 60px)",top:"60px",overflow:"auto"},attrs:{theme:"light","active-name":e.activeName},on:{"on-select":e.selectHandle}},[t("MenuItem",{attrs:{name:"getAcPage"}},[e._v("GetAc")]),t("MenuItem",{attrs:{name:"tableZenPage"}},[e._v("TableZen")]),t("MenuItem",{attrs:{name:"plopjs"}},[e._v("plopjs")])],1),t("div",{staticStyle:{"margin-left":"240px",padding:"10px"}},[t("div",{staticClass:"fastwork-article",staticStyle:{"background-color":"white",border:"1px solid #f2f2f2",padding:"20px"}},[t("router-view")],1)])],1)},s=[],i=(a(7658),{name:"components",props:{},components:{},data(){return{activeName:"getAc"}},watch:{},computed:{},methods:{getActiveName(){this.activeName=this.$router.history.current.name},selectHandle(e){console.info("selectHandle name",e),this.activeName=e,this.$router.push({name:e})}},created(){},activated(){},mounted(){this.getActiveName()},beforeDestroy(){}}),o=i,c=a(1001),r=(0,c.Z)(o,n,s,!1,null,null,null),l=r.exports}}]);