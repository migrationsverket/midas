import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{a as x}from"./ProgressBar-KG041EEs.js";import{c as u}from"./clsx-B-dksMZM.js";import{L as m}from"./Label-C53I4IUJ.js";import{e as s}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BhWkjeqE.js";import"./Label-BBCc9K7K.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-CH4xJhfw.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";const V='"../theme/tokens.css"',_="#d9d9d9",B="#008d3c",N="_progressBar_1fndo_4",q="_label_1fndo_12",L="_value_1fndo_16",T="_bar_1fndo_20",w="_fill_1fndo_25",n={tokens:V,gray30:_,signalGreen100:B,progressBar:N,label:q,value:L,bar:T,fill:w},d=({label:a,labelProps:e,showValueLabel:l=!1,...r})=>t.jsx(x,{...r,className:u(n.progressBar,r.className),children:({percentage:v,valueText:y})=>t.jsxs(t.Fragment,{children:[a&&t.jsx(m,{elementType:"span",...e,className:u(e==null?void 0:e.className,n.label),children:a}),l&&t.jsx(m,{elementType:"span",...e,id:"",className:u(e==null?void 0:e.className,n.value),children:y}),t.jsx("div",{className:n.bar,children:t.jsx("div",{className:n.fill,style:{width:`${v}%`}})})]})});try{d.displayName="ProgressBar",d.__docgenInfo={description:"",displayName:"ProgressBar",props:{label:{defaultValue:null,description:"A visual label",name:"label",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"Props for the visual label and/or the value label",name:"labelProps",required:!1,type:{name:"LabelProps"}},showValueLabel:{defaultValue:{value:"false"},description:"Show the value label",name:"showValueLabel",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},formatOptions:{defaultValue:{value:"{style: 'percent'}"},description:"The display format of the value label.",name:"formatOptions",required:!1,type:{name:"NumberFormatOptions"}},valueLabel:{defaultValue:null,description:"The content to display as the value's label (e.g. 1 of 4).",name:"valueLabel",required:!1,type:{name:"ReactNode"}},value:{defaultValue:{value:"0"},description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"The smallest value allowed for the input.",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The largest value allowed for the input.",name:"maxValue",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ProgressBarRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ProgressBarRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ProgressBarRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const z={component:d,title:"Components/ProgressBar",tags:["autodocs"]},o={args:{label:"Loading...",showValueLabel:!0,value:33,minValue:0,maxValue:100},play:async({canvas:a,args:e,step:l})=>{await l("it should provide an information about the progress for screen readers",async()=>{const r=a.getByRole("progressbar");s(r).toHaveAttribute("aria-valuemin",`${e.minValue}`),s(r).toHaveAttribute("aria-valuemax",`${e.maxValue}`),s(r).toHaveAttribute("aria-valuetext",s.stringMatching(new RegExp(`${e.value}`)))})}},i={args:{value:66,"aria-label":"Loading..."},play:async({canvas:a,args:e,step:l})=>{await l("it should provide an accessible label for screen readers",async()=>{s(a.getByLabelText(e["aria-label"])).toBeInTheDocument()})}};var c,p,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      expect(progressBar).toHaveAttribute('aria-valuetext', expect.stringMatching(new RegExp(\`\${args.value}\`)));
    });
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,h,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const G=["Primary","WithoutLabels"];export{o as Primary,i as WithoutLabels,G as __namedExportsOrder,z as default};
