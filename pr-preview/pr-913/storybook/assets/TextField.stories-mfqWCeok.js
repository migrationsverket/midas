import{j as e}from"./iframe-Cr4WfoQu.js";import{T as u}from"./TextField-BKDfGQsF.js";import"./preload-helper-Dp1pzeXC.js";import"./TextFieldBase-D7SNAgNd.js";import"./utils-DHqaSaah.js";import"./clsx-B-dksMZM.js";import"./FieldError-DwFat6Pu.js";import"./Text-CLBerHO9.js";import"./useFocusRing-A0Iejy3t.js";import"./index-ahcTeaoi.js";import"./index-Cl3XFRZD.js";import"./clsx-Ciqy0D92.js";import"./Text-XRFpH-QD.js";import"./RSPContexts-hqjNZRiO.js";import"./Form-BEhcKl3R.js";import"./useFormValidation-C0n1puQ1.js";import"./Group-CA1QzuUV.js";import"./Input-kI6lb1YG.js";import"./Hidden-y5xVPkEo.js";import"./Button-CWNWBCLL.js";import"./useLabels-D5cPIeJx.js";import"./useButton-Cn1nrHEi.js";import"./useTextField-DiuIYfWW.js";import"./useControlledState-CJTE2atU.js";import"./useField-DNaD-tAF.js";import"./TextField.module-D_N49W1_.js";import"./Label-B7O4v2s8.js";import"./Dialog--QIGIdi5.js";import"./OverlayArrow-Ct75xW0F.js";import"./useResizeObserver-B0pFLRLi.js";import"./Collection-Clu6UAAz.js";import"./index-CFUvupni.js";import"./Separator-CatoRGGg.js";import"./SelectionManager-BIUOwNV6.js";import"./useEvent-D78zWiNU.js";import"./scrollIntoView-DBzOrzZT.js";import"./SelectionIndicator-2wYmTlZ5.js";import"./useDescription-DyKVOJrP.js";import"./ListKeyboardDelegate-DpONWVsR.js";import"./PressResponder-C_66mXgi.js";import"./useLocalizedStringFormatter-DL8Gx4OI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D1z4-oxg.js";import"./VisuallyHidden-8S_NTlsa.js";import"./useLocalizedStringFormatter-DM5L-bdE.js";import"./Button-DVboz95x.js";import"./Button.module-CcWMkJAG.js";import"./x-nKeG1E-Q.js";import"./createLucideIcon-Dwgci-K1.js";import"./Heading-B9tC5tD_.js";import"./info-D7vLfvTm.js";import"./Popover-DEGRYQFK.js";const Ge={title:"Components/TextField",component:u,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(u,{...r,className:({isInvalid:J})=>J?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{value:"I love apples",showCounter:!0}},d={args:{showCounter:!0,maxLength:50}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(u,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},l={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,x,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
