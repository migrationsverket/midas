import{j as e}from"./iframe-COBKNkIo.js";import{$ as c}from"./Form-CrqQ6pcU.js";import{G as d}from"./Grid-CiWSMKVP.js";import{G as i}from"./GridItem-BfOZpHtG.js";import{a as x,R as u}from"./Radio-DmNw1495.js";import{C as I}from"./CheckboxGroup-BEr4jh2I.js";import{C as G}from"./Checkbox-BJtMr-7e.js";import{T as t}from"./TextField-Cuogx_Sw.js";import{S as l}from"./Select-tqM-Xx5S.js";import{L as p}from"./ListBoxItem-CsdLHzDI.js";import{B as a}from"./Button-COjdwtTG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cawu88FS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-UFN-ft0-.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./clsx-Ciqy0D92.js";import"./Group-xuQ-_fHE.js";import"./FieldError-Dc4PcQjT.js";import"./Text-fShGFw3n.js";import"./Text-CtIfC9h2.js";import"./Button-DVN4emYY.js";import"./Hidden-DWdHgASM.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./SelectionIndicator-Br11R8Lo.js";import"./useField-9hLn6ruD.js";import"./VisuallyHidden-vIshbz0f.js";import"./useControlledState-njDs9clp.js";import"./Label-B6eBqJFb.js";import"./Dialog-DB5rjtZZ.js";import"./RSPContexts-C70LcTh5.js";import"./OverlayArrow-DKSkdDqN.js";import"./useResizeObserver-Bqb8qtFK.js";import"./Collection-ORahdX2f.js";import"./index-CkZw-AsC.js";import"./Separator-D6JsExfa.js";import"./SelectionManager-c9AzP8-j.js";import"./useEvent-eTIvht7u.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CxjHqdVd.js";import"./ListKeyboardDelegate-CCRA5f7Y.js";import"./PressResponder-DcbM8PZp.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8ZwlS_W.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Dj_xkDq5.js";import"./createLucideIcon-CRw8Ded6.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./Heading-C1jl_BHV.js";import"./info-BqWnuKgo.js";import"./Popover-D6-r6tyV.js";import"./check-BpluVbWu.js";import"./useToggleState-BXn7YFUz.js";import"./TextFieldBase-CoAEAarK.js";import"./TextField-BpdwwqNr.js";import"./Input-B2xEvH7p.js";import"./useTextField-CgNJouZW.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CqTZoOWr.js";import"./DragAndDrop-BsxFFZSJ.js";import"./inertValue-CcKKKiuQ.js";import"./useListState-Ds5F3qaR.js";import"./Tag-CsFoarPR.js";import"./useHighlightSelectionDescription-2iLn_dD4.js";import"./useUpdateEffect-DiKf_ziZ.js";import"./useHasTabbableChild-BmD0zWNz.js";import"./chevron-down-CrQ9TaiI.js";import"./Virtualizer-DpwlYGa5.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
