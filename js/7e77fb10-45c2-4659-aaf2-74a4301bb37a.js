var a, c;
"undefined" == typeof Optanon && (Optanon = OneTrust = {});
(function() {
    function M() {
        var b = [], e;
        for (e = 0; e < q.length; e += 1)
            Ga(q[e], ":1") && ia(q[e].replace(":1", "")) && b.push(q[e].replace(":1", ""));
        e = "," + b.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = e;
        window.OptanonActiveGroups = e;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: e
        }),
        dataLayer.push({
            OptanonActiveGroups: e
        })) : (window.dataLayer = [{
            event: "OptanonLoaded",
            OnetrustActiveGroups: e
        }],
        window.dataLayer = [{
            event: "OptanonLoaded",
            OptanonActiveGroups: e
        }]);
        setTimeout(function() {
            var e = new CustomEvent("consent.onetrust",{
                detail: b
            });
            window.dispatchEvent(e)
        })
    }
    function Ha() {
        var b = N("https://optanon.blob.core.windows.net/skins/3.6.28/default_flat_bottom_two_button_white/v2/css/optanon.css")
          , e = document.createElement("link");
        e.type = "text/css";
        e.href = b;
        e.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(e);
        b = (b = (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#001F49")) ? {
            r: parseInt(b[1], 16),
            g: parseInt(b[2], 16),
            b: parseInt(b[3], 16)
        } : null) ? 186 < .299 * b.r + .587 * b.g + .114 * b.b ? "#000000" : "#ffffff" : "";
        e = document.createElement("style");
        e.innerHTML = "#optanon ul#optanon-menu li { background-color: #FFFFFF !important }#optanon ul#optanon-menu li.menu-item-selected { background-color: #D7DDE5 !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #001F49 !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #001F49 !important; border-color: #001F49 !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle a { color: " + b + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle a { color: " + b + " !important }#optanon #optanon-popup-bottom { background-color: #D7DDE5 !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #D7DDE5 !important }.optanon-alert-box-wrapper { background-color:#D7DDE5 !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#001F49 !important }";
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function Ia() {
        var b = w("OptanonConsent", "landingPath");
        if (b && b !== location.href) {
            var b = "true" === w("OptanonConsent", "AwaitingReconsent")
              , e = t()
              , g = F("OptanonAlertBoxClosed")
              , e = e.LastReconsentDate;
            g && e && new Date(e) > new Date(g) && !b ? (G(location.href),
            B("OptanonConsent", "AwaitingReconsent", !0)) : (G("NotLandingPage"),
            B("OptanonConsent", "AwaitingReconsent", !1),
            Ja && Optanon.SetAlertBoxClosed(!0))
        } else
            G(location.href)
    }
    function G(b) {
        B("OptanonConsent", "landingPath", b)
    }
    function Ka(b) {
        var e = document.createElement("script"), g;
        null != b && "undefined" != typeof b && (g = !1,
        e.onload = e.onreadystatechange = function() {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0,
            b())
        }
        );
        e.type = "text/javascript";
        e.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function La() {
        t();
        f = jQuery.noConflict(!0);
        f(window).on("load", Optanon.LoadBanner);
        Ma();
        window.jsonFeed = function(b) {
            w("OptanonConsent", "EuOnly") || B("OptanonConsent", "EuOnly", b.displayPopup);
            if (1 == b.displayPopup || "true" == b.displayPopup)
                f(window).one("otloadbanner", function() {
                    H();
                    ja();
                    ka();
                    var b = t()
                      , g = '\x3cdiv class\x3d"optanon-alert-box-wrapper  " role\x3d"alertdialog" aria-labelledby\x3d"alert-box-title" aria-describedby\x3d"alert-box-message" style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e';
                    b.showBannerCloseButton && (b.BannerCloseButtonText || (b.BannerCloseButtonText = "Close"),
                    g = g + '\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3ca class\x3d"optanon-alert-box-close banner-close-button" aria-label\x3d"' + b.BannerCloseButtonText + '" href\x3d"javascript:void(0);" title\x3d"' + b.BannerCloseButtonText + '" role\x3d"button" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"\x3e\x3c/a\x3e\x3c/div\x3e');
                    g += '\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e';
                    b.BannerTitle && (g = g + '\x3ch1 class\x3d"optanon-alert-box-title legacy-banner-title" id\x3d"alert-box-title"\x3e' + b.BannerTitle + "\x3c/h1\x3e");
                    g = g + '\x3cp class\x3d"banner-content" id\x3d"alert-box-message"\x3e' + b.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-alert-box-close" aria-label\x3d"' + b.AlertCloseText + '" href\x3d"javascript:void(0);"\x3e' + b.AlertCloseText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e";
                    0 >= g.indexOf("hide-accept-button") && (g = g + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle accept-cookie-container"\x3e\x3ca class\x3d"optanon-allow-all accept-cookies-button" title\x3d"' + b.AlertAllowCookiesText + '" aria-label\x3d"' + b.AlertAllowCookiesText + '" role\x3d"button" href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Accept Cookies\');"\x3e' + b.AlertAllowCookiesText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e");
                    0 >= g.indexOf("hide-cookie-setting-button") && (g = g + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-toggle-display cookie-settings-button" title\x3d"' + b.AlertMoreInfoText + '" aria-label\x3d"' + b.AlertMoreInfoText + '" href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');"\x3e' + b.AlertMoreInfoText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e");
                    g += '\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
                    f("#optanon").before(g);
                    Na();
                    Oa();
                    0 < f(".optanon-show-settings").length && (la(),
                    ma(),
                    na());
                    0 < f("#optanon-cookie-policy").length && oa();
                    P();
                    w("OptanonConsent", "groups") || C("OptanonConsent");
                    f(".accept-cookie-container a").focus()
                });
            else
                Q = !0,
                f(window).one("otloadbanner", function() {
                    H();
                    var b = !1;
                    0 < f(".optanon-show-settings").length && f(".optanon-show-settings").attr("data-ignore-geolocation") && "true" === f(".optanon-show-settings").attr("data-ignore-geolocation").toLowerCase() && (b = !0);
                    b ? (ja(),
                    ka(),
                    la(),
                    ma(),
                    na(),
                    pa && Optanon.AllowAll(!0)) : (f(".optanon-show-settings").remove(),
                    f(".optanon-close-consent").remove(),
                    f(".optanon-close-ui").remove(),
                    f(".optanon-toggle-display").remove(),
                    f(".optanon-allow-all").remove(),
                    Optanon.AllowAll(!0));
                    0 < f("#optanon-cookie-policy").length && oa();
                    f(".accept-cookie-container a").focus()
                })
        }
        ;
        qa && Optanon.LoadBanner()
    }
    function H() {
        f("script").filter(function() {
            return f(this).attr("type") && "text/plain" == f(this).attr("type").toLowerCase() && f(this).attr("class") && f(this).attr("class").toLowerCase().match(/optanon-category(-[0-9]+)+($|\s)/)
        }).each(function() {
            var b = f(this).attr("class").toLowerCase().split("optanon-category-")[1].split("-")
              , e = !0;
            if (b && 0 < b.length) {
                for (var g = 0; g < b.length; g++)
                    if (!R(b[g], Q)) {
                        e = !1;
                        break
                    }
                e && f(this).replaceWith(f(this).attr("type", "text/javascript")[0].outerHTML)
            }
        })
    }
    function ja() {
        var b, e = t(), g, h, m;
        ra(e);
        f("body").prepend('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
        b = '\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e';
        e.ShowPreferenceCenterCloseButton && (e.CloseText || (e.CloseText = "Close"),
        b = b + '\x3ca href\x3d"javascript:void(0);" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" aria-label\x3d"' + e.CloseText + '" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"' + e.CloseText + '"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(' + N("https://optanon.blob.core.windows.net/skins/3.6.28/default_flat_bottom_two_button_white/v2/images/optanon-pop-up-close.png") + ');width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/a\x3e');
        m = "'" + N("https://optanon.blob.core.windows.net/logos/5943/5943:www.ctshirts.com/ct-logo.png") + "'";
        b = b + '\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(' + m + ') !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu" aria-label\x3d"Navigation Menu"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
        f("#optanon").html(b);
        e.Language && e.Language.Culture && f("#optanon-popup-wrapper").attr("lang", e.Language.Culture);
        for (m = 0; m < e.Groups.length; m += 1)
            if (b = e.Groups[m],
            x(b) == D || b && null == b.Parent && A(b)) {
                g = x(b) == D;
                h = -1 != f.inArray(u(b) + ":1", q);
                g = f('\x3cli class\x3d"menu-item-necessary ' + (g || h ? "menu-item-on" : "menu-item-off") + '" title\x3d"' + x(b) + '"\x3e\x3ch2 class\x3d"preference-menu-item"\x3e\x3ca href\x3d"javascript:void(0);"\x3e' + x(b) + "\x3c/a\x3e\x3c/h2\x3e\x3c/li\x3e");
                x(b) == D && g.removeClass("menu-item-necessary").addClass("menu-item-about");
                switch (b.OptanonGroupId) {
                case 2:
                    g.removeClass("menu-item-necessary").addClass("menu-item-performance");
                    break;
                case 3:
                    g.removeClass("menu-item-necessary").addClass("menu-item-functional");
                    break;
                case 4:
                    g.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                    break;
                case 8:
                    g.removeClass("menu-item-necessary").addClass("menu-item-social")
                }
                g.data("group", b);
                g.data("optanonGroupId", u(b));
                g.click(Pa);
                f("#optanon #optanon-menu").append(g)
            }
        b = f('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + e.AboutText + '"\x3e\x3ch2 class\x3d"preference-menu-item"\x3e\x3ca target\x3d"_blank" aria-label\x3d"' + e.AboutText + '" href\x3d"' + e.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" + e.AboutText + "\x3c/a\x3e\x3c/h2\x3e\x3c/li\x3e");
        f("#optanon #optanon-menu").append(b);
        f("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3ch1 class\x3d"legacy-preference-banner-title" aria-label\x3d"' + e.MainText + '"\x3e' + e.MainText + '\x3c/h1\x3e\x3cdiv class\x3d"vendor-header-container"\x3e\x3ch3\x3e\x3c/h3\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' + Qa(e, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e\x3cp\x3e' + e.AlwaysActiveText + "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-main-info-text"\x3e\x3c/div\x3e' + (e.IsIABEnabled && e.VendorLevelOptOut ? '\x3cdiv id\x3d"optanon-vendor-consent-text"\x3e\x3ca class\x3d"vendor-consent-link" aria-label\x3d"View Vendor Consent"\x3eView Vendor Consent\x3c/a\x3e\x3c/div\x3e' : "") + '\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
        f("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(' + N("https://optanon.blob.core.windows.net/skins/3.6.28/default_flat_bottom_two_button_white/v2/images/cookie-collective-top-bottom.png") + ');width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"javascript:void(0);" title\x3d"' + e.AllowAllText + '" aria-label\x3d"' + e.AllowAllText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Save Settings');\"\x3e" + e.AllowAllText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"javascript:void(0);" title\x3d"' + e.ConfirmText + '" aria-label\x3d"' + e.ConfirmText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Allow All');\"\x3e" + e.ConfirmText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        Y()
    }
    function Qa(b, e) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cfieldset\x3e\x3cp\x3e\x3cinput type\x3d"checkbox" aria-checked\x3d"false" value\x3d"check" id\x3d"' + e + '" checked class\x3d"legacy-group-status optanon-status-checkbox" /\x3e\x3clabel for\x3d"' + e + '"\x3e' + b.ActiveText + "\x3c/label\x3e\x3c/p\x3e\x3c/fieldset\x3e\x3c/form\x3e\x3c/div\x3e"
    }
    function Pa() {
        var b = t()
          , e = f(this).data("group");
        Z(e);
        ra(b);
        var g = x(e);
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f(this).addClass("menu-item-selected");
        f("#optanon h3").text(g);
        f("#optanon .optanon-status-checkbox").attr("aria-label", g);
        f("#optanon #optanon-main-info-text").html(S(e));
        if (e && !b.HideToolbarCookieList) {
            var h = t(), m = f('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'), n = Z(e), p, v;
            (e.Cookies && 0 < e.Cookies.length || n && 0 < n.length) && m.append('\x3ch4 class\x3d"optanon-cookies-used"\x3e' + h.CookiesUsedText + "\x3c/h4\x3e");
            if (e.Cookies && 0 < e.Cookies.length) {
                v = f('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
                for (h = 0; h < e.Cookies.length; h += 1)
                    p = e.Cookies[h],
                    v.append((p ? p.Name : "") + (h < e.Cookies.length - 1 ? ", " : ""));
                m.append(v)
            }
            if (n && 0 < n.length)
                for (h = 0; h < n.length; h += 1)
                    p = f('\x3cp class\x3d"optanon-subgroup-cookies-list"\x3e\x3c/p\x3e'),
                    v = sa(n[h]),
                    S(n[h]),
                    p.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' + v + " \x3c/span\x3e"),
                    v = f('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e'),
                    p.append(v),
                    m.append(p);
            f("#optanon #optanon-main-info-text").append(m)
        }
        "always active" == z(e).toLowerCase() || "always active" == z(e.Parent).toLowerCase() ? (f("#optanon .optanon-status-always-active").show(),
        f("#optanon .optanon-status-editable").hide()) : (f("#optanon .optanon-status-editable").show(),
        f("#optanon .optanon-status-always-active").hide(),
        f("#optanon .optanon-status-editable .optanon-status-checkbox").prop("id", "chk" + e.GroupId),
        f("#optanon .optanon-status-editable label").attr("for", "chk" + e.GroupId),
        m = -1 != f.inArray(u(e) + ":1", q),
        e = f(e && null == e.Parent ? "#chk" + e.GroupId : "#optanon #chk" + u(e)),
        m ? (e.prop("checked", !0),
        e.attr("aria-checked", !0),
        e.parent().addClass("optanon-status-on"),
        e.next("label").text(b.ActiveText)) : (e.prop("checked", !1),
        e.attr("aria-checked", !1),
        e.parent().removeClass("optanon-status-on"),
        b.InactiveText && e.next("label").text(b.InactiveText)));
        g == D ? f("#optanon #optanon-popup-more-info-bar").hide() : f("#optanon #optanon-popup-more-info-bar").show();
        return !1
    }
    function ka() {
        var b = t();
        f(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            ta(!0, !0);
            return !1
        });
        f(document).on("click", ".optanon-close-ui", function() {
            I();
            return !1
        });
        f(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        f(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            ta(!0, !0);
            return !1
        });
        f(document).on("keydown", "#optanon", function(b) {
            27 == b.keyCode && I()
        });
        f("#optanon").on("change", ".optanon-status-checkbox", function() {
            var e = f(this).data("group") || f("#optanon #optanon-menu li.menu-item-selected").data("group");
            f(this).is(":checked") ? Ra(b, e, this) : Sa(b, e, this);
            Y()
        })
    }
    function u(b) {
        return 0 == b.OptanonGroupId ? "0_" + b.GroupId : b.OptanonGroupId
    }
    function Ra(b, e, g) {
        var h = x(e);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", h);
        f("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
        f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
        f(g).attr("aria-checked", !0);
        f(g).parent().addClass("optanon-status-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(g).text() == f("#optanon #optanon-menu li.menu-item-selected ").text() && f(g).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        h = T(q, u(e) + ":0");
        -1 != h && (q[h] = u(e) + ":1");
        f(g).next("label").text(b.ActiveText)
    }
    function Sa(b, e, g) {
        var h = x(e);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle Off", h);
        f("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on");
        f("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off");
        f(g).attr("aria-checked", !1);
        f(g).parent().removeClass("optanon-status-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(g).text() == f("#optanon #optanon-menu li.menu-item-selected ").text() && f(g).find(".icon").removeClass("menu-item-on").addClass("menu-item-off")
        });
        h = T(q, u(e) + ":1");
        -1 != h && (q[h] = u(e) + ":0");
        b.InactiveText && f(g).next("label").text(b.InactiveText)
    }
    function la() {
        f(".optanon-show-settings").attr("href", "javascript:void(0);");
        f(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e');
        f(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e');
        f(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e');
        f(".optanon-show-settings-button").addClass("optanon-toggle-display")
    }
    function ua(b) {
        var e = t(), g, h, m;
        b.parent(".optanon-show-settings-popup-wrapper").append('\x3cdiv id\x3d"optanon-show-settings-popup"\x3e\x3cdiv id\x3d"optanon-show-settings-popup-inner"\x3e\x3cdiv class\x3d"top-arrow"\x3e\x3c/div\x3e\x3cul\x3e\x3c/ul\x3e\x3cdiv class\x3d"menu-bottom-even"\x3e\x3c/div\x3e\x3cdiv class\x3d"bottom-arrow-even"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        for (m = 0; m < e.Groups.length; m += 1) {
            if ((b = e.Groups[m]) && null == b.Parent && A(b))
                switch (g = -1 != f.inArray(u(b) + ":1", q),
                h = !F("OptanonConsent") && "do not track" == z(b).toLowerCase() && U,
                g = f('\x3cli\x3e\x3cspan class\x3d"icon necessary-icon ' + (g ? "menu-item-on" : "menu-item-off") + '"\x3e\x3c/span\x3e' + x(b) + (h ? '\x3cbr\x3e\x3cspan class\x3d"optanon-dnt"\x3eOff by Do Not Track\x3c/span\x3e' : "") + '\x3cdiv class\x3d"menu-item-border"\x3e\x3c/div\x3e\x3c/li\x3e'),
                b.OptanonGroupId) {
                case 2:
                    g.find(".icon").removeClass("necessary-icon").addClass("performance-icon");
                    break;
                case 3:
                    g.find(".icon").removeClass("necessary-icon").addClass("functional-icon");
                    break;
                case 4:
                    g.find(".icon").removeClass("necessary-icon").addClass("advertising-icon");
                    break;
                case 8:
                    g.find(".icon").removeClass("necessary-icon").addClass("social-icon")
                }
            f("#optanon-show-settings-popup ul").append(g)
        }
        f("#optanon-show-settings-popup ul").children(":first").addClass("first");
        f("#optanon-show-settings-popup ul").children(":last").addClass("last");
        f("#optanon-show-settings-popup ul").children(":odd").addClass("even");
        f("#optanon-show-settings-popup ul").children(":even").addClass("odd");
        f("#optanon-show-settings-popup ul").children(":last").hasClass("odd") && (f("#optanon-show-settings-popup .bottom-arrow-even").removeClass("bottom-arrow-even").addClass("bottom-arrow-odd"),
        f("#optanon-show-settings-popup .menu-bottom-even").removeClass("menu-bottom-even").addClass("menu-bottom-odd"));
        f("#optanon-show-settings-popup ul li.last div").remove(".menu-item-border")
    }
    function aa() {
        f("#optanon-show-settings-popup").remove()
    }
    function na() {
        var b, e = t(), g;
        if (!("ontouchstart"in window || navigator.msMaxTouchPoints || w("OptanonConsent", "dnt") || w("OptanonConsent", "groups")))
            for (g = 0; g < e.Groups.length; g += 1)
                if (b = e.Groups[g],
                A(b) && (b = "do not track" == z(b).toLowerCase() && U)) {
                    e = f(".optanon-show-settings-button").first();
                    ua(e);
                    f("#optanon-show-settings-popup").fadeIn(800);
                    va(e);
                    wa(e);
                    V = !0;
                    setTimeout(Ta, 4E3);
                    B("OptanonConsent", "dnt", "true");
                    break
                }
    }
    function Ta() {
        xa || f("#optanon-show-settings-popup").fadeOut(800, function() {
            aa()
        });
        V = !1
    }
    function ma() {
        f(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        });
        "ontouchstart"in window || navigator.msMaxTouchPoints || f(".optanon-show-settings-button").hover(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Hover");
            xa = !0;
            V || (f("#optanon-show-settings-popup").stop(),
            aa(),
            ua(f(this)),
            f("#optanon-show-settings-popup").fadeIn(400),
            va(f(this)),
            wa(f(this)))
        }, function() {
            f("#optanon-show-settings-popup").fadeOut(400, function() {
                V = !1;
                aa()
            })
        })
    }
    function Oa() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var b = t();
            f(".optanon-alert-box-wrapper").show().animate({
                bottom: "0px"
            }, 1E3);
            b.ForceConsent && (Ua(b.AlertNoticeText) || f("#optanon-popup-bg").css({
                "z-index": "7000"
            }).show());
            f(".optanon-alert-box-close").click(function() {
                var b = t();
                f(".optanon-alert-box-wrapper").fadeOut(200);
                f("#optanon-popup-bg").hide();
                1 == b.CloseShouldAcceptAllCookies && Optanon.AllowAll();
                Optanon.SetAlertBoxClosed(!0)
            })
        }
    }
    function oa() {
        var b, e, g, h, m, n, p = t(), v, q;
        for (g = 0; g < p.Groups.length; g += 1)
            if ((b = p.Groups[g]) && null == b.Parent && A(b)) {
                v = f('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                v.append('\x3ch2 class\x3d"optanon-cookie-policy-group-name"\x3e' + x(b) + "\x3c/h2\x3e");
                v.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + S(b) + "\x3c/p\x3e");
                if (0 < b.Cookies.length)
                    for (v.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' + p.CookiesUsedText + "\x3c/p\x3e"),
                    v.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'),
                    h = 0; h < b.Cookies.length; h += 1)
                        e = (e = b.Cookies[h]) ? e.Name : "",
                        v.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" + e + "\x3c/li\x3e");
                b = Z(b);
                if (0 < b.length) {
                    p.CookiesText || (p.CookiesText = "Cookies");
                    p.CategoriesText || (p.CategoriesText = "Categories");
                    p.LifespanText || (p.LifespanText = "Lifespan");
                    p.LifespanTypeText || (p.LifespanTypeText = "Session");
                    p.LifespanDurationText || (p.LifespanDurationText = "days");
                    h = f('\x3ctable class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/table\x3e');
                    h.append("\x3ctr\x3e\x3c/tr\x3e");
                    e = "";
                    p.IsLifespanEnabled && (e = "\x26nbsp;(" + p.LifespanText + ")");
                    h.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + p.CategoriesText + "\x3c/p\x3e\x3c/th\x3e");
                    h.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + p.CookiesText + e + "\x3c/p\x3e\x3c/th\x3e");
                    for (e = 0; e < b.length; e += 1) {
                        q = f('\x3ctr class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/tr\x3e');
                        q.append('\x3ctd class\x3d"optanon-cookie-policy-left"\x3e\x3c/td\x3e');
                        m = sa(b[e]);
                        q.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' + m + "\x3c/p\x3e");
                        q.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + S(b[e]) + "\x3c/p\x3e");
                        q.append('\x3ctd class\x3d"optanon-cookie-policy-right"\x3e\x3c/td\x3e');
                        q.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (p.IsLifespanEnabled)
                            for (m = 0; m < b[e].Cookies.length; m += 1) {
                                n = b[e].Cookies[m];
                                var u = ""
                                  , u = n.IsSession ? p.LifespanTypeText : 0 === n.Length ? "\x3c 1 " + p.LifespanDurationText : n.Length + " " + p.LifespanDurationText;
                                q.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" + n.Name + "\x26nbsp;(" + u + ")\x3c/li\x3e")
                            }
                        else
                            for (m = 0; m < b[e].Cookies.length; m += 1)
                                n = b[e].Cookies[m],
                                q.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" + n.Name + "\x3c/li\x3e");
                        h.append(q)
                    }
                    v.append(h)
                }
                f("#optanon-cookie-policy").append(v);
                ya()
            }
        f(window).resize(function() {
            ya()
        })
    }
    function S(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupDescription && b.GroupLanguagePropertiesSets[0].GroupDescription.Text ? b.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, "\x3cbr\x3e") : ""
    }
    function x(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupName ? b.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }
    function z(b) {
        var e = t();
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].DefaultStatus ? U && e.IsDntEnabled && b.GroupLanguagePropertiesSets[0].IsDntEnabled ? "do not track" : b.GroupLanguagePropertiesSets[0].DefaultStatus.Text : ""
    }
    function sa(b) {
        return b ? x(b) : ""
    }
    function ya() {
        f("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            f(this).find(".optanon-cookie-policy-left").height("auto");
            f(this).find(".optanon-cookie-policy-right").height("auto");
            f(this).find(".optanon-cookie-policy-left").height() >= f(this).find(".optanon-cookie-policy-right").height() ? f(this).find(".optanon-cookie-policy-right").height(f(this).find(".optanon-cookie-policy-left").height()) : f(this).find(".optanon-cookie-policy-left").height(f(this).find(".optanon-cookie-policy-right").height())
        })
    }
    function Va() {
        f("#optanon #optanon-menu li").removeClass("menu-item-selected");
        f("#optanon #optanon-menu li").each(function() {
            f(this).text() == D && f(this).click()
        });
        Y();
        var b = f("#optanon-popup-wrapper")
          , e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          , g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        b.css("margin-top", "10px");
        720 > e ? b.css("top", "10px") : b.outerHeight() > g ? b.css("top", Math.max(0, (g - b.outerHeight()) / 2 + f(window).scrollTop()) + "px") : b.css("top", Math.max(0, (g - b.outerHeight()) / 2) + "px");
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").hide().fadeIn(400);
        b.focus()
    }
    function I(b) {
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400, b)
    }
    function za(b) {
        if (z(b)) {
            var e = z(b).toLowerCase();
            b.Parent && (e = z(b.Parent).toLowerCase());
            return "always active" == e || "active" == e || "inactive landingpage" == e || "do not track" == e && !U
        }
        return !0
    }
    function Aa() {
        var b, e = t(), g;
        if (w("OptanonConsent", "groups")) {
            w("OptanonConsent", "groups") && !ba && (ba = !0);
            b = !1;
            var e = J(w("OptanonConsent", "groups"))
              , f = J(w("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""));
            g = t();
            var m, n, p;
            if (w("OptanonConsent", "groups")) {
                for (n = 0; n < g.Groups.length; n += 1)
                    m = g.Groups[n],
                    A(m) && (p = T(f, u(m)),
                    -1 == p && (b = !0,
                    za(m) ? e.push(u(m) + ":1") : e.push(u(m) + ":0")));
                for (n = e.length - 1; 0 <= n; --n) {
                    p = !1;
                    for (f = 0; f < g.Groups.length; f += 1)
                        if (m = g.Groups[f],
                        A(m) && u(m) == e[n].replace(/:0/g, "").replace(/:1/g, "")) {
                            p = !0;
                            break
                        }
                    p || (b = !0,
                    e.splice(n, 1))
                }
                b && C("OptanonConsent", e)
            }
            q = J(w("OptanonConsent", "groups"))
        } else {
            pa = !0;
            q = [];
            for (g = 0; g < e.Groups.length; g += 1)
                b = e.Groups[g],
                A(b) && (za(b) ? q.push(u(b) + ":1") : q.push(u(b) + ":0"));
            ba = !0
        }
    }
    function C(b, e) {
        e ? B(b, "groups", e.toString().toLowerCase()) : B(b, "groups", q.toString().toLowerCase())
    }
    function B(b, e, g) {
        var f = {}, m = F(b), n, p;
        t();
        if (m)
            for (n = m.split("\x26"),
            m = 0; m < n.length; m += 1)
                p = n[m].split("\x3d"),
                f[decodeURIComponent(p[0])] = decodeURIComponent(p[1]).replace(/\+/g, " ");
        f[e] = g;
        f.datestamp = (new Date).toString();
        f.version = "3.6.28";
        e = "";
        for (var v in f)
            f.hasOwnProperty(v) && ("" != e && (e += "\x26"),
            e += v + "\x3d" + encodeURIComponent(f[v]).replace(/%20/g, "+"));
        da(b, e, 365)
    }
    function w(b, e) {
        var f = F(b), h, m, n;
        if (f) {
            h = {};
            m = f.split("\x26");
            for (f = 0; f < m.length; f += 1)
                n = m[f].split("\x3d"),
                h[decodeURIComponent(n[0])] = decodeURIComponent(n[1]).replace(/\+/g, " ");
            return e && h[e] ? h[e] : e && !h[e] ? "" : h
        }
        return ""
    }
    function da(b, e, f) {
        var g;
        f ? (g = new Date,
        g.setTime(g.getTime() + 864E5 * f),
        f = "; expires\x3d" + g.toGMTString()) : f = "";
        g = ["www.ctshirts.com"];
        1 >= g.length && (g[1] = "");
        document.cookie = b + "\x3d" + e + f + "; path\x3d/" + g[1] + "; domain\x3d." + g[0]
    }
    function F(b) {
        b += "\x3d";
        var e = document.cookie.split(";"), f, h;
        for (f = 0; f < e.length; f += 1) {
            for (h = e[f]; " " == h.charAt(0); )
                h = h.substring(1, h.length);
            if (0 == h.indexOf(b))
                return h.substring(b.length, h.length)
        }
        return null
    }
    function R(b, e) {
        var f = null != b && "undefined" != typeof b, h, m;
        if (!e) {
            Aa();
            h = E(q, b + ":1");
            a: {
                m = t();
                var n;
                for (n = 0; n < m.Groups.length; n += 1)
                    if (m.Groups[n].OptanonGroupId == b) {
                        m = !0;
                        break a
                    }
                m = !1
            }
            m = !m;
            return f && (h && ia(b) || m) ? !0 : !1
        }
        return !0
    }
    function ia(b) {
        var e = t(), f, h;
        for (h = 0; h < e.Groups.length; h += 1)
            if (e.Groups[h].OptanonGroupId == b) {
                f = e.Groups[h];
                break
            }
        return "inactive landingpage" != z(f).toLowerCase() ? !0 : (b = w("OptanonConsent", "landingPath")) && b !== location.href ? !0 : !1
    }
    function J(b) {
        return b ? b.toLowerCase().split(",") : []
    }
    function P() {
        var b;
        b = t();
        b.CustomJs && (new Function(b.CustomJs))();
        if ("function" == typeof OptanonWrapper && "undefined" != OptanonWrapper) {
            OptanonWrapper();
            for (b = 0; b < K.length; b += 1)
                E(ea, K[b]) || ea.push(K[b]);
            K = [];
            for (b = 0; b < L.length; b += 1)
                E(fa, L[b]) || fa.push(L[b]);
            L = []
        }
    }
    function ra(b) {
        b.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: D
                },
                GroupDescription: {
                    Text: b.MainInfoText
                }
            }]
        })
    }
    function Ba(b) {
        if (b = document.getElementById(b))
            for (; b.hasChildNodes(); )
                b.removeChild(b.lastChild)
    }
    function W(b) {
        if (b = document.getElementById(b))
            b.style.display = "block"
    }
    function Ca(b) {
        (b = document.getElementById(b)) && b.parentNode.removeChild(b)
    }
    function E(b, e) {
        var f;
        for (f = 0; f < b.length; f += 1)
            if (b[f].toString().toLowerCase() == e.toString().toLowerCase())
                return !0;
        return !1
    }
    function T(b, e) {
        var f;
        for (f = 0; f < b.length; f += 1)
            if (b[f] == e)
                return f;
        return -1
    }
    function Ga(b, e) {
        return -1 != b.indexOf(e, b.length - e.length)
    }
    function Y() {
        var b = 0, e, g = t(), h;
        for (h = 0; h < g.Groups.length; h += 1)
            if (e = g.Groups[h],
            A(e) && E(q, u(e) + ":0") && (b += 1,
            1 <= b))
                return f("#optanon .optanon-allow-all-button").show(),
                !0;
        f("#optanon .optanon-allow-all-button").hide();
        return !1
    }
    function ta(b, e) {
        f(".optanon-alert-box-wrapper").fadeOut(400);
        b && (Da || !Da && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(e)
    }
    function va(b) {
        f("#optanon-show-settings-popup").removeClass("optanon-show-settings-popup-top-button");
        f("#optanon-show-settings-popup ul").removeClass("top-button");
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").hide();
        f("#optanon-show-settings-popup").css("top", "-" + f("#optanon-show-settings-popup-inner").height() + "px");
        var e = f("#optanon-show-settings-popup")
          , g = f(window).scrollTop()
          , e = e.offset().top;
        g >= e - 50 ? (f("#optanon-show-settings-popup").addClass("optanon-show-settings-popup-top-button"),
        f("#optanon-show-settings-popup ul").addClass("top-button"),
        f("#optanon-show-settings-popup").css("top", b.find(".optanon-show-settings-left").height() + f("#optanon-show-settings-popup .top-arrow").height() - 3 + "px"),
        f("#optanon-show-settings-popup .top-arrow").css("top", "-" + (f("#optanon-show-settings-popup .top-arrow").height() - 2) + "px"),
        f("#optanon-show-settings-popup .top-arrow").show()) : f("#optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").show()
    }
    function wa(b) {
        var e = f("#optanon-show-settings-popup-inner");
        b = b.find(".optanon-show-settings-left").width() + b.find(".optanon-show-settings-middle").width() + b.find(".optanon-show-settings-right").width();
        var g = f("#optanon-show-settings-popup ul").width() - 3, h = f("#optanon-show-settings-popup .top-arrow").width(), m, n, p, t;
        e.css("margin-left", "-" + ((g - b) / 2 + b) + "px");
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (g - h) / 2 + "px");
        e.css("left", "0px");
        m = f(window).scrollLeft();
        n = e.offset().left;
        p = m + f(window).width();
        t = n + e.width();
        b < g ? m >= n ? (e.css("margin-left", "-" + b + "px"),
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (b - h) / 2 + "px")) : p <= t && (e.css("margin-left", "-" + g + "px"),
        f("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", g - (b + h) / 2 + "px")) : p <= t ? e.css("margin-left", "-" + b + "px") : m >= n && e.css("margin-left", "-" + g + "px")
    }
    function A(b) {
        var e, f = t(), h = !1, m, n, p = null != b.Cookies && 0 < b.Cookies.length;
        if (b && null == b.Parent) {
            m = b.Purposes && 0 < b.Purposes.length && f.IsIABEnabled;
            for (n = 0; n < f.Groups.length; n += 1) {
                e = f.Groups[n];
                var q = null != e.Cookies && 0 < e.Cookies.length;
                if (null != e.Parent && x(b) && x(e.Parent) == x(b) && e.ShowInPopup && q) {
                    h = !0;
                    break
                }
            }
            return b.ShowInPopup && (p || h || m)
        }
        return b.ShowInPopup && p
    }
    function Z(b) {
        var e, f = t(), h = [], m;
        for (m = 0; m < f.Groups.length; m += 1) {
            e = f.Groups[m];
            var n = null != e.Cookies && 0 < e.Cookies.length;
            null != e.Parent && x(e.Parent) == x(b) && e.ShowInPopup && n && h.push(e)
        }
        return h
    }
    function t() {
        ha || (ha = {
            cctId: "7e77fb10-45c2-4659-aaf2-74a4301bb37a",
            euOnly: !0,
            MainText: "Privacy Preference Centre",
            MainInfoText: "When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\r\n\r\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
            AboutText: "More Information",
            AboutCookiesText: "Your Privacy",
            ConfirmText: "Allow All",
            AllowAllText: "Save Settings",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://cookiepedia.co.uk/giving-consent-to-cookies",
            HideToolbarCookieList: !0,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: "We use cookies to make your experience on our site easier and more enjoyable. Thanks to cookies, what you see here and on other sites is tailored to fit your preferences. They also help us understand your shopping habits, improving the quality of our services.   \x3ca href\x3d'https://www.ctshirts.com/uk/privacy-policy/'\x3eRead our privacy policy here\x3c/a\x3e",
            AlertCloseText: "Close",
            AlertMoreInfoText: "Cookie Settings",
            AlertAllowCookiesText: "Accept Cookies",
            CloseShouldAcceptAllCookies: !1,
            LastReconsentDate: 1527254923277,
            BannerTitle: "Cookie Policy",
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            IsIABEnabled: !1,
            VendorLevelOptOut: !0,
            Groups: [{
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 1,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Always Active"
                    },
                    GroupDescription: {
                        Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                    },
                    GroupName: {
                        Text: "Strictly Necessary Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 81630
            }, {
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 101,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "facebook.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "datr",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "fr",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 89
                }, {
                    Name: "lu",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 541
                }],
                Purposes: [],
                GroupId: 81631
            }, {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 2,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\r\n\r\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                    },
                    GroupName: {
                        Text: "Performance Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "_gid",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "__utmc",
                    Host: ".ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "__utmb",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "optimizelyEndUserId",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 179
                }, {
                    Name: "_ga",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "__utmz",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 182
                }, {
                    Name: "s_vi",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "__utma",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "utag_main",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 364
                }, {
                    Name: "s_fid",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 1825
                }, {
                    Name: "__utmv",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "s_cc",
                    Host: ".ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "__utmt",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "_hjIncludedInSample",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 81626
            }, {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 102,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "adsrvr.org"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "TDID",
                    Host: ".adsrvr.org",
                    IsSession: !1,
                    Length: 364
                }, {
                    Name: "TDCPM",
                    Host: ".adsrvr.org",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81632
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 3,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\r\n\r\nIf you do not allow these cookies then some or all of these services may not function properly."
                    },
                    GroupName: {
                        Text: "Functional Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "weird_get_top_level_domain",
                    Host: ".ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "__unam",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 275
                }, {
                    Name: "__atuvs",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "__atuvc",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 730
                }, {
                    Name: "peerius_rid",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "peerius_ct",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 81627
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 103,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "pinterest.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__utmz",
                    Host: ".pinterest.com",
                    IsSession: !1,
                    Length: 23
                }, {
                    Name: "__utma",
                    Host: ".pinterest.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "_pinterest_sess",
                    Host: ".pinterest.com",
                    IsSession: !1,
                    Length: 14158
                }, {
                    Name: "__utmv",
                    Host: ".pinterest.com",
                    IsSession: !1,
                    Length: 541
                }],
                Purposes: [],
                GroupId: 81633
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 104,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "crwdcntrl.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "_cc_cc",
                    Host: ".crwdcntrl.net",
                    IsSession: !1,
                    Length: 269
                }, {
                    Name: "_cc_id",
                    Host: ".crwdcntrl.net",
                    IsSession: !1,
                    Length: 269
                }, {
                    Name: "_cc_aud",
                    Host: ".crwdcntrl.net",
                    IsSession: !1,
                    Length: 269
                }, {
                    Name: "_cc_dc",
                    Host: ".crwdcntrl.net",
                    IsSession: !1,
                    Length: 269
                }],
                Purposes: [],
                GroupId: 81634
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 4,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                    },
                    GroupName: {
                        Text: "Targeting Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 81628
            }, {
                ShowInPopup: !0,
                Order: 4,
                OptanonGroupId: 105,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "twitter.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "auth_token",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5526
                }, {
                    Name: "twll",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1874
                }, {
                    Name: "__utmz",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 46
                }, {
                    Name: "secure_session",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5526
                }, {
                    Name: "guest_id",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "__utma",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "remember_checked",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1874
                }, {
                    Name: "remember_checked_on",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1874
                }],
                Purposes: [],
                GroupId: 81635
            }, {
                ShowInPopup: !0,
                Order: 5,
                OptanonGroupId: 106,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "google.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "APISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "SSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "NID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "PREF",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 571
                }, {
                    Name: "SID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "SAPISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 541
                }, {
                    Name: "HSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 541
                }],
                Purposes: [],
                GroupId: 81636
            }, {
                ShowInPopup: !0,
                Order: 6,
                OptanonGroupId: 107,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "atdmt.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "AA003",
                    Host: ".atdmt.com",
                    IsSession: !1,
                    Length: 89
                }, {
                    Name: "ATN",
                    Host: ".atdmt.com",
                    IsSession: !1,
                    Length: 729
                }],
                Purposes: [],
                GroupId: 81637
            }, {
                ShowInPopup: !0,
                Order: 7,
                OptanonGroupId: 108,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "google.co.uk"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "SAPISID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 593
                }, {
                    Name: "HSID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 593
                }, {
                    Name: "SID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 593
                }, {
                    Name: "PREF",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 594
                }, {
                    Name: "NID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 46
                }, {
                    Name: "SSID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 593
                }, {
                    Name: "APISID",
                    Host: ".google.co.uk",
                    IsSession: !1,
                    Length: 593
                }],
                Purposes: [],
                GroupId: 81638
            }, {
                ShowInPopup: !0,
                Order: 8,
                OptanonGroupId: 109,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "youtube.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "VISITOR_INFO1_LIVE",
                    Host: ".youtube.com",
                    IsSession: !1,
                    Length: 55
                }, {
                    Name: "PREF",
                    Host: ".youtube.com",
                    IsSession: !1,
                    Length: 1871
                }, {
                    Name: "YSC",
                    Host: ".youtube.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 81639
            }, {
                ShowInPopup: !0,
                Order: 9,
                OptanonGroupId: 110,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "ml314.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "u",
                    Host: ".ml314.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "pi",
                    Host: ".ml314.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81640
            }, {
                ShowInPopup: !0,
                Order: 10,
                OptanonGroupId: 111,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "yahoo.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "B",
                    Host: ".yahoo.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81641
            }, {
                ShowInPopup: !0,
                Order: 11,
                OptanonGroupId: 113,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "bat.bing.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "MUIDB",
                    Host: "bat.bing.com",
                    IsSession: !1,
                    Length: 389
                }],
                Purposes: [],
                GroupId: 81643
            }, {
                ShowInPopup: !0,
                Order: 12,
                OptanonGroupId: 114,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "scorecardresearch.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "UID",
                    Host: ".scorecardresearch.com",
                    IsSession: !1,
                    Length: 719
                }, {
                    Name: "UIDR",
                    Host: ".scorecardresearch.com",
                    IsSession: !1,
                    Length: 719
                }],
                Purposes: [],
                GroupId: 81644
            }, {
                ShowInPopup: !0,
                Order: 13,
                OptanonGroupId: 115,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "syndication.twitter.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "lang",
                    Host: "syndication.twitter.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 81645
            }, {
                ShowInPopup: !0,
                Order: 15,
                OptanonGroupId: 117,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "tealiumiq.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "TAPID",
                    Host: ".tealiumiq.com",
                    IsSession: !1,
                    Length: 729
                }],
                Purposes: [],
                GroupId: 81647
            }, {
                ShowInPopup: !0,
                Order: 16,
                OptanonGroupId: 118,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "adnxs.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "sess",
                    Host: ".adnxs.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "uuid2",
                    Host: ".adnxs.com",
                    IsSession: !1,
                    Length: 89
                }],
                Purposes: [],
                GroupId: 81648
            }, {
                ShowInPopup: !0,
                Order: 17,
                OptanonGroupId: 119,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "addthis.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "na_tc",
                    Host: ".addthis.com",
                    IsSession: !1,
                    Length: 395
                }, {
                    Name: "na_id",
                    Host: ".addthis.com",
                    IsSession: !1,
                    Length: 395
                }],
                Purposes: [],
                GroupId: 81649
            }, {
                ShowInPopup: !0,
                Order: 18,
                OptanonGroupId: 120,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "bing.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "MUID",
                    Host: ".bing.com",
                    IsSession: !1,
                    Length: 389
                }],
                Purposes: [],
                GroupId: 81650
            }, {
                ShowInPopup: !0,
                Order: 19,
                OptanonGroupId: 121,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "semasio.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "SEUNCY",
                    Host: ".semasio.net",
                    IsSession: !1,
                    Length: 179
                }],
                Purposes: [],
                GroupId: 81651
            }, {
                ShowInPopup: !0,
                Order: 20,
                OptanonGroupId: 122,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "mathtag.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "uuidc",
                    Host: ".mathtag.com",
                    IsSession: !1,
                    Length: 392
                }, {
                    Name: "uuid",
                    Host: ".mathtag.com",
                    IsSession: !1,
                    Length: 392
                }],
                Purposes: [],
                GroupId: 81652
            }, {
                ShowInPopup: !0,
                Order: 21,
                OptanonGroupId: 124,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "t.sharethis.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "pxcelBcnLcy",
                    Host: "t.sharethis.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "pxcelPage_c010",
                    Host: ".t.sharethis.com",
                    IsSession: !1,
                    Length: 6
                }],
                Purposes: [],
                GroupId: 81654
            }, {
                ShowInPopup: !0,
                Order: 22,
                OptanonGroupId: 125,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "eyeota.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "mako_uid",
                    Host: ".eyeota.net",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81655
            }, {
                ShowInPopup: !0,
                Order: 23,
                OptanonGroupId: 126,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "doubleclick.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "id",
                    Host: ".doubleclick.net",
                    IsSession: !1,
                    Length: 541
                }],
                Purposes: [],
                GroupId: 81656
            }, {
                ShowInPopup: !0,
                Order: 24,
                OptanonGroupId: 127,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "dc-storm.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "_#pid",
                    Host: ".dc-storm.com",
                    IsSession: !1,
                    Length: 89
                }],
                Purposes: [],
                GroupId: 81657
            }, {
                ShowInPopup: !0,
                Order: 25,
                OptanonGroupId: 128,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "agkn.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "ab",
                    Host: ".agkn.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81658
            }, {
                ShowInPopup: !0,
                Order: 26,
                OptanonGroupId: 129,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "sharethis.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__stid",
                    Host: ".sharethis.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 81659
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "criteo.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "uid",
                    Host: ".criteo.com",
                    IsSession: !1,
                    Length: 342
                }, {
                    Name: "eid",
                    Host: ".criteo.com",
                    IsSession: !1,
                    Length: 160
                }],
                Purposes: [],
                GroupId: 95435
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "casalemedia.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "CMPRO",
                    Host: ".casalemedia.com",
                    IsSession: !1,
                    Length: 67
                }, {
                    Name: "CMID",
                    Host: ".casalemedia.com",
                    IsSession: !1,
                    Length: 342
                }, {
                    Name: "CMDD",
                    Host: ".casalemedia.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "CMST",
                    Host: ".casalemedia.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "CMPS",
                    Host: ".casalemedia.com",
                    IsSession: !1,
                    Length: 67
                }, {
                    Name: "CMSC",
                    Host: ".casalemedia.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 98999
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81630
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "Cookies to store cookie consent."
                    },
                    GroupName: {
                        Text: "OneTrust Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "OptanonConsent",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 365
                }, {
                    Name: "OptanonAlertBoxClosed",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 365
                }],
                Purposes: [],
                GroupId: 99009
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81628
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "openx.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "i",
                    Host: ".openx.net",
                    IsSession: !1,
                    Length: 342
                }],
                Purposes: [],
                GroupId: 95434
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81630
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "Cookies from the platform Demandware/Commerce Cloud."
                    },
                    GroupName: {
                        Text: "Demandware/CommerceCloud Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "dwsourcecode_4b377fb6882c5c98b27ba2c20e",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "dwac_bc0xwiaaiYlVoaaadozvZIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwac_a2db7ba46a0142efb4b4178940",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwpersonalization_cf44d492a134fc8db055930b94d08c3a",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 179
                }, {
                    Name: "dwsourcecode_bc5SciaaiYTzwaaadof1RIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "dwac_bcnaYiaaiY3PsaaadoffRIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwsourcecode_bciLIiaaiYQMQaaadoBfZIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "dw",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "sid",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dw_dnt",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwanonymous_xxxxxxxx",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 179
                }, {
                    Name: "dwsecuretoken_xxxxxxxx",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwsid",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwpersonalization_7d890cd605025d3b549591a13d76acb3",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 158
                }, {
                    Name: "dwsourcecode_bcXqYiaaiY9WAaaadoBfFIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "dwac_bc73siaaiYVtaaaadoz1FIgyHo",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "dwpersonalization_169374d18261819dc0df75a350c71ac0",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 179
                }],
                Purposes: [],
                GroupId: 97137
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81630
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "CQuotient is demandwares marketing engine."
                    },
                    GroupName: {
                        Text: "CQuotient Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__cq_seg",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 29
                }, {
                    Name: "__cq_dnt",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "__cq_bc",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 29
                }, {
                    Name: "__cq_uuid",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 394
                }, {
                    Name: "cqcid",
                    Host: "www.ctshirts.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "uuid",
                    Host: ".cquotient.com",
                    IsSession: !1,
                    Length: 394
                }],
                Purposes: [],
                GroupId: 97358
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81630
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "Cookies we've created."
                    },
                    GroupName: {
                        Text: "CT Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "CTCountry",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 179
                }, {
                    Name: "dw_cookies_accepted_us",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 29
                }, {
                    Name: "CTrecprod",
                    Host: "www.ctshirts.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 97360
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 81630
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "CDN used by Demandware/CommerceCloud."
                    },
                    GroupName: {
                        Text: "Cloudflare Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__cfduid",
                    Host: ".ctshirts.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 97600
            }],
            ConsentModel: {
                Name: "Opt-out"
            },
            Language: {
                Culture: "en-GB"
            },
            showBannerCloseButton: !0,
            ShowPreferenceCenterCloseButton: !0,
            FooterDescriptionText: "[Read our privacy policy here](https://www.ctshirts.com/uk/privacy-policy/)   ",
            IsDntEnabled: !1,
            CustomJs: null,
            LifespanTypeText: null,
            LifespanDurationText: null,
            IsConsentLoggingEnabled: !1,
            IsIabThirdPartyCookieEnabled: !0,
            CloseText: "Close",
            BannerCloseButtonText: "Close"
        });
        return ha
    }
    function Wa() {
        for (var b = t(), e = document.getElementsByTagName("script"), f = 0; f < e.length; ++f) {
            var h;
            h = e[f];
            var m = b.cctId;
            h = h.getAttribute("src") ? -1 !== h.getAttribute("src").indexOf(m) : !1;
            if (h) {
                X = Ea(e[f].src);
                break
            }
        }
    }
    function N(b) {
        var e = Ea(b);
        X && e && X.hostname !== e.hostname && (b = b.replace(e.hostname, X.hostname));
        return b
    }
    function Ea(b) {
        var e = document.createElement("a");
        e.href = b;
        return e
    }
    function Ua(b) {
        var e = !1
          , g = Fa(window.location.href)
          , h = f("\x3cdiv\x3e\x3c/div\x3e");
        h.html(b);
        b = f("a", h);
        for (h = 0; h < b.length; h++)
            if (Fa(b[h].href) == g) {
                e = !0;
                break
            }
        return e
    }
    function Fa(b) {
        return b.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }
    function Xa() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(b, e) {
                if (null == b)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var f = Object(b), h = 1; h < arguments.length; h++) {
                    var m = arguments[h];
                    if (null != m)
                        for (var n in m)
                            Object.prototype.hasOwnProperty.call(m, n) && (f[n] = m[n])
                }
                return f
            },
            writable: !0,
            configurable: !0
        })
    }
    function Ya() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(b, e, f) {
                if (null == this)
                    throw new TypeError("this is null or not defined");
                var g = Object(this)
                  , m = g.length >>> 0;
                e >>= 0;
                e = 0 > e ? Math.max(m + e, 0) : Math.min(e, m);
                f = void 0 === f ? m : f >> 0;
                for (m = 0 > f ? Math.max(m + f, 0) : Math.min(f, m); e < m; )
                    g[e] = b,
                    e++;
                return g
            }
        })
    }
    function Na() {
        var b = 0;
        f(".banner-content a").length && f(".banner-content a").each(function(e, g) {
            f(g).addClass("banner-policy-link");
            f(g).attr("tabindex", ++b);
            f(g).attr("aria-label", f(g).text())
        });
        f(".cookie-settings-button").length && f(".cookie-settings-button").attr("tabindex", ++b);
        f(".accept-cookies-button").length && f(".accept-cookies-button").attr("tabindex", ++b);
        f(".banner-close-button").length && f(".banner-close-button").attr("tabindex", ++b)
    }
    function Ma() {
        var b = t()
          , e = w("OptanonConsent", "EuOnly");
        e ? setTimeout(function() {
            window.jsonFeed({
                displayPopup: e
            });
            b.euOnly && Optanon.LoadBanner()
        }, 0) : f.fn && f.fn.jquery && 2 <= parseInt(f.fn.jquery) ? f.getJSON("https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?").fail(function(b, e, f) {
            200 != b.status && window.jsonFeed({
                displayPopup: !0
            })
        }) : f.getJSON("https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?")
    }
    var Q = !1, U = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack, V = !1, xa = !1, Da = function() {
        var b = !0, e, f = t(), h;
        for (h = 0; h < f.Groups.length; h += 1)
            if (e = f.Groups[h],
            A(e) && (!z(e) || z(e) && ("active" == z(e).toLowerCase() || "inactive landingpage" == z(e).toLowerCase() || "do not track" == z(e).toLowerCase()))) {
                b = !1;
                break
            }
        return b
    }(), Ja = function() {
        var b = !0, e, f = t(), h;
        for (h = 0; h < f.Groups.length; h += 1)
            if (e = f.Groups[h],
            A(e) && (e = z(e).toLowerCase(),
            "inactive landingpage" !== e && "always active" !== e)) {
                b = !1;
                break
            }
        return b
    }(), ba = !1, q, ea = [], fa = [], K = [], L = [], D = t().AboutCookiesText, X = null, qa = !1, pa = !1, ha, f;
    this.LoadBanner = function() {
        f ? f(window).trigger("otloadbanner") : qa = !0
    }
    ;
    this.Init = function() {
        Xa();
        Ya();
        Wa();
        Aa();
        (function() {
            function b(b, f) {
                f = f || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent(b, f.bubbles, f.cancelable, f.detail);
                return e
            }
            if ("function" === typeof window.CustomEvent)
                return !1;
            b.prototype = window.Event.prototype;
            window.CustomEvent = b
        }
        )();
        M();
        Ka(La);
        Ha();
        Ia()
    }
    ;
    this.InsertScript = function(b, e, f, h, m) {
        var g = null != h && "undefined" != typeof h, p;
        if (R(m, g && "undefined" != typeof h.ignoreGroupCheck && 1 == h.ignoreGroupCheck || Q) && !E(ea, m)) {
            K.push(m);
            g && "undefined" != typeof h.deleteSelectorContent && 1 == h.deleteSelectorContent && Ba(e);
            m = document.createElement("script");
            null != f && "undefined" != typeof f && (p = !1,
            m.onload = m.onreadystatechange = function() {
                p || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (p = !0,
                f())
            }
            );
            m.type = "text/javascript";
            m.src = b;
            switch (e) {
            case "head":
                document.getElementsByTagName("head")[0].appendChild(m);
                break;
            case "body":
                document.getElementsByTagName("body")[0].appendChild(m);
                break;
            default:
                document.getElementById(e) && (document.getElementById(e).appendChild(m),
                g && "undefined" != typeof h.makeSelectorVisible && 1 == h.makeSelectorVisible && W(e))
            }
            if (g && "undefined" != typeof h.makeElementsVisible)
                for (b = 0; b < h.makeElementsVisible.length; b += 1)
                    W(h.makeElementsVisible[b]);
            if (g && "undefined" != typeof h.deleteElements)
                for (g = 0; g < h.deleteElements.length; g += 1)
                    Ca(h.deleteElements[g])
        }
    }
    ;
    this.InsertHtml = function(b, e, f, h, m) {
        var g = null != h && "undefined" != typeof h;
        if (R(m, g && "undefined" != typeof h.ignoreGroupCheck && 1 == h.ignoreGroupCheck || Q) && !E(fa, m)) {
            L.push(m);
            g && "undefined" != typeof h.deleteSelectorContent && 1 == h.deleteSelectorContent && Ba(e);
            m = document.getElementById(e);
            var p;
            m && (p = document.createElement("div"),
            p.innerHTML = b,
            m.appendChild(p));
            g && "undefined" != typeof h.makeSelectorVisible && 1 == h.makeSelectorVisible && W(e);
            if (g && "undefined" != typeof h.makeElementsVisible)
                for (b = 0; b < h.makeElementsVisible.length; b += 1)
                    W(h.makeElementsVisible[b]);
            if (g && "undefined" != typeof h.deleteElements)
                for (g = 0; g < h.deleteElements.length; g += 1)
                    Ca(h.deleteElements[g]);
            null != f && "undefined" != typeof f && f()
        }
    }
    ;
    this.Close = function() {
        I();
        G("NotLandingPage");
        C("OptanonConsent");
        H();
        M();
        P()
    }
    ;
    this.AllowAll = function(b) {
        var e = t(), g;
        q = [];
        for (g = 0; g < e.Groups.length; g += 1)
            b = e.Groups[g],
            A(b) && q.push(u(b) + ":1");
        f("#optanon #optanon-menu li").removeClass("menu-item-off");
        f("#optanon #optanon-menu li").addClass("menu-item-on");
        f("#optanon-show-settings-popup ul li").each(function() {
            f(this).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        I();
        G("NotLandingPage");
        C("OptanonConsent");
        H();
        M();
        P()
    }
    ;
    this.ToggleInfoDisplay = function() {
        f("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden") ? Va() : (I(),
        C("OptanonConsent"),
        H(),
        M(),
        P())
    }
    ;
    this.BlockGoogleAnalytics = function(b, e) {
        window["ga-disable-" + b] = !R(e)
    }
    ;
    this.TriggerGoogleAnalyticsEvent = function(b, e, f, h) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", b, e, f, h]);
        "undefined" != typeof ga && ga("send", "event", b, e, f, h);
        "undefined" != typeof dataLayer && dataLayer.constructor === Array && dataLayer.push({
            event: "trackOptanonEvent",
            optanonCategory: b,
            optanonAction: e,
            optanonLabel: f,
            optanonValue: h
        })
    }
    ;
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var b = t()
          , e = F("OptanonAlertBoxClosed")
          , b = b.LastReconsentDate;
        if (null === e)
            return !1;
        if (!b)
            return !0;
        (e = new Date(b) > new Date(e)) && Optanon.ReconsentGroups();
        return !e
    }
    ;
    this.ReconsentGroups = function() {
        var b = !1
          , e = J(w("OptanonConsent", "groups"))
          , f = J(w("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""))
          , h = t();
        if (w("OptanonConsent", "groups")) {
            for (var m = 0; m < h.Groups.length; m += 1) {
                var n = h.Groups[m];
                if (A(n)) {
                    var p = T(f, u(n));
                    if (-1 != p) {
                        var q = z(n).toLowerCase();
                        -1 < ["inactive", "inactive landingpage", "do not track"].indexOf(q) && (b = !0,
                        q = "inactive landingpage" === q ? ":1" : ":0",
                        e[p] = u(n) + q)
                    }
                }
            }
            b && C("OptanonConsent", e)
        }
    }
    ;
    this.SetAlertBoxClosed = function(b) {
        var e = (new Date).toISOString();
        b ? da("OptanonAlertBoxClosed", e, 365) : da("OptanonAlertBoxClosed", e)
    }
    ;
    this.GetDomainData = function() {
        return t()
    }
    ;
    this.OnConsentChanged = function(b) {
        window.addEventListener("consent.onetrust", b)
    }
}
).call(Optanon);
Optanon.Init();
