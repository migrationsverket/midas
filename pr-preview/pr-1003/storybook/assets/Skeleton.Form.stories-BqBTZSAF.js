import{j as e,l}from"./iframe-Dbmu9fQF.js";import{S as t}from"./Skeleton-LfMXWm4N.js";import{T as p}from"./TextField-Cosw3Tnx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-bSer8_1w.js";import"./utils-DvpP6P0w.js";import"./TextField-D4_G3a50.js";import"./FieldError-DwvroohN.js";import"./Text-lshR0mcp.js";import"./useFocusRing-CxypgzF-.js";import"./index-DOth_hBv.js";import"./index-DNeWUiBb.js";import"./Text-DpPENBeK.js";import"./RSPContexts-1MV30GB1.js";import"./Form-W7yUj2Br.js";import"./useFormValidation-DXjiUV0c.js";import"./Group-CkWUssqm.js";import"./Input-2sdqqn4T.js";import"./Hidden-jLqMwcJy.js";import"./Button-HeqI9L9v.js";import"./useLabels-DvAdwbpY.js";import"./useButton-C8CFqxxX.js";import"./useTextField-DypCuICY.js";import"./useControlledState-CmG9wGoV.js";import"./useField-D1WZTjYD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-K4aMBYUG.js";import"./Dialog-Bq7Kk8wD.js";import"./OverlayArrow-r-lJJ2Vz.js";import"./useResizeObserver-DGxpxvFA.js";import"./Collection-D3DPeC6I.js";import"./index-sI5sIHh7.js";import"./Separator-Bq9L2S5l.js";import"./SelectionManager-CqkecjMe.js";import"./useEvent-BYq7_-5f.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D1I5AII3.js";import"./useDescription-CFRb9-H5.js";import"./ListKeyboardDelegate-DsiBQCjL.js";import"./PressResponder-C752mpWT.js";import"./useLocalizedStringFormatter-CeyCqeFg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmMYvDPA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-7fle8IoT.js";import"./Button-Be60Miju.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-x613kqLW.js";import"./createLucideIcon-BxHhQEIW.js";import"./x-Dfr2yIoA.js";import"./Heading-DuLJAiwy.js";import"./info-DcueNVrP.js";import"./Popover-OjhjWgSW.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
