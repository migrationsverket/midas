import{$ as S,r as k,j as y}from"./iframe-tJ1bQdC5.js";import{C as s}from"./Calendar-Cwau5zgs.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-e7X1F7ua.js";import"./Button-BRT3HrV0.js";import"./utils-Dtxack5N.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXq-jgdK.js";import"./useFocusRing-4WojVJSR.js";import"./index-DkpH3wrQ.js";import"./index-hqimuXeh.js";import"./useLabels-Da4Pfe9K.js";import"./useButton-DAv_0PdS.js";import"./RSPContexts-BMGwmn_l.js";import"./Text-BEYvTD8y.js";import"./useDateFormatter-CF0fuYD3.js";import"./useControlledState-u6N7Zwya.js";import"./useLocalizedStringFormatter-o71fyDnk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DmodTaVU.js";import"./useEvent-CVTaPBLg.js";import"./getScrollParent-CzTp92yE.js";import"./scrollIntoView-BzzKEx0E.js";import"./useDescription-HWLvDS9e.js";import"./VisuallyHidden-D2Nh2DP9.js";import"./clsx-Ciqy0D92.js";import"./Button-DIbFlLKN.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DztohNQ2.js";import"./chevron-right-DB9v2lTD.js";import"./Heading-DKkJScvs.js";import"./FieldError-Br8flm-d.js";import"./Text-CAeSaTI6.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
