import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{a as B}from"./ProgressBar-6st-rJzm.js";import{c as d}from"./clsx-B-dksMZM.js";import{L as m}from"./Label-ClRk-i9L.js";import{e as n}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Dv9Ux5aE.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";const N='"../theme/tokens.css"',L="_progressBar_1ekuq_4",S="_indeterminate_1ekuq_1",T="_label_1ekuq_12",I="_value_1ekuq_17",A="_bar_1ekuq_22",R="_fill_1ekuq_28",l={tokens:N,"--layer-accent-01":"light-dark(#d9d9d9, #383838)","--signal-green-100":"#008d3c",progressBar:L,indeterminate:S,label:T,value:I,bar:A,fill:R},c=({label:a,labelProps:e,showValueLabel:s=!1,...t})=>r.jsx(B,{...t,className:d(l.progressBar,t.className),children:({percentage:_,valueText:q,isIndeterminate:w})=>r.jsxs(r.Fragment,{children:[a&&r.jsx(m,{elementType:"span",...e,className:d(e==null?void 0:e.className,l.label),children:a}),s&&r.jsx(m,{elementType:"span",...e,id:"",className:d(e==null?void 0:e.className,l.value),children:q}),r.jsx("div",{className:l.bar,children:r.jsx("div",{className:l.fill,style:{width:`${w?50:_}%`}})})]})});try{c.displayName="ProgressBar",c.__docgenInfo={description:"",displayName:"ProgressBar",props:{label:{defaultValue:null,description:"A visual label",name:"label",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"Props for the visual label and/or the value label",name:"labelProps",required:!1,type:{name:"LabelProps"}},showValueLabel:{defaultValue:{value:"false"},description:"Show the value label",name:"showValueLabel",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"The smallest value allowed for the input.",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The largest value allowed for the input.",name:"maxValue",required:!1,type:{name:"number"}},formatOptions:{defaultValue:{value:"{style: 'percent'}"},description:"The display format of the value label.",name:"formatOptions",required:!1,type:{name:"NumberFormatOptions"}},valueLabel:{defaultValue:null,description:"The content to display as the value's label (e.g. 1 of 4).",name:"valueLabel",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ProgressBarRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ProgressBarRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ProgressBarRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const G={component:c,title:"Components/ProgressBar",tags:["autodocs"],args:{isIndeterminate:!1}},o={args:{label:"Loading...",showValueLabel:!0,value:33,minValue:0,maxValue:100},play:async({canvas:a,args:e,step:s})=>{await s("it should provide an information about the progress for screen readers",async()=>{const t=a.getByRole("progressbar");n(t).toHaveAttribute("aria-valuemin",`${e.minValue}`),n(t).toHaveAttribute("aria-valuemax",`${e.maxValue}`),n(t).toHaveAttribute("aria-valuenow",`${e.value}`),n(t).toHaveAttribute("aria-valuetext",n.stringMatching(new RegExp(`${e.value}`)))})}},i={args:{value:66,"aria-label":"Loading..."},play:async({canvas:a,args:e,step:s})=>{await s("it should provide an accessible label for screen readers",async()=>{n(a.getByLabelText(e["aria-label"])).toBeInTheDocument()})}},u={args:{isIndeterminate:!0,label:"Waiting..."},play:async({canvas:a,step:e})=>{await e("it should not have an aria-valuenow property",async()=>{n(a.getByRole("progressbar")).not.toHaveProperty("aria-valuenow")})}};var p,f,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,V;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(x=u.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const J=["Primary","WithoutLabels","IsIndeterminate"];export{u as IsIndeterminate,o as Primary,i as WithoutLabels,J as __namedExportsOrder,G as default};
