import{$ as S,r as k,j as y}from"./iframe-DcAJ2ZJg.js";import{C as s}from"./Calendar-BURPKhfv.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BJ0Y9YLQ.js";import"./Button-CnA_liPh.js";import"./utils-DfWfZ4K6.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjKyp5I7.js";import"./useFocusRing-DoVCJMpb.js";import"./index-BEn_fgqG.js";import"./index-BImlJy0D.js";import"./useLabels-p4_MJdfd.js";import"./useButton-ipB-6l2O.js";import"./RSPContexts-IxICh8ZI.js";import"./Text-CoOEDDOK.js";import"./useDateFormatter-CNeBorIo.js";import"./useControlledState-SuDFX2cU.js";import"./useLocalizedStringFormatter-CbwPFicv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DHhpkC-F.js";import"./useEvent-Dha3ld6E.js";import"./getScrollParent-CNQi9Fa9.js";import"./scrollIntoView-2p82eA0E.js";import"./useDescription-qE97LE4s.js";import"./VisuallyHidden-C8x_6mbh.js";import"./clsx-Ciqy0D92.js";import"./Button-DeeuRJg4.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-D3RYulYr.js";import"./chevron-right-CihaTuXH.js";import"./Heading-C8AMh7UW.js";import"./FieldError-sTgzv2bL.js";import"./Text-CzOfImiC.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
