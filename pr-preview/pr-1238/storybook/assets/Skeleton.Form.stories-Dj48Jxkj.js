import{j as e,l}from"./iframe-Dr7ArToC.js";import{S as t}from"./Skeleton-Upee-SsJ.js";import{T as p}from"./TextField-B69yg0FS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BIzAvIIQ.js";import"./utils-B9wkB9jr.js";import"./FieldError-DgDXg6nA.js";import"./Text-z1_3LhQE.js";import"./useFocusRing-Be1E2wiN.js";import"./index-D4IeCl1O.js";import"./index-CeL9iIrJ.js";import"./Text-DCnBb7WN.js";import"./RSPContexts-CJ8QUqZN.js";import"./Form-C7cXtg_z.js";import"./Group-BA6U_RSU.js";import"./Input-BeJJcU3N.js";import"./Hidden-DypslUjc.js";import"./Button-3lqUDVlM.js";import"./useLabel-138CLUtK.js";import"./useLabels-DXcJ5KZ7.js";import"./useButton-BWyNL83U.js";import"./useTextField-D43v3m3F.js";import"./useControlledState-CnU7ybFm.js";import"./useField-DAkRnFmj.js";import"./TextField.module-DdivwlC8.js";import"./Label-HMuUlS0n.js";import"./Dialog-uKXhehBA.js";import"./OverlayArrow-BmJjChXo.js";import"./useResizeObserver-CsQf5_2h.js";import"./Collection-D3KSFdJ3.js";import"./index-CcZ6tb7G.js";import"./Separator-BQVOC6Dw.js";import"./SelectionManager-TUOJ6S22.js";import"./useEvent-C68f-4At.js";import"./scrollIntoView-BBw0BaEI.js";import"./SelectionIndicator-CQ7IHMnW.js";import"./useDescription-CPrwApjd.js";import"./ListKeyboardDelegate-dnJAJmI1.js";import"./PressResponder-DbgUHB4F.js";import"./useLocalizedStringFormatter-B9QZX5JK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C-YppVTw.js";import"./getScrollParent-BdMN0M99.js";import"./VisuallyHidden-CpUpJPrc.js";import"./ModalOverlay-DgeWIpkJ.js";import"./x-CL4LyG_m.js";import"./createLucideIcon-bstwz77u.js";import"./useLocalizedStringFormatter-xGiRnejW.js";import"./Heading-B369kmPl.js";import"./Button-eaMP_jYx.js";import"./Button.module-BB7N-cLd.js";import"./info-D7E6r-Jm.js";import"./Popover-owbCydDT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
