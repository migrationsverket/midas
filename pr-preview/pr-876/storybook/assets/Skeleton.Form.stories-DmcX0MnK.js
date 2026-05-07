import{j as e,l}from"./iframe-DFebKffn.js";import{S as t}from"./Skeleton-B1U6YxRE.js";import{T as p}from"./TextField-Cm9GHJhM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-RIn0r_t_.js";import"./utils-J_OqfxpN.js";import"./FieldError-CqV6hYY3.js";import"./Text-jpnaKsAZ.js";import"./useFocusRing-C3NPJWuR.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./Text-B-BzwR12.js";import"./RSPContexts-Cvf_UqQA.js";import"./Form-nCobm3CY.js";import"./Group-DEOBuZSS.js";import"./Input-YR7zVes6.js";import"./Hidden-BATde4xQ.js";import"./Button-BZDCT8jS.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./useTextField-CRtvC267.js";import"./useControlledState-BBnpHgMO.js";import"./useField-B521Xtuh.js";import"./TextField.module-DdivwlC8.js";import"./Label-AidT_L4c.js";import"./Dialog-BFOkpBwH.js";import"./OverlayArrow-CJmScTPI.js";import"./useResizeObserver-q0q4I5l9.js";import"./Collection-C3aJ_YG1.js";import"./index-WykGGTgN.js";import"./Separator-CcYLIB_G.js";import"./SelectionManager-DnvZe7fF.js";import"./useEvent-BefO7eCM.js";import"./scrollIntoView-Ay2HlXpl.js";import"./SelectionIndicator-tE_LDChe.js";import"./useDescription-1A7QrMbF.js";import"./ListKeyboardDelegate-CB2LXJR4.js";import"./PressResponder-x7TTwY6v.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CODwxVTq.js";import"./getScrollParent-C72LLC1f.js";import"./VisuallyHidden-J2xwiqaN.js";import"./ModalOverlay-B-1_LG18.js";import"./x-udLSc6dJ.js";import"./createLucideIcon-eIhYDTFQ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Heading-CCEXH8UY.js";import"./Button-CAFfH1xQ.js";import"./Button.module-BB7N-cLd.js";import"./info-De4eU8bo.js";import"./Popover-DLlLbIiU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
