import{j as e,l}from"./iframe-CD9uBJjF.js";import{S as t}from"./Skeleton-UJ9Q7DQC.js";import{T as p}from"./TextField-Di7SKnxc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEg84c9a.js";import"./utils-D9nWysEF.js";import"./FieldError-BlUbkslV.js";import"./Text-gTqq02dR.js";import"./useFocusRing-Bz4Ez0NQ.js";import"./index-CyAc0wfu.js";import"./index-Cfa7UGYo.js";import"./Text-DrZkRnZ9.js";import"./RSPContexts-gGDWzVAk.js";import"./Form-BgJ1n07C.js";import"./useFormValidation-CMWTaPvT.js";import"./Group-D5Bw6_mR.js";import"./Input-B6sfc9ji.js";import"./Hidden-MQKal_Xr.js";import"./Button-DKA4ukB1.js";import"./useLabels-REhQlgaO.js";import"./useButton-C2BwIN52.js";import"./useTextField-SKPHel1c.js";import"./useControlledState-CV5SZqjM.js";import"./useField-NtKOYEUw.js";import"./TextField.module-DBQiRr7K.js";import"./Label-yOqJH9TP.js";import"./Dialog-DEEJLGhr.js";import"./OverlayArrow-C2u9G-1j.js";import"./useResizeObserver-FGjqkz23.js";import"./Collection-BIApEFUw.js";import"./index-0-MnvgDy.js";import"./Separator-Ckec1IBA.js";import"./SelectionManager-CRVyVoV9.js";import"./useEvent-DI0CpNHe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAycTYPK.js";import"./useDescription-CHLccClC.js";import"./ListKeyboardDelegate-DsaZyf27.js";import"./PressResponder-CgBx_kU5.js";import"./useLocalizedStringFormatter-BfgeHIhn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BWFveiHT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Csfns3eW.js";import"./Button-BuKqwfs3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B8TYdvpB.js";import"./createLucideIcon-ukt1IiZL.js";import"./x-OCy2nfas.js";import"./Heading-B6lKxOoy.js";import"./info-RxZSQxFc.js";import"./Popover-DmTsfGAw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
