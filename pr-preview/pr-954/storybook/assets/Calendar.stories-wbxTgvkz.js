import{$ as p,a as m,r as l,j as d}from"./iframe-CdI6Gw-x.js";import{C as n}from"./Calendar-CmsAz9nd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DQWXYaVI.js";import"./Button-BGSdqTKH.js";import"./utils-Dp4uK2en.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7pBTXR8.js";import"./useFocusRing-BvpIo48n.js";import"./index-ssJF5vHn.js";import"./index-CZWLL0-F.js";import"./useLabels-BGn1qwKC.js";import"./useButton-BhAYw-RT.js";import"./RSPContexts-DeJrvE8h.js";import"./Text-BUDuz-ou.js";import"./useDateFormatter-DRdvdPyw.js";import"./useControlledState-D9Me4rKQ.js";import"./useLocalizedStringFormatter-4BabvCR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CU4A-2o7.js";import"./useEvent-BmsZz-Er.js";import"./getScrollParent-DOiNHzSc.js";import"./scrollIntoView-BHz78EjI.js";import"./useDescription-DiNIrOvf.js";import"./VisuallyHidden-DWNUe8lB.js";import"./clsx-Ciqy0D92.js";import"./Button-DXIfvleB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C-D13uLG.js";import"./createLucideIcon-B7xMdt7d.js";import"./chevron-right-No_qzAUh.js";import"./Heading-C4vA8AiJ.js";import"./FieldError-DgNWY6t8.js";import"./Text-B_qeVnZd.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
