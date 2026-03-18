import{j as e}from"./iframe-TiTRU3BL.js";import{$ as c}from"./Form-B7tgjL8C.js";import{G as d}from"./Grid-ByR8eO4j.js";import{G as i}from"./GridItem-CZHAv1GJ.js";import{a as x,R as u}from"./Radio-Da78IW_e.js";import{C as I}from"./CheckboxGroup-RX1saDCZ.js";import{C as G}from"./Checkbox-7c0thlDP.js";import{T as t}from"./TextField-jlfb-fjM.js";import{S as l}from"./Select-DmkYYOWY.js";import{L as p}from"./ListBoxItem-B07ZXbFr.js";import{B as a}from"./Button-uSTshioy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C9MqlSp2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-IRKpcm5-.js";import"./useFocusRing-dtBjt7J0.js";import"./index-B_qfMS5p.js";import"./index-B3QYGaBR.js";import"./clsx-Ciqy0D92.js";import"./Group-qOPNup8P.js";import"./FieldError-Db_dX9Wa.js";import"./Text-BHbOdxoE.js";import"./Text-CNXxeonm.js";import"./Button-D1pF9L05.js";import"./Hidden-oj9BLOe9.js";import"./useLabels-CfZHg_n5.js";import"./useButton-P0duEZAc.js";import"./SelectionIndicator-BB0oS2TY.js";import"./useField-Dlg194Hm.js";import"./VisuallyHidden-BpqMk6oy.js";import"./useControlledState-L72g7_5f.js";import"./Label-B4kBtHZY.js";import"./Dialog-D_HeaERm.js";import"./RSPContexts-ByDZeKU9.js";import"./OverlayArrow-D38NPX59.js";import"./useResizeObserver-_n0TiEZH.js";import"./Collection-CS7C6DmN.js";import"./index-nhPrKmvq.js";import"./Separator-dwDOr2kY.js";import"./SelectionManager-CY4JiqN1.js";import"./useEvent-YyEIKRGW.js";import"./scrollIntoView-DVlMW1h6.js";import"./useDescription-C6zFetVQ.js";import"./ListKeyboardDelegate-C2tXzQP2.js";import"./PressResponder-CJQejyfg.js";import"./useLocalizedStringFormatter-BNlFtQ2R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3SZqYUGV.js";import"./getScrollParent-Lft_6uIw.js";import"./x-Bakj2uHV.js";import"./createLucideIcon-BH4SiISs.js";import"./useLocalizedStringFormatter-BuTIbiUS.js";import"./Heading-CKFwtyMM.js";import"./info-C5UQHz59.js";import"./Popover-BjUckbNv.js";import"./check-BJgeEJtf.js";import"./useToggleState-e3bRLyOO.js";import"./TextFieldBase-C3oJUxO_.js";import"./Input-y1zUZdB8.js";import"./useTextField-B2i3IhM8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BHLDOJYX.js";import"./DragAndDrop-BYRYbzeW.js";import"./inertValue-0z6hsZSf.js";import"./useListState-BxAEFPJl.js";import"./TagGroup-B9pFlBdu.js";import"./useHighlightSelectionDescription-BnmfTIgW.js";import"./useUpdateEffect-C2ViXhcm.js";import"./useHasTabbableChild-C6iKnjis.js";import"./chevron-down-DgWb8egt.js";import"./Virtualizer-CAwZMgo-.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
