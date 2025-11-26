import{$ as p,a as m,r as l,j as d}from"./iframe-07RTUryM.js";import{C as n}from"./Calendar-BjO7NWQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-SXBPl5Yg.js";import"./Button-Dv0y-JoZ.js";import"./utils-DDlZCoEX.js";import"./clsx-B-dksMZM.js";import"./Hidden-DkxnzuZ8.js";import"./useFocusRing-COYx92Jj.js";import"./index-BcjdZjMV.js";import"./index-D6uG8lGX.js";import"./useLabels-DD2GJFDM.js";import"./useButton-B55nQo6r.js";import"./RSPContexts-Cz-G6zUG.js";import"./Text-CFGS2jnp.js";import"./useDateFormatter-Dwvuhv3C.js";import"./useControlledState-Cs7nFh0s.js";import"./useLocalizedStringFormatter-C5QLgnKh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DRNbjVLc.js";import"./useEvent-Bu-Z66ye.js";import"./getScrollParent-BVpU91Lz.js";import"./scrollIntoView-J_HIj5YT.js";import"./useDescription-B5YWaF2b.js";import"./VisuallyHidden-Cm74pgqq.js";import"./clsx-Ciqy0D92.js";import"./Button-Bog976hN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B39D6IqO.js";import"./createLucideIcon-BoFHMCBo.js";import"./chevron-right-BvJgbr4f.js";import"./Heading-DkJBZZSw.js";import"./FieldError-BmLNCWmj.js";import"./Text-5bsUq1RJ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
