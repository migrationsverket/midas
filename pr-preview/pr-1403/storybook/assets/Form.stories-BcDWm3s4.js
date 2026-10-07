import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{r as t,t as n}from"./Form-CW0VOo3J.js";import{n as r,t as i}from"./Checkbox-91H3dMLq.js";import{i as a,n as o,r as s,t as c}from"./RadioGroup-D0IOwi70.js";import{n as l}from"./iframe-qaTC3cND.js";import{n as u,t as d}from"./Button-JRCeU01-.js";import{n as f,t as p}from"./CheckboxGroup-Bf5sxRk5.js";import{n as m,t as h}from"./Select-B65k_tj7.js";import{n as g,t as _}from"./ListBoxItem-CHLcnhV9.js";import{n as v,t as y}from"./GridItem-Bb5SCSuG.js";import{n as b,t as x}from"./Grid-IPz9Qfx2.js";import{n as S,t as C}from"./TextField-BHbrcCfQ.js";var w,T,E,D,O;function k(){return(k=e((()=>{t(),S(),b(),v(),r(),f(),a(),o(),m(),u(),g(),w=l(),T={component:n,title:`Examples/Form`,tags:[`autodocs`],argTypes:{}},E={args:{},render:()=>(0,w.jsxs)(x,{children:[(0,w.jsx)(y,{size:12,children:(0,w.jsx)(C,{label:`Ange ditt fullständiga namn`,description:`Glöm inte dina eventuella mellannamn!`})}),(0,w.jsx)(y,{size:12,children:(0,w.jsx)(C,{label:`Personnummmer`,description:`Anges på formen ÅÅMMDD-XXXX`})}),(0,w.jsx)(y,{size:12,children:(0,w.jsx)(h,{label:`Vilken är din favoritfrukt`,placeholder:`Välj en frukt`,selectionMode:`single`,items:[`Banan`,`Apple`,`Mango`].map(e=>({id:e,name:e})),children:e=>(0,w.jsx)(_,{...e,children:e.name})})}),(0,w.jsx)(y,{children:(0,w.jsx)(d,{children:`Skicka`})})]})},D={args:{},render:()=>{let e=[`A`,`B`,`C`];return(0,w.jsx)(`div`,{children:(0,w.jsxs)(x,{children:[(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(c,{label:`Anledning`,description:`Ange anledning till att du söker i databasen`,children:[`Anledning A`,`Anledning B`,`Anledning C`].map(e=>(0,w.jsx)(s,{value:e,children:e},e))})}),(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(p,{label:`Databas`,description:`Välj databas att söka i`,children:e.map(e=>(0,w.jsx)(i,{value:e,children:e},e))})}),(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(C,{label:`Namn`,description:``})}),(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(C,{label:`Personnummer`})}),(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(h,{label:`Kön`,description:`Kan lämnas tomt`,placeholder:`Välj kön`,selectionMode:`single`,items:e.map(e=>({name:e,id:e})),children:e=>(0,w.jsx)(_,{...e,children:e.name})})}),(0,w.jsx)(y,{size:{xs:12,sm:6},children:(0,w.jsx)(C,{label:`Ärendekod`})}),(0,w.jsx)(y,{size:`auto`,children:(0,w.jsx)(d,{children:`Sök`})}),(0,w.jsx)(y,{size:`auto`,children:(0,w.jsx)(d,{variant:`secondary`,children:`Rensa`})})]})})}},O=[`SimpleForm`,`TwoColumnForm`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{E as SimpleForm,D as TwoColumnForm,O as __namedExportsOrder,T as default};