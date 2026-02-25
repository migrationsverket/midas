import{$ as c,a as m,r as l,j as d}from"./iframe-C9ubgLgC.js";import{C as n}from"./Calendar-B2cLXvKZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D7mSp3nC.js";import"./Button-BlG7CmiH.js";import"./utils-DGXfXGIv.js";import"./clsx-B-dksMZM.js";import"./Hidden-Azh09GXQ.js";import"./useFocusRing-4O8j9jv4.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./RSPContexts-Dm9gjtI5.js";import"./Text-DzDyHzow.js";import"./useDateFormatter-DskJIYK0.js";import"./useControlledState-DqLuvFKD.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D5ZW9iOq.js";import"./useEvent-BMkaTr7g.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DsXkWwWK.js";import"./VisuallyHidden-BHt-U9wp.js";import"./clsx-Ciqy0D92.js";import"./Button-Dt-Z81qJ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";import"./createLucideIcon-SsBWnnbL.js";import"./chevron-left-BLh4HXZg.js";import"./chevron-right-DUxQslXw.js";import"./Heading-DDcJA1Gn.js";import"./FieldError-CVXyG8VI.js";import"./Text-CL8RRho7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
