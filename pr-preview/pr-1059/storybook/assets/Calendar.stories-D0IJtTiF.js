import{$ as c,a as m,r as l,j as d}from"./iframe-DvdASj8M.js";import{C as n}from"./Calendar-RiTD7f8d.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DI2N6c4D.js";import"./Button-Ziwvh2At.js";import"./utils-2bkJAsr0.js";import"./clsx-B-dksMZM.js";import"./Hidden-9BXFjXWH.js";import"./useFocusRing-BaJY9r_4.js";import"./index-CQ_pr3hm.js";import"./index-CcYTU2s7.js";import"./useLabels-BdcIIg7x.js";import"./useButton-BEZYe4nN.js";import"./RSPContexts-KaeisNYM.js";import"./Text-HREkQCRS.js";import"./useDateFormatter-DTggTVj_.js";import"./useControlledState-BTi70xM1.js";import"./useLocalizedStringFormatter-yjXDy8l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-OELumoLI.js";import"./useEvent-CdPSZ4wH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DEfag5zN.js";import"./VisuallyHidden-bdeVna33.js";import"./clsx-Ciqy0D92.js";import"./Button-eMwP9vIv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9OuGGhbc.js";import"./createLucideIcon-6vu73fXR.js";import"./chevron-left-CdAGfjhr.js";import"./chevron-right-BzS91_qv.js";import"./Heading-l6wWUNtY.js";import"./FieldError-BHomaXXv.js";import"./Text-DUdz_YCU.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
