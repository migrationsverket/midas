import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{r as E}from"./index-BbAIUH2N.js";import{$ as k}from"./utils-fGMpyvF6.js";import{b as _,c as C}from"./TextField-DTtlOdjM.js";import{c as N}from"./clsx-B-dksMZM.js";import{e as L,u as d}from"./index-DtSMq7G1.js";import{F as I}from"./FieldError-BADsxAoD.js";import{T as P}from"./TextField-jVLLq0TW.js";import{L as $}from"./Label-D7d8orDF.js";import{T as j}from"./Text-YbdszP_I.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-I0ljaAay.js";import"./Text-CLHHKsvT.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BplRM21L.js";import"./Input-CMdrBSNU.js";import"./Hidden-lswqw32w.js";import"./Label-C7YJVz0K.js";import"./useTextField-DQ33iIrk.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DUxalVp6.js";import"./TextField.module-DZbAscKo.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./VisuallyHidden-CIX9y9is.js";import"./useDateFormatter-XsEnc7vv.js";import"./context-gwlhO1hg.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./FocusScope-BTvUdKNZ.js";import"./scrollIntoView-Br2KMoz-.js";import"./getScrollParent-DaqmRUg6.js";import"./useEvent-Ou8lCwV4.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useCollator-BwOLflG5.js";const R='"../theme/tokens.css"',D="_textArea_1h8xi_4",T={tokens:R,"--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)",textArea:D},i=E.forwardRef((e,t)=>([e,t]=k(e,t,C),a.jsx(_,{...e,ref:t,className:N(T.textArea,e.className)})));try{i.displayName="TextArea",i.__docgenInfo={description:"",displayName:"TextArea",props:{onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: InputRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const B="error",S="test-class",M=e=>new Array(e+1).join("x"),Le={title:"Components/TextArea",component:i,render:e=>a.jsxs(P,{...e,children:[a.jsx($,{children:"Label"}),a.jsx(j,{slot:"description",children:"Description"}),a.jsx(i,{className:S}),a.jsx(I,{"data-testid":B})]})},r={parameters:{docs:{description:{story:"A `<TextArea>` accepts all HTML attributes and is to be used inside a `<TextField>`."}}},play:async({canvas:e,step:t})=>{await t("it should preserve its classNames when being passed new ones",async()=>{L(e.getByRole("textbox")).toHaveClass(T.textArea,S)})}},s={args:{isInvalid:!0}},n={tags:["!dev","!autodocs"],args:{maxLength:50},play:async({canvas:e,step:t,args:w})=>{const l=w.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const H=M(l+1);await d.tab(),await d.keyboard(H),L(e.getByRole("textbox").value.length).toBe(l)})}},o={args:{...r.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A \`<TextArea>\` accepts all HTML attributes and is to be used inside a \`<TextField>\`.'
      }
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByRole('textbox')).toHaveClass(styles.textArea, testClass);
    });
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  args: {
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
      expect(canvas.getByRole<HTMLTextAreaElement>('textbox').value.length).toBe(maxLength);
    });
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,v,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const Te=["Primary","Invalid","MaxLength","Disabled"];export{o as Disabled,s as Invalid,n as MaxLength,r as Primary,Te as __namedExportsOrder,Le as default};
