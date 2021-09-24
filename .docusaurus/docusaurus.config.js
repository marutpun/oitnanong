export default {
  "title": "โรงเรียนวัดนาหนอง",
  "tagline": "แหล่งรวมบริการและข้อมูลที่ดีที่สุดเกี่ยวกับโรงเรียน",
  "url": "https://watnanong.netlify.app",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "สำนักงานเขตพื้นที่การศึกษาประถมศึกษาราชบุรี เขต 1",
  "projectName": "oitnanong",
  "customFields": {
    "fullTitle": "โรงเรียนวัดนาหนอง (วิธานราษฎร์อนุกูล)",
    "address": "หมู่ 2 ตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี 70000",
    "bannerImg": "unsplash-teamwork.jpg",
    "fbId": 102432438057537
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\marut.punsakorn\\Desktop\\oitnanong\\sidebars.js",
          "editUrl": "https://github.com/marutpun/oitnanong/edit/master"
        },
        "blog": false,
        "theme": {
          "customCss": [
            "C:\\Users\\marut.punsakorn\\Desktop\\oitnanong\\src\\css\\foundation.min.css",
            "C:\\Users\\marut.punsakorn\\Desktop\\oitnanong\\src\\css\\custom.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "โรงเรียนวัดนาหนอง",
      "logo": {
        "alt": "โรงเรียนวัดนาหนอง",
        "src": "img/logo-obec.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "OIT"
        },
        {
          "to": "/people",
          "label": "บุคลากร",
          "position": "left"
        },
        {
          "to": "/contact",
          "label": "ติดต่อ",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "&copy; 2021 Wat Na Nong School. All Rights Reserved.",
      "style": "light",
      "links": []
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};