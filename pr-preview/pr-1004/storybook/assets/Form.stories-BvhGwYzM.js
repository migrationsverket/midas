import{j as e}from"./iframe-CLDUBT6H.js";import{$ as c}from"./Form-CJ6D0tv0.js";import{G as d}from"./Grid-DpyZ1f-Y.js";import{G as i}from"./GridItem-C3HccZ2V.js";import{T as t}from"./TextField-DtgxcW8Z.js";import{S as l}from"./Select-DP-MkV-Z.js";import{B as a}from"./Button-B6mQ2Bq0.js";import{R as x,a as u}from"./Radio-2QE5jC4y.js";import{C as I}from"./CheckboxGroup-b67xDQIJ.js";import{C as G}from"./Checkbox-BST3ZJyl.js";import{L as p}from"./ListBoxItem-rQZ1psEl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B2mKk8ds.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BoSETYwH.js";import"./useFocusRing-Dyp-2U09.js";import"./index-CQqCc5kI.js";import"./index-CGFri1B6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B0rFc_QT.js";import"./TextField-ECvDikQq.js";import"./FieldError-Br1ud4c9.js";import"./Text-DVTsZrXV.js";import"./Text-t9fg8swz.js";import"./RSPContexts-CLyyRvTx.js";import"./Group-CWAHdn8X.js";import"./Input-BrZhzFUe.js";import"./Hidden-DLcE0MmQ.js";import"./Button-CMos7Slo.js";import"./useLabels-BZXL5PjD.js";import"./useButton-CWWImr4k.js";import"./useTextField-BbYFC34E.js";import"./useControlledState-BGBJm32t.js";import"./useField-DYxJUrLm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BvK0x4Pk.js";import"./Dialog-COHi94a3.js";import"./OverlayArrow-Dm-YbEON.js";import"./useResizeObserver-DnzBBkTW.js";import"./Collection-ANcjFW6d.js";import"./index-1H4z90Fg.js";import"./Separator-pBtVDwQr.js";import"./SelectionManager-Bl_i3Nud.js";import"./useEvent-DGS4bHRi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CW52jf_h.js";import"./useDescription-Do_MXPnI.js";import"./ListKeyboardDelegate-iBff9PwI.js";import"./PressResponder-DvwsM6yL.js";import"./useLocalizedStringFormatter-BmkSBfS1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DF7YW4H8.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6ZRi5s4.js";import"./x-BXo-ziXi.js";import"./createLucideIcon-5ka4vtZl.js";import"./useLocalizedStringFormatter-BaqAvC1h.js";import"./Heading-TRsTpXmi.js";import"./info-5aOyXpBP.js";import"./Popover-DGF2Rnvu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C7Uyofmb.js";import"./DragAndDrop-CloFJJVn.js";import"./inertValue-Dh31E1sA.js";import"./useListState-CzKmJP29.js";import"./Tag-CSRGxTqE.js";import"./useHighlightSelectionDescription-CkFYRFMS.js";import"./useUpdateEffect-DiKPL9as.js";import"./useHasTabbableChild-DddS_Uc9.js";import"./chevron-down-BWBer-N1.js";import"./Button.module-Co5e5YHp.js";import"./check-Bi2o20tP.js";import"./useToggleState-Cpc3HvLu.js";import"./Virtualizer-BtnkrDze.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
