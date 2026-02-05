import{$ as c,a as m,r as l,j as d}from"./iframe-DdNBFEdS.js";import{C as n}from"./Calendar-BuqQivgo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-YUr-TK5k.js";import"./Button-BWr7_BWz.js";import"./utils-DKBoBmKc.js";import"./clsx-B-dksMZM.js";import"./Hidden-DdkFwnyL.js";import"./useFocusRing-C1ql2mMD.js";import"./index-Cy32Do-K.js";import"./index-B6M-MUl5.js";import"./useLabels-CZmZ3erh.js";import"./useButton-CrvEZzSp.js";import"./RSPContexts-CKuuNJn4.js";import"./Text-DJzhksm2.js";import"./useDateFormatter-DDhrx75j.js";import"./useControlledState-BJIZRVo5.js";import"./useLocalizedStringFormatter-tAALMyF-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-sRaxJt7Q.js";import"./useEvent-CJ07A-z0.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DS4J-thO.js";import"./VisuallyHidden-BmJ_BOK8.js";import"./clsx-Ciqy0D92.js";import"./Button-CStTwVWg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ym1SGOkF.js";import"./createLucideIcon-BK-2_1r2.js";import"./chevron-left-Cv--sfBd.js";import"./chevron-right-BaxsJ3kn.js";import"./Heading-CUaogu-M.js";import"./FieldError-Dstr91Hq.js";import"./Text-Bgy8BGDZ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
