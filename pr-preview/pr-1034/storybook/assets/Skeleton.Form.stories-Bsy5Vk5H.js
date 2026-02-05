import{j as e,l}from"./iframe-DgMSVBJj.js";import{S as t}from"./Skeleton-BwwMxSBQ.js";import{T as p}from"./TextField-cT0_ZMNu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CmZbWbUJ.js";import"./utils-BUVZQFkZ.js";import"./TextField-BHL7lCl6.js";import"./FieldError-DhkdCeIN.js";import"./Text-C3v5M0X6.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./Text-D4BWFKQS.js";import"./RSPContexts-GwS0uMKq.js";import"./Form-B7h5JGfO.js";import"./useFormValidation-k09FZdMi.js";import"./Group-CvZhlyDo.js";import"./Input-HY3QRdRM.js";import"./Hidden-B0_wOBGj.js";import"./Button-D-J1jvHp.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./useTextField-JEfR7FTO.js";import"./useControlledState-BKuwHYa2.js";import"./useField-B4BmtOyh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CXDdM-31.js";import"./Dialog-Cn8fkIH5.js";import"./OverlayArrow-CrCYMJYS.js";import"./useResizeObserver-BueDMYXk.js";import"./Collection-Dx95RUAw.js";import"./index-ByCdYvx5.js";import"./Separator-DNiFECer.js";import"./SelectionManager-D8ya2Y1V.js";import"./useEvent-CKIQixox.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bv7832s7.js";import"./useDescription-C3jZSQWL.js";import"./ListKeyboardDelegate-Besye-xt.js";import"./PressResponder-CUUY1kpS.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Crea59K9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-MCla8tVA.js";import"./Button-Cx_rtnFw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./createLucideIcon-xbipfE59.js";import"./x-PtDtzKM-.js";import"./Heading-Dn0wZytP.js";import"./info-BC3W2YHM.js";import"./Popover-CoFS7WWY.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
