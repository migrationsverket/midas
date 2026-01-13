import{j as e,l}from"./iframe-CLw9EvUn.js";import{S as t}from"./Skeleton-nbAXKofr.js";import{T as p}from"./TextField-_gKs9ewb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DLseEuGk.js";import"./utils-BwWAyVJP.js";import"./TextField-D0-BVOob.js";import"./FieldError-Cd3lwIs8.js";import"./Text-D5JOCqJj.js";import"./useFocusRing-BAEYXSj_.js";import"./index-Bq3XAPPV.js";import"./index-B5Glj1Lw.js";import"./Text-1Buqt0Vq.js";import"./RSPContexts-gaT2a0FT.js";import"./Form-9GI7TNth.js";import"./useFormValidation-CBNA-ySD.js";import"./Group-5NCVb9_0.js";import"./Input-rREs_Pl5.js";import"./Hidden-D77l1g2T.js";import"./Button-DnmoB4JS.js";import"./useLabels-D1N2DW3Q.js";import"./useButton-DCV5HdO0.js";import"./useTextField-BDwKuana.js";import"./useControlledState-D21u0Iei.js";import"./useField-CSdrZpk2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1TaqGRr.js";import"./Dialog-Grj0HpwQ.js";import"./OverlayArrow-0hbTPMux.js";import"./useResizeObserver-BmwkevNe.js";import"./Collection-BjtU8r22.js";import"./index-BZeZUtRN.js";import"./Separator-BqieKLmm.js";import"./SelectionManager-J4SnEKPG.js";import"./useEvent-BPW_XcXk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPee6rBv.js";import"./useDescription-D3QViYKP.js";import"./ListKeyboardDelegate-DUusS8cO.js";import"./PressResponder-yCoQbp4v.js";import"./useLocalizedStringFormatter-tJnjIpft.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DrixOR4s.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CbcleJY8.js";import"./Button-Cl5UNsPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B24pFSF-.js";import"./createLucideIcon-KVsuRhiu.js";import"./x-D1N4eJz6.js";import"./Heading-DHqaN_SF.js";import"./info-DkgmhN9o.js";import"./Popover-BcgK22rF.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
