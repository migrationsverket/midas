import{j as e,l}from"./iframe-Bf2O8mTA.js";import{S as t}from"./Skeleton-DgWP3QTs.js";import{T as p}from"./TextField-zH_YKZYv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BN1pQzKC.js";import"./utils-DvWeM8bD.js";import"./TextField-B6K9WGDi.js";import"./FieldError-DmoCXSDp.js";import"./Text-Br20EZ_Y.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./Text-C9gRZFsm.js";import"./RSPContexts-hwAw1TwI.js";import"./Form-DYo8KYF6.js";import"./useFormValidation-BYxqhBck.js";import"./Group-Cj9Vvhx9.js";import"./Input-BzA5AFfw.js";import"./Hidden-Bayn64y7.js";import"./Button-rJBUL80Z.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./useTextField-CBUs1YNw.js";import"./useControlledState-B4kZCJVJ.js";import"./useField-BNnNMNgv.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CD1d4Xmd.js";import"./Dialog-BY8A039T.js";import"./OverlayArrow-CtPodeWM.js";import"./useResizeObserver-i-41ifPW.js";import"./Collection-CvTBTnk3.js";import"./index-wKm3OkVX.js";import"./Separator-BrNcT25L.js";import"./SelectionManager-BtZRuM5E.js";import"./useEvent-BtnAi-yB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuSwNt_S.js";import"./useDescription-Dq7jvEgt.js";import"./ListKeyboardDelegate-BxLtXsZO.js";import"./PressResponder-CGCF4LOu.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ou16LPbu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BdseXYtF.js";import"./Button-DqEB6TwE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./createLucideIcon-DkEcA7M8.js";import"./x-rPy8VafX.js";import"./Heading-Dv8-19Cj.js";import"./info-D1lcR4Lw.js";import"./Popover-CS3oSh0J.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
