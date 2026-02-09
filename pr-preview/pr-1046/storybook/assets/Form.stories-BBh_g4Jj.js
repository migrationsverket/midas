import{j as e}from"./iframe-CDlGoVBX.js";import{$ as c}from"./Form-DTFKHJWV.js";import{G as d}from"./Grid-BmIOsXto.js";import{G as i}from"./GridItem-D5-tZVRG.js";import{a as x,R as u}from"./Radio-D1jSI0SG.js";import{C as I}from"./CheckboxGroup-D9SXALvJ.js";import{C as G}from"./Checkbox-Cgaybv88.js";import{T as t}from"./TextField-9iLmVbQj.js";import{S as l}from"./Select-B4IceS9m.js";import{L as p}from"./ListBoxItem-DxJfLaGJ.js";import{B as a}from"./Button-bhz0d5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DK0QJ5bq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C3JGr8K4.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./clsx-Ciqy0D92.js";import"./Group-BYFKWapm.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./Text-Cflgqxbo.js";import"./Button-ChHi1CmX.js";import"./Hidden-D3g4_ydn.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./useField-C4i4gm-f.js";import"./VisuallyHidden-BoTcuaXb.js";import"./useControlledState-CcD6TCI7.js";import"./Label-DnbVg9hf.js";import"./Dialog-ChLjSgrj.js";import"./RSPContexts-omBJ6Sgu.js";import"./OverlayArrow-DodgMuZn.js";import"./useResizeObserver-D1875uj1.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./Separator-Cbp4e2aL.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DUfOP2Oy.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./PressResponder-CwsbJqYe.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RKI4vDG-.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DzdEbKW-.js";import"./createLucideIcon-DnI-ftFI.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./Heading-Z24TZx0I.js";import"./info-DDIYqxGr.js";import"./Popover-wobZ9HHk.js";import"./check-D5ZdhC_y.js";import"./useToggleState-C4Fu6x2J.js";import"./TextFieldBase-DI1ecJHV.js";import"./TextField-c6Sz-paG.js";import"./Input-H5icjH4o.js";import"./useTextField-DnEnbiaG.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B-rUH4Fr.js";import"./DragAndDrop-Bqq4C-0h.js";import"./inertValue-RbHAcf9r.js";import"./useListState-Cz6J7cVg.js";import"./Tag-DB-1vJ7O.js";import"./useHighlightSelectionDescription-Dh4o4wZo.js";import"./useUpdateEffect-C8Jrz0MP.js";import"./useHasTabbableChild-CngMwZqY.js";import"./chevron-down-jQCLHUl-.js";import"./Virtualizer-mOrFMfzs.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
