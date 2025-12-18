import{j as e,l}from"./iframe-DNSuz1-z.js";import{S as t}from"./Skeleton-BftptQMi.js";import{T as p}from"./TextField-OEGZ3obz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-2A7Dr-TD.js";import"./utils-PWJx94Jg.js";import"./TextField-Nz4CzN6M.js";import"./FieldError-CY9cNXad.js";import"./Text-C9PGpQAM.js";import"./useFocusRing-DUN10oBW.js";import"./index-BHGRei_I.js";import"./index-BmgHOxqv.js";import"./Text-CWb4M76d.js";import"./RSPContexts-CjMSUyUj.js";import"./Form-Bld6dSrY.js";import"./useFormValidation-ObN1tP3z.js";import"./Group-Dnsc7XLn.js";import"./Input-BwPr6Id2.js";import"./Hidden-DSZDj00d.js";import"./Button-DtVXVv9R.js";import"./useLabels-CD6nZf4Z.js";import"./useButton-BSiP3QIo.js";import"./useTextField-FFxIpJID.js";import"./useControlledState-AJWx4Vsn.js";import"./useField-CrjaWMvD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-KZZzBQ7E.js";import"./Dialog-1f93REq1.js";import"./OverlayArrow-C3VYGyYC.js";import"./useResizeObserver-7hVtUo3_.js";import"./Collection-Djo98snF.js";import"./index-ylBTEHcQ.js";import"./Separator-Iq-eUt-O.js";import"./SelectionManager-Dqf6gPP_.js";import"./useEvent-HiduJm6A.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Trq2vVjo.js";import"./useDescription-CNanPpTn.js";import"./ListKeyboardDelegate-Dq1u6RSH.js";import"./PressResponder-CNMT7KWf.js";import"./useLocalizedStringFormatter-Do-JPHcC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkGnqm_w.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bq8UzE34.js";import"./Button-BhefvJ15.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-frXD4KIA.js";import"./createLucideIcon-BPVi4m_L.js";import"./x-xSNmYbOw.js";import"./Heading-H63OvNx-.js";import"./info-BDvzRozh.js";import"./Popover-BkCLNS1E.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
