import{j as e}from"./iframe-C1OFF234.js";import{$ as c}from"./Form-OhvG1ote.js";import{G as d}from"./Grid-KWY4MOHT.js";import{G as i}from"./GridItem-uFhNr7Na.js";import{T as t}from"./TextField-uHs0OoC4.js";import{S as l}from"./Select-DpT2c9SN.js";import{B as a}from"./Button-DnTBefjE.js";import{R as x,a as u}from"./Radio-Cmf7GFeH.js";import{C as I}from"./CheckboxGroup-SsxLTb6-.js";import{C as G}from"./Checkbox-CwNz1pqX.js";import{L as p}from"./ListBoxItem-BCp3UJKs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-x5dDW9rF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cris4O5F.js";import"./useFocusRing-JwpRizWK.js";import"./index-D4URSzcq.js";import"./index-eVP2pS4l.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BDyxOo7T.js";import"./TextField-DdS6IXPA.js";import"./FieldError-BmlSVkKV.js";import"./Text-BAGfifAI.js";import"./Text-DdQgr9hb.js";import"./RSPContexts-BR-G7MnE.js";import"./Group-DcqgBxeV.js";import"./Input-B9G4907d.js";import"./Hidden-BozQ0zHL.js";import"./Button-tVK2UY63.js";import"./useLabels-Cjzy89EL.js";import"./useButton-Dq-U0g3P.js";import"./useTextField-BOpH5wSt.js";import"./useControlledState-D7t5NlDI.js";import"./useField-CsO-x6FD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Df7JaHMf.js";import"./Dialog-cQm2u0OB.js";import"./OverlayArrow-BIetnyBd.js";import"./useResizeObserver-DlihvW6o.js";import"./Collection-BQBeQ6Sk.js";import"./index-BgTylcky.js";import"./Separator-BG4G-PvF.js";import"./SelectionManager-CHinLA4t.js";import"./useEvent-BTaNZmDL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BM7fVV0w.js";import"./useDescription-D1uoBPC6.js";import"./ListKeyboardDelegate-zd0Lvbor.js";import"./PressResponder-X6YXgKxN.js";import"./useLocalizedStringFormatter-Bzedv_wh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CMj5i9Rd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BoMhy8hX.js";import"./x-BFahTfcI.js";import"./createLucideIcon-CLCZDCft.js";import"./useLocalizedStringFormatter-BVNI7-AU.js";import"./Heading-SD5cG3Zu.js";import"./info-BOm460zE.js";import"./Popover-DzFlYVs9.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DbcopXBt.js";import"./DragAndDrop-DPiU3WEL.js";import"./inertValue-B-oDUn7A.js";import"./useListState-BZBGlzlr.js";import"./Tag-A6WmZEij.js";import"./useHighlightSelectionDescription-BM3c_YMS.js";import"./useUpdateEffect-CYi0l6sh.js";import"./useHasTabbableChild-CmWZ18W-.js";import"./chevron-down-DUPj4VQ8.js";import"./Button.module-Co5e5YHp.js";import"./check-Da8p5vVx.js";import"./useToggleState-B3CwcJIE.js";import"./Virtualizer-C5dtyZBy.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
