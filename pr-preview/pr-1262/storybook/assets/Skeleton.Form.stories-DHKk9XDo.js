import{j as e,l}from"./iframe-C8wbd0xw.js";import{S as t}from"./Skeleton-C1454dg8.js";import{T as p}from"./TextField-BwShjMjZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-h5ezAgbv.js";import"./utils-BvSYGh_U.js";import"./FieldError-BgH3yzjq.js";import"./Text-CNrdh4nj.js";import"./useFocusRing-Bg15NFQh.js";import"./index-620_CD08.js";import"./index-Db09nDsC.js";import"./Text-DfltvgM6.js";import"./RSPContexts-CJjr_xEH.js";import"./Form-BSu3vikM.js";import"./Group-DXxlE4I0.js";import"./Input-Bd26tLqj.js";import"./Hidden-C80CkRC2.js";import"./Button-CshDR4Sg.js";import"./useLabel-VczPGpuz.js";import"./useLabels-DNgQ3t5h.js";import"./useButton-J8srJfI2.js";import"./useTextField-DOnZLDFN.js";import"./useControlledState-Ctd2zKcE.js";import"./useField-C7yQkaFy.js";import"./TextField.module-DdivwlC8.js";import"./Label-kVgb5yE3.js";import"./Dialog-CS7-kOIr.js";import"./OverlayArrow-BVV2KLUK.js";import"./useResizeObserver-iHhzz845.js";import"./Collection-KTfy2LV8.js";import"./index-CoPqZ-2G.js";import"./Separator-BNTE2zLq.js";import"./SelectionManager-CRnawsor.js";import"./useEvent-pYuuJSlJ.js";import"./scrollIntoView-BHLgP0Bo.js";import"./SelectionIndicator-DmrAqqdr.js";import"./useDescription-Cy_FD0MX.js";import"./ListKeyboardDelegate-CKOowGuK.js";import"./PressResponder-DlflJfyZ.js";import"./useLocalizedStringFormatter-CzJGuAX0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CVdBnzH-.js";import"./getScrollParent-upgEqPZt.js";import"./VisuallyHidden-Br2qyVeY.js";import"./ModalOverlay-CzuFwIlx.js";import"./x-BZlVtVMn.js";import"./createLucideIcon-DuCqgbBp.js";import"./useLocalizedStringFormatter-Cn7XrlA9.js";import"./Heading-yVu3W5Is.js";import"./Button-CYDl1rDD.js";import"./Button.module-BB7N-cLd.js";import"./info-40etmgys.js";import"./Popover-BP18h3f6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
