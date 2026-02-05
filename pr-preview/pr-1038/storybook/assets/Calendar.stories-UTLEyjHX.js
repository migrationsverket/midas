import{$ as c,a as m,r as l,j as d}from"./iframe-CgfDwMsT.js";import{C as n}from"./Calendar-DEcmo3ut.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BVzpOtu9.js";import"./Button-C7WplXtK.js";import"./utils-CLuUze_r.js";import"./clsx-B-dksMZM.js";import"./Hidden-CJELcxwQ.js";import"./useFocusRing-aa-V_nwI.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./RSPContexts-DvQiZ2rE.js";import"./Text-E6YbvuHS.js";import"./useDateFormatter-BKfNxZfe.js";import"./useControlledState-iA0OTCu9.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bvtecmme.js";import"./useEvent-e-NwapiS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CrupViey.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./clsx-Ciqy0D92.js";import"./Button-C6uLPlVc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzThpmxU.js";import"./createLucideIcon-CwSVauo5.js";import"./chevron-left-BZHUOr1J.js";import"./chevron-right-DNeLgHLK.js";import"./Heading-DvDu4lhU.js";import"./FieldError-B7h73jse.js";import"./Text-CaslyU5o.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
