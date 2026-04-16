import{j as e}from"./iframe-BsjwZNBI.js";import{c}from"./Form-BPWLMBhz.js";import{G as d}from"./Grid-DEtYGTLp.js";import{G as i}from"./GridItem-BpxWMUSN.js";import{a as x,R as u}from"./Radio-DMat0Fja.js";import{C as I}from"./CheckboxGroup-DDAre-Tb.js";import{C as G}from"./Checkbox-BaOkEfEo.js";import{T as t}from"./TextField-Bc8V_NKj.js";import{S as l}from"./Select-BOaa-1tA.js";import{L as p}from"./ListBoxItem-DG-_wMVS.js";import{B as a}from"./Button--2JTIhzL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C6pIr3Cw.js";import"./utils-DYyBIiF3.js";import"./clsx-B-dksMZM.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./clsx-Ciqy0D92.js";import"./Group-CaJ55WRK.js";import"./FieldError-D8jlKqgQ.js";import"./Text-CAl4ECWA.js";import"./Text-lI4j22eJ.js";import"./Button-RMvP7Zi7.js";import"./Hidden-B7nyiEix.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./SelectionIndicator-dCH3KFUc.js";import"./useField-DyZ12IOD.js";import"./VisuallyHidden-BLVEBQnn.js";import"./useControlledState-DSo337QI.js";import"./Label-CHsERhGd.js";import"./Dialog-n6NgD9rD.js";import"./RSPContexts-DsjC0Jzf.js";import"./OverlayArrow-CqCBe6cd.js";import"./useResizeObserver-BOr7Ttpr.js";import"./Collection-CgV2ccPo.js";import"./index-BsRC0pIN.js";import"./Separator-Dc7-7pSt.js";import"./SelectionManager-Cheph0Dh.js";import"./useEvent-Ce5NelAS.js";import"./scrollIntoView-Dj0SH0aW.js";import"./useDescription-BBYDL9dC.js";import"./ListKeyboardDelegate-C8IRF0A7.js";import"./PressResponder-CMvnrM33.js";import"./useLocalizedStringFormatter-uzycqsy8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-xaEmAiB_.js";import"./getScrollParent-Ciimyvfo.js";import"./ModalOverlay-D4kTi5LZ.js";import"./x-DNQ7ZgzB.js";import"./createLucideIcon-wuciem56.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./Heading-CF6sSghd.js";import"./info-CGJdKM5O.js";import"./Popover-GUkqRCLM.js";import"./check-DwQiMxk8.js";import"./useToggleState-CkW4Zbxt.js";import"./TextFieldBase-a0bT0DCr.js";import"./Input-LN6ra5tV.js";import"./useTextField-BqNbAQx5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-jZtKbium.js";import"./DragAndDrop-B2UrcYEC.js";import"./inertValue-DcDz5tTx.js";import"./useListState-BcibNszW.js";import"./TagGroup-Cxa2sEmy.js";import"./useHighlightSelectionDescription-DQdbX4Sp.js";import"./useUpdateEffect-cquah7Gu.js";import"./useHasTabbableChild-CNl5uh8d.js";import"./chevron-down-DsAUibYz.js";import"./Virtualizer-DKM9n6Xf.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
