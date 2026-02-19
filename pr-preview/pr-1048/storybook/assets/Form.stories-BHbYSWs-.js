import{j as e}from"./iframe-DvfEE2EA.js";import{$ as c}from"./Form-CACDamyx.js";import{G as d}from"./Grid-CylE-5xe.js";import{G as i}from"./GridItem-C4zE_Fge.js";import{a as x,R as u}from"./Radio-BByYwdzK.js";import{C as I}from"./CheckboxGroup-CONQE4_b.js";import{C as G}from"./Checkbox-Djy2hD9Q.js";import{T as t}from"./TextField-oACNnNdT.js";import{S as l}from"./Select-CKxJxmTG.js";import{L as p}from"./ListBoxItem-D6vK8DrQ.js";import{B as a}from"./Button-CA8_LeWe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-EccCoJST.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BV0cpNq4.js";import"./useFocusRing-DvRoLobF.js";import"./index-C-FPbYY0.js";import"./index-C-7AJHKG.js";import"./clsx-Ciqy0D92.js";import"./Group-C4sMBp7H.js";import"./FieldError-DJlVVmti.js";import"./Text-CYxj4XUp.js";import"./Text-JM8wZQts.js";import"./Button-BEsFQT6R.js";import"./Hidden-E4LKVjJ3.js";import"./number-DfkVkf0F.js";import"./useLabels-BDWRbz34.js";import"./useButton-Cby6Hv6a.js";import"./SelectionIndicator-CfqI11BI.js";import"./useField-DtIRcX32.js";import"./VisuallyHidden-DJTtwLDL.js";import"./useControlledState-BMOgnCDq.js";import"./Label-B7Zem9bP.js";import"./Dialog-Bf1mwFUJ.js";import"./RSPContexts-BybK4INx.js";import"./OverlayArrow-C7-nyh-D.js";import"./useResizeObserver-Cg-d0UwX.js";import"./Collection-CZl-6v5x.js";import"./index-BlYdPTc5.js";import"./Separator-C2SqFLQ9.js";import"./SelectionManager-DBVqzXni.js";import"./useEvent-Dt-7Obwe.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHTjELwq.js";import"./ListKeyboardDelegate-BTNuIJ29.js";import"./PressResponder-87t-uR6-.js";import"./useLocalizedStringFormatter-7gPqsvUW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lGFdxzxT.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-BKYtvUWS.js";import"./x-DwluPr-j.js";import"./createLucideIcon-BJb0Fm1J.js";import"./useLocalizedStringFormatter-CdetPKX0.js";import"./Heading-B7XRRO6d.js";import"./info-GKwazr5J.js";import"./Popover-Df_-00wq.js";import"./check-pdTOHOtg.js";import"./useToggleState-CNA36ZkH.js";import"./TextFieldBase-Cy_J-xQ0.js";import"./Input-BfQAZesE.js";import"./useTextField-Bw36CqRH.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BXcKgO_7.js";import"./DragAndDrop-DDb4Qli4.js";import"./inertValue-C9_UBnpU.js";import"./useListState-BOeurRoP.js";import"./TagGroup-Thj1HioG.js";import"./useHighlightSelectionDescription-D3u7_QtK.js";import"./useUpdateEffect-hMT7ev8Z.js";import"./useHasTabbableChild-C_fbwP6Q.js";import"./chevron-down-BcPqai3C.js";import"./Virtualizer-nwGzeByk.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
