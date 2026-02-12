import{j as e,l}from"./iframe-CYE28S4B.js";import{S as t}from"./Skeleton-V5GgFQ7i.js";import{T as p}from"./TextField-CeNkCaEF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-g4b1zisx.js";import"./utils-DXU04MTS.js";import"./FieldError-C_HeO-Fn.js";import"./Text-CRNMg4rg.js";import"./useFocusRing-DDD8-X_C.js";import"./index-SDL6z_K4.js";import"./index-CewZdSQ7.js";import"./Text-BJwWTomA.js";import"./RSPContexts-BQSzUrSr.js";import"./Form-BGF0gvBf.js";import"./useFormValidation-CBM5gBIr.js";import"./Group-ByYxvLOF.js";import"./Input-CSCx93cL.js";import"./Hidden-u2Ek9cYJ.js";import"./Button-C-ijGV-E.js";import"./useLabels-WDeNF-KU.js";import"./useButton-DlXq6u0P.js";import"./useTextField-Z072AKh4.js";import"./useControlledState-AzqIiJWa.js";import"./useField-fOhcEUsN.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CaF8pDwl.js";import"./Dialog-C0ifQktr.js";import"./OverlayArrow-Rqj7tz6D.js";import"./useResizeObserver-DlrWRcFI.js";import"./Collection-Dh2InLFD.js";import"./index-DMVPUX41.js";import"./Separator--qyox644.js";import"./SelectionManager-h7749Rdb.js";import"./useEvent-DK-t1HBg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bc9pd1pr.js";import"./useDescription-Bq9lFz9Y.js";import"./ListKeyboardDelegate-AZmLkpC7.js";import"./PressResponder-CF4f691_.js";import"./useLocalizedStringFormatter-xFOfyFr2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-5jjtUXBI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DKT9_oz-.js";import"./Button-bGch504k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8xa7oGT.js";import"./createLucideIcon-DTiky_Fg.js";import"./x-DUTBlblH.js";import"./Heading-DISB2bO5.js";import"./info-Dx8n41An.js";import"./Popover-CC27QVFd.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
