import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,t as n}from"./Dialog-CtBArAhL.js";import{n as r,t as i}from"./SearchField-CkWtVcw8.js";import{n as a}from"./iframe-CXm8y9OE.js";import{n as o,t as s}from"./Button-_3fHQIr3.js";import{n as c,t as l}from"./Heading-Bd77zeTO.js";import{n as u,t as d}from"./Popover-Z_4-RpaT.js";import{n as f,t as p}from"./Select-CPfoYfSA.js";import{n as m,t as h}from"./ListBoxItem-BF6kO-5v.js";import{n as g,t as _}from"./TextField-BG_2ueub.js";var v,y,b,x,S;function C(){return(C=e((()=>{t(),u(),g(),r(),f(),m(),c(),o(),v=a(),y={title:`Examples/Layers`,tags:[`autodocs`],argTypes:{},parameters:{docs:{description:{component:"Formulärfält väljer automatiskt rätt bakgrundsfärg beroende på vilken yta de ligger på — `field-01` direkt på sidbakgrunden, `field-02` på en yta som `Popover`. Detta sker via en CSS-variabelkedja, utan att komponenterna behöver några extra props. Samma auto-val gäller `isDisabled`."}}}},b=({isDisabled:e})=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{label:`Namn`,placeholder:`Anna Andersson`,isDisabled:e}),(0,v.jsx)(i,{placeholder:`Sök...`,isDisabled:e}),(0,v.jsxs)(p,{label:`Välj alternativ`,isDisabled:e,children:[(0,v.jsx)(h,{id:`a`,children:`Alternativ A`}),(0,v.jsx)(h,{id:`b`,children:`Alternativ B`})]})]}),x={args:{},render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`2rem`,alignItems:`start`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(l,{level:3,children:`På sidbakgrund (field-01)`}),(0,v.jsx)(b,{}),(0,v.jsx)(l,{level:4,children:`Inaktiverad`}),(0,v.jsx)(b,{isDisabled:!0})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(l,{level:3,children:`I Popover (field-02)`}),(0,v.jsxs)(n,{defaultOpen:!0,children:[(0,v.jsx)(s,{variant:`secondary`,children:`Öppna popover`}),(0,v.jsx)(d,{placement:`bottom start`,children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,v.jsx)(b,{}),(0,v.jsx)(l,{level:4,children:`Inaktiverad`}),(0,v.jsx)(b,{isDisabled:!0})]})})]})]})]})},S=[`FieldLayers`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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