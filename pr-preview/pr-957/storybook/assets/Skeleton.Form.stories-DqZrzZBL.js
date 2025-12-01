import{j as e,l}from"./iframe-BtMwOEiM.js";import{S as t}from"./Skeleton-eOTdXXKr.js";import{T as d}from"./TextField-BHT8r-mO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mAmZ6lIc.js";import"./utils-BoP-oma8.js";import"./TextField-CvzKwD2n.js";import"./FieldError-D_5OLq9A.js";import"./Text-BIvd2lWW.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./Text-Blq4VDAx.js";import"./RSPContexts-DnH5Czok.js";import"./Form-DVMMKosO.js";import"./useFormValidation-C0gaMIqj.js";import"./Group-dKmt0uPR.js";import"./Input-C5nicdnx.js";import"./Hidden-4SQq7b_R.js";import"./Button-DpK-_iud.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./useTextField-CBDzCWqG.js";import"./useControlledState-4eQ4VJ_x.js";import"./useField-DWqLAcPx.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DY5S-zxp.js";import"./Dialog-B9C9duPY.js";import"./OverlayArrow-CfUGNIky.js";import"./useResizeObserver-DWfhUb69.js";import"./Collection-DSw0Co_i.js";import"./index-3O6tGQUW.js";import"./Separator-CqzvGCIB.js";import"./SelectionManager-DuSnioHk.js";import"./useEvent-Bpvasb0c.js";import"./scrollIntoView-7ZxtPAx0.js";import"./SelectionIndicator-t4ESMKeX.js";import"./useDescription-larqa2bq.js";import"./ListKeyboardDelegate-Prucwfh4.js";import"./PressResponder-DpSlFNy6.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--egNNwF2.js";import"./VisuallyHidden-DmeEZsXF.js";import"./Button-Bs1OmtnK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DETAsxuF.js";import"./createLucideIcon-C3W8dNhU.js";import"./x-BtjPiESg.js";import"./Heading-B4LhT9pb.js";import"./info-DvZlWYzP.js";import"./Popover-CFi8PJaH.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
