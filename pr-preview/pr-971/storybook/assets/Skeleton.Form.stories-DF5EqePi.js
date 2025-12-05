import{j as e,l}from"./iframe-DvQx2gHF.js";import{S as t}from"./Skeleton-DTbZfr6e.js";import{T as p}from"./TextField-BycY4zRy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CM8a6aW0.js";import"./utils-kfQmERKd.js";import"./TextField-D8A00bhh.js";import"./FieldError-DS02Wc0O.js";import"./Text-DEDKiYgd.js";import"./useFocusRing-DA1DKtBL.js";import"./index-B92ZKY4H.js";import"./index-DZ0gSeKU.js";import"./Text-CeKhBkxD.js";import"./RSPContexts-yU5fq5U4.js";import"./Form-Ce8HaIjg.js";import"./useFormValidation-Dif47p0R.js";import"./Group-CFMDXwku.js";import"./Input-DojRz35f.js";import"./Hidden-CjIUyCHW.js";import"./Button-7kzFrNDU.js";import"./useLabels-CZfFJAUf.js";import"./useButton-Bt6boJfA.js";import"./useTextField-BZzukU8p.js";import"./useControlledState-DOrx9kOQ.js";import"./useField-BhZGmss7.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-69gCBUy1.js";import"./Dialog-C95XLiib.js";import"./OverlayArrow-DhxTPD6z.js";import"./useResizeObserver-DkJXa8WC.js";import"./Collection-BEQ3VvZG.js";import"./index-Dx8oh3-6.js";import"./Separator-iW54WtdU.js";import"./SelectionManager-jqduvZp3.js";import"./useEvent-DMnH7e8B.js";import"./scrollIntoView-DalvlgH8.js";import"./SelectionIndicator-CVhZMUq0.js";import"./useDescription-iLPOYYta.js";import"./ListKeyboardDelegate-DDuB35RB.js";import"./PressResponder-ChRN2HnX.js";import"./useLocalizedStringFormatter--PBbunYI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B92Iv5XW.js";import"./VisuallyHidden-25PLEdNG.js";import"./Button-LMMkuH17.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DlX39nGo.js";import"./createLucideIcon-B90TrqxK.js";import"./x-C-u_grC0.js";import"./Heading-DBAarICY.js";import"./info-vYmAjJRi.js";import"./Popover-D_Hckzz1.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
