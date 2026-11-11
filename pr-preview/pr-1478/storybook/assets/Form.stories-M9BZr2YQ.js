import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,s as n}from"./useFormValidation-D6pGlpGE.js";import{n as r,t as i}from"./Checkbox-BUkZQkT7.js";import{i as a,n as o,r as s,t as c}from"./RadioGroup-Eu-WMcd7.js";import{n as l,t as u}from"./Button-0LS54158.js";import{n as d,t as f}from"./CheckboxGroup-ImMi5HaL.js";import{n as p,t as m}from"./Select-ceRySkEm.js";import{n as h,t as g}from"./ListBoxItem-EDajHcA8.js";import{n as _,t as v}from"./GridItem-BEPmdvFs.js";import{n as y,t as b}from"./Grid-DEJ1ksqt.js";import{n as x,t as S}from"./TextField-Dudnofk2.js";import{n as C}from"./iframe-rO7NPwkc.js";var w,T,E,D,O;function k(){return(k=e((()=>{n(),x(),y(),_(),r(),d(),a(),o(),p(),l(),h(),w=C(),T={component:t,title:`Examples/Form`,tags:[`autodocs`],argTypes:{}},E={args:{},render:()=>(0,w.jsxs)(b,{children:[(0,w.jsx)(v,{size:12,children:(0,w.jsx)(S,{label:`Ange ditt fullständiga namn`,description:`Glöm inte dina eventuella mellannamn!`})}),(0,w.jsx)(v,{size:12,children:(0,w.jsx)(S,{label:`Personnummmer`,description:`Anges på formen ÅÅMMDD-XXXX`})}),(0,w.jsx)(v,{size:12,children:(0,w.jsx)(m,{label:`Vilken är din favoritfrukt`,placeholder:`Välj en frukt`,selectionMode:`single`,items:[`Banan`,`Apple`,`Mango`].map(e=>({id:e,name:e})),children:e=>(0,w.jsx)(g,{...e,children:e.name})})}),(0,w.jsx)(v,{children:(0,w.jsx)(u,{children:`Skicka`})})]})},D={args:{},render:()=>{let e=[`A`,`B`,`C`];return(0,w.jsx)(`div`,{children:(0,w.jsxs)(b,{children:[(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(c,{label:`Anledning`,description:`Ange anledning till att du söker i databasen`,children:[`Anledning A`,`Anledning B`,`Anledning C`].map(e=>(0,w.jsx)(s,{value:e,children:e},e))})}),(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(f,{label:`Databas`,description:`Välj databas att söka i`,children:e.map(e=>(0,w.jsx)(i,{value:e,children:e},e))})}),(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(S,{label:`Namn`,description:``})}),(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(S,{label:`Personnummer`})}),(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(m,{label:`Kön`,description:`Kan lämnas tomt`,placeholder:`Välj kön`,selectionMode:`single`,items:e.map(e=>({name:e,id:e})),children:e=>(0,w.jsx)(g,{...e,children:e.name})})}),(0,w.jsx)(v,{size:{xs:12,sm:6},children:(0,w.jsx)(S,{label:`Ärendekod`})}),(0,w.jsx)(v,{size:`auto`,children:(0,w.jsx)(u,{children:`Sök`})}),(0,w.jsx)(v,{size:`auto`,children:(0,w.jsx)(u,{variant:`secondary`,children:`Rensa`})})]})})}},O=[`SimpleForm`,`TwoColumnForm`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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