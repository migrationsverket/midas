import{j as e}from"./iframe-uFwHQTNd.js";import{$ as c}from"./Form-CS9_f0fo.js";import{G as d}from"./Grid-DARXZ7uM.js";import{G as i}from"./GridItem-Cb34lQ60.js";import{a as x,R as u}from"./Radio-B4X1M0nf.js";import{C as I}from"./CheckboxGroup-DNa1cqq_.js";import{C as G}from"./Checkbox-BtuFiQ0l.js";import{T as t}from"./TextField-6jwEhx2_.js";import{S as l}from"./Select-BsTB5tME.js";import{L as p}from"./ListBoxItem-CK9ikavz.js";import{B as a}from"./Button-LM3ov4QZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cet0gmdV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DQ0mQ44x.js";import"./useFocusRing-DWJqR67C.js";import"./index-Cx3Wd4xN.js";import"./index-BfuYg2Hk.js";import"./clsx-Ciqy0D92.js";import"./Group-DOJZouKY.js";import"./FieldError-Dm-69Wx0.js";import"./Text-DdRPQvtu.js";import"./Text-BPL1bQ16.js";import"./Button-DCnsWAw_.js";import"./Hidden-DBwebcBs.js";import"./useLabels-CkeV1IcK.js";import"./useButton-DGskpFYY.js";import"./SelectionIndicator-diRVmffe.js";import"./useField-BnIohbzV.js";import"./VisuallyHidden-D1ozFAVq.js";import"./useControlledState-BAmouKKq.js";import"./Label-D4uNf9GW.js";import"./Dialog-B4vFUNvd.js";import"./RSPContexts-C2ImaV6y.js";import"./OverlayArrow--arwcwp5.js";import"./useResizeObserver-CePGIfb-.js";import"./Collection-Dd4cc-MY.js";import"./index-C3ZTFjKu.js";import"./Separator-BVFl6LM0.js";import"./SelectionManager-BYMrJ6yE.js";import"./useEvent-CsuJfCqG.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BQIjqc-M.js";import"./ListKeyboardDelegate-DwVgXDPg.js";import"./PressResponder-Bk5a9W-E.js";import"./useLocalizedStringFormatter-CkgKWy3S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bw26c_wD.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-F0i77h6j.js";import"./createLucideIcon-Bh2gVQle.js";import"./useLocalizedStringFormatter-DzDR0k3O.js";import"./Heading-DYe25ALU.js";import"./info-CpMmS7sP.js";import"./Popover-CYq8EiP_.js";import"./check-DrZWBqnc.js";import"./useToggleState-HZnwEgT1.js";import"./TextFieldBase--zd1mRIG.js";import"./TextField-45Lw2jAv.js";import"./Input--we1x6G1.js";import"./useTextField-D4QrtLz3.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kIzRS79j.js";import"./DragAndDrop-BqRzzvQi.js";import"./inertValue-C4ea7utY.js";import"./useListState-BhqrVjtN.js";import"./Tag-BiSpgBVY.js";import"./useHighlightSelectionDescription-Ch_7cUgp.js";import"./useUpdateEffect-DdaYlkO5.js";import"./useHasTabbableChild-Tp7_taW0.js";import"./chevron-down-BCHUaY0D.js";import"./Virtualizer-RI0pqMrL.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
