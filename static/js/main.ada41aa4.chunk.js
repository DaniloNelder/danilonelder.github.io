(this["webpackJsonpDanilo"] = this["webpackJsonpDanilo"] || []).push([
  [0],
  {
    127: function (e, a, t) {},
    178: function (e, a, t) {
      e.exports = t(261);
    },
    183: function (e, a, t) {},
    261: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(29),
        i = t.n(r),
        c = (t(183), t(51)),
        s = t(42),
        o = {
          showNavigationbar: !0,
          FirstName: "Danilo",
          MiddleName: "",
          LastName: "Nelder",
          devDesc:
            " Engenheiro \u269b Programador \u269b Analista \u269b Gamer  ",
          backgroundType: "gradient",
          plainBackgroundMode: "daylight",
          gradientColors:
            "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
          icons: [
            { image: "fa-github", url: "https://github.com/danilonelder" },
            {
              image: "fa-linkedin",
              url: "https://www.linkedin.com/in/danilonelder/",
            },
            {
              image: "fa-twitter",
              url: "https://www.twitter.com/danilonelder/",
            },
            {
              image: "fa-facebook",
              url: "https://www.facebook.com/danilonelder",
            },
            {
              image: "fa-instagram",
              url: "https://www.instagram.com/danilonelder/",
            },
            {
              image: "fa-stack-overflow",
              url: "https://stackoverflow.com/users/18207847/danilo-nelder",
            },
            {
              image: "fa-hackerrank",
              url: "https://www.hackerrank.com/danilo_nelder",
            },
          ],
          aboutHeading: "Sobre mim",
          profilePictureLink: "",
          aboutDescription:
            "Meu nome é Danilo Nelder, sou formado em Análise e Desenvolvimento de Sistemas pela instituição de ensino superior UNIMAR - Universidade de Marília. Trabalho na área de tecnologia desde os 15 anos. Decidi me especializar em Back-End aos 17 anos. Desde então, fiz vários cursos sobre o assunto para aprimorar meus conhecimentos e habilidades. Trabalhei em diversos projetos com tecnologia, com foco nas áreas de Gestão Empresarial, Seguros, Varejo e Legislativo. Com participação ou responsável pela volta dos projetos.",
          projectHeading: "Projetos Recentes",
          gitHubLink: "https://api.github.com/users/",
          gitHubQuery: "/repos?sort=updated&direction=desc",
          gitHubUsername: "danilonelder",
          projectsLength: 4,
          showBlog: !1,
          showSkills: !0,
          hardSkills: [
            { name: "Java", value: 90 },
            { name: "Delphi", value: 60 },
            { name: "SQL", value: 75 },
            { name: "Data Structures", value: 85 },
            { name: "DB2", value: 65 },
            { name: "JavaScript", value: 50 },
            { name: "React", value: 65 },
            { name: "HTML/CSS", value: 55 },
            { name: "Fortify", value: 85 },
            { name: "Microsoft SQL Server", value: 70 },
          ],
          softSkills: [
            { name: "Orientação a Objeto", value: 80 },
            { name: "Colaboração", value: 90 },
            { name: "Positividade", value: 75 },
            { name: "Adaptação", value: 85 },
            { name: "Resolução de Problemas", value: 75 },
            { name: "Empatia", value: 90 },
            { name: "Organização", value: 70 },
            { name: "Creatividade", value: 90 },
          ],
          showGetInTouch: !0,
          footerMessage:
            "Atualmente, estou trabalhando em tempo integral em Engenharia de Software ou Machine Learning! Sinta-se à vontade para me enviar um e-mail para",
          emailAddress: "danilo_nelder@hotmail.com",
        },
        m = t(166),
        u = t.n(m),
        d = t(28),
        g = t(38),
        f = l.a.forwardRef(function (e, a) {
          var t = o.FirstName,
            n = o.LastName,
            r = o.MiddleName,
            i = o.devDesc,
            c = o.icons,
            s = o.gradientColors;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              g.a,
              {
                fluid: !0,
                id: "home",
                style: {
                  background: "linear-gradient(136deg,".concat(s, ")"),
                  backgroundSize: "1200% 1200%",
                },
                className:
                  "title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0",
              },
              l.a.createElement("div", { id: "stars" }),
              l.a.createElement(
                d.a,
                { className: "text-center" },
                l.a.createElement(
                  "h1",
                  { ref: a, className: "display-1" },
                  "".concat(t, " ").concat(r, " ").concat(n)
                ),
                l.a.createElement(
                  u.a,
                  { className: "lead typist", cursor: { show: !1 } },
                  " ",
                  i
                ),
                l.a.createElement(
                  "div",
                  { className: "p-5" },
                  c.map(function (e, a) {
                    return l.a.createElement(
                      "a",
                      {
                        key: "social-icon-".concat(a),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: e.url,
                        "aria-label": "My ".concat(e.image.split("-")[1]),
                      },
                      l.a.createElement("i", {
                        className: "fab ".concat(
                          e.image,
                          "  fa-3x socialicons"
                        ),
                      })
                    );
                  })
                ),
                l.a.createElement(
                  "a",
                  {
                    className: "btn btn-outline-light btn-lg ",
                    href: "#aboutme",
                    role: "button",
                    "aria-label": "Learn more about me",
                  },
                  "More about me"
                )
              )
            )
          );
        }),
        b = t(33),
        p = t.n(b),
        h = t(49),
        E = t(9),
        v = t(64),
        k = t.n(v),
        w = t(50),
        N = t.n(w),
        y = new RegExp(
          /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        ),
        S = function () {
          var e = l.a.useState(k.a),
            a = Object(E.a)(e, 1)[0],
            t = o.aboutHeading,
            n = o.aboutDescription,
            r = o.profilePictureLink,
            i = l.a.useState(""),
            c = Object(E.a)(i, 2),
            s = c[0],
            m = c[1],
            u = l.a.useState(Boolean(r)),
            d = Object(E.a)(u, 2),
            g = d[0],
            f = d[1];
          l.a.useEffect(
            function () {
              r && !y.test(r) ? b() : m(r);
            },
            [r]
          );
          var b = (function () {
            var e = Object(h.a)(
              p.a.mark(function e() {
                var a;
                return p.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "https://www.instagram.com/",
                            "/?__a=1",
                            (e.prev = 2),
                            (e.next = 5),
                            N.a.get(
                              "https://www.instagram.com/" + r + "/?__a=1"
                            )
                          );
                        case 5:
                          (a = e.sent),
                            m(a.data.graphql.user.profile_pic_url_hd),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            f(!1),
                            console.error(e.t0.message);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return l.a.createElement(
            "div",
            { id: "aboutme", className: "jumbotron jumbotron-fluid m-0" },
            l.a.createElement(
              "div",
              { className: "container container-fluid p-5" },
              l.a.createElement(
                "div",
                { className: "row" },
                l.a.createElement(
                  "div",
                  { className: "col-5 d-none d-lg-block align-self-center" },
                  g &&
                    l.a.createElement("img", {
                      className: "border border-secondary rounded-circle",
                      src: s,
                      alt: "profilepicture",
                    })
                ),
                l.a.createElement(
                  "div",
                  { className: "col-lg-".concat(g ? "7" : "12") },
                  l.a.createElement(
                    "h2",
                    { className: "display-4 mb-5 text-center" },
                    t
                  ),
                  l.a.createElement("p", { className: "lead text-center" }, n),
                  a &&
                    l.a.createElement(
                      "p",
                      { className: "lead text-center" },
                      l.a.createElement(
                        "a",
                        {
                          className: "btn btn-outline-dark btn-lg",
                          href: "https://docs.google.com/document/d/1vBEH6xzIcDwdo1BPjl2NSWG5Fg9sVCbxo1MYtLTD6kY/edit",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          role: "button",
                          "aria-label": "Currículo",
                        },
                        "Currículo"
                      )
                    )
                )
              )
            )
          );
        },
        x = t(8),
        P = (t(127), t(43)),
        q = t.n(P),
        T = t(65),
        L = t.n(T),
        R = t(30),
        j = t.n(R),
        A =
          (t(279),
          function () {
            return l.a.createElement(
              g.a,
              { fluid: !0, id: "experience", className: "bg-light m-0" },
              l.a.createElement(
                d.a,
                { className: "p-7" },
                l.a.createElement(
                  x.VerticalTimeline,
                  null,
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2021",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Desenvolvedor Java (2021-)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "Bradesco Seguros, São Paulo-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Desenvolvedor de novas funcionalidades com foco na implantação de Micro serviços e atualizações de sistemas no setor de Seguros Bradesco."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2020 - 2021",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Desenvolvedor Java (2020-2021)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "Expresso São Miguel, São Paulo-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Desenvolvimento de projetos no ramo de transportes com coletas, entregas e fretes."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--education",
                      contentStyle: {
                        background: "rgb(0,0,128)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(0,0,128)",
                      },
                      date: "2019 - 2020",
                      iconStyle: {
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(q.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "University of Cambridge EAD (2019-2020)"
                    ),
                    l.a.createElement("p", null, "English Language.")
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2019 - 2020",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Analista e Desenvolvedor SR (2019-2020)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "TEx, São Paulo-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Analisar e desenvolver, com foco em implementações de microsserviços e correção do sistema principal, ramo de Seguros e Corretagem."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2018 - 2019",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Programador (2018-2019)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "Onclick Sistemas, Marilia-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Analisar e desenvolver, com foco em implementações e correções do Sistema de Gestão Comercial e POS."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2017 - 2018",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Programador (2017-2018)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "Unio Tecnologia, Marilia-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Desenvolvedor de Sistemas de Gestão Comercial, e controladores adjacentes da empresa."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--education",
                      contentStyle: {
                        background: "rgb(0,0,128)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(0,0,128)",
                      },
                      date: "2013-",
                      iconStyle: {
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(q.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Caelum - Escola de Tecnologia, São Paulo-SP (2013-)"
                    ),
                    l.a.createElement("p", null, "Java for web Development.")
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--education",
                      contentStyle: {
                        background: "rgb(0,0,128)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(0,0,128)",
                      },
                      date: "2011-",
                      iconStyle: {
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(q.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Caelum - Escola de Tecnologia, São Paulo-SP (2011-)"
                    ),
                    l.a.createElement("p", null, "Java and Object Oriented.")
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--work",
                      contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                      },
                      date: "2013 - 2016",
                      iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(j.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "Analista Programador (2013-2016)"
                    ),
                    l.a.createElement(
                      "h4",
                      { className: "vertical-timeline-element-subtitle" },
                      "Webline Sistemas, Marilia-SP"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Desenvolvimento e manutenção de projetos para Câmaras Municipais e Prefeituras, além de outros órgãos públicos."
                    )
                  ),
                  l.a.createElement(
                    x.VerticalTimelineElement,
                    {
                      className: "vertical-timeline-element--education",
                      contentStyle: {
                        background: "rgb(0,0,128)",
                        color: "#fff",
                      },
                      contentArrowStyle: {
                        borderRight: "7px solid  rgb(0,0,128)",
                      },
                      date: "2011 - 2013",
                      iconStyle: {
                        background: "rgb(233, 30, 99)",
                        color: "#fff",
                      },
                      icon: l.a.createElement(q.a, null),
                    },
                    l.a.createElement(
                      "h3",
                      { className: "vertical-timeline-element-title" },
                      "UNIMAR - Universidade de Marilia, Marilia-SP (2011-2013)"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Tecnologia em Análise e Desenvolvimento de Sistemas, Tecnologia da Informação."
                    )
                  ),
                  l.a.createElement(x.VerticalTimelineElement, {
                    iconStyle: {
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    },
                    icon: l.a.createElement(L.a, null),
                  })
                )
              )
            );
          }),
        B = t(70),
        M = t(68);
      t(73), t(55);
      var C = function () {
          var e = o.footerMessage,
            a = o.emailAddress;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "h2",
              { className: "display-4 pb-3 text-center" },
              "Entrar em contato"
            ),
            l.a.createElement(
              "p",
              { className: "lead text-center pb-3" },
              e,
              ", ",
              l.a.createElement("a", { href: "mailto:".concat(a) }, a),
              "."
            )
          );
        },
        O = function () {
          var e = o.showGetInTouch,
            a = Object(n.useState)({ backgroundColor: "#f5f5f5" }),
            t = Object(E.a)(a, 1)[0];
          return l.a.createElement(
            "footer",
            { style: t, className: "mt-auto py-5 text-center " },
            l.a.createElement(
              d.a,
              null,
              e && l.a.createElement(C, null),
              l.a.createElement("i", { className: "fas fa-code" }),
              " com ",
              l.a.createElement("i", { className: "fas fa-heart" }),
              " por",
              " ",
              l.a.createElement(
                "a",
                {
                  className: "badge badge-dark",
                  rel: "noopener",
                  href: "https://github.com/danilonelder",
                  "aria-label": "My GitHub",
                },
                "Danilo Nelder"
              ),
              " ",
              "using ",
              l.a.createElement("i", { className: "fab fa-react" })
            )
          );
        },
        H = "undefined" !== typeof window ? n.useLayoutEffect : n.useEffect,
        I = "undefined" !== typeof window;
      function V(e) {
        var a = e.element,
          t = e.useWindow;
        if (!I) return { x: 0, y: 0 };
        var n = (a ? a.current : document.body).getBoundingClientRect();
        return t
          ? { x: window.scrollX, y: window.scrollY }
          : { x: n.left, y: n.top };
      }
      function F(e, a, t, l, r) {
        var i = Object(n.useRef)(V({ useWindow: l })),
          c = null,
          s = function () {
            var a = V({ element: t, useWindow: l });
            e({ prevPos: i.current, currPos: a }), (i.current = a), (c = null);
          };
        H(function () {
          if (I) {
            var e = function () {
              r ? null === c && (c = setTimeout(s, r)) : s();
            };
            return (
              window.addEventListener("scroll", e),
              function () {
                window.removeEventListener("scroll", e), c && clearTimeout(c);
              }
            );
          }
        }, a);
      }
      F.defaultProps = { deps: [], element: !1, useWindow: !1, wait: null };
      var D = function (e) {
          var a = l.a.useState(null),
            t = Object(E.a)(a, 2),
            n = t[0],
            r = t[1];
          return (
            l.a.useEffect(
              function () {
                var a = e.current,
                  t = new ResizeObserver(function (e) {
                    e.forEach(function (e) {
                      r(e.contentRect);
                    });
                  });
                return (
                  t.observe(a),
                  function () {
                    t.unobserve(a);
                  }
                );
              },
              [e]
            ),
            n
          );
        },
        _ = t(72),
        K = t(35),
        W = l.a.forwardRef(function (e, a) {
          var t = o.showBlog,
            r = o.FirstName,
            i = Object(n.useState)(!0),
            s = Object(E.a)(i, 2),
            m = s[0],
            u = s[1],
            d = Object(n.useState)(0),
            g = Object(E.a)(d, 2),
            f = g[0],
            b = g[1],
            p = l.a.useRef(),
            h = D(p),
            v = h ? h.bottom : 0;
          return (
            F(
              function (e) {
                e.prevPos;
                var t = e.currPos;
                h &&
                  (t.y + a.current.offsetTop - h.bottom > 5 ? u(!0) : u(!1),
                  b(t.y));
              },
              [v]
            ),
            l.a.useEffect(
              function () {
                h && (v - f >= a.current.offsetTop ? u(!1) : u(!0));
              },
              [v, h, a, f]
            ),
            l.a.createElement(
              _.a,
              {
                ref: p,
                className: " fixed-top  ".concat(
                  m ? "navbar-transparent" : "navbar-white"
                ),
                expand: "lg",
              },
              l.a.createElement(
                _.a.Brand,
                { className: "brand", href: "/#home" },
                "<".concat(r, " />")
              ),
              l.a.createElement(_.a.Toggle, {
                "aria-controls": "basic-navbar-nav",
                className: "toggler",
              }),
              l.a.createElement(
                _.a.Collapse,
                { id: "basic-navbar-nav" },
                l.a.createElement(
                  K.a,
                  { className: "mr-auto" },
                  t &&
                    l.a.createElement(
                      K.a.Link,
                      { className: "nav-link lead" },
                      l.a.createElement(c.b, { to: "/blog" }, "Blog")
                    ),
                  l.a.createElement(
                    K.a.Link,
                    { className: "nav-link lead", href: "/#experience" },
                    "Career"
                  ),
                  l.a.createElement(
                    K.a.Link,
                    {
                      className: "nav-link lead",
                      href: "https://docs.google.com/document/d/1vBEH6xzIcDwdo1BPjl2NSWG5Fg9sVCbxo1MYtLTD6kY/edit",
                      target: "_blank",
                      rel: "noreferrer noopener",
                    },
                    "Resume"
                  ),
                  l.a.createElement(
                    K.a.Link,
                    {
                      className: "nav-link lead",
                      href: "https://docs.google.com/document/d/1pom_Q7UKB-MRUwrJlf2aRbjKgHk9P54weOXwB1B_9no/edit",
                      target: "_blank",
                      rel: "noreferrer noopener",
                    },
                    "Currículo"
                  ),
                  l.a.createElement(
                    K.a.Link,
                    { className: "nav-link lead", href: "/#aboutme" },
                    "About"
                  ),
                  l.a.createElement(
                    K.a.Link,
                    { className: "nav-link lead", href: "/#skills" },
                    "Skills"
                  )
                )
              )
            )
          );
        }),
        G = t(116),
        U = t(173),
        z = t(172);
      var Q = function (e) {
        var a = e.skill,
          t = e.value,
          n = e.isScrolled;
        return l.a.createElement(
          "div",
          { style: { width: "95%" } },
          l.a.createElement("p", { className: "lead mb-1 mt-2" }, a),
          l.a.createElement(z.a, {
            className: n ? " progress-bar-animation" : "progress",
            now: t,
          })
        );
      };
      function J(e) {
        var a = e.skills,
          t = e.isScrolled;
        return l.a.createElement(
          l.a.Fragment,
          null,
          a.map(function (e, a) {
            return l.a.createElement(Q, {
              key: "".concat(e, "-").concat(a),
              skill: e.name,
              value: e.value,
              isScrolled: t,
            });
          })
        );
      }
      var Z = function (e) {
        var a = e.skills,
          t = e.isScrolled;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            M.a,
            { xs: 12, md: 6 },
            l.a.createElement(J, {
              skills: a.slice(0, Math.floor(a.length / 2)),
              isScrolled: t,
            })
          ),
          l.a.createElement(
            M.a,
            { xs: 12, md: 6 },
            l.a.createElement(J, {
              skills: a.slice(Math.floor(a.length / 2), a.length),
              isScrolled: t,
            })
          )
        );
      };
      var X = function () {
          var e = o.hardSkills,
            a = o.softSkills,
            t = l.a.useRef(),
            n = l.a.useState(!1),
            r = Object(E.a)(n, 2),
            i = r[0],
            c = r[1];
          return (
            F(
              function (e) {
                e.prevPos;
                var a = e.currPos;
                !i && a.y - 400 < 0 && c(!0);
              },
              [],
              t
            ),
            l.a.createElement(
              g.a,
              { ref: t, fluid: !0, className: "bg-white m-0", id: "skills" },
              l.a.createElement(
                d.a,
                { className: " p-5 " },
                l.a.createElement(
                  "h2",
                  { ref: t, className: "display-4 pb-5 text-center" },
                  "Skills"
                ),
                l.a.createElement(
                  U.a,
                  {
                    className: "skills-tabs",
                    defaultActiveKey: "hard-skills",
                    id: "skills-tabs",
                  },
                  l.a.createElement(
                    G.a,
                    {
                      tabClassName: "skills-tab  ",
                      eventKey: "hard-skills",
                      title: "Technical Skills",
                    },
                    l.a.createElement(
                      B.a,
                      { className: "pt-3 px-1" },
                      l.a.createElement(Z, { skills: e, isScrolled: i })
                    )
                  ),
                  l.a.createElement(
                    G.a,
                    {
                      tabClassName: "skills-tab ",
                      eventKey: "soft-skills",
                      title: "Soft Skills",
                    },
                    l.a.createElement(
                      B.a,
                      { className: "pt-3 px-1" },
                      l.a.createElement(Z, { skills: a, isScrolled: i })
                    )
                  )
                )
              )
            )
          );
        },
        Y = t(174),
        $ = function e(a) {
          var t = this,
            r = a.title,
            i = a.image,
            c = a.description;
          Object(Y.a)(this, e),
            (this.list = []),
            (this.addParagraph = function (e) {
              return (
                t.list.push(
                  l.a.createElement(
                    "p",
                    { key: t.list.length, className: "lead" },
                    e
                  )
                ),
                t
              );
            }),
            (this.addHeading = function (e) {
              return (
                t.list.push(
                  l.a.createElement(
                    n.Fragment,
                    { key: t.list.length },
                    l.a.createElement("h1", { className: "" }, e),
                    l.a.createElement("hr", null)
                  )
                ),
                t
              );
            }),
            (this.getBlog = function () {
              return l.a.createElement(
                "div",
                { className: "container-lg" },
                t.list
              );
            }),
            (this.title = r),
            (this.image = i),
            (this.description = c);
        },
        ee = [],
        ae = new $({
          title: "My First Blog",
          image: "img",
          description:
            "Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!",
        })
          .addHeading("Heading")
          .addParagraph(
            "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
          )
          .addParagraph(
            "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
          ),
        te = new $({
          title: "My Second Blog",
          image: "img",
          description:
            "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?",
        })
          .addHeading("Heading")
          .addParagraph(
            "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
          )
          .addParagraph(
            "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
          )
          .addHeading("New Heading")
          .addParagraph(
            "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
          )
          .addParagraph(
            "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
          );
      ee.push(te), ee.push(ae);
      var ne = ee,
        le = function (e) {
          return l.a.createElement(
            "div",
            { className: "container-lg mt-5 bg-blue" },
            l.a.createElement("h1", { className: "text-center" }, "Blogs"),
            ne.map(function (e, a) {
              return l.a.createElement(re, {
                key: a,
                title: e.title,
                description: e.description,
                index: a,
              });
            })
          );
        },
        re = function (e) {
          var a = e.index,
            t = e.title,
            n = (e.image, e.description);
          return l.a.createElement(
            "div",
            { className: "m-5" },
            l.a.createElement(
              "div",
              { className: "" },
              l.a.createElement(
                "div",
                { className: "row" },
                l.a.createElement("div", { className: "col-4 col-lg-12" }),
                l.a.createElement(
                  "div",
                  { className: "col-8 col-lg-12" },
                  l.a.createElement(
                    "div",
                    { className: "" },
                    l.a.createElement("h1", { className: "" }, t),
                    l.a.createElement("p", { className: "lead" }, n),
                    l.a.createElement(
                      c.b,
                      { to: "".concat("", "blog/").concat(a) },
                      "Read more...",
                      " "
                    )
                  )
                )
              ),
              l.a.createElement("hr", null)
            )
          );
        },
        ie = function (e) {
          var a = e.match.params.id,
            t = ne[a];
          return l.a.createElement(
            "div",
            { className: "container-lg mt-5" },
            t &&
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "h1",
                  { className: "display-2 text-center" },
                  t.title
                ),
                l.a.createElement("img", {
                  className: "img-fluid mb-2",
                  src: t.image,
                  alt: t.title,
                }),
                t.getBlog()
              ),
            !t &&
              l.a.createElement(
                "h1",
                { className: "display-1 text-center" },
                "404 - Page not found"
              )
          );
        },
        ce = t(280),
        se = o.avatarRedirectUrl,
        oe = o.showNavigationbar,
        me = o.showBlog,
        ue = o.showSkills,
        de = l.a.forwardRef(function (e, a) {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(f, { ref: a }),
            l.a.createElement(S, null),
            ue && l.a.createElement(X, null),
            l.a.createElement(A, null)
          );
        }),
        ge = function () {
          var e = l.a.useRef();
          return l.a.createElement(
            ce.a,
            { avatarRedirectUrl: se },
            l.a.createElement(
              c.a,
              { basename: "/" },
              oe && l.a.createElement(W, { ref: e }),
              l.a.createElement(s.a, {
                path: "/",
                exact: !0,
                component: function () {
                  return l.a.createElement(de, { ref: e });
                },
              }),
              me &&
                l.a.createElement(s.a, {
                  path: "/blog",
                  exact: !0,
                  component: le,
                }),
              me &&
                l.a.createElement(s.a, { path: "/blog/:id", component: ie }),
              l.a.createElement(O, null)
            )
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(l.a.createElement(ge, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    64: function (e, a, t) {
      e.exports = t.p + "static/media/resume.pdf";
    },
  },
  [[178, 1, 2]],
]);
//# sourceMappingURL=main.ada41aa4.chunk.js.map
