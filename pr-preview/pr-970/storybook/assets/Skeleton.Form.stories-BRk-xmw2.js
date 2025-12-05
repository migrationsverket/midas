import{j as e,l}from"./iframe-DeX6EpxL.js";import{S as t}from"./Skeleton-D7pBUBVJ.js";import{T as p}from"./TextField-CEMB6-Xd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bc9dxmGU.js";import"./utils-B8qVFtuz.js";import"./TextField-DIAp9OWJ.js";import"./FieldError-B8KPN--E.js";import"./Text-Cetjf3U1.js";import"./useFocusRing-DH9ib-kf.js";import"./index-D5ZgaJWR.js";import"./index-C6QFGyuX.js";import"./Text-C5yfOZoW.js";import"./RSPContexts-MsoIR9Qh.js";import"./Form-B0WOKj-9.js";import"./useFormValidation-Cx4G6YEU.js";import"./Group-BFwV9uoZ.js";import"./Input-CvR2keP2.js";import"./Hidden-aeqbWkpz.js";import"./Button-BNKSAgP5.js";import"./useLabels-A2tn5MES.js";import"./useButton-DTuJAJ_o.js";import"./useTextField-C58ibq5n.js";import"./useControlledState-DAFdnZtt.js";import"./useField-CC1Eh5CN.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BmIepdQG.js";import"./Dialog-D-6VLmIy.js";import"./OverlayArrow-DNqMZEqv.js";import"./useResizeObserver-BVcgbq7b.js";import"./Collection-C30HQDm4.js";import"./index-DFs4xHMU.js";import"./Separator-CA98yMHN.js";import"./SelectionManager-Dxc3F0U1.js";import"./useEvent-FAYQcFJB.js";import"./scrollIntoView-Cq0ZTZdI.js";import"./SelectionIndicator-DIDX2aEP.js";import"./useDescription-9WOSIwpZ.js";import"./ListKeyboardDelegate-D8r9iQMB.js";import"./PressResponder-Dw7wTIKm.js";import"./useLocalizedStringFormatter-EhR0ZRPf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-1BrtN0dn.js";import"./VisuallyHidden-B9DbwpXk.js";import"./Button-r9WGhIT_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db_YVwzW.js";import"./createLucideIcon-CxcECL83.js";import"./x-C2jezQOt.js";import"./Heading-ClRgf0Ow.js";import"./info-CLPiYV-p.js";import"./Popover-DgQTHhWJ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
