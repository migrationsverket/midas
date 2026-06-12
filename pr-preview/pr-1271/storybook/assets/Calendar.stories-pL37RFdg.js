import{$ as c,a as m,r as l,j as d}from"./iframe-CVnRxWgx.js";import{C as n}from"./Calendar-CELYpBw7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-mg-7nyua.js";import"./Button-i9ocr7Pu.js";import"./utils-CGtyN9cn.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjmPCuwM.js";import"./useFocusRing-94VK6gl0.js";import"./index-Br_PJyAP.js";import"./index-DGjZojd9.js";import"./useLabel-u8jIf097.js";import"./useLabels-DvMiIHJl.js";import"./useButton-DiNxNOYc.js";import"./RSPContexts-CE4pINDX.js";import"./Text-CIPwlNyJ.js";import"./useDateFormatter-CH7jwypy.js";import"./useControlledState-DJTyz9Tw.js";import"./useLocalizedStringFormatter-6_DEL2_r.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-rNFHZR.js";import"./useEvent-qLpbXbRS.js";import"./getScrollParent-BYv7XFLc.js";import"./scrollIntoView-Bmq2UQLA.js";import"./useDescription-DwHvhYZf.js";import"./VisuallyHidden-x3g4TarU.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DmIbYAzt.js";import"./createLucideIcon-CO_w61Gv.js";import"./chevron-right-DFySx424.js";import"./Button-BlcQlVBG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B64DUcOo.js";import"./Heading-CQ8h6NgE.js";import"./FieldError-CfE9jQyI.js";import"./Text-D7ORYKKB.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
