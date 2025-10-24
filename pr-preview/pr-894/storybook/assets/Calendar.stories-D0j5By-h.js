import{$ as S,r as k,j as y}from"./iframe-ChriHfRz.js";import{C as s}from"./Calendar-BDUX1zY5.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BcQnluO0.js";import"./Button-D3GS0Foh.js";import"./utils-NlyHr12J.js";import"./clsx-B-dksMZM.js";import"./Hidden-0BGnOEK5.js";import"./useFocusRing-DumsLaxs.js";import"./index-CwCJkZOP.js";import"./index-DuyMh8Ep.js";import"./useLabels-Cdo3YkMo.js";import"./useButton-CUC4v2hj.js";import"./RSPContexts-CCjzDUiJ.js";import"./Text-CFBJlnAp.js";import"./useDateFormatter-CWwAaoWI.js";import"./useControlledState-_Fqm2YEq.js";import"./useLocalizedStringFormatter-BgEKAS5Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BMt5l3wp.js";import"./useEvent-J4XnAaqy.js";import"./getScrollParent-BpZY8Scv.js";import"./scrollIntoView-DidsSNjO.js";import"./useDescription-ClBBxyt-.js";import"./VisuallyHidden-BJr1c5_d.js";import"./clsx-Ciqy0D92.js";import"./Button-sPUZ2dhd.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-CaAuCsQL.js";import"./chevron-right-B7ubFYal.js";import"./Heading-DKEpWMNH.js";import"./FieldError-DaqflnxE.js";import"./Text-B81nQ38B.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
