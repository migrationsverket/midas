import{j as e,l}from"./iframe-B78wn1WG.js";import{S as t}from"./Skeleton-CMmuqPVK.js";import{T as p}from"./TextField-CnAMs9a_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DNWVjJnm.js";import"./utils-RTE5txou.js";import"./TextField-Cu-cTja-.js";import"./FieldError-BWFa-LBr.js";import"./Text-DhYauZPs.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./Text-CI45cqHe.js";import"./RSPContexts-gOljqF4f.js";import"./Form-BPVKSKvY.js";import"./useFormValidation-DjwK84Yp.js";import"./Group-BsKZ-ZAN.js";import"./Input-D796a45l.js";import"./Hidden-Dmy_tbtO.js";import"./Button-Dj90Y4Eb.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./useTextField-66VUwVkb.js";import"./useControlledState-hc0v7KHB.js";import"./useField-BZ6Bn88N.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D8wejGKf.js";import"./Dialog-D35lAKZM.js";import"./OverlayArrow-D68Em3aM.js";import"./useResizeObserver-CGa1W_IZ.js";import"./Collection-DsNNavxH.js";import"./index-Bgt_Qwum.js";import"./Separator-CY7oQJq7.js";import"./SelectionManager-Bp1Fa3PG.js";import"./useEvent-C5Pl_19e.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-0X1b94tQ.js";import"./useDescription-DCMvsgkK.js";import"./ListKeyboardDelegate-BCvRBiIP.js";import"./PressResponder-C4_7qtDK.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmbCRhya.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-nx3fwYPE.js";import"./Button-C_05nidj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./createLucideIcon-De6jokFF.js";import"./x-E1o5LEs9.js";import"./Heading-ztzP_aN9.js";import"./info-BUpIPp0t.js";import"./Popover-qZ1lc34E.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
