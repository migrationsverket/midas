import{$ as c,a as m,r as l,j as d}from"./iframe-Ft30p-9G.js";import{C as n}from"./Calendar-DxUEH6Kp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B10pWhx7.js";import"./Button-C-EJ5lIE.js";import"./utils-9foVijX8.js";import"./clsx-B-dksMZM.js";import"./Hidden-BvmG-LpB.js";import"./useFocusRing-Daa2jsSP.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./RSPContexts-c5guVd-d.js";import"./Text-FkyfMeaB.js";import"./useDateFormatter-DP4-RmDp.js";import"./useControlledState-BoeB8-LH.js";import"./useLocalizedStringFormatter-Bn-aGXyh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CH1GfMA0.js";import"./useEvent-D1GkMq6I.js";import"./getScrollParent-D-S2JtE9.js";import"./scrollIntoView-DnLyLCcJ.js";import"./useDescription-Bw7Qhe2x.js";import"./VisuallyHidden-BmzQFOM6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-UqsMaU2R.js";import"./createLucideIcon-D4F6iW4h.js";import"./chevron-right-D9wuK_bb.js";import"./Button-CEZ1lvwe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./Heading-ghBbGpaI.js";import"./FieldError-DXrI8o23.js";import"./Text-C3E5lXGF.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
