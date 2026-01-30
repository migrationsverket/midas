import{j as e,l}from"./iframe-CzkIVWu3.js";import{S as t}from"./Skeleton-CN4Hfpn6.js";import{T as p}from"./TextField-CHWYX8iq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-SZasjjEj.js";import"./utils-DZrNC9W-.js";import"./TextField-Du_D0lPL.js";import"./FieldError-BfaONkuD.js";import"./Text-SOVw6BD9.js";import"./useFocusRing-m88TTZQ1.js";import"./index-B4Y469Zs.js";import"./index-CS5avNyc.js";import"./Text-DYfagpWy.js";import"./RSPContexts-BCM-zQK8.js";import"./Form-DSqWRRTm.js";import"./useFormValidation-PxMK62x-.js";import"./Group-DfUTtcjK.js";import"./Input-BiMb4Sck.js";import"./Hidden-D7FrmOoe.js";import"./Button-DhtFINKQ.js";import"./useLabels-Dsf3Sz-Y.js";import"./useButton-Bky5JxvW.js";import"./useTextField-BmmMvCiW.js";import"./useControlledState-Cna3kncS.js";import"./useField-Ds0Z1Igf.js";import"./TextField.module-1fNSVGjT.js";import"./Label-zYI1t4se.js";import"./Dialog-CmVHG6Nt.js";import"./OverlayArrow-BqFsu7F7.js";import"./useResizeObserver-BfmVivxN.js";import"./Collection-BL35lM_F.js";import"./index-DT3i1LOp.js";import"./Separator-BIS6Gc1n.js";import"./SelectionManager-Dq4NnlAM.js";import"./useEvent-BUHVKPgO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CyeKwJf3.js";import"./useDescription-WzmBOmwR.js";import"./ListKeyboardDelegate-DoMDUw9w.js";import"./PressResponder-C3UJPuJX.js";import"./useLocalizedStringFormatter-Bj-fK2b0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDmgZWW5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9fSBHBW.js";import"./Button-DaFIfdKd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YJ9MX6im.js";import"./createLucideIcon-DxsLAk9T.js";import"./x-Dvr9Mgrq.js";import"./Heading-5uV_oDOE.js";import"./info-D-iyIp5E.js";import"./Popover-CP3cpvpy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
