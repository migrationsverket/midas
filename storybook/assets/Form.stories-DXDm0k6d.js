import{j as e}from"./iframe-BFuflVuT.js";import{c}from"./Form-_O7owz9U.js";import{G as d}from"./Grid-CK8U9QbZ.js";import{G as i}from"./GridItem-zGe-F52V.js";import{a as x,R as u}from"./Radio-BB9puK1-.js";import{C as I}from"./CheckboxGroup-CLLZMZMm.js";import{C as G}from"./Checkbox-Bwt0JxhH.js";import{T as t}from"./TextField-BPOvHPjh.js";import{S as l}from"./Select-l-3QtTTt.js";import{L as p}from"./ListBoxItem-CgA4xks3.js";import{B as a}from"./Button-B_e2-Iv-.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BGj7TLCb.js";import"./utils-CVETsxUB.js";import"./clsx-B-dksMZM.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./clsx-Ciqy0D92.js";import"./Group-DxDnkT_x.js";import"./FieldError-B21E2xEp.js";import"./Text-50232H9V.js";import"./Text-Cd7qZGor.js";import"./Button-Bvi4kTfB.js";import"./Hidden-CWAGeXUM.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./SelectionIndicator-C0jG9iBd.js";import"./useField-CmfWuk6-.js";import"./VisuallyHidden-ChouFcZQ.js";import"./useControlledState-D_V-QnC2.js";import"./Label-Btf5roma.js";import"./Dialog-HGbVhZh3.js";import"./RSPContexts-BKJ_hWyQ.js";import"./OverlayArrow-BO59qnCj.js";import"./useResizeObserver-D2vfYUms.js";import"./Collection-DwqB045i.js";import"./index-Cx84pKcq.js";import"./Separator-CJ6jYql_.js";import"./SelectionManager-CDDOpm3X.js";import"./useEvent-qDpnqejC.js";import"./scrollIntoView-DyJWvoJg.js";import"./useDescription-CL478hBZ.js";import"./ListKeyboardDelegate-DG5oTXvP.js";import"./PressResponder-BUvOU1QA.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDwZiepJ.js";import"./getScrollParent-CJmvDIbp.js";import"./ModalOverlay-Cs4VCEIj.js";import"./x-Dlq0AP5X.js";import"./createLucideIcon-CY2uueIZ.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Heading-DSRT_WaZ.js";import"./info-DR2nXUtE.js";import"./Popover-BQXWP18I.js";import"./check-B3FQB7GR.js";import"./useToggleState-CL-w4iAH.js";import"./TextFieldBase-DW3hLT0c.js";import"./Input-1iFcmsQM.js";import"./useTextField-BOeOV3eO.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BZWcrxLZ.js";import"./DragAndDrop-BDuekLmS.js";import"./inertValue-CexJ2ePR.js";import"./useListState-B3605o7k.js";import"./TagGroup-DFcDCSMg.js";import"./useHighlightSelectionDescription-Dif0zICD.js";import"./useUpdateEffect-CCuHvzh2.js";import"./useHasTabbableChild-DNPSG-bl.js";import"./chevron-down-DOd-ZR7a.js";import"./Virtualizer-YmxQESGg.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
