import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as C}from"./index-BbAIUH2N.js";import{$ as P}from"./utils-fGMpyvF6.js";import{b as j,c as D}from"./TextField-UckN7hDi.js";import{c as $}from"./clsx-B-dksMZM.js";import{e as H,u as m}from"./index-DtSMq7G1.js";import{F as M}from"./FieldError-BADsxAoD.js";import{T as B}from"./TextField-N3CsHAuz.js";import{L as q}from"./Label-D7d8orDF.js";import{T as F}from"./Text-YbdszP_I.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-I0ljaAay.js";import"./Text-CLHHKsvT.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BplRM21L.js";import"./Input-CMdrBSNU.js";import"./Hidden-lswqw32w.js";import"./Label-C7YJVz0K.js";import"./useTextField-DQ33iIrk.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DUxalVp6.js";import"./TextField.module-DZbAscKo.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./VisuallyHidden-CIX9y9is.js";import"./useDateFormatter-XsEnc7vv.js";import"./context-gwlhO1hg.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./FocusScope-BTvUdKNZ.js";import"./scrollIntoView-Br2KMoz-.js";import"./getScrollParent-DaqmRUg6.js";import"./useEvent-Ou8lCwV4.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useCollator-BwOLflG5.js";const R='"../theme/tokens.css"',V="_textArea_1h8xi_4",k={tokens:R,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:V},l=C.forwardRef((e,t)=>([e,t]=P(e,t,j),r.jsx(D,{...e,ref:t,className:$(k.textArea,e.className)})));try{l.displayName="TextArea",l.__docgenInfo={description:"",displayName:"TextArea",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const c="test",O="error",A="test-class",z=e=>new Array(e+1).join("x"),U=e=>r.jsxs(B,{...e,children:[r.jsx(q,{children:"Label"}),r.jsx(F,{slot:"description",children:"Description"}),r.jsx(l,{"data-testid":c,className:A}),r.jsx(M,{"data-testid":O})]}),ke={render:e=>r.jsx(U,{...e}),title:"Components/TextArea",tags:["autodocs"],args:{className:"test-class"}},a={play:async({canvas:e,step:t})=>{await t("it should preserve its classNames when being passed new ones",async()=>{H(e.getByTestId(c)).toHaveClass(k.inputField,A)})}},s={args:{isInvalid:!0,errorMessage:"Error"}},n={args:{...a.args,maxLength:50},play:async({canvas:e,step:t,args:N})=>{const d=N.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const _=z(d+1);await m.tab(),await m.keyboard(_),H(e.getByTestId(c).value.length).toBe(d)})}},o={args:{...a.args,minLength:2}},i={args:{...a.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.inputField, testClass);
    });
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var L,S,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minLength: 2
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,E,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const Ae=["Primary","Invalid","MaxLength","MinLength","Disabled"];export{i as Disabled,s as Invalid,n as MaxLength,o as MinLength,a as Primary,Ae as __namedExportsOrder,ke as default};
