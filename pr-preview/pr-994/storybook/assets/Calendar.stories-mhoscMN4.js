import{$ as p,a as m,r as l,j as d}from"./iframe-Cqv18ImU.js";import{C as n}from"./Calendar-E3pEAz4a.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQf3KEHy.js";import"./Button-CHZfUzDl.js";import"./utils-DzbyOGZ_.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8Gg8WaH.js";import"./useFocusRing-V1CF2lyh.js";import"./index-BZmzkW00.js";import"./index-Nt-ezTyj.js";import"./useLabels-CNsjRHPU.js";import"./useButton-DDIuuTKh.js";import"./RSPContexts-DOgGE-X8.js";import"./Text-B830MCwt.js";import"./useDateFormatter-4vBBJiHf.js";import"./useControlledState-DY68Wkyd.js";import"./useLocalizedStringFormatter-7YQVF9yJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CahCd_pP.js";import"./useEvent-DxBQLibX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BGQ7yS04.js";import"./VisuallyHidden-BRuyO-og.js";import"./clsx-Ciqy0D92.js";import"./Button-DCnMOEqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAA2MslF.js";import"./createLucideIcon-Dvn_rsFU.js";import"./chevron-right-BgniXH2B.js";import"./Heading-B-3IvVIv.js";import"./FieldError-Cwk39N_k.js";import"./Text-DteYonWN.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
