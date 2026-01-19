import{j as e}from"./iframe-CIadKzdu.js";import{$ as c}from"./Form-B0qehKJ0.js";import{G as d}from"./Grid-CubOjIS7.js";import{G as i}from"./GridItem-CPBQ8ibt.js";import{T as t}from"./TextField-B6naPId5.js";import{S as l}from"./Select-DP8PXQ_W.js";import{B as a}from"./Button-CpzbrA9E.js";import{R as x,a as u}from"./Radio-EAne1oOw.js";import{C as I}from"./CheckboxGroup-DLSfoetM.js";import{C as G}from"./Checkbox-DUjWct-V.js";import{L as p}from"./ListBoxItem-CeeMnHuE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJPrropT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CbBxKz-1.js";import"./useFocusRing-Cx6NGDs8.js";import"./index-eDsXbqKn.js";import"./index-lKxGNrLV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-q5VwN5WM.js";import"./TextField-BCZlC88W.js";import"./FieldError-DvZEkmKh.js";import"./Text-D5AYdaUH.js";import"./Text-MV4z5RP3.js";import"./RSPContexts-B0-J_gY5.js";import"./Group-BNflyKrC.js";import"./Input-CmcmFZqE.js";import"./Hidden-kJ8IT1EO.js";import"./Button-DWV-W5ps.js";import"./useLabels-EmpP_-hk.js";import"./useButton-ChIla9FM.js";import"./useTextField-MKDy3haf.js";import"./useControlledState-DulzVG2b.js";import"./useField-Vb42F4IT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D9jq9JnS.js";import"./Dialog-vJ84OY4R.js";import"./OverlayArrow-CVlv4gLj.js";import"./useResizeObserver-Dain9kfp.js";import"./Collection-CuqHIG9l.js";import"./index-DJg3KfkY.js";import"./Separator-CcJw4JmH.js";import"./SelectionManager-CirZ2bQ2.js";import"./useEvent-CpZmOcxi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-itVqOOaa.js";import"./useDescription-CpAdjwu7.js";import"./ListKeyboardDelegate-Bd9RyyDr.js";import"./PressResponder-COk2EHa3.js";import"./useLocalizedStringFormatter-DqJJo-SC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSpOvMxI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D0TfLuCq.js";import"./x-q28ujAI-.js";import"./createLucideIcon-CNkLKi9D.js";import"./useLocalizedStringFormatter-AWWTtLk1.js";import"./Heading-Cfj5vBSD.js";import"./info-DVe6ievT.js";import"./Popover-B68gghcY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-K2fSwNoU.js";import"./DragAndDrop-D46tFG1v.js";import"./inertValue-Cr-KGBDC.js";import"./useListState-CiLzIfg5.js";import"./Tag-Cf4rkQjX.js";import"./useHighlightSelectionDescription-Cq1XaXWp.js";import"./useUpdateEffect-B-nuawK3.js";import"./useHasTabbableChild-75glYSXe.js";import"./chevron-down-Cwi6GzrW.js";import"./Button.module-Co5e5YHp.js";import"./check-CWBw-upL.js";import"./useToggleState-DHaSPSfh.js";import"./Virtualizer-B5GhkvUT.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
