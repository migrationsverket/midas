import{j as e,l}from"./iframe-Hg8hxll6.js";import{S as t}from"./Skeleton-UqiFmv5u.js";import{T as d}from"./TextField-DZNB2oHi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BydmMth5.js";import"./utils-DkBAlQaP.js";import"./TextField-Bu3lft7-.js";import"./FieldError-BnM-2-2F.js";import"./Text-g8ihhCC7.js";import"./useFocusRing-BHhaWYLO.js";import"./index-C9pUtnOL.js";import"./index-QbllegrG.js";import"./Text-CbJwjeA3.js";import"./RSPContexts-CUKDrdkA.js";import"./Form-D11P-vpE.js";import"./useFormValidation-DrG2oSap.js";import"./Group-FDtQUWDo.js";import"./Input-BcxZt8BM.js";import"./Hidden-CW8eyMJF.js";import"./Button-D6s1rIHb.js";import"./useLabels-Dhhk-JlN.js";import"./useButton-C_20Yccn.js";import"./useTextField-BuIPC83D.js";import"./useControlledState-B9N8h_ty.js";import"./useField-B7WoHvpW.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-By6vt0_4.js";import"./Dialog-Bt01w8AN.js";import"./OverlayArrow-C3YpQDvv.js";import"./useResizeObserver-B4anKBbX.js";import"./Collection-C-gv1rI3.js";import"./index-x-LGDK9V.js";import"./Separator-DJhUtRxR.js";import"./SelectionManager-BdusSTK8.js";import"./useEvent-DcZb6QTG.js";import"./scrollIntoView-QWj_UH7z.js";import"./SelectionIndicator-BUZofeGN.js";import"./useDescription-DDUPD-SO.js";import"./ListKeyboardDelegate-C9e4k2u4.js";import"./PressResponder-CI1P2mdv.js";import"./useLocalizedStringFormatter-BuwzLtaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D5TELs7H.js";import"./VisuallyHidden-DEAPyNKO.js";import"./Button-BHcDCTkB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Kb9GHVVg.js";import"./createLucideIcon-CorD8qZx.js";import"./x-BaNtwQF2.js";import"./Heading-BLhkKBPG.js";import"./info-DDfYDP-7.js";import"./Popover-BEWd7qbM.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
