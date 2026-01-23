import{$ as c,a as m,r as l,j as d}from"./iframe-d-FQpM90.js";import{C as n}from"./Calendar-JAvWjTTy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-SK4YBSYr.js";import"./Button-CQtK7RQv.js";import"./utils-CTrWZFVM.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7DESwR-.js";import"./useFocusRing-DI4CuVxJ.js";import"./index-Ccbx2rrI.js";import"./index-B0n8z5FV.js";import"./useLabels-DCiGcPnN.js";import"./useButton-ONss29nc.js";import"./RSPContexts-36mIdLbY.js";import"./Text-BU1xEAD-.js";import"./useDateFormatter-CFQ14hzZ.js";import"./useControlledState-DT8flL-3.js";import"./useLocalizedStringFormatter-CKeA94dv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BS41toWr.js";import"./useEvent-CkmhN7CQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DkUt8NOh.js";import"./VisuallyHidden-C749xTmY.js";import"./clsx-Ciqy0D92.js";import"./Button-XCmFSPiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DnVlYLjp.js";import"./createLucideIcon-Bz-p2P2k.js";import"./chevron-left-SQdbUdrZ.js";import"./chevron-right-CLgJCTAm.js";import"./Heading-Cqk24h5X.js";import"./FieldError-BjEJz6Ju.js";import"./Text-CFvohxCr.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
