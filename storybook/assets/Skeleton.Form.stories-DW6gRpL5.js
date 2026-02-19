import{j as e,l}from"./iframe-D2u6fcmC.js";import{S as t}from"./Skeleton-B0-ZflcF.js";import{T as p}from"./TextField-oyBhkG2B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BW8N4t2K.js";import"./utils-CiNycYhM.js";import"./FieldError-yn2RLFgz.js";import"./Text-BiuO3ebU.js";import"./useFocusRing-CavRUvhE.js";import"./index-1mTxR35t.js";import"./index-T3sg1FKY.js";import"./Text-D2yfXHQm.js";import"./RSPContexts-B_HQictA.js";import"./Form-BkApyaNb.js";import"./useFormValidation-BmH9m2e6.js";import"./Group-DKSqKZt_.js";import"./Input-CwE9y9IA.js";import"./Hidden-DwkU7rJe.js";import"./Button-CpbQDwOR.js";import"./useLabels-BtEDdJzZ.js";import"./useButton-B2yDlT2I.js";import"./useTextField-DKmwebjx.js";import"./useControlledState-CPfd4NNf.js";import"./useField-BoDQD0-h.js";import"./TextField.module-Dhscz2t0.js";import"./Label-C1tUN1zf.js";import"./Dialog-WBDTRcb-.js";import"./OverlayArrow-yzFTuuaK.js";import"./useResizeObserver-T_2pYgWM.js";import"./Collection-_v5SZyfe.js";import"./index-Ds4jLS63.js";import"./Separator-DuJ7wd14.js";import"./SelectionManager-YmOe1LDC.js";import"./useEvent-cO724lZb.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-WPXK57P0.js";import"./useDescription-OCo5BB3K.js";import"./ListKeyboardDelegate-PoRIzH4i.js";import"./PressResponder-D0nWQMZF.js";import"./useLocalizedStringFormatter-DFmOREZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYBTfPKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DOAfwi1g.js";import"./Button-D7MCEwkf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7M_lV_b.js";import"./createLucideIcon-COpdxC33.js";import"./x-ByX5semR.js";import"./Heading-C9499rs9.js";import"./info-BrhmZH8m.js";import"./Popover-eLAmnGns.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
