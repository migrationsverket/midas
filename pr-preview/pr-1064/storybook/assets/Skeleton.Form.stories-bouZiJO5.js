import{j as e,l}from"./iframe-DrmPUhtX.js";import{S as t}from"./Skeleton-DEwuwY7D.js";import{T as p}from"./TextField-CE6oWiUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bx6zt3pF.js";import"./utils-Dua4TRiH.js";import"./FieldError-obpxZCHn.js";import"./Text-CxmjGSV2.js";import"./useFocusRing-BNHXCoxm.js";import"./index-PAOxTS2r.js";import"./index-D-dIolA3.js";import"./Text-DkoI531E.js";import"./RSPContexts-ZJmi3UUb.js";import"./Form-qpWFQjaS.js";import"./useFormValidation-CXx1vBnx.js";import"./Group-BTpK8Ylv.js";import"./Input-BPdR7A6u.js";import"./Hidden-BtcA-10V.js";import"./Button-BRd7RKkm.js";import"./useLabels-BuRHQX82.js";import"./useButton-BeQ8yPDi.js";import"./useTextField-Ck97sTRL.js";import"./useControlledState-CPqfCSd5.js";import"./useField-BBSmKDdI.js";import"./TextField.module-Dhscz2t0.js";import"./Label-CVvg9Udt.js";import"./Dialog-DiZH0gV9.js";import"./OverlayArrow-DfZMzxqA.js";import"./useResizeObserver-4XTvcQFt.js";import"./Collection-b6_XQqRw.js";import"./index-CQppD3ii.js";import"./Separator-BCBh5NBg.js";import"./SelectionManager-CgtbsMya.js";import"./useEvent-CawZJgI-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CrjHOO0s.js";import"./useDescription-CYDi8KlD.js";import"./ListKeyboardDelegate-DCJOIvbr.js";import"./PressResponder-B9h388Jb.js";import"./useLocalizedStringFormatter-5H_vyTJU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6EuF8ob.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bA_PzrHg.js";import"./Button-B2oaCNDe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CK8ulSsr.js";import"./createLucideIcon-lnTltRl9.js";import"./x-gIz19uq9.js";import"./Heading-D9rDmJb2.js";import"./info-Kgb_W6Sw.js";import"./Popover-DCw4wKE9.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
