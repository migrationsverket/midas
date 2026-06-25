import{$ as c,a as m,r as l,j as d}from"./iframe-C2f3UQ4Q.js";import{C as n}from"./Calendar-BuWVHPFC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B_89CgHl.js";import"./Button-CzARpBSV.js";import"./utils-CLD-we63.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHtTPiMo.js";import"./useFocusRing-DVjvJ21q.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./RSPContexts-Bp3NLRK2.js";import"./Text-CFY7ThNC.js";import"./useDateFormatter-CQD0eDbg.js";import"./useControlledState-BkR5yEcJ.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8E-OXuP1.js";import"./useEvent-CN0f60Tw.js";import"./getScrollParent-Cb8Zmktw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./useDescription-Majc7XiZ.js";import"./VisuallyHidden-Cug_bQSe.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-T4Rdzpu8.js";import"./createLucideIcon-B0GS721z.js";import"./chevron-right-Bl4xahJM.js";import"./Button-Cubx1h0F.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Heading-CZXc5KA3.js";import"./FieldError-BA_pXY2h.js";import"./Text-BR3njYC5.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
