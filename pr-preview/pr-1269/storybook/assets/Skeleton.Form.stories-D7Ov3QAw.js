import{j as e,l}from"./iframe-Cttpu6ri.js";import{S as t}from"./Skeleton-80L3Gg-c.js";import{T as p}from"./TextField-DZmLPlnm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CSwme7s8.js";import"./utils-BuF_h7AP.js";import"./FieldError-iMDvMznL.js";import"./Text-Bia_ZCxP.js";import"./useFocusRing-Da5Lg8ZZ.js";import"./index-D0txj7Kr.js";import"./index-dIHcpMJ6.js";import"./Text-BDpwDhFd.js";import"./RSPContexts-BavTxQ8D.js";import"./Form-Akxi3hJ_.js";import"./Group-DLtc9AkO.js";import"./Input-ytqw39oT.js";import"./Hidden-C4gGqRbi.js";import"./Button-BgQeNeK3.js";import"./useLabel-CDs_h7ib.js";import"./useLabels-iWlhSr0B.js";import"./useButton-BMgOxl6g.js";import"./useTextField-IjevuV_3.js";import"./useControlledState-Dikg9rpi.js";import"./useField-D8xc0ZN-.js";import"./TextField.module-DdivwlC8.js";import"./Label-wmIIIQhs.js";import"./Dialog-DcekJ3Sk.js";import"./OverlayArrow-Cxj2i-y4.js";import"./useResizeObserver-COaCq1l-.js";import"./Collection-Br2XSWqI.js";import"./index-CcsaxKNv.js";import"./Separator-CW8oQFlK.js";import"./SelectionManager-oX8CqZfv.js";import"./useEvent-BTP9ZQAw.js";import"./scrollIntoView-CRiUVsu9.js";import"./SelectionIndicator-D4Cu198i.js";import"./useDescription-Xa_PnaVA.js";import"./ListKeyboardDelegate-RgqmVszr.js";import"./PressResponder-8pFtBvk9.js";import"./useLocalizedStringFormatter-BUIk-26D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6uETFrz.js";import"./getScrollParent-CEbSHGM5.js";import"./VisuallyHidden-B52J-ASA.js";import"./ModalOverlay-DMh4CuCj.js";import"./x-B0jtMRI2.js";import"./createLucideIcon-DxQlc1dM.js";import"./useLocalizedStringFormatter-DKwzGpb3.js";import"./Heading-BzPmUoAE.js";import"./Button-BdE_pR_p.js";import"./Button.module-BB7N-cLd.js";import"./info-DnrnBAnF.js";import"./Popover-BSJ_WYjC.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
