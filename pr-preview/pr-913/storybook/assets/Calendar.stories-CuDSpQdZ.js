import{$ as S,r as k,j as y}from"./iframe-BvbRhJsG.js";import{C as s}from"./Calendar-B3k6j70x.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-B3KNWswb.js";import"./Button-Bmi_wjRq.js";import"./utils-CS14vqSf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHVK8w8L.js";import"./useFocusRing-BPVAUh7v.js";import"./index-B3-53qwc.js";import"./index-BnFhduz6.js";import"./useLabels-bBfz2F1H.js";import"./useButton-Ckg5GaUx.js";import"./RSPContexts-Q5Y9ewG3.js";import"./Text-lWcGrung.js";import"./useDateFormatter-CDKL9p3o.js";import"./useControlledState-CBXFJxHg.js";import"./useLocalizedStringFormatter-DyBJTu8f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DYRGxUiV.js";import"./useEvent-DIBtdt1V.js";import"./getScrollParent-DmvlycPD.js";import"./scrollIntoView-4fLPX-y5.js";import"./useDescription-DS3a88uT.js";import"./VisuallyHidden-BaZl6s6K.js";import"./clsx-Ciqy0D92.js";import"./Button-oLX16Zh5.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BuTuzAY3.js";import"./chevron-right-r3LMY93Z.js";import"./Heading-B6O0H_WJ.js";import"./FieldError-BxDTCqc4.js";import"./Text-B2nr1LzC.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
