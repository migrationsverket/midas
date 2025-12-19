import{j as e,l}from"./iframe-Cjj-T_WN.js";import{S as t}from"./Skeleton-Dc7y83TJ.js";import{T as p}from"./TextField-jQcw6Vh8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D9vCJXrE.js";import"./utils-CcLbDqYB.js";import"./TextField-sv1Z5RZf.js";import"./FieldError-DCk6hMOV.js";import"./Text-DGl_bXVg.js";import"./useFocusRing-CwecGSw4.js";import"./index-ky7TdNXS.js";import"./index-CxmudArT.js";import"./Text-gU00Swsd.js";import"./RSPContexts-CEwT9ion.js";import"./Form-aaRRhaPK.js";import"./useFormValidation-CNZdG7U3.js";import"./Group-COEzFV3B.js";import"./Input-m6rc_Cus.js";import"./Hidden-tOizJ85m.js";import"./Button-DS8btNoB.js";import"./useLabels-DXBe3XOZ.js";import"./useButton-CHP-KyDJ.js";import"./useTextField-C-D9ILuq.js";import"./useControlledState-Cm5wADKy.js";import"./useField-DFPpGYGR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDhh5IK7.js";import"./Dialog-BlRqOkpt.js";import"./OverlayArrow-DFhFZFgc.js";import"./useResizeObserver-uQ4tqF06.js";import"./Collection-Bc46YrZb.js";import"./index-Bjzp8_a7.js";import"./Separator-sOO9Xwjo.js";import"./SelectionManager-BbkXqqxC.js";import"./useEvent-BUMkRfC-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxcJoXpo.js";import"./useDescription-CG2NFrQv.js";import"./ListKeyboardDelegate-CHt1YSD7.js";import"./PressResponder-ChZ-4Ka6.js";import"./useLocalizedStringFormatter-GQWeNoaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D64_Qquw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CQopoBEp.js";import"./Button-BCd8eFMO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cqkyr2UN.js";import"./createLucideIcon-DY10d_On.js";import"./x-9sVUTFG0.js";import"./Heading-CC8Cq5su.js";import"./info-UmHw-h3B.js";import"./Popover-BS6rHAhu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
