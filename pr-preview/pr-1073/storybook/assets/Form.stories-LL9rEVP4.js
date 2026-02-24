import{j as e}from"./iframe-BAopCnld.js";import{$ as c}from"./Form-bOnRh8z6.js";import{G as d}from"./Grid-CagbTlVz.js";import{G as i}from"./GridItem-DbnHnFw_.js";import{a as x,R as u}from"./Radio-CBgRJqO7.js";import{C as I}from"./CheckboxGroup-D73dvXNc.js";import{C as G}from"./Checkbox-BuxfpDUO.js";import{T as t}from"./TextField-DlKOlR-g.js";import{S as l}from"./Select-Cs2SIcMl.js";import{L as p}from"./ListBoxItem-DVfE_rdj.js";import{B as a}from"./Button-DUq5Osur.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-TYM9m5l-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BzG8sa6-.js";import"./useFocusRing-Cj-Dx8Kj.js";import"./index-CdNRYS6s.js";import"./index-DlrHJv33.js";import"./clsx-Ciqy0D92.js";import"./Group-DWTk7wz6.js";import"./FieldError-CkW_duZ2.js";import"./Text-CDzIZS0i.js";import"./Text-BfWzCbJi.js";import"./Button-Dru9a9zr.js";import"./Hidden-DY-k-QkJ.js";import"./useLabels-C7py-VLT.js";import"./useButton-Bi-jV0pn.js";import"./SelectionIndicator-B-o6hBnH.js";import"./useField-9pxSoNHy.js";import"./VisuallyHidden-C-nRUGXf.js";import"./useControlledState-BtrDhWy8.js";import"./Label-D9T8WZZH.js";import"./Dialog-B9DlX-ft.js";import"./RSPContexts-D4u5AE_u.js";import"./OverlayArrow-D7TMnEFi.js";import"./useResizeObserver-CC-iSxbA.js";import"./Collection-BoGR0YWJ.js";import"./index-CW9ggjBK.js";import"./Separator-CZ5LEiPC.js";import"./SelectionManager-DQ3alK7K.js";import"./useEvent-CX3pPkMV.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BLJw6CQp.js";import"./ListKeyboardDelegate-BTbds_TW.js";import"./PressResponder-Bg36ScGZ.js";import"./useLocalizedStringFormatter-CbSKOlm6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9_9nCKze.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-e8tzunbl.js";import"./createLucideIcon-CIlyQxOt.js";import"./useLocalizedStringFormatter-D8BA2qO_.js";import"./Heading-DsKKyaDB.js";import"./info-CYC8I8tw.js";import"./Popover-CjHQR1-6.js";import"./check-3tPvsBvc.js";import"./useToggleState-DPkMCuhi.js";import"./TextFieldBase-BN75x3kH.js";import"./Input-xiaZXjMm.js";import"./useTextField-N4uhqIO8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DU7i9wd4.js";import"./DragAndDrop-CHhLjXLs.js";import"./inertValue-CwzXEA08.js";import"./useListState-D-4_TNof.js";import"./TagGroup-C4N3XJRW.js";import"./useHighlightSelectionDescription-C8GbJpBp.js";import"./useUpdateEffect-DpJ2zt-A.js";import"./useHasTabbableChild-D-_WHdNI.js";import"./chevron-down-BAWMPB1A.js";import"./Virtualizer-fgp6m9dx.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
