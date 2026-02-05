import{j as e,l}from"./iframe-CgfDwMsT.js";import{S as t}from"./Skeleton-CGk1w_7v.js";import{T as p}from"./TextField-Bg7uysG8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D6jAfFxt.js";import"./utils-CLuUze_r.js";import"./TextField-CxyU1gNC.js";import"./FieldError-B7h73jse.js";import"./Text-E6YbvuHS.js";import"./useFocusRing-aa-V_nwI.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./Text-CaslyU5o.js";import"./RSPContexts-DvQiZ2rE.js";import"./Form-BWcEeBnI.js";import"./useFormValidation-COEBX163.js";import"./Group-B8apYWEe.js";import"./Input-DaHeptqe.js";import"./Hidden-CJELcxwQ.js";import"./Button-C7WplXtK.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./useTextField-BaAURpti.js";import"./useControlledState-iA0OTCu9.js";import"./useField-CvXFpz9I.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BzumT7fp.js";import"./Dialog-CwSajge6.js";import"./OverlayArrow-CAjKRREM.js";import"./useResizeObserver-UqoURxQ-.js";import"./Collection-C4M8l1yV.js";import"./index-UGE9mCaU.js";import"./Separator-g-pZPYls.js";import"./SelectionManager-Cl8CuRve.js";import"./useEvent-e-NwapiS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-t9jVfqOa.js";import"./useDescription-CrupViey.js";import"./ListKeyboardDelegate-BJ31K7BN.js";import"./PressResponder-C_J1gD1a.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0eTp-du.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./Button-C6uLPlVc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzThpmxU.js";import"./createLucideIcon-CwSVauo5.js";import"./x-Bz2PUtNw.js";import"./Heading-DvDu4lhU.js";import"./info-CBhSIH8T.js";import"./Popover-5ceXyevA.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
