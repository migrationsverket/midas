import{j as e,l}from"./iframe-CL23rVh3.js";import{S as t}from"./Skeleton-D-b26xHI.js";import{T as p}from"./TextField-Flfg8MeM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-uFKy3Xbq.js";import"./TextField-dmX27vPm.js";import"./utils-CJ-Ij_R0.js";import"./FieldError-B8XPk18T.js";import"./Text-D1eXcxCX.js";import"./useFocusRing-DkzWPJgi.js";import"./index-D2io7692.js";import"./index-Dps1x4rp.js";import"./Text-CytNYYuf.js";import"./RSPContexts-BwT2hLmq.js";import"./Form-CyoqJmJ7.js";import"./useFormValidation-D_Pj3Rz9.js";import"./Group-D2VA6dRY.js";import"./Input-BiW047CV.js";import"./Hidden-DgDLAcvn.js";import"./Button-UvNdmwwk.js";import"./useLabels-X6VpgWTq.js";import"./useButton-CPhZ5th1.js";import"./useTextField-DgT7k1YT.js";import"./useControlledState-BZgWFFOj.js";import"./useField-r5PwNz1w.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ndTmjWwr.js";import"./Dialog-BUG9FcSE.js";import"./OverlayArrow-DlR4o7ln.js";import"./useResizeObserver-CgV-xQ3S.js";import"./Collection-DmYijMBg.js";import"./index-CL2OrqBk.js";import"./Separator-B_3JL9pu.js";import"./SelectionManager-DWc2VhCs.js";import"./useEvent-DN98bbL5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CvZWjb_I.js";import"./useDescription-CGYkSA8m.js";import"./ListKeyboardDelegate-B_yZFk2R.js";import"./PressResponder-C7pkJOw0.js";import"./useLocalizedStringFormatter-C59J0DnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CEx-mtZ4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D3iEUUnG.js";import"./Button-BRfjEKmY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_0t_udJ.js";import"./createLucideIcon-CscazfU0.js";import"./x-C4ZhBYeY.js";import"./Heading-BhQ0A1J0.js";import"./info-Dz74NSTI.js";import"./Popover-C0UOUX9v.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
