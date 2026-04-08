import{j as e}from"./iframe-CEYCzj7u.js";import{c}from"./Form-C-hDIK2G.js";import{G as d}from"./Grid-DZyNhUq0.js";import{G as i}from"./GridItem-QaQ4DLYa.js";import{a as x,R as u}from"./Radio-BzS9ldG5.js";import{C as I}from"./CheckboxGroup-COgQBArE.js";import{C as G}from"./Checkbox-DfzB48nQ.js";import{T as t}from"./TextField-XXsfsMjg.js";import{S as l}from"./Select-Dz-VInMO.js";import{L as p}from"./ListBoxItem-DXUlyL8O.js";import{B as a}from"./Button-DjNzlNeH.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dp-W9h8R.js";import"./utils-AQIE0kDv.js";import"./clsx-B-dksMZM.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./clsx-Ciqy0D92.js";import"./Group-CGDtkb1O.js";import"./FieldError-BW7B152f.js";import"./Text-BtotI6hp.js";import"./Text-BKjU8N6L.js";import"./Button-C7JuJvDF.js";import"./Hidden-BwxAj0d8.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./SelectionIndicator-6aWYUD_t.js";import"./useField-hWGv7I8v.js";import"./VisuallyHidden-B3AOW4Om.js";import"./useControlledState-BgNKedVs.js";import"./Label-CWkCAxQ5.js";import"./Dialog-__ogyhBQ.js";import"./RSPContexts-vK1IDStc.js";import"./OverlayArrow-CryUpgVZ.js";import"./useResizeObserver-ByR6jXTM.js";import"./Collection-C16s-VZy.js";import"./index-BY5MwQGH.js";import"./Separator-iR4yv8Ww.js";import"./SelectionManager-G6B6xgaW.js";import"./useEvent-B9xcl8_k.js";import"./scrollIntoView-BCOX-ymx.js";import"./useDescription-7tiDq9ws.js";import"./ListKeyboardDelegate-BNrqLeaN.js";import"./PressResponder-Daz5dWoT.js";import"./useLocalizedStringFormatter-DsBO9UZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rud58Vjt.js";import"./getScrollParent-DNFkay4Z.js";import"./Dialog-9iEeQYdN.js";import"./x-ubboyZZG.js";import"./createLucideIcon-Djfjk74V.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./Heading-BRZF6O29.js";import"./info-C8moI5QB.js";import"./Popover-CSxEPm7k.js";import"./check-BUrzU88v.js";import"./useToggleState-Dj2ZB4Qc.js";import"./TextFieldBase-BF0ex0kh.js";import"./Input-DLHz4SZ9.js";import"./useTextField-CLrsVGLU.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BPdFgHTv.js";import"./DragAndDrop-ehTtPCzD.js";import"./inertValue-CoeXxRbD.js";import"./useListState-BQuTzvP6.js";import"./TagGroup-DNGO8_Mz.js";import"./useHighlightSelectionDescription-BERhzC1y.js";import"./useUpdateEffect-B0ts-m9F.js";import"./useHasTabbableChild-BljZk98A.js";import"./chevron-down-DH4HLrPr.js";import"./Virtualizer-DV3b_HhW.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
