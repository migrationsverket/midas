import{j as e,l}from"./iframe-DALTSxsS.js";import{S as t}from"./Skeleton-B3ainCgd.js";import{T as p}from"./TextField-BOdecwfn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-V8ShsdYt.js";import"./utils-DhmNEjlk.js";import"./TextField-D8bymw0K.js";import"./FieldError-CNkTH6UQ.js";import"./Text-DUPMGpBd.js";import"./useFocusRing-D9a5eyQj.js";import"./index-ZpmiPRxE.js";import"./index-1lGZN6GB.js";import"./Text-QPtdxepC.js";import"./RSPContexts-DWTJMTK0.js";import"./Form-Dq7HVupu.js";import"./useFormValidation-DMuhtnrm.js";import"./Group-DyBed1IZ.js";import"./Input-KkAflIxH.js";import"./Hidden-BWGddJP9.js";import"./Button-BolZLxlI.js";import"./useLabels-RBjCfxHd.js";import"./useButton-DTVnyrV6.js";import"./useTextField-C-tP9hem.js";import"./useControlledState-Db3CL_cp.js";import"./useField-Bo5DVUfk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DTr6YgZ2.js";import"./Dialog-epNG4iu2.js";import"./OverlayArrow-BbfpKb2i.js";import"./useResizeObserver-o677WSrE.js";import"./Collection-CoXo-z-m.js";import"./index-CQSewXcr.js";import"./Separator-YZjW7xUm.js";import"./SelectionManager-D4xIimb0.js";import"./useEvent-So3QqFJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D9XxgJ0V.js";import"./useDescription-CRMtKc5O.js";import"./ListKeyboardDelegate-Co-OCIhP.js";import"./PressResponder-BRhPcpR8.js";import"./useLocalizedStringFormatter-CYXYCABu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFOPqJoa.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DziWvBuP.js";import"./Button-Dq10fmnU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJVitUFs.js";import"./createLucideIcon-DnVmKfBY.js";import"./x-4TwixKAW.js";import"./Heading-CP8R22Yb.js";import"./info-DjN0Evpm.js";import"./Popover-ZeBtdQRy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
