(function(t){function e(e){for(var i,s,n=e[0],l=e[1],c=e[2],d=0,m=[];d<n.length;d++)s=n[d],o[s]&&m.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3962:function(t,e,a){t.exports=a.p+"img/logo_canoas.afdf3c5b.png"},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("795b"),o=a.n(i),r=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),s=a("bb71");a("da64");r["a"].use(s["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{light:""}},[i("v-toolbar",{attrs:{color:"teal",dark:""}},[i("v-toolbar-title",[i("v-btn",{attrs:{flat:"",to:{name:"servicos"}}},[t._v("Serviços")])],1),i("v-spacer"),i("v-toolbar-items",{staticClass:"hidden-md-and-up"},[i("v-btn",{attrs:{flat:"",icon:""}},[i("v-icon",[t._v("notifications")])],1),i("v-btn",{attrs:{flat:"",icon:""}},[i("v-icon",[t._v("account_circle")])],1),i("v-btn",{attrs:{flat:"",icon:"",to:{name:"admin.sistemas"}}},[i("v-icon",[t._v("apps")])],1),i("v-btn",{attrs:{flat:"",icon:"",to:{name:"admin.utilitarios"}}},[i("v-icon",[t._v("help")])],1)],1),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[i("v-btn",{attrs:{flat:""}},[t._v("Avisos")]),i("v-btn",{attrs:{flat:""}},[t._v("Usuários")]),i("v-btn",{attrs:{to:{name:"admin.sistemas"},flat:""}},[t._v("Sistemas")]),i("v-btn",{attrs:{to:{name:"admin.utilitarios"},flat:""}},[t._v("Utilitários")])],1)],1),t.isLoading?i("v-progress-linear",{staticStyle:{margin:"0px"},attrs:{height:"7",color:"green",indeterminate:!0}}):i("v-progress-linear",{staticStyle:{margin:"0px"},attrs:{height:"7",color:"light",indeterminate:!1}}),i("v-content",[i("v-container",{attrs:{"grid-list-md":""}},[i("router-view")],1)],1),i("v-footer",{staticClass:"pa-3"},[i("img",{attrs:{width:"80",alt:"Prefeitura de Canoas",src:a("bd6c")}}),i("v-spacer"),i("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)},l=[],c=a("bc3a"),u=a.n(c),d={name:"App",beforeCreate:function(){},components:{},data:function(){return{}}},m=d,_=a("2877"),p=a("6544"),f=a.n(p),v=a("7496"),h=a("8336"),b=a("a523"),g=a("549c"),x=a("553a"),k=a("132d"),w=a("8e36"),y=a("9910"),V=a("71d9"),$=a("2a7f"),C=Object(_["a"])(m,n,l,!1,null,null,null),S=C.exports;f()(C,{VApp:v["a"],VBtn:h["a"],VContainer:b["a"],VContent:g["a"],VFooter:x["a"],VIcon:k["a"],VProgressLinear:w["a"],VSpacer:y["a"],VToolbar:V["a"],VToolbarItems:$["a"],VToolbarTitle:$["b"]});var j=a("8c4f"),T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login text-xs-center"},[i("v-layout",[i("v-flex",[i("v-icon",{attrs:{icon:"users",color:"#006b85","x-large":""}},[t._v("person_pin")])],1)],1),i("v-layout",[i("v-flex",[i("v-text-field",{attrs:{label:"Usuário",required:""}}),i("v-text-field",{attrs:{type:"password",label:"Senha",required:""}}),i("v-btn",{attrs:{color:"info",to:{name:"servicos"}}},[t._v("Entrar")])],1)],1),i("br"),i("br"),i("img",{attrs:{width:"200",alt:"Prefeitura de Canoas",src:a("3962")}}),i("br"),i("img",{attrs:{width:"100",alt:"CANOASTEC",src:a("bd6c")}})],1)},O=[],E={},M=E,F=a("0e8f"),L=a("a722"),I=a("2677"),A=Object(_["a"])(M,T,O,!1,null,null,null),q=A.exports;f()(A,{VBtn:h["a"],VFlex:F["a"],VIcon:k["a"],VLayout:L["a"],VTextField:I["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"servicos text-xs-center"},[a("h1",{staticClass:"pb-3"},[t._v("Bem-vindo(a) Jefferson")]),a("h2",{staticClass:"pb-3"},[t._v("Selecione o serviço desejado")]),a("v-text-field",{attrs:{placeholder:"Digite o nome...",solo:"",clearable:"","append-icon":"search"},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.filtro,function(e){return a("v-flex",{key:e.id,attrs:{md2:"",sm3:"",xs4:"","d-flex":""}},[a("v-card",{attrs:{to:{path:e.link}}},[a("v-card-text",{staticClass:"px-0 text-xs-center"},[a("v-icon",{attrs:{color:"blue-grey darken-3",large:""}},[t._v(t._s(e.icone))]),a("br"),t._v(" "+t._s(e.nome)+"\n          ")],1)],1)],1)}),1)],1)},B=[],N=(a("6762"),a("2fdb"),{data:function(){return{nome:"",servicos:[{nome:"Troca de senha",icone:"vpn_key",link:"servicos/troca-senha"},{nome:"Buscar servidores",icone:"search",link:"servicos/buscar-servidores"},{nome:"Mural de avisos",icone:"info",link:"servicos/mural-avisos"},{nome:"Meus dados",icone:"person",link:"servicos/meus-dados"},{nome:"Sistemas",icone:"apps",link:"servicos/sistemas"},{nome:"Utilitários",icone:"help",link:"servicos/utilitarios"}]}},computed:{filtro:function(){var t=this;return null==this.nome||0==this.nome.length?this.servicos:this.servicos.filter(function(e){return e.nome.toUpperCase().includes(t.nome.toUpperCase())})}}}),D=N,P=a("b0af"),R=a("99d9"),z=Object(_["a"])(D,U,B,!1,null,null,null),J=z.exports;f()(z,{VCard:P["a"],VCardText:R["b"],VFlex:F["a"],VIcon:k["a"],VLayout:L["a"],VTextField:I["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n  Troca de senha\n")])},Y=[],G={},K=G,Q=Object(_["a"])(K,H,Y,!1,null,null,null),W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sistemas text-xs-center"},[a("h1",{staticClass:"pb-3"},[t._v("Bem-vindo(a) Jefferson")]),a("h2",{staticClass:"pb-3"},[t._v("Selecione o sistema desejado")]),a("v-text-field",{attrs:{placeholder:"Digite o nome...",solo:"",clearable:"","append-icon":"search"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.filterSistemas,function(e){return a("v-flex",{key:e.id,attrs:{md2:"",sm4:"",xs4:"","d-flex":""}},[a("v-card",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.mostrar(e)}}},[a("v-card-text",{staticClass:"px-0"},[a("v-icon",{attrs:{color:"blue-grey darken-3",large:""}},[t._v(t._s(e.icone))]),a("br"),t._v(" "+t._s(e.nome_abreviado)+"\n          ")],1)],1)],1)}),1),a("ModalSistema",{attrs:{sistema:t.sistemaSelecionado,name:"sistema"}}),a("br"),a("br"),a("v-btn",{attrs:{fab:"",dark:"",color:"teal",large:"",to:{name:"servicos"}}},[a("v-icon",{attrs:{dark:""}},[t._v("arrow_back")])],1)],1)},Z=[],tt=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{name:t.name,title:t.titulo},scopedSlots:t._u([t.sistema?{key:"actions",fn:function(){return[a("v-spacer"),a("v-btn",{attrs:{target:"_blank",href:t.sistema.producao,color:"primary",flat:"flat"}},[t._v(" ACESSAR ")])]},proxy:!0}:null],null,!0)},[t.sistema?a("div",[a("div",[t._v(t._s(t.sistema.sobre))])]):t._e()])}),et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:t.name,height:"auto"}},[a("v-card",{attrs:{"min-height":"100%"}},[a("v-card-title",{staticClass:"headline teal",staticStyle:{color:"#FFF"}},[t._t("title",[t._v(t._s(t.title))]),a("v-spacer"),a("button",{attrs:{icon:"",flat:""},on:{click:function(e){return t.close()}}},[a("v-icon",{attrs:{color:"white"}},[t._v("close")])],1)],2),a("v-card-text",[t._t("default")],2),a("v-card-actions",[t._t("actions")],2)],1)],1)},it=[],ot={props:["name","title"],methods:{close:function(){this.$modal.hide(this.name)}}},rt=ot,st=a("12b2"),nt=Object(_["a"])(rt,at,it,!1,null,null,null),lt=nt.exports;f()(nt,{VCard:P["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:st["a"],VIcon:k["a"],VSpacer:y["a"]});var ct={props:["sistema","name"],computed:{titulo:function(){return null!=this.sistema?this.sistema.nome:""}},components:{Modal:lt}},ut=ct,dt=Object(_["a"])(ut,tt,et,!1,null,null,null),mt=dt.exports;f()(dt,{VBtn:h["a"],VSpacer:y["a"]});var _t={api:"https://portalservicos.jeffersoncardoso.info/api","api.sistema":"https://portalservicos.jeffersoncardoso.info/api/sistema/","api.utilitario":"https://portalservicos.jeffersoncardoso.info/api/utilitario/"},pt={name:"sistemas",data:function(){return{name:"",sistemaSelecionado:null,sistemas:[]}},methods:{mostrar:function(t){this.sistemaSelecionado=t,this.$modal.show("sistema")}},created:function(){var t=this;this.$http.get(_t["api.sistema"]).then(function(e){t.sistemas=e.data})},computed:{filterSistemas:function(){var t=this;return null==this.name||0==this.name.length?this.sistemas:this.sistemas.filter(function(e){return e.name.toUpperCase().includes(t.name.toUpperCase())})}},components:{ModalSistema:mt}},ft=pt,vt=Object(_["a"])(ft,X,Z,!1,null,null,null),ht=vt.exports;f()(vt,{VBtn:h["a"],VCard:P["a"],VCardText:R["b"],VFlex:F["a"],VIcon:k["a"],VLayout:L["a"],VTextField:I["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"utilitarios text-xs-center"},[a("h1",{staticClass:"pb-3"},[t._v("Bem-vindo(a) Jefferson")]),a("h2",{staticClass:"pb-3"},[t._v("Selecione o utilitário desejado")]),a("v-text-field",{attrs:{placeholder:"Digite o nome...",solo:"",clearable:"","append-icon":"search"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.filterUtilitarios,function(e){return a("v-flex",{key:e.id,attrs:{md2:"",sm4:"",xs4:"","d-flex":""}},[a("v-card",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.mostrar(e)}}},[a("v-card-text",{staticClass:"px-0"},[a("v-icon",{attrs:{color:"blue-grey darken-3",large:""}},[t._v(t._s(e.icone))]),a("br"),t._v(" "+t._s(e.nome)+"\n          ")],1)],1)],1)}),1),a("ModalUtilitario",{attrs:{utilitario:t.utilitarioSelecionado,name:"utilitario"}}),a("br"),a("br"),a("v-btn",{attrs:{fab:"",dark:"",color:"teal",large:"",to:{name:"servicos"}}},[a("v-icon",{attrs:{dark:""}},[t._v("arrow_back")])],1)],1)},gt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{name:t.name,title:t.titulo}},[t.utilitario?a("div",[t._v("\n      "+t._s(t.utilitario.descricao)+"\n  ")]):t._e()])},kt=[],wt={props:["utilitario","name"],computed:{titulo:function(){return null!=this.utilitario?this.utilitario.nome:""}},components:{Modal:lt}},yt=wt,Vt=Object(_["a"])(yt,xt,kt,!1,null,null,null),$t=Vt.exports,Ct={data:function(){return{name:"",utilitarioSelecionado:null,utilitarios:[]}},methods:{mostrar:function(t){this.utilitarioSelecionado=t,this.$modal.show("utilitario")}},created:function(){var t=this;this.$http.get(_t["api.utilitario"]).then(function(e){t.utilitarios=e.data})},computed:{filterUtilitarios:function(){var t=this;return null==this.name||0==this.name.length?this.utilitarios:this.utilitarios.filter(function(e){return e.name.toUpperCase().includes(t.name.toUpperCase())})}},components:{ModalUtilitario:$t}},St=Ct,jt=Object(_["a"])(St,bt,gt,!1,null,null,null),Tt=jt.exports;f()(jt,{VBtn:h["a"],VCard:P["a"],VCardText:R["b"],VFlex:F["a"],VIcon:k["a"],VLayout:L["a"],VTextField:I["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",attrs:{row:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:"",sm6:""}},[a("v-text-field",{attrs:{label:"Nome",required:"",autofocus:""},model:{value:t.sistema.nome,callback:function(e){t.$set(t.sistema,"nome",e)},expression:"sistema.nome"}})],1),a("v-flex",{attrs:{lg3:"",md3:"",sm3:""}},[a("v-text-field",{attrs:{label:"Nome abreviado",required:""},model:{value:t.sistema.nome_abreviado,callback:function(e){t.$set(t.sistema,"nome_abreviado",e)},expression:"sistema.nome_abreviado"}})],1),a("v-flex",{attrs:{lg3:"",md3:"",sm3:"",xs12:""}},[a("v-select",{attrs:{items:["Interno","Terceiro"],label:"Tipo",required:"",value:"Interno"},model:{value:t.sistema.tipo,callback:function(e){t.$set(t.sistema,"tipo",e)},expression:"sistema.tipo"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",md4:"",sm4:"",xs12:""}},[a("v-text-field",{attrs:{label:"Responsável",required:""},model:{value:t.sistema.responsavel,callback:function(e){t.$set(t.sistema,"responsavel",e)},expression:"sistema.responsavel"}})],1),a("v-flex",{attrs:{lg3:"",md3:"",sm3:"",xs12:""}},[a("v-switch",{attrs:{label:"Mostrar como serviço"},model:{value:t.sistema.servico,callback:function(e){t.$set(t.sistema,"servico",e)},expression:"sistema.servico"}})],1),a("v-flex",{attrs:{lg3:"",md3:"",sm3:"",xs12:""}},[a("v-switch",{attrs:{label:"Está em operação?"},model:{value:t.sistema.operacao,callback:function(e){t.$set(t.sistema,"operacao",e)},expression:"sistema.operacao"}})],1),a("v-flex",{attrs:{lg2:"",md2:"",sm2:"",xs12:""}},[a("v-switch",{attrs:{label:"Ativo"},model:{value:t.sistema.status,callback:function(e){t.$set(t.sistema,"status",e)},expression:"sistema.status"}})],1)],1),a("v-layout",{attrs:{"pb-3":"",row:"",wrap:""}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",md4:"",sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"Desenvolvimento",required:"",value:"https://dsv.pmcanoas.rs.gov.br/"},model:{value:t.sistema.desenvolvimento,callback:function(e){t.$set(t.sistema,"desenvolvimento",e)},expression:"sistema.desenvolvimento"}})],1),a("v-flex",{attrs:{lg4:"",md4:"",sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"Homologação",required:"",value:"https://dsv.pmcanoas.rs.gov.br/"},model:{value:t.sistema.homologacao,callback:function(e){t.$set(t.sistema,"homologacao",e)},expression:"sistema.homologacao"}})],1),a("v-flex",{attrs:{lg4:"",md4:"",sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"Produção",required:"",value:"https://sistemas.canoas.rs.gov.br/"},model:{value:t.sistema.producao,callback:function(e){t.$set(t.sistema,"producao",e)},expression:"sistema.producao"}})],1)],1),a("v-layout",{attrs:{"pb-3":""}},[a("v-flex",[a("SelectIcone",{model:{value:t.sistema.icone,callback:function(e){t.$set(t.sistema,"icone",e)},expression:"sistema.icone"}})],1)],1),a("v-textarea",{attrs:{rows:"10",solo:"",label:"Sobre o sistema",required:""},model:{value:t.sistema.sobre,callback:function(e){t.$set(t.sistema,"sobre",e)},expression:"sistema.sobre"}}),a("div",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.save()}}},[t._v("Salvar Sistema")])],1)],1)},Et=[],Mt=a("bd86"),Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-autocomplete",{attrs:{placeholder:"Selecione o ícone",value:t.value,items:t.items,"persistent-hint":""},on:{input:t.change},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[a("v-icon",[t._v(t._s(i))]),t._v("   "+t._s(i)+"\n    ")]}},{key:"item",fn:function(e){var i=e.item;return[a("v-icon",[t._v(t._s(i))]),t._v("   "+t._s(i)+"\n    ")]}}])})},Lt=[],It={props:["value"],methods:{change:function(t){this.$emit("input",t)}},data:function(){return{items:["3d_rotation","ac_unit","access_alarm","access_alarms","access_time","accessibility","accessible","account_balance","account_balance_wallet","account_box","account_circle","adb","add","add_a_photo","add_alarm","add_alert","add_box","add_circle","add_circle_outline","add_location","add_shopping_cart","add_to_photos","add_to_queue","adjust","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","alarm","alarm_add","alarm_off","alarm_on","album","all_inclusive","all_out","android","announcement","apps","archive","arrow_back","arrow_downward","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_upward","art_track","aspect_ratio","assessment","assignment","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assistant","assistant_photo","attach_file","attach_money","attachment","audiotrack","autorenew","av_timer","backspace","backup","battery_alert","battery_charging_full","battery_full","battery_std","battery_unknown","beach_access","beenhere","block","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_searching","blur_circular","blur_linear","blur_off","blur_on","book","bookmark","bookmark_border","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","branding_watermark","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_auto","brightness_high","brightness_low","brightness_medium","broken_image","brush","bubble_chart","bug_report","build","burst_mode","business","business_center","cached","cake","call","call_end","call_made","call_merge","call_missed","call_missed_outgoing","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_rear","camera_roll","cancel","card_giftcard","card_membership","card_travel","casino","cast","cast_connected","center_focus_strong","center_focus_weak","change_history","chat","chat_bubble","chat_bubble_outline","check","check_box","check_box_outline_blank","check_circle","chevron_left","chevron_right","child_care","child_friendly","chrome_reader_mode","class","clear","clear_all","close","closed_caption","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_upload","code","collections","collections_bookmark","color_lens","colorize","comment","compare","compare_arrows","computer","confirmation_number","contact_mail","contact_phone","contacts","content_copy","content_cut","content_paste","control_point","control_point_duplicate","copyright","create","create_new_folder","credit_card","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","dashboard","data_usage","date_range","dehaze","delete","delete_forever","delete_sweep","description","desktop_mac","desktop_windows","details","developer_board","developer_mode","device_hub","devices","devices_other","dialer_sip","dialpad","directions","directions_bike","directions_boat","directions_bus","directions_car","directions_railway","directions_run","directions_subway","directions_transit","directions_walk","disc_full","dns","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","dock","domain","done","done_all","donut_large","donut_small","drafts","drag_handle","drive_eta","dvr","edit","edit_location","eject","email","enhanced_encryption","equalizer","error","error_outline","euro_symbol","ev_station","event","event_available","event_busy","event_note","event_seat","exit_to_app","expand_less","expand_more","explicit","explore","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","face","fast_forward","fast_rewind","favorite","favorite_border","featured_play_list","featured_video","feedback","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_download","file_upload","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_none","filter_tilt_shift","filter_vintage","find_in_page","find_replace","fingerprint","first_page","fitness_center","flag","flare","flash_auto","flash_off","flash_on","flight","flight_land","flight_takeoff","flip","flip_to_back","flip_to_front","folder","folder_open","folder_shared","folder_special","font_download","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_indent_decrease","format_indent_increase","format_italic","format_line_spacing","format_list_bulleted","format_list_numbered","format_paint","format_quote","format_shapes","format_size","format_strikethrough","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","forum","forward","forward_10","forward_30","forward_5","free_breakfast","fullscreen","fullscreen_exit","functions","g_translate","gamepad","games","gavel","gesture","get_app","gif","golf_course","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grain","graphic_eq","grid_off","grid_on","group","group_add","group_work","hd","hdr_off","hdr_on","hdr_strong","hdr_weak","headset","headset_mic","healing","hearing","help","help_outline","high_quality","highlight","highlight_off","history","home","hot_tub","hotel","hourglass_empty","hourglass_full","http","https","image","image_aspect_ratio","import_contacts","import_export","important_devices","inbox","indeterminate_check_box","info","info_outline","input","insert_chart","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_photo","invert_colors","invert_colors_off","iso","keyboard","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_hide","keyboard_return","keyboard_tab","keyboard_voice","kitchen","label","label_outline","landscape","language","laptop","laptop_chromebook","laptop_mac","laptop_windows","last_page","launch","layers","layers_clear","leak_add","leak_remove","lens","library_add","library_books","library_music","lightbulb_outline","line_style","line_weight","linear_scale","link","linked_camera","list","live_help","live_tv","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_florist"]}}},At=It,qt=a("c6a6"),Ut=Object(_["a"])(At,Ft,Lt,!1,null,null,null),Bt=Ut.exports;f()(Ut,{VAutocomplete:qt["a"],VIcon:k["a"]});var Nt={data:function(){var t;return{sistema:(t={nome:"",nome_abreviado:"",tipo:"",icone:"",responsavel:""},Object(Mt["a"])(t,"responsavel",""),Object(Mt["a"])(t,"sobre",""),Object(Mt["a"])(t,"desenvolvimento","https://dsv.pmcanoas.rs.gov.br/"),Object(Mt["a"])(t,"homologacao","https://hml.pmcanoas.rs.gov.br/"),Object(Mt["a"])(t,"producao","https://sistemas.canoas.rs.gov.br/"),Object(Mt["a"])(t,"servico",!0),Object(Mt["a"])(t,"operacao",!0),Object(Mt["a"])(t,"status",!0),t)}},created:function(){var t=this;this.estaEditando()&&this.$http.get(_t["api.sistema"]+this.getId()).then(function(e){t.sistema=e.data})},methods:{getId:function(){return this.$router.currentRoute.params.id},estaEditando:function(){return"admin.sistemas.editar"==this.$router.currentRoute.name},save:function(){var t,e=this;t=this.estaEditando()?this.$http.put(_t["api.sistema"]+this.getId(),this.sistema):this.$http.post(_t["api.sistema"],this.sistema),t.then(function(t){e.sistema=t.data,e.$router.push({name:"admin.sistemas.listar"})}).catch(function(t){console.log(t)})}},components:{SelectIcone:Bt}},Dt=Nt,Pt=a("4bd4"),Rt=a("b56d"),zt=a("b73d"),Jt=a("a844"),Ht=Object(_["a"])(Dt,Ot,Et,!1,null,null,null),Yt=Ht.exports;f()(Ht,{VBtn:h["a"],VFlex:F["a"],VForm:Pt["a"],VLayout:L["a"],VSelect:Rt["a"],VSwitch:zt["a"],VTextField:I["a"],VTextarea:Jt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?t._e():a("div",[a("v-text-field",{attrs:{placeholder:"Digite o nome...",solo:"",clearable:"","append-icon":"search",autofocus:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),t.filtro.length>0?a("v-list",[t._l(t.filtro,function(e){return a("span",{key:e.id},[a("v-list-tile",[a("v-list-tile-avatar",{on:{click:function(a){return t.mostrarInformacoes(e)}}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(e.icone))])],1)],1),a("v-list-tile-content",[a("strong",[t._v(t._s(e.nome_abreviado))]),a("small",{staticClass:"hidden-xs-only"},[t._v(t._s(e.nome))])]),a("v-list-tile-action",{attrs:{title:"Editar"}},[a("v-btn",{attrs:{to:{name:"admin.sistemas.editar",params:{id:e.id}},icon:"",ripple:""}},[a("v-icon",{attrs:{small:""}},[t._v("edit")])],1)],1),a("v-list-tile-action",{attrs:{title:"Excluir"},on:{click:function(a){return t.confirmarExcluir(e)}}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{small:""}},[t._v("clear")])],1)],1)],1),a("v-divider")],1)}),a("h4",{staticClass:"text-xs-right pr-2 pt-2"},[t._v(t._s(t.filtro.length)+" sistemas encontrados")])],2):a("v-alert",{attrs:{value:!0,type:"info"}},[t._v(" Nenhum sistema encontrado. ")]),a("v-btn",{staticClass:"mb-5",attrs:{to:{name:"admin.sistemas.cadastrar"},color:"teal",dark:"",absolute:"",bottom:"",right:"",fab:"",large:""}},[a("v-icon",[t._v("add")])],1),t.sistema?a("ModalSimNao",{attrs:{name:"excluir",titulo:"Excluir sistema"},on:{sim:t.excluir}},[t._v("\n    Deseja excluir "),a("b",[t._v('"'+t._s(this.sistema.nome)+'"')]),t._v(" da lista de sistemas?\n  ")]):t._e(),t.sistema?a("ModalFechar",{attrs:{name:"mostrar",titulo:t.sistema.nome}},[a("div",{staticClass:"mb-2"},[a("a",{staticClass:"pr-2",attrs:{target:"_blank",href:t.sistema.desenvolvimento}},[t._v("Desenvolvimento")]),a("a",{staticClass:"pr-2",attrs:{target:"_blank",href:t.sistema.homologacao}},[t._v("Homologação")]),a("a",{staticClass:"pr-2",attrs:{target:"_blank",href:t.sistema.producao}},[t._v("Produção")])]),a("v-layout",{attrs:{"my-2":""}},[a("v-flex",[a("strong",[t._v("Tipo: ")]),a("span",[t._v(t._s(t.sistema.tipo))])]),a("v-flex",[a("strong",[t._v("Responsável: ")]),a("span",[t._v(t._s(t.sistema.responsavel))])])],1),a("v-divider"),a("v-divider"),a("div",{staticClass:"mt-2"},[t._v("\n      "+t._s(this.sistema.sobre)+"\n    ")])],1):t._e()],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{name:t.name,title:t.titulo},scopedSlots:t._u([{key:"actions",fn:function(){return[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){return t.nao()}}},[t._v(" NÃO ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){return t.sim()}}},[t._v(" SIM ")])]},proxy:!0}])},[t._t("default")],2)},Wt=[],Xt={props:["name","titulo"],methods:{nao:function(){this.$modal.hide(this.name)},sim:function(){this.$emit("sim")}},components:{Modal:lt}},Zt=Xt,te=Object(_["a"])(Zt,Qt,Wt,!1,null,null,null),ee=te.exports;f()(te,{VBtn:h["a"],VSpacer:y["a"]});var ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{name:t.name,title:t.titulo}},[t._t("default")],2)},ie=[],oe={props:["name","titulo"],components:{Modal:lt}},re=oe,se=Object(_["a"])(re,ae,ie,!1,null,null,null),ne=se.exports,le={data:function(){return{nome:"",sistema:null,conteudo:null,sistemas:[]}},created:function(){var t=this;this.$http.get(_t["api.sistema"]).then(function(e){t.sistemas=e.data})},methods:{mostrarInformacoes:function(t){var e=this;this.sistema=t,this.$nextTick(function(){e.$modal.show("mostrar")})},confirmarExcluir:function(t){var e=this;this.sistema=t,this.$nextTick(function(){e.$modal.show("excluir")})},excluir:function(){var t=this;this.modalExcluir=!1,this.$http.delete(_t["api.sistema"]+this.sistema.id).then(function(e){t.sistemas.splice(t.sistemas.indexOf(t.sistema),1),t.sistema=null})}},computed:{filtro:function(){var t=this;return null==this.nome||0==this.nome.length?this.sistemas:this.sistemas.filter(function(e){var a=t.nome.toUpperCase().trim();return e.nome.toUpperCase().includes(a)||e.nome_abreviado.toUpperCase().includes(a)})}},components:{ModalSimNao:ee,ModalFechar:ne}},ce=le,ue=a("0798"),de=a("ce7e"),me=a("8860"),_e=a("ba95"),pe=a("40fe"),fe=a("c954"),ve=a("5d23"),he=Object(_["a"])(ce,Gt,Kt,!1,null,null,null),be=he.exports;f()(he,{VAlert:ue["a"],VBtn:h["a"],VDivider:de["a"],VFlex:F["a"],VIcon:k["a"],VLayout:L["a"],VList:me["a"],VListTile:_e["a"],VListTileAction:pe["a"],VListTileAvatar:fe["a"],VListTileContent:ve["a"],VTextField:I["a"]});var ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:"",sm12:"",xs12:""}},[a("v-text-field",{attrs:{label:"Nome",autofocus:""},model:{value:t.utilitario.nome,callback:function(e){t.$set(t.utilitario,"nome",e)},expression:"utilitario.nome"}})],1),a("v-flex",{attrs:{lg4:"",md4:"",sm10:"",xs10:""}},[a("v-select",{attrs:{items:t.icones,label:"Ícone",required:"",value:"apps"},model:{value:t.utilitario.icone,callback:function(e){t.$set(t.utilitario,"icone",e)},expression:"utilitario.icone"}})],1),a("v-flex",{attrs:{lg2:"",md2:"",sm2:"",xs2:"","mt-3":""}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(t.utilitario.icone))])],1)],1),a("v-textarea",{attrs:{rows:"10",label:"Conteúdo"},model:{value:t.utilitario.descricao,callback:function(e){t.$set(t.utilitario,"descricao",e)},expression:"utilitario.descricao"}}),a("div",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.save()}}},[t._v("Salvar Utilitário")])],1)],1)},xe=[],ke={data:function(){return{utilitario:{nome:"",icone:"description",link:"",descricao:"",tipo:"Página"},icones:[{text:"Documento",value:"description"},{text:"Aplicativo",value:"apps"},{text:"Link",value:"launch"},{text:"Ajuda",value:"help"},{text:"Ínicio",value:"home"},{text:"Telefone",value:"call"},{text:"Local",value:"location_on"},{text:"Mensagem",value:"mail"}]}},created:function(){},beforeCreate:function(){var t=this;if("admin.utilitarios.editar"==this.$router.currentRoute.name){var e=this.$router.currentRoute.params.id;this.$http.get(_t["api.utilitario"]+e).then(function(e){t.utilitario=e.data})}},methods:{getId:function(){return this.$router.currentRoute.params.id},estaEditando:function(){return"admin.utilitarios.editar"==this.$router.currentRoute.name},save:function(){var t,e=this;t=this.estaEditando()?this.$http.put(_t["api.utilitario"]+this.getId(),this.utilitario):this.$http.post(_t["api.utilitario"],this.utilitario),t.then(function(t){e.utilitario=t.data,e.$router.push({name:"admin.utilitarios.listar"})}).catch(function(t){console.log(t)})}}},we=ke,ye=Object(_["a"])(we,ge,xe,!1,null,null,null),Ve=ye.exports;f()(ye,{VBtn:h["a"],VFlex:F["a"],VForm:Pt["a"],VIcon:k["a"],VLayout:L["a"],VSelect:Rt["a"],VTextField:I["a"],VTextarea:Jt["a"]});var $e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?t._e():a("div",[a("v-text-field",{attrs:{placeholder:"Digite o nome...",solo:"",clearable:"","append-icon":"search",autofocus:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),t.filtro.length>0?a("v-list",[t._l(t.filtro,function(e){return a("span",{key:e.id},[a("v-list-tile",[a("v-list-tile-avatar",[e.link?a("v-btn",{attrs:{target:"_blank",href:e.link,icon:"",ripple:""}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(e.icone))])],1):a("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(a){return t.mostrarInformacoes(e)}}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(e.icone))])],1)],1),a("v-list-tile-content",[t._v("\n          "+t._s(e.nome)+"\n        ")]),a("v-list-tile-action",{attrs:{title:"Editar"}},[a("v-btn",{attrs:{to:{name:"admin.utilitarios.editar",params:{id:e.id}},icon:"",ripple:""}},[a("v-icon",{attrs:{small:""}},[t._v("edit")])],1)],1),a("v-list-tile-action",{attrs:{title:"Excluir"},on:{click:function(a){return t.confirmarExcluir(e)}}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{small:""}},[t._v("clear")])],1)],1)],1),a("v-divider")],1)}),a("h4",{staticClass:"text-xs-right pr-2 pt-2"},[t._v(t._s(t.filtro.length)+" utilitários encontrados")])],2):a("v-alert",{attrs:{value:!0,type:"info"}},[t._v(" Nenhum utilitário encontrado. ")]),a("v-btn",{staticClass:"mb-5",attrs:{to:{name:"admin.utilitarios.cadastrar"},color:"teal",dark:"",absolute:"",bottom:"",right:"",fab:"",large:""}},[a("v-icon",[t._v("add")])],1),t.utilitario?a("ModalSimNao",{attrs:{name:"excluir",titulo:"Excluir utilitário"},on:{sim:t.excluir}},[t._v("\n    Deseja excluir "),a("b",[t._v('"'+t._s(this.utilitario.nome)+'"')]),t._v(" da lista de utilitários?\n  ")]):t._e(),t.utilitario?a("ModalFechar",{attrs:{name:"mostrar",titulo:t.utilitario.nome}},[a("div",{staticClass:"mt-2"},[t._v("\n      "+t._s(this.utilitario.descricao)+"\n    ")])]):t._e()],1)},Ce=[],Se={data:function(){return{nome:"",utilitario:null,utilitarios:[]}},created:function(){var t=this;this.$http.get(_t["api.utilitario"]).then(function(e){t.utilitarios=e.data})},methods:{mostrarInformacoes:function(t){var e=this;this.utilitario=t,this.$nextTick(function(){e.$modal.show("mostrar")})},confirmarExcluir:function(t){var e=this;this.utilitario=t,this.$nextTick(function(){e.$modal.show("excluir")})},excluir:function(){var t=this;this.$http.delete(_t["api.utilitario"]+this.utilitario.id).then(function(e){t.utilitarios.splice(t.utilitarios.indexOf(t.utilitario),1),t.utilitario=null})}},computed:{filtro:function(){var t=this;return null==this.nome||0==this.nome.length?this.utilitarios:this.utilitarios.filter(function(e){return e.nome.toUpperCase().includes(t.nome.toUpperCase().trim())})}},components:{ModalSimNao:ee,ModalFechar:ne}},je=Se,Te=Object(_["a"])(je,$e,Ce,!1,null,null,null),Oe=Te.exports;f()(Te,{VAlert:ue["a"],VBtn:h["a"],VDivider:de["a"],VIcon:k["a"],VList:me["a"],VListTile:_e["a"],VListTileAction:pe["a"],VListTileAvatar:fe["a"],VListTileContent:ve["a"],VTextField:I["a"]}),r["a"].use(j["a"]);var Ee=new j["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/login",name:"login",component:q},{path:"/servicos",name:"servicos",component:J},{path:"/servicos/troca-senha",name:"troca-senha",component:W},{path:"/servicos/sistemas",name:"sistemas",component:ht},{path:"/servicos/utilitarios",name:"utilitarios",component:Tt},{path:"/admin",name:"admin",component:J},{path:"/admin/sistemas",name:"admin.sistemas",component:be},{path:"/admin/sistemas/cadastrar",name:"admin.sistemas.cadastrar",component:Yt},{path:"/admin/sistemas/:id/editar",name:"admin.sistemas.editar",component:Yt},{path:"/admin/sistemas/listar",name:"admin.sistemas.listar",component:be},{path:"/admin/utilitarios",name:"admin.utilitarios",component:Oe},{path:"/admin/utilitarios/cadastrar",name:"admin.utilitarios.cadastrar",component:Ve},{path:"/admin/utilitarios/:id/editar",name:"admin.utilitarios.editar",component:Ve},{path:"/admin/utilitarios/listar",name:"admin.utilitarios.listar",component:Oe}]}),Me=a("9483");Object(Me["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Fe=a("a65d"),Le=a.n(Fe),Ie=a("1881"),Ae=a.n(Ie);r["a"].use(Le.a),r["a"].use(Ae.a),r["a"].prototype.$http=u.a,r["a"].mixin({data:function(){return{isLoading:!1}}}),u.a.interceptors.response.use(function(t){return t},function(t){return r["a"].toasted.show(t.message,{position:"bottom-center",duration:2e3}),o.a.reject(t)}),r["a"].mixin({data:function(){return{isLoading:!1}},created:function(){var t=this;this.$http.interceptors.request.use(function(e){return t.isLoading=!0,e},function(t){return o.a.reject(t)}),this.$http.interceptors.response.use(function(e){return t.isLoading=!1,e},function(e){return t.isLoading=!1,o.a.reject(e)})}}),r["a"].config.productionTip=!1;new r["a"]({router:Ee,render:function(t){return t(S)}}).$mount("#app")},bd6c:function(t,e,a){t.exports=a.p+"img/logo_canoastec.29866d06.png"}});
//# sourceMappingURL=app.d51dd9dd.js.map