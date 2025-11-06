import{$ as S,r as k,j as y}from"./iframe-Crmw0i2R.js";import{C as s}from"./Calendar-TB6g2onx.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-oyvQQRtn.js";import"./Button-B7mrt-RF.js";import"./utils-D5GCa4v0.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dq_Oeqgo.js";import"./useFocusRing-CufPa_ia.js";import"./index-eeEc0rA-.js";import"./index-XJiICI-O.js";import"./useLabels-CHYHYSLh.js";import"./useButton-pXVmfm4c.js";import"./RSPContexts-DNo1cUEl.js";import"./Text-lw_cTHJD.js";import"./useDateFormatter-eBqHnhO7.js";import"./useControlledState-DR8bVkx4.js";import"./useLocalizedStringFormatter-D66cuJKB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CK1XqtxY.js";import"./useEvent-Duov2oFI.js";import"./getScrollParent-D98c07zd.js";import"./scrollIntoView-CUjmehcn.js";import"./useDescription-tWqwXxHM.js";import"./VisuallyHidden-DDxs1PYy.js";import"./clsx-Ciqy0D92.js";import"./Button-B5i5HqCD.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BeU89d5s.js";import"./chevron-right-BarzIo3q.js";import"./Heading-rS7Jb08h.js";import"./FieldError-DBJxWroZ.js";import"./Text-B1OVS-_0.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
