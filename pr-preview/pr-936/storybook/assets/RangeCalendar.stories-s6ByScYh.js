import{m as t,$ as s}from"./iframe-3Z2-UshW.js";import{R as n}from"./RangeCalendar-tEHrzyxu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DRVFGiVP.js";import"./Button-C8_JRtOx.js";import"./utils-DEJEJRgi.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6h_oo_l.js";import"./useFocusRing-MmHLX3s6.js";import"./index-CQUvP9Mk.js";import"./index-DuVB00BP.js";import"./useLabels-CV70o-W_.js";import"./useButton-DNg2H_lv.js";import"./RSPContexts-sdVomez5.js";import"./Text-ByU-HJWg.js";import"./useDateFormatter-BctGqz9a.js";import"./useControlledState-BqwBnLxL.js";import"./useLocalizedStringFormatter-DdpoOagV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-1KQlKmrN.js";import"./useEvent-B_HlG0i4.js";import"./getScrollParent-C96p0Vxo.js";import"./scrollIntoView-3g7sHIC3.js";import"./useDescription-tzBSixbv.js";import"./VisuallyHidden-D1KaaG2i.js";import"./clsx-Ciqy0D92.js";import"./Button-C4wHIXhX.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CuTJpoE2.js";import"./chevron-right-oZ1VWdUE.js";import"./Heading-AX-x11vK.js";import"./Text-Df63k-we.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
