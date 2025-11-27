import{j as e}from"./iframe-BZebrEas.js";import{$ as c}from"./Form-Bxqwh6Ta.js";import{G as d}from"./Grid-YcLZihJi.js";import{G as i}from"./GridItem-C090A5Dx.js";import{T as t}from"./TextField-tTF9_4P8.js";import{S as l}from"./Select-BBmdL8nl.js";import{B as a}from"./Button-rfuzx7LV.js";import{R as x,a as u}from"./Radio-B_qFhG9K.js";import{C as I}from"./CheckboxGroup-CLsHdl1D.js";import{C as G}from"./Checkbox-CLPNX6L9.js";import{L as p}from"./ListBoxItem-Vv-46HlR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cv9uZo9K.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-0LMZRV.js";import"./useFocusRing-BUV9YV_S.js";import"./index-CMbZ6i8n.js";import"./index-CRcYGfdJ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CsYpsrmm.js";import"./TextField-BtzPKpH3.js";import"./FieldError-S8zlZ8Qt.js";import"./Text-BLwI2igp.js";import"./Text-PUTIA7Gc.js";import"./RSPContexts-CR_BySB8.js";import"./Group-TTBDS3Pa.js";import"./Input-D_Q5vOM0.js";import"./Hidden-Ca7SziLN.js";import"./Button-BNKoZpIx.js";import"./useLabels-Bg0bSlQa.js";import"./useButton-DldPu05S.js";import"./useTextField-wMbn2YZU.js";import"./useControlledState-CdL0Vn8u.js";import"./useField-58_UFhRk.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cw28LU9-.js";import"./Dialog-7fOpNb5L.js";import"./OverlayArrow-Bb6Wz-gE.js";import"./useResizeObserver-D0l1ejLy.js";import"./Collection-lJ8s2yN3.js";import"./index-C4fSNA5g.js";import"./Separator-B4VXBxEh.js";import"./SelectionManager-gOKr_MBh.js";import"./useEvent-BvUmgLEr.js";import"./scrollIntoView-I6Vyn3AQ.js";import"./SelectionIndicator-TfXKW_yK.js";import"./useDescription-9b_SNdIF.js";import"./ListKeyboardDelegate-Dvn7sCAG.js";import"./PressResponder-C9_klJfI.js";import"./useLocalizedStringFormatter-C6EoZcm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DgDI8Mdk.js";import"./VisuallyHidden-DdwHvdeJ.js";import"./x-CwCP3jA6.js";import"./createLucideIcon-BzZU7Nc4.js";import"./useLocalizedStringFormatter-Cvv0O9w3.js";import"./Heading-Ci0MqNsG.js";import"./info-B1DiDeFz.js";import"./Popover-CiN36iaZ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BCUnEvID.js";import"./DragAndDrop-DReYNtkZ.js";import"./inertValue-C7WSFqX3.js";import"./useListState-BP-jQay9.js";import"./Tag-Dfp14xQK.js";import"./useHighlightSelectionDescription-DKWhh9f9.js";import"./useUpdateEffect-DGbpo7Pc.js";import"./useHasTabbableChild-gsnhR1P4.js";import"./chevron-down-Dk4bOiz2.js";import"./Button.module-CtQ1deO8.js";import"./check-CBw0D6g1.js";import"./useToggleState-CPMlpIsC.js";import"./Virtualizer-CSZUkJ2e.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
