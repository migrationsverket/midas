import{j as e,l}from"./iframe-FsNXgqe6.js";import{S as t}from"./Skeleton--e7BUrTD.js";import{T as d}from"./TextField-DGB0AFGF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DJTfoPVC.js";import"./utils-CHHHSM11.js";import"./FieldError-p7x1oei0.js";import"./Text-CjmdaRq5.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./Text-C8W6Aunw.js";import"./RSPContexts-L16IbbAV.js";import"./Form-B6wupcKh.js";import"./Group-Dxk1VQ4X.js";import"./Input-Uwso7ecy.js";import"./Hidden-B6vp6jMs.js";import"./Button-BlUHKe-n.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./useTextField-cLoVvWUX.js";import"./useControlledState-cgOhGnIF.js";import"./useField-C0plC4Rc.js";import"./TextField.module-DdivwlC8.js";import"./Label-BIdbphBx.js";import"./Dialog-B8uY3jGW.js";import"./OverlayArrow-DmsvKZX4.js";import"./useResizeObserver-IhCfOiMN.js";import"./Collection-DDaYa3-Y.js";import"./index--E2Dvaj6.js";import"./Separator-Bd83B3mj.js";import"./SelectionManager-h8lDah4m.js";import"./useEvent-ClOxTEoa.js";import"./scrollIntoView-C5rWQYSS.js";import"./SelectionIndicator-CvwVJIfe.js";import"./useDescription-B03GWqqQ.js";import"./ListKeyboardDelegate-CFzjx7yi.js";import"./PressResponder-4pNBWveI.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeKVnalW.js";import"./getScrollParent--flH2mcI.js";import"./VisuallyHidden-CDgolLOv.js";import"./x-B7cAzNtk.js";import"./createLucideIcon-Dz3AmHpK.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";import"./Heading-B37BGmC_.js";import"./Button-YzrNlavS.js";import"./Button.module-BB7N-cLd.js";import"./info-B9ibTQnB.js";import"./Popover-BUi0eHZY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
