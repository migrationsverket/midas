import{j as e,l}from"./iframe-ByTr7nlQ.js";import{S as t}from"./Skeleton-BCNa129y.js";import{T as p}from"./TextField-Bj36L49m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-cJAVxEAh.js";import"./utils-BtbeVzab.js";import"./FieldError-B_MaF9By.js";import"./Text-B83XfqSN.js";import"./useFocusRing-BjdQLYQY.js";import"./index-tkq_ZtSc.js";import"./index-BqV0DkUs.js";import"./Text-dWwsRFEm.js";import"./RSPContexts-6m7Yijnj.js";import"./Form-Ba-xR42s.js";import"./Group-6zTvAcDv.js";import"./Input-Bex5Ft88.js";import"./Hidden-BuUimY0Q.js";import"./Button-BSq_-Fzo.js";import"./useLabel-Dw4tdRRI.js";import"./useLabels-BssvX8bv.js";import"./useButton-CMclMGMy.js";import"./useTextField-CrbrMX8I.js";import"./useControlledState-B7X5e3Qm.js";import"./useField-Btp5d6yU.js";import"./TextField.module-DdivwlC8.js";import"./Label-DUoG80sH.js";import"./Dialog-CmDz57iQ.js";import"./OverlayArrow-aoL4Lob6.js";import"./useResizeObserver-0Bwlgc9L.js";import"./Collection-Baidu9Hh.js";import"./index-CwxHN_b1.js";import"./Separator-B9Phou08.js";import"./SelectionManager-Ce3snNdv.js";import"./useEvent-DM7MuSEq.js";import"./scrollIntoView-1sk2wFtb.js";import"./SelectionIndicator-CWCU-OCj.js";import"./useDescription-DLDUSAjo.js";import"./ListKeyboardDelegate-CCfv3Pud.js";import"./PressResponder-x5xHUhIy.js";import"./useLocalizedStringFormatter-ByBwQZl0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXN9_r3c.js";import"./getScrollParent-C2971BjC.js";import"./VisuallyHidden-jMWhN52g.js";import"./Modal-BnSP1vtb.js";import"./x-CTnfdq1Z.js";import"./createLucideIcon-hQqGcF6U.js";import"./useLocalizedStringFormatter-B9QStVrX.js";import"./Heading-BOOm_FoR.js";import"./Button-CH4Ce674.js";import"./Button.module-BB7N-cLd.js";import"./info-D4Wt3czt.js";import"./Popover-BDDjayej.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
