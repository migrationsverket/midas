import{$ as S,r as k,j as y}from"./iframe-lyzaGRHA.js";import{C as s}from"./Calendar-puENQX-1.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DO5QtxpJ.js";import"./Button-D3AyLkaZ.js";import"./utils-C7wovLpb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDpmZWBU.js";import"./useFocusRing-CLIPrG0K.js";import"./index-CTd1oaJd.js";import"./index-GLN7f3ML.js";import"./useLabels-HqqUYDPd.js";import"./useButton-Dsvp3KlC.js";import"./RSPContexts-JUZWaqbP.js";import"./Text-1bueN35Z.js";import"./useDateFormatter-DLEvYrAz.js";import"./useControlledState-CfoD0oIN.js";import"./useLocalizedStringFormatter-DELihZWt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Bm3xpMy6.js";import"./useEvent-Dr3p5Ipk.js";import"./getScrollParent-SGv52Bk1.js";import"./scrollIntoView-BzEefclG.js";import"./useDescription-BwKEc6p_.js";import"./VisuallyHidden-evOIuwz9.js";import"./clsx-Ciqy0D92.js";import"./Button-PCPxEjB6.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-5r-ReWy4.js";import"./chevron-right-b_1dTjjX.js";import"./Heading-BmLSUG0J.js";import"./FieldError-C67nFjxq.js";import"./Text-0qCAats-.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ar=["Primary","Disabled","Invalid","UnavailableWeekends"];export{e as Disabled,o as Invalid,r as Primary,a as UnavailableWeekends,ar as __namedExportsOrder,or as default};
