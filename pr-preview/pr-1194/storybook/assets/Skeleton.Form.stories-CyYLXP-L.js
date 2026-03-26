import{j as e,l}from"./iframe-O6mcP7w5.js";import{S as t}from"./Skeleton-B7eiDLSn.js";import{T as p}from"./TextField-JSSfBAb9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CWuQga8x.js";import"./utils-msXr86i8.js";import"./FieldError-CxFm68nF.js";import"./Text-D-DusRzY.js";import"./useFocusRing-DFc_QmgH.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./Text-CWuBzebG.js";import"./RSPContexts-BOI8AU7_.js";import"./Form-DFAJxP4u.js";import"./Group-BBuyh76W.js";import"./Input-_9crkkgl.js";import"./Hidden-BulmN4hD.js";import"./Button-BzVOX2eA.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./useTextField-Q9vPHk4M.js";import"./useControlledState-BRRn0qym.js";import"./useField-Cm9c8J8E.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cv8gCz4b.js";import"./Dialog-DRDY7rRZ.js";import"./OverlayArrow-DitZJ59j.js";import"./useResizeObserver-D71yohu0.js";import"./Collection-Dq87Sf6r.js";import"./index-xXeG0lh1.js";import"./Separator-DzwOrCEy.js";import"./SelectionManager-CeCDp6on.js";import"./useEvent-CVey6hCu.js";import"./scrollIntoView-MyDz4t7d.js";import"./SelectionIndicator-DS87ewSZ.js";import"./useDescription-Brvp-X9_.js";import"./ListKeyboardDelegate-D0ioaPo6.js";import"./PressResponder-BFJ5UQ3f.js";import"./useLocalizedStringFormatter-7LpUttql.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnUad7nt.js";import"./getScrollParent-Ccg0N06N.js";import"./VisuallyHidden-CVj_UoLV.js";import"./x-76M_aj2E.js";import"./createLucideIcon-rh706yg9.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./Heading-Dpc1j2ct.js";import"./Button-I2L11CLA.js";import"./Button.module-BB7N-cLd.js";import"./info-Dd6jOY5C.js";import"./Popover-Hc5hc8uQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
