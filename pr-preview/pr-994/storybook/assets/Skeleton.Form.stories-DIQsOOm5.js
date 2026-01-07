import{j as e,l}from"./iframe-Bflhdmnn.js";import{S as t}from"./Skeleton-g7JsmADC.js";import{T as p}from"./TextField-CEnakqm4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B8KIQSxM.js";import"./utils-BPwgoz0Z.js";import"./TextField-Cegl3GbX.js";import"./FieldError-CN0prp1V.js";import"./Text-D5Q908jx.js";import"./useFocusRing-BekWnAY5.js";import"./index-BxP1rmx1.js";import"./index-DGB9V8m6.js";import"./Text-In3vo28v.js";import"./RSPContexts-2KhPt2NA.js";import"./Form-9q16qy_C.js";import"./useFormValidation-2gQShG9R.js";import"./Group-B0tbPChp.js";import"./Input-CfNAn6Ac.js";import"./Hidden-KMCdUr8_.js";import"./Button-m3Na6kNz.js";import"./useLabels-tdJ51icT.js";import"./useButton-DQzOjWYq.js";import"./useTextField-BSTQrG74.js";import"./useControlledState-De_NBKuj.js";import"./useField-m0nH8cRy.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CoJLEthI.js";import"./Dialog-BNSBZ09q.js";import"./OverlayArrow-DQy00nt7.js";import"./useResizeObserver-BUORJ37z.js";import"./Collection-D5gAP1y3.js";import"./index-CFjvau_c.js";import"./Separator-DJBs56HN.js";import"./SelectionManager-C3aW7xip.js";import"./useEvent-BW24FHrd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BMnZXT7d.js";import"./useDescription-IOBPAjoc.js";import"./ListKeyboardDelegate-CjeS6Q2s.js";import"./PressResponder-CPootSN1.js";import"./useLocalizedStringFormatter-EwY44Yqc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YPQBgqyJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-P8tetEQ_.js";import"./Button-CafMpAWK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D5OYcKkz.js";import"./createLucideIcon-CpeXUi9U.js";import"./x-D8w9i_29.js";import"./Heading-BMiykM9u.js";import"./info-DlFFkZA1.js";import"./Popover-Cm45pmH_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
