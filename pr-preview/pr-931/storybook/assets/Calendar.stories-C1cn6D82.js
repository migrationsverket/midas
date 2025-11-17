import{$ as p,a as m,r as l,j as d}from"./iframe-BGJKVmf3.js";import{C as n}from"./Calendar-Bz22k4WG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BgTFeZWj.js";import"./Button-BnLvJykT.js";import"./utils-CdECfOvA.js";import"./clsx-B-dksMZM.js";import"./Hidden-HQtC_o9a.js";import"./useFocusRing-DbrozJ_r.js";import"./index-pedBBgRE.js";import"./index-DRo8smSM.js";import"./useLabels-DjNPyrwJ.js";import"./useButton-H76zVe9p.js";import"./RSPContexts-B4x9M34g.js";import"./Text-r6BcnIdd.js";import"./useDateFormatter-yfbNsL7e.js";import"./useControlledState-CKSdrHFO.js";import"./useLocalizedStringFormatter-DpbFwMiK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Clot3fOt.js";import"./useEvent-USaeSmTd.js";import"./getScrollParent-DfHGa-5w.js";import"./scrollIntoView-Da0pxFKj.js";import"./useDescription-DXkPEcT2.js";import"./VisuallyHidden-G7JBO7ul.js";import"./clsx-Ciqy0D92.js";import"./Button-BoJn9f0V.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DljgyLYu.js";import"./createLucideIcon-Bvs4zFUu.js";import"./chevron-right-KG9OZEDy.js";import"./Heading-DFG0pOTb.js";import"./FieldError-Cw7h0kNs.js";import"./Text-Bp3BbsoJ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
