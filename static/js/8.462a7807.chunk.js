(this.webpackJsonpbestapocalypticbooks=this.webpackJsonpbestapocalypticbooks||[]).push([[8],{100:function(e,t,a){"use strict";var n=a(12),o=a.n(n),r=a(21),i=a(0),c=a.n(i),l=a(20),s=a(19),u=a(76),m=a(26),h=a(78),d=a(32),b=a.n(d),g=a(35),k=a(85);t.a=Object(l.b)(null,(function(e){return{clearPreviousBookPageBookState:function(t){return e(Object(h.b)(t))},clearPreviousBookPageRelatedBooksState:function(t){return e(Object(h.d)(t))},pushBookToBookPageState:function(t){return e(Object(h.b)(t))},fetchBookPageRelatedBooksAsync:function(t){return e(Object(h.c)(t))}}}))((function(e){var t=e.isFetching,a=e.book,n=e.clearPreviousBookPageBookState,i=e.clearPreviousBookPageRelatedBooksState,l=e.pushBookToBookPageState,h=e.fetchBookPageRelatedBooksAsync,d=Object(u.h)().pathname,f=Object(u.g)(),E=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(null);case 2:return e.next=4,i(null);case 4:l(a),h(a.title),f.push("/books/".concat(Object(s.c)(a.title)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=Object(m.useMediaQuery)({minWidth:0,maxWidth:767});return c.a.createElement("div",{className:"full-book-container"},t||!a?null:c.a.createElement(c.a.Fragment,null,p?null:c.a.createElement(b.a,{left:!0,duration:1e3,delay:250},c.a.createElement("div",{className:"full-book-description-container"},c.a.createElement("h3",{className:"full-book-title"},a.title),c.a.createElement("div",{className:"full-book-author-and-series-container"},c.a.createElement("p",{className:"full-book-author"},a.author),a.series&&a.series.name?c.a.createElement("p",{className:"full-book-series"},"(Book ",a.series.number," ",a.series.name,")"):null),c.a.createElement("p",{className:"full-book-blurb"},Object(s.e)(a.description)))),c.a.createElement(b.a,{right:!0,duration:1e3,delay:250},c.a.createElement("div",{className:"full-book-img-container"},c.a.createElement("img",{src:a.picUrl,alt:"featured item cover",className:"full-book-img"}))),c.a.createElement(b.a,{left:!0,duration:1e3,delay:250},c.a.createElement("div",{className:"btn-links-and-audio-container"},c.a.createElement(g.a,{className:"button-audiobook",colorClass:"purchase",text:"Audiobook",link:a.links.audiobook}),c.a.createElement(g.a,{className:"button-kindle",colorClass:"purchase",text:"Kindle",link:a.links.kindle}),c.a.createElement(g.a,{className:"button-paperback",colorClass:"purchase",text:"Paperback",link:a.links.paperback}),"/home"===d?c.a.createElement(g.a,{className:"button-moreInfo",colorClass:"more-info",text:p?"More":"More Info",func:E}):null)),c.a.createElement(b.a,{right:!0,duration:1e3,delay:300},c.a.createElement("div",{className:"audioPlayer-container"},c.a.createElement(k.a,{audioSrc:a.audio})))))}))},101:function(e,t,a){e.exports=a.p+"static/media/down-arrow.279db7c1.svg"},143:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(90),i=a.n(r),c=a(32),l=a.n(c),s=a(95),u=a(20),m=a(100),h=a(101),d=a.n(h),b=s.Link,g=Object(u.b)((function(e){var t=e.featuredBook,a=e.nav;return{featuredBook:t.featuredBook,featureBookIsFetching:t.isFetching,navHeight:a.height}}),null)((function(e){var t=e.featureBookIsFetching,a=e.featuredBook,n=e.navHeight;return o.a.createElement(l.a,null,o.a.createElement("header",{className:"intro-block-container"},o.a.createElement(m.a,{isFetching:t,book:a}),o.a.createElement(b,{to:"home-page-carousels",smooth:!0,duration:500,offset:-n},o.a.createElement("img",{src:d.a,alt:"down arrow",className:"intro-block-down-arrow"}))))})),k=a(33),f=a(26),E=a(31),p=a(136),v=a(12),B=a.n(v),O=a(21),S=a(19),y=a(76),x=a(78),N=a(35),P=a(85),_=a(80),A=a.n(_),j=Object(u.b)(null,(function(e){return{clearPreviousBookPageBookState:function(t){return e(Object(x.b)(t))},clearPreviousBookPageRelatedBooksState:function(t){return e(Object(x.d)(t))},pushBookToBookPageState:function(t){return e(Object(x.b)(t))},fetchBookPageRelatedBooksAsync:function(t){return e(Object(x.c)(t))}}}))((function(e){var t=e.book,a=e.handleOpenHighlight,n=e.setActiveItem,r=e.isMobile,i=e.clearPreviousBookPageBookState,c=e.clearPreviousBookPageRelatedBooksState,l=e.pushBookToBookPageState,s=e.fetchBookPageRelatedBooksAsync,u=Object(y.g)(),m="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.9)),\nlinear-gradient(to right, rgba(0, 0, 0, 1),\n rgba(0, 0, 0, 0.7) 60% ), url(".concat(t.picUrl,")"),h=function(){var e=Object(O.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(null);case 2:return e.next=4,c(null);case 4:l(t),s(t.title),u.push("/books/".concat(Object(S.c)(t.title)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=t.title,b=t.author,g=t.description,k=t.picUrl,f=t.links,E=t.series,p=(t.tags,t.audio);return o.a.createElement("div",{className:"highlight-container",style:{backgroundImage:m}},o.a.createElement("div",{className:"highlight-details-container"},o.a.createElement("h2",{className:"highlight-title"},d),o.a.createElement("div",{className:"highlight-author-and-series-container"},o.a.createElement("p",{className:"highlight-author"},b),E&&E.name?o.a.createElement("p",{className:"highlight-series"},"(Book ",E.number," ",E.name,")"):null),o.a.createElement("p",{className:"highlight-blurb"},Object(S.e)(g,"highlight")),o.a.createElement("div",{className:"highlight-audio-and-buttons-container"},o.a.createElement(P.a,{audioSrc:p}),o.a.createElement("div",{className:"highlight-buttons-container"},o.a.createElement(N.a,{colorClass:"purchase",text:"Audiobook",link:f.audiobook}),o.a.createElement(N.a,{colorClass:"purchase",text:"Kindle",link:f.kindle}),o.a.createElement(N.a,{colorClass:"purchase",text:"Paperback",link:f.paperback}),o.a.createElement(N.a,{colorClass:"more-info",text:r?"More":"More Info",func:h}))),o.a.createElement("div",{className:"close-highlight-button-container"},o.a.createElement("img",{src:A.a,alt:"close highlight button",onClick:function(){a(!1),setTimeout((function(){return n(!1)}),300)}}))),r?null:o.a.createElement("div",{className:"highlight-cover-img-container"},o.a.createElement("img",{alt:"book cover",src:k})))})),C=a(107),T=a.n(C),H=(a(110),function(e){var t=e.activeItem,a=e.setActiveItem,n=e.index,r=e.book,i=e.handleOpenHighlight,c=e.handleSelectHighlightBook,l=e.isMobile;return o.a.createElement("div",{className:"carousel-item-master-container ".concat(t?"active-item":"")},o.a.createElement("img",{onClick:function(){!function(e,t){c(e),i(!0),l||a(t)}(r,n)},className:"carousel-item-img",src:r.picUrl,alt:"cover of book",draggable:"false"}))}),w=function(e){var t=e.genre,a=e.books,n=e.handleSelectHighlightBook,r=e.handleOpenHighlight,i=e.setActiveItem,c=e.activeItem,l=e.isMobile;return o.a.createElement("div",{className:"item-carousel-master-container"},o.a.createElement("p",{className:"item-carousel-genre"},t),a?o.a.createElement(T.a,{responsive:{xxl:{breakpoint:{max:1e4,min:1620},items:6,slidesToSlide:5},xl:{breakpoint:{max:1620,min:1370},items:5,slidesToSlide:5},l:{breakpoint:{max:1370,min:1080},items:4,slidesToSlide:3},m:{breakpoint:{max:1080,min:810},items:3,slidesToSlide:3},s:{breakpoint:{max:810,min:540},items:2,slidesToSlide:2},xs:{breakpoint:{max:500,min:0},items:1,slidesToSlide:1}},className:"item-carousel-container",itemClass:"carousel-item",minimumTouchDrag:80,swipeable:!0,draggable:!0,partialVisible:!0,customTransition:"all 750ms ease-in-out"},a.map((function(e,t){return o.a.createElement(H,{activeItem:c===t,setActiveItem:i,index:t,key:t,book:e,handleSelectHighlightBook:n,handleOpenHighlight:r,isMobile:l})}))):null)},F=Object(u.b)((function(e){var t=e.carouselBooks;return{carouselBooks:t,carouselBooksAreFetching:t.isFetching}}),(function(e){return{fetchCarouselBooksAsync:function(t){return e(function(e){return function(t){E.b.collection("books").where("tags","array-contains","".concat(e)).get().then((function(a){var n=[];a.forEach((function(e){var t=e.data();n.push(t)})),t({type:"FETCH_CAROUSEL_BOOKS_SUCCESS",payload:{result:n,genre:e}})})).catch((function(e){return t({type:"FETCH_CAROUSEL_BOOKS_FAILURE",payload:e.message})}))}}(t))}}}))((function(e){var t=e.genre,a=e.fetchCarouselBooksAsync,n=e.carouselBooks,r=o.a.useState(!1),i=Object(k.a)(r,2),c=i[0],l=i[1],s=o.a.useState(!1),u=Object(k.a)(s,2),m=u[0],h=u[1],d=o.a.useState(!1),b=Object(k.a)(d,2),g=b[0],E=b[1],v=Object(f.useMediaQuery)({minWidth:0,maxWidth:767});return o.a.useEffect((function(){a(t)}),[a,t]),o.a.createElement(o.a.Fragment,null,n[t]?o.a.createElement("div",null,o.a.createElement(w,{activeItem:g,setActiveItem:E,genre:t,books:n[t],handleSelectHighlightBook:function(e){l(!1),l(e)},handleOpenHighlight:h,isMobile:v}),o.a.createElement(p.a,{exitBeforeEnter:!0},m&&o.a.createElement(p.b.div,{key:t,transition:{duration:.7},initial:{maxHeight:"0px",overflow:"hidden",opacity:0},animate:{maxHeight:"1500px",overflow:"hidden",opacity:1},exit:{maxHeight:"0px",overflow:"hidden",opacity:0}},o.a.createElement(p.a,{exitBeforeEnter:!0},c&&o.a.createElement(p.b.div,{key:c.title,transition:{duration:.7},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},o.a.createElement(j,{book:c,handleSelectHighlightBook:l,handleOpenHighlight:h,setActiveItem:E,isMobile:v})))))):null)})),I=s.Element;t.default=function(){return o.a.createElement("section",{className:"home-container"},o.a.createElement(g,null),o.a.createElement(I,{name:"home-page-carousels"},o.a.createElement("div",{className:"testp"},o.a.createElement(i.a,{offset:50,once:!0},o.a.createElement(l.a,null,o.a.createElement(F,{genre:"undead"}))),o.a.createElement(i.a,{offset:50,once:!0},o.a.createElement(l.a,null,o.a.createElement(F,{genre:"post pandemic"}))),o.a.createElement(i.a,{offset:50,once:!0},o.a.createElement(l.a,null,o.a.createElement(F,{genre:"classic"}))))))}},78:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return l}));var n=a(31),o=a(19),r=function(e){return{type:"FETCH_BOOK_PAGE_BOOK_SUCCESS",payload:e}},i=function(e){var t=Object(o.b)(Object(o.d)(e));return function(e){var a;e({type:"FETCH_BOOK_PAGE_BOOK_START"}),n.b.collection("books").doc(t).get().then((function(t){a=!!t.exists&&t.data(),e(r(a))})).catch((function(t){return e({type:"FETCH_BOOK_PAGE_BOOK_FAILURE",payload:t.message})}))}},c=function(e){return{type:"FETCH_BOOK_PAGE_RELATED_BOOKS_SUCCESS",payload:e}},l=function(e){var t=Object(o.d)(e);return function(e){e({type:"FETCH_BOOK_PAGE_RELATED_BOOKS_START"}),n.b.collection("books").where("title","==",t).where("series.name",">","").get().then((function(t){t.forEach((function(t){if(t.exists){var a=t.data().series.name;n.b.collection("books").where("series.name","==",a).get().then((function(t){var a=[];t.forEach((function(e){var t=e.data();a.push(t)})),e(c(a))}))}else e(c(!1))}))})).catch((function(t){return e({type:"FETCH_BOOK_PAGE_RELATED_BOOKS_FAILURE",payload:t})}))}}},80:function(e,t,a){e.exports=a.p+"static/media/close.62bc743b.svg"},85:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.audioSrc;return o.a.createElement("div",{className:"audioPlayer-container"},o.a.createElement("audio",{className:"audio-player",controls:!0},o.a.createElement("source",{src:t,type:"audio/mpeg"})))}}}]);
//# sourceMappingURL=8.462a7807.chunk.js.map