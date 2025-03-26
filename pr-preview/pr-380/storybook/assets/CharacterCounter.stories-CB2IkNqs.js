import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{e as C}from"./index-DtSMq7G1.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as _}from"./index-BbAIUH2N.js";import{$ as E}from"./utils-Cd6MiihZ.js";import{$ as H}from"./Input-CkPPhu4J.js";import{F as I}from"./FieldError-Cae8s3IP.js";import{I as T}from"./Input-D4ymBpik.js";import{T as w}from"./TextField-LCUFgdsN.js";import{L as V}from"./Label-e6qbx1P3.js";import{T as b}from"./Text-modOyfN2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./Form-BBmrm8bW.js";import"./Text-BkowhAon.js";import"./useFormValidation-BWkP5gBo.js";import"./Button-D9mPwvHL.js";import"./Button-uO1JGISi.js";import"./ProgressBar-DNnV_wJ6.js";import"./Label-CkQlERdq.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./TextField-DNg7sPgY.js";import"./useTextField-COEhU6lQ.js";import"./useControlledState-DGyHFLi9.js";import"./useField-B8c6pWIv.js";import"./TextField.module-C7Oi0q_z.js";import"./useIsDisabled-BANivrO7.js";import"./useDateFormatter-D8oWd7cd.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./FocusScope-C97GJsIb.js";import"./scrollIntoView-CnTD5aJz.js";import"./getScrollParent-2-PurW9V.js";import"./useEvent-Yxrkvbn7.js";import"./useCollator-C3PRVItH.js";import"./VisuallyHidden-I9LV86QJ.js";const j='"../theme/tokens.css"',P="_count_16y67_4",L="_countExceeded_16y67_15",c={tokens:j,"--font-family":'"Inter", sans-serif',"--line-height-02":"1.125rem","--size-02":"0.875rem","--text-invalid":"light-dark(#e62323, #e62323)","--text-primary":"light-dark(#171717, #f2f2f2)",count:P,countExceeded:L},m=_.forwardRef((e,a)=>{[e,a]=E(e,a,H);const{maxLength:r,value:i}=e,l=(i==null?void 0:i.toString())??"";return r!==void 0?t.jsxs("span",{className:S(c.count,l.length>r&&c.countExceeded),children:[l.length," / ",r]}):t.jsx("span",{className:c.count,children:l.length})});try{m.displayName="CharacterCounter",m.__docgenInfo={description:"",displayName:"CharacterCounter",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const N="test",ve={render:e=>t.jsxs(w,{...e,children:[t.jsx(V,{variant:"label-02",children:"Label"}),t.jsx(b,{slot:"description",children:"Description"}),t.jsx(m,{}),t.jsx(I,{}),t.jsx(T,{"data-testid":N})]}),title:"Components/CharacterCounter",tags:["autodocs"]},o={args:{value:"I love apples"},play:async({canvas:e,step:a,args:{value:r}})=>{await a("it should show the correct count for its initial value",async()=>{C(e.getByText(r.length)).toBeInTheDocument()})}},n={args:{...o.args,maxLength:15}},s={tags:["!dev","!autodocs"],args:{defaultValue:"HEJ"},play:async({canvas:e,step:a,args:{defaultValue:r}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{C(e.getByText(r.length)).toBeInTheDocument()})}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'I love apples'
  },
  play: async ({
    canvas,
    step,
    args: {
      value
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText((value as string).length)).toBeInTheDocument();
    });
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 15
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'HEJ'
  },
  play: async ({
    canvas,
    step,
    args: {
      defaultValue
    }
  }) => {
    await step('it should show the correct count for its initial defaultValue', async () => {
      expect(canvas.getByText((defaultValue as string).length)).toBeInTheDocument();
    });
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const xe=["Primary","MaxLength","ShowCounterWithDefaultValue"];export{n as MaxLength,o as Primary,s as ShowCounterWithDefaultValue,xe as __namedExportsOrder,ve as default};
