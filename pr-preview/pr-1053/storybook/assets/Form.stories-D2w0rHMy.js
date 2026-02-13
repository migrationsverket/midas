import{j as e}from"./iframe-CY7earj9.js";import{$ as c}from"./Form-BY9kSmc9.js";import{G as d}from"./Grid-Dfw8edwj.js";import{G as i}from"./GridItem-BCqg5ae4.js";import{a as x,R as u}from"./Radio-DjBnKZN-.js";import{C as I}from"./CheckboxGroup-jTFwzkbM.js";import{C as G}from"./Checkbox-BqbQc3ee.js";import{T as t}from"./TextField-8Mj4A8Fj.js";import{S as l}from"./Select-C7YQkbXK.js";import{L as p}from"./ListBoxItem-CRxUPIOB.js";import{B as a}from"./Button-DqjjUYYg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BHj0WwlJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-jQfUv7M_.js";import"./useFocusRing-D0zrayrq.js";import"./index-BMlkIDuL.js";import"./index-DvjoN402.js";import"./clsx-Ciqy0D92.js";import"./Group-6rBRTPBy.js";import"./FieldError-X9ojGEW-.js";import"./Text-DDkXBPqL.js";import"./Text-DEbe6_kr.js";import"./Button-Cn9gwPsg.js";import"./Hidden-BWeB5vvs.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./SelectionIndicator-HcaYXDj8.js";import"./useField-B15zj1Pl.js";import"./VisuallyHidden-BYqRYUAd.js";import"./useControlledState-CGlYRVEE.js";import"./Label-3eLgMKE9.js";import"./Dialog-xHuaqAHU.js";import"./RSPContexts-BRbL19jn.js";import"./OverlayArrow-CUI5wUXW.js";import"./useResizeObserver-uEAd6X7g.js";import"./Collection-CNEjLfJN.js";import"./index-Bz5K3veL.js";import"./Separator-Da-_h7DR.js";import"./SelectionManager-HfXsibpp.js";import"./useEvent-BmzvquLD.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3ZL4MTY.js";import"./ListKeyboardDelegate-Bo1XGjsK.js";import"./PressResponder-CCUsU2dP.js";import"./useLocalizedStringFormatter-CXnWH6sO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vw1cebNO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CXFUVrZJ.js";import"./createLucideIcon-_3e5Batb.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./Heading-DTdA7tNF.js";import"./info-Cy3fZjjt.js";import"./Popover-BeD7AD1F.js";import"./check-CPvnX8tP.js";import"./useToggleState-BwuluaqD.js";import"./TextFieldBase-DUBeU7kI.js";import"./TextField-namiwpx9.js";import"./Input-BuN8GvyS.js";import"./useTextField-DR4DnHU_.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DiLgVWb6.js";import"./DragAndDrop-C0uTsadx.js";import"./inertValue-BW2krgRG.js";import"./useListState-2XgBHEEZ.js";import"./Tag-DADbvYFH.js";import"./useHighlightSelectionDescription-CxA1fGZq.js";import"./useUpdateEffect-BzkTYok2.js";import"./useHasTabbableChild-ExvsgqLY.js";import"./chevron-down-DtdjDvbY.js";import"./Virtualizer-CueMs4Qg.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
