import{j as e}from"./iframe-Dt8qGcj0.js";import{$ as c}from"./Form-CydZd3vQ.js";import{G as d}from"./Grid-D411Ym2V.js";import{G as i}from"./GridItem-CmOWyKj9.js";import{T as t}from"./TextField-B59XGaYy.js";import{S as l}from"./Select-DcpTzMNT.js";import{B as a}from"./Button-CoCyWkmo.js";import{R as x,a as u}from"./Radio-DaOF3eS4.js";import{C as I}from"./CheckboxGroup-BI-XLtvJ.js";import{C as G}from"./Checkbox-DKQ8t7Xw.js";import{L as p}from"./ListBoxItem-CJBNund3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzGpUwDk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-PwxkFn_k.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-4E5DiyY7.js";import"./TextField-BEE1ZMlJ.js";import"./FieldError-Boq0AlWn.js";import"./Text-BFMlzHdv.js";import"./Text-DXvquVL7.js";import"./RSPContexts-B8qtBHPt.js";import"./Group-CnC_2ZN7.js";import"./Input-BAIFtMJ2.js";import"./Hidden-BXZBrSDT.js";import"./Button-CjJiJTes.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./useTextField-DaeeG-_s.js";import"./useControlledState-BVoQcIBV.js";import"./useField-B0YzA3FQ.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DeRdUZrY.js";import"./Dialog-CNOJc3H-.js";import"./OverlayArrow-DBW45wnx.js";import"./useResizeObserver-BklRVhQH.js";import"./Collection-Mc1jGEir.js";import"./index-2HYxLetr.js";import"./Separator-DQl5Teqn.js";import"./SelectionManager-DycKXJ5f.js";import"./useEvent-EDEmV_un.js";import"./scrollIntoView-DopW3zf_.js";import"./SelectionIndicator-tL3uILI3.js";import"./useDescription-lf21MVH0.js";import"./ListKeyboardDelegate-C_4XVNH0.js";import"./PressResponder-CKYytuCL.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DMG60YH-.js";import"./VisuallyHidden-DqAUfebe.js";import"./x-BKRVh5LC.js";import"./createLucideIcon-CzMrI8-b.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";import"./Heading-DRviNsfq.js";import"./info-iHyK2GFN.js";import"./Popover-I2mB7qFL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CMUWLu0u.js";import"./DragAndDrop-Cs9wBq97.js";import"./inertValue-BsoSsQ1A.js";import"./useListState-txqh9co4.js";import"./Tag-DJfsJtrh.js";import"./useHighlightSelectionDescription-DnsaM5J9.js";import"./useUpdateEffect-pLBn1DUj.js";import"./useHasTabbableChild-5N8nVGLM.js";import"./chevron-down-DePoRZN2.js";import"./Button.module-CtQ1deO8.js";import"./check-CKiOLKIE.js";import"./useToggleState-Cwh2PRf3.js";import"./Virtualizer-Bt5nHE1R.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
