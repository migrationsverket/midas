import{j as e}from"./iframe-1f3rxXdd.js";import{$ as c}from"./Form-DM8VMoOo.js";import{G as d}from"./Grid-6nPYkkug.js";import{G as i}from"./GridItem-CdSNzECw.js";import{T as t}from"./TextField-DrbsZ3ir.js";import{S as l}from"./Select-CY9HjI4D.js";import{B as a}from"./Button-C8uwiZ4T.js";import{R as x,a as u}from"./Radio-DnudGJhg.js";import{C as I}from"./CheckboxGroup-BBsym4ub.js";import{C as G}from"./Checkbox-C3CBknD1.js";import{L as p}from"./ListBoxItem-pdAWj-Kv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DTlh9C3r.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DX1vEigH.js";import"./useFocusRing-DN9l4SO_.js";import"./index-DeUdjjir.js";import"./index-B6Uo-J4R.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dne0QovD.js";import"./TextField-DzjG2KRd.js";import"./FieldError-D6PqbjM6.js";import"./Text-Bh_25_l1.js";import"./Text-_zCkEVaW.js";import"./RSPContexts-Ddb_9nY5.js";import"./Group-GXGV-WBq.js";import"./Input-YL09h7ck.js";import"./Hidden-BXaTRR1s.js";import"./Button-_mxlpwte.js";import"./useLabels-DCQuJ-gm.js";import"./useButton-Dy6D2y1s.js";import"./useTextField-Bc1Ua2E5.js";import"./useControlledState-D9gyYFcQ.js";import"./useField-uMYBRc_O.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-GZhPP4ss.js";import"./Dialog-CRfoXNrK.js";import"./OverlayArrow-DtIa2RLz.js";import"./useResizeObserver-BOnRpl1D.js";import"./Collection-C5NcOb0A.js";import"./index-DODnfsB8.js";import"./Separator-DsQf98fE.js";import"./SelectionManager-BNh6yg8V.js";import"./useEvent-C_xz6dVr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bj2W8LE4.js";import"./useDescription-TRy5yL60.js";import"./ListKeyboardDelegate-C_l-Vvl3.js";import"./PressResponder-I-8lHwTo.js";import"./useLocalizedStringFormatter-BAZ5Qp5C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DVZ1cASE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMADwpeo.js";import"./x-J23rZ0Hf.js";import"./createLucideIcon-R1tXtWjx.js";import"./useLocalizedStringFormatter-Dkjvqcq6.js";import"./Heading-DqKKK-is.js";import"./info-B6B1e4QF.js";import"./Popover-C8leewlc.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CTBgRuQE.js";import"./DragAndDrop-DeI5kTFT.js";import"./inertValue-BKwrxEVm.js";import"./useListState-B-V0Au7z.js";import"./Tag-DyzItM4c.js";import"./useHighlightSelectionDescription-B81Cwjtq.js";import"./useUpdateEffect-CcOftAt1.js";import"./useHasTabbableChild-Djd_EMAb.js";import"./chevron-down-D7YbAKUc.js";import"./Button.module-Co5e5YHp.js";import"./check-DKg6aErY.js";import"./useToggleState-B2dRm8A8.js";import"./Virtualizer-XESHZzK1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
