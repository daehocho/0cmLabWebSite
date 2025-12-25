// SNS공유
var snsModule = (function(){
    'use strict';
    var title   = $('meta[property="og:title"]').attr('content'), // 공유할 페이지 타이틀
    url         = $('meta[property="og:url"]').attr('content'),   // 공유할 페이지 URL
    tags        = "공유할 태그",   // 공유할 태그
    imageUrl    = $('meta[property="og:image"]').attr('content'), // 공유할 이미지
    description = $('meta[property="og:description"]').attr('content'); // 공유할 설명
    
    url	= document.location.href;
 
    var encodeTitle = encodeURIComponent(title);
    var encodeUrl   = encodeURIComponent(url);
    var encodeTags  = encodeURIComponent(tags);
    var encodeImage = encodeURIComponent(imageUrl); // 공유할 이미지

 
/*
    FB.init({                                       // 페이스북 인증 초기화
        appId	: "facebook api key",
        xfbml	: true,
        version	: "v2.6"
    });
 */ 
    var snsModule = {
/*    		
        facebook:function(){
            FB.ui({
                    method: "feed",
                    picture: imageUrl,
                    name: title,
                    description: description,
                    //caption: document.location.href,// 설명
                    link: url
                }, function(response){
                }
            );
        },
*/        
        kakaotalk:function(){
            Kakao.Link.sendTalkLink({
                label: title+"\n"+url,
                image:{
                    src : imageUrl,
                    width : 200,
                    height : 200,
                },
            });
        },
        kakaostory:function(){
            Kakao.Story.share({
                url: url,
                text: title,
            });
        },
        facebook:function(){
            window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeUrl+"&t="+encodeTitle, "band", "width=410, height=540, resizable=no");
        },
        band:function(){
            window.open("http://band.us/plugin/share?body="+encodeTitle+encodeURIComponent("\n")+encodeUrl+"&route="+encodeUrl, "band", "width=410, height=540, resizable=no");
        },
        pholar:function(){
            window.open("http://www.pholar.co/spi/rephol?title="+encodeTitle+"&url="+encodeUrl, "pholar", "width=410, height=540, resizable=no");
        },
        naverblog:function(){
            window.open("http://blog.naver.com/openapi/share?title="+encodeTitle+"&url="+encodeUrl, "naver blog", "width=410, height=540, resizable=no");
        },
        google:function(){
            window.open("https://plus.google.com/share?t="+encodeTitle+"&url="+encodeUrl, "google+", "width=500, height=550, resizable=no");
        },
        pinterest:function(){
            window.open("http://www.pinterest.com/pin/create/button/?url="+encodeUrl+"&media="+encodeImage+"&description="+encodeTitle, "pinterest", "width=800, height=550, resizable=no");
        },
        tumblr:function(){
            window.open("http://www.tumblr.com/widgets/share/tool?posttype=photo&title="+encodeTitle+"&content="+encodeImage+"&canonicalUrl="+encodeUrl+"&tags="+encodeTags+"&caption="+encodeTitle+encodeURIComponent("\n")+encodeUrl,"tumblr", "width=540, height=600, resizable=no");
        },
        twitter:function(){
            window.open("http://www.twitter.com/intent/tweet?text="+encodeTitle+"&url="+encodeUrl+"&hashtags="+encodeTags, 'twitter', "width=500, height=450, resizable=no");
            
        },
        line : function(){
            window.open("http://line.me/R/msg/text/?"+encodeTitle+" "+encodeUrl);
        },
        telegram : function(){
            window.open("https://telegram.me/share/url?url="+encodeUrl);
        }
    };
 
    return snsModule;
}());