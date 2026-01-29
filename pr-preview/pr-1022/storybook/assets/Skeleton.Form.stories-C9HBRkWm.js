import{j as e,l}from"./iframe-3vXkeaXf.js";import{S as t}from"./Skeleton-CWQDSrTo.js";import{T as p}from"./TextField-BKXVY0XI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DpM-MBDq.js";import"./utils-Ci2rW9QR.js";import"./TextField-CGKXd7rP.js";import"./FieldError-CUFcw2Bx.js";import"./Text-BHe6HkmH.js";import"./useFocusRing-DNafsx48.js";import"./index-CZo5RHNF.js";import"./index-DodIUsUi.js";import"./Text-faRT9Ypk.js";import"./RSPContexts-CALLQvPo.js";import"./Form-Cn_bxQUe.js";import"./useFormValidation-zcqsPAxn.js";import"./Group-CgpCnIk-.js";import"./Input-CYCPFwsM.js";import"./Hidden-If5Crsfr.js";import"./Button-Dhwcp2Tj.js";import"./useLabels-D1__96MT.js";import"./useButton-CIQe5U3d.js";import"./useTextField-awxZU8Rd.js";import"./useControlledState-BqfUWkUs.js";import"./useField-D9Vx8qL5.js";import"./TextField.module-1fNSVGjT.js";import"./Label-zVr14RRP.js";import"./Dialog-BWtB4LfF.js";import"./OverlayArrow-C-8N7e_j.js";import"./useResizeObserver-BPMKRs-7.js";import"./Collection-CroRJ_z_.js";import"./index-BIpjrxpZ.js";import"./Separator-Cx5RQKDE.js";import"./SelectionManager-B9H37USF.js";import"./useEvent-Dtk_oGRL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmK6g95b.js";import"./useDescription-SJAzHkl8.js";import"./ListKeyboardDelegate-DjXlbXio.js";import"./PressResponder-eAX4CWAr.js";import"./useLocalizedStringFormatter-Lx5W0ILu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-cZLEa70V.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dmqfs6c2.js";import"./Button-CqTfhLBS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bnn512eF.js";import"./createLucideIcon-Dr81SgBw.js";import"./x-YaSecB4y.js";import"./Heading-BdK0eQ3G.js";import"./info-5HPkFg7s.js";import"./Popover-CaM020lY.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
