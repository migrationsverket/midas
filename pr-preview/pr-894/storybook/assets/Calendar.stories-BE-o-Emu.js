import{$ as S,r as k,j as y}from"./iframe-odwdLjhJ.js";import{C as s}from"./Calendar-BT3QcRro.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DSFcFSmj.js";import"./Button-CHIcEKTW.js";import"./utils-BfXlgJWI.js";import"./clsx-B-dksMZM.js";import"./Hidden-f5i2DQHq.js";import"./useFocusRing-D_0n3iry.js";import"./index-gUgSV9Od.js";import"./index-Y-mQe5FE.js";import"./useLabels-Co1S2KyV.js";import"./useButton-BxE9BcYr.js";import"./RSPContexts-CU7vv0tP.js";import"./Text-D1-v39j4.js";import"./useDateFormatter-BF3aLmDH.js";import"./useControlledState-fx81Le39.js";import"./useLocalizedStringFormatter-DcZOaAjj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BZ02Qhv2.js";import"./useEvent-CCjyJx7k.js";import"./getScrollParent-SThPPMwY.js";import"./scrollIntoView-Bx0r-2kp.js";import"./useDescription-Imkgoqqx.js";import"./VisuallyHidden-Cg-saB8v.js";import"./clsx-Ciqy0D92.js";import"./Button-DUkfVRlk.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DT6ESbmV.js";import"./chevron-right-ClopaQol.js";import"./Heading-BAN08N4A.js";import"./FieldError-DM2aQdrw.js";import"./Text-Bc8jy4b7.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
