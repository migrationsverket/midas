import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BW2g9V1x.js";import{bt as n,t as r}from"./exports-CpXH4Z2P.js";import{t as i}from"./Button-r33rTZ8A.js";import{t as a}from"./Heading-COg4rAq5.js";import{t as o}from"./src-A-mwEpWq.js";import{t as s}from"./Popover-CdfF4-Na.js";import{a as c}from"./ListBoxHeader-Ca0o_eNg.js";import{t as l}from"./SearchField-C6yU-Zcg.js";import{t as u}from"./Select-DOHJHzil.js";import{t as d}from"./TextField-Bq6_OoP_.js";var f,p,m,h,g;e((()=>{r(),o(),f=t(),p={title:`Examples/Layers`,tags:[`autodocs`],argTypes:{},parameters:{docs:{description:{component:"Formulärfält väljer automatiskt rätt bakgrundsfärg beroende på vilken yta de ligger på — `field-01` direkt på sidbakgrunden, `field-02` på en yta som `Popover`. Detta sker via en CSS-variabelkedja, utan att komponenterna behöver några extra props. Samma auto-val gäller `isDisabled`."}}}},m=({isDisabled:e})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{label:`Namn`,placeholder:`Anna Andersson`,isDisabled:e}),(0,f.jsx)(l,{placeholder:`Sök...`,isDisabled:e}),(0,f.jsxs)(u,{label:`Välj alternativ`,isDisabled:e,children:[(0,f.jsx)(c,{id:`a`,children:`Alternativ A`}),(0,f.jsx)(c,{id:`b`,children:`Alternativ B`})]})]}),h={args:{},render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`2rem`,alignItems:`start`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,f.jsx)(a,{level:3,children:`På sidbakgrund (field-01)`}),(0,f.jsx)(m,{}),(0,f.jsx)(a,{level:4,children:`Inaktiverad`}),(0,f.jsx)(m,{isDisabled:!0})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,f.jsx)(a,{level:3,children:`I Popover (field-02)`}),(0,f.jsxs)(n,{defaultOpen:!0,children:[(0,f.jsx)(i,{variant:`secondary`,children:`Öppna popover`}),(0,f.jsx)(s,{placement:`bottom start`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,f.jsx)(m,{}),(0,f.jsx)(a,{level:4,children:`Inaktiverad`}),(0,f.jsx)(m,{isDisabled:!0})]})})]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'start'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Heading level={3}>På sidbakgrund (field-01)</Heading>
        <LayerFields />
        <Heading level={4}>Inaktiverad</Heading>
        <LayerFields isDisabled />
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Heading level={3}>I Popover (field-02)</Heading>
        <DialogTrigger defaultOpen>
          <Button variant='secondary'>Öppna popover</Button>
          <Popover placement='bottom start'>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
              <LayerFields />
              <Heading level={4}>Inaktiverad</Heading>
              <LayerFields isDisabled />
            </div>
          </Popover>
        </DialogTrigger>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`FieldLayers`]}))();export{h as FieldLayers,g as __namedExportsOrder,p as default};