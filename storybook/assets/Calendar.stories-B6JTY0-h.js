import{$ as c,a as m,r as l,j as d}from"./iframe-BhyhdtXP.js";import{C as n}from"./Calendar-CUyapt39.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-hnHxBDs1.js";import"./Button-C9H7bBoo.js";import"./utils-CGWlpFgY.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdJ24Yzp.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./RSPContexts-pAilTGuB.js";import"./Text-B-Mbjzpq.js";import"./useDateFormatter-DYIDdDjm.js";import"./useControlledState-Dx8jPu5Z.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ofMRLXa5.js";import"./useEvent-lYhLdKrQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dr1wl7PX.js";import"./VisuallyHidden-C-jWiPOY.js";import"./clsx-Ciqy0D92.js";import"./Button-RHoYggw3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./createLucideIcon-Cz3c_aCr.js";import"./chevron-left-CuDu90OY.js";import"./chevron-right-CMfBGv4G.js";import"./Heading-aEQ5rkp1.js";import"./FieldError-DCeVhp7S.js";import"./Text-jDKA3oAD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
