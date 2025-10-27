import{$ as S,r as k,j as y}from"./iframe-r0gqF4SQ.js";import{C as s}from"./Calendar-h5JnV727.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DLYPy4X3.js";import"./Button-DtL-XAG_.js";import"./utils-DJbaWo92.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBPjgJ0M.js";import"./useFocusRing-Df-VPM0h.js";import"./index-aqPr6EPC.js";import"./index-aX3st589.js";import"./useLabels-BOJYAo3Q.js";import"./useButton-BnPJwczl.js";import"./RSPContexts-BSHYsoht.js";import"./Text-BT1FJlh3.js";import"./useDateFormatter-DSt-Mn_-.js";import"./useControlledState-BUTkhZiu.js";import"./useLocalizedStringFormatter-kkAwSq4q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-fAzzPodv.js";import"./useEvent-B1_YsYdm.js";import"./getScrollParent-hKzA3YMz.js";import"./scrollIntoView-Aq5DZlOW.js";import"./useDescription-D9xUebbW.js";import"./VisuallyHidden-Dp2mgzE-.js";import"./clsx-Ciqy0D92.js";import"./Button-kvHvsmmz.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BJGlkhiB.js";import"./chevron-right-OJ1Z2UFT.js";import"./Heading-C-P3Fo8M.js";import"./FieldError-Bl2737hg.js";import"./Text-beiJ6BSj.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ar=["Primary","Disabled","Invalid","UnavailableWeekends"];export{e as Disabled,o as Invalid,r as Primary,a as UnavailableWeekends,ar as __namedExportsOrder,or as default};
