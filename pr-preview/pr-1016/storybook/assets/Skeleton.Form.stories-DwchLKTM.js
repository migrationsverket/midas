import{j as e,l}from"./iframe-BAYQ7wPm.js";import{S as t}from"./Skeleton-BhPhNA9N.js";import{T as p}from"./TextField-BTEKune7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-SUz4g4d-.js";import"./utils-B8pynThE.js";import"./TextField-CmkNoGuw.js";import"./FieldError-CfAJu8nC.js";import"./Text-C4XWfuMR.js";import"./useFocusRing-CL1JgRkg.js";import"./index-BzHN4zRj.js";import"./index-DgHNcNqv.js";import"./Text-CVc5K2oN.js";import"./RSPContexts-Csbt4o4l.js";import"./Form-1EAQwkMT.js";import"./useFormValidation-CBGAQwe2.js";import"./Group-CtOFfyTx.js";import"./Input-BGWyipS3.js";import"./Hidden-HP5fIGu5.js";import"./Button-DaxR4XlV.js";import"./useLabels-DjtSinuU.js";import"./useButton-butUTOni.js";import"./useTextField-IrN9QBJc.js";import"./useControlledState-BcBrR0N6.js";import"./useField-C6VONpWL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-9AI5fQKa.js";import"./Dialog-CshVP8sY.js";import"./OverlayArrow-B1G0SbAo.js";import"./useResizeObserver-Cv5kPNnQ.js";import"./Collection-Cm8Ok7h2.js";import"./index-C7oLBNnx.js";import"./Separator-D9L1rOE7.js";import"./SelectionManager-T1TTTMx9.js";import"./useEvent-BhF9SPwq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kj3v0dd8.js";import"./useDescription-Bv0l7l0W.js";import"./ListKeyboardDelegate-DI8WxP8c.js";import"./PressResponder-KdMpQCLt.js";import"./useLocalizedStringFormatter-Bcu9SfMx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFx8PkgU.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bku1biRk.js";import"./Button-nEHC_YIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BkiQvC4b.js";import"./createLucideIcon-BCpEwjBi.js";import"./x-Cnwr1QDl.js";import"./Heading-Bo28UVZ4.js";import"./info-CmsnbEXJ.js";import"./Popover-D1o_UEmt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
