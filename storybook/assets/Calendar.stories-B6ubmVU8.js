import{$ as c,a as m,r as l,j as d}from"./iframe-GrObhQyq.js";import{C as n}from"./Calendar-KIberB1M.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CePe59bf.js";import"./Button-DeYdHRuW.js";import"./utils-BcHOgQs3.js";import"./clsx-B-dksMZM.js";import"./Hidden-dbsNdN1V.js";import"./useFocusRing-BFS8TNaT.js";import"./index-DEBi2S7D.js";import"./index-BYwjw4Yq.js";import"./useLabels-D8BolPkJ.js";import"./useButton-DFs2mCFz.js";import"./RSPContexts-DVG4WgYz.js";import"./Text-DFdfdwaW.js";import"./useDateFormatter-Dj_CwAjB.js";import"./useControlledState-Dha0NZNW.js";import"./useLocalizedStringFormatter-Bn9Pd0zB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOJataCj.js";import"./useEvent-Cv_3xPK7.js";import"./getScrollParent-aN5df5mj.js";import"./scrollIntoView-CtxTz0vA.js";import"./useDescription--BWWeftJ.js";import"./VisuallyHidden-CLjBotbO.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-6XLK2Pvf.js";import"./createLucideIcon-CmYd0_U9.js";import"./chevron-right-BHl7nYqe.js";import"./Button-Cc5OvUjG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cn3i1neC.js";import"./Heading-CzDS6V1R.js";import"./FieldError-BbmV2Vd2.js";import"./Text-1Ne8nj-Z.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
