import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,t as n}from"./Dialog-DJCO7HQT.js";import{n as r,t as i}from"./SearchField-CeHEfXTv.js";import{n as a,t as o}from"./Button-48catHxl.js";import{n as s,t as c}from"./Heading-CLsmjUa3.js";import{n as l,t as u}from"./Popover-CYfwYFDn.js";import{n as d,t as f}from"./Select-DOb1Io9q.js";import{n as p,t as m}from"./ListBoxItem-ByMF3hDa.js";import{n as h,t as g}from"./TextField-CfIm4Haf.js";import{n as _}from"./iframe-Bx6ri-G5.js";var v,y,b,x,S;function C(){return(C=e((()=>{t(),l(),h(),r(),d(),p(),s(),a(),v=_(),y={title:`Examples/Layers`,tags:[`autodocs`],argTypes:{},parameters:{docs:{description:{component:"Formulärfält väljer automatiskt rätt bakgrundsfärg beroende på vilken yta de ligger på — `field-01` direkt på sidbakgrunden, `field-02` på en yta som `Popover`. Detta sker via en CSS-variabelkedja, utan att komponenterna behöver några extra props. Samma auto-val gäller `isDisabled`."}}}},b=({isDisabled:e})=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{label:`Namn`,placeholder:`Anna Andersson`,isDisabled:e}),(0,v.jsx)(i,{placeholder:`Sök...`,isDisabled:e}),(0,v.jsxs)(f,{label:`Välj alternativ`,isDisabled:e,children:[(0,v.jsx)(m,{id:`a`,children:`Alternativ A`}),(0,v.jsx)(m,{id:`b`,children:`Alternativ B`})]})]}),x={args:{},render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`2rem`,alignItems:`start`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(c,{level:3,children:`På sidbakgrund (field-01)`}),(0,v.jsx)(b,{}),(0,v.jsx)(c,{level:4,children:`Inaktiverad`}),(0,v.jsx)(b,{isDisabled:!0})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(c,{level:3,children:`I Popover (field-02)`}),(0,v.jsxs)(n,{defaultOpen:!0,children:[(0,v.jsx)(o,{variant:`secondary`,children:`Öppna popover`}),(0,v.jsx)(u,{placement:`bottom start`,children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(b,{}),(0,v.jsx)(c,{level:4,children:`Inaktiverad`}),(0,v.jsx)(b,{isDisabled:!0})]})})]})]})]})},S=[`FieldLayers`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as FieldLayers,S as __namedExportsOrder,y as default};