import{$ as S,r as k,j as y}from"./iframe-typ1V0IQ.js";import{C as s}from"./Calendar-Dq1nNshw.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Es9Wlo7M.js";import"./Button-DlOEJL2A.js";import"./utils-BT_rnNQI.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMRt_srx.js";import"./useFocusRing-CeFnKk5l.js";import"./index-DGdf5RSs.js";import"./index-DKZzq6Wh.js";import"./useLabels-DX-GE65t.js";import"./useButton-Dq0CoZq_.js";import"./RSPContexts-kOKvhF6V.js";import"./Text-k1GXm9bm.js";import"./useDateFormatter-DyFG04NV.js";import"./useControlledState-CS6DPp37.js";import"./useLocalizedStringFormatter-CwZqSzqd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-C18fti5Z.js";import"./useEvent-BeGDLmoD.js";import"./getScrollParent-3F_UOTO8.js";import"./scrollIntoView-EQQ99LMb.js";import"./useDescription-CyXXGEUY.js";import"./VisuallyHidden-D1hn3oMd.js";import"./clsx-Ciqy0D92.js";import"./Button-wlqf824N.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DmGEKPD0.js";import"./chevron-right-D-SFbcOO.js";import"./Heading-DvMoKEnQ.js";import"./FieldError-DuT6Q-pN.js";import"./Text-Bfx44VR7.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
