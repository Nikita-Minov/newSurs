﻿(()=>{"use strict";var __webpack_modules__={540249:(e,o,t)=>{t.d(o,{default:()=>a});const a=(0,t(379333).makeIcon)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16)},492867:(e,o,t)=>{t.d(o,{default:()=>a});const a=(0,t(379333).makeIcon)("Icon24ChevronLeft","chevron_left_24","0 0 24 24",'<symbol fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chevron_left_24"><path d="M15.884 18.116a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 0 1 1.768 1.768L9.768 12z" fill="currentColor" /></symbol>',24,24)},495707:(e,o,t)=>{t.d(o,{default:()=>a});const a=(0,t(379333).makeIcon)("Icon24Done","done_24","0 0 24 24",'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.193 4.193a1 1 0 0 0 1.414 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2Z" fill="currentColor" /></g></symbol>',24,24)},396445:(e,o,t)=>{t.d(o,{default:()=>a});const a=(0,t(379333).makeIcon)("Icon56ErrorOutline","error_outline_56","0 0 56 56",'<symbol viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" id="error_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4Zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7Zm0 27a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-17.5a1.5 1.5 0 0 1 1.5 1.5v11l-.007.144A1.5 1.5 0 0 1 26.5 29V18l.007-.144A1.5 1.5 0 0 1 28 16.5Z" fill="currentColor" fill-rule="nonzero" /></g></symbol>',56,56)},429449:(e,o,t)=>{function a(){return{icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="user_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="user_outline_20__Icons-20/user_outline_20"><g id="user_outline_20__user_outline_20"><path opacity=".1" d="M0 0h20v20H0z"/><path d="M12.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM14 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 15.5c0 .72.36 1 1 1h10c.64 0 1-.28 1-1 0-2.33-2.57-3.5-6-3.5s-6 1.17-6 3.5Zm-1.5 0c0-3.48 3.33-5 7.5-5s7.5 1.52 7.5 5c0 1.63-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-.87-2.5-2.5Z" id="user_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"/></g></g></g></svg>',name:"user_outline_20"}}t.d(o,{getIcon20UserOutline:()=>a})},80842:(e,o,t)=>{t.d(o,{GROUPS_ADMIN_LEVEL_USER:()=>a,GROUPS_ADMIN_LEVEL_ADMINISTRATOR:()=>_,USER_META_FIELD_IS_DONUT_PAID_MEMBER:()=>r,GROUPS_CLASS_EVENT:()=>i});var a=0,_=3,r="is_donut_paid_member",i=2},573734:(e,o,t)=>{t.d(o,{default:()=>w});t(751876),t(283946),t(59357),t(21466);var a=t(315544),_=t(726271),r=t(786067),i=t(40906),n=t(695724),l=t(49535),d=t(850167),s=t(635676),p=t(803834),u=t(124041),c={init:function(e,o){if(!(e=(0,a.ge)(e)))return null;var t=(0,a.data)(e,"composer");if(t)return t;t={input:e,inited:!1,options:o},(0,a.data)(e,"composer",t),t.wddWrap=(0,a.ce)("div",{className:"composer_wdd clear_fix "+(o.wddClass||""),id:e.id+"_composer_wdd",innerHTML:'<input type="hidden" id="'+e.id+'_composer_wdd_term"/>'},{width:o.width||(0,a.getSize)(e)[0]}),o.appendTo&&(0,n.isFunction)(o.appendTo)?o.appendTo(t.wddWrap):(0,a.domInsertBefore)(t.wddWrap,e.nextSibling),t.wddInput=t.wddWrap.firstChild,t.wdd=WideDropdown.initSelect(t.wddWrap,(0,n.extend)({text:t.wddInput,input:e,noResult:o.lang.noResult||"",introText:o.lang.introText||"",toup:o.toup,wddOpts:o.wddOpts,searchKeys:o.searchKeys,width:"auto",onItemSelect:c.onItemSelect.bind(c).pbind(t)},o.wddOpts||{url:"hints.php",params:{act:"a_json_friends",from:"composer"}})),e.dd=t.wddWrap.id,c.initEvents(t),o.media&&(t.addMedia=new window.MediaSelector(o.media.lnk,o.media.preview,o.media.types,o.media.options,o.media.gearEl,o.media.actionsEl)),(0,a.setStyle)(t.wddWrap,"width",""),t.inited=!0,c.updateAutoComplete(t),t.edit=o.edit,t.isReply=o.isReply,c.updateArticleConvertSuggest(t);var _=cur.onMediaChanged;return cur.onMediaChanged=function(){c.updateArticleConvertSuggest(t),_&&_()},t},initEvents:function(e){(0,l.addEvent)(e.input,"keyup keydown keypress",c.onKeyEvent.pbind(e)),(0,l.addEvent)(e.input,"click mousedown mouseup focus blur paste",c.onMouseEvent.pbind(e))},destroy:function(e){WideDropdown.deinit(e.wddWrap),(0,a.cleanElems)(e.input,e.wddWrap),(0,a.re)(e.wddWrap),e.inited=!1,e.addMedia&&e.addMedia.destroy(),(0,a.data)(e.input,"composer",null),(0,a.re)(e.articleConvertEl),e.articleConvertEl=!1},onKeyEvent:function(e,o){var t=!o.shiftKey&&(0,n.inArray)(o.keyCode,[l.KEY.UP,l.KEY.DOWN,l.KEY.RETURN]),r=e.wdd&&t;if("keypress"==o.type||"keydown"==o.type){if(o.keyCode==l.KEY.RETURN||10==o.keyCode){if(e.select&&e.select.isVisible())return(0,l.triggerEvent)(document,o.type,o),(0,l.cancelEvent)(o);if(o.ctrlKey&&(0,n.isFunction)(e.options.onSubmit))return!0}if(o.keyCode==l.KEY.TAB){var i=e.input,d=window.Emoji?Emoji.editableVal(i):"",s=c.getCursorPosition(i),p=(d.substr(0,s)+String.fromCodePoint(1)+d.substr(s)).match(/^[\s\S]*(@|\*)[\S]+\s*\([\s\S]*?\001[\s\S]*?\)\s*/);if(p){var u=p[0].length-1;return(0,a.elfocus)(e.input,u,u),(0,l.cancelEvent)(o)}}var w=0;for(var m in e.wdd.shown)w+=1;if(r&&(0,a.isVisible)(e.wdd.listWrap)&&w)return o.type==(_.browser.opera&&!_.browser.chrome?"keypress":"keydown")&&WideDropdown._textEvent(o),(0,l.cancelEvent)(o)}if("keyup"==o.type&&!r){if(65==o.keyCode&&o.ctrlKey)return;e.wdd&&(0,n.inArray)(o.keyCode,[l.KEY.SPACE,l.KEY.HOME,190,191,78,55,49])&&c.hideSelectList(e)}"keyup"!=o.type||r&&o.keyCode!=l.KEY.RETURN||c.updateAutoComplete(e,o),c.updateArticleConvertSuggest(e)},isArticleConvertSuggestAvailable:function(e){if(e.edit||e.isReply)return!1;var o=!!cur.wallAddMedia&&cur.wallAddMedia.types,t=!1;if(o)for(var a=0;a<o.length;a++)if("article"==o[a][0]){t=!0;break}if(!t||!(0,d.isArticleEditorAvailable)())return!1;var _=!0;return(0,n.each)(cur.wallAddMedia.getMedias()||[],(function(e,o){if(!(0,n.inArray)(o[0],["photo","video","postpone","mark_as_ads"]))return _=!1,!1})),!!_&&!!(cur.options.articleConvertThreshold>0&&e.curValue.length>=cur.options.articleConvertThreshold)},updateArticleConvertSuggest:function(e){if(c.isArticleConvertSuggestAvailable(e)){if(!e.articleConvertEl){var o=(0,a.gpeByClass)("post_field_wrap",e.input),t=(0,a.geByClass1)("post_actions_btns",o);e.articleConvertEl=u.FlatButton.render({children:(0,r.getLang)("profile_convert_to_article_short"),appearance:u.FlatButtonAppearance.ACCENT_OUTLINE,size:u.FlatButtonSize.M,round:!0,className:"article_post_convert"}),t?o.insertBefore(e.articleConvertEl,t):o.appendChild(e.articleConvertEl),(0,l.removeEvent)(e.articleConvertEl),(0,l.addEvent)(e.articleConvertEl,"click",(function(){cur.postComposer=e;var o=[];(0,n.each)(cur.wallAddMedia.getMedias()||[],(function(e,t){(0,n.inArray)(t[0],["photo","video"])&&o.push(t[0]+"_"+t[1])})),(0,d.openArticleEditor)(cur.oid,0,{text:e.curValue,medias:o})}))}(0,a.show)(e.articleConvertEl)}else(0,a.re)(e.articleConvertEl),delete e.articleConvertEl},onMouseEvent:function(e,o){"blur"!=o.type?("focus"!=o.type&&"click"!=o.type||c.updateAutoComplete(e,o),"paste"==o.type&&setTimeout(c.updateAutoComplete.pbind(e,o),0)):c.hideSelectList(e)},updateAutoComplete:function(e,o){var t=e.input,_=(e.options&&e.options.getValue||window.Emoji&&Emoji.editableVal||a.val)(t),r=Math.max(_.lastIndexOf("@"),_.lastIndexOf("*")),i=!1;if(r>-1){var n=c.getCursorPosition(t),l=_.substr(0,n),d=l.match(/(^|[\s.,:\'\"«»;>\)\(]|\#[\w_\.\u0400-\u04FF]+)[@\*]([^,@\*\(\)\?\!\s\n\r \u00A0]*)$/);r=Math.max(l.lastIndexOf("@"),l.lastIndexOf("*")),d&&"."!==d[2].substr(-1)&&(i=d[2])}!1===i&&delete e.ignoredTerm,void 0!==e.ignoredTerm&&i==e.ignoredTerm&&(i=!1),e.curValue=_,e.curTerm=i,e.curPos=r,(0,a.val)(e.wddInput,i),c.toggleSelectList(e),!o||"keyup"!=o.type&&"paste"!=o.type||(e.options.onValueChange&&e.options.onValueChange(_,"keyup"!=o.type),e.addMedia&&e.addMedia.checkMessageURLs(_,"keyup"!=o.type),e.options.checkLen&&e.options.checkLen(_))},toggleSelectList:function(e){var o=e.curTerm;!1===o?c.hideSelectList(e):c.showSelectList(e,o)},hideSelectList:function(e){e.wddInput.focused=!1,WideDropdown._hideList(e.wdd);var o=e.options||{};o.onHide&&o.onHide()},showSelectList:function(e,o){function t(t){e.wddInput.focused=!0,WideDropdown.items(e.wdd.id,t||[]),WideDropdown._updateList(e.wdd,!1,o);var a=e.options||{};a.onShow&&a.onShow()}"function"==typeof cur.wallMentions&&(cur.wallMentions=cur.wallMentions()),cur.wallMentions&&"function"==typeof cur.wallMentions.then?cur.wallMentions.then((function(e){t(e)})):t(cur.wallMentions)},onItemSelect:function(e,o){if(!o)return!1;var t=o[2].replace("@",""),_=o[8]||o[1],r=e.curValue.substr(0,e.curPos),i=e.curValue.substr(e.curPos),l=!!r.match(/\#[\w_\.\u0400-\u04FF]+$/i);document.activeElement.classList.contains("_im_text")&&(/^(?:id|club)\d{1,}$/.test(t)||(l=!0));var d=e.options.poster,s=window.Emoji&&void 0!==e.input.emojiId||d;s||d?i=(0,n.clean)(i):_=(0,n.replaceEntities)(_),cur.selNum=(cur.selNum||0)+1;var p=new RegExp("^(@|\\*)"+(0,n.escapeRE)(e.curTerm)+"(?:\\s+\\((?:(.*?)\\))?\\s*)?","");return i=i.replace(p,(function(e,o,a){var r=o+t+" ";return l?r+=s||d?'<span id="tmp_sel_'+cur.selNum+'"></span>':"":(r+=(s||d?'<span id="tmp_sel_'+cur.selNum+'">':"")+"(",r+=_.replace(/[\(\)\]\[]/g,""),r+=")"+(s||d?"</span>":"")+" "),r})),l||!r||r.match(/[\.\(\)\?\!\s\n\r\'\"«» \u00A0]$/)||(i=" "+i),c.hideSelectList(e),s||d?(Emoji.val(e.input,(0,n.clean)(r)+i),Emoji.focus(e.input),Emoji.editableFocus(e.input,(0,a.ge)("tmp_sel_"+cur.selNum),!0),d&&d.checkText()):((0,a.val)(e.input,r+i),(0,a.elfocus)(e.input)),(0,n.isFunction)(e.options.onItemSelect)&&e.options.onItemSelect(o),!1},getCursorPosition:function(e){if(void 0!==e.selectionStart)return e.selectionStart;if(void 0!==window.getSelection){var o=window.getSelection();if(!o||!o.rangeCount)return 0;var t=o.getRangeAt(0),_=t.cloneRange(),r=(0,a.ce)("div");return _.selectNodeContents(e),_.setEnd(t.startContainer,t.startOffset),r.appendChild(_.cloneContents()),(window.Emoji?Emoji.editableVal:a.val)(r).replace(/\n$/,"").length}return 0},getSendParams:function(e,o,t){var _=e.addMedia||{},l=_.chosenMedia||{},d=_&&_.getMedias?_.getMedias():[],u=_.shareData||{},c=e&&e.options.media&&e.options.media.options.limit||0,w=e.input,m=cur.posterWpe&&cur.posterWpeSendParams?cur.posterWpeSendParams.text:(0,n.trim)(window.Emoji?Emoji.editableVal(w):(0,a.val)(w)),f={message:m},b=0,h=(0,a.hasClass)((0,a.gpeByClass)("post",w),"suggest");(0,i.isArray)(l)&&l.length&&d.push((0,n.clone)(l)),(0,a.setStyle)(bodyNode,{cursor:"default"});var g=(0,a.ge)("wpe_cont"),E=(0,a.geByClass1)("wpe_error",g);function v(e){E||(E=(0,a.se)('<div class="wpe_error error"><div>'),g.insertBefore(E,(0,a.domFC)(g))),E.innerHTML=e.length>60?'<div class="msg_text">'+e+"</div>":e,(0,a.isVisible)(E)||((0,s.slideDown)(E,100),(0,p.scrollToY)((0,a.getXY)(E)[1]-15),(0,s.animate)((0,a.ge)("box_layer_wrap"),{scrollTop:0}))}if(E&&(0,a.hide)(E),d.length&&(0,n.each)(d,(function(e,l){var s;if((0,i.isArray)(l)&&l.length){var p=this[0],w=this[1];if(b>=c&&"postpone"!=p)return!1;switch(p){case"poll":var g=_.pollData(t);if(!g)return f.delayed=!0,!1;(0,n.intval)(w)&&(f.poll_id=(0,n.intval)(w)),w=g.question,delete g.question,f=(0,n.extend)(f,g);break;case"copyright":var E=_.copyrightData();if(E)return void(f=(0,n.extend)(f,E));break;case"share":if(u.failed||!u.title&&(!u.images||!u.images.length)&&!u.photo_url&&!u.video)return cur.shareLastParseSubmitted&&Date.now()-cur.shareLastParseSubmitted<2e3?(f.delayed=!0,!1):void 0;if((cur.options.share||{}).button_exclusive&&u.button_text&&u.button_action){var M;d.length>1&&(M=(0,r.getLang)("global_share_too_many_attachments")),f.message.split("\n").length-1>(cur.options.share||{}).button_exclusive_max_message_newlines&&(M=(0,r.getLang)("global_share_too_many_newlines")),f.message.length>(cur.options.share||{}).button_exclusive_max_message_len&&(M=(0,r.getLang)("global_share_too_long_message"));var y=(0,n.extractUrls)(" "+f.message+" "),P=(0,n.extractUrls)(" "+u.url+" ")[0];if(P&&y.length){"/"===P.query&&(P.query=""),"www."===P.domain.substr(0,4)&&(P.domain=P.domain.substr(4));for(var C=0;C<y.length;++C){var O=y[C];if("/"===O.query&&(O.query=""),"www."===O.domain.substr(0,4)&&(O.domain=O.domain.substr(4)),P.domain!=O.domain||P.query!=O.query){M=(0,r.getLang)("global_share_too_many_links");break}}}if(M)return v(M),f.delayed=!0,!1}if(!u.title)return v((0,r.getLang)("global_share_title_required")),f.delayed=!0,!1;if(!u.url)return v((0,r.getLang)("global_share_url_required")),f.delayed=!0,!1;if(u.url=new URL(u.url).href,u.video?(w=u.video_owner_id+"_"+u.video_id,f.snippet_video=1):w=u.prometheus?u.media:u.user_id&&u.photo_id&&!u.noPhoto?u.user_id+"_"+u.photo_id:"",u.share_upload_failed&&!w)return u.share_upload_failed=0,f.delayed=!0,!1;if(u.images&&u.images.length&&!(0,i.isArray)(u.images[cur.shareShowImg])&&!t&&!w&&!u.noPhoto&&!u.video)return _.uploadShare(o),f.delayed=!0,!1;if((cur.options.share||{}).require_image&&!w)return v((0,r.getLang)("global_share_image_required")),f.delayed=!0,!1;u.initialPattern&&(0,n.trim)(m)==u.initialPattern&&(f.message=""),u.is_vk_mini_app&&(f.is_vk_mini_app=!0,f.is_photo_edit=u.isPhotoEdit,f.image_offset=cur.shareShowImg),(0,n.extend)(f,{url:u.url,module:cur.module,mode:u.mode,title:(0,n.replaceEntities)(u.title),description:(0,n.replaceEntities)(u.description),button_text:(0,n.replaceEntities)(u.button_text),button_action:u.button_action,extra:u.extra,extra_data:u.extraData,photo_url:u.video?"":(0,n.replaceEntities)(u.photo_url),placeholder_inserted:u.placeholder_inserted,open_graph_data:(u.openGraph||{}).data,open_graph_hash:(u.openGraph||{}).hash});break;case"page":u.initialPattern&&(0,n.trim)(m)==u.initialPattern&&(f.message="");break;case"postpone":return f.postpone=(0,a.val)("postpone_date"+_.lnkId),void(cur.postponedLastDate=f.postpone);case"donut_duration":return;case"mark_as_ads":return void(f.mark_as_ads=1);case"pretty_cards":if(!_.prettyCardGallery)return;if(_.prettyCardGallery.needSendData())return _.prettyCardGallery.saveCards(o,(function(e){v(e)})),f.delayed=!0,!1;w=_.prettyCardGallery.getSendData().attachVal;break;case"donut_link":f["attach"+(b+1)+"_owner_id"]=null===(s=this[5])||void 0===s?void 0:s.owner_id}this[3]&&(0,n.trim)(m)==this[3]&&(f.message=""),h&&this[4]&&(w+="_"+this[4]),f["attach"+(b+1)+"_type"]=p,f["attach"+(b+1)]=w,b++}})),!_.multi&&(f.postpone||(_.postponeDate&&_.postponeIsTooltip||_.postponePreview)&&(f.postpone=(0,a.val)("postpone_date"+_.lnkId),cur.postponedLastDate=f.postpone),!f.copyright&&_.copyrightData)){var M=_.copyrightData();M&&(f=(0,n.extend)(f,M))}return _.multi||f.mark_as_ads||!_.markAsAds||(f.mark_as_ads=1),f},reset:function(e){var o=e.input,t=(0,a.val)(o),_=e.addMedia,r={value:t};return window.Emoji?Emoji.val(o,""):o.innerHTML="",_&&(r.urlsCancelled=(0,n.clone)(_.urlsCancelled),_.unchooseMedia(),_.urlsCancelled=[]),(0,a.re)(e.articleConvertEl),r},restore:function(e,o){var t=e.input,_=c.reset(e);return(0,a.val)(t,o.value||""),_}};const w=c},621126:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59357),_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(315544),_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(726271),_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(786067),_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49535),_web_lib_message_box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(654612),_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(386409),_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(159121),_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(695724),_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(668040),WallUpload={_videoUploadIndex:null,photoUploaded:function(e,o){var t=void 0!==e.ind?e.ind:e,a=(e.fileName?e.fileName:e).replace(/[&<>"']/g,""),_=e.fileName?t+"_"+e.fileName:e,r=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("upload"+_+"_progress_wrap");r&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("progress_x",r)),ajax.post("al_photos.php",(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend)({act:"choose_uploaded"},o),{onDone:function(e,o){WallUpload.addMedia().chooseMedia("photo",e,(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend)(o,{upload_ind:t+"_"+a}))},onFail:WallUpload.uploadFailed.pbind(e)})},uploadFailed:function(e,o){var t=void 0!==e.ind?e.ind:e,a=Upload.options[t],_=(e.fileName?e.fileName:e).replace(/[&<>"']/g,"");if("fileApi"==Upload.types[t]&&!a.wiki_editor){var r,i=e.fileName?t+"_"+e.fileName:e;cur.imMedia?((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.re)("upload"+i+"_progress_wrap"),r=cur.imMedia.lnkId,cur.addMedia[r].unchooseMedia()):cur.addMedia&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.re)("upload"+i+"_progress_wrap"),(r=(cur.attachMediaIndexes||{})[_])&&cur.addMedia[r].unchooseMedia()),1==a.filesTotalCount&&setTimeout((0,_web_lib_message_box__WEBPACK_IMPORTED_MODULE_5__.showFastBox)({title:(0,_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__.getLang)("global_error")},(0,_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__.getLang)("wall_add_photo_error")).hide,2e3)}(0,_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_7__.topError)("Upload failed",{dt:-1,type:102,url:((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("file_uploader_form"+t)||{}).action}),Upload.embed(t)},show:function(){cur.uploadInited&&("feed"==cur.wallType?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(cur.uploadWrap,"post_upload_min_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)(cur.uploadWrap))},hide:function(){cur.uploadInited&&("feed"==cur.wallType?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(cur.uploadWrap,"post_upload_min_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)(cur.uploadWrap),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)("post_upload_dropbox"))},addMedia:function(){return cur.dropboxAddMedia||cur.wallAddMedia},attachEl:function(){return WallUpload.dropboxAttachEl||(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("submit_post_box")},attachToEl:function(e){e=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)(e);var o=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_upload_dropbox");if(WallUpload.dropboxAttachEl=e,!e||!o)return!1;e.insertBefore(o,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domFC)(e))},checkDragDrop:function(){var e=_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__.browser,o=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__.browser.version);return!!(e.msie&&o>=9||e.mozilla&&o>=3.5||e.chrome||e.safari)&&((window.XMLHttpRequest||window.XDomainRequest)&&(window.FormData||window.FileReader&&(window.XMLHttpRequest&&XMLHttpRequest.sendAsBinary||window.ArrayBuffer&&window.Uint8Array&&(window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder))))},initCallback:function(){cur.editingPost?WallUpload.init():Wall.showEditPost()},init:function(){cur.withUpload&&(cur.uploadAdded?WallUpload.show():(cur.uploadAdded=!0,window.Upload&&window.VideoInlineUpload?(WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()):window.stManager.add([window.jsc("web/upload.js"),"video_upload.js"],(function(){WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()}))))},initVideoUploader:function(){var e=cur.wallUploadVideoOpts;if(e){var o=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_field_upload_video"),t=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_upload_video_dropbox");e.options.from="post";var a=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("send_post"),_={onUploadAllCompleteDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__.disableButton)(a,!1)},onUploadStartDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__.disableButton)(a,!0)}};return window.VideoInlineUpload.getUploadModule(o,t,e,WallUpload.addMedia(),_)}},initLoader:function initLoader(){(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.removeEvent)(bodyNode,"dragover dragenter");var data=cur.wallUploadOpts,field=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_field");if(WallUpload.checkDragDrop()){cur.uploadWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{className:"post_upload_wrap fl_r",innerHTML:'<div id="post_field_upload" class="post_upload"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domInsertBefore)(cur.uploadWrap,field),cur.uploadVideoWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{className:"post_upload_video_wrap fl_r",innerHTML:'<div id="post_field_upload_video" class="post_upload_video"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domInsertBefore)(cur.uploadVideoWrap,field);var submitBox=WallUpload.attachEl();submitBox.insertBefore((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{id:"post_upload_dropbox",className:"post_upload_dropbox",innerHTML:'<div class="post_upload_dropbox_inner"><div class="post_upload_label drop_label">'+(data.opts.lang.wall_drop_media_here||"Drop files here")+'</div><div class="post_upload_label release_label">'+(data.opts.lang.wall_release_media_here||"Release button to attach files")+"</div></div>"}),submitBox.firstChild),cur.wallUploadInd=Upload.init("post_field_upload",data.url,data.params,{accept:"image/jpeg,image/png,image/gif",dragEl:bodyNode,dropbox:"post_upload_dropbox",file_input:null,file_name:"photo",file_size_limit:26214400,file_types_description:"Image files (*.jpg, *.jpeg, *.png, *.gif)",file_types:"*.jpg;*.JPG;*.jpeg;*.JPEG;*.png;*.PNG;*.gif;*.GIF",file_match:data.opts.ext_re,lang:data.opts.lang,noFlash:1,multiple:1,multi_progress:1,max_files:10,chooseBox:1,clear:1,type:"photo",max_attempts:3,server:data.opts.server,error:data.opts.default_error,error_hash:data.opts.error_hash,label:data.opts.label,wiki_editor:0,onUploadStart:function(e,o){var t=void 0!==e.ind?e.ind:e,a=Upload.options[t];"form"==Upload.types[t]&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("file",(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("choose_photo_upload")).disabled=!0),"fileApi"==Upload.types[t]&&(cur.notStarted&&(cur.preventBoxHide||boxQueue.hideLast(),delete cur.notStarted),a.multi_progress&&this.onUploadProgress(e,0,0))},onUploadComplete:function onUploadComplete(info,res){var params;try{params=eval("("+res+")")}catch(e){params=(0,_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__.fromQueryString)(res)}params.photos?WallUpload.photoUploaded(info,params):Upload.onUploadError(info)},onUploadProgress:function(e,o,t){var a=void 0!==e.ind?e.ind:e;if("fileApi"==Upload.types[a]){var _=(cur.attachMediaIndexes||{})[a];if(void 0===_||_&&cur.addMedia[_].chosenMedia||cur.imMedia){var r={loaded:o,total:t};e.fileName&&(r.fileName=e.fileName.replace(/[&<>"']/g,"")),WallUpload.addMedia().showMediaProgress("photo",a,r)}}},onUploadError:WallUpload.uploadFailed,onCheckServerFailed:function(){delete cur.uploadInited,WallUpload.hide()},onUploadCompleteAll:function(e){"form"==Upload.types[e]&&Upload.embed(e)},onDragEnter:function(){cur.editingPost?(Wall.hidePosterFeatureTooltip(),WallUpload.init()):Wall.showEditPost()},onNoFilteredCallback:function(e){Wall._videoUploadIndex&&Upload.onFileApiSend(Wall._videoUploadIndex,e)}}),cur.uploadInited=!0,WallUpload.show(),cur.wallUploadFromDrag&&(1==cur.wallUploadFromDrag&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)("post_upload_dropbox"),delete cur.wallUploadFromDrag)}}};const __WEBPACK_DEFAULT_EXPORT__=WallUpload},287503:(e,o,t)=>{t.d(o,{GroupAdminLevel:()=>a});var a={USER:0,MODERATOR:1,EDITOR:2,ADMINISTRATOR:3,HOST:4,EVENT_CREATOR:5,CREATOR:6,PSEUDO_LEVEL_ADVERTISER:100}},599647:(e,o,t)=>{var a=t(182804),_=t(786067),r=t(654612),i=t(786665),n=t(375617),l=t(621126),d=t(573734),s=t(982452),p=t(215614);window.Page=i.default,window.page=i.default,window.Wall=n.default,window.wall=n.default,window.WallUpload=l.default,window.Composer=d.default,window._postsSendTimer||(window._postsSendTimer=window.setTimeout(i.default.postsSend,1e4));try{window.stManager.done("page.js"),(0,a.tq)().setInteractiveHandler("Wall/fake_news_info",(function(e){var o=e.payload,t=o.event,a=o.dataAttrs;null==t||t.preventDefault();var _=a,r=_.title,i=_.text,n=_.more_button_text,l=_.more_button_url,d=_.ok_button_text;(0,p.showFakeInfoNotification)({title:r,text:i,more_button_text:n,more_button_url:l,ok_button_text:d}),window.ajax.post("al_page.php",{act:"track_fake_news_caption_clicked"})})),(0,a.tq)().setInteractiveHandler("Page/owner_new_photo",(function(e){try{var o=e.payload.dataAttrs.options,t=JSON.parse(o),a=t.ownerId;t.useNewForm?i.default.ownerAvatarUpload(a):i.default.ownerPhoto(a)}catch(e){(0,s.showErrorBox)((0,_.getLang)("global_error"))}})),(0,a.tq)().setInteractiveHandler("Page/owner_edit_photo",(function(e){try{var o=e.payload.dataAttrs.options,t=JSON.parse(o),a=t.ownerId,r=t.hash;t.useNewForm?i.default.ownerAvatarEdit(a,r):i.default.ownerCrop(a,r)}catch(e){(0,s.showErrorBox)((0,_.getLang)("global_error"))}})),(0,a.tq)().setInteractiveHandler("Page/owner_set_exist_photo",(function(e){try{var o=e.payload.dataAttrs.options,t=JSON.parse(o),a=t.photo;t.useNewForm?i.default.ownerAvatarSelect(a):(0,r.showBox)("al_page.php",{act:"owner_photo_edit",photo:a},{stat:["owner_photo.css",window.jsc("web/owner_photo.js"),"tagger.css",window.jsc("web/tagger.js")]})}catch(e){(0,s.showErrorBox)((0,_.getLang)("global_error"))}}))}catch(e){}},215614:(e,o,t)=>{t.d(o,{showFakeInfoNotification:()=>d});var a=t(570655),_=t(785893),r=t(481117),i=t(288420),n=t(396445),l=function(e){var o=e.title,t=e.text,r=e.more_button_text,l=e.more_button_url,d=e.ok_button_text,s=e.onClose;return(0,_.jsxs)("div",(0,a.__assign)({className:"FakeInfoWarning__box"},{children:[(0,_.jsx)("div",(0,a.__assign)({className:"FakeInfoWarning__imageContainer"},{children:(0,_.jsx)(n.default,{},void 0)}),void 0),(0,_.jsx)("div",(0,a.__assign)({className:"FakeInfoWarning__title"},{children:o}),void 0),(0,_.jsx)("div",(0,a.__assign)({className:"FakeInfoWarning__text"},{children:t}),void 0),!!l&&(0,_.jsx)("a",(0,a.__assign)({href:l,target:"_blank",rel:"noopener"},{children:r}),void 0),(0,_.jsx)("div",(0,a.__assign)({className:"FakeInfoWarning__buttonWrap"},{children:(0,_.jsx)(i.default,(0,a.__assign)({onClick:s,appearance:"primary"},{children:d}),void 0)}),void 0)]}),void 0)};function d(e){(0,r.showComponentInBox)((0,_.jsx)(l,(0,a.__assign)({},e,{onClose:function(){(0,r.destroyComponentInBox)(!0)}}),void 0),{containerClass:"FakeInfoWarning"})}},175382:(e,o,t)=>{t.d(o,{floatingButtonCollapseAllRepliesHide:()=>r,floatingButtonCollapseAllRepliesShow:()=>i,loadRepliesLinkShow:()=>n,loadRepliesLinkIsVisible:()=>l,highlightUpdatedReply:()=>d,highlightUpdatedReplyContent:()=>s});var a=t(830104),_=t(315544),r=function(e){e instanceof HTMLElement&&e.classList.contains("replies_side")&&e.classList.add("replies_side_hidden")},i=function(e){e instanceof HTMLElement&&e.classList.contains("replies_side")&&e.classList.remove("replies_side_hidden")},n=function(e){e instanceof HTMLElement&&e.classList.contains("replies_next")&&e.classList.add("replies_next_shown")},l=function(e){return!!(e instanceof HTMLElement&&e.classList.contains("replies_next"))&&(e.classList.contains("replies_next_shown")||(0,_.isVisible)(e))},d=function(e){(0,a.triggerAnimationClass)(e,"reply_highlight_updated",3e3)},s=function(e){(0,a.triggerAnimationClass)(e,"reply_highlight_updated_content",3e3)}}},__webpack_module_cache__={},deferred,leafPrototypes,getProto;function __webpack_require__(e){var o=__webpack_module_cache__[e];if(void 0!==o)return o.exports;var t=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,o,t,a)=>{if(!o){var _=1/0;for(l=0;l<deferred.length;l++){for(var[o,t,a]=deferred[l],r=!0,i=0;i<o.length;i++)(!1&a||_>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](o[i])))?o.splice(i--,1):(r=!1,a<_&&(_=a));if(r){deferred.splice(l--,1);var n=t();void 0!==n&&(e=n)}}return e}a=a||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>a;l--)deferred[l]=deferred[l-1];deferred[l]=[o,t,a]},__webpack_require__.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(o,{a:o}),o},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var t=Object.create(null);__webpack_require__.r(t);var a={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var _=2&o&&e;"object"==typeof _&&!~leafPrototypes.indexOf(_);_=getProto(_))Object.getOwnPropertyNames(_).forEach((o=>a[o]=()=>e[o]));return a.default=()=>e,__webpack_require__.d(t,a),t},__webpack_require__.d=(e,o)=>{for(var t in o)__webpack_require__.o(o,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},__webpack_require__.e=()=>Promise.resolve(),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__webpack_require__.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={60339:0};__webpack_require__.O.j=o=>0===e[o];var o=(o,t)=>{var a,_,[r,i,n]=t,l=0;for(a in i)__webpack_require__.o(i,a)&&(__webpack_require__.m[a]=i[a]);if(n)var d=n(__webpack_require__);for(o&&o(t);l<r.length;l++)_=r[l],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[r[l]]=0;return __webpack_require__.O(d)},t=self.webpackChunkvk=self.webpackChunkvk||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var __webpack_exports__=__webpack_require__.O(void 0,[11216,24509,40885,38288,68592,29290,51881,32335,17592,59302,82051,85820,83063],(()=>__webpack_require__(599647)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();