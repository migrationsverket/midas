import{j as r}from"./jsx-runtime-BYYWji4R.js";import{c as B}from"./Button-v_l_ujRb.js";import{c as u}from"./clsx-B-dksMZM.js";import{L as d}from"./Label-BJopvDN8.js";import{e as n}from"./index-Q7OVwvWC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./Dialog-BAAiJcpT.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-CEJfcY2d.js";import"./useResizeObserver-D8gvjDpO.js";import"./useControlledState-H1tiOFpU.js";import"./Collection-BgAPHyOf.js";import"./index-NDK0uC61.js";import"./Separator-DQ7V9Fb3.js";import"./SelectionManager-BkX4LkPr.js";import"./useEvent-D_ha2BWP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-p3_VE_8x.js";import"./useDescription-BqzP9r9Z.js";import"./ListKeyboardDelegate-Dz8cyiML.js";import"./Text-CZ6zcozL.js";import"./PressResponder-DWi2SZR7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BekSNXsj.js";import"./Dialog-CHCaq1sV.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./Button-Dfj_iPpZ.js";import"./Button.module-Bmb634uG.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-CV1Pcj_U.js";import"./info-CSjK64PU.js";const N="_progressBar_1ekuq_4",L="_label_1ekuq_12",S="_value_1ekuq_17",T="_bar_1ekuq_22",I="_fill_1ekuq_28",s={progressBar:N,label:L,value:S,bar:T,fill:I},m=({label:a,labelProps:e,showValueLabel:l=!1,...t})=>r.jsx(B,{...t,className:u(s.progressBar,t.className),children:({percentage:_,valueText:w,isIndeterminate:q})=>r.jsxs(r.Fragment,{children:[a&&r.jsx(d,{elementType:"span",...e,className:u(e==null?void 0:e.className,s.label),children:a}),l&&r.jsx(d,{elementType:"span",...e,id:"",className:u(e==null?void 0:e.className,s.value),children:w}),r.jsx("div",{className:s.bar,children:r.jsx("div",{className:s.fill,style:{width:`${q?50:_}%`}})})]})});try{m.displayName="ProgressBar",m.__docgenInfo={description:"",displayName:"ProgressBar",props:{label:{defaultValue:null,description:"A visual label",name:"label",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"Props for the visual label and/or the value label",name:"labelProps",required:!1,type:{name:"LabelProps"}},showValueLabel:{defaultValue:{value:"false"},description:"Show the value label",name:"showValueLabel",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"The smallest value allowed for the input.",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The largest value allowed for the input.",name:"maxValue",required:!1,type:{name:"number"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},formatOptions:{defaultValue:{value:"{style: 'percent'}"},description:"The display format of the value label.",name:"formatOptions",required:!1,type:{name:"NumberFormatOptions"}},valueLabel:{defaultValue:null,description:"The content to display as the value's label (e.g. 1 of 4).",name:"valueLabel",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ProgressBarRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ProgressBarRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ProgressBarRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const Ve={component:m,title:"Components/ProgressBar",tags:["autodocs"],args:{isIndeterminate:!1}},o={args:{label:"Loading...",showValueLabel:!0,value:33,minValue:0,maxValue:100},play:async({canvas:a,args:e,step:l})=>{await l("it should provide an information about the progress for screen readers",async()=>{const t=a.getByRole("progressbar");n(t).toHaveAttribute("aria-valuemin",`${e.minValue}`),n(t).toHaveAttribute("aria-valuemax",`${e.maxValue}`),n(t).toHaveAttribute("aria-valuenow",`${e.value}`),n(t).toHaveAttribute("aria-valuetext",n.stringMatching(new RegExp(`${e.value}`)))})}},i={args:{value:66,"aria-label":"Loading..."},play:async({canvas:a,args:e,step:l})=>{await l("it should provide an accessible label for screen readers",async()=>{n(a.getByLabelText(e["aria-label"])).toBeInTheDocument()})}},p={args:{isIndeterminate:!0,label:"Waiting..."},play:async({canvas:a,step:e})=>{await e("it should not have an aria-valuenow property",async()=>{n(a.getByRole("progressbar")).not.toHaveProperty("aria-valuenow")})}};var c,f,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    showValueLabel: true,
    value: 33,
    minValue: 0,
    maxValue: 100
  },
  play: async ({
    canvas,
    args,
    step
  }) => {
    await step('it should provide an information about the progress for screen readers', async () => {
      const progressBar = canvas.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuemin', \`\${args.minValue}\`);
      expect(progressBar).toHaveAttribute('aria-valuemax', \`\${args.maxValue}\`);
      expect(progressBar).toHaveAttribute('aria-valuenow', \`\${args.value}\`);
      expect(progressBar).toHaveAttribute('aria-valuetext', expect.stringMatching(new RegExp(\`\${args.value}\`)));
    });
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 66,
    'aria-label': 'Loading...'
  },
  play: async ({
    canvas,
    args,
    step
  }) => {
    await step('it should provide an accessible label for screen readers', async () => {
      expect(canvas.getByLabelText(args['aria-label'] as string)).toBeInTheDocument();
    });
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,V;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Waiting...'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should not have an aria-valuenow property', async () => {
      expect(canvas.getByRole('progressbar')).not.toHaveProperty('aria-valuenow');
    });
  }
}`,...(V=(x=p.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const _e=["Primary","WithoutLabels","IsIndeterminate"];export{p as IsIndeterminate,o as Primary,i as WithoutLabels,_e as __namedExportsOrder,Ve as default};
