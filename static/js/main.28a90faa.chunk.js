(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{19:function(e,c,t){},35:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(28),i=t.n(a),r=t(8),o=(t(35),t(0)),l=function(e){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("span",{className:"inicio",children:"Inicio"})}),Object(o.jsx)(r.b,{to:"/popular",children:Object(o.jsx)("span",{className:"populares",children:"Populares"})}),Object(o.jsx)(r.b,{to:"/upcoming",children:Object(o.jsx)("span",{className:"upcoming",children:"Proximos estrenos"})}),Object(o.jsx)(r.b,{to:"/top_rated",children:Object(o.jsx)("span",{className:"top_rated",children:"M\xe1s votadas"})}),Object(o.jsx)(r.b,{to:"/search/movie",children:Object(o.jsx)("span",{className:"search",children:"Buscar pelicula"})})]})})},j=t(2),d=t(10),u=(t(19),t.p+"static/media/PeliculaSinPoster.6b8e8929.jpg"),b=function(e){var c,t=e.movie;return Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("div",{className:"movieTitle",children:Object(o.jsx)("div",{children:t.title})}),Object(o.jsxs)("div",{className:"imgMovie",children:[Object(o.jsx)("img",{src:"http://image.tmdb.org/t/p/w185"+t.poster_path,onError:function(e){e.target.src=u},alt:"imagen de la pelicula"}),Object(o.jsx)("div",{className:"average",children:Object(o.jsx)("p",{className:"tag ".concat((c=t.vote_average,c>=8?"green":c>=6?"orange":"red")),children:t.vote_average})})]}),Object(o.jsxs)("div",{className:"moreDetails",children:[Object(o.jsx)("h3",{className:"originalTitle",children:t.original_title}),Object(o.jsxs)("span",{children:["(",t.release_date,")"]}),Object(o.jsx)("h4",{children:" Sinopsis:"})," ",Object(o.jsx)("p",{children:t.overview})]})]})};console.log(b);var h=b,p=t(12),m=t.n(p),O=(t(60),function(e){var c=e.movieType;return Object(o.jsx)("div",{children:function(e){return"popular"===e?Object(o.jsx)("h3",{children:"Pel\xedculas Populares"}):"upcoming"===e?Object(o.jsx)("h3",{children:"Pr\xf3ximas pel\xedculas"}):"now_playing"===e?Object(o.jsx)("h3",{children:"Pel\xedculas en cartelera"}):"top_rated"===e?Object(o.jsx)("h3",{children:"Pel\xedculas m\xe1s votadas"}):void 0}(c)})}),v=(t(61),function(e){var c=e.match.params.movieType,t=Object(n.useState)([]),s=Object(d.a)(t,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){m.a.get("https://api.themoviedb.org/3/movie/".concat(c,"?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES")).then((function(e){return i(e.data.results)})).catch(console.error)}),[c]),Object(o.jsxs)("div",{className:"contenedor",children:[Object(o.jsx)("div",{className:"contenedorMovies",children:Object(o.jsx)("h4",{className:"titleMovieType",children:Object(o.jsx)(O,{movieType:c})})}),Object(o.jsx)("div",{className:"movies",children:null===a||void 0===a?void 0:a.map((function(e){return Object(o.jsx)(h,{movie:e},e.id)}))})]})}),x=(t(62),function(e){return Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"Made by \u263a creativa-nk"})})}),f=t(17),g=t.n(f),N=t(30),y=(t(64),function(){var e=Object(n.useState)(""),c=Object(d.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)([]),i=Object(d.a)(a,2),r=i[0],l=i[1],j=Object(n.useState)(""),u=Object(d.a)(j,2),b=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=".concat(b)).then((function(e){return l(e.data.results)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(o.jsxs)("div",{className:"searchConteiner",children:[Object(o.jsx)("header",{children:Object(o.jsx)("form",{onSubmit:function(e){""!==t&&(p(t),s("")),e.preventDefault()},children:Object(o.jsx)("input",{className:"input",type:"search",autoFocus:!0,placeholder:"Buscar pelicula",onChange:function(e){return s(e.target.value)},value:t})})}),Object(o.jsx)("div",{children:b?Object(o.jsxs)("p",{className:"searchResults",children:["Resultados para: ",b]}):null}),Object(o.jsx)("div",{className:"result",children:null===r||void 0===r?void 0:r.map((function(e,c){return c<10&&Object(o.jsx)(h,{movie:e},e.id)}))})]})}),_=(t(65),function(e){return Object(o.jsxs)("div",{className:"contenedorTituloInicio",children:[Object(o.jsx)("div",{className:"word",children:"Esc\xe1pate,"}),Object(o.jsx)("div",{className:"word2",children:Object(o.jsx)("span",{children:"al mundo de cine!"})})]})});t(66);var S=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/react-movies/",component:_,exact:!0}),Object(o.jsx)(j.a,{path:"/",component:_,exact:!0}),Object(o.jsx)(j.a,{path:"/:movieType",component:v,exact:!0}),Object(o.jsx)(j.a,{path:"/search/movie",component:y})]})]}),Object(o.jsx)(x,{})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.28a90faa.chunk.js.map