import{j as e,l}from"./iframe-DkekDUmt.js";import{S as t}from"./Skeleton-Dq1-y4dO.js";import{T as p}from"./TextField-Bhf34FnH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DoT0FYK4.js";import"./utils-BXReLSzV.js";import"./TextField-CKDD27a5.js";import"./FieldError-CEappIaf.js";import"./Text-HRZszqtu.js";import"./useFocusRing-cFhFEPkT.js";import"./index-BWGp6XmU.js";import"./index-Dl4xFDvX.js";import"./Text-D-M7BBlz.js";import"./RSPContexts-CpoGppFQ.js";import"./Form-DLIviGGL.js";import"./useFormValidation-CkgdwYyU.js";import"./Group-DygO-QMN.js";import"./Input-bzW5NWWM.js";import"./Hidden-C3DRpHWW.js";import"./Button-CPMuKErG.js";import"./useLabels-RwNRRVV1.js";import"./useButton-DGHMXKPK.js";import"./useTextField-Bz31S-zo.js";import"./useControlledState-CpjACMp2.js";import"./useField-BMA0_Hdl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DVuM6C5j.js";import"./Dialog-BuwsrLx_.js";import"./OverlayArrow-BdpXS5xM.js";import"./useResizeObserver-CKvJ8Afq.js";import"./Collection-ClwlsW-k.js";import"./index-mwX1nWxh.js";import"./Separator-C0rqKJ69.js";import"./SelectionManager-4hWAiqPe.js";import"./useEvent-hPCrmc6p.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-QewNDPGC.js";import"./useDescription-DL-v02pN.js";import"./ListKeyboardDelegate-CdPGoYoU.js";import"./PressResponder-Cl82H1wV.js";import"./useLocalizedStringFormatter-2FeDuEc7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCUvnScD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4lBxf5D.js";import"./Button-ByTmb1iy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cb4oEEvA.js";import"./createLucideIcon-y8-UPzuM.js";import"./x-DOULuHb2.js";import"./Heading-BWFYz-Kg.js";import"./info-DjxsNLx0.js";import"./Popover-CdXzXy5J.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
