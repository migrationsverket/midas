import{$ as p,a as m,r as l,j as d}from"./iframe-DLM7OJJC.js";import{C as n}from"./Calendar-DSCxd4gv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C7IUMYJf.js";import"./Button-CBWZM7hn.js";import"./utils-Cg8VeQnF.js";import"./clsx-B-dksMZM.js";import"./Hidden-sRnIF3aJ.js";import"./useFocusRing-BfFb_8Xs.js";import"./index-C6cGHGyr.js";import"./index-VUDeKwzR.js";import"./useLabels-vojnNhU5.js";import"./useButton-CFLlN0xE.js";import"./RSPContexts-BjmElr_9.js";import"./Text-Dr_1HWjJ.js";import"./useDateFormatter-BFI9dHmO.js";import"./useControlledState-B4ZGdE6T.js";import"./useLocalizedStringFormatter-De_gwEZD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-btjWIVk9.js";import"./useEvent-CsCU74as.js";import"./getScrollParent-DonKrAv1.js";import"./scrollIntoView-DcUPLUcg.js";import"./useDescription-BJBYRQLH.js";import"./VisuallyHidden-CvL4kn3L.js";import"./clsx-Ciqy0D92.js";import"./Button-D3MIvMYJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZBSwjU5.js";import"./createLucideIcon-5PLI4glS.js";import"./chevron-right-C1TRRMPR.js";import"./Heading-CDL9YwFd.js";import"./FieldError-CwZhaUl8.js";import"./Text-DWcHOJVH.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
