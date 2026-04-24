import{j as e}from"./iframe-DOHhMkQY.js";import{c}from"./Form-Dq5C2lBM.js";import{G as d}from"./Grid-B2JxZBkv.js";import{G as i}from"./GridItem-C3Os3q3e.js";import{a as x,R as u}from"./Radio-Dd_rzhgs.js";import{C as I}from"./CheckboxGroup-CxQmPL60.js";import{C as G}from"./Checkbox-DlSodsjk.js";import{T as t}from"./TextField-BcxAqt1W.js";import{S as l}from"./Select-p911UMbB.js";import{L as p}from"./ListBoxItem-BYbjZyiR.js";import{B as a}from"./Button-oYxwaeFk.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-wtRS1Mc0.js";import"./utils-NiE-K3B6.js";import"./clsx-B-dksMZM.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./clsx-Ciqy0D92.js";import"./Group-Dmwg-2rd.js";import"./FieldError-BflqQ1hj.js";import"./Text-DSHHPLHE.js";import"./Text-C8g4NeVM.js";import"./Button-BgxX3mlh.js";import"./Hidden-CBYtsSM7.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./SelectionIndicator-DUS-gEyU.js";import"./useField-CDafB6bD.js";import"./VisuallyHidden-DQY1cYBw.js";import"./useControlledState-DiXqzo5g.js";import"./Label-Ig5xBitx.js";import"./Dialog-BhNv-yid.js";import"./RSPContexts-Cdm3yX79.js";import"./OverlayArrow-D-YsTEho.js";import"./useResizeObserver-BPaPazro.js";import"./Collection-C3UaWGRU.js";import"./index-G_V6xOjf.js";import"./Separator-BsjHvh90.js";import"./SelectionManager-DQ5FBa1D.js";import"./useEvent-DtrFGaiZ.js";import"./scrollIntoView-DebGkkw1.js";import"./useDescription-DUO7dbjU.js";import"./ListKeyboardDelegate-BwKlEZYr.js";import"./PressResponder-U4tHhDgS.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRyBXNLF.js";import"./getScrollParent-wRtd1GN9.js";import"./ModalOverlay-o9SLMU5y.js";import"./x-CkxwwECO.js";import"./createLucideIcon-B4Q-AngK.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Heading-IvdKpjLL.js";import"./info-CZfIXx9S.js";import"./Popover-BS7pzUqq.js";import"./check-CgAzYqCS.js";import"./useToggleState-BNu4gou2.js";import"./TextFieldBase-CBfSLyX5.js";import"./Input-DO2yHUEo.js";import"./useTextField-CbXqGvkj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CZb2w7W5.js";import"./DragAndDrop-L3hcuFsH.js";import"./inertValue-Bck5Xh_1.js";import"./useListState-CGDo66Ho.js";import"./TagGroup-CqxmZrEK.js";import"./useHighlightSelectionDescription-BowjV8fQ.js";import"./useUpdateEffect-B4iM7wiK.js";import"./useHasTabbableChild-rx8lhF0P.js";import"./chevron-down-zmncF76i.js";import"./Virtualizer-YPr3uOm4.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
