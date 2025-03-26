import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as _}from"./index-BbAIUH2N.js";import{$ as P}from"./utils-Cd6MiihZ.js";import{b as C,c as D}from"./TextField-BVSd0qaz.js";import{c as $}from"./clsx-B-dksMZM.js";import{e as k,u as p}from"./index-DtSMq7G1.js";import{F as j}from"./FieldError-Cgcw0cQk.js";import{T as M}from"./TextField-CXE8eFe4.js";import{L as B}from"./Label-BP8RLUVN.js";import{T as q}from"./Text-CNPAjM_O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-4a7bP6c_.js";import"./Text-BkowhAon.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DHg3NP7v.js";import"./useFocusRing-Cfn9yE2V.js";import"./Input-BOC78LTs.js";import"./Hidden-lswqw32w.js";import"./Label-DO1wrnkN.js";import"./useTextField-CD9GBL5M.js";import"./useControlledState-DGyHFLi9.js";import"./useField-9Cy_F6CL.js";import"./useLabel-ClMtG9eF.js";import"./useFocusable-Pg9COOaT.js";import"./TextField.module-BiYOq6rA.js";const F='"../theme/tokens.css"',R="_textArea_1h8xi_4",A={tokens:F,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:R},c=_.forwardRef((e,t)=>([e,t]=P(e,t,C),r.jsx(D,{...e,ref:t,className:$(A.textArea,e.className)})));try{c.displayName="TextArea",c.__docgenInfo={description:"",displayName:"TextArea",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const d="test",V="error",O=e=>new Array(e+1).join("x"),z=e=>r.jsxs(M,{children:[r.jsx(B,{children:"Label"}),r.jsx(q,{slot:"description",children:"Description"}),r.jsx(c,{"data-testid":d,...e}),r.jsx(j,{"data-testid":V})]}),fe={component:z,title:"Components/TextArea",tags:["autodocs"],args:{className:"test-class"}},a={play:async({canvas:e,step:t,args:{className:l}})=>{await t("it should preserve its classNames when being passed new ones",async()=>{k(e.getByTestId(d)).toHaveClass(A.inputField,l)})}},s={args:{isInvalid:!0,errorMessage:"Error"}},n={args:{...a.args,maxLength:50},play:async({canvas:e,step:t,args:l})=>{const m=l.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const N=O(m+1);await p.tab(),await p.keyboard(N),k(e.getByTestId(d).value.length).toBe(m)})}},o={args:{...a.args,minLength:2}},i={args:{...a.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.inputField, className as string);
    });
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,b,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    const maxLength = args.maxLength as number;
    await step('it should not be possible to exceed the maxLength property', async () => {
      const randomString = stringOfLength(maxLength + 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      expect(canvas.getByTestId<HTMLTextAreaElement>(testID).value.length).toBe(maxLength);
    });
  }
}`,...(L=(b=n.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var S,T,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minLength: 2
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,I,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      element: 'body',
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
}`,...(H=(I=i.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const ye=["Primary","Invalid","MaxLength","MinLength","Disabled"];export{i as Disabled,s as Invalid,n as MaxLength,o as MinLength,a as Primary,ye as __namedExportsOrder,fe as default};
