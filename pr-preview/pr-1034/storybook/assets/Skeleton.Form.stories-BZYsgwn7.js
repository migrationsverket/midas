import{j as e,l}from"./iframe-DchRICws.js";import{S as t}from"./Skeleton-BcH8lJNN.js";import{T as p}from"./TextField-DbNbGh7w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CiEyn03t.js";import"./utils-p-d8MzGY.js";import"./TextField-CaFmoK7_.js";import"./FieldError-BEscErj6.js";import"./Text-Dku__uq1.js";import"./useFocusRing-D1Td16IF.js";import"./index-CaTrEPTS.js";import"./index-HHGf-Rtd.js";import"./Text-B_W1e8Lm.js";import"./RSPContexts-D7mJCwQj.js";import"./Form-Czp3e4Ki.js";import"./useFormValidation-CZuFw2Za.js";import"./Group-Dm9AJLg6.js";import"./Input-DrqfUCE1.js";import"./Hidden-0A_8gJrB.js";import"./Button-BZuMzazd.js";import"./useLabels-CyoqPhmQ.js";import"./useButton-C2I_u9zB.js";import"./useTextField-XJyZQQlS.js";import"./useControlledState-gODkUqSO.js";import"./useField-U-3ZRuwS.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BAZlNKbV.js";import"./Dialog-ClvNWqLa.js";import"./OverlayArrow-DubmhbKN.js";import"./useResizeObserver-C0iu6b-S.js";import"./Collection-BwFKrD0P.js";import"./index-JFsHF43l.js";import"./Separator-CTNV6czy.js";import"./SelectionManager-BfPFk-Bl.js";import"./useEvent-CMXGpGQb.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmPCdpGD.js";import"./useDescription-C4pVQLvJ.js";import"./ListKeyboardDelegate-iIdfoFIy.js";import"./PressResponder-LesXuKWX.js";import"./useLocalizedStringFormatter-0XFtpg5d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9V7Ga83.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CsUUod50.js";import"./Button-DN9SoO3n.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN3ZQ9-k.js";import"./createLucideIcon-BN7buoN8.js";import"./x-CrPhzFF_.js";import"./Heading-Cf2LkfSs.js";import"./info-BB2q98FC.js";import"./Popover-C3VRc43s.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
