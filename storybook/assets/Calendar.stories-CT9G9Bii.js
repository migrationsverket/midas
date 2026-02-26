import{$ as c,a as m,r as l,j as d}from"./iframe-BjXHvzLV.js";import{C as n}from"./Calendar-DmKjwY-o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-4yJyLZDN.js";import"./Button-D655U3jT.js";import"./utils-C7TofeRY.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwrmmuBw.js";import"./useFocusRing-ChtlY4t2.js";import"./index-c1mE3GS_.js";import"./index-fRYLtIJx.js";import"./useLabels-CBgCNECm.js";import"./useButton-DTsHOwZn.js";import"./RSPContexts-By0c3k33.js";import"./Text-G6RzhBRh.js";import"./useDateFormatter-CbIbhnFj.js";import"./useControlledState-5N7ivM8O.js";import"./useLocalizedStringFormatter-B09DX6oS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZPe6igQ_.js";import"./useEvent-bA9CQz3i.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-69qIWb5l.js";import"./VisuallyHidden-DEnBWTBz.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck6rrEvj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DGt-YCd6.js";import"./createLucideIcon-BMYiFBuo.js";import"./chevron-left-BiJ3vx95.js";import"./chevron-right-DwR0g1KC.js";import"./Heading-tCV9TyHz.js";import"./FieldError-BRuLTmCO.js";import"./Text-B60LJh84.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
