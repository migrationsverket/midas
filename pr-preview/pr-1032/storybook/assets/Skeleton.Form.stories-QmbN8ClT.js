import{j as e,l}from"./iframe-DRirf2Ys.js";import{S as t}from"./Skeleton-aKoL1jzv.js";import{T as p}from"./TextField-vR9IGy8A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DcQBSUx2.js";import"./utils-BC-9mfhg.js";import"./TextField-BHqkwKOH.js";import"./FieldError-Ciz7MEhw.js";import"./Text-haWdKGMd.js";import"./useFocusRing-CJQJQ7PW.js";import"./index-hP6JGvby.js";import"./index-Drx8rBd8.js";import"./Text-Cz4JRdhg.js";import"./RSPContexts-BWwgVI6N.js";import"./Form-DDOtMx66.js";import"./useFormValidation-Dl6NIxjf.js";import"./Group-BxHQ-spB.js";import"./Input-BktJUS29.js";import"./Hidden-lhPivziv.js";import"./Button-kU1Por_z.js";import"./useLabels-Ppos1hYn.js";import"./useButton-Dy4vSFCX.js";import"./useTextField-D0_G5bPN.js";import"./useControlledState-CQDYwQIF.js";import"./useField-CZKO8xFK.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BRVYtrrj.js";import"./Dialog-BDYinEiU.js";import"./OverlayArrow-B_yQtPZQ.js";import"./useResizeObserver-BxtaWTNE.js";import"./Collection-BCdofZC4.js";import"./index-D1bX05Ry.js";import"./Separator-BxU1rSEm.js";import"./SelectionManager-Ba3R1H4j.js";import"./useEvent-D0f8TLM5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3e4FMOUn.js";import"./useDescription-DxWGvbMR.js";import"./ListKeyboardDelegate-BniJMMCb.js";import"./PressResponder-DfALHT1f.js";import"./useLocalizedStringFormatter-Czvg_dgK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnmLPyae.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DEc4J7Zj.js";import"./Button-Bbxz1V1l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7yUVNG5.js";import"./createLucideIcon-pFgQkBEQ.js";import"./x-DfCsYV9b.js";import"./Heading-BFC8r0ji.js";import"./info-BCZkUAJk.js";import"./Popover-BDl5_dY2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
