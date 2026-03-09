import{j as e,l}from"./iframe-Cvf5bOeL.js";import{S as t}from"./Skeleton-BSfPpigu.js";import{T as p}from"./TextField-D7zvYDTu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B5L3ElJx.js";import"./utils-C1R7Byny.js";import"./FieldError-CiZkIitt.js";import"./Text-kmtP8_oY.js";import"./useFocusRing-COt4M2p8.js";import"./index-ClZalfPt.js";import"./index-CXp7TptX.js";import"./Text-CBvf4Q07.js";import"./RSPContexts-BhKMO7Rz.js";import"./Form-CEsc4aGb.js";import"./useFormValidation-BvzmB0lD.js";import"./Group-CjOUtyz8.js";import"./Input-JM2pVZp8.js";import"./Hidden-BkiKYALS.js";import"./Button-CxK6-t7a.js";import"./useLabels-Ds9sWjje.js";import"./useButton-CeaaOal7.js";import"./useTextField-tLVQaiTz.js";import"./useControlledState-C6H-hxLp.js";import"./useField-DbedPEp5.js";import"./TextField.module-DdivwlC8.js";import"./Label-DMF_iGTm.js";import"./Dialog-RrAu1n3t.js";import"./OverlayArrow-Cqei2d8P.js";import"./useResizeObserver-BNoiFPdw.js";import"./Collection-BL8pLVDW.js";import"./index-cJes_YYu.js";import"./Separator-CIAPiImn.js";import"./SelectionManager-B2QUI9_y.js";import"./useEvent-HhEyoxIa.js";import"./scrollIntoView-BYEbTNmx.js";import"./SelectionIndicator-BhSrR2aJ.js";import"./useDescription-DvsSwlbW.js";import"./ListKeyboardDelegate-Dqm4dEGS.js";import"./PressResponder-B9dp42g-.js";import"./useLocalizedStringFormatter-C0qo-Kt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yF4RBYT8.js";import"./getScrollParent-UzGHslW5.js";import"./VisuallyHidden-BC_L462J.js";import"./Button-Cpd04SUc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Conpc6HM.js";import"./createLucideIcon-AeCqa4TH.js";import"./x-QFX-QYqm.js";import"./Heading-CahinXzf.js";import"./info-bzB77h75.js";import"./Popover-uNFH3mHh.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
