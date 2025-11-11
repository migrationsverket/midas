import{$ as p,a as m,r as l,j as d}from"./iframe-CyQuNDa_.js";import{C as n}from"./Calendar-DonvIwrs.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DNn_gfSQ.js";import"./Button-D1KGFQek.js";import"./utils-De8VIsoO.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoG65Xnl.js";import"./useFocusRing-93IF2U5F.js";import"./index-DRL4XcYu.js";import"./index-C8uVDAXw.js";import"./useLabels-BHGFLz3i.js";import"./useButton-Cx8w0lie.js";import"./RSPContexts-BMz3QfBP.js";import"./Text-Drr12cDy.js";import"./useDateFormatter-C4flBxIk.js";import"./useControlledState-Ck_EK0EF.js";import"./useLocalizedStringFormatter-ZuVYcFkz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-vpUbbsDx.js";import"./useEvent-DNQdelf8.js";import"./getScrollParent-K7GV_lSu.js";import"./scrollIntoView-Y5KcGlCw.js";import"./useDescription-C-n2MYH0.js";import"./VisuallyHidden-DDCx75rq.js";import"./clsx-Ciqy0D92.js";import"./Button-DJzGs5Og.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CHYxtA9m.js";import"./chevron-right-0S7EQmJC.js";import"./Heading-Cx9iBC6d.js";import"./FieldError-Dtv9Wp9N.js";import"./Text-CG8yCix2.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
