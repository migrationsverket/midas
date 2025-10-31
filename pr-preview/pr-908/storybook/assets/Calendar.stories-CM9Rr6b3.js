import{$ as S,r as k,j as y}from"./iframe-CD9lI7Lx.js";import{C as s}from"./Calendar-CjcIMiTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-L87fqZwd.js";import"./Button-BoQZB1gA.js";import"./utils-mcbSpjMM.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6SecSH-.js";import"./useFocusRing-Ia_tv816.js";import"./index-CTARbwJ7.js";import"./index-Bbc4kYRc.js";import"./useLabels-B2BWjGt4.js";import"./useButton-B0EYsfsT.js";import"./RSPContexts-B0mPcaFt.js";import"./Text-i7K4zqkb.js";import"./useDateFormatter-CJ8GQZU_.js";import"./useControlledState-hakXx6AJ.js";import"./useLocalizedStringFormatter-3ClkwjFY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DeoLCa42.js";import"./useEvent-DRrvch7K.js";import"./getScrollParent-BFJpvNCQ.js";import"./scrollIntoView-CK26mCAz.js";import"./useDescription-K-DSN-Ry.js";import"./VisuallyHidden-CrhZS7oA.js";import"./clsx-Ciqy0D92.js";import"./Button-DB1CCvjL.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-wdsGdP61.js";import"./chevron-right-XyLTjKUV.js";import"./Heading-DnoDMihd.js";import"./FieldError-Bz32VrOA.js";import"./Text-Bpbh6IXD.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
