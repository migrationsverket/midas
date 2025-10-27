import{$ as S,r as k,j as y}from"./iframe-DrB9qZTI.js";import{C as s}from"./Calendar-Xc1IDUn8.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-CD92XS32.js";import"./Button-CXUNspnl.js";import"./utils-CInG6W3X.js";import"./clsx-B-dksMZM.js";import"./Hidden-CfizYyXd.js";import"./useFocusRing-Bq-FvUHV.js";import"./index-D5KzPf6k.js";import"./index-DfIG-et7.js";import"./useLabels-soz90g56.js";import"./useButton-cF82fNVP.js";import"./RSPContexts-DIw6ykPW.js";import"./Text-CepI4xEo.js";import"./useDateFormatter-Cr-20_P4.js";import"./useControlledState-CIzzj-r4.js";import"./useLocalizedStringFormatter-CZ3U7jKg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-D44lhmn-.js";import"./useEvent-BKNlpUEC.js";import"./getScrollParent-Bx1KYYcF.js";import"./scrollIntoView-ANtPBZbe.js";import"./useDescription-BSAVr3Ry.js";import"./VisuallyHidden-57DYoABU.js";import"./clsx-Ciqy0D92.js";import"./Button-yBTmUS_M.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BLlFR1Nx.js";import"./chevron-right-D_sPCkVN.js";import"./Heading-Nc0xAJcY.js";import"./FieldError-Dk-uAcrK.js";import"./Text-DxFbSKvE.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
