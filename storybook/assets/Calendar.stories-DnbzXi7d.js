import{$ as c,a as m,r as l,j as d}from"./iframe-DDkxC9AE.js";import{C as n}from"./Calendar-BdvhQW0S.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-6kKOcvAW.js";import"./Button-CUTFiFAp.js";import"./utils-Bv-3ie4X.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdbLRp3U.js";import"./useFocusRing-C43-8fCQ.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./RSPContexts-C5FShT2F.js";import"./Text-BtXc1lRV.js";import"./useDateFormatter-Cz2g75-R.js";import"./useControlledState-DDBKKIZJ.js";import"./useLocalizedStringFormatter-em54CWSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CWN_vSg7.js";import"./useEvent-DM9NFQXa.js";import"./getScrollParent-XviTZluJ.js";import"./scrollIntoView-BuO0Q3pl.js";import"./useDescription-B6KDpjFY.js";import"./VisuallyHidden-ZtpMBoq6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C1XuaUgg.js";import"./createLucideIcon-tquE4JOn.js";import"./chevron-right-Dh_vOe2i.js";import"./Button-nixYBadL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./Heading-Bh678V32.js";import"./FieldError-B9fj7azt.js";import"./Text-1G0eP0RO.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
