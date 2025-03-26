import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{e as C}from"./index-DtSMq7G1.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as E}from"./index-BbAIUH2N.js";import{$ as _}from"./utils-Cd6MiihZ.js";import{$ as I}from"./Input-BOC78LTs.js";import{I as T}from"./Input-BaDLaixg.js";import{F as H}from"./FieldError-CIvLQQ1a.js";import{T as w}from"./TextField-DEz6aS9J.js";import{L as V}from"./Label-BP8RLUVN.js";import{T as b}from"./Text-CNPAjM_O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-Cfn9yE2V.js";import"./Button-B3VvODQR.js";import"./Button-DUGs8NtW.js";import"./ProgressBar-Cgq2ntZX.js";import"./Label-DO1wrnkN.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CxawRSCB.js";import"./index-cpIEhwLo.js";import"./useFocusable-Pg9COOaT.js";import"./FieldError-BY0xR2Cj.js";import"./Text-BkowhAon.js";import"./TextField-X4rhsNPi.js";import"./Form-CI7MZqMZ.js";import"./useFormValidation-DK3Ci7T0.js";import"./useTextField-DWhoeQ2w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-9Cy_F6CL.js";import"./TextField.module-C7Oi0q_z.js";const j='"../theme/tokens.css"',P="_count_16y67_4",D="_countExceeded_16y67_15",c={tokens:j,"--font-family":'"Inter", sans-serif',"--line-height-02":"1.125rem","--size-02":"0.875rem","--text-invalid":"light-dark(#e62323, #e62323)","--text-primary":"light-dark(#171717, #f2f2f2)",count:P,countExceeded:D},m=E.forwardRef((e,a)=>{[e,a]=_(e,a,I);const{maxLength:r,value:i}=e,l=(i==null?void 0:i.toString())??"";return r!==void 0?t.jsxs("span",{className:S(c.count,l.length>r&&c.countExceeded),children:[l.length," / ",r]}):t.jsx("span",{className:c.count,children:l.length})});try{m.displayName="CharacterCounter",m.__docgenInfo={description:"",displayName:"CharacterCounter",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const L="test",N="error",ge={render:e=>t.jsxs(w,{...e,children:[t.jsx(V,{children:"Label"}),t.jsx(b,{slot:"description",children:"Description"}),t.jsx(m,{}),t.jsx(T,{"data-testid":L}),t.jsx(H,{"data-testid":N})]}),title:"Components/CharacterCounter",tags:["autodocs"]},o={args:{value:"I love apples"},play:async({canvas:e,step:a,args:{value:r}})=>{await a("it should show the correct count for its initial value",async()=>{C(e.getByText(r.length)).toBeInTheDocument()})}},n={args:{...o.args,maxLength:15}},s={tags:["!dev","!autodocs"],args:{defaultValue:"HEJ"},play:async({canvas:e,step:a,args:{defaultValue:r}})=>{await a("it should show the correct count for its initial defaultValue",async()=>{C(e.getByText(r.length)).toBeInTheDocument()})}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const ye=["Primary","MaxLength","ShowCounterWithDefaultValue"];export{n as MaxLength,o as Primary,s as ShowCounterWithDefaultValue,ye as __namedExportsOrder,ge as default};
