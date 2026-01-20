import{$ as c,a as m,r as l,j as d}from"./iframe-foa1fz1L.js";import{C as n}from"./Calendar-DNJFd9Yn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bwz5iCad.js";import"./Button-BDE-HjlG.js";import"./utils-Ev5LGgue.js";import"./clsx-B-dksMZM.js";import"./Hidden-C56sCU1_.js";import"./useFocusRing-Ablbfaap.js";import"./index-Cn_e8zWb.js";import"./index-BoAX5djW.js";import"./useLabels-DzekMX3n.js";import"./useButton-D8CDSc--.js";import"./RSPContexts-CaEO68sI.js";import"./Text-hfmE0wsb.js";import"./useDateFormatter-BiJa6Bca.js";import"./useControlledState-Dvg4iFOf.js";import"./useLocalizedStringFormatter-BRt717ju.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DJKerTt0.js";import"./useEvent-C-hGFFqh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DBUGuybl.js";import"./VisuallyHidden-Crc1dHu9.js";import"./clsx-Ciqy0D92.js";import"./Button-DRHKUhef.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRm2vV7S.js";import"./createLucideIcon-DPqkobhw.js";import"./chevron-left-Bp8dHUFz.js";import"./chevron-right-BO3wAcmU.js";import"./Heading--H7fNfSD.js";import"./FieldError-0xt68GMY.js";import"./Text-3kKEReu_.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
