import{j as e,l}from"./iframe-CG21FvLg.js";import{S as t}from"./Skeleton-CkdBrDJo.js";import{T as p}from"./TextField-CMITj1ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BFxHp13B.js";import"./utils-Dfpd-lDd.js";import"./FieldError-D1k-tzt9.js";import"./Text-D17DsBlZ.js";import"./useFocusRing-UKlSaOwL.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./Text-DYV6Mtqz.js";import"./RSPContexts-bVWhtwKV.js";import"./Form-DCvqDcwU.js";import"./Group-DUq970bw.js";import"./Input-BoL5jQWE.js";import"./Hidden-DHiBRU7w.js";import"./Button-eYd2LYW1.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./useTextField-B4s5pB-U.js";import"./useControlledState-py48MqsP.js";import"./useField-pxlW-odg.js";import"./TextField.module-DdivwlC8.js";import"./Label-CzrlB_hv.js";import"./Dialog-CFObKHxI.js";import"./OverlayArrow--2SsuVm1.js";import"./useResizeObserver-ClupCXd0.js";import"./Collection-DKvsrM8n.js";import"./index-BMn1uAFZ.js";import"./Separator-CwHdkvyR.js";import"./SelectionManager-Ddjx_Pab.js";import"./useEvent-DK1Ig8Tf.js";import"./scrollIntoView-DbthYiWP.js";import"./SelectionIndicator-BYoIF3tz.js";import"./useDescription-DzkVNNnf.js";import"./ListKeyboardDelegate-BsMDHkG0.js";import"./PressResponder-DPgccHON.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCWxWkNe.js";import"./getScrollParent-yFgCZLQn.js";import"./VisuallyHidden-B-Rie-TX.js";import"./ModalOverlay-b0dkQchM.js";import"./x-DrfF8WsI.js";import"./createLucideIcon-DIP5Ktet.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Heading-Bl-bKlIC.js";import"./Button-DTO_Qu1U.js";import"./Button.module-BB7N-cLd.js";import"./info-5JnoM-IT.js";import"./Popover-VCd0dm5O.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
