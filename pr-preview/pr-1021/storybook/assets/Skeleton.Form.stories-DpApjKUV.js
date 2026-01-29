import{j as e,l}from"./iframe-CRizNrQm.js";import{S as t}from"./Skeleton-DsvmOhN4.js";import{T as p}from"./TextField-Bu1OYraK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-r6mNAAd7.js";import"./utils-K8G9J7j3.js";import"./TextField-DnpyMvsU.js";import"./FieldError-D2PjhZcF.js";import"./Text-DMcqYI8P.js";import"./useFocusRing-DbEG3syD.js";import"./index-BLxVqi3w.js";import"./index-U_5gcQv1.js";import"./Text-BVUreVA5.js";import"./RSPContexts-CN45OwZB.js";import"./Form-Bi2fHGRN.js";import"./useFormValidation-D9K4R1_5.js";import"./Group-f0qHNjxh.js";import"./Input-Cxrxgf2H.js";import"./Hidden-BVxPU0E9.js";import"./Button-B_2FCxCF.js";import"./useLabels-DaIxsHkM.js";import"./useButton-C-avZcWZ.js";import"./useTextField-DMjYFmDq.js";import"./useControlledState-BE4ES4tB.js";import"./useField-BxlqX-oM.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CIuYYTAs.js";import"./Dialog-CTD66El0.js";import"./OverlayArrow-BbaNn7kM.js";import"./useResizeObserver-BWwrB_M1.js";import"./Collection-BP_hPNSj.js";import"./index-CubTc-Vn.js";import"./Separator-Cjbk9ber.js";import"./SelectionManager-DCOVGJOt.js";import"./useEvent-DR2hB797.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-RCQ_aLXk.js";import"./useDescription-Cy2gNtMJ.js";import"./ListKeyboardDelegate-C6qAstel.js";import"./PressResponder-DA8WnTpB.js";import"./useLocalizedStringFormatter-e4SpOeO9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_hT5jSd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CSY-auv0.js";import"./Button-BfSqLmBa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUb6pTdq.js";import"./createLucideIcon-B6uSx5I0.js";import"./x-B4wlmJ4S.js";import"./Heading-Je3Oz_eC.js";import"./info-D6kbZPrk.js";import"./Popover-uFPgnx0q.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
