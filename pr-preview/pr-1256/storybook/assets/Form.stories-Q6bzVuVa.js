import{j as e}from"./iframe-CdIQ5N7i.js";import{c}from"./Form-B0G4WvdU.js";import{G as d}from"./Grid-CL49roib.js";import{G as i}from"./GridItem-DeVrVcWL.js";import{a as x,R as u}from"./Radio-BT1mCxn7.js";import{C as I}from"./CheckboxGroup-kBsRGRCf.js";import{C as G}from"./Checkbox-DXLs4G_e.js";import{T as t}from"./TextField-CNaLLoT7.js";import{S as l}from"./Select-BU_RxGLu.js";import{L as p}from"./ListBoxItem-TQ621Hxl.js";import{B as a}from"./Button-kx69_fzD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CAL8UmMI.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./clsx-Ciqy0D92.js";import"./Group-GT3GuVWM.js";import"./FieldError-DJ-HR3RU.js";import"./Text-s2Qhe30V.js";import"./Text-uW2g-Rij.js";import"./Button-UiktFLbJ.js";import"./Hidden-BNc7AwrM.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./SelectionIndicator-C8xnssq6.js";import"./useField-FRI832V4.js";import"./VisuallyHidden-BhdIXlKy.js";import"./useControlledState-BRvuk5rm.js";import"./Label-C5yvvB9E.js";import"./Dialog-DvB2HcO3.js";import"./RSPContexts-CLmzGhES.js";import"./OverlayArrow-BzOb33Ml.js";import"./useResizeObserver-fQDQHxcX.js";import"./Collection-BNNDqxaK.js";import"./index-CAdlUQcW.js";import"./Separator-DISlP-zV.js";import"./SelectionManager-DUIeCRl1.js";import"./useEvent-CJQiJoWr.js";import"./scrollIntoView-DQzQ-CtO.js";import"./useDescription--y6wfX3r.js";import"./ListKeyboardDelegate-BRa5xE-n.js";import"./PressResponder-W6JnnhzP.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwnKHfBJ.js";import"./getScrollParent-B0hpSf3_.js";import"./ModalOverlay-D3doyH6r.js";import"./x-CLOMyykU.js";import"./createLucideIcon-D9zj-qmC.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Heading-CYqOGIzN.js";import"./info-BkSnkljK.js";import"./Popover-Bi_1XBV1.js";import"./check-BXs7CmDq.js";import"./useToggleState-B1x7r90V.js";import"./TextFieldBase-B1I6zSPO.js";import"./Input-CYu6oXCT.js";import"./useTextField-BVCH004n.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CznNwvhX.js";import"./DragAndDrop-CedDBIPt.js";import"./inertValue-jrKVrzGI.js";import"./useListState-BoIuzj7v.js";import"./TagGroup-CPNXvLER.js";import"./useHighlightSelectionDescription-BbdOTscv.js";import"./useUpdateEffect-BbexS5oB.js";import"./useHasTabbableChild-BGPfUsA6.js";import"./chevron-down-i6UgwUCK.js";import"./Virtualizer-CXrnqoO6.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
