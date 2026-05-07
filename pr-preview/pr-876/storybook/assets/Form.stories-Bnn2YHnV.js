import{j as e}from"./iframe-OzXVe_TX.js";import{c}from"./Form-9T3ORTNA.js";import{G as d}from"./Grid-quOqbkqg.js";import{G as i}from"./GridItem-CJ4E89ai.js";import{a as x,R as u}from"./Radio-Bzb0al9r.js";import{C as I}from"./CheckboxGroup-BWnJoMet.js";import{C as G}from"./Checkbox-BtP5QYYV.js";import{T as t}from"./TextField-BgM_Vrt1.js";import{S as l}from"./Select-DdjkvqhK.js";import{L as p}from"./ListBoxItem-BjzHkKwG.js";import{B as a}from"./Button-BPALFDJW.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DizgMThA.js";import"./utils-tCr9uINw.js";import"./clsx-B-dksMZM.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./clsx-Ciqy0D92.js";import"./Group-iCUipsL9.js";import"./FieldError-homDiWH4.js";import"./Text-DQmoUTPX.js";import"./Text-C8tynj-R.js";import"./Button-CQhvXyK9.js";import"./Hidden-B1yqLm5L.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./SelectionIndicator-B6nqEXJJ.js";import"./useField-DcJnjYwN.js";import"./VisuallyHidden-Bi7DvSRw.js";import"./useControlledState-CLatC1WA.js";import"./Label-DKR0q6rL.js";import"./Dialog-DJg2LapA.js";import"./RSPContexts-DzC-BhmG.js";import"./OverlayArrow-BdoGvgat.js";import"./useResizeObserver-D5tRWBq5.js";import"./Collection-Clk-CiQ7.js";import"./index-DarIc387.js";import"./Separator-B-x_JRMK.js";import"./SelectionManager-SS5akqNZ.js";import"./useEvent-Ch2KziZH.js";import"./scrollIntoView-B2EduiaM.js";import"./useDescription-w2FiPpGY.js";import"./ListKeyboardDelegate-77l68lVC.js";import"./PressResponder-DDFKCcfj.js";import"./useLocalizedStringFormatter-CQl_xHp6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByUkEsGI.js";import"./getScrollParent-MM6xXv8T.js";import"./ModalOverlay-BZJv-dlU.js";import"./x-BQ6XFr0a.js";import"./createLucideIcon-COmw-XaN.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./Heading-CnXfeumr.js";import"./info-DXapmhn-.js";import"./Popover-QbhEXv06.js";import"./check-D9LxFL35.js";import"./useToggleState-eq5Mgbig.js";import"./TextFieldBase-DqLULINZ.js";import"./Input-_dhISMKx.js";import"./useTextField-CqobKicN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CZJjbelP.js";import"./DragAndDrop-BNZ62tp_.js";import"./inertValue-Ba3Eiy5K.js";import"./useListState-C2MiSOJF.js";import"./TagGroup-8_uCgYNk.js";import"./useHighlightSelectionDescription-Bk7kKg7J.js";import"./useUpdateEffect-CuaxLaOM.js";import"./useHasTabbableChild-B1qhYE8-.js";import"./chevron-down-BV2OtRIr.js";import"./Virtualizer-CZhPqVcT.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
