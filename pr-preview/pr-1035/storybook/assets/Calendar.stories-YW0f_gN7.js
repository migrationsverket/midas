import{$ as c,a as m,r as l,j as d}from"./iframe-BQBOUe4L.js";import{C as n}from"./Calendar-CqjzA7E0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BFNQDcw6.js";import"./Button-CvEjFmDh.js";import"./utils-CRMkcUEf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlSKSdAn.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./RSPContexts-CvjO9LUS.js";import"./Text-4aw7o7le.js";import"./useDateFormatter-BUmYyzwH.js";import"./useControlledState-DM-5-Rrt.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-of8x0zcV.js";import"./useEvent-5ECDfKWj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C0HCyUwc.js";import"./VisuallyHidden-DljAyihR.js";import"./clsx-Ciqy0D92.js";import"./Button-Cim8R03s.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./createLucideIcon-DCYizV4H.js";import"./chevron-left-BuBFT9hp.js";import"./chevron-right-w8kUp_D3.js";import"./Heading-DYmoF48W.js";import"./FieldError-U_WPsfks.js";import"./Text-B_t0zTpM.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
