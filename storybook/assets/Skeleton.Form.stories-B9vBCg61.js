import{j as e,l}from"./iframe--7ouzhCF.js";import{S as t}from"./Skeleton-DN00nGof.js";import{T as p}from"./TextField-DpTF4yea.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bp62yKU3.js";import"./utils-CCrPRXFd.js";import"./FieldError-C9fNdBcq.js";import"./Text-_ylAafRx.js";import"./useFocusRing-VMBdHrfo.js";import"./index-7GfLKj_c.js";import"./index-C-Az-PCO.js";import"./Text-Dt6EjG80.js";import"./RSPContexts-CaPUaSms.js";import"./Form-DACvBZcS.js";import"./useFormValidation-CNRC9kel.js";import"./Group-BOgZDXYB.js";import"./Input-jKdPrm9E.js";import"./Hidden-DnK2cKnr.js";import"./Button-MMOZkiqP.js";import"./useLabels-D2JG2NHF.js";import"./useButton-DUghFOmd.js";import"./useTextField-DkQlwemA.js";import"./useControlledState-WRN65Jvl.js";import"./useField-IWBX-r2S.js";import"./TextField.module-DdivwlC8.js";import"./Label-DF6-G_IC.js";import"./Dialog-ovIFsnup.js";import"./OverlayArrow-BPOKBhVM.js";import"./useResizeObserver-DIFFWWTx.js";import"./Collection-Drg-t8dC.js";import"./index-4Zg9c3TK.js";import"./Separator-CSVyjKiY.js";import"./SelectionManager-D7-uU-_9.js";import"./useEvent-BabVHB3y.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgFJ4ky6.js";import"./useDescription-XC1woF3d.js";import"./ListKeyboardDelegate-D6v7un4s.js";import"./PressResponder-exETk_hm.js";import"./useLocalizedStringFormatter-BqAS8Gzt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIqYLGym.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DZP5hbvT.js";import"./Button-D_kviF_H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiDiFH31.js";import"./createLucideIcon-DMRXokTE.js";import"./x-ik0duNRE.js";import"./Heading-CBucoZUc.js";import"./info-CqhI6-dj.js";import"./Popover-Db6zLERG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
