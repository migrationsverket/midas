import{j as e}from"./iframe-D6bwu_M6.js";import{T as u}from"./TextField-CRJKzQBv.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-Bk57k-H6.js";import"./utils-DupMYAax.js";import"./clsx-B-dksMZM.js";import"./FieldError-DvkQG6pE.js";import"./Text-DYI1O7jb.js";import"./useFocusRing-Cq2k40Pm.js";import"./index-CBlzRzW6.js";import"./index-CRODHNit.js";import"./clsx-Ciqy0D92.js";import"./Text-CEYHWnPz.js";import"./RSPContexts-B3kkW0Zn.js";import"./Form-7hV7RJ_q.js";import"./useFormValidation-B8wbV92U.js";import"./Group-CgRO35rk.js";import"./Input-CrPLP8g_.js";import"./Hidden-DGLzVhhq.js";import"./Button-CK9UOEzr.js";import"./useLabels-BCS-IXw5.js";import"./useButton-Dox0StIc.js";import"./useTextField-DfR2_mLj.js";import"./useControlledState-rhnbTvJ5.js";import"./useField-B9JegXI1.js";import"./TextField.module-D_N49W1_.js";import"./Label-T9Dkcv3d.js";import"./Dialog-Cea2Af75.js";import"./OverlayArrow-CKQD-sB9.js";import"./useResizeObserver-CT7O4Ydf.js";import"./Collection-CWGphuyT.js";import"./index-CU1XPvi5.js";import"./Separator-CCg5se7g.js";import"./SelectionManager-XH3TArHr.js";import"./useEvent-D68KKf5S.js";import"./scrollIntoView-flHaUglA.js";import"./SelectionIndicator-BWS4ndbQ.js";import"./useDescription-CQRq3R5z.js";import"./ListKeyboardDelegate-Blgdjq5S.js";import"./PressResponder-CJx2kjiK.js";import"./useLocalizedStringFormatter-DiIEHiLq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-XOiqouo7.js";import"./VisuallyHidden-DG79wF2v.js";import"./useLocalizedStringFormatter-C3lzylbp.js";import"./Button-Dy9ld2-X.js";import"./Button.module-CcWMkJAG.js";import"./x-q38K7e_3.js";import"./createLucideIcon-C7Z6_ELW.js";import"./Heading-oWcEa0FQ.js";import"./info-fsNtr6bq.js";import"./Popover-DczJqyHi.js";const Ge={title:"Components/TextField",component:u,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r,className:({isInvalid:J})=>J?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0}},d={args:{showCounter:!0,maxLength:50}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(u,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},l={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,x,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,f,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var j,C,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    isRequired: true
  },
  render: args => <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,P,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextField {...args} className={({
      isInvalid
    }) => isInvalid ? 'invalid' : 'valid'} />
      <button type='submit'>Submit</button>
    </form>
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,F,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,R,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,O,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,H,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var W,$,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <div style={{
    height: 500
  }} data-testid='wrapper'>
      <TextField {...args} label={undefined} description={undefined} aria-label='test' />
      <div style={{
      height: 100
    }}>Dummy content</div>
    </div>
}`,...(k=($=c.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var z,B,G;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Je=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,c as DS1243,p as Disabled,a as Invalid,d as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,o as Required,m as ShowCounter,l as WithHelpPopover,Je as __namedExportsOrder,Ge as default};
