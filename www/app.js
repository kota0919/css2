(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";n(10);var r=n(12),o=i(n(0)),l=i(n(1)),a=i(n(2)),u=i(n(18));function i(e){return e&&e.__esModule?e:{default:e}}n(27),n(28),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");l.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(u.default,null)),c)},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(0)),l=(f(n(1)),n(3)),a=f(n(22)),u=f(n(23)),i=f(n(24)),c=f(n(25));function f(e){return e&&e.__esModule?e:{default:e}}n(26);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClickMenu1=n.onClickMenu1.bind(n),n.onClickMenu2=n.onClickMenu2.bind(n),n.onClickMenu3=n.onClickMenu3.bind(n),n.onClickMenu4=n.onClickMenu4.bind(n),n.state={isOpen:!1,selectMenu:1},n.show=n.show.bind(n),n.hide=n.hide.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"show",value:function(){this.setState({isOpen:!0,selectMenu:this.state.selectMenu})}},{key:"hide",value:function(){this.setState({isOpen:!1,selectMenu:this.state.selectMenu})}},{key:"onClickMenu1",value:function(){this.setState({isOpen:!1,selectMenu:1})}},{key:"onClickMenu2",value:function(){this.setState({isOpen:!1,selectMenu:2})}},{key:"onClickMenu3",value:function(){this.setState({isOpen:!1,selectMenu:3})}},{key:"onClickMenu4",value:function(){this.setState({isOpen:!1,selectMenu:4})}},{key:"render",value:function(){var e,t="Item";1==this.state.selectMenu&&(t="item-selected",e=o.default.createElement(a.default,{show:this.show}));var n="Item";2==this.state.selectMenu&&(n="item-selected",e=o.default.createElement(u.default,{show:this.show}));var r="Item";3==this.state.selectMenu&&(r="item-selected",e=o.default.createElement(i.default,{show:this.show}));var f="Item";return 4==this.state.selectMenu&&(f="item-selected",e=o.default.createElement(c.default,{show:this.show})),o.default.createElement(l.Splitter,null,o.default.createElement(l.SplitterSide,{side:"left",collapse:!0,isOpen:this.state.isOpen,onClose:this.hide.bind(this),swipeable:!0},o.default.createElement(l.Page,null,o.default.createElement("ul",{className:"menu"},o.default.createElement("li",{className:t,onClick:this.onClickMenu1},"メニュー１"),o.default.createElement("li",{className:n,onClick:this.onClickMenu2},"メニュー2"),o.default.createElement("li",{className:r,onClick:this.onClickMenu3},"メニュー3"),o.default.createElement("li",{className:f,onClick:this.onClickMenu4},"メニュー4")))),o.default.createElement(l.SplitterContent,null,e,o.default.createElement(l.Button,{onClick:this.show.bind(this)},"Open")))}}]),t}(o.default.Component);t.default=s},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),l=(a(n(1)),n(2),n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderToolbar=n.renderToolbar.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"left"},o.default.createElement(l.ToolbarButton,{onClick:this.props.show},o.default.createElement(l.Icon,{icon:"md-menu"}))),o.default.createElement("div",{className:"center"},"ページ１"))}},{key:"render",value:function(){return o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",null,"Hello World!"))}}]),t}(o.default.Component);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),l=(a(n(1)),n(2),n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderToolbar=n.renderToolbar.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"left"},o.default.createElement(l.ToolbarButton,{onClick:this.props.show},o.default.createElement(l.Icon,{icon:"md-menu"}))),o.default.createElement("div",{className:"center"},"ページ2"))}},{key:"render",value:function(){return o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",null,"Hello World!"))}}]),t}(o.default.Component);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),l=(a(n(1)),n(2),n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderToolbar=n.renderToolbar.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"left"},o.default.createElement(l.ToolbarButton,{onClick:this.props.show},o.default.createElement(l.Icon,{icon:"md-menu"}))),o.default.createElement("div",{className:"center"},"ページ3"))}},{key:"render",value:function(){return o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",null,"Hello World!"))}}]),t}(o.default.Component);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),l=(a(n(1)),n(2),n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderToolbar=n.renderToolbar.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"left"},o.default.createElement(l.ToolbarButton,{onClick:this.props.show},o.default.createElement(l.Icon,{icon:"md-menu"}))),o.default.createElement("div",{className:"center"},"ページ4"))}},{key:"render",value:function(){return o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",null,"Hello World!"))}}]),t}(o.default.Component);t.default=u},function(e,t,n){}],[[8,1,2]]]);