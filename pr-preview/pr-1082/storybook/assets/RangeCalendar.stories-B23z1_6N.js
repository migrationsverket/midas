import{$ as t,m as s}from"./iframe-DMN73KB2.js";import{R as n}from"./RangeCalendar-j3T1I0rV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-OyvDZw5D.js";import"./Button-CGbtmoIr.js";import"./utils-ytX4X4hU.js";import"./clsx-B-dksMZM.js";import"./Hidden-BA-gHfWt.js";import"./useFocusRing-BhcplY33.js";import"./index-Qnw9UhGM.js";import"./index-DrmiERuM.js";import"./useLabels-CRP67w2C.js";import"./useButton-CkF7Pwvg.js";import"./RSPContexts-Be8xIyRm.js";import"./Text-DjG6q6Y1.js";import"./useDateFormatter-SF8cJIaC.js";import"./useControlledState-DtotprCd.js";import"./useLocalizedStringFormatter-B6PiDztw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqhW-56X.js";import"./useEvent-I49ndoPs.js";import"./getScrollParent-tlP_VOWl.js";import"./scrollIntoView-BoaQO-l5.js";import"./useDescription-lqHqz3yA.js";import"./VisuallyHidden-CJkttl4h.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck576HV9.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CiDW_veP.js";import"./createLucideIcon-C88Lc7aZ.js";import"./chevron-left-CB37bJ2z.js";import"./chevron-right-BwCTX4RP.js";import"./Heading-kRC-xwAu.js";import"./FieldError-DphimPrq.js";import"./Text-B0z8pO1R.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
