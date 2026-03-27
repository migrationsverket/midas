import{j as e}from"./iframe-BbWt9Hzs.js";import{c}from"./Form-D6MDpADX.js";import{G as d}from"./Grid-br547AGU.js";import{G as i}from"./GridItem-NyESvf8j.js";import{a as x,R as u}from"./Radio-pJNMIZEY.js";import{C as I}from"./CheckboxGroup-DXGbmWnk.js";import{C as G}from"./Checkbox-CZiIAM3F.js";import{T as t}from"./TextField-CUSFvMHz.js";import{S as l}from"./Select-BImL_gr1.js";import{L as p}from"./ListBoxItem-D5B_5KRr.js";import{B as a}from"./Button-C0W8ghEp.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B9bvRRmX.js";import"./utils-KZAH4xlx.js";import"./clsx-B-dksMZM.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./clsx-Ciqy0D92.js";import"./Group-D86u_bqU.js";import"./FieldError-BzVhs6Ln.js";import"./Text-DSe1JSn0.js";import"./Text-DLXHrpA7.js";import"./Button-EJIqjvoq.js";import"./Hidden-BJHG9IZy.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./SelectionIndicator-CvTQi0Y7.js";import"./useField-Cv-osmis.js";import"./VisuallyHidden-zJEwCiu7.js";import"./useControlledState-DkbXJDJp.js";import"./Label-B6p5xA93.js";import"./Dialog-qoK3N-47.js";import"./RSPContexts-DKdTaTdn.js";import"./OverlayArrow-DcIVYDg9.js";import"./useResizeObserver-JKJl_Uvw.js";import"./Collection-C7TRCN5d.js";import"./index-Q9j86bkX.js";import"./Separator-CFIcuUKM.js";import"./SelectionManager-DCnzOW-V.js";import"./useEvent-ngzT0EBz.js";import"./scrollIntoView-CPHUDPPP.js";import"./useDescription-B5vJv64Z.js";import"./ListKeyboardDelegate-4yWuaQa1.js";import"./PressResponder-8RdqCcbY.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmyT2C_U.js";import"./getScrollParent-D7jC5O_o.js";import"./x-B6r1o7zQ.js";import"./createLucideIcon-BJCyfpuO.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Heading-BkvoezUL.js";import"./info-CCoAnChM.js";import"./Popover-BjQFNEL9.js";import"./check-CaqSTZW2.js";import"./useToggleState-B7UuUpX8.js";import"./TextFieldBase-BMqXW1L9.js";import"./Input-Chi9cHrw.js";import"./useTextField-Cphjw6_m.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-R9Y2-G4I.js";import"./DragAndDrop-HT0qmtlA.js";import"./inertValue-BU5n8TYl.js";import"./useListState-CSgQSTbU.js";import"./TagGroup-DTHzvgch.js";import"./useHighlightSelectionDescription-c4Qb0Y_k.js";import"./useUpdateEffect-C-4xU-qa.js";import"./useHasTabbableChild-DtKIMeHo.js";import"./chevron-down-Cch3hfpc.js";import"./Virtualizer-n_GxamWZ.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
