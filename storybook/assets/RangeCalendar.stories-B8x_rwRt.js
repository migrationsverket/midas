import{m as t,$ as s}from"./iframe-Cjrlzh3H.js";import{R as n}from"./RangeCalendar-CCXKCw0F.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Enr0Dyyo.js";import"./Button-DMFEHXPJ.js";import"./utils-CuTptj1-.js";import"./clsx-B-dksMZM.js";import"./Hidden-C0Y7LQUz.js";import"./useFocusRing-1xU_Qusa.js";import"./index-DXVX_pBX.js";import"./index-DF80V0P0.js";import"./useLabels-VB_Q-W40.js";import"./useButton-BTUGUDje.js";import"./RSPContexts-CXMSQIsh.js";import"./Text-BIGnKIDS.js";import"./useDateFormatter-BsGao346.js";import"./useControlledState-D7BOsOAW.js";import"./useLocalizedStringFormatter-BG0SYhYk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2QSKNdT.js";import"./useEvent-JWBWCRar.js";import"./getScrollParent-BJm2tcrQ.js";import"./scrollIntoView-DB_apnjb.js";import"./useDescription-Cz0FZt-N.js";import"./VisuallyHidden-Cg1wAZAe.js";import"./clsx-Ciqy0D92.js";import"./Button-Cenw66Ks.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BkgNquZM.js";import"./chevron-right-CSF6VAsB.js";import"./Heading-4T_V5vUB.js";import"./Text-CEpVYdQN.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
