!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((n = n || self).adminlte = {})
}(this, function (n) {
    "use strict";
    var t = function (n) {
        var r = "ControlSidebar"
            , c = "lte.controlsidebar"
            , k = n.fn[r]
            , l = {
                COLLAPSED: "collapsed.lte.controlsidebar",
                EXPANDED: "expanded.lte.controlsidebar"
            }
            , t = ".control-sidebar"
            , i = ".control-sidebar-content"
            , h = ".main-header"
            , f = ".main-footer"
            , e = "control-sidebar-animate"
            , o = "control-sidebar-open"
            , s = "control-sidebar-slide-open"
            , a = "layout-fixed"
            , d = "layout-navbar-fixed"
            , g = "layout-sm-navbar-fixed"
            , nt = "layout-md-navbar-fixed"
            , tt = "layout-lg-navbar-fixed"
            , it = "layout-xl-navbar-fixed"
            , v = "layout-footer-fixed"
            , y = "layout-sm-footer-fixed"
            , p = "layout-md-footer-fixed"
            , w = "layout-lg-footer-fixed"
            , b = "layout-xl-footer-fixed"
            , rt = {
                controlsidebarSlide: !0,
                scrollbarTheme: "os-theme-light",
                scrollbarAutoHide: "l"
            }
            , u = function () {
                function u(n, t) {
                    this._element = n;
                    this._config = t;
                    this._init()
                }
                var r = u.prototype;
                return r.collapse = function () {
                    this._config.controlsidebarSlide ? (n("html").addClass(e),
                        n("body").removeClass(s).delay(300).queue(function () {
                            n(t).hide();
                            n("html").removeClass(e);
                            n(this).dequeue()
                        })) : n("body").removeClass(o);
                    var i = n.Event(l.COLLAPSED);
                    n(this._element).trigger(i)
                }
                    ,
                    r.show = function () {
                        this._config.controlsidebarSlide ? (n("html").addClass(e),
                            n(t).show().delay(10).queue(function () {
                                n("body").addClass(s).delay(300).queue(function () {
                                    n("html").removeClass(e);
                                    n(this).dequeue()
                                });
                                n(this).dequeue()
                            })) : n("body").addClass(o);
                        var i = n.Event(l.EXPANDED);
                        n(this._element).trigger(i)
                    }
                    ,
                    r.toggle = function () {
                        n("body").hasClass(o) || n("body").hasClass(s) ? this.collapse() : this.show()
                    }
                    ,
                    r._init = function () {
                        var t = this;
                        this._fixHeight();
                        this._fixScrollHeight();
                        n(window).resize(function () {
                            t._fixHeight();
                            t._fixScrollHeight()
                        });
                        n(window).scroll(function () {
                            (n("body").hasClass(o) || n("body").hasClass(s)) && t._fixScrollHeight()
                        })
                    }
                    ,
                    r._fixScrollHeight = function () {
                        var r = {
                            scroll: n(document).height(),
                            window: n(window).height(),
                            header: n(h).outerHeight(),
                            footer: n(f).outerHeight()
                        }
                            , u = Math.abs(r.window + n(window).scrollTop() - r.scroll)
                            , e = n(window).scrollTop()
                            , o = !1
                            , s = !1;
                        n("body").hasClass(a) && ((n("body").hasClass(d) || n("body").hasClass(g) || n("body").hasClass(nt) || n("body").hasClass(tt) || n("body").hasClass(it)) && "fixed" === n(h).css("position") && (o = !0),
                            (n("body").hasClass(v) || n("body").hasClass(y) || n("body").hasClass(p) || n("body").hasClass(w) || n("body").hasClass(b)) && "fixed" === n(f).css("position") && (s = !0),
                            0 === e && 0 === u ? (n(t).css("bottom", r.footer),
                                n(t).css("top", r.header),
                                n(t + ", " + t + " " + i).css("height", r.window - (r.header + r.footer))) : u <= r.footer ? !1 === s ? (n(t).css("bottom", r.footer - u),
                                    n(t + ", " + t + " " + i).css("height", r.window - (r.footer - u))) : n(t).css("bottom", r.footer) : e <= r.header ? !1 === o ? (n(t).css("top", r.header - e),
                                        n(t + ", " + t + " " + i).css("height", r.window - (r.header - e))) : n(t).css("top", r.header) : !1 === o ? (n(t).css("top", 0),
                                            n(t + ", " + t + " " + i).css("height", r.window)) : n(t).css("top", r.header))
                    }
                    ,
                    r._fixHeight = function () {
                        var u = n(window).height(), e = n(h).outerHeight(), o = n(f).outerHeight(), r;
                        n("body").hasClass(a) && (r = u - e,
                            (n("body").hasClass(v) || n("body").hasClass(y) || n("body").hasClass(p) || n("body").hasClass(w) || n("body").hasClass(b)) && "fixed" === n(f).css("position") && (r = u - e - o),
                            n(t + " " + i).css("height", r),
                            "undefined" != typeof n.fn.overlayScrollbars && n(t + " " + i).overlayScrollbars({
                                className: this._config.scrollbarTheme,
                                sizeAutoCapable: !0,
                                scrollbars: {
                                    autoHide: this._config.scrollbarAutoHide,
                                    clickScrolling: !0
                                }
                            }))
                    }
                    ,
                    u._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = n(this).data(c)
                                , r = n.extend({}, rt, n(this).data());
                            if (i || (i = new u(this, r),
                                n(this).data(c, i)),
                                "undefined" === i[t])
                                throw new Error(t + " is not a function");
                            i[t]()
                        })
                    }
                    ,
                    u
            }();
        return n(document).on("click", '[data-widget="control-sidebar"]', function (t) {
            t.preventDefault();
            u._jQueryInterface.call(n(this), "toggle")
        }),
            n.fn[r] = u._jQueryInterface,
            n.fn[r].Constructor = u,
            n.fn[r].noConflict = function () {
                return n.fn[r] = k,
                    u._jQueryInterface
            }
            ,
            u
    }(jQuery)
        , i = function (n) {
            var r = "Layout"
                , l = n.fn[r]
                , o = ".main-header"
                , s = ".main-sidebar"
                , t = ".main-sidebar .sidebar"
                , i = ".content-wrapper"
                , a = ".control-sidebar-content"
                , v = '[data-widget="control-sidebar"]'
                , h = ".main-footer"
                , y = '[data-widget="pushmenu"]'
                , f = ".login-box"
                , e = ".register-box"
                , c = "sidebar-focused"
                , p = "layout-fixed"
                , w = "control-sidebar-slide-open"
                , b = "control-sidebar-open"
                , k = {
                    scrollbarTheme: "os-theme-light",
                    scrollbarAutoHide: "l",
                    panelAutoHeight: !0,
                    loginRegisterAutoHeight: !0
                }
                , u = function () {
                    function u(n, t) {
                        this._config = t;
                        this._element = n;
                        this._init()
                    }
                    var r = u.prototype;
                    return r.fixLayoutHeight = function (r) {
                        var s;
                        void 0 === r && (r = null);
                        s = 0;
                        (n("body").hasClass(w) || n("body").hasClass(b) || "control_sidebar" == r) && (s = n(a).height());
                        var u = {
                            window: n(window).height(),
                            header: 0 !== n(o).length ? n(o).outerHeight() : 0,
                            footer: 0 !== n(h).length ? n(h).outerHeight() : 0,
                            sidebar: 0 !== n(t).length ? n(t).height() : 0,
                            control_sidebar: s
                        }
                            , e = this._max(u)
                            , f = this._config.panelAutoHeight;
                        !0 === f && (f = 0);
                        !1 !== f && (e == u.control_sidebar ? n(i).css("min-height", e + f) : e == u.window ? n(i).css("min-height", e + f - u.header - u.footer) : n(i).css("min-height", e + f - u.header),
                            this._isFooterFixed() && n(i).css("min-height", parseFloat(n(i).css("min-height")) + u.footer));
                        n("body").hasClass(p) && (!1 !== f && n(i).css("min-height", e + f - u.header - u.footer),
                            "undefined" != typeof n.fn.overlayScrollbars && n(t).overlayScrollbars({
                                className: this._config.scrollbarTheme,
                                sizeAutoCapable: !0,
                                scrollbars: {
                                    autoHide: this._config.scrollbarAutoHide,
                                    clickScrolling: !0
                                }
                            }))
                    }
                        ,
                        r.fixLoginRegisterHeight = function () {
                            if (0 === n(f + ", " + e).length)
                                n("body, html").css("height", "auto");
                            else if (0 !== n(f + ", " + e).length) {
                                var t = n(f + ", " + e).height();
                                n("body").css("min-height") !== t && n("body").css("min-height", t)
                            }
                        }
                        ,
                        r._init = function () {
                            var i = this;
                            this.fixLayoutHeight();
                            !0 === this._config.loginRegisterAutoHeight ? this.fixLoginRegisterHeight() : Number.isInteger(this._config.loginRegisterAutoHeight) && setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
                            n(t).on("collapsed.lte.treeview expanded.lte.treeview", function () {
                                i.fixLayoutHeight()
                            });
                            n(y).on("collapsed.lte.pushmenu shown.lte.pushmenu", function () {
                                i.fixLayoutHeight()
                            });
                            n(v).on("collapsed.lte.controlsidebar", function () {
                                i.fixLayoutHeight()
                            }).on("expanded.lte.controlsidebar", function () {
                                i.fixLayoutHeight("control_sidebar")
                            });
                            n(window).resize(function () {
                                i.fixLayoutHeight()
                            });
                            setTimeout(function () {
                                n("body.hold-transition").removeClass("hold-transition")
                            }, 50)
                        }
                        ,
                        r._max = function (n) {
                            var t = 0;
                            return Object.keys(n).forEach(function (i) {
                                n[i] > t && (t = n[i])
                            }),
                                t
                        }
                        ,
                        r._isFooterFixed = function () {
                            return "fixed" === n(".main-footer").css("position")
                        }
                        ,
                        u._jQueryInterface = function (t) {
                            return void 0 === t && (t = ""),
                                this.each(function () {
                                    var i = n(this).data("lte.layout")
                                        , r = n.extend({}, k, n(this).data());
                                    i || (i = new u(n(this), r),
                                        n(this).data("lte.layout", i));
                                    "init" === t || "" === t ? i._init() : "fixLayoutHeight" !== t && "fixLoginRegisterHeight" !== t || i[t]()
                                })
                        }
                        ,
                        u
                }();
            return n(window).on("load", function () {
                u._jQueryInterface.call(n("body"))
            }),
                n(t + " a").on("focusin", function () {
                    n(s).addClass(c)
                }),
                n(t + " a").on("focusout", function () {
                    n(s).removeClass(c)
                }),
                n.fn[r] = u._jQueryInterface,
                n.fn[r].Constructor = u,
                n.fn[r].noConflict = function () {
                    return n.fn[r] = l,
                        u._jQueryInterface
                }
                ,
                u
        }(jQuery)
        , r = function (n) {
            var f = "PushMenu"
                , e = ".lte.pushmenu"
                , l = n.fn[f]
                , h = {
                    COLLAPSED: "collapsed" + e,
                    SHOWN: "shown" + e
                }
                , c = {
                    autoCollapseSize: 992,
                    enableRemember: !1,
                    noTransitionAfterReload: !0
                }
                , o = '[data-widget="pushmenu"]'
                , t = "body"
                , a = "#sidebar-overlay"
                , v = ".wrapper"
                , i = "sidebar-collapse"
                , r = "sidebar-open"
                , s = "sidebar-closed"
                , u = function () {
                    function f(t, i) {
                        this._element = t;
                        this._options = n.extend({}, c, i);
                        n(a).length || this._addOverlay();
                        this._init()
                    }
                    var u = f.prototype;
                    return u.expand = function () {
                        this._options.autoCollapseSize && n(window).width() <= this._options.autoCollapseSize && n(t).addClass(r);
                        n(t).removeClass(i).removeClass(s);
                        this._options.enableRemember && localStorage.setItem("remember" + e, r);
                        var u = n.Event(h.SHOWN);
                        n(this._element).trigger(u)
                    }
                        ,
                        u.collapse = function () {
                            this._options.autoCollapseSize && n(window).width() <= this._options.autoCollapseSize && n(t).removeClass(r).addClass(s);
                            n(t).addClass(i);
                            this._options.enableRemember && localStorage.setItem("remember" + e, i);
                            var u = n.Event(h.COLLAPSED);
                            n(this._element).trigger(u)
                        }
                        ,
                        u.toggle = function () {
                            n(t).hasClass(i) ? this.expand() : this.collapse()
                        }
                        ,
                        u.autoCollapse = function (i) {
                            void 0 === i && (i = !1);
                            this._options.autoCollapseSize && (n(window).width() <= this._options.autoCollapseSize ? n(t).hasClass(r) || this.collapse() : 1 == i && (n(t).hasClass(r) ? n(t).removeClass(r) : n(t).hasClass(s) && this.expand()))
                        }
                        ,
                        u.remember = function () {
                            this._options.enableRemember && (localStorage.getItem("remember" + e) == i ? this._options.noTransitionAfterReload ? n("body").addClass("hold-transition").addClass(i).delay(50).queue(function () {
                                n(this).removeClass("hold-transition");
                                n(this).dequeue()
                            }) : n("body").addClass(i) : this._options.noTransitionAfterReload ? n("body").addClass("hold-transition").removeClass(i).delay(50).queue(function () {
                                n(this).removeClass("hold-transition");
                                n(this).dequeue()
                            }) : n("body").removeClass(i))
                        }
                        ,
                        u._init = function () {
                            var t = this;
                            this.remember();
                            this.autoCollapse();
                            n(window).resize(function () {
                                t.autoCollapse(!0)
                            })
                        }
                        ,
                        u._addOverlay = function () {
                            var i = this
                                , t = n("<div />", {
                                    id: "sidebar-overlay"
                                });
                            t.on("click", function () {
                                i.collapse()
                            });
                            n(v).append(t)
                        }
                        ,
                        f._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = n(this).data("lte.pushmenu")
                                    , r = n.extend({}, c, n(this).data());
                                i || (i = new f(this, r),
                                    n(this).data("lte.pushmenu", i));
                                "string" == typeof t && t.match(/collapse|expand|toggle/) && i[t]()
                            })
                        }
                        ,
                        f
                }();
            return n(document).on("click", o, function (t) {
                t.preventDefault();
                var i = t.currentTarget;
                "pushmenu" !== n(i).data("widget") && (i = n(i).closest(o));
                u._jQueryInterface.call(n(i), "toggle")
            }),
                n(window).on("load", function () {
                    u._jQueryInterface.call(n(o))
                }),
                n.fn[f] = u._jQueryInterface,
                n.fn[f].Constructor = u,
                n.fn[f].noConflict = function () {
                    return n.fn[f] = l,
                        u._jQueryInterface
                }
                ,
                u
        }(jQuery)
        , u = function (n) {
            var i = "Treeview"
                , h = n.fn[i]
                , f = {
                    SELECTED: "selected.lte.treeview",
                    EXPANDED: "expanded.lte.treeview",
                    COLLAPSED: "collapsed.lte.treeview",
                    LOAD_DATA_API: "load.lte.treeview"
                }
                , o = ".nav-item"
                , t = ".nav-treeview"
                , e = ".menu-open"
                , s = '[data-widget="treeview"]'
                , u = "menu-open"
                , c = "sidebar-collapse"
                , l = {
                    trigger: s + " .nav-link",
                    animationSpeed: 300,
                    accordion: !0,
                    expandSidebar: !1,
                    sidebarButtonSelector: '[data-widget="pushmenu"]'
                }
                , r = function () {
                    function r(n, t) {
                        this._config = t;
                        this._element = n
                    }
                    var i = r.prototype;
                    return i.init = function () {
                        this._setupListeners()
                    }
                        ,
                        i.expand = function (i, r) {
                            var h = this, c = n.Event(f.EXPANDED), o, s;
                            this._config.accordion && (o = r.siblings(e).first(),
                                s = o.find(t).first(),
                                this.collapse(s, o));
                            i.stop().slideDown(this._config.animationSpeed, function () {
                                r.addClass(u);
                                n(h._element).trigger(c)
                            });
                            this._config.expandSidebar && this._expandSidebar()
                        }
                        ,
                        i.collapse = function (i, r) {
                            var o = this
                                , s = n.Event(f.COLLAPSED);
                            i.stop().slideUp(this._config.animationSpeed, function () {
                                r.removeClass(u);
                                n(o._element).trigger(s);
                                i.find(e + " > " + t).slideUp();
                                i.find(e).removeClass(u)
                            })
                        }
                        ,
                        i.toggle = function (i) {
                            var s = n(i.currentTarget), e = s.parent(), r = e.find("> " + t), f;
                            (r.is(t) || (e.is(o) || (r = e.parent().find("> " + t)),
                                r.is(t))) && (i.preventDefault(),
                                    f = s.parents(o).first(),
                                    f.hasClass(u) ? this.collapse(n(r), f) : this.expand(n(r), f))
                        }
                        ,
                        i._setupListeners = function () {
                            var t = this;
                            n(document).on("click", this._config.trigger, function (n) {
                                t.toggle(n)
                            })
                        }
                        ,
                        i._expandSidebar = function () {
                            n("body").hasClass(c) && n(this._config.sidebarButtonSelector).PushMenu("expand")
                        }
                        ,
                        r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = n(this).data("lte.treeview")
                                    , u = n.extend({}, l, n(this).data());
                                i || (i = new r(n(this), u),
                                    n(this).data("lte.treeview", i));
                                "init" === t && i[t]()
                            })
                        }
                        ,
                        r
                }();
            return n(window).on(f.LOAD_DATA_API, function () {
                n(s).each(function () {
                    r._jQueryInterface.call(n(this), "init")
                })
            }),
                n.fn[i] = r._jQueryInterface,
                n.fn[i].Constructor = r,
                n.fn[i].noConflict = function () {
                    return n.fn[i] = h,
                        r._jQueryInterface
                }
                ,
                r
        }(jQuery)
        , f = function (n) {
            var t = "DirectChat"
                , r = n.fn[t]
                , u = "toggled{EVENT_KEY}"
                , f = ".direct-chat"
                , e = "direct-chat-contacts-open"
                , i = function () {
                    function t(n) {
                        this._element = n
                    }
                    return t.prototype.toggle = function () {
                        n(this._element).parents(f).first().toggleClass(e);
                        var t = n.Event(u);
                        n(this._element).trigger(t)
                    }
                        ,
                        t._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = n(this).data("lte.directchat");
                                r || (r = new t(n(this)),
                                    n(this).data("lte.directchat", r));
                                r[i]()
                            })
                        }
                        ,
                        t
                }();
            return n(document).on("click", '[data-widget="chat-pane-toggle"]', function (t) {
                t && t.preventDefault();
                i._jQueryInterface.call(n(this), "toggle")
            }),
                n.fn[t] = i._jQueryInterface,
                n.fn[t].Constructor = i,
                n.fn[t].noConflict = function () {
                    return n.fn[t] = r,
                        i._jQueryInterface
                }
                ,
                i
        }(jQuery)
        , e = function (n) {
            var t = "TodoList"
                , f = n.fn[t]
                , r = '[data-widget="todo-list"]'
                , u = "done"
                , e = {
                    onCheck: function (n) {
                        return n
                    },
                    onUnCheck: function (n) {
                        return n
                    }
                }
                , i = function () {
                    function t(n, t) {
                        this._config = t;
                        this._element = n;
                        this._init()
                    }
                    var i = t.prototype;
                    return i.toggle = function (t) {
                        t.parents("li").toggleClass(u);
                        n(t).prop("checked") ? this.check(t) : this.unCheck(n(t))
                    }
                        ,
                        i.check = function (n) {
                            this._config.onCheck.call(n)
                        }
                        ,
                        i.unCheck = function (n) {
                            this._config.onUnCheck.call(n)
                        }
                        ,
                        i._init = function () {
                            var t = this;
                            n(r).find("input:checkbox:checked").parents("li").toggleClass(u);
                            n(r).on("change", "input:checkbox", function (i) {
                                t.toggle(n(i.target))
                            })
                        }
                        ,
                        t._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = n(this).data("lte.todolist")
                                    , u = n.extend({}, e, n(this).data());
                                r || (r = new t(n(this), u),
                                    n(this).data("lte.todolist", r));
                                "init" === i && r[i]()
                            })
                        }
                        ,
                        t
                }();
            return n(window).on("load", function () {
                i._jQueryInterface.call(n(r))
            }),
                n.fn[t] = i._jQueryInterface,
                n.fn[t].Constructor = i,
                n.fn[t].noConflict = function () {
                    return n.fn[t] = f,
                        i._jQueryInterface
                }
                ,
                i
        }(jQuery)
        , o = function (n) {
            var r = "CardWidget"
                , u = ".lte.cardwidget"
                , v = n.fn[r]
                , f = {
                    EXPANDED: "expanded" + u,
                    COLLAPSED: "collapsed" + u,
                    MAXIMIZED: "maximized" + u,
                    MINIMIZED: "minimized" + u,
                    REMOVED: "removed" + u
                }
                , h = "card"
                , e = "collapsed-card"
                , c = "collapsing-card"
                , l = "expanding-card"
                , s = "was-collapsed"
                , o = "maximized-card"
                , t = {
                    DATA_REMOVE: '[data-card-widget="remove"]',
                    DATA_COLLAPSE: '[data-card-widget="collapse"]',
                    DATA_MAXIMIZE: '[data-card-widget="maximize"]',
                    CARD: "." + h,
                    CARD_HEADER: ".card-header",
                    CARD_BODY: ".card-body",
                    CARD_FOOTER: ".card-footer",
                    COLLAPSED: "." + e
                }
                , a = {
                    animationSpeed: "normal",
                    collapseTrigger: t.DATA_COLLAPSE,
                    removeTrigger: t.DATA_REMOVE,
                    maximizeTrigger: t.DATA_MAXIMIZE,
                    collapseIcon: "fa-minus",
                    expandIcon: "fa-plus",
                    maximizeIcon: "fa-expand",
                    minimizeIcon: "fa-compress"
                }
                , i = function () {
                    function r(i, r) {
                        this._element = i;
                        this._parent = i.parents(t.CARD).first();
                        i.hasClass(h) && (this._parent = i);
                        this._settings = n.extend({}, a, r)
                    }
                    var i = r.prototype;
                    return i.collapse = function () {
                        var r = this, i;
                        this._parent.addClass(c).children(t.CARD_BODY + ", " + t.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
                            r._parent.addClass(e).removeClass(c)
                        });
                        this._parent.find("> " + t.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);
                        i = n.Event(f.COLLAPSED);
                        this._element.trigger(i, this._parent)
                    }
                        ,
                        i.expand = function () {
                            var r = this, i;
                            this._parent.addClass(l).children(t.CARD_BODY + ", " + t.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
                                r._parent.removeClass(e).removeClass(l)
                            });
                            this._parent.find("> " + t.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);
                            i = n.Event(f.EXPANDED);
                            this._element.trigger(i, this._parent)
                        }
                        ,
                        i.remove = function () {
                            this._parent.slideUp();
                            var t = n.Event(f.REMOVED);
                            this._element.trigger(t, this._parent)
                        }
                        ,
                        i.toggle = function () {
                            this._parent.hasClass(e) ? this.expand() : this.collapse()
                        }
                        ,
                        i.maximize = function () {
                            this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);
                            this._parent.css({
                                height: this._parent.height(),
                                width: this._parent.width(),
                                transition: "all .15s"
                            }).delay(150).queue(function () {
                                n(this).addClass(o);
                                n("html").addClass(o);
                                n(this).hasClass(e) && n(this).addClass(s);
                                n(this).dequeue()
                            });
                            var t = n.Event(f.MAXIMIZED);
                            this._element.trigger(t, this._parent)
                        }
                        ,
                        i.minimize = function () {
                            this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);
                            this._parent.css("cssText", "height:" + this._parent[0].style.height + " !important;width:" + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
                                n(this).removeClass(o);
                                n("html").removeClass(o);
                                n(this).css({
                                    height: "inherit",
                                    width: "inherit"
                                });
                                n(this).hasClass(s) && n(this).removeClass(s);
                                n(this).dequeue()
                            });
                            var t = n.Event(f.MINIMIZED);
                            this._element.trigger(t, this._parent)
                        }
                        ,
                        i.toggleMaximize = function () {
                            this._parent.hasClass(o) ? this.minimize() : this.maximize()
                        }
                        ,
                        i._init = function (t) {
                            var i = this;
                            this._parent = t;
                            n(this).find(this._settings.collapseTrigger).click(function () {
                                i.toggle()
                            });
                            n(this).find(this._settings.maximizeTrigger).click(function () {
                                i.toggleMaximize()
                            });
                            n(this).find(this._settings.removeTrigger).click(function () {
                                i.remove()
                            })
                        }
                        ,
                        r._jQueryInterface = function (t) {
                            var i = n(this).data("lte.cardwidget")
                                , u = n.extend({}, a, n(this).data());
                            i || (i = new r(n(this), u),
                                n(this).data("lte.cardwidget", "string" == typeof t ? i : t));
                            "string" == typeof t && t.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/) ? i[t]() : "object" == typeof t && i._init(n(this))
                        }
                        ,
                        r
                }();
            return n(document).on("click", t.DATA_COLLAPSE, function (t) {
                t && t.preventDefault();
                i._jQueryInterface.call(n(this), "toggle")
            }),
                n(document).on("click", t.DATA_REMOVE, function (t) {
                    t && t.preventDefault();
                    i._jQueryInterface.call(n(this), "remove")
                }),
                n(document).on("click", t.DATA_MAXIMIZE, function (t) {
                    t && t.preventDefault();
                    i._jQueryInterface.call(n(this), "toggleMaximize")
                }),
                n.fn[r] = i._jQueryInterface,
                n.fn[r].Constructor = i,
                n.fn[r].noConflict = function () {
                    return n.fn[r] = v,
                        i._jQueryInterface
                }
                ,
                i
        }(jQuery)
        , s = function (n) {
            var i = "CardRefresh"
                , o = n.fn[i]
                , u = {
                    LOADED: "loaded.lte.cardrefresh",
                    OVERLAY_ADDED: "overlay.added.lte.cardrefresh",
                    OVERLAY_REMOVED: "overlay.removed.lte.cardrefresh"
                }
                , f = "card"
                , r = {
                    CARD: "." + f,
                    DATA_REFRESH: '[data-card-widget="card-refresh"]'
                }
                , e = {
                    source: "",
                    sourceSelector: "",
                    params: {},
                    trigger: r.DATA_REFRESH,
                    content: ".card-body",
                    loadInContent: !0,
                    loadOnInit: !0,
                    responseType: "",
                    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"><\/i><\/div>',
                    onLoadStart: function () { },
                    onLoadDone: function (n) {
                        return n
                    }
                }
                , t = function () {
                    function t(t, i) {
                        if (this._element = t,
                            this._parent = t.parents(r.CARD).first(),
                            this._settings = n.extend({}, e, i),
                            this._overlay = n(this._settings.overlayTemplate),
                            t.hasClass(f) && (this._parent = t),
                            "" === this._settings.source)
                            throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");
                    }
                    var i = t.prototype;
                    return i.load = function () {
                        this._addOverlay();
                        this._settings.onLoadStart.call(n(this));
                        n.get(this._settings.source, this._settings.params, function (t) {
                            this._settings.loadInContent && ("" != this._settings.sourceSelector && (t = n(t).find(this._settings.sourceSelector).html()),
                                this._parent.find(this._settings.content).html(t));
                            this._settings.onLoadDone.call(n(this), t);
                            this._removeOverlay()
                        }
                            .bind(this), "" !== this._settings.responseType && this._settings.responseType);
                        var t = n.Event(u.LOADED);
                        n(this._element).trigger(t)
                    }
                        ,
                        i._addOverlay = function () {
                            this._parent.append(this._overlay);
                            var t = n.Event(u.OVERLAY_ADDED);
                            n(this._element).trigger(t)
                        }
                        ,
                        i._removeOverlay = function () {
                            this._parent.find(this._overlay).remove();
                            var t = n.Event(u.OVERLAY_REMOVED);
                            n(this._element).trigger(t)
                        }
                        ,
                        i._init = function () {
                            var t = this;
                            n(this).find(this._settings.trigger).on("click", function () {
                                t.load()
                            });
                            this._settings.loadOnInit && this.load()
                        }
                        ,
                        t._jQueryInterface = function (i) {
                            var r = n(this).data("lte.cardrefresh")
                                , u = n.extend({}, e, n(this).data());
                            r || (r = new t(n(this), u),
                                n(this).data("lte.cardrefresh", "string" == typeof i ? r : i));
                            "string" == typeof i && i.match(/load/) ? r[i]() : r._init(n(this))
                        }
                        ,
                        t
                }();
            return n(document).on("click", r.DATA_REFRESH, function (i) {
                i && i.preventDefault();
                t._jQueryInterface.call(n(this), "load")
            }),
                n(document).ready(function () {
                    n(r.DATA_REFRESH).each(function () {
                        t._jQueryInterface.call(n(this))
                    })
                }),
                n.fn[i] = t._jQueryInterface,
                n.fn[i].Constructor = t,
                n.fn[i].noConflict = function () {
                    return n.fn[i] = o,
                        t._jQueryInterface
                }
                ,
                t
        }(jQuery)
        , h = function (n) {
            var i = "Dropdown"
                , u = n.fn[i]
                , f = ".dropdown-menu.show"
                , r = '[data-toggle="dropdown"]'
                , e = "dropdown-menu-right"
                , o = {}
                , t = function () {
                    function t(n, t) {
                        this._config = t;
                        this._element = n
                    }
                    var i = t.prototype;
                    return i.toggleSubmenu = function () {
                        this._element.siblings().show().toggleClass("show");
                        this._element.next().hasClass("show") || this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide();
                        this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function () {
                            n(".dropdown-submenu .show").removeClass("show").hide()
                        })
                    }
                        ,
                        i.fixPosition = function () {
                            var t = n(f);
                            if (0 !== t.length) {
                                t.hasClass(e) ? (t.css("left", "inherit"),
                                    t.css("right", 0)) : (t.css("left", 0),
                                        t.css("right", "inherit"));
                                var i = t.offset()
                                    , r = t.width()
                                    , u = n(window).width() - i.left;
                                i.left < 0 ? (t.css("left", "inherit"),
                                    t.css("right", i.left - 5)) : u < r && (t.css("left", "inherit"),
                                        t.css("right", 0))
                            }
                        }
                        ,
                        t._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = n(this).data("lte.dropdown")
                                    , u = n.extend({}, o, n(this).data());
                                r || (r = new t(n(this), u),
                                    n(this).data("lte.dropdown", r));
                                "toggleSubmenu" !== i && "fixPosition" != i || r[i]()
                            })
                        }
                        ,
                        t
                }();
            return n(".dropdown-menu " + r).on("click", function (i) {
                i.preventDefault();
                i.stopPropagation();
                t._jQueryInterface.call(n(this), "toggleSubmenu")
            }),
                n(".navbar " + r).on("click", function (i) {
                    i.preventDefault();
                    setTimeout(function () {
                        t._jQueryInterface.call(n(this), "fixPosition")
                    }, 1)
                }),
                n.fn[i] = t._jQueryInterface,
                n.fn[i].Constructor = t,
                n.fn[i].noConflict = function () {
                    return n.fn[i] = u,
                        t._jQueryInterface
                }
                ,
                t
        }(jQuery)
        , c = function (n) {
            var t = "Toasts"
                , s = n.fn[t]
                , r = {
                    INIT: "init.lte.toasts",
                    CREATED: "created.lte.toasts",
                    REMOVED: "removed.lte.toasts"
                }
                , h = "#toastsContainerTopRight"
                , c = "#toastsContainerTopLeft"
                , l = "#toastsContainerBottomRight"
                , a = "#toastsContainerBottomLeft"
                , v = "toasts-top-right"
                , y = "toasts-top-left"
                , p = "toasts-bottom-right"
                , w = "toasts-bottom-left"
                , u = "topRight"
                , f = "topLeft"
                , e = "bottomRight"
                , o = "bottomLeft"
                , b = {
                    position: u,
                    fixed: !0,
                    autohide: !1,
                    autoremove: !0,
                    delay: 1e3,
                    fade: !0,
                    icon: null,
                    image: null,
                    imageAlt: null,
                    imageHeight: "25px",
                    title: null,
                    subtitle: null,
                    close: !0,
                    body: null,
                    "class": null
                }
                , i = function () {
                    function t(t, i) {
                        this._config = i;
                        this._prepareContainer();
                        var u = n.Event(r.INIT);
                        n("body").trigger(u)
                    }
                    var i = t.prototype;
                    return i.create = function () {
                        var t = n('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>'), i, u, f, e;
                        t.data("autohide", this._config.autohide);
                        t.data("animation", this._config.fade);
                        this._config.class && t.addClass(this._config.class);
                        this._config.delay && 500 != this._config.delay && t.data("delay", this._config.delay);
                        i = n('<div class="toast-header">');
                        null != this._config.image && (u = n("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt),
                            null != this._config.imageHeight && u.height(this._config.imageHeight).width("auto"),
                            i.append(u));
                        (null != this._config.icon && i.append(n("<i />").addClass("mr-2").addClass(this._config.icon)),
                            null != this._config.title && i.append(n("<strong />").addClass("mr-auto").html(this._config.title)),
                            null != this._config.subtitle && i.append(n("<small />").html(this._config.subtitle)),
                            1 == this._config.close) && (f = n('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;<\/span>'),
                                null == this._config.title && f.toggleClass("ml-2 ml-auto"),
                                i.append(f));
                        t.append(i);
                        null != this._config.body && t.append(n('<div class="toast-body" />').html(this._config.body));
                        n(this._getContainerId()).prepend(t);
                        e = n.Event(r.CREATED);
                        n("body").trigger(e);
                        t.toast("show");
                        this._config.autoremove && t.on("hidden.bs.toast", function () {
                            n(this).delay(200).remove();
                            var t = n.Event(r.REMOVED);
                            n("body").trigger(t)
                        })
                    }
                        ,
                        i._getContainerId = function () {
                            return this._config.position == u ? h : this._config.position == f ? c : this._config.position == e ? l : this._config.position == o ? a : void 0
                        }
                        ,
                        i._prepareContainer = function () {
                            if (0 === n(this._getContainerId()).length) {
                                var t = n("<div />").attr("id", this._getContainerId().replace("#", ""));
                                this._config.position == u ? t.addClass(v) : this._config.position == f ? t.addClass(y) : this._config.position == e ? t.addClass(p) : this._config.position == o && t.addClass(w);
                                n("body").append(t)
                            }
                            this._config.fixed ? n(this._getContainerId()).addClass("fixed") : n(this._getContainerId()).removeClass("fixed")
                        }
                        ,
                        t._jQueryInterface = function (i, r) {
                            return this.each(function () {
                                var u = n.extend({}, b, r)
                                    , f = new t(n(this), u);
                                "create" === i && f[i]()
                            })
                        }
                        ,
                        t
                }();
            return n.fn[t] = i._jQueryInterface,
                n.fn[t].Constructor = i,
                n.fn[t].noConflict = function () {
                    return n.fn[t] = s,
                        i._jQueryInterface
                }
                ,
                i
        }(jQuery);
    n.CardRefresh = s;
    n.CardWidget = o;
    n.ControlSidebar = t;
    n.DirectChat = f;
    n.Dropdown = h;
    n.Layout = i;
    n.PushMenu = r;
    n.Toasts = c;
    n.TodoList = e;
    n.Treeview = u;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});

!function (n, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (i) {
        return t(n, n.document, undefined, i)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(n, n.document, undefined, require("jquery")) : t(n, n.document, undefined, n.jQuery)
}("undefined" != typeof window ? window : this, function (n, t, i, r) {
    "use strict";
    function at(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    function wt(i) {
        return i ? n.innerWidth || t.documentElement[u.cW] || t.body[u.cW] : n.innerHeight || t.documentElement[u.cH] || t.body[u.cH]
    }
    function g(n, t) {
        if (typeof n != l)
            throw "Can't bind function!";
        var i = u.p
            , e = Array[i].slice.call(arguments, 2)
            , r = function () { }
            , f = function () {
                return n.apply(this instanceof r ? this : t, e.concat(Array[i].slice.call(arguments)))
            };
        return n[i] && (r[i] = n[i]),
            f[i] = new r,
            f
    }
    function pt() {
        nt = nt || new ni(et.m);
        vt = vt || new ti(nt)
    }
    function ni(t) {
        function ft(n) {
            return {
                x: n[u.oH] - n[u.cH],
                y: n[u.oW] - n[u.cW]
            }
        }
        var b = this
            , tt = "overflow"
            , it = e("body")
            , i = e('<div id="os-dummy-scrollbar-size"><div><\/div><\/div>')
            , h = i[0]
            , rt = e(i.children("div").eq(0));
        it.append(i);
        i.hide().show();
        var l, r, s, a, v, ut, y, k, w, d = ft(h), g = {
            x: 0 === d.x,
            y: 0 === d.y
        }, nt = (r = n.navigator.userAgent,
            a = "substring",
            v = r[s = "indexOf"]("MSIE "),
            ut = r[s]("Trident/"),
            y = r[s]("Edge/"),
            k = r[s]("rv:"),
            w = parseInt,
            0 < v ? l = w(r[a](v + 5, r[s](".", v)), 10) : 0 < ut ? l = w(r[a](k + 3, r[s](".", k)), 10) : 0 < y && (l = w(r[a](y + 5, r[s](".", y)), 10)),
            l);
        e.extend(b, {
            defaultOptions: t,
            msie: nt,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !f.mO(),
            nativeScrollbarSize: d,
            nativeScrollbarIsOverlaid: g,
            nativeScrollbarStyling: function () {
                var t = !1;
                i.addClass("os-viewport-native-scrollbars-invisible");
                try {
                    t = "none" === i.css("scrollbar-width") && (9 < nt || !nt) || "none" === n.getComputedStyle(h, "::-webkit-scrollbar").getPropertyValue("display")
                } catch (r) { }
                return t
            }(),
            overlayScrollbarDummySize: {
                x: 30,
                y: 30
            },
            cssCalc: c.v("width", "calc", "(1px)") || null,
            restrictedMeasuring: function () {
                var n, t, r, f;
                return i.css(tt, "hidden"),
                    n = h[u.sW],
                    t = h[u.sH],
                    i.css(tt, "visible"),
                    r = h[u.sW],
                    f = h[u.sH],
                    n - r != 0 || t - f != 0
            }(),
            rtlScrollBehavior: function () {
                var t, n, r;
                return i.css({
                    "overflow-y": "hidden",
                    "overflow-x": "scroll",
                    direction: "rtl"
                }).scrollLeft(0),
                    t = i.offset(),
                    n = rt.offset(),
                    i.scrollLeft(-999),
                    r = rt.offset(),
                {
                    i: t.left === n.left,
                    n: n.left !== r.left
                }
            }(),
            supportTransform: !!c.u("transform"),
            supportTransition: !!c.u("transition"),
            supportPassiveEvents: function () {
                var t = !1;
                try {
                    n.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    }))
                } catch (i) { }
                return t
            }(),
            supportResizeObserver: !!f.rO(),
            supportMutationObserver: !!f.mO()
        });
        i.removeAttr(u.s).remove(),
            function () {
                function h() {
                    var t = n.screen.deviceXDPI || 0
                        , i = n.screen.logicalXDPI || 1;
                    return n.devicePixelRatio || t / i
                }
                if (!g.x || !g.y) {
                    var t = o.abs
                        , r = f.wW()
                        , u = f.wH()
                        , s = h();
                    e(n).on("resize", function () {
                        if (0 < p().length) {
                            var n = f.wW()
                                , c = f.wH()
                                , a = n - r
                                , v = c - u;
                            if (0 == a && 0 == v)
                                return;
                            var l, k = o.round(n / (r / 100)), d = o.round(c / (u / 100)), g = t(a), nt = t(v), tt = t(k), rt = t(d), y = h(), ut = 2 < g && 2 < nt, et = !function (n, i) {
                                var r = t(n)
                                    , u = t(i);
                                return r !== u && r + 1 !== u && r - 1 !== u
                            }(tt, rt), ot = ut && et && y !== s && 0 < s, w = b.nativeScrollbarSize;
                            ot && (it.append(i),
                                l = b.nativeScrollbarSize = ft(i[0]),
                                i.remove(),
                                w.x === l.x && w.y === l.y || e.each(p(), function () {
                                    p(this) && p(this).update("zoom")
                                }));
                            r = n;
                            u = c;
                            s = y
                        }
                    })
                }
            }()
    }
    function ti(n) {
        var s, v = e.inArray, h = f.now, w = "autoUpdate", c = u.l, t = [], l = [], r = !1, a = 33, y = h(), p = function () {
            var u, v, nt, b, e, k, d, g, n;
            if (0 < t[c] && r) {
                if (s = f.rAF()(function () {
                    p()
                }),
                    d = h(),
                    g = d - y,
                    a < g) {
                    for (y = d - g % a,
                        u = 33,
                        n = 0; n < t[c]; n++)
                        (v = t[n]) !== i && (b = (nt = v.options())[w],
                            e = o.max(1, nt.autoUpdateInterval),
                            k = h(),
                            (!0 === b || null === b) && k - l[n] > e && (v.update("auto"),
                                l[n] = new Date(k += e)),
                            u = o.max(1, o.min(u, e)));
                    a = u
                }
            } else
                a = 33
        };
        this.add = function (i) {
            -1 === v(i, t) && (t.push(i),
                l.push(h()),
                0 < t[c] && !r && (r = !0,
                    n.autoUpdateLoop = r,
                    p()))
        }
            ;
        this.remove = function (u) {
            var e = v(u, t);
            -1 < e && (l.splice(e, 1),
                t.splice(e, 1),
                0 === t[c] && r && (r = !1,
                    n.autoUpdateLoop = r,
                    s !== i && (f.cAF()(s),
                        s = -1)))
        }
    }
    function ii(r, a, w, b, g) {
        function yi(n, t, i, r, o) {
            var a = f.isA(t) && f.isA(i)
                , y = r ? "removeEventListener" : "addEventListener"
                , p = r ? "off" : "on"
                , h = !a && t.split(ni)
                , s = 0
                , v = e.isPlainObject(o)
                , c = os && (v ? o.V || !1 : o)
                , l = v && (o.$ || !1)
                , w = l || c
                , b = c ? {
                    passive: c,
                    capture: l
                } : l;
            if (a)
                for (; s < t[u.l]; s++)
                    yi(n, t[s], i[s], r, o);
            else
                for (; s < h[u.l]; s++)
                    w ? n[0][y](h[s], i, b) : n[p](h[s], i)
        }
        function wr(n, t, i, r) {
            yi(n, t, i, !1, r);
            oc.push(f.bind(yi, 0, n, t, i, !0, r))
        }
        function us(n, t) {
            var dt, ut, o, ft, y, et;
            if (n) {
                var gt = f.rO()
                    , ot = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart"
                    , c = "childNodes"
                    , r = 3333333
                    , l = function () {
                        n[ii](r)[ti](vt ? lt.n ? -r : lt.i ? 0 : r : r);
                        t()
                    };
                if (t) {
                    if (ss)
                        ((y = n.addClass("observed").append(nr(af)).contents()[0])[ph] = new gt(l)).observe(y);
                    else if (9 < rf || !re) {
                        n.prepend(nr(af, nr({
                            c: ts,
                            dir: "ltr"
                        }, nr(ts, nr(ya)) + nr(ts, nr({
                            c: ya,
                            style: "width: 200%; height: 200%"
                        })))));
                        var p, a, w, k, s = n[0][c][0][c][0], st = e(s[c][1]), d = e(s[c][0]), ni = e(d[0][c][0]), ht = s[u.oW], ct = s[u.oH], v = b.nativeScrollbarSize, yt = function () {
                            d[ti](r)[ii](r);
                            st[ti](r)[ii](r)
                        }, wt = function () {
                            a = 0;
                            p && (ht = w,
                                ct = k,
                                l())
                        }, g = function (n) {
                            return w = s[u.oW],
                                k = s[u.oH],
                                p = w != ht || k != ct,
                                n && p && !a ? (f.cAF()(a),
                                    a = f.rAF()(wt)) : n || wt(),
                                yt(),
                                n && (f.prvD(n),
                                    f.stpP(n)),
                                !1
                        }, tt = {}, bt = {};
                        pf(bt, it, [-2 * (v.y + 1), -2 * v.x, -2 * v.y, -2 * (v.x + 1)]);
                        e(s).css(bt);
                        d.on(ki, g);
                        st.on(ki, g);
                        n.on(ot, function () {
                            g(!1)
                        });
                        tt[rt] = r;
                        tt[pt] = r;
                        ni.css(tt);
                        yt()
                    } else
                        dt = df.attachEvent,
                            ut = rf !== i,
                            dt ? (n.prepend(nr(af)),
                                ie(n, di + af)[0].attachEvent("onresize", l)) : (o = df.createElement(h),
                                    o.setAttribute(u.ti, "-1"),
                                    o.setAttribute(u.c, af),
                                    o.onload = function () {
                                        var n = this.contentDocument.defaultView;
                                        n.addEventListener("resize", l);
                                        n.document.documentElement.style.display = "none"
                                    }
                                    ,
                                    o.type = "text/html",
                                    ut && n.prepend(o),
                                    o.data = "about:blank",
                                    ut || n.prepend(o),
                                    n.on(ot, l));
                    n[0] === ho && (ft = function () {
                        var t = nt.css("direction")
                            , n = {}
                            , i = 0
                            , u = !1;
                        return t !== sl && (i = "ltr" === t ? (n[at] = 0,
                            n[bi] = kt,
                            r) : (n[at] = kt,
                                n[bi] = 0,
                                lt.n ? -r : lt.i ? 0 : r),
                            ar.children().eq(0).css(n),
                            ar[ti](i)[ii](r),
                            sl = t,
                            u = !0),
                            u
                    }
                        ,
                        ft(),
                        wr(n, ki, function (n) {
                            return ft() && nu(),
                                f.prvD(n),
                                f.stpP(n),
                                !1
                        }))
                } else
                    ss ? (et = (y = n.contents()[0])[ph],
                        et && (et.disconnect(),
                            delete y[ph])) : yu(n.children(di + af).eq(0))
            }
        }
        function iy() {
            if (ro) {
                var r, t, o, n, i, a, v, s, h, c, y = f.mO(), p = f.now();
                gs = function (n) {
                    var t = !1;
                    return si && !fi && (vi(n, function () {
                        return !(t = function (n) {
                            var i = n.attributeName
                                , t = n.target
                                , f = n.type
                                , r = "closest";
                            if (t === ir)
                                return null === i;
                            if ("attributes" === f && (i === u.c || i === u.s) && !ft) {
                                if (i === u.c && e(t).hasClass(oi))
                                    return sv(n.oldValue, t.className);
                                if (typeof t[r] != l)
                                    return !0;
                                if (null !== t[r](di + af) || null !== t[r](di + lu) || null !== t[r](di + nc))
                                    return !1
                            }
                            return !0
                        }(this))
                    }),
                        t && (s = f.now(),
                            h = ku || rr,
                            c = function () {
                                dt || (p = s,
                                    ft && ac(),
                                    h ? nu() : ut.update(kt))
                            }
                            ,
                            clearTimeout(v),
                            11 < s - p || !h ? c() : v = setTimeout(c, 11))),
                        t
                }
                    ;
                lo = new y(ta = function (f) {
                    var s, e = !1, h = !1, c = [];
                    return si && !fi && (vi(f, function () {
                        r = (s = this).target;
                        t = s.attributeName;
                        o = t === u.c;
                        n = s.oldValue;
                        i = r.className;
                        hi && o && !h && -1 < n.indexOf(wo) && i.indexOf(wo) < 0 && (a = vv(!0),
                            wi.className = i.split(ni).concat(n.split(ni).filter(function (n) {
                                return n.match(a)
                            })).join(ni),
                            e = h = !0);
                        e = e || (o ? sv(n, i) : t !== u.s || n !== r[u.s].cssText);
                        c.push(t)
                    }),
                        lc(c),
                        e && ut.update(h || kt)),
                        e
                }
                );
                ao = new y(gs)
            }
        }
        function uv() {
            ro && !gr && (lo?.observe(wi, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: ec
            }),
                ao?.observe(ft ? wu : ir, {
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !ft,
                    childList: !ft,
                    characterData: !ft,
                    attributeFilter: ft ? rv : ec
                }),
                gr = !0)
        }
        function sc() {
            ro && gr && (lo.disconnect(),
                ao.disconnect(),
                gr = !1)
        }
        function ry() {
            if (!fi) {
                var n, t = {
                    w: ho[u.sW],
                    h: ho[u.sH]
                };
                n = wf(t, yl);
                yl = t;
                n && nu({
                    A: !0
                })
            }
        }
        function fv() {
            cf && tu(!0)
        }
        function ev() {
            cf && !uf.hasClass(vf) && tu(!1)
        }
        function uy() {
            ur && (tu(!0),
                clearTimeout(ra),
                ra = setTimeout(function () {
                    ur && !dt && tu(!1)
                }, 100))
        }
        function no(n) {
            return f.prvD(n),
                !1
        }
        function hc(n) {
            var t = e(n.target);
            wv(function (n, i) {
                t.is(i) && nu({
                    k: !0
                })
            })
        }
        function cc(n) {
            n || cc(!0);
            yi(nt, we.split(ni)[0], uy, !ur || n, !0);
            yi(nt, [ua, fa], [fv, ev], !cf || n, !0);
            si || n || nt.one("mouseover", fv)
        }
        function ov() {
            var n = {};
            return cr && ou && (n.w = iu(ou.css(yr + rt)),
                n.h = iu(ou.css(yr + pt)),
                n.c = wf(n, du),
                n.f = !0),
                !!(du = n).c
        }
        function sv(n, t) {
            var r, f, o = typeof t == s ? t.split(ni) : [], i = function (n, t) {
                for (var u, r = [], f = [], i = 0; i < n.length; i++)
                    r[n[i]] = !0;
                for (i = 0; i < t.length; i++)
                    r[t[i]] ? delete r[t[i]] : r[t[i]] = !0;
                for (u in r)
                    f.push(u);
                return f
            }(typeof n == s ? n.split(ni) : [], o), e = pu(rs, i);
            if (-1 < e && i.splice(e, 1),
                0 < i[u.l])
                for (f = vv(!0, !0),
                    r = 0; r < i.length; r++)
                    if (!i[r].match(f))
                        return !0;
            return !1
        }
        function lc(n) {
            vi(n = n || rc, function (n, t) {
                if (-1 < f.inA(t, rc)) {
                    var i = st.attr(t);
                    ht(i) == s ? ot.attr(t, i) : ot.removeAttr(t)
                }
            })
        }
        function ac() {
            if (!fi) {
                var t, i, r, f, e = !co, s = gt.w, h = gt.h, n = {}, c = rr || e;
                return n[yr + rt] = it,
                    n[yr + pt] = it,
                    n[rt] = kt,
                    st.css(n),
                    t = wu[u.oW],
                    i = c ? o.max(t, wu[u.sW] - 1) : 1,
                    n[rt] = rr ? kt : cu,
                    n[yr + rt] = cu,
                    n[pt] = kt,
                    st.css(n),
                    r = wu[u.oH],
                    f = o.max(r, wu[u.sH] - 1),
                    n[rt] = i,
                    n[pt] = f,
                    su.css(n),
                    n[yr + rt] = s,
                    n[yr + pt] = h,
                    st.css(n),
                {
                    q: t,
                    B: r,
                    X: i,
                    Y: f
                }
            }
        }
        function nu(n) {
            var is, ge, ss, no, ch, lh, vi, gc, l, pe, nl, ph, k;
            clearTimeout(il);
            n = n || {};
            yf.A |= n.A;
            yf.k |= n.k;
            yf.H |= n.H;
            var nf, wh = f.now(), kf = !!yf.A, we = !!yf.k, kr = !!yf.H, df = n.C, kh = 0 < uc && si && !dt && !kr && !df && wh - tl < uc && !ku && !rr;
            if (kh && (il = setTimeout(nu, uc)),
                !(dt || kh || fi && !df || si && !kr && (nf = nt.is(":hidden")) || "inline" === nt.css("display"))) {
                tl = wh;
                yf = {};
                !uu || ct.x && ct.y ? fu = ai({}, b.nativeScrollbarSize) : (fu.x = 0,
                    fu.y = 0);
                lf = {
                    x: 3 * (fu.x + (ct.x ? 0 : 3)),
                    y: 3 * (fu.y + (ct.y ? 0 : 3))
                };
                df = df || {};
                var t = function () {
                    return wf.apply(this, [].slice.call(arguments).concat([kr]))
                }
                    , di = {
                        x: ot[ti](),
                        y: ot[ii]()
                    }
                    , te = bt.scrollbars
                    , gh = bt.textarea
                    , ie = te.visibility
                    , nc = t(ie, pl)
                    , rf = te.autoHide
                    , tc = t(rf, wl)
                    , ho = te.clickScrolling
                    , ic = t(ho, bl)
                    , lo = te.dragScrolling
                    , rc = t(lo, bs)
                    , uf = bt.className
                    , ta = t(uf, ae)
                    , ff = bt.resize
                    , ao = t(ff, kl) && !cr
                    , ef = bt.paddingAbsolute
                    , lu = t(ef, hl)
                    , wo = bt.clipAlways
                    , fc = t(wo, cl)
                    , fr = bt.sizeAutoCapable && !cr
                    , ec = t(fr, al)
                    , p = bt.nativeScrollbarsOverlaid.showNativeScrollbars
                    , au = t(p, ps)
                    , be = bt.autoUpdate
                    , ia = t(be, ws)
                    , ue = bt.overflowBehavior
                    , go = t(ue, gf, kr)
                    , ns = gh.dynWidth
                    , ra = t(na, ns)
                    , ts = gh.dynHeight
                    , ua = t(gl, ts);
                (ih = "n" === rf,
                    gu = "s" === rf,
                    ur = "m" === rf,
                    cf = "l" === rf,
                    th = te.autoHideDelay,
                    ks = ae,
                    vo = "n" === ff,
                    yo = "b" === ff,
                    uh = "h" === ff,
                    fh = "v" === ff,
                    hu = bt.normalizeRTL,
                    p = p && ct.x && ct.y,
                    pl = ie,
                    wl = rf,
                    bl = ho,
                    bs = lo,
                    ae = uf,
                    kl = ff,
                    hl = ef,
                    cl = wo,
                    al = fr,
                    ps = p,
                    ws = be,
                    gf = ai({}, ue),
                    na = ns,
                    gl = ts,
                    dr = dr || {
                        x: !1,
                        y: !1
                    },
                    ta && (ui(nt, ks + ni + rs),
                        wt(nt, uf !== i && null !== uf && 0 < uf.length ? uf : rs)),
                    ia && (!0 === be || null === be && re ? (sc(),
                        g.add(ut)) : (g.remove(ut),
                            uv())),
                    ec) && (fr ? (ei ? ei.show() : (ei = e(nr(dv)),
                        tr.before(ei)),
                        eu) ? lr.show() : (lr = e(nr(gv)),
                            so = lr[0],
                            ei.before(lr),
                            is = {
                                w: -1,
                                h: -1
                            },
                            us(lr, function () {
                                var n = {
                                    w: so[u.oW],
                                    h: so[u.oH]
                                };
                                wf(n, is) && (si && ku && 0 < n.h || rr && 0 < n.w || si && !ku && 0 === n.h || !rr && 0 === n.w) && nu();
                                is = n
                            }),
                            eu = !0,
                            null !== es && lr.css(pt, es + "(100% + 1px)")) : (eu && lr.hide(),
                                ei && ei.hide()));
                kr && (ar.find("*").trigger(ki),
                    eu && lr.find("*").trigger(ki));
                nf = nf === i ? nt.is(":hidden") : nf;
                var ee, oe = !!ft && "off" !== st.attr("wrap"), fa = t(oe, co), ke = nt.css("direction"), d = t(ke, ol), fs = nt.css("box-sizing"), vu = t(fs, ul), a = kc(er);
                try {
                    ee = eu ? so[u.bCR]() : null
                } catch (sv) {
                    return
                }
                pi = "border-box" === fs;
                var af = (vt = "rtl" === ke) ? at : bi
                    , ht = vt ? bi : at
                    , os = !1
                    , oc = !(!eu || "none" === nt.css(pr)) && 0 === o.round(ee.right - ee.left) && (!!ef || 0 < wi[u.cW] - fe);
                fr && !oc && (ge = wi[u.oW],
                    ss = ei.css(rt),
                    ei.css(rt, kt),
                    no = wi[u.oW],
                    ei.css(rt, ss),
                    (os = ge !== no) || (ei.css(rt, ge + 1),
                        no = wi[u.oW],
                        ei.css(rt, ss),
                        os = ge !== no));
                var v = (oc || os) && fr && !nf
                    , vr = t(v, rr)
                    , ea = !v && rr
                    , w = !(!eu || !fr || nf) && 0 === o.round(ee.bottom - ee.top)
                    , oi = t(w, ku)
                    , oa = !w && ku
                    , tt = kc(tf, "-" + rt, !(v && pi || !pi), !(w && pi || !pi))
                    , yu = kc(li)
                    , s = {}
                    , y = {}
                    , hc = function () {
                        return {
                            w: wi[u.cW],
                            h: wi[u.cH]
                        }
                    }
                    , hs = function () {
                        return {
                            w: bu[u.oW] + o.max(0, ir[u.cW] - ir[u.sW]),
                            h: bu[u.oH] + o.max(0, ir[u.cH] - ir[u.sH])
                        }
                    }
                    , lc = fe = a.l + a.r
                    , vc = uo = a.t + a.b;
                if (lc *= ef ? 1 : 0,
                    vc *= ef ? 1 : 0,
                    a.c = t(a, ys),
                    cs = tt.l + tt.r,
                    ls = tt.t + tt.b,
                    tt.c = t(tt, fl),
                    as = yu.l + yu.r,
                    vs = yu.t + yu.b,
                    yu.c = t(yu, el),
                    co = oe,
                    ol = ke,
                    ul = fs,
                    rr = v,
                    ku = w,
                    ys = a,
                    fl = tt,
                    el = yu,
                    d && eu && lr.css(pr, ht),
                    a.c || d || lu || vr || oi || vu || ec) {
                    var hi = {}
                        , gs = {}
                        , yc = [a.t, a.r, a.b, a.l];
                    pf(y, li, [-a.t, -a.r, -a.b, -a.l]);
                    ef ? (pf(hi, it, yc),
                        pf(ft ? gs : s, er)) : (pf(hi, it),
                            pf(ft ? gs : s, er, yc));
                    tr.css(hi);
                    st.css(gs)
                }
                gt = hs();
                var pu = !!ft && ac()
                    , sa = ft && t(pu, dl)
                    , rh = ft && pu ? {
                        w: ns ? pu.X : pu.q,
                        h: ts ? pu.Y : pu.B
                    } : {};
                if (dl = pu,
                    w && (oi || lu || vu || a.c || tt.c) ? s[pt] = kt : (oi || lu) && (s[pt] = cu),
                    v && (vr || lu || vu || a.c || tt.c || d) ? (s[rt] = kt,
                        y[po + rt] = cu) : (vr || lu) && (s[rt] = cu,
                            s[pr] = it,
                            y[po + rt] = it),
                    v ? (y[rt] = kt,
                        s[rt] = c.v(rt, "max-content intrinsic") || kt,
                        s[pr] = ht) : y[rt] = it,
                    y[pt] = w ? rh.h || ir[u.cH] : it,
                    fr && ei.css(y),
                    yt.css(s),
                    s = {},
                    y = {},
                    kf || we || sa || d || vu || lu || vr || v || oi || w || au || go || fc || ao || nc || tc || rc || ic || ra || ua || fa) {
                    var to = "overflow"
                        , oh = to + "-x"
                        , sh = to + "-y";
                    if (!uu) {
                        var se = {}
                            , ha = dr.y && le.ys && !p ? ct.y ? ot.css(af) : -fu.y : 0
                            , va = dr.x && le.xs && !p ? ct.x ? ot.css(or) : -fu.x : 0;
                        pf(se, it);
                        ot.css(se)
                    }
                    var wr = pv()
                        , he = {
                            w: rh.w || wr[u.cW],
                            h: rh.h || wr[u.cH]
                        }
                        , ya = wr[u.sW]
                        , pa = wr[u.sH];
                    uu || (se[or] = oa ? it : va,
                        se[af] = ea ? it : ha,
                        ot.css(se));
                    gt = hs();
                    var io = hc()
                        , hh = {
                            w: io.w - as - cs - (pi ? 0 : fe),
                            h: io.h - vs - ls - (pi ? 0 : uo)
                        }
                        , vf = {
                            w: o.max((v ? he.w : ya) + lc, hh.w),
                            h: o.max((w ? he.h : pa) + vc, hh.h)
                        };
                    (vf.c = t(vf, ll),
                        ll = vf,
                        fr) && ((vf.c || w || v) && (y[rt] = vf.w,
                            y[pt] = vf.h,
                            ft || (he = {
                                w: wr[u.cW],
                                h: wr[u.cH]
                            })),
                            ch = {},
                            lh = function (n) {
                                var u = sr(n)
                                    , i = u.F
                                    , t = u.K
                                    , r = n ? v : w
                                    , f = n ? cs : ls
                                    , e = n ? fe : uo
                                    , s = n ? as : vs
                                    , h = gt[i] - f - s - (pi ? 0 : e);
                                r && (r || !tt.c) || (y[t] = hh[i] - 1);
                                !(r && he[i] < h) || n && ft && oe || (ft && (ch[t] = iu(su.css(t)) - 1),
                                    --y[t]);
                                0 < he[i] && (y[t] = o.max(1, y[t]))
                            }
                            ,
                            lh(!0),
                            lh(!1),
                            ft && su.css(ch),
                            ei.css(y));
                    v && (s[rt] = cu);
                    !v || pi || gr || (s[pr] = "none");
                    yt.css(s);
                    s = {};
                    vi = {
                        w: wr[u.sW],
                        h: wr[u.sH]
                    };
                    vi.c = we = t(vi, hf);
                    hf = vi;
                    gt = hs();
                    kf = t(io = hc(), ce);
                    ce = io;
                    var ah = ft && (0 === gt.w || 0 === gt.h)
                        , ro = ne
                        , bf = {}
                        , ve = {}
                        , pc = {}
                        , et = {}
                        , h = {}
                        , r = {}
                        , ye = {}
                        , bc = bu[u.bCR]()
                        , dc = function (n) {
                            var i = sr(n)
                                , u = sr(!n).U
                                , t = i.U
                                , f = i.F
                                , e = i.K
                                , c = ki + i.G + "Max"
                                , s = bc[e] ? o.abs(bc[e] - gt[f]) : 0
                                , l = ro && 0 < ro[t] && 0 === sf[c];
                            bf[t] = "v-s" === ue[t];
                            ve[t] = "v-h" === ue[t];
                            pc[t] = "s" === ue[t];
                            et[t] = o.max(0, o.round(100 * (vi[f] - gt[f])) / 100);
                            et[t] *= ah || l && 0 < s && s < 1 ? 0 : 1;
                            h[t] = 0 < et[t];
                            r[t] = bf[t] || ve[t] ? h[u] && !bf[u] && !ve[u] : h[t];
                            r[t + "s"] = !!r[t] && (pc[t] || bf[t]);
                            ye[t] = h[t] && r[t + "s"]
                        };
                    if (dc(!0),
                        dc(!1),
                        et.c = t(et, ne),
                        ne = et,
                        h.c = t(h, dr),
                        dr = h,
                        r.c = t(r, le),
                        le = r,
                        ct.x || ct.y) {
                        var vh, yh = {}, yi = {}, fo = kr;
                        (h.x || h.y) && (yi.w = ct.y && h.y ? vi.w + ru.y : it,
                            yi.h = ct.x && h.x ? vi.h + ru.x : it,
                            fo = t(yi, rl),
                            rl = yi);
                        (h.c || r.c || vi.c || d || vr || oi || v || w || au) && (s[li + ht] = s[tf + ht] = it,
                            vh = function (n) {
                                var f = sr(n)
                                    , e = sr(!n)
                                    , t = f.U
                                    , i = n ? or : af
                                    , u = n ? w : v;
                                ct[t] && h[t] && r[t + "s"] ? (s[li + i] = !u || p ? it : ru[t],
                                    s[tf + i] = n && u || p ? it : ru[t] + "px solid transparent") : (yi[e.F] = s[li + i] = s[tf + i] = it,
                                        fo = !0)
                            }
                            ,
                            uu ? hr(ot, dh, !p) : (vh(!0),
                                vh(!1)));
                        p && (yi.w = yi.h = it,
                            fo = !0);
                        fo && !uu && (yh[rt] = r.y ? yi.w : it,
                            yh[pt] = r.x ? yi.h : it,
                            ou || (ou = e(nr(kv)),
                                ot.prepend(ou)),
                            ou.css(yh));
                        yt.css(s)
                    }
                    if (l = {},
                        hi = {},
                        (kf || h.c || r.c || vi.c || go || vu || au || d || fc || oi) && (l[ht] = it,
                            (gc = function (n) {
                                var u = sr(n)
                                    , i = sr(!n)
                                    , t = u.U
                                    , f = u.J
                                    , e = n ? or : af
                                    , o = function () {
                                        l[e] = it;
                                        eh[i.F] = 0
                                    };
                                h[t] && r[t + "s"] ? (l[to + f] = ki,
                                    p || uu ? o() : (l[e] = -(ct[t] ? ru[t] : fu[t]),
                                        eh[i.F] = ct[t] ? ru[i.U] : 0)) : (l[to + f] = it,
                                            o())
                            }
                            )(!0),
                            gc(!1),
                            !uu && (gt.h < lf.x || gt.w < lf.y) && (h.x && r.x && !ct.x || h.y && r.y && !ct.y) ? (l[er + ri] = lf.x,
                                l[li + ri] = -lf.x,
                                l[er + ht] = lf.y,
                                l[li + ht] = -lf.y) : l[er + ri] = l[li + ri] = l[er + ht] = l[li + ht] = it,
                            l[er + af] = l[li + af] = it,
                            h.x && r.x || h.y && r.y || ah ? ft && ah && (hi[oh] = hi[sh] = "hidden") : (!wo || ve.x || bf.x || ve.y || bf.y) && (ft && (hi[oh] = hi[sh] = it),
                                l[oh] = l[sh] = "visible"),
                            tr.css(hi),
                            ot.css(l),
                            l = {},
                            (h.c || vu || vr || oi) && (!ct.x || !ct.y)) && (pe = ir[u.s],
                                pe.webkitTransform = "scale(1)",
                                pe.display = "run-in",
                                ir[u.oH],
                                pe.display = it,
                                pe.webkitTransform = it),
                        (s = {},
                            d || vr || oi) && (vt && v ? (nl = yt.css(pr),
                                ph = o.round(yt.css(pr, it).css(at, it).position().left),
                                yt.css(pr, nl),
                                ph !== o.round(yt.position().left) && (s[at] = ph)) : s[at] = it),
                        yt.css(s),
                        ft && we) {
                        if (k = function () {
                            var t = wu.selectionStart;
                            if (t !== i) {
                                for (var r, f = st.val(), c = f[u.l], e = f.split("\n"), l = e[u.l], o = f.substr(0, t).split("\n"), h = 0, s = 0, a = o[u.l], v = o[o[u.l] - 1][u.l], n = 0; n < e[u.l]; n++)
                                    r = e[n][u.l],
                                        s < r && (h = n + 1,
                                            s = r);
                                return {
                                    Q: a,
                                    Z: v,
                                    nn: l,
                                    tn: s,
                                    rn: h,
                                    en: t,
                                    "in": c
                                }
                            }
                        }(),
                            k) {
                            var sl = ds === i || k.nn !== ds.nn
                                , vl = k.Q
                                , wa = k.Z
                                , ba = k.rn
                                , ka = k.nn
                                , da = k.tn
                                , iv = k.en
                                , yl = k["in"] <= iv && nh
                                , eo = {
                                    x: oe || wa !== da || vl !== ba ? -1 : ne.x,
                                    y: (oe ? yl || sl && ro && di.y === ro.y : (yl || sl) && vl === ka) ? ne.y : -1
                                };
                            di.x = -1 < eo.x ? vt && hu && lt.i ? 0 : eo.x : di.x;
                            di.y = -1 < eo.y ? eo.y : di.y
                        }
                        ds = k
                    }
                    vt && lt.i && ct.y && h.x && hu && (di.x += eh.w || 0);
                    v && nt[ti](0);
                    w && nt[ii](0);
                    ot[ti](di.x)[ii](di.y);
                    var rv = "v" === ie
                        , fv = "h" === ie
                        , ev = "a" === ie
                        , oo = function (n, t) {
                            t = t === i ? n : t;
                            lv(!0, n, ye.x);
                            lv(!1, t, ye.y)
                        };
                    hr(nt, ko, r.x || r.y);
                    hr(nt, la, r.x);
                    hr(nt, aa, r.y);
                    d && !cr && hr(nt, ca, vt);
                    cr && wt(nt, bh);
                    ao && (hr(nt, bh, vo),
                        hr(ci, de, !vo),
                        hr(ci, ga, yo),
                        hr(ci, nv, uh),
                        hr(ci, tv, fh));
                    (nc || go || r.c || h.c || au) && (p ? au && (ui(nt, bo),
                        p && oo(!1)) : ev ? oo(ye.x, ye.y) : rv ? oo(!0) : fv && oo(!1));
                    (tc || au) && (cc(!cf && !ur),
                        tu(ih, !ih));
                    (kf || et.c || oi || vr || ao || vu || lu || au || d) && (wc(!0),
                        br(!0),
                        wc(!1),
                        br(!1));
                    ic && av(!0, ho);
                    rc && av(!1, lo);
                    gi("onDirectionChanged", {
                        isRTL: vt,
                        dir: ke
                    }, d);
                    gi("onHostSizeChanged", {
                        width: ce.w,
                        height: ce.h
                    }, kf);
                    gi("onContentSizeChanged", {
                        width: hf.w,
                        height: hf.h
                    }, we);
                    gi("onOverflowChanged", {
                        x: h.x,
                        y: h.y,
                        xScrollable: r.xs,
                        yScrollable: r.ys,
                        clipped: r.x || r.y
                    }, h.c || r.c);
                    gi("onOverflowAmountChanged", {
                        x: et.x,
                        y: et.y
                    }, et.c)
                }
                cr && du && (dr.c || du.c) && (du.f || ov(),
                    ct.y && dr.x && yt.css(yr + rt, du.w + ru.y),
                    ct.x && dr.y && yt.css(yr + pt, du.h + ru.x),
                    du.c = !1);
                si && df.updateOnLoad && hv();
                gi("onUpdated", {
                    forced: kr
                })
            }
        }
        function hv() {
            ft || wv(function (n, t) {
                yt.find(t).each(function (n, t) {
                    f.inA(t, ge) < 0 && (ge.push(t),
                        e(t).off(fc, hc).on(fc, hc))
                })
            })
        }
        function vc(n) {
            var t = et._(n, et.g, !0, ee);
            return ee = ai({}, ee, t.S),
                bt = ai({}, bt, t.z),
                t.z
        }
        function yc(n) {
            var r = "parent"
                , a = go + ni + is
                , o = ft ? ni + is : it
                , t = bt.textarea.inheritedAttrs
                , c = {}
                , l = function () {
                    var t = n ? st : nt;
                    vi(c, function (n, i) {
                        ht(i) == s && (n == u.c ? t.addClass(i) : t.attr(n, i))
                    })
                }
                , v = [oi, wo, wh, bh, ca, oa, sa, ha, bo, ko, la, aa, rs, go, is, ae].join(ni)
                , h = {};
            nt = nt || (ft ? hi ? st[r]()[r]()[r]()[r]() : e(nr(wh)) : st);
            yt = yt || vu(gh + o);
            ot = ot || vu(ns + o);
            tr = tr || vu(kh + o);
            ar = ar || vu("os-resize-observer-host");
            su = su || (ft ? vu(bv) : i);
            hi && wt(nt, wo);
            n && ui(nt, v);
            t = ht(t) == s ? t.split(ni) : t;
            f.isA(t) && ft && vi(t, function (t, i) {
                ht(i) == s && (c[i] = n ? nt.attr(i) : st.attr(i))
            });
            n ? (hi && si ? (ar.children().remove(),
                vi([tr, ot, yt, su], function (n, t) {
                    t && ui(t.removeAttr(u.s), tc)
                }),
                wt(nt, ft ? wh : oi)) : (yu(ar),
                    yt.contents().unwrap().unwrap().unwrap(),
                    ft && (st.unwrap(),
                        yu(nt),
                        yu(su),
                        l())),
                ft && st.removeAttr(u.s),
                cr && ui(kf, ea)) : (ft && (bt.sizeAutoCapable || (h[rt] = st.css(rt),
                    h[pt] = st.css(pt)),
                    hi || st.addClass(is).wrap(nt),
                    nt = st[r]().css(h)),
                    hi || (wt(st, ft ? a : oi),
                        nt.wrapInner(yt).wrapInner(ot).wrapInner(tr).prepend(ar),
                        yt = ie(nt, di + gh),
                        ot = ie(nt, di + ns),
                        tr = ie(nt, di + kh),
                        ft && (yt.prepend(su),
                            l())),
                    uu && wt(ot, dh),
                    ct.x && ct.y && wt(ot, va),
                    cr && wt(kf, ea),
                    ho = ar[0],
                    wi = nt[0],
                    bu = tr[0],
                    sf = ot[0],
                    ir = yt[0],
                    lc())
        }
        function fy() {
            function t(n) {
                ac();
                ut.update(kt);
                n && re && clearInterval(o)
            }
            var o, r, s = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144], n = [], e = "focus";
            ft ? (9 < rf || !re ? wr(st, "input", t) : wr(st, [ah, vh], [function (i) {
                var r = i.keyCode;
                pu(r, s) < 0 && (n[u.l] || (t(),
                    o = setInterval(t, 1e3 / 60)),
                    pu(r, n) < 0 && n.push(r))
            }
                , function (i) {
                    var r = i.keyCode
                        , f = pu(r, n);
                    pu(r, s) < 0 && (-1 < f && n.splice(f, 1),
                        n[u.l] || t(!0))
                }
            ]),
                wr(st, [ki, "drop", e, e + "out"], [function (n) {
                    return st[ti](lt.i && hu ? 9999999 : 0),
                        st[ii](0),
                        f.prvD(n),
                        f.stpP(n),
                        !1
                }
                    , function () {
                        setTimeout(function () {
                            dt || t()
                        }, 50)
                    }
                    , function () {
                        nh = !0;
                        wt(nt, e)
                    }
                    , function () {
                        nh = !1;
                        n = [];
                        ui(nt, e);
                        t(!0)
                    }
                ])) : wr(yt, yh, function (n) {
                    !0 !== ws && function (n) {
                        if (!si)
                            return 1;
                        var r = "flex-grow"
                            , f = "flex-shrink"
                            , e = "flex-basis"
                            , o = [rt, yr + rt, po + rt, li + at, li + bi, at, bi, "font-weight", "word-spacing", r, f, e]
                            , s = [er + at, er + bi, tf + at + rt, tf + bi + rt]
                            , h = [pt, yr + pt, po + pt, li + ri, li + or, ri, or, "line-height", r, f, e]
                            , c = [er + ri, er + or, tf + ri + rt, tf + or + rt]
                            , l = "s" === gf.x || "v-s" === gf.x
                            , t = !1
                            , i = function (n, t) {
                                for (var i = 0; i < n[u.l]; i++)
                                    if (n[i] === t)
                                        return !0;
                                return !1
                            };
                        return ("s" === gf.y || "v-s" === gf.y) && ((t = i(h, n)) || pi || (t = i(c, n))),
                            l && !t && ((t = i(o, n)) || pi || (t = i(s, n))),
                            t
                    }((n = n.originalEvent || n).propertyName) && ut.update(kt)
                });
            wr(ot, ki, function (n) {
                fi || (r !== i ? clearTimeout(r) : ((gu || ur) && tu(!0),
                    to() || wt(nt, bo),
                    gi("onScrollStart", n)),
                    nf || (br(!0),
                        br(!1)),
                    gi("onScroll", n),
                    r = setTimeout(function () {
                        dt || (clearTimeout(r),
                            r = i,
                            (gu || ur) && tu(!1),
                            to() || ui(nt, bo),
                            gi("onScrollStop", n))
                    }, 175))
            }, !0)
        }
        function pc(n) {
            function f(n) {
                var t = sr(n)
                    , i = t.an
                    , f = t.un
                    , e = t.cn;
                hi && si ? vi([i, f, e], function (n, t) {
                    ui(t.removeAttr(u.s), tc)
                }) : yu(i || r(n).an)
            }
            var t, i, r = function (t) {
                var i = vu(lu + ni + (t ? ny : ty), !0)
                    , r = vu(pa, i)
                    , u = vu(ba, i);
                return hi || n || (i.append(r),
                    r.append(u)),
                {
                    an: i,
                    un: r,
                    cn: u
                }
            };
            n ? (f(!0),
                f()) : (t = r(!0),
                    i = r(),
                    ff = t.an,
                    eo = t.un,
                    oe = t.cn,
                    ef = i.an,
                    oo = i.un,
                    se = i.cn,
                    hi || (tr.after(ef),
                        tr.after(ff)))
        }
        function cv(n) {
            function nt(n) {
                return rf && ct ? n["screen" + at] : f.page(n)[c]
            }
            function w(n) {
                return bt.scrollbars[n]
            }
            function tt() {
                p = .5
            }
            function it() {
                p = 1
            }
            function rt(n) {
                f.stpP(n)
            }
            function ft(n) {
                -1 < pu(n.keyCode, g) && tt()
            }
            function et(n) {
                -1 < pu(n.keyCode, g) && it()
            }
            function b(n) {
                var t = (n.originalEvent || n).touches !== i;
                return !(fi || dt || to() || !bs || t && !w("touchSupport")) && (1 === f.mBtn(n) || t)
            }
            function st(t) {
                if (b(t)) {
                    var u = e.I
                        , s = e.D
                        , i = e.N * ((nt(t) - a) * v / (u - s));
                    i = isFinite(i) ? i : 0;
                    vt && n && !lt.i && (i *= -1);
                    ot[l](o.round(r + i));
                    nf && br(n, r + i);
                    os || f.prvD(t)
                } else
                    y(t)
            }
            function y(e) {
                if (e = e || e.originalEvent,
                    yi(kr, [we, pe, ah, vh, be], [st, y, ft, et, no], !0),
                    f.rAF()(function () {
                        yi(kr, d, rt, !0, {
                            $: !0
                        })
                    }),
                    nf && br(n, !0),
                    nf = !1,
                    ui(uf, vf),
                    ui(t.cn, s),
                    ui(t.un, s),
                    ui(t.an, s),
                    v = 1,
                    it(),
                    h !== (a = r = i) && (ut.scrollStop(),
                        clearTimeout(h),
                        h = i),
                    e) {
                    var o = wi[u.bCR]();
                    e.clientX >= o.left && e.clientX <= o.right && e.clientY >= o.top && e.clientY <= o.bottom || ev();
                    (gu || ur) && tu(!1)
                }
            }
            function ht(i) {
                r = ot[l]();
                r = isNaN(r) ? 0 : r;
                (vt && n && !lt.n || !vt) && (r = r < 0 ? 0 : r);
                v = dc()[c];
                a = nt(i);
                nf = !w(k);
                wt(uf, vf);
                wt(t.cn, s);
                wt(t.an, s);
                yi(kr, [we, pe, be], [st, y, no]);
                f.rAF()(function () {
                    yi(kr, d, rt, !1, {
                        $: !0
                    })
                });
                !rf && hs || f.prvD(i);
                f.stpP(i)
            }
            var h, r, a, v, t = sr(n), e = t.sn, ct = he.top !== he, c = t.U, at = t.J, l = ki + t.G, s = "active", k = "snapHandle", d = "click", p = 1, g = [16, 17];
            wr(t.cn, te, function (n) {
                b(n) && ht(n)
            });
            wr(t.un, [te, ua, fa], [function (r) {
                if (b(r)) {
                    var u, d = t.sn.D / Math.round(o.min(1, gt[t.F] / hf[t.F]) * t.sn.I), at = o.round(gt[t.F] * d), yt = 270 * d, pt = 400 * d, bt = t.un.offset()[t.P], nt = r.ctrlKey, it = r.shiftKey, kt = it && nt, g = !0, rt = function (t) {
                        nf && br(n, t)
                    }, st = function () {
                        rt();
                        ht(r)
                    }, ct = function () {
                        if (!dt) {
                            var r = (a - bt) * v
                                , f = e.W
                                , nt = e.I
                                , s = e.D
                                , b = e.N
                                , tt = e.R
                                , k = yt * p
                                , ft = g ? o.max(pt, k) : k
                                , t = b * ((r - s / 2) / (nt - s))
                                , y = vt && n && (!lt.i && !lt.n || hu)
                                , et = y ? f < r : r < f
                                , w = {}
                                , d = {
                                    easing: "linear",
                                    step: function (t) {
                                        nf && (ot[l](t),
                                            br(n, t))
                                    }
                                };
                            t = isFinite(t) ? t : 0;
                            t = vt && n && !lt.i ? b - t : t;
                            it ? (ot[l](t),
                                kt ? (t = ot[l](),
                                    ot[l](tt),
                                    t = y && lt.i ? b - t : t,
                                    t = y && lt.n ? -t : t,
                                    w[c] = t,
                                    ut.scroll(w, ai(d, {
                                        duration: 130,
                                        complete: st
                                    }))) : st()) : (u = g ? et : u,
                                        (y ? u ? r <= f + s : f <= r : u ? f <= r : r <= f + s) ? (clearTimeout(h),
                                            ut.scrollStop(),
                                            h = i,
                                            rt(!0)) : (h = setTimeout(ct, ft),
                                                w[c] = (u ? "-=" : "+=") + at,
                                                ut.scroll(w, ai(d, {
                                                    duration: k
                                                }))),
                                        g = !1)
                        }
                    };
                    nt && tt();
                    v = dc()[c];
                    a = f.page(r)[c];
                    nf = !w(k);
                    wt(uf, vf);
                    wt(t.un, s);
                    wt(t.an, s);
                    yi(kr, [pe, ah, vh, be], [y, ft, et, no]);
                    ct();
                    f.prvD(r);
                    f.stpP(r)
                }
            }
                , function () {
                    rh = !0;
                    (gu || ur) && tu(!0)
                }
                , function () {
                    rh = !1;
                    (gu || ur) && tu(!1)
                }
            ]);
            wr(t.an, te, function (n) {
                f.stpP(n)
            });
            ue && wr(t.an, yh, function (i) {
                i.target === t.an[0] && (wc(n),
                    br(n))
            })
        }
        function lv(n, t, i) {
            var r = n ? ff : ef;
            hr(nt, n ? oa : sa, !t);
            hr(r, da, !i)
        }
        function tu(n, t) {
            if (clearTimeout(ia),
                n)
                ui(ff, ke),
                    ui(ef, ke);
            else {
                var i, r = function () {
                    rh || dt || (!(i = oe?.hasClass("active") || se?.hasClass("active")) && (gu || ur || cf) && wt(ff, ke),
                        !i && (gu || ur || cf) && wt(ef, ke))
                };
                0 < th && !0 !== t ? ia = setTimeout(r, th) : r()
            }
        }
        function wc(n) {
            var i = {}
                , t = sr(n)
                , r = t.sn
                , u = o.min(1, gt[t.F] / hf[t.F]);
            i[t.K] = o.floor(1e8 * u) / 1e6 + "%";
            to() || t?.cn?.css(i);
            r.D = t.cn[0]["offset" + t.ln];
            r.M = u
        }
        function br(n, t) {
            var l, k, a = ht(t) == y, v = vt && n, r = sr(n), f = r.sn, d = "translate(", g = c.u("transform"), nt = c.u("transition"), p = n ? ot[ti]() : ot[ii](), ft = t === i || a ? p : t, w = f.D, s = r.un[0]["offset" + r.ln], et = s - w, h = {}, b = (sf[ki + r.ln] - sf["client" + r.ln]) * (lt.n && v ? -1 : 1), tt = function (n) {
                return isNaN(n / b) ? 0 : o.max(0, o.min(1, n / b))
            }, rt = function (n) {
                var t = et * n;
                return t = isNaN(t) ? 0 : t,
                    t = v && !lt.i ? s - w - t : t,
                    t = o.max(0, t)
            }, ut = tt(p), e = rt(tt(ft)), st = rt(ut);
            f.N = b;
            f.R = p;
            f.L = ut;
            bf ? (l = v ? -(s - w - e) : e,
                k = n ? d + l + "px, 0)" : d + "0, " + l + "px)",
                h[g] = k,
                ue && (h[nt] = a && 1 < o.abs(e - f.W) ? function (n) {
                    var o = c.u("transition")
                        , s = n.css(o);
                    if (s)
                        return s;
                    for (var r, f, t, h = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", l = new RegExp(h), v = new RegExp("^(" + h + ")+$"), a = "property duration timing-function delay".split(" "), i = [], e = 0, y = function (n) {
                        if (r = [],
                            !n.match(v))
                            return n;
                        for (; n.match(l);)
                            r.push(RegExp.$1),
                                n = n.replace(l, it);
                        return r
                    }; e < a[u.l]; e++)
                        for (f = y(n.css(o + "-" + a[e])),
                            t = 0; t < f[u.l]; t++)
                            i[t] = (i[t] ? i[t] + ni : it) + f[t];
                    return i.join(", ")
                }(r.cn) + ", " + (g + ni + 250) + "ms" : it)) : h[r.P] = e;
            to() || (r.cn.css(h),
                bf && ue && a && r.cn.one(yh, function () {
                    dt || r.cn.css(nt, it)
                }));
            f.W = e;
            f.j = st;
            f.I = s
        }
        function av(n, t) {
            var i = t ? "removeClass" : "addClass"
                , u = n ? oo : se
                , r = n ? wa : ka;
            (n ? eo : oe)[i](r);
            u[i](r)
        }
        function sr(n) {
            return {
                K: n ? rt : pt,
                ln: n ? "Width" : "Height",
                P: n ? at : ri,
                G: n ? "Left" : "Top",
                U: n ? ve : ye,
                J: n ? "X" : "Y",
                F: n ? "w" : "h",
                vn: n ? "l" : "t",
                un: n ? eo : oo,
                cn: n ? oe : se,
                an: n ? ff : ef,
                sn: n ? fr : vr
            }
        }
        function bc(n) {
            ci = ci || vu(nc, !0);
            n ? hi && si ? ui(ci.removeAttr(u.s), tc) : yu(ci) : hi || nt.append(ci)
        }
        function gi(n, t, i) {
            if (!1 !== i)
                if (si) {
                    var u, f = bt.callbacks[n], r = n;
                    "on" === r.substr(0, 2) && (r = r.substr(2, 1).toLowerCase() + r.substr(3));
                    ht(f) == l && f.call(ut, t);
                    vi(au, function () {
                        ht((u = this).on) == l && u.on(r, t)
                    })
                } else
                    dt || ic.push({
                        n: n,
                        a: t
                    })
        }
        function pf(n, t, i) {
            i = i || [it, it, it, it];
            n[(t = t || it) + ri] = i[0];
            n[t + bi] = i[1];
            n[t + or] = i[2];
            n[t + at] = i[3]
        }
        function kc(n, t, i, r) {
            return t = t || it,
                n = n || it,
            {
                t: r ? 0 : iu(nt.css(n + ri + t)),
                r: i ? 0 : iu(nt.css(n + bi + t)),
                b: r ? 0 : iu(nt.css(n + or + t)),
                l: i ? 0 : iu(nt.css(n + at + t))
            }
        }
        function vv(n, t) {
            var i, r, f, e = function (n, t) {
                if (f = "",
                    t && typeof n == s)
                    for (r = n.split(ni),
                        i = 0; i < r[u.l]; i++)
                        f += "|" + r[i] + "$";
                return f
            };
            return new RegExp("(^" + oi + "([-_].+|)$)" + e(ae, n) + e(ks, t), "g")
        }
        function dc() {
            var n = bu[u.bCR]();
            return {
                x: bf && 1 / (o.round(n.width) / bu[u.oW]) || 1,
                y: bf && 1 / (o.round(n.height) / bu[u.oH]) || 1
            }
        }
        function yv(t) {
            var i = "ownerDocument"
                , r = "HTMLElement"
                , u = t && t[i] && t[i].parentWindow || n;
            return typeof u[r] == h ? t instanceof u[r] : t && typeof t == h && null !== t && 1 === t.nodeType && typeof t.nodeName == s
        }
        function iu(n, t) {
            var i = t ? parseFloat(n) : parseInt(n, 10);
            return isNaN(i) ? 0 : i
        }
        function to() {
            return ps && ct.x && ct.y
        }
        function pv() {
            return ft ? su[0] : ir
        }
        function nr(n, t) {
            return "<div " + (n ? ht(n) == s ? 'class="' + n + '"' : function () {
                var t, i = it;
                if (e.isPlainObject(n))
                    for (t in n)
                        i += ("c" === t ? "class" : t) + '="' + n[t] + '" ';
                return i
            }() : it) + ">" + (t || it) + "<\/div>"
        }
        function vu(n, t) {
            var i = ht(t) == y
                , r = !i && t || nt;
            return hi && !r[u.l] ? null : hi ? r[i ? "children" : "find"](di + n.replace(/\s/g, di)).eq(0) : e(nr(n))
        }
        function gc(n, t) {
            for (var r, f = t.split(di), i = 0; i < f.length; i++) {
                if (!n[u.hOP](f[i]))
                    return;
                r = n[f[i]];
                i < f.length && ht(r) == h && (n = r)
            }
            return r
        }
        function wv(n) {
            var t = bt.updateOnLoad;
            t = ht(t) == s ? t.split(ni) : t;
            f.isA(t) && !dt && vi(t, n)
        }
        function wf(n, t, i) {
            if (i)
                return i;
            if (ht(n) != h || ht(t) != h)
                return n !== t;
            for (var r in n)
                if ("c" !== r && (!n[u.hOP](r) || !t[u.hOP](r) || wf(n[r], t[r])))
                    return !0;
            return !1
        }
        function ai() {
            return e.extend.apply(this, [!0].concat([].slice.call(arguments)))
        }
        function wt(n, t) {
            return io.addClass.call(n, t)
        }
        function ui(n, t) {
            return io.removeClass.call(n, t)
        }
        function hr(n, t, i) {
            return (i ? wt : ui)(n, t)
        }
        function yu(n) {
            return io.remove.call(n)
        }
        function ie(n, t) {
            return io.find.call(n, t).eq(0)
        }
        var ht = f.type, pu = e.inArray, vi = e.each, ut = new v, io = e[u.p], fs;
        if (yv(r)) {
            if (p(r))
                return fs = p(r),
                    fs.options(a),
                    fs;
            var ct, ru, lt, re, rf, uu, es, fu, ue, bf, os, ss, ro, si, dt, ft, cr, hs, hi, pi, eu, fe, uo, cs, ls, as, vs, vt, fi, nl, ee, bt, tl, il, fo, kr, kf, uf, st, nt, lr, ar, tr, ot, yt, ou, ei, su, ci, ff, eo, oe, ef, oo, se, he, df, wu, wi, so, ho, bu, sf, ir, ce, hf, rl, dr, le, rr, ku, ul, ys, fl, el, ol, sl, hl, cl, ll, gf, ne, ps, ws, al, vl, yl, pl, wl, bl, bs, kl, hu, ae, ks, co, ds, dl, gl, na, du, lo, ao, ta, gs, gr, nh, ia, ra, th, ih, gu, ur, cf, rh, nf, vo, yo, uh, fh, eh = {}, fr = {}, vr = {}, gt = {}, lf = {}, oh = "-hidden", li = "margin-", er = "padding-", tf = "border-", ri = "top", bi = "right", or = "bottom", at = "left", yr = "min-", po = "max-", rt = "width", pt = "height", pr = "float", it = "", kt = "auto", sh = "sync", ki = "scroll", cu = "100%", ve = "x", ye = "y", di = ".", ni = " ", hh = "scrollbar", ch = "-horizontal", lh = "-vertical", ti = ki + "Left", ii = ki + "Top", te = "mousedown touchstart", pe = "mouseup touchend touchcancel", we = "mousemove touchmove", ua = "mouseenter", fa = "mouseleave", ah = "keydown", vh = "keyup", be = "selectstart", yh = "transitionend webkitTransitionEnd oTransitionEnd", ph = "__overlayScrollbarsRO__", ea = "os-html", oi = "os-host", wo = oi + "-foreign", wh = oi + "-textarea", oa = oi + "-" + hh + ch + oh, sa = oi + "-" + hh + lh + oh, ha = oi + "-transition", ca = oi + "-rtl", bh = oi + "-resize-disabled", bo = oi + "-scrolling", ko = oi + "-overflow", la = (ko = oi + "-overflow") + "-x", aa = ko + "-y", go = "os-textarea", bv = go + "-cover", kh = "os-padding", ns = "os-viewport", dh = ns + "-native-scrollbars-invisible", va = ns + "-native-scrollbars-overlaid", gh = "os-content", kv = "os-content-arrange", dv = "os-content-glue", gv = "os-size-auto-observer", af = "os-resize-observer", ts = "os-resize-observer-item", ya = ts + "-final", is = "os-text-inherit", lu = "os-" + hh, pa = lu + "-track", wa = pa + "-off", ba = lu + "-handle", ka = ba + "-off", da = lu + "-unusable", ke = lu + "-" + kt + oh, nc = lu + "-corner", de = nc + "-resize", ga = de + "-both", nv = de + ch, tv = de + lh, ny = lu + ch, ty = lu + lh, vf = "os-dragging", rs = "os-theme-none", tc = [dh, va, wa, ka, da, ke, de, ga, nv, tv, vf].join(ni), ic = [], rc = [u.ti], au = {}, yf = {}, uc = 42, fc = "load", ge = [], iv = {}, rv = ["wrap", "cols", "rows"], ec = [u.i, u.c, u.s, "open"].concat(rc), oc = [];
            return ut.sleep = function () {
                fi = !0
            }
                ,
                ut.update = function (n) {
                    var f, t, e, r, o;
                    if (!dt)
                        return ht(n) == s ? n === kt ? (f = function () {
                            if (!fi && !gr) {
                                var n, t, f, r = [], e = [{
                                    T: nt,
                                    O: ec.concat(":visible")
                                }, {
                                    T: ft ? st : i,
                                    O: rv
                                }];
                                return vi(e, function (i, u) {
                                    (n = u.T) && vi(u.O, function (i, u) {
                                        t = ":" === u.charAt(0) ? n.is(u) : n.attr(u);
                                        f = iv[u];
                                        wf(t, f) && r.push(u);
                                        iv[u] = t
                                    })
                                }),
                                    lc(r),
                                    0 < r[u.l]
                            }
                        }(),
                            t = function () {
                                if (fi)
                                    return !1;
                                var i, r, f, t, e = pv(), o = ft && rr && !co ? st.val().length : 0, s = !gr && rr && !ft, n = {};
                                return s && (i = yt.css(pr),
                                    n[pr] = vt ? bi : at,
                                    n[rt] = kt,
                                    yt.css(n)),
                                    t = {
                                        w: e[u.sW] + o,
                                        h: e[u.sH] + o
                                    },
                                    s && (n[pr] = i,
                                        n[rt] = cu,
                                        yt.css(n)),
                                    r = ov(),
                                    f = wf(t, vl),
                                    vl = t,
                                    f || r
                            }(),
                            (e = f || t) && nu({
                                k: t,
                                C: si ? i : bt
                            })) : n === sh ? gr ? (r = ta(lo.takeRecords()),
                                o = gs(ao.takeRecords())) : r = ut.update(kt) : "zoom" === n && nu({
                                    A: !0,
                                    k: !0
                                }) : (n = fi || n,
                                    fi = !1,
                                    ut.update(sh) && !n || nu({
                                        H: n
                                    })),
                            hv(),
                            e || r || o
                }
                ,
                ut.options = function (n, t) {
                    var i, r = {};
                    if (e.isEmptyObject(n) || !e.isPlainObject(n)) {
                        if (ht(n) != s)
                            return ee;
                        if (!(1 < arguments.length))
                            return gc(ee, n);
                        !function (n, t, i) {
                            for (var f = t.split(di), o = f.length, r = 0, u = {}, s = u; r < o; r++)
                                u = u[f[r]] = r + 1 < o ? {} : i;
                            e.extend(n, s, !0)
                        }(r, n, t);
                        i = vc(r)
                    } else
                        i = vc(n);
                    e.isEmptyObject(i) || nu({
                        C: i
                    })
                }
                ,
                ut.destroy = function () {
                    var t, n;
                    if (!dt) {
                        for (t in g.remove(ut),
                            sc(),
                            us(ar),
                            us(lr),
                            au)
                            ut.removeExt(t);
                        for (; 0 < oc[u.l];)
                            oc.pop()();
                        for (cc(!0),
                            ei && yu(ei),
                            ou && yu(ou),
                            eu && yu(lr),
                            pc(!0),
                            bc(!0),
                            yc(!0),
                            n = 0; n < ge[u.l]; n++)
                            e(ge[n]).off(fc, hc);
                        ge = i;
                        fi = dt = !0;
                        p(r, 0);
                        gi("onDestroyed")
                    }
                }
                ,
                ut.scroll = function (n, t, r, c) {
                    function cr(n, t) {
                        for (a = 0; a < t[w]; a++)
                            if (n === t[a])
                                return 1
                    }
                    function lr(n, t) {
                        var i = n ? nu : tu;
                        if (t = ht(t) == s || ht(t) == d ? [t, t] : t,
                            f.isA(t))
                            return n ? t[0] : t[1];
                        if (ht(t) == h)
                            for (a = 0; a < i[w]; a++)
                                if (i[a] in t)
                                    return t[i[a]]
                    }
                    function ar(n, t) {
                        var l, u, r, a, g = ht(t) == s, y = n ? fr : vr, p = y.R, h = y.N, c = vt && n, b = c && lt.n && !st, f = "replace", nt = eval;
                        if ((u = g ? (2 < t[w] && (a = t.substr(0, 2),
                            -1 < pu(a, ru) && (l = a)),
                            t = (t = l ? t.substr(2) : t)[f](/min/g, 0)[f](/</g, 0)[f](/max/g, (b ? "-" : it) + cu)[f](/>/g, (b ? "-" : it) + cu)[f](/px/g, it)[f](/%/g, " * " + h * (c && lt.n ? -1 : 1) / 100)[f](/vw/g, " * " + gt.w)[f](/vh/g, " * " + gt.h),
                            iu(isNaN(t) ? iu(nt(t), !0).toFixed() : t)) : t) !== i && !isNaN(u) && ht(u) == d) {
                            var v = st && c
                                , e = p * (v && lt.n ? -1 : 1)
                                , k = v && lt.i
                                , tt = v && lt.n;
                            switch (e = k ? h - e : e,
                            l) {
                                case "+=":
                                    r = e + u;
                                    break;
                                case "-=":
                                    r = e - u;
                                    break;
                                case "*=":
                                    r = e * u;
                                    break;
                                case "/=":
                                    r = e / u;
                                    break;
                                default:
                                    r = u
                            }
                            r = k ? h - r : r;
                            r *= tt ? -1 : 1;
                            r = c && lt.n ? o.min(0, o.max(h, r)) : o.max(0, o.min(h, r))
                        }
                        return r === p ? i : r
                    }
                    function yr(n, t, i, r) {
                        var u, f, e = [i, i], o = ht(n);
                        if (o == t)
                            n = [n, n];
                        else if (o == k) {
                            if (2 < (u = n[w]) || u < 1)
                                n = e;
                            else
                                for (1 === u && (n[1] = i),
                                    a = 0; a < u; a++)
                                    if (f = n[a],
                                        ht(f) != t || !cr(f, r)) {
                                        n = e;
                                        break
                                    }
                        } else
                            n = o == h ? [n[ve] || i, n[ye] || i] : e;
                        return {
                            x: n[0],
                            y: n[1]
                        }
                    }
                    function ci(n) {
                        var t, r, i = [], u = [ri, bi, or, at];
                        for (a = 0; a < n[w] && a !== u[w]; a++)
                            t = n[a],
                                (r = ht(t)) == y ? i.push(t ? iu(oi.css(li + u[a])) : 0) : i.push(r == d ? t : 0);
                        return i
                    }
                    var b;
                    if (0 === arguments.length || n === i) {
                        var nr = hu && vt && lt.i
                            , ir = hu && vt && lt.n
                            , dt = fr.R
                            , ni = fr.L
                            , vi = fr.N;
                        return ni = nr ? 1 - ni : ni,
                            dt = nr ? vi - dt : dt,
                            vi *= ir ? -1 : 1,
                        {
                            position: {
                                x: dt *= ir ? -1 : 1,
                                y: vr.R
                            },
                            ratio: {
                                x: ni,
                                y: vr.L
                            },
                            max: {
                                x: vi,
                                y: vr.N
                            },
                            handleOffset: {
                                x: fr.W,
                                y: vr.W
                            },
                            handleLength: {
                                x: fr.D,
                                y: vr.D
                            },
                            handleLengthRatio: {
                                x: fr.M,
                                y: vr.M
                            },
                            trackLength: {
                                x: fr.I,
                                y: vr.I
                            },
                            snappedHandleOffset: {
                                x: fr.j,
                                y: vr.j
                            },
                            isRTL: vt,
                            isRTLNormalized: hu
                        }
                    }
                    ut.update(sh);
                    var a, ui, fi, ei, yi, g, et, nt, oi, st = hu, nu = [ve, at, "l"], tu = [ye, ri, "t"], ru = ["+=", "-=", "*=", "/="], pi = ht(t) == h, rr = pi ? t.complete : c, p = {}, wi = {}, ct = "begin", ur = "nearest", si = "never", hi = "ifneeded", w = u.l, uu = [ve, ye, "xy", "yx"], fu = [ct, "end", "center", ur], eu = ["always", si, hi], yt = n[u.hOP]("el"), wt = yt ? n.el : n, ki = !!(wt instanceof e || tt) && wt instanceof tt, ou = !ki && yv(wt), er = function () {
                        ui && br(!0);
                        fi && br(!1)
                    }, hr = ht(rr) != l ? i : function () {
                        er();
                        rr()
                    }
                        ;
                    if (ki || ou) {
                        var pr, v = yt ? n.margin : 0, wr = yt ? n.axis : 0, su = yt ? n.scroll : 0, lu = yt ? n.block : 0, kr = [0, 0, 0, 0], ai = ht(v);
                        if (0 < (oi = ki ? wt : e(wt))[w]) {
                            v = ai == d || ai == y ? ci([v, v, v, v]) : ai == k ? 2 === (pr = v[w]) ? ci([v[0], v[1], v[0], v[1]]) : 4 <= pr ? ci(v) : kr : ai == h ? ci([v[ri], v[bi], v[or], v[at]]) : kr;
                            yi = cr(wr, uu) ? wr : "xy";
                            g = yr(su, s, "always", eu);
                            et = yr(lu, s, ct, fu);
                            nt = v;
                            var di = fr.R
                                , au = vr.R
                                , bt = tr.offset()
                                , ft = oi.offset()
                                , kt = {
                                    x: g.x == si || yi == ye,
                                    y: g.y == si || yi == ve
                                };
                            if (ft[ri] -= nt[0],
                                ft[at] -= nt[3],
                                b = {
                                    x: o.round(ft[at] - bt[at] + di),
                                    y: o.round(ft[ri] - bt[ri] + au)
                                },
                                vt && (lt.n || lt.i || (b.x = o.round(bt[at] - ft[at] + di)),
                                    lt.n && st && (b.x *= -1),
                                    lt.i && st && (b.x = o.round(bt[at] - ft[at] + (fr.N - di)))),
                                et.x != ct || et.y != ct || g.x == hi || g.y == hi || vt) {
                                var gi = oi[0]
                                    , dr = bf ? gi[u.bCR]() : {
                                        width: gi[u.oW],
                                        height: gi[u.oH]
                                    }
                                    , vu = {
                                        w: dr[rt] + nt[3] + nt[1],
                                        h: dr[pt] + nt[0] + nt[2]
                                    }
                                    , gr = function (n) {
                                        var u = sr(n)
                                            , o = u.F
                                            , s = u.P
                                            , t = u.U
                                            , h = et[t] == (n && vt ? ct : "end")
                                            , c = "center" == et[t]
                                            , p = et[t] == ur
                                            , w = g[t] == si
                                            , l = g[t] == hi
                                            , i = gt[o]
                                            , f = bt[s]
                                            , r = vu[o]
                                            , e = ft[s]
                                            , a = c ? 2 : 1
                                            , v = e + r / 2
                                            , y = f + i / 2
                                            , k = r <= i && f <= e && e + r <= f + i;
                                        w ? kt[t] = !0 : kt[t] || ((p || l) && (kt[t] = l && k,
                                            h = r < i ? y < v : v < y),
                                            b[t] -= h || c ? (i / a - r / a) * (n && vt && st ? -1 : 1) : 0)
                                    };
                                gr(!0);
                                gr(!1)
                            }
                            kt.y && delete b.y;
                            kt.x && delete b.x;
                            n = b
                        }
                    }
                    p[ti] = ar(!0, lr(!0, n));
                    p[ii] = ar(!1, lr(!1, n));
                    ui = p[ti] !== i;
                    fi = p[ii] !== i;
                    (ui || fi) && (0 < t || pi) ? pi ? (t.complete = hr,
                        ot.animate(p, t)) : (ei = {
                            duration: t,
                            complete: hr
                        },
                            f.isA(r) || e.isPlainObject(r) ? (wi[ti] = r[0] || r.x,
                                wi[ii] = r[1] || r.y,
                                ei.specialEasing = wi) : ei.easing = r,
                            ot.animate(p, ei)) : (ui && ot[ti](p[ti]),
                                fi && ot[ii](p[ii]),
                                er())
                }
                ,
                ut.scrollStop = function (n, t, i) {
                    return ot.stop(n, t, i),
                        ut
                }
                ,
                ut.getElements = function (n) {
                    var t = {
                        target: wu,
                        host: wi,
                        padding: bu,
                        viewport: sf,
                        content: ir,
                        scrollbarHorizontal: {
                            scrollbar: ff[0],
                            track: eo[0],
                            handle: oe[0]
                        },
                        scrollbarVertical: {
                            scrollbar: ef[0],
                            track: oo[0],
                            handle: se[0]
                        },
                        scrollbarCorner: ci[0]
                    };
                    return ht(n) == s ? gc(t, n) : t
                }
                ,
                ut.getState = function (n) {
                    function t(n) {
                        if (!e.isPlainObject(n))
                            return n;
                        var t = ai({}, n)
                            , i = function (n, i) {
                                t[u.hOP](n) && (t[i] = t[n],
                                    delete t[n])
                            };
                        return i("w", rt),
                            i("h", pt),
                            delete t.c,
                            t
                    }
                    var i = {
                        destroyed: !!t(dt),
                        sleeping: !!t(fi),
                        autoUpdate: t(!gr),
                        widthAuto: t(rr),
                        heightAuto: t(ku),
                        padding: t(ys),
                        overflowAmount: t(ne),
                        hideOverflow: t(le),
                        hasOverflow: t(dr),
                        contentScrollSize: t(hf),
                        viewportSize: t(gt),
                        hostSize: t(ce),
                        documentMixed: t(hs)
                    };
                    return ht(n) == s ? gc(i, n) : i
                }
                ,
                ut.ext = function (n) {
                    var i, r = "added removed on contract".split(" "), t = 0;
                    if (ht(n) == s) {
                        if (au[u.hOP](n))
                            for (i = ai({}, au[n]); t < r.length; t++)
                                delete i[r[t]]
                    } else
                        for (t in i = {},
                            au)
                            i[t] = ai({}, ut.ext(t));
                    return i
                }
                ,
                ut.addExt = function (t, i) {
                    var r, o, s, h, c = v.extension(t), a = !0;
                    if (c) {
                        if (au[u.hOP](t))
                            return ut.ext(t);
                        if ((r = c.extensionFactory.call(ut, ai({}, c.defaultOptions), e, f)) && (s = r.contract,
                            ht(s) == l && (h = s(n),
                                a = ht(h) == y ? h : a),
                            a))
                            return o = (au[t] = r).added,
                                ht(o) == l && o(i),
                                ut.ext(t)
                    } else
                        console.warn('A extension with the name "' + t + "\" isn't registered.")
                }
                ,
                ut.removeExt = function (n) {
                    var t, i = au[n];
                    return !!i && (delete au[n],
                        t = i.removed,
                        ht(t) == l && t(),
                        !0)
                }
                ,
                v.valid(function (n, r, h) {
                    var c, l;
                    return nl = b.defaultOptions,
                        uu = b.nativeScrollbarStyling,
                        fu = ai({}, b.nativeScrollbarSize),
                        ct = ai({}, b.nativeScrollbarIsOverlaid),
                        ru = ai({}, b.overlayScrollbarDummySize),
                        lt = ai({}, b.rtlScrollBehavior),
                        vc(ai({}, nl, r)),
                        es = b.cssCalc,
                        rf = b.msie,
                        re = b.autoUpdateRecommended,
                        ue = b.supportTransition,
                        bf = b.supportTransform,
                        os = b.supportPassiveEvents,
                        ss = b.supportResizeObserver,
                        ro = b.supportMutationObserver,
                        b.restrictedMeasuring,
                        kr = e(n.ownerDocument),
                        df = kr[0],
                        fo = e(df.defaultView || df.parentWindow),
                        he = fo[0],
                        kf = ie(kr, "html"),
                        uf = ie(kf, "body"),
                        st = e(n),
                        wu = st[0],
                        ft = st.is("textarea"),
                        cr = st.is("body"),
                        hs = df !== t,
                        hi = ft ? st.hasClass(go) && st.parent().hasClass(gh) : st.hasClass(oi) && st.children(di + kh)[u.l],
                        ct.x && ct.y && !bt.nativeScrollbarsOverlaid.initialize ? (gi("onInitializationWithdrawn"),
                            hi && (yc(!0),
                                pc(!0),
                                bc(!0)),
                            fi = dt = !0) : (cr && ((c = {}).l = o.max(st[ti](), kf[ti](), fo[ti]()),
                                c.t = o.max(st[ii](), kf[ii](), fo[ii]()),
                                l = function () {
                                    ot.removeAttr(u.ti);
                                    yi(ot, te, l, !0, !0)
                                }
                            ),
                                yc(),
                                pc(),
                                bc(),
                                fy(),
                                cv(!0),
                                cv(!1),
                                function () {
                                    function s(t) {
                                        if (h(t)) {
                                            var u = c(t)
                                                , i = {};
                                            (uh || yo) && (i[rt] = n.w + (u.x - r.x) * e.x);
                                            (fh || yo) && (i[pt] = n.h + (u.y - r.y) * e.y);
                                            nt.css(i);
                                            f.stpP(t)
                                        } else
                                            o(t)
                                    }
                                    function o(n) {
                                        var r = n !== i;
                                        yi(kr, [be, we, pe], [no, s, o], !0);
                                        ui(uf, vf);
                                        ci.releaseCapture && ci.releaseCapture();
                                        r && (t && uv(),
                                            ut.update(kt));
                                        t = !1
                                    }
                                    function h(n) {
                                        var t = (n.originalEvent || n).touches !== i;
                                        return !fi && !dt && (1 === f.mBtn(n) || t)
                                    }
                                    function c(n) {
                                        return rf && l ? {
                                            x: n.screenX,
                                            y: n.screenY
                                        } : f.page(n)
                                    }
                                    var t, l = he.top !== he, r = {}, n = {}, e = {};
                                    wr(ci, te, function (i) {
                                        h(i) && !vo && (gr && (t = !0,
                                            sc()),
                                            r = c(i),
                                            n.w = wi[u.oW] - (pi ? 0 : fe),
                                            n.h = wi[u.oH] - (pi ? 0 : uo),
                                            e = dc(),
                                            yi(kr, [be, we, pe], [no, s, o]),
                                            wt(uf, vf),
                                            ci.setCapture && ci.setCapture(),
                                            f.prvD(i),
                                            f.stpP(i))
                                    })
                                }(),
                                iy(),
                                us(ar, ry),
                                cr && (ot[ti](c.l)[ii](c.t),
                                    t.activeElement == n && sf.focus && (ot.attr(u.ti, "-1"),
                                        sf.focus(),
                                        yi(ot, te, l, !1, !0))),
                                ut.update(kt),
                                si = !0,
                                gi("onInitialized"),
                                vi(ic, function (n, t) {
                                    gi(t.n, t.a)
                                }),
                                ic = [],
                                ht(h) == s && (h = [h]),
                                f.isA(h) ? vi(h, function (n, t) {
                                    ut.addExt(t)
                                }) : e.isPlainObject(h) && vi(h, function (n, t) {
                                    ut.addExt(n, t)
                                }),
                                setTimeout(function () {
                                    ue && !dt && wt(nt, ha)
                                }, 333)),
                        ut
                }(r, a, w)) && p(r, ut),
                ut
        }
    }
    var st, b, ht, ct, h = "object", l = "function", k = "array", s = "string", y = "boolean", d = "number", it = "null", u = {
        c: "class",
        s: "style",
        i: "id",
        l: "length",
        p: "prototype",
        ti: "tabindex",
        oH: "offsetHeight",
        cH: "clientHeight",
        sH: "scrollHeight",
        oW: "offsetWidth",
        cW: "clientWidth",
        sW: "scrollWidth",
        hOP: "hasOwnProperty",
        bCR: "getBoundingClientRect"
    }, c = (st = {},
        b = {},
    {
        e: ht = ["-webkit-", "-moz-", "-o-", "-ms-"],
        o: ct = ["WebKit", "Moz", "O", "MS"],
        u: function (n) {
            var o = b[n];
            if (b[u.hOP](n))
                return o;
            for (var f, r, s, h = at(n), c = t.createElement("div")[u.s], e = 0; e < ht.length; e++)
                for (s = ht[e].replace(/-/g, ""),
                    f = [n, ht[e] + n, s + h, at(s) + h],
                    r = 0; r < f[u.l]; r++)
                    if (c[f[r]] !== i) {
                        o = f[r];
                        break
                    }
            return b[n] = o
        },
        v: function (n, i, r) {
            var o = n + " " + i
                , s = b[o];
            if (b[u.hOP](o))
                return s;
            for (var h, a = t.createElement("div")[u.s], l = i.split(" "), v = r || "", f = 0, e = -1; f < l[u.l]; f++)
                for (; e < c.e[u.l]; e++)
                    if (h = e < 0 ? l[f] : c.e[e] + l[f],
                        a.cssText = n + ":" + h + v,
                        a[u.l]) {
                        s = h;
                        break
                    }
            return b[o] = s
        },
        d: function (t, i, r) {
            var e = 0
                , f = st[t];
            if (!st[u.hOP](t)) {
                for (f = n[t]; e < ct[u.l]; e++)
                    f = f || n[(i ? ct[e] : ct[e].toLowerCase()) + at(t)];
                st[t] = f
            }
            return f || r
        }
    }), f = {
        wW: g(wt, 0, !0),
        wH: g(wt, 0),
        mO: g(c.d, 0, "MutationObserver", !0),
        rO: g(c.d, 0, "ResizeObserver", !0),
        rAF: g(c.d, 0, "requestAnimationFrame", !1, function (t) {
            return n.setTimeout(t, 1e3 / 60)
        }),
        cAF: g(c.d, 0, "cancelAnimationFrame", !1, function (t) {
            return n.clearTimeout(t)
        }),
        now: function () {
            return Date.now && Date.now() || (new Date).getTime()
        },
        stpP: function (n) {
            n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0
        },
        prvD: function (n) {
            n.preventDefault && n.cancelable ? n.preventDefault() : n.returnValue = !1
        },
        page: function (n) {
            var e = ((n = n.originalEvent || n).target || n.srcElement || t).ownerDocument || t, r = e.documentElement, u = e.body, f;
            return n.touches === i ? !n.pageX && n.clientX && null != n.clientX ? {
                x: n.clientX + (r && r.scrollLeft || u && u.scrollLeft || 0) - (r && r.clientLeft || u && u.clientLeft || 0),
                y: n.clientY + (r && r.scrollTop || u && u.scrollTop || 0) - (r && r.clientTop || u && u.clientTop || 0)
            } : {
                x: n.pageX,
                y: n.pageY
            } : (f = n.touches[0],
            {
                x: f.pageX,
                y: f.pageY
            })
        },
        mBtn: function (n) {
            var t = n.button;
            return n.which || t === i ? n.which : 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0
        },
        inA: function (n, t) {
            for (var i = 0; i < t[u.l]; i++)
                try {
                    if (t[i] === n)
                        return i
                } catch (r) { }
            return -1
        },
        isA: function (n) {
            var t = Array.isArray;
            return t ? t(n) : this.type(n) == k
        },
        type: function (n) {
            return n === i || null === n ? n + "" : Object[u.p].toString.call(n).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        },
        bind: g
    }, rt, lt, v, nt, vt, ot, bt, ut, ft, a, kt, dt, gt, w, et, o = Math, tt = r, e = (r.easing,
        r), p = (rt = [],
            lt = "__overlayScrollbars__",
            function (n, t) {
                var r = arguments[u.l], i;
                if (r < 1)
                    return rt;
                if (t)
                    n[lt] = t,
                        rt.push(n);
                else if (i = f.inA(n, rt),
                    -1 < i) {
                    if (!(1 < r))
                        return rt[i][lt];
                    delete n[lt];
                    rt.splice(i, 1)
                }
            }
        ), yt = (w = [],
            ot = f.type,
            dt = {
                className: ["os-theme-dark", [it, s]],
                resize: ["none", "n:none b:both h:horizontal v:vertical"],
                sizeAutoCapable: ut = [!0, y],
                clipAlways: ut,
                normalizeRTL: ut,
                paddingAbsolute: ft = [!(bt = [y, d, s, k, h, l, it]), y],
                autoUpdate: [null, [it, y]],
                autoUpdateInterval: [33, d],
                updateOnLoad: [["img"], [s, k, it]],
                nativeScrollbarsOverlaid: {
                    showNativeScrollbars: ft,
                    initialize: ut
                },
                overflowBehavior: {
                    x: ["scroll", kt = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],
                    y: ["scroll", kt]
                },
                scrollbars: {
                    visibility: ["auto", "v:visible h:hidden a:auto"],
                    autoHide: ["never", "n:never s:scroll l:leave m:move"],
                    autoHideDelay: [800, d],
                    dragScrolling: ut,
                    clickScrolling: ft,
                    touchSupport: ut,
                    snapHandle: ft
                },
                textarea: {
                    dynWidth: ft,
                    dynHeight: ft,
                    inheritedAttrs: [["style", "class"], [s, k, it]]
                },
                callbacks: {
                    onInitialized: a = [null, [it, l]],
                    onInitializationWithdrawn: a,
                    onDestroyed: a,
                    onScrollStart: a,
                    onScroll: a,
                    onScrollStop: a,
                    onOverflowChanged: a,
                    onOverflowAmountChanged: a,
                    onDirectionChanged: a,
                    onContentSizeChanged: a,
                    onHostSizeChanged: a,
                    onUpdated: a
                }
            },
            et = {
                m: (gt = function (n) {
                    var t = function (i) {
                        var r, f, e;
                        for (r in i)
                            i[u.hOP](r) && (f = i[r],
                                (e = ot(f)) == k ? i[r] = f[n ? 1 : 0] : e == h && (i[r] = t(f)));
                        return i
                    };
                    return t(e.extend(!0, {}, dt))
                }
                )(),
                g: gt(!0),
                _: function (t, r, o, c) {
                    var a = {}
                        , v = {}
                        , l = e.extend(!0, {}, t)
                        , y = e.inArray
                        , p = e.isEmptyObject
                        , w = function (n, t, r, c, l, a) {
                            for (var v in t)
                                if (t[u.hOP](v) && n[u.hOP](v)) {
                                    var nt, tt, st, lt, k, it, rt, ut, ft = !1, at = !1, g = t[v], vt = ot(g), yt = vt == h, pt = f.isA(g) ? g : [g], d = r[v], b = n[v], ht = ot(b), wt = a ? a + "." : "", kt = 'The option "' + wt + v + "\" wasn't set, because", ct = [], et = [];
                                    if (d = d === i ? {} : d,
                                        yt && ht == h)
                                        c[v] = {},
                                            l[v] = {},
                                            w(b, g, d, c[v], l[v], wt + v),
                                            e.each([n, c, l], function (n, t) {
                                                p(t[v]) && delete t[v]
                                            });
                                    else if (!yt) {
                                        for (it = 0; it < pt[u.l]; it++)
                                            if (k = pt[it],
                                                st = (vt = ot(k)) == s && -1 === y(k, bt))
                                                for (ct.push(s),
                                                    nt = k.split(" "),
                                                    et = et.concat(nt),
                                                    rt = 0; rt < nt[u.l]; rt++) {
                                                    for (lt = (tt = nt[rt].split(":"))[0],
                                                        ut = 0; ut < tt[u.l]; ut++)
                                                        if (b === tt[ut]) {
                                                            ft = !0;
                                                            break
                                                        }
                                                    if (ft)
                                                        break
                                                }
                                            else if (ct.push(k),
                                                ht === k) {
                                                ft = !0;
                                                break
                                            }
                                        ft ? ((at = b !== d) && (c[v] = b),
                                            (st ? y(d, tt) < 0 : at) && (l[v] = st ? lt : b)) : o && console.warn(kt + " it doesn't accept the type [ " + ht.toUpperCase() + ' ] with the value of "' + b + '".\r\nAccepted types are: [ ' + ct.join(", ").toUpperCase() + " ]." + (0 < et[length] ? "\r\nValid strings are: [ " + et.join(", ").split(":").join(", ") + " ]." : ""));
                                        delete n[v]
                                    }
                                }
                        };
                    return w(l, r, c || {}, a, v),
                        !p(l) && o && console.warn("The following options are discarded due to invalidity:\r\n" + n.JSON.stringify(l, null, 2)),
                    {
                        S: a,
                        z: v
                    }
                }
            },
            (v = n.OverlayScrollbars = function (n, t, r) {
                if (0 === arguments[u.l])
                    return this;
                var o, h, s = [], c = e.isPlainObject(t);
                return n ? (n = n[u.l] != i ? n : [n[0] || n],
                    pt(),
                    0 < n[u.l] && (c ? e.each(n, function (n, u) {
                        (o = u) !== i && s.push(ii(o, t, r, nt, vt))
                    }) : e.each(n, function (n, r) {
                        o = p(r);
                        ("!" === t && v.valid(o) || f.type(t) == l && t(r, o) || t === i) && s.push(o)
                    }),
                        h = 1 === s[u.l] ? s[0] : s),
                    h) : c || !t ? h : s
            }
            ).globals = function () {
                pt();
                var n = e.extend(!0, {}, nt);
                return delete n.msie,
                    n
            }
            ,
            v.defaultOptions = function (n) {
                pt();
                var t = nt.defaultOptions;
                if (n === i)
                    return e.extend(!0, {}, t);
                nt.defaultOptions = e.extend(!0, {}, t, et._(n, et.g, !0, t).S)
            }
            ,
            v.valid = function (n) {
                return n instanceof v && !n.getState().destroyed
            }
            ,
            v.extension = function (n, t, i) {
                var o = f.type(n) == s
                    , h = arguments[u.l]
                    , r = 0;
                if (h < 1 || !o)
                    return e.extend(!0, {
                        length: w[u.l]
                    }, w);
                if (o)
                    if (f.type(t) == l)
                        w.push({
                            name: n,
                            extensionFactory: t,
                            defaultOptions: i
                        });
                    else
                        for (; r < w[u.l]; r++)
                            if (w[r].name === n) {
                                if (!(1 < h))
                                    return e.extend(!0, {}, w[r]);
                                w.splice(r, 1)
                            }
            }
            ,
            v);
    return tt && tt.fn && (tt.fn.overlayScrollbars = function (n, t) {
        return tt.isPlainObject(n) ? (tt.each(this, function () {
            yt(this, n, t)
        }),
            this) : yt(this, n)
    }
    ),
        yt
});
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
            n(i),
            i
    }
        : n(jQuery)
}(function (n) {
    "use strict";
    var t = 0;
    n.fn.TouchSpin = function (i) {
        var r = {
            min: 0,
            max: 100,
            initval: "",
            replacementval: "",
            firstclickvalueifempty: null,
            step: 1,
            decimals: 0,
            stepinterval: 100,
            forcestepdivisibility: "round",
            stepintervaldelay: 500,
            verticalbuttons: !1,
            verticalup: "+",
            verticaldown: "-",
            verticalupclass: "",
            verticaldownclass: "",
            prefix: "",
            postfix: "",
            prefix_extraclass: "",
            postfix_extraclass: "",
            booster: !0,
            boostat: 10,
            maxboostedstep: !1,
            mousewheel: !0,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary",
            buttondown_txt: "-",
            buttonup_txt: "+",
            callback_before_calculation: function (n) {
                return n
            },
            callback_after_calculation: function (n) {
                return n
            }
        }
            , u = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                firstclickvalueifempty: "first-click-value-if-empty",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
        return this.each(function () {
            function rt() {
                "" === f.prefix && (k = o.prefix.detach());
                "" === f.postfix && (d = o.postfix.detach())
            }
            function p() {
                var i, t, n;
                "" !== (i = f.callback_before_calculation(e.val())) ? 0 < f.decimals && "." === i || (t = parseFloat(i),
                    isNaN(t) && (t = "" !== f.replacementval ? f.replacementval : 0),
                    (n = t).toString() !== i && (n = t),
                    null !== f.min && t < f.min && (n = f.min),
                    null !== f.max && t > f.max && (n = f.max),
                    n = function (n) {
                        switch (f.forcestepdivisibility) {
                            case "round":
                                return (Math.round(n / f.step) * f.step).toFixed(f.decimals);
                            case "floor":
                                return (Math.floor(n / f.step) * f.step).toFixed(f.decimals);
                            case "ceil":
                                return (Math.ceil(n / f.step) * f.step).toFixed(f.decimals);
                            default:
                                return n.toFixed(f.decimals)
                        }
                    }(n),
                    Number(i).toString() !== n.toString() && (e.val(n),
                        e.trigger("change"))) : "" !== f.replacementval && (e.val(f.replacementval),
                            e.trigger("change"))
            }
            function ut() {
                if (f.booster) {
                    var n = Math.pow(2, Math.floor(y / f.boostat)) * f.step;
                    return f.maxboostedstep && n > f.maxboostedstep && (n = f.maxboostedstep,
                        s = Math.round(s / n) * n),
                        Math.max(f.step, n)
                }
                return f.step
            }
            function ft() {
                return "number" == typeof f.firstclickvalueifempty ? f.firstclickvalueifempty : (f.min + f.max) / 2
            }
            function a() {
                p();
                var n, t = s = parseFloat(f.callback_before_calculation(o.input.val()));
                isNaN(s) ? s = ft() : (n = ut(),
                    s += n);
                null !== f.max && s > f.max && (s = f.max,
                    e.trigger("touchspin.on.max"),
                    h());
                o.input.val(f.callback_after_calculation(Number(s).toFixed(f.decimals)));
                t !== s && e.trigger("change")
            }
            function v() {
                p();
                var n, t = s = parseFloat(f.callback_before_calculation(o.input.val()));
                isNaN(s) ? s = ft() : (n = ut(),
                    s -= n);
                null !== f.min && s < f.min && (s = f.min,
                    e.trigger("touchspin.on.min"),
                    h());
                o.input.val(f.callback_after_calculation(Number(s).toFixed(f.decimals)));
                t !== s && e.trigger("change")
            }
            function w() {
                h();
                y = 0;
                c = "down";
                e.trigger("touchspin.on.startspin");
                e.trigger("touchspin.on.startdownspin");
                tt = setTimeout(function () {
                    g = setInterval(function () {
                        y++;
                        v()
                    }, f.stepinterval)
                }, f.stepintervaldelay)
            }
            function b() {
                h();
                y = 0;
                c = "up";
                e.trigger("touchspin.on.startspin");
                e.trigger("touchspin.on.startupspin");
                it = setTimeout(function () {
                    nt = setInterval(function () {
                        y++;
                        a()
                    }, f.stepinterval)
                }, f.stepintervaldelay)
            }
            function h() {
                switch (clearTimeout(tt),
                clearTimeout(it),
                clearInterval(g),
                clearInterval(nt),
                c) {
                    case "up":
                        e.trigger("touchspin.on.stopupspin");
                        e.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        e.trigger("touchspin.on.stopdownspin");
                        e.trigger("touchspin.on.stopspin")
                }
                y = 0;
                c = !1
            }
            var f, k, d, l, o, s, g, nt, tt, it, e = n(this), et = e.data(), y = 0, c = !1;
            !function () {
                if (!e.data("alreadyinitialized")) {
                    if (e.data("alreadyinitialized", !0),
                        t += 1,
                        e.data("spinnerid", t),
                        !e.is("input"))
                        return console.log("Must be an input.");
                    f = n.extend({}, r, et, function () {
                        var t = {};
                        return n.each(u, function (n, i) {
                            var r = "bts-" + i;
                            e.is("[data-" + r + "]") && (t[n] = e.data(r))
                        }),
                            t
                    }(), i);
                    "" !== f.initval && "" === e.val() && e.val(f.initval);
                    p(),
                        function () {
                            var t = e.val()
                                , i = e.parent();
                            "" !== t && (t = f.callback_after_calculation(Number(t).toFixed(f.decimals)));
                            e.data("initvalue", t).val(t);
                            e.addClass("form-control");
                            i.hasClass("input-group") ? function (t) {
                                t.addClass("bootstrap-touchspin");
                                var i, r, u = e.prev(), o = e.next(), s = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + f.prefix + "<\/span><\/span>", h = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + f.postfix + "<\/span><\/span>";
                                u.hasClass("input-group-btn") || u.hasClass("input-group-prepend") ? (i = '<button class="' + f.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + f.buttondown_txt + "<\/button>",
                                    u.append(i)) : (i = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + f.buttondown_class + ' bootstrap-touchspin-down" type="button">' + f.buttondown_txt + "<\/button><\/span>",
                                        n(i).insertBefore(e));
                                o.hasClass("input-group-btn") || o.hasClass("input-group-append") ? (r = '<button class="' + f.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + f.buttonup_txt + "<\/button>",
                                    o.prepend(r)) : (r = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + f.buttonup_class + ' bootstrap-touchspin-up" type="button">' + f.buttonup_txt + "<\/button><\/span>",
                                        n(r).insertAfter(e));
                                n(s).insertBefore(e);
                                n(h).insertAfter(e);
                                l = t
                            }(i) : function () {
                                var i, t = "";
                                e.hasClass("input-sm") && (t = "input-group-sm");
                                e.hasClass("input-lg") && (t = "input-group-lg");
                                i = f.verticalbuttons ? '<div class="input-group ' + t + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + f.prefix + '<\/span><\/span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + f.postfix + '<\/span><\/span><span class="input-group-btn-vertical"><button class="' + f.buttondown_class + " bootstrap-touchspin-up " + f.verticalupclass + '" type="button">' + f.verticalup + '<\/button><button class="' + f.buttonup_class + " bootstrap-touchspin-down " + f.verticaldownclass + '" type="button">' + f.verticaldown + "<\/button><\/span><\/div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + f.buttondown_class + ' bootstrap-touchspin-down" type="button">' + f.buttondown_txt + '<\/button><\/span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + f.prefix + '<\/span><\/span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + f.postfix + '<\/span><\/span><span class="input-group-btn input-group-append"><button class="' + f.buttonup_class + ' bootstrap-touchspin-up" type="button">' + f.buttonup_txt + "<\/button><\/span><\/div>";
                                l = n(i).insertBefore(e);
                                n(".bootstrap-touchspin-prefix", l).after(e);
                                e.hasClass("input-sm") ? l.addClass("input-group-sm") : e.hasClass("input-lg") && l.addClass("input-group-lg")
                            }()
                        }();
                    o = {
                        down: n(".bootstrap-touchspin-down", l),
                        up: n(".bootstrap-touchspin-up", l),
                        input: n("input", l),
                        prefix: n(".bootstrap-touchspin-prefix", l).addClass(f.prefix_extraclass),
                        postfix: n(".bootstrap-touchspin-postfix", l).addClass(f.postfix_extraclass)
                    };
                    rt();
                    e.on("keydown.touchspin", function (n) {
                        var t = n.keyCode || n.which;
                        38 === t ? ("up" !== c && (a(),
                            b()),
                            n.preventDefault()) : 40 === t && ("down" !== c && (v(),
                                w()),
                                n.preventDefault())
                    });
                    e.on("keyup.touchspin", function (n) {
                        var t = n.keyCode || n.which;
                        38 !== t && 40 !== t || h()
                    });
                    e.on("blur.touchspin", function () {
                        p();
                        e.val(f.callback_after_calculation(e.val()))
                    });
                    o.down.on("keydown", function (n) {
                        var t = n.keyCode || n.which;
                        32 !== t && 13 !== t || ("down" !== c && (v(),
                            w()),
                            n.preventDefault())
                    });
                    o.down.on("keyup.touchspin", function (n) {
                        var t = n.keyCode || n.which;
                        32 !== t && 13 !== t || h()
                    });
                    o.up.on("keydown.touchspin", function (n) {
                        var t = n.keyCode || n.which;
                        32 !== t && 13 !== t || ("up" !== c && (a(),
                            b()),
                            n.preventDefault())
                    });
                    o.up.on("keyup.touchspin", function (n) {
                        var t = n.keyCode || n.which;
                        32 !== t && 13 !== t || h()
                    });
                    o.down.on("mousedown.touchspin", function (n) {
                        o.down.off("touchstart.touchspin");
                        e.is(":disabled") || (v(),
                            w(),
                            n.preventDefault(),
                            n.stopPropagation())
                    });
                    o.down.on("touchstart.touchspin", function (n) {
                        o.down.off("mousedown.touchspin");
                        e.is(":disabled") || (v(),
                            w(),
                            n.preventDefault(),
                            n.stopPropagation())
                    });
                    o.up.on("mousedown.touchspin", function (n) {
                        o.up.off("touchstart.touchspin");
                        e.is(":disabled") || (a(),
                            b(),
                            n.preventDefault(),
                            n.stopPropagation())
                    });
                    o.up.on("touchstart.touchspin", function (n) {
                        o.up.off("mousedown.touchspin");
                        e.is(":disabled") || (a(),
                            b(),
                            n.preventDefault(),
                            n.stopPropagation())
                    });
                    o.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (n) {
                        c && (n.stopPropagation(),
                            h())
                    });
                    o.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function (n) {
                        c && (n.stopPropagation(),
                            h())
                    });
                    o.down.on("mousemove.touchspin touchmove.touchspin", function (n) {
                        c && (n.stopPropagation(),
                            n.preventDefault())
                    });
                    o.up.on("mousemove.touchspin touchmove.touchspin", function (n) {
                        c && (n.stopPropagation(),
                            n.preventDefault())
                    });
                    e.on("mousewheel.touchspin DOMMouseScroll.touchspin", function (n) {
                        if (f.mousewheel && e.is(":focus")) {
                            var t = n.originalEvent.wheelDelta || -n.originalEvent.deltaY || -n.originalEvent.detail;
                            n.stopPropagation();
                            n.preventDefault();
                            (t < 0 ? v : a)()
                        }
                    });
                    e.on("touchspin.destroy", function () {
                        !function () {
                            var t = e.parent();
                            h();
                            e.off(".touchspin");
                            t.hasClass("bootstrap-touchspin-injected") ? (e.siblings().remove(),
                                e.unwrap()) : (n(".bootstrap-touchspin-injected", t).remove(),
                                    t.removeClass("bootstrap-touchspin"));
                            e.data("alreadyinitialized", !1)
                        }()
                    });
                    e.on("touchspin.uponce", function () {
                        h();
                        a()
                    });
                    e.on("touchspin.downonce", function () {
                        h();
                        v()
                    });
                    e.on("touchspin.startupspin", function () {
                        b()
                    });
                    e.on("touchspin.startdownspin", function () {
                        w()
                    });
                    e.on("touchspin.stopspin", function () {
                        h()
                    });
                    e.on("touchspin.updatesettings", function (t, i) {
                        !function (t) {
                            (function (t) {
                                (f = n.extend({}, f, t),
                                    t.postfix) && (0 === e.parent().find(".bootstrap-touchspin-postfix").length && d.insertAfter(e),
                                        e.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix));
                                t.prefix && (0 === e.parent().find(".bootstrap-touchspin-prefix").length && k.insertBefore(e),
                                    e.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix));
                                rt()
                            }
                            )(t);
                            p();
                            var i = o.input.val();
                            "" !== i && (i = Number(f.callback_before_calculation(o.input.val())),
                                o.input.val(f.callback_after_calculation(Number(i).toFixed(f.decimals))))
                        }(i)
                    })
                }
            }()
        })
    }
});
