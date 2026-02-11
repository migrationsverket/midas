import{j as e,l}from"./iframe-BrSFSEso.js";import{S as t}from"./Skeleton-BIyvivdk.js";import{T as p}from"./TextField-ByPbIbFK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CXmUNkfY.js";import"./utils-CSLr47GB.js";import"./TextField-DO2djXGD.js";import"./FieldError-C1wT0W68.js";import"./Text-CqAiKc3c.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./Text-afjM-cTG.js";import"./RSPContexts-D6LnjnjF.js";import"./Form-DcVXVRUN.js";import"./useFormValidation-DYc4Vusd.js";import"./Group-ggQdBBag.js";import"./Input-kjJsHDHI.js";import"./Hidden-bRkw9FY4.js";import"./Button-sstewYaM.js";import"./number-DfkVkf0F.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./useTextField-BpM0-sgz.js";import"./useControlledState-CqGR6b7a.js";import"./useField-BUD6g1mX.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BwjNgHnq.js";import"./Dialog-GDy5bWq5.js";import"./OverlayArrow-S-wF1zMs.js";import"./useResizeObserver-C-3K1Yg-.js";import"./Collection-gPtAIt1S.js";import"./index-AqybnyRZ.js";import"./Separator-btKLgu5F.js";import"./SelectionManager-B_55B_zK.js";import"./useEvent-Bnvwx3ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DsPVl8Wi.js";import"./useDescription-CgGPIItB.js";import"./ListKeyboardDelegate-CCJ1QruW.js";import"./PressResponder-Cw8JUUw4.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2q38RaJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./Modal-BBpNHHOc.js";import"./Button-D56CPdXD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./createLucideIcon-D7YZh2ey.js";import"./x-DQ48cbAb.js";import"./Heading-BO2ZHWnX.js";import"./info-D9QMLE3p.js";import"./Popover-C4JN4Q0f.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};
