import{j as e}from"./iframe-Cda3lYJ5.js";import{T as u}from"./TextField-BsUvS_6z.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-BDM2ZE9l.js";import"./utils-B37MiCy-.js";import"./clsx-B-dksMZM.js";import"./FieldError-CN0JwA9_.js";import"./Text-wVSZCUEv.js";import"./useFocusRing-qxJMSdl4.js";import"./index-DR8SmJ9z.js";import"./index-Bum8_rPP.js";import"./clsx-Ciqy0D92.js";import"./Text-CsATnSke.js";import"./RSPContexts-Cq6nLQIu.js";import"./Form-XustkT-T.js";import"./useFormValidation-j8JLP9VQ.js";import"./Group-2Q0_i3R1.js";import"./Input-J7wob1-j.js";import"./Hidden-Drd1oYtq.js";import"./Button-D8D8PjNo.js";import"./useLabels-CF0q-n_g.js";import"./useButton-DT6XtdxM.js";import"./useTextField-EZj84PTs.js";import"./useControlledState--bhftPx-.js";import"./useField-DZ1wB0zq.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-B4W-CsK3.js";import"./Dialog-CZ0zIRhV.js";import"./OverlayArrow-C3J3HrAX.js";import"./useResizeObserver-DtIClhhY.js";import"./Collection-V5WPWAb8.js";import"./index-B2WkydPM.js";import"./Separator-xnQuOtfy.js";import"./SelectionManager-bvZGEkBv.js";import"./useEvent-Bd_m2_rp.js";import"./scrollIntoView-CmVJJQVv.js";import"./SelectionIndicator-DyaQ-JJc.js";import"./useDescription-DvxOexdT.js";import"./ListKeyboardDelegate-A1cSHphP.js";import"./PressResponder-BHcJdqV4.js";import"./useLocalizedStringFormatter-7kHjTTHP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-lWuACJzg.js";import"./VisuallyHidden-HwlOoIXR.js";import"./useLocalizedStringFormatter-Crrc13jn.js";import"./Button-C29Mqe4M.js";import"./Button.module-CcWMkJAG.js";import"./x-Dd9ArO1o.js";import"./createLucideIcon-BXWKhSvD.js";import"./Heading-B80yNP41.js";import"./info-BpwYq64p.js";import"./Popover-ayosPJ1Q.js";const Ge={title:"Components/TextField",component:u,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r,className:({isInvalid:J})=>J?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0}},d={args:{showCounter:!0,maxLength:50}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(u,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},l={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,x,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
