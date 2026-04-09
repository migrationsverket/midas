import{$ as c,a as m,r as l,j as d}from"./iframe-ClXeNp7Y.js";import{C as n}from"./Calendar-CDyy_9dg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CeRPsBIG.js";import"./Button-CgOPhMO-.js";import"./utils-Om4eb18p.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTszc8DE.js";import"./useFocusRing-POYc96FQ.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./RSPContexts-BJtrT3-R.js";import"./Text-Cbz9Nooi.js";import"./useDateFormatter-Du-GlZ_u.js";import"./useControlledState-ByDkBY5z.js";import"./useLocalizedStringFormatter-CQx72wD7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CclNl_36.js";import"./useEvent-CNppEzGs.js";import"./getScrollParent-BN1in3_E.js";import"./scrollIntoView-B4z0Rquo.js";import"./useDescription-DyutD6T1.js";import"./VisuallyHidden-Zm76wuSE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CP7YJW94.js";import"./createLucideIcon-BfIBNwb-.js";import"./chevron-right-CRDpN4dT.js";import"./Button-Ck36yxFc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./Heading-CVjx0GKx.js";import"./FieldError-Crhqu9ff.js";import"./Text-Cmueb6gv.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
