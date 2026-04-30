import{j as e}from"./iframe-CYdOIShe.js";import{c}from"./Form-Bw9LTkRW.js";import{G as d}from"./Grid-Ce5XPHIH.js";import{G as i}from"./GridItem-Qj7KVNc3.js";import{a as x,R as u}from"./Radio-19JQBujx.js";import{C as I}from"./CheckboxGroup-Dxw_sMOJ.js";import{C as G}from"./Checkbox-CYj-vfdp.js";import{T as t}from"./TextField-hP2xv0uo.js";import{S as l}from"./Select-lUGRZjdk.js";import{L as p}from"./ListBoxItem-DBVQ4o-z.js";import{B as a}from"./Button-CBUriOkd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-luUELUDI.js";import"./utils-HKmh4Wcn.js";import"./clsx-B-dksMZM.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./clsx-Ciqy0D92.js";import"./Group-CTyjmJWp.js";import"./FieldError-DuFysaFf.js";import"./Text-JajiEAQE.js";import"./Text-BPz397x3.js";import"./Button-CFIgUPn3.js";import"./Hidden-CT5s6T9J.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./SelectionIndicator-CfkQq6-V.js";import"./useField-D4dGqq1b.js";import"./VisuallyHidden-DnXqJuQy.js";import"./useControlledState-DtqbYXAa.js";import"./Label-DiLJdHP1.js";import"./Dialog-khqDy2SS.js";import"./RSPContexts-C-0mxEQj.js";import"./OverlayArrow-Bv_uKHfg.js";import"./useResizeObserver-D9MPp3x0.js";import"./Collection-CPviGoO8.js";import"./index-BHTROJYZ.js";import"./Separator-CPeFi5Hl.js";import"./SelectionManager-CuQjp409.js";import"./useEvent-Dw5D7H6E.js";import"./scrollIntoView-DG71oHLe.js";import"./useDescription-B-kG1rWN.js";import"./ListKeyboardDelegate-B9pUPDfX.js";import"./PressResponder-Dov8etlp.js";import"./useLocalizedStringFormatter-5ECDI-gb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BydA_BhY.js";import"./getScrollParent-BfoeuBWC.js";import"./ModalOverlay-DHUAVCC3.js";import"./x-o-bpfQug.js";import"./createLucideIcon-cX0zgN2L.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./Heading-BZlZRKoS.js";import"./info-DYVapAuS.js";import"./Popover-DNW5Vz0Y.js";import"./check-CUXU-VH3.js";import"./useToggleState-BjwUm2At.js";import"./TextFieldBase-Kw4HK8Yi.js";import"./Input-BBo9y7oh.js";import"./useTextField-DPDg-aWU.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CGDFb_6i.js";import"./DragAndDrop-CZ2nQHm3.js";import"./inertValue-Cf8METBD.js";import"./useListState-XfWiwjWU.js";import"./TagGroup-FUxJif0Y.js";import"./useHighlightSelectionDescription-CAjRKVk6.js";import"./useUpdateEffect-ld2Yjo1i.js";import"./useHasTabbableChild-BVNyGEi1.js";import"./chevron-down-CFpcxiyR.js";import"./Virtualizer-zElZ80Q6.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
