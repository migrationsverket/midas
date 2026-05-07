import{$ as c,a as m,r as l,j as d}from"./iframe-BANbOrjL.js";import{C as n}from"./Calendar-Cwuw52J2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cl7oY_TV.js";import"./Button-CFtjy4Ss.js";import"./utils-54peqJ8a.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-0UQMnM.js";import"./useFocusRing-DbV3xYYs.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./RSPContexts-BniJiskW.js";import"./Text-1nbNgZtg.js";import"./useDateFormatter-DNKaTZ3J.js";import"./useControlledState-yh8y5GNM.js";import"./useLocalizedStringFormatter-CQ9MV6Yb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-LXS8-HCX.js";import"./useEvent-CZNt73ky.js";import"./getScrollParent-DmzKjg3u.js";import"./scrollIntoView-BwHcSgh9.js";import"./useDescription-BXc5IFCt.js";import"./VisuallyHidden-DT3xn_Oy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-I6lHbI0A.js";import"./createLucideIcon-mdFywCsT.js";import"./chevron-right-DADo9Wm4.js";import"./Button-Dov5qDwf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./Heading-BB-a4vZh.js";import"./FieldError-Dz4Gx-Yr.js";import"./Text-Ckl3Bse6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
