import{$ as S,r as k,j as y}from"./iframe-eh8mAhOf.js";import{C as s}from"./Calendar-8g0dzdEk.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-nTRAS7i5.js";import"./Button-3YRCwqOe.js";import"./utils-BjmDDRvF.js";import"./clsx-B-dksMZM.js";import"./Hidden-BCl-ioj7.js";import"./useFocusRing-EcsuLChJ.js";import"./index-BsAkrju0.js";import"./index-ecooH8O-.js";import"./useLabels-BCKar6O9.js";import"./useButton-BHUcWVvH.js";import"./RSPContexts-B0INV8jV.js";import"./Text-DCmHA0AH.js";import"./useDateFormatter-3fWd7_Zx.js";import"./useControlledState-CF9t1Cna.js";import"./useLocalizedStringFormatter-L9Wi1Mww.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BTNwkFMG.js";import"./useEvent-DTSMQPYE.js";import"./getScrollParent-D3sGm4CX.js";import"./scrollIntoView-B9q54VOH.js";import"./useDescription-ZLqideCZ.js";import"./VisuallyHidden-Ch-bS_Gj.js";import"./clsx-Ciqy0D92.js";import"./Button-CpOhuMOv.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DJMrtjwR.js";import"./chevron-right-CQm02g18.js";import"./Heading-InAs9hZ9.js";import"./FieldError-CO2PlciQ.js";import"./Text-Cp05J34U.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
