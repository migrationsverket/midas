import{$ as m,a as c,r as l,j as d}from"./iframe-DXvST5Z4.js";import{C as n}from"./Calendar-Cbf73ZP9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ZYBXc9-U.js";import"./Button-CS5zO-gt.js";import"./utils-C7o3oNWQ.js";import"./useObjectRef-CtV_wNCy.js";import"./clsx-B-dksMZM.js";import"./Hidden-CWijdCRp.js";import"./number-DfkVkf0F.js";import"./useFocusRing-C6PpwOyg.js";import"./useFocusable-CcTIrmj7.js";import"./index-BSKCIuFZ.js";import"./index-DpgVVg9m.js";import"./useLabels-B-ai_w_R.js";import"./useButton-Ci2Hi0-B.js";import"./RSPContexts-BWCV_dnI.js";import"./Text-DSf5Rh4t.js";import"./useDateFormatter-Un5Yzrkj.js";import"./useControlledState-CUr3wY18.js";import"./useLocalizedStringFormatter-CD11qPfL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D3UJzdxx.js";import"./useEvent-WiQdTJ77.js";import"./getScrollParent-Cb93IwoN.js";import"./scrollIntoView-DGoemtfW.js";import"./useDescription-eOAvzRvb.js";import"./VisuallyHidden-yddiJwiQ.js";import"./clsx-Ciqy0D92.js";import"./Button-CyUV4N7K.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiZlQPZS.js";import"./createLucideIcon-BQeZNnV0.js";import"./chevron-left-DFkdXo4p.js";import"./chevron-right-BKGJzwah.js";import"./Heading-l0jQkvv9.js";import"./FieldError-Vgbr6qFP.js";import"./Text-6UKv5af0.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
