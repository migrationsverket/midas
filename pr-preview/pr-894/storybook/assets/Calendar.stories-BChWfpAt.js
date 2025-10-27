import{$ as S,r as k,j as y}from"./iframe-DHe7O3YB.js";import{C as s}from"./Calendar-DrF_vf4V.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-W97ODj50.js";import"./Button-BQbFjbVy.js";import"./utils-uG4DrbYs.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwKN-Ct7.js";import"./useFocusRing-DNdg1RO0.js";import"./index-BpDGib3c.js";import"./index-BzXfAI-e.js";import"./useLabels-ByK8mPta.js";import"./useButton-CTl0n0ca.js";import"./RSPContexts-BqA7yCGR.js";import"./Text-fzIvjG6X.js";import"./useDateFormatter-B1d32hRK.js";import"./useControlledState-Cr1hZmrx.js";import"./useLocalizedStringFormatter-s0APVaC7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-3f09mw3i.js";import"./useEvent-dyC_FZrC.js";import"./getScrollParent-CvBDZYkN.js";import"./scrollIntoView-BfnXnyY_.js";import"./useDescription-BnPwjth8.js";import"./VisuallyHidden-ClxVrDZx.js";import"./clsx-Ciqy0D92.js";import"./Button-zyoNupAk.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BLSjYB_Y.js";import"./chevron-right-Bcf6kgzo.js";import"./Heading-C40971bE.js";import"./FieldError-DxPlW7kP.js";import"./Text-BWJyzLHL.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
