import{j as e,l}from"./iframe-C2Yyxb_o.js";import{S as t}from"./Skeleton-CsOG-6id.js";import{T as p}from"./TextField-DIkv_TJH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DHjJ05yC.js";import"./utils-WFtffLiW.js";import"./FieldError-C6hW-3rq.js";import"./Text-Dt7S0YjD.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./Text-CeM-jeK1.js";import"./RSPContexts-2VRlgjKK.js";import"./Form-CyxWrLxN.js";import"./useFormValidation-C7BWwups.js";import"./Group-CcsfCsPd.js";import"./Input-BVdDzWXZ.js";import"./Hidden-DgX5eHvD.js";import"./Button-BIrUuJFL.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./useTextField-dCbEBezK.js";import"./useControlledState-Cdg6EvLr.js";import"./useField-_oAE-yI6.js";import"./TextField.module-DdivwlC8.js";import"./Label-BSIe7yZO.js";import"./Dialog-Ca5QR5rZ.js";import"./OverlayArrow-Cuj2GhQm.js";import"./useResizeObserver-DApr3h-8.js";import"./Collection-CRznF4DQ.js";import"./index-SCf2pMTj.js";import"./Separator-DYnNf088.js";import"./SelectionManager-Bj0gjutB.js";import"./useEvent-DX2tR9aV.js";import"./scrollIntoView-CyGcDExg.js";import"./SelectionIndicator-TGObzo75.js";import"./useDescription-BVRp3o_m.js";import"./ListKeyboardDelegate-CIhBGTnQ.js";import"./PressResponder-DCy26f7a.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1QgDtMf.js";import"./getScrollParent-BkBLu-wI.js";import"./VisuallyHidden-B7F_lxL0.js";import"./x-DfcaNs2P.js";import"./createLucideIcon-CfyIEXzg.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./Heading-BDvA49Rx.js";import"./Button-BQqfifzb.js";import"./Button.module-D_C6WeTN.js";import"./info-DwWqKY3j.js";import"./Popover-CFwYPtoe.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
