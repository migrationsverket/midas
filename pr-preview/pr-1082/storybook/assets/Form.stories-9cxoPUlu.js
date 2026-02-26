import{j as e}from"./iframe-CCQoa_za.js";import{$ as c}from"./Form-CtASfJWn.js";import{G as d}from"./Grid-BLR2z8lx.js";import{G as i}from"./GridItem-BEo_W_zw.js";import{a as x,R as u}from"./Radio-0_8gLS76.js";import{C as I}from"./CheckboxGroup-Bzqod1OQ.js";import{C as G}from"./Checkbox-3GIr4X6A.js";import{T as t}from"./TextField-BwI2acbT.js";import{S as l}from"./Select-SHTCm-El.js";import{L as p}from"./ListBoxItem-BfnNTDgE.js";import{B as a}from"./Button-C_b8qgGp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BdXRUyql.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cbtdnqjx.js";import"./useFocusRing-BCtmiU0K.js";import"./index-B-zUS5Y_.js";import"./index-v9D4YVUO.js";import"./clsx-Ciqy0D92.js";import"./Group-CM9tXWmS.js";import"./FieldError-CpKUhFOP.js";import"./Text-YX2OQKIh.js";import"./Text-CqLZ0QeB.js";import"./Button-BrsQgG2O.js";import"./Hidden-DcjYmRqi.js";import"./useLabels-B6SFlZG6.js";import"./useButton-CrmhM509.js";import"./SelectionIndicator-DxjscOJj.js";import"./useField-DmXFFhmO.js";import"./VisuallyHidden-B--Ked72.js";import"./useControlledState-CDPjHx4z.js";import"./Label-oSwHdS4B.js";import"./Dialog-CPfRBNp_.js";import"./RSPContexts-7vhnChNh.js";import"./Collection-QWDkhOmC.js";import"./index-CO5TAJRV.js";import"./Separator-Q7_RWth6.js";import"./SelectionManager-VGqUM2UO.js";import"./useEvent-CScpbFfp.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTFIEJBZ.js";import"./ListKeyboardDelegate-wa-GcMJZ.js";import"./PressResponder-CcoQZDOV.js";import"./useLocalizedStringFormatter-DGLdWeqa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CDIA4O5d.js";import"./createLucideIcon-Q-uPorfw.js";import"./useLocalizedStringFormatter-C-e4eVhQ.js";import"./Heading-e8mJhic5.js";import"./info-CahQ617a.js";import"./Popover-CbyNasAR.js";import"./check-DZuVoXix.js";import"./useToggleState-BKXVYURV.js";import"./TextFieldBase-DUDTgqPL.js";import"./Input-CUDkpndu.js";import"./useTextField-Dd2cx5I5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BtowoHcB.js";import"./DragAndDrop-BK_49_YM.js";import"./inertValue-D9Nviv6v.js";import"./useListState-jhsVok5l.js";import"./TagGroup-C7BrKayF.js";import"./useHighlightSelectionDescription-BCkjhks2.js";import"./useUpdateEffect-C7cVUbKB.js";import"./useHasTabbableChild-CdtsPx6o.js";import"./chevron-down-CvoNRZ32.js";import"./Virtualizer-n4OKKL63.js";import"./Button.module-CPCFE9o0.js";const Fe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const De=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,De as __namedExportsOrder,Fe as default};
