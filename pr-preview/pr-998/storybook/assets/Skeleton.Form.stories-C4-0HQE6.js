import{j as e,l}from"./iframe-DLcF_cZb.js";import{S as t}from"./Skeleton-DNI_bP7-.js";import{T as p}from"./TextField-Cl0JUUQa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BJU7HSVd.js";import"./utils-DopDDGwO.js";import"./TextField-Ce2gSEpV.js";import"./FieldError-BM5NpMS1.js";import"./Text-B98yE2PT.js";import"./useFocusRing-Dmrd4B4C.js";import"./index-B7geH7_-.js";import"./index-DK_aNcXz.js";import"./Text-Dh2DNKMg.js";import"./RSPContexts-CTdkxWNV.js";import"./Form-DNQ-f3m0.js";import"./useFormValidation-CNRHJKth.js";import"./Group-C2h2G8mR.js";import"./Input-CP4jwPM3.js";import"./Hidden-BmcCzQFm.js";import"./Button-BirpzH-3.js";import"./useLabels-BmzKzWd6.js";import"./useButton-CBJTXxEE.js";import"./useTextField-BzMeu8et.js";import"./useControlledState-BjUzWb5o.js";import"./useField-Bnx6_ry5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DG6ahEDM.js";import"./Dialog-BcXqbI84.js";import"./OverlayArrow-Cfn4lJ8Z.js";import"./useResizeObserver-BPN23z2n.js";import"./Collection-BeAco00g.js";import"./index-BwM4ZsvQ.js";import"./Separator-CabJx4mN.js";import"./SelectionManager-WvjmUz1m.js";import"./useEvent-6YdTv-vL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IjtRpl3q.js";import"./useDescription-Boa-MxLe.js";import"./ListKeyboardDelegate-BsPbU2Dn.js";import"./PressResponder-DI04bVwx.js";import"./useLocalizedStringFormatter-CschDt8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-7Dnmrw8M.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-SdRNs5sP.js";import"./Button-BbPLdLku.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfNFAn3n.js";import"./createLucideIcon-Bv8IvF6P.js";import"./x-YRI_uR-l.js";import"./Heading-CdMiYJad.js";import"./info-BvPC3fJN.js";import"./Popover-B2kGklUs.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
