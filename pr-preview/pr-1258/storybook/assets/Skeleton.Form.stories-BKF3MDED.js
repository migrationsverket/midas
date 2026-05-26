import{j as e,l}from"./iframe-CXw6yEtL.js";import{S as t}from"./Skeleton-CKmUuwNq.js";import{T as p}from"./TextField-gvrLjZu8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-o9ylp2an.js";import"./utils-TMTFLosf.js";import"./FieldError-DxjbVN8c.js";import"./Text-B-ez7dVi.js";import"./useFocusRing-BUJw-zNR.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./Text-DfSBpgc9.js";import"./RSPContexts-CRecp9AH.js";import"./Form-dUtoNK2v.js";import"./Group-Bc1Fe6Rl.js";import"./Input-kZlQDEcC.js";import"./Hidden-D7hcqzmB.js";import"./Button-C2Moqf7z.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./useTextField-DtF14BWt.js";import"./useControlledState-uGX0UHSY.js";import"./useField-CgwfKGqG.js";import"./TextField.module-DdivwlC8.js";import"./Label-GQUT7ZEJ.js";import"./Dialog-BDtLRBZX.js";import"./OverlayArrow-CYsKMuHd.js";import"./useResizeObserver-BgbTD5F9.js";import"./Collection-DRs08V62.js";import"./index-D_bJjS7Z.js";import"./Separator-CiHVhPYJ.js";import"./SelectionManager-DF7_C-wd.js";import"./useEvent-CLzgpnys.js";import"./scrollIntoView-J9HcqoeY.js";import"./SelectionIndicator-CRVyJK_1.js";import"./useDescription-5GU4b1w7.js";import"./ListKeyboardDelegate-C0AuU4n7.js";import"./PressResponder-BdAtoMPY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmiDGQ5a.js";import"./getScrollParent-DI5JJTrt.js";import"./VisuallyHidden-DZf8hqs4.js";import"./ModalOverlay-Bj4CBpHh.js";import"./x-Cy8UX61V.js";import"./createLucideIcon-DWQv9Ysr.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./Heading-E2UPktky.js";import"./Button-DEhxKNaB.js";import"./Button.module-BB7N-cLd.js";import"./info-95qLpLfK.js";import"./Popover-DnXwvssA.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
