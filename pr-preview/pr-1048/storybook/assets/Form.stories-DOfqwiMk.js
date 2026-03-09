import{j as e}from"./iframe-izS6BN6y.js";import{$ as c}from"./Form-pZC3lHBv.js";import{G as d}from"./Grid-CXr-uFjR.js";import{G as i}from"./GridItem-BihMXD2j.js";import{a as x,R as u}from"./Radio-xRrBLqGB.js";import{C as I}from"./CheckboxGroup-qbYKLxYS.js";import{C as G}from"./Checkbox-C16FtuC4.js";import{T as t}from"./TextField-CkVNp5gq.js";import{S as l}from"./Select-BoLEPUGY.js";import{L as p}from"./ListBoxItem-D38P--K0.js";import{B as a}from"./Button-BJYTdbg5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bas1Ofad.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DUyqthVL.js";import"./useFocusRing-B6uM1GPB.js";import"./index-Clqx6h6T.js";import"./index-2wZtggJW.js";import"./clsx-Ciqy0D92.js";import"./Group-WgtgzSGF.js";import"./FieldError-CJZEulkW.js";import"./Text-B6_RlQWu.js";import"./Text-CJepktCx.js";import"./Button-DjOmw-p7.js";import"./Hidden-DxoOFtw1.js";import"./useLabels-CepOd2Z4.js";import"./useButton-nZ9At_c5.js";import"./SelectionIndicator-DQamjTsW.js";import"./useField-BtyYT5I6.js";import"./VisuallyHidden-C7bQWUTs.js";import"./useControlledState-ComdA_qm.js";import"./Label-DoKPYWfy.js";import"./Dialog-BaMaQg7g.js";import"./RSPContexts-CPQUc-c6.js";import"./OverlayArrow-BtdwFnbw.js";import"./useResizeObserver-BXwipBXo.js";import"./Collection-BZZPf5u-.js";import"./index-D0u9tUkp.js";import"./Separator-CU3gB0Xv.js";import"./SelectionManager-BuiluRNF.js";import"./useEvent-CrtcwO7U.js";import"./scrollIntoView-geoDnyCX.js";import"./useDescription-9nup2ndP.js";import"./ListKeyboardDelegate-MJ3MficC.js";import"./PressResponder-B1IaQiT6.js";import"./useLocalizedStringFormatter-DFQ1l-q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lkKclEGH.js";import"./getScrollParent-Dt0r2HDa.js";import"./x-CSJ_lR3e.js";import"./createLucideIcon-lSEbjSVl.js";import"./useLocalizedStringFormatter-CiJzgYQ0.js";import"./Heading-CURgxsXa.js";import"./info-BMOr6wXB.js";import"./Popover-Bblv0dIQ.js";import"./check-DZU9CKV0.js";import"./useToggleState-DcBtXzgJ.js";import"./TextFieldBase-Cg8CtLSY.js";import"./Input-CkRAApqO.js";import"./useTextField-Bye0e0Vn.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DoOffJ5p.js";import"./DragAndDrop-DgOGgeO0.js";import"./inertValue-BaOhPyBj.js";import"./useListState-Dk52yJu4.js";import"./TagGroup-CkZQ8E52.js";import"./useHighlightSelectionDescription-7BNXzDmP.js";import"./useUpdateEffect-CJvcED0P.js";import"./useHasTabbableChild-DCYMtO4z.js";import"./chevron-down-DTRCAwtA.js";import"./Virtualizer-BR0PZ9D6.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
