import{j as e,l}from"./iframe-ZeXYQ1RW.js";import{S as t}from"./Skeleton-nodCLtDl.js";import{T as p}from"./TextField-C9QR4QsO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-hTYYqXt6.js";import"./utils-DkAMXJPn.js";import"./FieldError-Bowa5wqw.js";import"./Text-Dve1S3pg.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./Text-DNs8wtir.js";import"./RSPContexts-ByHBnrKz.js";import"./Form-Dy7AKgGH.js";import"./useFormValidation-CleU6jt7.js";import"./Group-w8iWAf8M.js";import"./Input-ud92R6V9.js";import"./Hidden-Cw1xIodo.js";import"./Button-B1pz6NZE.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./useTextField-Bd1NJOJF.js";import"./useControlledState-BI4OK_uN.js";import"./useField-CTy-1_Zz.js";import"./TextField.module-DdivwlC8.js";import"./Label-CGOSgLuy.js";import"./Dialog-DxpY5c2y.js";import"./OverlayArrow-C52gtWcy.js";import"./useResizeObserver-BwCizU0M.js";import"./Collection-Ck9H6G3Z.js";import"./index-CnOsB38m.js";import"./Separator-B6-IVA09.js";import"./SelectionManager-BGiQ5DnI.js";import"./useEvent-CBzfijIc.js";import"./scrollIntoView-DeVdbosm.js";import"./SelectionIndicator-DpH7GgiJ.js";import"./useDescription-B2YHcwj0.js";import"./ListKeyboardDelegate-BD0FshjV.js";import"./PressResponder-CKYrEyDT.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fJG1DqlY.js";import"./getScrollParent-Dxv8a8bs.js";import"./VisuallyHidden-D_TH7fZb.js";import"./x-jvAHOITw.js";import"./createLucideIcon-NOl_qKmM.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./Heading-XJVIyJj6.js";import"./Button-D_9dtB_J.js";import"./Button.module-BB7N-cLd.js";import"./info-Bv_DOVod.js";import"./Popover-COVpWNht.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
