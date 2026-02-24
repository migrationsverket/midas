import{j as e,l}from"./iframe-BAopCnld.js";import{S as t}from"./Skeleton-DMg77fqj.js";import{T as p}from"./TextField-DlKOlR-g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BN75x3kH.js";import"./utils-TYM9m5l-.js";import"./FieldError-CkW_duZ2.js";import"./Text-CDzIZS0i.js";import"./useFocusRing-Cj-Dx8Kj.js";import"./index-CdNRYS6s.js";import"./index-DlrHJv33.js";import"./Text-BfWzCbJi.js";import"./RSPContexts-D4u5AE_u.js";import"./Form-bOnRh8z6.js";import"./useFormValidation-BzG8sa6-.js";import"./Group-DWTk7wz6.js";import"./Input-xiaZXjMm.js";import"./Hidden-DY-k-QkJ.js";import"./Button-Dru9a9zr.js";import"./useLabels-C7py-VLT.js";import"./useButton-Bi-jV0pn.js";import"./useTextField-N4uhqIO8.js";import"./useControlledState-BtrDhWy8.js";import"./useField-9pxSoNHy.js";import"./TextField.module-DdivwlC8.js";import"./Label-D9T8WZZH.js";import"./Dialog-B9DlX-ft.js";import"./OverlayArrow-D7TMnEFi.js";import"./useResizeObserver-CC-iSxbA.js";import"./Collection-BoGR0YWJ.js";import"./index-CW9ggjBK.js";import"./Separator-CZ5LEiPC.js";import"./SelectionManager-DQ3alK7K.js";import"./useEvent-CX3pPkMV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-o6hBnH.js";import"./useDescription-BLJw6CQp.js";import"./ListKeyboardDelegate-BTbds_TW.js";import"./PressResponder-Bg36ScGZ.js";import"./useLocalizedStringFormatter-CbSKOlm6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9_9nCKze.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C-nRUGXf.js";import"./Button-DUq5Osur.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D8BA2qO_.js";import"./createLucideIcon-CIlyQxOt.js";import"./x-e8tzunbl.js";import"./Heading-DsKKyaDB.js";import"./info-CYC8I8tw.js";import"./Popover-CjHQR1-6.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
