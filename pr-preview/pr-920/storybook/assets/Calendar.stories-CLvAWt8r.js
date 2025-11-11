import{$ as p,a as m,r as l,j as d}from"./iframe-C1S3UI0q.js";import{C as n}from"./Calendar-CM-Z12uC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D4SCfFfv.js";import"./Button-iogE4gXn.js";import"./utils-DDXHsTpT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJe1Vr5O.js";import"./useFocusRing-CyRIiSHy.js";import"./index-DtMwqg1W.js";import"./index-9q-9abAX.js";import"./useLabels-zIJcgfCF.js";import"./useButton-Ca4j2v7e.js";import"./RSPContexts-h2hygVuJ.js";import"./Text-DHpcpzXZ.js";import"./useDateFormatter-D81-mhyy.js";import"./useControlledState-BU5hH7Ch.js";import"./useLocalizedStringFormatter-CL1671By.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-wjU1-G2X.js";import"./useEvent-ClTJe97m.js";import"./getScrollParent-Bjcd7mkO.js";import"./scrollIntoView-CJsMR2zp.js";import"./useDescription-D_-dPDWg.js";import"./VisuallyHidden-DFD9-6eR.js";import"./clsx-Ciqy0D92.js";import"./Button-BJgkfWbj.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B-9b73Xu.js";import"./chevron-right-a8jV3Bco.js";import"./Heading-BAtLrgM0.js";import"./FieldError-B79tkzHr.js";import"./Text-BWJL7Gm8.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
