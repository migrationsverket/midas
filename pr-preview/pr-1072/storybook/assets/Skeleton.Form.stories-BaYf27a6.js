import{j as e,l}from"./iframe-BbEdCWTo.js";import{S as t}from"./Skeleton-CafQUtjQ.js";import{T as p}from"./TextField-D_KVfU6R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cr_o_HLy.js";import"./utils-0gBzt-f2.js";import"./FieldError-ClDhUf0E.js";import"./Text-UryQGSay.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./Text-w6pc7bdl.js";import"./RSPContexts-C3UWmBTv.js";import"./Form-Dmk665yv.js";import"./useFormValidation-BlLsmx8B.js";import"./Group-XQr0bGW7.js";import"./Input-BqFTKQ0c.js";import"./Hidden-dhoH6OsW.js";import"./Button-D-EmDY8c.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./useTextField-C-tT76rN.js";import"./useControlledState-DT2KBo_t.js";import"./useField-3HP9Ota5.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-BufTJc3L.js";import"./Dialog-gZwbD-0m.js";import"./OverlayArrow-295h3sys.js";import"./useResizeObserver-Cq6DlwQe.js";import"./Collection-SkhSxcSu.js";import"./index-A6hdIoEh.js";import"./Separator-BftrJMHR.js";import"./SelectionManager-3MK6y6kK.js";import"./useEvent-BtmHdsI2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DAOIAWPz.js";import"./useDescription-yyfT0KSm.js";import"./ListKeyboardDelegate-BF-2O97_.js";import"./PressResponder-Cw_0ixTk.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7qB9KAP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ci4G53k_.js";import"./Button-FljdEIyw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./createLucideIcon-DVbOGhvF.js";import"./x-uEbSzWQI.js";import"./Heading-B0YRdNz0.js";import"./info-ua6V7aFL.js";import"./Popover-lIDp831D.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
