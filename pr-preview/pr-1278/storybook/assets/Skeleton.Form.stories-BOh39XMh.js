import{j as e,l}from"./iframe-A34tc1ma.js";import{S as t}from"./Skeleton-kagQL_-x.js";import{T as p}from"./TextField-CIxZriRr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CiPup4tu.js";import"./utils-iaIw3nix.js";import"./FieldError-DMBLsclX.js";import"./Text-PcmClRY0.js";import"./useFocusRing-OnJtBabX.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./Text-Bo9OR3IW.js";import"./RSPContexts-BvXmiLjq.js";import"./Form-DALnZx4j.js";import"./Group-BprcskVh.js";import"./Input-DUNgLaBZ.js";import"./Hidden-Bx_LiQEx.js";import"./Button-CJGwxkR8.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./useTextField-Caf_9lIH.js";import"./useControlledState-dFFgK4uz.js";import"./useField-CG1X9erO.js";import"./TextField.module-DdivwlC8.js";import"./Label-CyI0-HRv.js";import"./Dialog-C2Mbm9Zl.js";import"./OverlayArrow-Cp6jK_Cj.js";import"./useResizeObserver-YHNjG9pb.js";import"./Collection-DXUX_Ij0.js";import"./index-jxQ6KrOQ.js";import"./Separator-C6UYN-Wn.js";import"./SelectionManager-BCe-zS_L.js";import"./useEvent-DAxeeYk2.js";import"./scrollIntoView-DqSfMztI.js";import"./SelectionIndicator-ADiRG3zF.js";import"./useDescription-CkN0W4le.js";import"./ListKeyboardDelegate-D5zJhQGj.js";import"./PressResponder-CJBJbSXq.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cy3ig-9a.js";import"./getScrollParent-BfgMvCMm.js";import"./VisuallyHidden-DFcjAmAE.js";import"./ModalOverlay-DJ3CtWPB.js";import"./x-8qJuT3y7.js";import"./createLucideIcon-Bnflbpu4.js";import"./useLocalizedStringFormatter-6FVavbxu.js";import"./Heading-DONAk9Wf.js";import"./Button-CEptxBDM.js";import"./Button.module-BB7N-cLd.js";import"./info-BPh9R6AN.js";import"./Popover-D-qt9XjH.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
