import{j as e}from"./iframe-C5ngTzwY.js";import{c}from"./Form-CItLNKU2.js";import{G as d}from"./Grid-ChIEv57d.js";import{G as i}from"./GridItem-CYaqooSD.js";import{a as x,R as u}from"./Radio-CH6mNCyl.js";import{C as I}from"./CheckboxGroup-3SRjhWM5.js";import{C as G}from"./Checkbox-Bqfjp4VX.js";import{T as t}from"./TextField-Bl5qgB3B.js";import{S as l}from"./Select-CiMw53CQ.js";import{L as p}from"./ListBoxItem-DuUGK3e1.js";import{B as a}from"./Button-paZ2bXFh.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-widihIkF.js";import"./utils-Dg8dAIMb.js";import"./clsx-B-dksMZM.js";import"./index-q0KT5jnp.js";import"./index-Ccze4rZ3.js";import"./clsx-Ciqy0D92.js";import"./Group-BmSX7JQZ.js";import"./FieldError-BAFjpL0i.js";import"./Text-Dao-YHjx.js";import"./Text-BREpfkEt.js";import"./Button-CG1C0RCC.js";import"./Hidden-D_4pS1pD.js";import"./useLabel-Dvu8tBif.js";import"./useLabels-DAN8PIoI.js";import"./useButton-BWnFtbTH.js";import"./SelectionIndicator-CNfIOHhB.js";import"./useField-5SggJKuz.js";import"./VisuallyHidden-B1SQTSBU.js";import"./useControlledState-xqz1UZWj.js";import"./Label-C88-svVY.js";import"./Dialog-DHmHVnOq.js";import"./RSPContexts-lIIzFU1O.js";import"./OverlayArrow-4yrLBH91.js";import"./useResizeObserver-CiVu1b85.js";import"./Collection-CqD_Mfx9.js";import"./index--mPa9dWU.js";import"./Separator-CZEQnwHv.js";import"./SelectionManager-ClM-GsI7.js";import"./useEvent-DJU-p8Vq.js";import"./scrollIntoView-CSaBvUCD.js";import"./useDescription-DWjqWAOZ.js";import"./ListKeyboardDelegate-DojHSTUI.js";import"./PressResponder-Cj6c8Ua8.js";import"./useLocalizedStringFormatter-ByZ5j5zE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AsKLtz-d.js";import"./getScrollParent-DY1wappT.js";import"./ModalOverlay-CWh6ncFf.js";import"./x-CYTkygL5.js";import"./createLucideIcon-Ctpe4pW9.js";import"./useLocalizedStringFormatter-DgMvPFf5.js";import"./Heading-LMzx5xYL.js";import"./info-BcPplmWd.js";import"./Popover-5KRYqPP8.js";import"./check-B8_1l3uM.js";import"./useToggleState-C-TE1eDB.js";import"./TextFieldBase-Br6ujWNk.js";import"./Input-DrXI5JNl.js";import"./useTextField-CMupa5sr.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-LO-aaNEw.js";import"./DragAndDrop-CKx6lkFo.js";import"./inertValue-DPQuSyAI.js";import"./useListState-D7DCqStF.js";import"./TagGroup-CbI1IHvQ.js";import"./useHighlightSelectionDescription-vKyhitRM.js";import"./useUpdateEffect-1i9OlQXC.js";import"./useHasTabbableChild-DvEgliWs.js";import"./chevron-down-CKQHN2Zk.js";import"./Virtualizer-BSTfw-Uq.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
