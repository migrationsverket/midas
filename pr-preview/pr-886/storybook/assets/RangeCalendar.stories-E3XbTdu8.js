import{m as t,$ as s}from"./iframe-1jCyVKTR.js";import{R as n}from"./RangeCalendar-Tq0G475Z.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-KKHTYmIS.js";import"./Button-BBbyz38O.js";import"./utils-DZdh9xsP.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeQfraet.js";import"./useFocusRing-B8WDFENw.js";import"./index-Cfj3l_Mf.js";import"./index-O3MJa0Qz.js";import"./useLabels-BVuAqKI_.js";import"./useButton-BuSAxlcg.js";import"./RSPContexts-C6SYwle_.js";import"./Text-FQYgckzw.js";import"./useDateFormatter-D2OO3IpF.js";import"./useControlledState-RwIOrToL.js";import"./useLocalizedStringFormatter-C9x2tCAa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ha6xC4TF.js";import"./useEvent-1SLLKsgm.js";import"./getScrollParent-OYNJJ5NF.js";import"./scrollIntoView-sIBFCGIW.js";import"./useDescription-BaOnPnVQ.js";import"./VisuallyHidden-ynQwwP3K.js";import"./clsx-Ciqy0D92.js";import"./Button-DaHqgoFJ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-D-FkpzSt.js";import"./chevron-right-BG9tqYYX.js";import"./Heading-xa_uGpIM.js";import"./Text-CLTLikYF.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
