import{j as e,l}from"./iframe-uZkJ1fJG.js";import{S as t}from"./Skeleton-BCV_tK7W.js";import{T as p}from"./TextField-zIIq45Mo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CyTKfkon.js";import"./utils-Bql2fpyW.js";import"./TextField-BxCauLAl.js";import"./FieldError-CNz8C0Mw.js";import"./Text-ClpReuqT.js";import"./useFocusRing-DaTXuR1t.js";import"./index-n8hdgtys.js";import"./index-B9xkxF8M.js";import"./Text-D4eTnBnq.js";import"./RSPContexts-DFcqcjFx.js";import"./Form-BNWWFyYj.js";import"./useFormValidation-D37evYkq.js";import"./Group-D3DUoZok.js";import"./Input-DpVxtRNs.js";import"./Hidden-D9iAREQW.js";import"./Button-wtboOTdT.js";import"./useLabels-C8qvnydK.js";import"./useButton-B1lGnkCE.js";import"./useTextField-bl1JDDeB.js";import"./useControlledState-Cr8mehV-.js";import"./useField-NLOOn1cb.js";import"./TextField.module-DpzeWGpt.js";import"./Label-j0JcQGBk.js";import"./Dialog-CgGwA0YS.js";import"./OverlayArrow-C-RLbmOu.js";import"./useResizeObserver-D-kAN7jW.js";import"./Collection-Cc352SrR.js";import"./index-iUw-gvy4.js";import"./Separator-COBfszN5.js";import"./SelectionManager-aHBXooaK.js";import"./useEvent-BrJvnBOp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWeNhkgP.js";import"./useDescription-BpjeHAcD.js";import"./ListKeyboardDelegate-CJBMhtBR.js";import"./PressResponder-DrB52dBR.js";import"./useLocalizedStringFormatter-BmHqoQ62.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IaxLghhU.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CZMMqkul.js";import"./Button-DXAvfZt_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxCN2hvr.js";import"./createLucideIcon-DACNTlAl.js";import"./x-7qMG5WbC.js";import"./Heading-JN5bR88e.js";import"./info-BylgOWnt.js";import"./Popover-BccHq3q6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
