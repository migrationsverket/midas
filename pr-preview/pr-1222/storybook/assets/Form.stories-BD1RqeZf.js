import{j as e}from"./iframe-Co8ouiR0.js";import{c}from"./Form-Ckl-USsE.js";import{G as d}from"./Grid-gpFaOaMQ.js";import{G as i}from"./GridItem-2hsvmYfO.js";import{a as x,R as u}from"./Radio-D2Sc8WQz.js";import{C as I}from"./CheckboxGroup-BklrAAei.js";import{C as G}from"./Checkbox-BG0A2kn9.js";import{T as t}from"./TextField-CiWIaBPe.js";import{S as l}from"./Select-Cxjln2WS.js";import{L as p}from"./ListBoxItem-BKya8iPq.js";import{B as a}from"./Button-BOgReN_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dxdgl-gF.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./clsx-Ciqy0D92.js";import"./Group-CFHeoX-M.js";import"./FieldError-CEGfntdp.js";import"./Text-DtfYRBf1.js";import"./Text-B5_C6N3n.js";import"./Button-BP9TK4Xh.js";import"./Hidden-TJ2PhhZw.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./SelectionIndicator-DWiIapfM.js";import"./useField-CC0WBTcL.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./useControlledState-CaplsX9m.js";import"./Label-hXq40l1q.js";import"./Dialog-CvlWZS6m.js";import"./RSPContexts-DtYDmIKY.js";import"./OverlayArrow-C6d9GNbe.js";import"./useResizeObserver-B51hn-QD.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./Separator-BapWEfbs.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./scrollIntoView-DvPgTXx8.js";import"./useDescription-HAOJ4Hrg.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./PressResponder-D7LEbecv.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CnViS2qk.js";import"./getScrollParent-BedhNeW7.js";import"./ModalOverlay-CCKnw6s9.js";import"./x-BzzbKOkA.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Heading-BCJk9rok.js";import"./info-SKV308y7.js";import"./Popover-0v0Nff7R.js";import"./check-DdO9ttZ6.js";import"./useToggleState-ClTs80al.js";import"./TextFieldBase-PwcpbfUZ.js";import"./Input-aufJAFK1.js";import"./useTextField-vKxQkpA7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CuJ-w1pC.js";import"./DragAndDrop-DhYYSs9w.js";import"./inertValue-DxfYvFWQ.js";import"./useListState-CrbE2faT.js";import"./TagGroup-D8SyOcz7.js";import"./useHighlightSelectionDescription-CcUajBdZ.js";import"./useUpdateEffect-9tSZ3x0q.js";import"./useHasTabbableChild-Dz52NrWh.js";import"./chevron-down-oThO___v.js";import"./Virtualizer-oTE4aW9b.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
