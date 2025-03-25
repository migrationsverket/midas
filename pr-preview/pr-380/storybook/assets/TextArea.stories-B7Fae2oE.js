import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{r as D}from"./index-BbAIUH2N.js";import{$ as _}from"./utils-Cd6MiihZ.js";import{b as P,c as j}from"./TextField-BVSd0qaz.js";import{c as C}from"./clsx-B-dksMZM.js";import{e as H,u as p}from"./index-DtSMq7G1.js";import{F as $}from"./FieldError-Cgcw0cQk.js";import{T as B}from"./TextField-DCUXsYD8.js";import{L as M}from"./Label-BP8RLUVN.js";import{T as q}from"./Text-CNPAjM_O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-4a7bP6c_.js";import"./Text-BkowhAon.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DHg3NP7v.js";import"./useFocusRing-Cfn9yE2V.js";import"./Input-BOC78LTs.js";import"./Hidden-lswqw32w.js";import"./Label-DO1wrnkN.js";import"./useTextField-CD9GBL5M.js";import"./useControlledState-DGyHFLi9.js";import"./useField-9Cy_F6CL.js";import"./useLabel-ClMtG9eF.js";import"./useFocusable-Pg9COOaT.js";import"./TextField.module-BiYOq6rA.js";const F='"../theme/tokens.css"',R="_textArea_1h8xi_4",A={tokens:F,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:R},c=D.forwardRef((e,t)=>([e,t]=_(e,t,P),s.jsx(j,{...e,ref:t,className:C(A.textArea,e.className)})));try{c.displayName="TextArea",c.__docgenInfo={description:"",displayName:"TextArea",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const d="test",V="error",O=e=>new Array(e+1).join("x"),z=e=>s.jsxs(B,{children:[s.jsx(M,{children:"Label"}),s.jsx(q,{slot:"description",children:"Description"}),s.jsx(c,{"data-testid":d,...e}),s.jsx($,{"data-testid":V})]}),fe={component:z,title:"Components/TextArea",tags:["autodocs"],args:{className:"test-class"}},a={play:async({canvas:e,step:t,args:{className:l}})=>{await t("it should preserve its classNames when being passed new ones",async()=>{H(e.getByTestId(d)).toHaveClass(A.inputField,l)})}},r={args:{isInvalid:!0,errorMessage:"Error"}},n={args:{...a.args,maxLength:50},play:async({canvas:e,step:t,args:l})=>{const m=l.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const N=O(m+1);await p.tab(),await p.keyboard(N),H(e.getByTestId(d).value.length).toBe(m)})}},o={args:{...a.args,minLength:2}},i={args:{...a.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,b,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,L,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minLength: 2
  }
  // https://github.com/storybookjs/storybook/issues/19926
  // play: async ({ canvas, step }) => {
  //   await step(
  //     'it should give a validation error if the given text is too short',
  //     async () => {
  //       await userEvent.click(canvas.getByTestId(testID))
  //       await userEvent.keyboard('x')
  //       await userEvent.tab()
  //       await userEvent.keyboard('[Enter]')
  //       expect(await canvas.findByTestId(fieldErrorTestID)).toBeInTheDocument()
  //     },
  //   )
  // },
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var I,S,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const ye=["Primary","Invalid","MaxLength","MinLength","Disabled"];export{i as Disabled,r as Invalid,n as MaxLength,o as MinLength,a as Primary,ye as __namedExportsOrder,fe as default};
