import{j as e,l}from"./iframe-DcpPkcOs.js";import{S as t}from"./Skeleton-X62y-cCd.js";import{T as p}from"./TextField-0Gxui08T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CtS4fZDB.js";import"./utils-CXltNwJi.js";import"./FieldError-Cl9GqMGN.js";import"./Text-gI7geXGi.js";import"./useFocusRing-C7oRwYv0.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./Text-BV9SFXbp.js";import"./RSPContexts-BUPHzZx4.js";import"./Form-B9OWvrpD.js";import"./Group-CWGdMi5E.js";import"./Input-DTsEeFve.js";import"./Hidden-DC53IPGT.js";import"./Button-Ct2gBhbQ.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./useTextField-6450-3pf.js";import"./useControlledState-CqQWqGWO.js";import"./useField-RZdE92CO.js";import"./TextField.module-DdivwlC8.js";import"./Label-DjyY87Mn.js";import"./Dialog-qTO-2YAL.js";import"./OverlayArrow-C3cN_iuY.js";import"./useResizeObserver-Cw_kr4qy.js";import"./Collection-rQ5njRkg.js";import"./index-nmIxaWMa.js";import"./Separator-xF4GrPwW.js";import"./SelectionManager-BjMDwzbf.js";import"./useEvent-BNdFNVTO.js";import"./scrollIntoView-DIZ8_NQ2.js";import"./SelectionIndicator-D1NBEiqF.js";import"./useDescription-BvGFSiIZ.js";import"./ListKeyboardDelegate-DwdjdjQX.js";import"./PressResponder-DTfh9jEN.js";import"./useLocalizedStringFormatter-CuAPqpgo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCoMn1WX.js";import"./getScrollParent-Ck1J4Oi-.js";import"./VisuallyHidden-WVnnRw_3.js";import"./ModalOverlay-_vUIue_7.js";import"./x-CuQKBrfl.js";import"./createLucideIcon-CmxgNO3A.js";import"./useLocalizedStringFormatter-Dei12d-p.js";import"./Heading-B7voFT4a.js";import"./Button-Bt5uFCnx.js";import"./Button.module-BB7N-cLd.js";import"./info-_OyiUUCE.js";import"./Popover-DVIRrofi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
