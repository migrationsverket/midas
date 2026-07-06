import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-PD9b5u2x.js";import{en as n,t as r}from"./import-BKa9ZY9p.js";import{t as i}from"./Button-CewgIIlK.js";import{t as a}from"./src-uRM8ujeC.js";import{t as o}from"./Checkbox-Ql62K82n.js";import{t as s}from"./CheckboxGroup-2_0z6OuQ.js";import{t as c}from"./ListBoxItem-1RQ2uY4E.js";import{r as l,t as u}from"./GridItem-BPsSnJp-.js";import{n as d,t as f}from"./Radio-CaDqcI7U.js";import{t as p}from"./Select-x13vjC7N.js";import{t as m}from"./TextField-BKj0cgfi.js";var h,g,_,v,y;e((()=>{r(),a(),h=t(),g={component:n,title:`Examples/Form`,tags:[`autodocs`],argTypes:{}},_={args:{},render:()=>(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{size:12,children:(0,h.jsx)(m,{label:`Ange ditt fullständiga namn`,description:`Glöm inte dina eventuella mellannamn!`})}),(0,h.jsx)(u,{size:12,children:(0,h.jsx)(m,{label:`Personnummmer`,description:`Anges på formen ÅÅMMDD-XXXX`})}),(0,h.jsx)(u,{size:12,children:(0,h.jsx)(p,{label:`Vilken är din favoritfrukt`,placeholder:`Välj en frukt`,selectionMode:`single`,items:[`Banan`,`Apple`,`Mango`].map(e=>({id:e,name:e})),children:e=>(0,h.jsx)(c,{...e,children:e.name})})}),(0,h.jsx)(u,{children:(0,h.jsx)(i,{children:`Skicka`})})]})},v={args:{},render:()=>{let e=[`A`,`B`,`C`];return(0,h.jsx)(`div`,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(d,{label:`Anledning`,description:`Ange anledning till att du söker i databasen`,children:[`Anledning A`,`Anledning B`,`Anledning C`].map(e=>(0,h.jsx)(f,{value:e,children:e},e))})}),(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(s,{label:`Databas`,description:`Välj databas att söka i`,children:e.map(e=>(0,h.jsx)(o,{value:e,children:e},e))})}),(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(m,{label:`Namn`,description:``})}),(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(m,{label:`Personnummer`})}),(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(p,{label:`Kön`,description:`Kan lämnas tomt`,placeholder:`Välj kön`,selectionMode:`single`,items:e.map(e=>({name:e,id:e})),children:e=>(0,h.jsx)(c,{...e,children:e.name})})}),(0,h.jsx)(u,{size:{xs:12,sm:6},children:(0,h.jsx)(m,{label:`Ärendekod`})}),(0,h.jsx)(u,{size:`auto`,children:(0,h.jsx)(i,{children:`Sök`})}),(0,h.jsx)(u,{size:`auto`,children:(0,h.jsx)(i,{variant:`secondary`,children:`Rensa`})})]})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`SimpleForm`,`TwoColumnForm`]}))();export{_ as SimpleForm,v as TwoColumnForm,y as __namedExportsOrder,g as default};