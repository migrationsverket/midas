import{j as e,l}from"./iframe-Dmk7YWbP.js";import{S as t}from"./Skeleton-ots8Ruua.js";import{T as p}from"./TextField-DUYpWoIy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mILG7qwS.js";import"./utils-CZU1a0io.js";import"./FieldError-Blg6FnKj.js";import"./Text-C-958akl.js";import"./useFocusRing-DQsZ5BW0.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./Text--asL3Zcb.js";import"./RSPContexts-BkluUXe_.js";import"./Form-lxF2zL-k.js";import"./Group-Dd_e3Mvl.js";import"./Input-DJ2I6k99.js";import"./Hidden-j21WNwyS.js";import"./Button-F5fRRQra.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./useTextField-D6Ij23Fi.js";import"./useControlledState-C7rqhk2c.js";import"./useField-BTvl88ll.js";import"./TextField.module-DdivwlC8.js";import"./Label-zhkRkTgZ.js";import"./Dialog-z2G2hCwg.js";import"./OverlayArrow-2VGgn4IZ.js";import"./useResizeObserver-CNcNfmtM.js";import"./Collection-BUZ2WvuY.js";import"./index-BEEHQsac.js";import"./Separator-DigWaU0m.js";import"./SelectionManager-0hYn_pTl.js";import"./useEvent-DnGv8QpP.js";import"./scrollIntoView-B790B2bQ.js";import"./SelectionIndicator-B3uAMTLT.js";import"./useDescription-aAvmV4Vy.js";import"./ListKeyboardDelegate-BQY05oIt.js";import"./PressResponder-UF3jWaRV.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DdapsBG5.js";import"./getScrollParent-CKQLrhSn.js";import"./VisuallyHidden-CW18ePiJ.js";import"./ModalOverlay-Dpa5xzh7.js";import"./x-CR8vb-29.js";import"./createLucideIcon-Dl46zayF.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Heading-DrckR7wJ.js";import"./Button-BkclXew1.js";import"./Button.module-BB7N-cLd.js";import"./info-CachzMjj.js";import"./Popover-CL3r2TAj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
