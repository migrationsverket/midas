import{j as e,l}from"./iframe-BHERtVNf.js";import{S as t}from"./Skeleton-pU4R_w0g.js";import{T as p}from"./TextField-WWXvWf8G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D83hWtFf.js";import"./utils-CTHX7231.js";import"./FieldError-vYppElHh.js";import"./Text-CRbS9uup.js";import"./useFocusRing-BHPpscSH.js";import"./index-DZ_I24z0.js";import"./index-BtFyGPoM.js";import"./Text-DnQ_ETrR.js";import"./RSPContexts-CoVebu3O.js";import"./Form-DIUWLB30.js";import"./Group-BJap8_sO.js";import"./Input-KqWw1B45.js";import"./Hidden-Bbawj_lw.js";import"./Button-CWn0VMRl.js";import"./useLabel-BYlWZT7f.js";import"./useLabels-C7V4whMC.js";import"./useButton-DKTwQcCs.js";import"./useTextField-CoZDJyuF.js";import"./useControlledState-7jxNesIu.js";import"./useField-Dlh-JQOe.js";import"./TextField.module-DdivwlC8.js";import"./Label-C6Dqqh-x.js";import"./Dialog-DEYW0XCG.js";import"./OverlayArrow-N29ooltd.js";import"./useResizeObserver-CvCOwwom.js";import"./Collection-D0fOj4je.js";import"./index-Dhz1B7N1.js";import"./Separator-CQMBN1BX.js";import"./SelectionManager-Chg_m2pk.js";import"./useEvent-uROvjphs.js";import"./scrollIntoView-leVCW1jO.js";import"./SelectionIndicator-jZd3bly_.js";import"./useDescription-DMqZJTlw.js";import"./ListKeyboardDelegate-vyvoSCyk.js";import"./PressResponder-D_P-4SAb.js";import"./useLocalizedStringFormatter-3lDJzaW9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XpdhIpAD.js";import"./getScrollParent-BOdzDoXv.js";import"./VisuallyHidden-CotPfbgC.js";import"./Modal-DI1aGwOF.js";import"./x-BjG60dSq.js";import"./createLucideIcon-DvoPQrFJ.js";import"./useLocalizedStringFormatter-MqTPcr_q.js";import"./Heading-CYL1c2CG.js";import"./Button-sL8xP2zY.js";import"./Button.module-BB7N-cLd.js";import"./info-CSim1yEo.js";import"./Popover-DAPhsRvf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
