import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./Text-CIOZ0Lwu.js";import{c as r,i,s as a,t as o}from"./Card-DI4r0-ng.js";import{n as s,t as c}from"./GridItem-CrTk2Ox3.js";import{n as l,t as u}from"./Grid-DL_YWFRb.js";import{n as d,t as f}from"./TextField-hHvLbITr.js";import{n as p}from"./iframe-D78NMt9D.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{l(),s(),d(),r(),t(),m=p(),h={component:u,subcomponents:{GridItem:c},title:`Components/Grid`,tags:[`autodocs`],parameters:{layout:`fullscreen`},argTypes:{isContained:{control:{type:`boolean`}},removeMargins:{control:{type:`boolean`}}}},g={args:{},render:({...e})=>(0,m.jsxs)(u,{...e,children:[(0,m.jsx)(c,{children:(0,m.jsx)(f,{label:`Ditt meddelande`,description:`Skriv ett litet meddelande`})}),(0,m.jsx)(c,{size:{xs:12,sm:6,md:6},children:(0,m.jsx)(o,{children:(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{children:`Dina uppgifter`}),(0,m.jsx)(n,{children:`Namn: Namn Namnsson`})]})})}),(0,m.jsx)(c,{size:{xs:12,sm:6,md:12,lg:6,xl:12},children:(0,m.jsx)(o,{children:(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{children:`Dina uppgifter`}),(0,m.jsx)(n,{children:`Namn: Namn Namnsson`})]})})}),(0,m.jsx)(c,{size:{xs:12,sm:5,md:6},children:(0,m.jsx)(f,{label:`Ditt meddelande`,description:`Skriv ett litet meddelande`})}),(0,m.jsx)(c,{size:{xs:12,sm:5,md:6},children:(0,m.jsx)(f,{label:`Ditt meddelande`,description:`Skriv ett litet meddelande`})}),(0,m.jsx)(c,{size:`auto`,children:(0,m.jsx)(o,{children:(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{children:`Dina uppgifter`}),(0,m.jsx)(n,{children:`Namn: Namn Namnsson`})]})})}),(0,m.jsx)(c,{children:(0,m.jsx)(o,{children:(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{children:`Dina uppgifter`}),(0,m.jsx)(n,{children:`Namn: Namn Namnsson`})]})})})]})},_=[[12],[6,6],[4,4,4],[3,3,3,3]],v={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{indexPreview:{width:`640px`}},render:e=>(0,m.jsx)(u,{...e,children:_.flatMap((e,t)=>e.map((e,n)=>(0,m.jsx)(c,{size:e,children:(0,m.jsx)(`div`,{style:{height:32,backgroundColor:`var(--midas-border-color-subtle)`}})},`${t}-${n}`)))})},y=[`Primary`,`Preview`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid {...args}>
      <GridItem>
        <TextField label='Ditt meddelande' description='Skriv ett litet meddelande' />
      </GridItem>
      <GridItem size={{
      xs: 12,
      sm: 6,
      md: 6
    }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{
      xs: 12,
      sm: 6,
      md: 12,
      lg: 6,
      xl: 12
    }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{
      xs: 12,
      sm: 5,
      md: 6
    }}>
        <TextField label='Ditt meddelande' description='Skriv ett litet meddelande' />
      </GridItem>
      <GridItem size={{
      xs: 12,
      sm: 5,
      md: 6
    }}>
        <TextField label='Ditt meddelande' description='Skriv ett litet meddelande' />
      </GridItem>
      <GridItem size='auto'>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  // Empty boxes, so the columns themselves are what the preview shows
  parameters: {
    indexPreview: {
      width: '640px'
    }
  },
  render: args => <Grid {...args}>
      {previewRows.flatMap((row, rowIndex) => row.map((size, index) => <GridItem key={\`\${rowIndex}-\${index}\`} size={size}>
            <div style={{
        height: 32,
        backgroundColor: 'var(--midas-border-color-subtle)'
      }} />
          </GridItem>))}
    </Grid>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Preview,g as Primary,y as __namedExportsOrder,h as default};