import{$ as p,a as m,r as l,j as d}from"./iframe-gDafevWB.js";import{C as n}from"./Calendar-CXuur3vF.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-ao1I1U1q.js";import"./Button-CZcvnCND.js";import"./utils-D3fLZcgK.js";import"./clsx-B-dksMZM.js";import"./Hidden-oZZ-i5CO.js";import"./useFocusRing-pcQ6uMrq.js";import"./index-FLT979Ca.js";import"./index-BZaLaXG6.js";import"./useLabels-4_DTO3O1.js";import"./useButton-C5F2GgN1.js";import"./RSPContexts-DfnHz_y_.js";import"./Text-CufDXpQB.js";import"./useDateFormatter-BXb8h0BZ.js";import"./useControlledState-4KN4K3if.js";import"./useLocalizedStringFormatter-4CYleAMk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ch9SV2Ax.js";import"./useEvent-B9GiDkoo.js";import"./getScrollParent-BAOyzXT3.js";import"./scrollIntoView-B4oK90jz.js";import"./useDescription-C6T7OSZc.js";import"./VisuallyHidden-BM6Q_ECV.js";import"./clsx-Ciqy0D92.js";import"./Button-MaSUsAmv.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BK9rpLzw.js";import"./chevron-right-DN7WuXJb.js";import"./Heading-DOO_L3pR.js";import"./FieldError-CSdKzLav.js";import"./Text-UrDmMZXE.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
