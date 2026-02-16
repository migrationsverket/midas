import{j as e,l}from"./iframe-BJQY1bvJ.js";import{S as t}from"./Skeleton-Cvng16W8.js";import{T as p}from"./TextField-Bf9FlAcH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DazdF0JE.js";import"./utils-lif94hNf.js";import"./TextField-DN_FyFiN.js";import"./FieldError-B56sTIqy.js";import"./Text-BNAvgz7D.js";import"./useFocusRing-BLqAyq6i.js";import"./index-tP79n4Xh.js";import"./index-IY5nP7ez.js";import"./Text-DS3gleYA.js";import"./RSPContexts-CdLg8ZQ-.js";import"./Form-CAdVlO2f.js";import"./useFormValidation-BsxZg-gF.js";import"./Group-CyGCBoML.js";import"./Input-B_66__ok.js";import"./Hidden-DoOxpBOx.js";import"./Button-tbssrMuS.js";import"./useLabels-WB4c8N4J.js";import"./useButton-CsuJz0cJ.js";import"./useTextField-eFRejKJJ.js";import"./useControlledState-C_pcrP7U.js";import"./useField-DU--EPtB.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CR_CrvCp.js";import"./Dialog-Db7P49EB.js";import"./OverlayArrow-3PnDCdtx.js";import"./useResizeObserver-DGBnzj2_.js";import"./Collection-DdWaMwwY.js";import"./index-AO2QVlWM.js";import"./Separator-CUwgFn1F.js";import"./SelectionManager-Dkp955FZ.js";import"./useEvent-CwuHowAX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_Pwu52k.js";import"./useDescription-CCnP-Uo3.js";import"./ListKeyboardDelegate-BYmQaOVb.js";import"./PressResponder-Bxs7y7VP.js";import"./useLocalizedStringFormatter-BDBiLNys.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XkxXAZjC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DVVhBCOd.js";import"./Button-BJZHHaN3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CsRXfCs5.js";import"./createLucideIcon-BjfGBRzU.js";import"./x-md0iaidC.js";import"./Heading-BaBUFL96.js";import"./info-CioFJ2A0.js";import"./Popover-DNH_fOYv.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
