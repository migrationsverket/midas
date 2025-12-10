import{j as e,l}from"./iframe-Dynq-WfW.js";import{S as t}from"./Skeleton-HPgAiwav.js";import{T as p}from"./TextField-BHO6tdNV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-LN26LaRr.js";import"./utils-C5f3leNv.js";import"./TextField-Dt8kMuNE.js";import"./FieldError-DMaQ57CQ.js";import"./Text-Cnz-vVuh.js";import"./useFocusRing-BAuEJFrN.js";import"./index-YRe8YCfP.js";import"./index-S1WfcoeI.js";import"./Text-CyHTqQNs.js";import"./RSPContexts-DYQoab7T.js";import"./Form-EHRiKevF.js";import"./useFormValidation-C2_jfezl.js";import"./Group-B6F08c3_.js";import"./Input-B30rsVtQ.js";import"./Hidden-B_nMsfp6.js";import"./Button-CHr1GBYB.js";import"./useLabels-C0xISSqM.js";import"./useButton-CO5VodBT.js";import"./useTextField-BIo972XK.js";import"./useControlledState-B4c64_YE.js";import"./useField-CFMQ-uSy.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-9M32I9cl.js";import"./Dialog-Dsv5S1w7.js";import"./OverlayArrow-DlUSCgdR.js";import"./useResizeObserver-BBvU3bav.js";import"./Collection-BOVukDKR.js";import"./index-BiH5f6GO.js";import"./Separator-CMXv2l2s.js";import"./SelectionManager-tNGgxcmj.js";import"./useEvent-BUD_aeZx.js";import"./scrollIntoView-DH3xZtz3.js";import"./SelectionIndicator-BvWsaTyN.js";import"./useDescription-D_aj6rqo.js";import"./ListKeyboardDelegate-kRLBhSjx.js";import"./PressResponder-DLEOVX5D.js";import"./useLocalizedStringFormatter-iG9Zi8vK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BP74HWTE.js";import"./VisuallyHidden-DTGQFyag.js";import"./Button-CGVjpGMW.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-JxJiRHf8.js";import"./createLucideIcon-DfdNSkLt.js";import"./x-C7yqcza2.js";import"./Heading-D7RDPSXt.js";import"./info-_scF36JD.js";import"./Popover-DwZDh29s.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
