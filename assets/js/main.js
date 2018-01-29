jQuery(document).ready(function (e) {
    function t() {
        a(e(".cd-headline.letters").find("b")), n(e(".cd-headline"))
    }

    function a(t) {
        t.each(function () {
            var t = e(this), a = t.text().split(""), n = t.hasClass("is-visible");
            for (i in a) t.parents(".rotate-2").length > 0 && (a[i] = "<em>" + a[i] + "</em>"), a[i] = n ? '<i class="in">' + a[i] + "</i>" : "<i>" + a[i] + "</i>";
            var o = a.join("");
            t.html(o).css("opacity", 1)
        })
    }

    function n(t) {
        var i = u;
        t.each(function () {
            var t = e(this);
            if (t.hasClass("loading-bar")) i = p, setTimeout(function () {
                t.find(".cd-words-wrapper").addClass("is-loading")
            }, f); else if (t.hasClass("clip")) {
                var a = t.find(".cd-words-wrapper"), n = a.width() + 10;
                a.css("width", n)
            } else if (!t.hasClass("type")) {
                var s = t.find(".cd-words-wrapper b"), r = 0;
                s.each(function () {
                    var t = e(this).width();
                    t > r && (r = t)
                }), t.find(".cd-words-wrapper").css("width", r + 60)
            }
            setTimeout(function () {
                o(t.find(".is-visible").eq(0))
            }, i)
        })
    }

    function o(e) {
        var t = c(e);
        if (e.parents(".cd-headline").hasClass("type")) {
            var i = e.parent(".cd-words-wrapper");
            i.addClass("selected").removeClass("waiting"), setTimeout(function () {
                i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
            }, v), setTimeout(function () {
                s(t, h)
            }, g)
        } else if (e.parents(".cd-headline").hasClass("letters")) {
            var a = e.children("i").length >= t.children("i").length;
            r(e.find("i").eq(0), e, a, m), l(t.find("i").eq(0), t, a, m)
        } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({width: "2px"}, $, function () {
            d(e, t), s(t)
        }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), d(e, t), setTimeout(function () {
            o(t)
        }, p), setTimeout(function () {
            e.parents(".cd-words-wrapper").addClass("is-loading")
        }, f)) : (d(e, t), setTimeout(function () {
            o(t)
        }, u))
    }

    function s(e, t) {
        e.parents(".cd-headline").hasClass("type") ? (l(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({width: e.width() + 10}, $, function () {
            setTimeout(function () {
                o(e)
            }, y)
        })
    }

    function r(t, i, a, n) {
        if (t.removeClass("in").addClass("out"), t.is(":last-child") ? a && setTimeout(function () {
                o(c(i))
            }, u) : setTimeout(function () {
                r(t.next(), i, a, n)
            }, n), t.is(":last-child") && e("html").hasClass("no-csstransitions")) {
            var s = c(i);
            d(i, s)
        }
    }

    function l(e, t, i, a) {
        e.addClass("in").removeClass("out"), e.is(":last-child") ? (t.parents(".cd-headline").hasClass("type") && setTimeout(function () {
            t.parents(".cd-words-wrapper").addClass("waiting")
        }, 200), i || setTimeout(function () {
            o(t)
        }, u)) : setTimeout(function () {
            l(e.next(), t, i, a)
        }, a)
    }

    function c(e) {
        return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
    }

    function d(e, t) {
        e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
    }

    if (0 != e(".cd-headline").length) {
        var u = 3e3, p = 3800, f = p - 3e3, m = 70, h = 150, v = 500, g = v + 800, $ = 600, y = 1500;
        t(), e(window).resize(function () {
            if (headline = e(".cd-headline"), !headline.hasClass("type")) {
                var t = headline.find(".cd-words-wrapper b"), i = 0;
                t.each(function () {
                    var t = e(this).width();
                    t > i && (i = t)
                }), headline.find(".cd-words-wrapper").css("width", i)
            }
        })
    }
}), function () {
    $(".header-video").html() && ($("#videoBackground").mb_YTPlayer(), $("#video-play").click(function (e) {
        return e.preventDefault(), $(this).hasClass("ion-ios-play-outline") ? $("#videoBackground").playYTP() : $("#videoBackground").pauseYTP(), $(this).toggleClass("ion-ios-play-outline ion-ios-pause-outline"), !1
    }), $("#video-volume").click(function (e) {
        return e.preventDefault(), $(this).hasClass("ion-android-volume-off") ? $("#videoBackground").YTPUnmute() : $("#videoBackground").YTPMute(), $(this).toggleClass("ion-android-volume-off ion-android-volume-up"), !1
    }))
}(), function () {
    $("#owl-hs-carousel").html() && $("#owl-hs-carousel").owlCarousel({
        itemElement: "item",
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        items: 1,
        loop: !0,
        autoplay: !0,
        autoplaySpeed: 1e3,
        autoplayTimeout: 5e3,
        nav: !0,
        navText: ["<span class='ion-ios-arrow-left'></span>", "<span class='ion-ios-arrow-right'></span>"]
    })
}(), $(document).ready(function () {
    if ($(".down-arrow").click(function (e) {
            e.preventDefault(), $("html, body").animate({scrollTop: $(".down-arrow-dest").offset().top}, 1500, "easeInOutExpo")
        }), $(".footer-btn").click(function (e) {
            e.preventDefault(), $("html, body").animate({scrollTop: $("main").offset().top}, 1500, "easeOutQuart")
        }), $(".menuzord-single ul").on("click", "li > a", function (e) {
            e.preventDefault();
            var t = this.hash;
            $("html, body, main").animate({scrollTop: $(t).offset().top}, 1500, "easeInOutExpo")
        }), function () {
            function e() {
                $(window).scrollTop() > 100 || (t.removeClass("navbar-solid"), $(".navbar-nav > li > a").blur())
            }

            var t = $(".menuzord");
            e(), $(window).scroll(function () {
                e()
            })
        }(), function () {
            function e() {
                return $(window).innerWidth() > 768 && $(window).scrollTop() > 73 ? void t.addClass("menubar-fixed") : (t.removeClass("menubar-fixed"), void $(".navbar-nav > li > a").blur())
            }

            var t = $(".topbar-menubar");
            $(window).scroll(function () {
                e()
            }), $(window).resize(function () {
                $(window).innerWidth() > 768 && $(window).scroll(function () {
                    e()
                })
            })
        }(), function () {
            function e() {
                return $(window).scrollTop() > 768 ? void t.addClass("solid") : (t.removeClass("solid"), void $(".navbar-nav > li > a").blur())
            }

            var t = $(".overlay-menu-wrap");
            e(), $(window).scroll(function () {
                e()
            })
        }(), $(".icon-3-col .row:first-child").addClass("m-t-0"), $(".menuzord").on("activate.bs.scrollspy", function () {
            $(".menuzord-menu > li[class='active'] > a").focus()
        }), jQuery("#menuzord").menuzord({
            showDelay: 50,
            effect: "fade",
            indicatorFirstLevel: "&#xf3d0;"
        }), $("#contactForm").submit(function (e) {
            e.preventDefault();
            var t = jQuery, i = t(this).serializeArray(), a = t(this).attr("action"), n = t("#contactFormResponse"),
                o = t("#cfsubmit"), s = o.text();
            return o.text("Sending..."), t.ajax({
                url: a, type: "POST", data: i, success: function (e) {
                    n.html(e), o.text(s), t("#contactForm input[name=name]").val(""), t("#contactForm input[name=email]").val(""), t("#contactForm textarea[name=message]").val("")
                }, error: function (e) {
                    alert("Error occurd! Please try again")
                }
            }), !1
        }), $("#requestForm").submit(function (e) {
            e.preventDefault();
            var t = jQuery, i = t(this).serializeArray(), a = t(this).attr("action"), n = t("#requestFormResponse"),
                o = t("#rfsubmit"), s = o.text();
            return o.text("Sending..."), t.ajax({
                url: a, type: "POST", data: i, success: function (e) {
                    n.html(e), o.text(s), t("#requestForm input[name=name]").val(""), t("#requestForm input[name=email]").val(""), t("#requestForm textarea[name=message]").val("")
                }, error: function (e) {
                    alert("Error occurd! Please try again")
                }
            }), !1
        }), $("#testimonial-slider").owlCarousel({
            items: 1,
            margin: 0,
            autoHeight: !0,
            dots: !0
        }), $("#testimonial-slider-2").owlCarousel({
            items: 1,
            margin: 0,
            autoHeight: !0,
            dots: !0,
            rtl: !0
        }), $("#testimonial-classic-slider").owlCarousel({
            items: 1,
            margin: 0,
            autoHeight: !0,
            dots: !0,
            autoplay: !0
        }), $("#partners-slider").owlCarousel({
            margin: 10,
            loop: !0,
            autoPlay: 3e3,
            responsive: {0: {items: 2}, 600: {items: 4}, 1e3: {items: 5}},
            autoplay: !0
        }), $("#partners-slider-2").owlCarousel({
            margin: 10,
            loop: !0,
            autoPlay: 3e3,
            responsive: {0: {items: 2}, 600: {items: 4}, 1e3: {items: 5}},
            autoplay: !0,
            rtl: !0
        }), $("#projects-slider").owlCarousel({
            margin: 10,
            loop: !0,
            autoPlay: 3e3,
            responsive: {0: {items: 1}, 600: {items: 2}, 1e3: {items: 3}},
            autoplay: !0,
            dots: !0
        }), 0 != $("#map").length) {
        var e = new GMaps({
            div: "#map",
            lat: 23.790223,
            lng: 90.414036,
            scrollwheel: !1,
            styles: [{
                featureType: "administrative.locality",
                elementType: "all",
                stylers: [{hue: "#2c2e33"}, {saturation: 7}, {lightness: 19}, {visibility: "on"}]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{hue: "#ffffff"}, {saturation: -100}, {lightness: 100}, {visibility: "simplified"}]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{hue: "#ffffff"}, {saturation: -100}, {lightness: 100}, {visibility: "off"}]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{hue: "#bbc0c4"}, {saturation: -93}, {lightness: 31}, {visibility: "simplified"}]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{hue: "#bbc0c4"}, {saturation: -93}, {lightness: 31}, {visibility: "on"}]
            }, {
                featureType: "road.arterial",
                elementType: "labels",
                stylers: [{hue: "#bbc0c4"}, {saturation: -93}, {lightness: -2}, {visibility: "simplified"}]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{hue: "#e9ebed"}, {saturation: -90}, {lightness: -8}, {visibility: "simplified"}]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{hue: "#e9ebed"}, {saturation: 10}, {lightness: 69}, {visibility: "on"}]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{hue: "#e9ebed"}, {saturation: -78}, {lightness: 67}, {visibility: "simplified"}]
            }]
        });
        e.addMarker({
            lat: 23.790223,
            lng: 90.414036,
            title: "mountain",
            infoWindow: {content: '<span class="map-header"><b>Mountain Headquarter</b><br/></span><span class="map-address">Build-A/6, Mirpur 14 , Dhaka</span'},
            icon: "assets/images/map/marker.png"
        })
    }
    !function () {
        if ($("#funfacts").html()) {
            new Waypoint.Inview({
                element: $("#funfacts")[0], enter: function (e) {
                    $(".count.number").each(function () {
                        $(this).prop("Counter", 0).animate({Counter: $(this).text()}, {
                            duration: 3e3,
                            easing: "swing",
                            step: function (e) {
                                $(this).text(Math.ceil(e))
                            }
                        })
                    }), this.destroy()
                }
            })
        }
    }(), $("#subscription-form").submit(function (e) {
        e.preventDefault();
        var t = $("#subscription-form"), i = $("#subscribe-button"), a = $("#subscription-response"),
            n = $("#subscriber-email").val();
        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            dataType: "json",
            data: {email: n},
            cache: !1,
            beforeSend: function (e) {
                i.val("Joining...")
            },
            success: function (e) {
                1 == e.sendstatus ? (a.html(e.message), t.fadeOut(500)) : (a.html(e.message), i.val("Join"))
            }
        })
    });
    var t = "https://api.flickr.com/services/rest/?api_key=7a2dc9bed9dc21700704f273faaf89d7&format=json&nojsoncallback=1";
    $.get(t, {method: "flickr.people.findByUsername", format: "json", username: "Dullface"}).done(function (e) {
        var t = "https://api.flickr.com/services/rest/?api_key=7a2dc9bed9dc21700704f273faaf89d7&format=json&nojsoncallback=1";
        $.getJSON(t, {
            format: "json",
            user_id: e.user.nsid,
            method: "flickr.people.getPublicPhotos",
            extras: "url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o"
        }).done(function (e) {
            var t = e.photos.photo;
            $.each(t, function (e, t) {
                if (t.url_m) {
                    var i = "<a class='gallery-popup' href=" + t.url_o + "><img class='img-responsive' src=" + t.url_q + " /></a>";
                    $(".flickr-photo-wrap").append(i)
                }
                if (11 === e) return $(".gallery-popup").magnificPopup({
                    type: "image",
                    removalDelay: 300,
                    mainClass: "mfp-fade",
                    gallery: {enabled: !0}
                }), !1
            })
        })
    }).fail(function (e) {
    }), $(".gallery-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {enabled: !0}
    }), $(".inline-popup").magnificPopup({
        type: "inline",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {enabled: !0}
    }), $(".popup-youtube").magnificPopup({type: "iframe"}), function () {
        function e(e) {
            var t = /(https?:\/\/[^\s]+)/g;
            return e.replace(t, function (e) {
                return '<a href="' + e + '">' + e + "</a>"
            })
        }

        function t(e) {
            var t = /@\w+/g;
            return e.replace(t, function (e) {
                return '<a href="https://twitter.com/' + e + '">' + e + "</a>"
            })
        }

        function i(e) {
            var t = Math.ceil((e / 1e3).toFixed(1)), i = Math.ceil((e / 6e4).toFixed(1)),
                a = Math.ceil((e / 36e5).toFixed(1)), n = Math.ceil((e / 864e5).toFixed(1));
            return t < 60 ? t + " Sec" : i < 60 ? i + " Min" : a < 24 ? a + " Hrs" : n + " Days"
        }

        var a = $(".twitter-feed");
        a.length > 0 && a.each(function () {
            var n = $(this), o = n.attr("data-username"), s = n.attr("data-count");
            o || (o = "twitter"), s || (s = 8), $.getJSON("php/twitter/tweets.php?username=" + o + "&count=" + s, function (n) {
                console.log(n), $.each(n, function (n, o) {
                    var s = e(o.text), r = t(s), l = new Date, c = new Date(o.created_at),
                        d = Math.abs(l.getTime() - c.getTime()), u = i(d),
                        p = "<li class='single-tweet'>" + r + "<span>about " + u + " ago</span></li>";
                    a.append(p)
                })
            })
        })
    }()
}), function () {
    var e = $("#color-scheme"), t = function () {
        for (var e = document.cookie.split(";"), t = {}, i = 0; i < e.length; i++) {
            var a = e[i].split("=");
            t[a[0]] = unescape(a[1])
        }
        return t
    };
    $("#colorPickers > li").click(function () {
        var i = $(this);
        e.attr("href", "assets/css/colors/" + i.data("color") + ".css"), document.cookie = "colorScheme=" + i.data("color") + ";", console.log(t().colorScheme)
    });
    var i = !1;
    $(".switcher-trigger").click(function () {
        i ? ($(".color-picker").animate({left: "-250px"}, 200), i = !1) : ($(".color-picker").animate({left: "0px"}, 200), i = !0)
    }), t().colorScheme && e.attr("href", "assets/css/colors/" + t().colorScheme + ".css");
    var a = $(".color-picker .color-picker-body ul#colorPickers li").attr("data-color");
    (t().colorScheme = a) && ($(".color-picker .color-picker-body ul#colorPickers li[data-color = " + t().colorScheme + "]").addClass("active"), $(".color-picker .color-picker-body ul#colorPickers li").click(function () {
        $(".color-picker .color-picker-body ul#colorPickers li.active").removeClass("active"), $(this).addClass("active")
    }))
}(), function (e, t, i, a, n, o, s) {
    e.GoogleAnalyticsObject = n, e[n] = e[n] || function () {
        (e[n].q = e[n].q || []).push(arguments)
    }, e[n].l = 1 * new Date, o = t.createElement(i), s = t.getElementsByTagName(i)[0], o.async = 1, o.src = a, s.parentNode.insertBefore(o, s)
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-76729372-1", "auto"), ga("send", "pageview"), function (e, t, i, a, n, o) {
    e.hj = e.hj || function () {
        (e.hj.q = e.hj.q || []).push(arguments)
    }, e._hjSettings = {
        hjid: 194753,
        hjsv: 5
    }, n = t.getElementsByTagName("head")[0], o = t.createElement("script"), o.async = 1, o.src = i + e._hjSettings.hjid + a + e._hjSettings.hjsv, n.appendChild(o)
}(window, document, "//static.hotjar.com/c/hotjar-", ".js?sv="), $(document).ready(function () {
    if ("" != $(".portfolio-grid")) {
        var e = $(".portfolio-grid").imagesLoaded(function () {
            e.masonry({itemSelector: ".portfolio-grid-item", columnWidth: ".grid-sizer", percentPosition: !0})
        }), t = $(".portfolio-grid-item").last().width(), i = $(".portfolio-grid-item").last().height();
        $(".load-more-portfolio").css({height: i, width: t}), $(".load-more-portfolio").on("click", function (t) {
            t.preventDefault(), $(this).hide(), jQuery.get("php/portfolio-load-more.php", function (t) {
                var i = $(t).find("img"), a = ($(i).length, $(t));
                e.append(a), e.masonry("appended", a)
            })
        })
    }
}), $(document).ready(function () {
    $(".gallery-grid").isotope({itemSelector: ".gallery-grid-item", layoutMode: "fitRows"})
}), $(window).on("load", function () {
    var e = $(".gallery-grid-masonry");
    "function" == typeof imagesLoaded && imagesLoaded(e, function () {
        setTimeout(function () {
            e.isotope({
                itemSelector: ".gallery-grid-item",
                resizesContainer: !1,
                layoutMode: "masonry",
                masonry: {columnWidth: ".grid-sizer"},
                filter: "*"
            })
        }, 100)
    })
}), $(document).ready(function () {
    $(".portfolio-grid-sortable").isotope({itemSelector: ".portfolio-grid-item", masonry: {columnWidth: ".grid-sizer"}})
}), $(document).ready(function () {
    $(".filter-button-group").on("click", "button", function () {
        var e = $(this).attr("data-filter");
        $(".portfolio-grid-sortable").isotope({filter: e})
    })
}), $(document).ready(function () {
    $("#btn_video_1").click(function () {
        event.preventDefault(), $(this).hide(), $("#video_thum_1").hide(), $("#iframe_video_1").removeClass("hide")
    })
}), $("#btnVideo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: !1,
    fixedContentPos: !1
}), $(window).resize(function () {
    var e = $(window).width();
    e < 768 ? ($("#videoText").removeClass("p-r-0").addClass("section"), $(".partial-bg").removeAttr("style"), $(".lightbox-video img").addClass("center-block"), $("#btnVideo").attr("target", "_blank")) : $("#videoText").removeClass("section").addClass("p-r-0")
}).resize(), $(document).ready(function () {
    0 != $("#countDown").length && $("#countDown").countdown({
        date: "January 01, 2017 00:00:00", render: function (e) {
            var t = $(this.el);
            t.empty().append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.days, 2) + "</span><h6>Days</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.hours, 2) + "</span><h6>Hours</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.min, 2) + "</span><h6>Minutes</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.sec, 2) + "</span><h6>Seconds</h6></div>")
        }
    })
}), function () {
    if (0 != $("#disqus_thread").length) {
        var e = "reigntemplate";
        !function () {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
        }()
    }
}(), function () {
    if (0 != $("#instafeed").length) {
        var e = new Instafeed({
            get: "user",
            userId: 94764,
            accessToken: "94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5",
            limit: 6
        });
        e.run()
    }
}(), function () {
    $("#portfolio-carousel").html() && $("#portfolio-carousel").owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        nav: !0,
        autoPlay: 5e3,
        navText: ["<span class='ion-ios-arrow-left'></span>", "<span class='ion-ios-arrow-right'></span>"]
    })
}(), $(document).ready(function () {
    $("#expertise-circle-wraper").find(".expertise-circle").each(function () {
        var e = "#" + $(this).attr("id");
        $(e).each(function () {
            var e = $(this), t = e.data("color"), i = e.data("bg-color"), a = e.data("value"), n = new Waypoint.Inview({
                element: $(this), enter: function (o) {
                    e.find(".expertise").radialProgress("init", {
                        size: 150,
                        fill: 3,
                        color: t,
                        background: i
                    }).radialProgress("to", {perc: a, time: 1e3}), n.destroy()
                }
            })
        })
    })
}), function () {
    function e() {
        classie.has(i, "open") ? classie.remove(i, "open") : classie.has(i, "close") || classie.add(i, "open")
    }

    if ($("#trigger-overlay").html()) {
        var t = document.getElementById("trigger-overlay"), i = document.querySelector("div.overlay"),
            a = i.querySelector("button.overlay-close");
        transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        }, transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], support = {transitions: Modernizr.csstransitions}, t.addEventListener("click", e), a.addEventListener("click", e)
    }
}();
var mtnTab = function () {
    var e = $(window).width();
    $(".tab1") && (e < 768 ? $(".tab1 ul.nav.nav-pills").removeClass("nav-stacked") : $(".tab1 ul.nav.nav-pills").addClass("nav-stacked"))
};
$(document).ready(function () {
    mountainLogo($(window).width())
});
var mountainLogo = function (e) {
    $(".default-logo").css("display", "block"), $(".dark-logo").css("display", "none")
};
mtnTab(), window.onresize = function (e) {
    mtnTab(), mountainLogo($(window).width())
}, Pace.on("done", function (e) {
    (new WOW).init()
}), $(".menuzord").css({marginBottom: -($(".menuzord").height() + 1)}), $(window).scroll(function () {
    var e = $(window).scrollTop();
    e >= 600 ? $(".navigationbar-animation").addClass("navigationbar--fixed--top--animate") : $(".navigationbar-animation").removeClass("navigationbar--fixed--top--animate"), e >= 350 ? $(".navigationbar-animation").addClass("") : $(".navigationbar-animation").removeClass("navigationbar--fixed--top--transition"), e >= 200 ? ($(".default-logo").css("display", "none"), $(".dark-logo").css("display", "block"), $(".navigationbar-animation").addClass("navigationbar--fixed--top menuzord--light")) : ($(".default-logo").css("display", "block"), $(".dark-logo").css("display", "none"), $(".navigationbar-animation").removeClass("navigationbar--fixed--top menuzord--light"))
}), $(document).ready(function () {
    function e() {
        var e = $("section").length;
        $("#dot-nav li a").removeClass("active").parent("li").removeClass("active"), $("section").each(function (t, i) {
            var a, n = $(i);
            console.log(n.next().html()), a = "undefined" != typeof n.next().offset() ? n.next().offset().top : $(document).height(), null !== n.offset() ? thisTop = n.offset().top - (a - n.offset().top) / e : thisTop = 0;
            $(document).scrollTop()
        })
    }

    $(".awesome-tooltip").tooltip({placement: "left"}), $(window).bind("scroll", function (t) {
        e()
    }), $("#dot-nav li").click(function () {
        var e, t, i = $(this).find("a").attr("href"), a = 0;
        return t = $(i), e = ($(t).offset() || 0).top - a, $("html, body").animate({scrollTop: e}, "slow"), !1
    })
});