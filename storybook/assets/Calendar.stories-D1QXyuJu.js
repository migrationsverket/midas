import{$ as S,r as k,j as y}from"./iframe-DNhJcKOc.js";import{C as s}from"./Calendar-BsMX6BFf.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Ddni1TNY.js";import"./Button-B6wJ7DBH.js";import"./utils-DitHaya_.js";import"./clsx-B-dksMZM.js";import"./Hidden-C7LJEloq.js";import"./useFocusRing-jIyEUab9.js";import"./index-uE8jHaBb.js";import"./index-DqiuFa4V.js";import"./useLabels-DTr_W66W.js";import"./useButton-Dab2YggW.js";import"./RSPContexts-DdhM_7fS.js";import"./Text-CVNupFde.js";import"./useDateFormatter-BAk45-CJ.js";import"./useControlledState-D0y5cQqF.js";import"./useLocalizedStringFormatter-D0VL0RZM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-D4wTKJoB.js";import"./useEvent-BZg6Yeym.js";import"./getScrollParent-DYyOR5EO.js";import"./scrollIntoView-DcZLN0pk.js";import"./useDescription-CV-YOn9H.js";import"./VisuallyHidden-DE6Pvd80.js";import"./clsx-Ciqy0D92.js";import"./Button-9v9ZA1Mg.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BWOE9bS1.js";import"./chevron-right-CQXvKrn0.js";import"./Heading-COV4--p8.js";import"./FieldError-DtvuMCyb.js";import"./Text-Dm8XbzGN.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
