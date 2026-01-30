import{j as e,l}from"./iframe-Ds-nK5jC.js";import{S as t}from"./Skeleton-_2HpGOp2.js";import{T as p}from"./TextField-Ha1K15sW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CYSLxCo-.js";import"./utils-BWcc9EPK.js";import"./TextField-DaEn75gr.js";import"./FieldError-CDeKUF86.js";import"./Text-D4nZVrIm.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./Text-cOJkqGeS.js";import"./RSPContexts-CMueCVj4.js";import"./Form-BBB5hpq1.js";import"./useFormValidation-MJDJC9ZJ.js";import"./Group-CVwXD99B.js";import"./Input-Bm9PCtgx.js";import"./Hidden-4dstmqQY.js";import"./Button-dHl8uENq.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./useTextField-DOnrvLbp.js";import"./useControlledState-B9M6c-Zi.js";import"./useField-CFPmWj_n.js";import"./TextField.module-1fNSVGjT.js";import"./Label-Dnkg1P-G.js";import"./Dialog-CgtvtU2F.js";import"./OverlayArrow-CI4gjp7u.js";import"./useResizeObserver-CtwwyWpt.js";import"./Collection-C010Bm6D.js";import"./index-BBm7PgdT.js";import"./Separator-ChORmL44.js";import"./SelectionManager-DUDgU4NN.js";import"./useEvent-BAAt4FlS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-qsNA4q.js";import"./useDescription-CfEhRarO.js";import"./ListKeyboardDelegate-ujXyInoy.js";import"./PressResponder-DyEMu65E.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Rm77TLpy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeRc1dUa.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./createLucideIcon-xY7bNo4d.js";import"./x-DNleDvIs.js";import"./Heading-BpINEwCz.js";import"./info-w0ic-h3w.js";import"./Popover-BBEs0hju.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
