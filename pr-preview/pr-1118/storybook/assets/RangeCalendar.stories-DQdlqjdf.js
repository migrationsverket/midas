import{$ as t,m as s}from"./iframe-8UJkVthP.js";import{R as n}from"./RangeCalendar-DZdI-eKL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oNBJDdnK.js";import"./Button-5Crp6oLI.js";import"./utils-BDWBmxXy.js";import"./clsx-B-dksMZM.js";import"./Hidden-D2CAjC8z.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./RSPContexts-qbHEhELM.js";import"./Text-CV-khTPA.js";import"./useDateFormatter-rUAbT-9l.js";import"./useControlledState-CQGiwWre.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CMoQagVN.js";import"./useEvent-CbYAf6vF.js";import"./getScrollParent-6Dr3zswo.js";import"./scrollIntoView-BW2PYDKv.js";import"./useDescription-BTR78MKM.js";import"./VisuallyHidden-vq1pC-28.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cn8MVlKy.js";import"./createLucideIcon-KCEZs7i4.js";import"./chevron-right-Dw6-aKKA.js";import"./Button-ByNh2qq9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";import"./Heading-BTDJmRUD.js";import"./FieldError-BeuaPtx6.js";import"./Text-FE_S5mZr.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      start: mockedNow.subtract({
        days: 2
      }),
      end: mockedNow.add({
        days: 2
      })
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...o.parameters?.docs?.source}}};const J=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,J as __namedExportsOrder,I as default};
