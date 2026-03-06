import{j as e}from"./iframe-CqGw52kl.js";import{$ as c}from"./Form-pNh1499V.js";import{G as d}from"./Grid-BVwbZcLI.js";import{G as i}from"./GridItem-BFLaQ-D4.js";import{a as x,R as u}from"./Radio-CdCeZCZw.js";import{C as I}from"./CheckboxGroup-BGuxpIhj.js";import{C as G}from"./Checkbox-BrrTN9w1.js";import{T as t}from"./TextField-qb1rZmCb.js";import{S as l}from"./Select-CnqKcbwC.js";import{L as p}from"./ListBoxItem-BEqL1VPw.js";import{B as a}from"./Button-ABAzSfOF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNYE9rrP.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-UdokVwww.js";import"./useFocusRing-GvsYGsAP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./clsx-Ciqy0D92.js";import"./Group-DOSO-6xH.js";import"./FieldError-CjHIzoMC.js";import"./Text-CHXVqnQT.js";import"./Text-D3EOjJ0B.js";import"./Button-BG-x6i-t.js";import"./Hidden-duzZCIPn.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./SelectionIndicator-D3fnkg3j.js";import"./useField-DmoBeN0F.js";import"./VisuallyHidden-BSHZJK5y.js";import"./useControlledState-CGYQyUPv.js";import"./Label-cFzpbQL9.js";import"./Dialog-3-VZN3M4.js";import"./RSPContexts-CivMWx79.js";import"./OverlayArrow-CisMBNJ_.js";import"./useResizeObserver-D828MuGa.js";import"./Collection-D3dy6mEh.js";import"./index-DTn8N8sc.js";import"./Separator-CnTEdMMk.js";import"./SelectionManager-Cw5-ky3E.js";import"./useEvent-7xwxZlQ2.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B6vY1f8v.js";import"./ListKeyboardDelegate-y9oHfD-i.js";import"./PressResponder-BXUkqiri.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCLu3UE2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DtV2puKB.js";import"./createLucideIcon-CoMafoM3.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";import"./Heading-C42QIcPI.js";import"./info-D-FaGrFm.js";import"./Popover-DpNHjmRR.js";import"./check-Bsa2uA7D.js";import"./useToggleState-DoxRLc9r.js";import"./TextFieldBase-aB7JCUky.js";import"./Input-QcKMD6XT.js";import"./useTextField-0aYGewaS.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-lDy7vQcP.js";import"./DragAndDrop-Cbl-c5kO.js";import"./inertValue-_9DoBh9I.js";import"./useListState-DWYf47QW.js";import"./TagGroup-DjRP_Ql3.js";import"./useHighlightSelectionDescription-DuagSZh7.js";import"./useUpdateEffect-CGhPL4qY.js";import"./useHasTabbableChild-0xHoxTmJ.js";import"./chevron-down-CAnEsdU5.js";import"./Virtualizer-CJxEmyRP.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
