import{j as e,l}from"./iframe-Ct1ppXcO.js";import{S as t}from"./Skeleton-DZd-9B9b.js";import{T as p}from"./TextField-BWkDynaK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C4mmaCMG.js";import"./utils-C-gSI02s.js";import"./TextField-CzdR1Ngy.js";import"./FieldError-MCWN8uVd.js";import"./Text-bA96Aj1V.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./Text-BLnUO4XT.js";import"./RSPContexts-DiUMKu6B.js";import"./Form-BEQJjWQu.js";import"./useFormValidation-CbVk8cPB.js";import"./Group-hdWgJpAB.js";import"./Input-CFNJPp2B.js";import"./Hidden-BnjpnQVL.js";import"./Button-Co_Oqhu6.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./useTextField-BLmDom6j.js";import"./useControlledState-BMKsiY2b.js";import"./useField-C735bYz9.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CYtVDj30.js";import"./Dialog-cs7NWbrU.js";import"./OverlayArrow-Cv6Hgff_.js";import"./useResizeObserver-CiFVHVXh.js";import"./Collection-BfE2ozAg.js";import"./index-SMovkzve.js";import"./Separator-Dk7hiyQq.js";import"./SelectionManager-CFIbccgx.js";import"./useEvent-CQqH1fQz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DQUn9HeB.js";import"./useDescription-D0KYtWwq.js";import"./ListKeyboardDelegate-DOcJQ6-3.js";import"./PressResponder-CMjUmock.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be5ZenH1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CPthcFHg.js";import"./Button-DGYQQhVQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./createLucideIcon-BuchYPst.js";import"./x-DhEC6HJx.js";import"./Heading-8Bvul9yl.js";import"./info-EPuz7-Fk.js";import"./Popover-NWW3-HoD.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
