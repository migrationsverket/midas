import{m as t,$ as s}from"./iframe-DzJ58csS.js";import{R as n}from"./RangeCalendar-DgHwy_Px.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B-eyJlQO.js";import"./Button-XpnQOI7L.js";import"./utils-kFG7V26A.js";import"./clsx-B-dksMZM.js";import"./Hidden-DixvikVn.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./RSPContexts-Bw7A04gx.js";import"./Text-CcO9WK_c.js";import"./useDateFormatter-D7n8Pph1.js";import"./useControlledState-BddBMCaY.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-96u3K8Yv.js";import"./useEvent-Bp2Ufb0u.js";import"./getScrollParent-DyLAwff4.js";import"./scrollIntoView-y1tmZMLC.js";import"./useDescription-CFNj517p.js";import"./VisuallyHidden-bMdwBiLV.js";import"./clsx-Ciqy0D92.js";import"./Button-DBLrduIN.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DY2CvNkn.js";import"./chevron-right-Ca2BsnxE.js";import"./Heading-Cp-haDdt.js";import"./Text-CF12HrJc.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,G as __namedExportsOrder,F as default};
