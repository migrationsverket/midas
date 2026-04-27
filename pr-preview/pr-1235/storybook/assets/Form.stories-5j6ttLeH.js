import{j as e}from"./iframe-Cen0ae1x.js";import{c}from"./Form-CjUsSzQO.js";import{G as d}from"./Grid-BW4J-nn9.js";import{G as i}from"./GridItem-DBaAk9v9.js";import{a as x,R as u}from"./Radio-CCGB8kfg.js";import{C as I}from"./CheckboxGroup-wkSyub9w.js";import{C as G}from"./Checkbox-esLs1tBb.js";import{T as t}from"./TextField-qujehlcO.js";import{S as l}from"./Select-Ci8oy8DR.js";import{L as p}from"./ListBoxItem-C1dh3I8m.js";import{B as a}from"./Button-CA3EkwoT.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DL4UMbrb.js";import"./utils-IBVWRADw.js";import"./clsx-B-dksMZM.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./clsx-Ciqy0D92.js";import"./Group-BkN2Ikmz.js";import"./FieldError-BmQ4jQxz.js";import"./Text-DIYKRKOx.js";import"./Text-CTsFsWIz.js";import"./Button-CH2bisSo.js";import"./Hidden-DeFJbGnS.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./SelectionIndicator-gVFOzTj8.js";import"./useField-D7rcpCWI.js";import"./VisuallyHidden-AN2tdixc.js";import"./useControlledState-JSkmdR3M.js";import"./Label-Bn0-olfI.js";import"./Dialog-CVGjXBrR.js";import"./RSPContexts-j8AP2XCE.js";import"./OverlayArrow-Cp2auDpZ.js";import"./useResizeObserver-CmnOszlQ.js";import"./Collection-DzYzow1u.js";import"./index-iFhYwZRt.js";import"./Separator-CSGoviiE.js";import"./SelectionManager-CN3G-fbw.js";import"./useEvent-MaH29R_X.js";import"./scrollIntoView-Dta2NR0L.js";import"./useDescription-Co4ko50b.js";import"./ListKeyboardDelegate-CR_c2DFA.js";import"./PressResponder-BDQ-7_LZ.js";import"./useLocalizedStringFormatter-AjdMYjpu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BX_o3H3w.js";import"./getScrollParent-N9kF6Mqp.js";import"./ModalOverlay-_TZLI4xz.js";import"./x-DckwiAmz.js";import"./createLucideIcon-obLWYbEm.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./Heading-B60h2Jja.js";import"./info-DzT2iTTy.js";import"./Popover-IQmjmTnE.js";import"./check-DdTkoQ9F.js";import"./useToggleState-L9nus6cm.js";import"./TextFieldBase-BDqiJr7J.js";import"./Input-o46YmxUL.js";import"./useTextField-1F9i-9HA.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CyUHgjB3.js";import"./DragAndDrop-B87es6X0.js";import"./inertValue-3TleVCvY.js";import"./useListState-6zomeu0K.js";import"./TagGroup-D1A1UZzQ.js";import"./useHighlightSelectionDescription-r4tyo3SD.js";import"./useUpdateEffect-C1FHLtjW.js";import"./useHasTabbableChild-gw3NtMDV.js";import"./chevron-down-YgQiv7mR.js";import"./Virtualizer-BvZH2X6O.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
