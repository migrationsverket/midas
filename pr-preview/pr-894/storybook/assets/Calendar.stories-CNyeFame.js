import{$ as S,r as k,j as y}from"./iframe-BCv2rzr9.js";import{C as s}from"./Calendar-Cv6QLI8z.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DlCzIXwb.js";import"./Button-D5kuCja3.js";import"./utils-CDKvZeof.js";import"./clsx-B-dksMZM.js";import"./Hidden-BenjnVYI.js";import"./useFocusRing-BNESqCRc.js";import"./index-Dx8nmKY4.js";import"./index-Bb_2lGIb.js";import"./useLabels-DxQXfiDI.js";import"./useButton-QTAKkxRm.js";import"./RSPContexts-BSw-ShGO.js";import"./Text-BDHSM18P.js";import"./useDateFormatter-B6dtg3Bi.js";import"./useControlledState-DVm64QZU.js";import"./useLocalizedStringFormatter-B59lqAQj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CBWUYgSP.js";import"./useEvent-CyeZcoaa.js";import"./getScrollParent-DfKXlfx2.js";import"./scrollIntoView-GBiVTFAr.js";import"./useDescription-h4aCqBHj.js";import"./VisuallyHidden-hKiY2s8z.js";import"./clsx-Ciqy0D92.js";import"./Button-D2vcUsmS.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DWu9pD4R.js";import"./chevron-right-Dw7BKkhd.js";import"./Heading-DVn6apyw.js";import"./FieldError-Cn9fRNta.js";import"./Text-D1yQUYUA.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
