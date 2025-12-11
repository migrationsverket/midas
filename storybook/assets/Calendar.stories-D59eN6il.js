import{$ as p,a as m,r as l,j as d}from"./iframe-y6AvU9pV.js";import{C as n}from"./Calendar-CfmoSofl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DtpdLbYB.js";import"./Button-4DuSgfee.js";import"./utils-VIxaLxO-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CSfoPJVM.js";import"./useFocusRing-B9DSdUhj.js";import"./index-BwPUsMU4.js";import"./index-DrBZwNpv.js";import"./useLabels-Bnd5CjV_.js";import"./useButton-DriAMg0B.js";import"./RSPContexts-CI4AlZqi.js";import"./Text-DlhfRLNK.js";import"./useDateFormatter-CHYssvLE.js";import"./useControlledState-DShqKV-K.js";import"./useLocalizedStringFormatter-DqeEh2aJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnNJKs_t.js";import"./useEvent-DulQh_3F.js";import"./getScrollParent-CtO4xKrK.js";import"./scrollIntoView-C9aEwsLu.js";import"./useDescription-BWXgWP7M.js";import"./VisuallyHidden-DF1AJIqt.js";import"./clsx-Ciqy0D92.js";import"./Button-4Ng5Qb5n.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BhHfTxwL.js";import"./createLucideIcon-D29kT7vp.js";import"./chevron-right-DOiqMb29.js";import"./Heading-BDM_ieoG.js";import"./FieldError-B_ZzXf74.js";import"./Text-B3Lob103.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
