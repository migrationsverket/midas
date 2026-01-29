import{j as e,l}from"./iframe-CxaG9I7P.js";import{S as t}from"./Skeleton-CLwAUMa7.js";import{T as p}from"./TextField-Cr52o7Xm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DaYPAVXv.js";import"./utils-Czlm0UBK.js";import"./TextField-DdnMxKnz.js";import"./FieldError-C4Y2gpA2.js";import"./Text-B1ar5pgm.js";import"./useFocusRing-B_8tQUZZ.js";import"./index-t5CRhWba.js";import"./index-C83Nl3_M.js";import"./Text-Bsr9FprL.js";import"./RSPContexts-CqSw1FEj.js";import"./Form-BP8EURmm.js";import"./useFormValidation-1UvULbqT.js";import"./Group-lJVyNpHx.js";import"./Input-5YZxciZR.js";import"./Hidden-C8k63pZ_.js";import"./Button-CmgJ4xb0.js";import"./useLabels-Q9h_GLhy.js";import"./useButton-BF83G0Tr.js";import"./useTextField-TBgMuNXT.js";import"./useControlledState-BJUuheTr.js";import"./useField-eXjHNk9f.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C9x5OzrZ.js";import"./Dialog-DYdk1Gmn.js";import"./OverlayArrow-GOTvl9Ar.js";import"./useResizeObserver-CKfl-E9w.js";import"./Collection-D-DLhQ9U.js";import"./index-3NXgPggs.js";import"./Separator-Dd4TCG1R.js";import"./SelectionManager-CeziSyDL.js";import"./useEvent-DnFFUpVr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B6rWNH3A.js";import"./useDescription-Bku4Pvc9.js";import"./ListKeyboardDelegate-BlrHGTdI.js";import"./PressResponder-Bfj7Bjbd.js";import"./useLocalizedStringFormatter-BKXqtz3g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CURYxixi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C45-MbEO.js";import"./Button-CzqSm8W5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcPkzblS.js";import"./createLucideIcon-Bvlak_27.js";import"./x-CeZp12Sq.js";import"./Heading-BCnUBzk0.js";import"./info-Dd8P1yaE.js";import"./Popover-l1ZlkkXZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
