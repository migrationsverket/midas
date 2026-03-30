import{j as e,l}from"./iframe-Dr8Tkvah.js";import{S as t}from"./Skeleton-BHQhDtF6.js";import{T as p}from"./TextField-BLr3utzO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CZVwK8Du.js";import"./utils-DOuA3kXF.js";import"./FieldError-K3l2DsmW.js";import"./Text-Dbwxk-C7.js";import"./useFocusRing-poi8r4OJ.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./Text-CQjzvGyg.js";import"./RSPContexts-DIaWsy7a.js";import"./Form-CVwLgz52.js";import"./Group-ChzXJMKR.js";import"./Input-Bo18jdB3.js";import"./Hidden-BjSG53-T.js";import"./Button-C610-Rnq.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./useTextField-Cl7V3AhN.js";import"./useControlledState-DzvWO88h.js";import"./useField-JpMYATHc.js";import"./TextField.module-DdivwlC8.js";import"./Label-DHlSewJ2.js";import"./Dialog-TK3dUPvW.js";import"./OverlayArrow-DPqh4Qvi.js";import"./useResizeObserver-DnEQS4Nj.js";import"./Collection-ZUTSynsr.js";import"./index-DmP7bTRl.js";import"./Separator-CaSBOVjm.js";import"./SelectionManager-7-ML4KyD.js";import"./useEvent-DThJtK0k.js";import"./scrollIntoView-B1LP76du.js";import"./SelectionIndicator-DrvF5BTC.js";import"./useDescription-BhmkpAHf.js";import"./ListKeyboardDelegate-Zit5pbv0.js";import"./PressResponder-CeOIogdg.js";import"./useLocalizedStringFormatter-CR5zAqVa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D61uNW08.js";import"./getScrollParent-CUIafVHW.js";import"./VisuallyHidden-CqOJHiwP.js";import"./x-UdkypbZC.js";import"./createLucideIcon-Boz8MrIZ.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./Heading-Daw6YIIy.js";import"./Button-B4jxTFim.js";import"./Button.module-BB7N-cLd.js";import"./info-_-o3A1jD.js";import"./Popover-vGdAZj5t.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
