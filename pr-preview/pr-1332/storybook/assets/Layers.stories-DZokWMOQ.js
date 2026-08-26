import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CWnf4t2a.js";import{t as n}from"./Heading-BINgRhOb.js";import{t as r}from"./src-Dtv3yJTR.js";import{a as i,n as a,s as o}from"./card-header-BoeTf3-q.js";import{a as s}from"./ListBoxHeader-BkSwClYh.js";import{t as c}from"./SearchField-Yv5VJ4tG.js";import{t as l}from"./Select-DoHeOtgs.js";import{t as u}from"./TextField-CgRp9PYV.js";var d,f,p,m,h;e((()=>{r(),d=t(),f={title:`Examples/Layers`,tags:[`autodocs`],argTypes:{},parameters:{docs:{description:{component:"Formulärfält väljer automatiskt rätt bakgrundsfärg beroende på vilken yta de ligger på — `field-01` direkt på sidbakgrunden, `field-02` på en yta som `Card`. Detta sker via en CSS-variabelkedja, utan att komponenterna behöver några extra props. Samma auto-val gäller `isDisabled`."}}}},p=({isDisabled:e})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{label:`Namn`,placeholder:`Anna Andersson`,isDisabled:e}),(0,d.jsx)(c,{placeholder:`Sök...`,isDisabled:e}),(0,d.jsxs)(l,{label:`Välj alternativ`,isDisabled:e,children:[(0,d.jsx)(s,{id:`a`,children:`Alternativ A`}),(0,d.jsx)(s,{id:`b`,children:`Alternativ B`})]})]}),m={args:{},render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`2rem`,alignItems:`start`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,d.jsx)(n,{level:3,children:`På sidbakgrund (field-01)`}),(0,d.jsx)(p,{}),(0,d.jsx)(n,{level:4,children:`Inaktiverad`}),(0,d.jsx)(p,{isDisabled:!0})]}),(0,d.jsxs)(o,{children:[(0,d.jsx)(a,{heading:`På Card-yta (field-02)`}),(0,d.jsxs)(i,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,d.jsx)(p,{}),(0,d.jsx)(n,{level:4,children:`Inaktiverad`}),(0,d.jsx)(p,{isDisabled:!0})]})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

      <Card>
        <CardHeader heading='På Card-yta (field-02)' />
        <CardBody style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
          <LayerFields />
          <Heading level={4}>Inaktiverad</Heading>
          <LayerFields isDisabled />
        </CardBody>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`FieldLayers`]}))();export{m as FieldLayers,h as __namedExportsOrder,f as default};