import{$ as c,a as m,r as l,j as d}from"./iframe-DFa3xMtH.js";import{C as n}from"./Calendar-DCnGurmo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bbx44Exy.js";import"./Button-ocYHggw0.js";import"./utils-BcZWRu-T.js";import"./clsx-B-dksMZM.js";import"./Hidden-syp9xi-M.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./RSPContexts-DlObjR3U.js";import"./Text-BCIdAzOc.js";import"./useDateFormatter-yFA-rKej.js";import"./useControlledState-DlMrxxrC.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-VOBWQqf8.js";import"./useEvent-B4KRxCDO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C-peboUL.js";import"./VisuallyHidden-BeIfbn57.js";import"./clsx-Ciqy0D92.js";import"./Button-_PEtoZlZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./createLucideIcon-CG_uvONP.js";import"./chevron-left-CblSDwZu.js";import"./chevron-right-CUd1a5My.js";import"./Heading-Dr6x3va7.js";import"./FieldError-DDcEoLvd.js";import"./Text-CLgVcmAF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
