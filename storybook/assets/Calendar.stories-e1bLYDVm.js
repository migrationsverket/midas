import{$ as p,a as m,r as l,j as d}from"./iframe-CuvNnZhW.js";import{C as n}from"./Calendar-AwVwDs5E.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-QiqN82MB.js";import"./Button-DOL-rno5.js";import"./utils-Bm57M54E.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxowtwNV.js";import"./useFocusRing-D43600Fq.js";import"./index-B40owRUi.js";import"./index-BMAPmUts.js";import"./useLabels-efXzBIHp.js";import"./useButton-Cp1eU1ae.js";import"./RSPContexts-CQpn_-P6.js";import"./Text-yK2KnKs6.js";import"./useDateFormatter-Di6FsbWU.js";import"./useControlledState-CMlYEkCM.js";import"./useLocalizedStringFormatter-C1w5KOSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BeGb7bk2.js";import"./useEvent-Bpy0OARu.js";import"./getScrollParent-LlGdJz5e.js";import"./scrollIntoView-1KZh3iQK.js";import"./useDescription-DhNPqrJw.js";import"./VisuallyHidden-CwpyE811.js";import"./clsx-Ciqy0D92.js";import"./Button-_NSsZI2K.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6M9RCcid.js";import"./createLucideIcon-Df2ePFAr.js";import"./chevron-right-CpePhZ29.js";import"./Heading-J7EIvy2J.js";import"./FieldError-3gQNfb17.js";import"./Text-DQruYnq-.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
