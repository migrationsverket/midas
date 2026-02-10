import{j as e,l}from"./iframe-xM6GPlxZ.js";import{S as t}from"./Skeleton-cCJNMLg_.js";import{T as p}from"./TextField-DGvKN5vp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-tf5Pj8Hd.js";import"./utils-BWmJmXij.js";import"./TextField-PGuwxeaP.js";import"./FieldError-CI525PUG.js";import"./Text-eaDz3eV1.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./Text-CHMvJdTr.js";import"./RSPContexts-CBBqJTPm.js";import"./Form-D-7e8gY8.js";import"./useFormValidation-6nG_QMyJ.js";import"./Group-DswamWYx.js";import"./Input-B2CEylbx.js";import"./Hidden-CNNVQzIs.js";import"./Button-D0EwoScf.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./useTextField-JUSGFZfG.js";import"./useControlledState-C_N3S3lP.js";import"./useField-DhjOGZIF.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C0BfwsP2.js";import"./Dialog-DTsORP6i.js";import"./OverlayArrow-C6VILOrM.js";import"./useResizeObserver-D2ClN3Ot.js";import"./Collection-DUrw-iXY.js";import"./index-q8a9In3r.js";import"./Separator-D6ficfAW.js";import"./SelectionManager-e2Kt43cd.js";import"./useEvent-D1PWkF_3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DUE9LE0r.js";import"./useDescription-DRbU8aXx.js";import"./ListKeyboardDelegate-BC8BrP6H.js";import"./PressResponder-BSgxSSHD.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbX6MLUB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./Button-CKxI1r1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./createLucideIcon-D-PEwym-.js";import"./x-Bs38igXL.js";import"./Heading-wS7RUvpX.js";import"./info-Cb79Xs7I.js";import"./Popover-CgGrnuR1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
