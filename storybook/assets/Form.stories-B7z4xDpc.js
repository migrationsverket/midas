import{j as e}from"./iframe-H2fTZ2nq.js";import{$ as c}from"./Form-qTx3d32I.js";import{G as d}from"./Grid-BOogRNg4.js";import{G as i}from"./GridItem-Dl_Juwmk.js";import{a as x,R as u}from"./Radio-DOHbLduq.js";import{C as I}from"./CheckboxGroup-D7agz8Gm.js";import{C as G}from"./Checkbox-CRBbuf9m.js";import{T as t}from"./TextField-IRJLyZeB.js";import{S as l}from"./Select-C0Tk-uQE.js";import{L as p}from"./ListBoxItem-Dl1uAM9M.js";import{B as a}from"./Button-wmHwb-lN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DW5ctycD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DMoO2kJv.js";import"./useFocusRing-rY5-5oYI.js";import"./index-CIV3byj9.js";import"./index-CSi78BJY.js";import"./clsx-Ciqy0D92.js";import"./Group-CtGktpK3.js";import"./FieldError-Ze_QYnbw.js";import"./Text-DSNt7iu3.js";import"./Text-K2RkR5q1.js";import"./Button-Thvc77gT.js";import"./Hidden-4IKYQ2HC.js";import"./useLabels-CTAJFpqt.js";import"./useButton-Ch9WkEmD.js";import"./SelectionIndicator-DuYULepk.js";import"./useField-BMix6HQr.js";import"./VisuallyHidden-h3OxpH0T.js";import"./useControlledState-CgUQbm6f.js";import"./Label-CbRoQGmp.js";import"./Dialog-DdqkwI6r.js";import"./RSPContexts-ClKYWlVb.js";import"./OverlayArrow-BucVBZTx.js";import"./useResizeObserver-Bt5MB7DE.js";import"./Collection-C4vNG5Az.js";import"./index-pKIxTJCR.js";import"./Separator-CkZAe3ix.js";import"./SelectionManager-DdmeT842.js";import"./useEvent-DAH9VV2g.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-7i5dhWK0.js";import"./ListKeyboardDelegate-BlvDSIj7.js";import"./PressResponder-B-JzOOvD.js";import"./useLocalizedStringFormatter-CY6ZTepc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2Oo5AWv.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-S0-Uc0vp.js";import"./createLucideIcon-DiZz3DHh.js";import"./useLocalizedStringFormatter-CfxXtKTH.js";import"./Heading-BTRJR4jH.js";import"./info-CDHs4xnK.js";import"./Popover-ByRR-p8y.js";import"./check-DgsbmPB1.js";import"./useToggleState-3wJmWJfz.js";import"./TextFieldBase-lfrQuf4W.js";import"./Input-CLucHG0H.js";import"./useTextField-Dk4GdbuG.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Ew4-5_f-.js";import"./DragAndDrop-CCD17xaz.js";import"./inertValue-WuyrfxKE.js";import"./useListState-QrbJ2sBq.js";import"./TagGroup-Chf3nmnZ.js";import"./useHighlightSelectionDescription-Be9wc_Xe.js";import"./useUpdateEffect-C0swBseD.js";import"./useHasTabbableChild-BiCw9Jr2.js";import"./chevron-down-N_U-AvzE.js";import"./Virtualizer-BrMX7KhZ.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
