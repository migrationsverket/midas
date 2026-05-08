import{j as e}from"./iframe-Cq1efVtu.js";import{c}from"./Form-Q13wlzI6.js";import{G as d}from"./Grid-DCgp7LIn.js";import{G as i}from"./GridItem-B4GlPDYu.js";import{a as x,R as u}from"./Radio-OoFcoplF.js";import{C as I}from"./CheckboxGroup-DlgFY-uK.js";import{C as G}from"./Checkbox-BXRkMEg0.js";import{T as t}from"./TextField-5afKEeYD.js";import{S as l}from"./Select-C43PgkeL.js";import{L as p}from"./ListBoxItem-ewqZ20eP.js";import{B as a}from"./Button-CTOoH2N3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-TSe7POO2.js";import"./utils-CDUIlyKR.js";import"./clsx-B-dksMZM.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./clsx-Ciqy0D92.js";import"./Group-C4PVmIVz.js";import"./FieldError-C6eAPC3q.js";import"./Text-DK-NnzUH.js";import"./Text-RuRZ3ncY.js";import"./Button-DksBmTbZ.js";import"./Hidden-DNnAB0GJ.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./SelectionIndicator-CgZV3gGJ.js";import"./useField-IIOsVOPa.js";import"./VisuallyHidden-DbkwGiLN.js";import"./useControlledState-C2EcW_bk.js";import"./Label-CgTcfasu.js";import"./Dialog-BkT0iv3q.js";import"./RSPContexts-Dkmb-asV.js";import"./OverlayArrow-mSEVmWTu.js";import"./useResizeObserver-D40imYud.js";import"./Collection-BxhYCovK.js";import"./index-Drb_jYn1.js";import"./Separator-DC9ooKbR.js";import"./SelectionManager-Cd7Mn8EA.js";import"./useEvent-Bq3pP39a.js";import"./scrollIntoView-CUwLIsqS.js";import"./useDescription-xyqlmyLv.js";import"./ListKeyboardDelegate-CD1hJbSr.js";import"./PressResponder-DvJsExzN.js";import"./useLocalizedStringFormatter-UDvCuBP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CX8Z1SzW.js";import"./getScrollParent-5COwKf8k.js";import"./ModalOverlay-NUeNkcQD.js";import"./x--VzijxeQ.js";import"./createLucideIcon-CUu-1dyR.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./Heading-BXtAiUcs.js";import"./info-Cqo6jPBc.js";import"./Popover-C_25Ncvt.js";import"./check-DDYMmT_Z.js";import"./useToggleState--OPvF_q7.js";import"./TextFieldBase-8VZsB5KK.js";import"./Input-HFnoYBJM.js";import"./useTextField-D1hoIgxt.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B4o3VlMB.js";import"./DragAndDrop-Hs1gszG0.js";import"./inertValue-DwfnOWqR.js";import"./useListState-Cv74sB7Z.js";import"./TagGroup-DCxH27uq.js";import"./useHighlightSelectionDescription-BBpUvlaM.js";import"./useUpdateEffect-DVeAqXtk.js";import"./useHasTabbableChild-BaxkR2Gf.js";import"./chevron-down-7Hoc5V29.js";import"./Virtualizer-jCHand2i.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
