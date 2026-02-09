import{j as e,l}from"./iframe-D6IpBoiw.js";import{S as t}from"./Skeleton-IqxtIu2G.js";import{T as p}from"./TextField-DFAVrPZy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6gs3fXzq.js";import"./utils-DrRnVz6M.js";import"./TextField-CPhw70O6.js";import"./FieldError-D84PxaCJ.js";import"./Text-DAWTtlkt.js";import"./useFocusRing-DDjRvQVt.js";import"./index-Dke63n0T.js";import"./index-Cdvq_tAn.js";import"./Text-qQ3S5Jc_.js";import"./RSPContexts-DEazweFL.js";import"./Form-Csw1KBWi.js";import"./useFormValidation-C0YcTuLl.js";import"./Group-Ch74GD3q.js";import"./Input-Bmr6hF_U.js";import"./Hidden-CzdFjV_G.js";import"./Button-ho_h7HBc.js";import"./useLabels-Ca7mubzD.js";import"./useButton-BZVVg511.js";import"./useTextField-CxlXJA65.js";import"./useControlledState-CLuCJDnt.js";import"./useField-C36_1XdQ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CYZ04qFY.js";import"./Dialog-BP6O-jWc.js";import"./OverlayArrow-yIqFLxSG.js";import"./useResizeObserver-BoHXCLyr.js";import"./Collection-BXe7XviT.js";import"./index-D-8A3CKx.js";import"./Separator-Dy-5_Txz.js";import"./SelectionManager-BdDUSQWT.js";import"./useEvent-D0T-5SZD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bm7ArBIF.js";import"./useDescription-Cef-uVL5.js";import"./ListKeyboardDelegate-BafDUYsL.js";import"./PressResponder-BCqBFdus.js";import"./useLocalizedStringFormatter-S2cYCAmY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D50INRZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CvlpTHpP.js";import"./Button-Cb8vfEHL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D7KJljx3.js";import"./createLucideIcon-C8Gze4Yd.js";import"./x-BQZH2C42.js";import"./Heading-GsAsFs17.js";import"./info-CMki08a3.js";import"./Popover-CFhA0iae.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
