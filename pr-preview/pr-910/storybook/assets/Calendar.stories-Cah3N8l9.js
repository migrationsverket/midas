import{$ as S,r as k,j as y}from"./iframe-D6bwu_M6.js";import{C as s}from"./Calendar-DaDpwnsd.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BqUgLKp1.js";import"./Button-CK9UOEzr.js";import"./utils-DupMYAax.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGLzVhhq.js";import"./useFocusRing-Cq2k40Pm.js";import"./index-CBlzRzW6.js";import"./index-CRODHNit.js";import"./useLabels-BCS-IXw5.js";import"./useButton-Dox0StIc.js";import"./RSPContexts-B3kkW0Zn.js";import"./Text-DYI1O7jb.js";import"./useDateFormatter-MIgd0w_y.js";import"./useControlledState-rhnbTvJ5.js";import"./useLocalizedStringFormatter-DiIEHiLq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-ChZM_bqa.js";import"./useEvent-D68KKf5S.js";import"./getScrollParent-XOiqouo7.js";import"./scrollIntoView-flHaUglA.js";import"./useDescription-CQRq3R5z.js";import"./VisuallyHidden-DG79wF2v.js";import"./clsx-Ciqy0D92.js";import"./Button-Dy9ld2-X.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-C7Z6_ELW.js";import"./chevron-right-WWg98Xbc.js";import"./Heading-oWcEa0FQ.js";import"./FieldError-DvkQG6pE.js";import"./Text-CEYHWnPz.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
