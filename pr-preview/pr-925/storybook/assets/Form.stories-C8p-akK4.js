import{j as e}from"./iframe-CbbBAmzj.js";import{$ as c}from"./Form-BSOfWwjY.js";import{G as d}from"./Grid-6ovW-dXE.js";import{G as i}from"./GridItem-C5L0gmK1.js";import{T as t}from"./TextField-C9PSSV-y.js";import{S as l}from"./Select-D2d-Xfhk.js";import{B as a}from"./Button-xJdt2F7s.js";import{R as x,a as u}from"./Radio-DBKvcmDT.js";import{C as I}from"./CheckboxGroup-C6BM6olR.js";import{C as G}from"./Checkbox-CNsRcRw0.js";import{L as p}from"./ListBoxItem-B37G1umZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhRPGHPf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CQFjrY1c.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B9jHg094.js";import"./TextField-CKB4zDXT.js";import"./FieldError-DbUlAqb9.js";import"./Text-CsK72l07.js";import"./Text-n09TZFQz.js";import"./RSPContexts-BPA00K2J.js";import"./Group-ZB5i4StR.js";import"./Input-DB4xg9bE.js";import"./Hidden-c3MDr7Jx.js";import"./Button-QZ9MaBJ0.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./useTextField-Qnse-Sqt.js";import"./useControlledState-BiEt7xRU.js";import"./useField-DrRy_FAN.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BIYSPuZD.js";import"./Dialog-xgk7Quy_.js";import"./OverlayArrow-BIwFTVIx.js";import"./useResizeObserver-jhLK4rky.js";import"./Collection-DDh4M0ar.js";import"./index-DHKyPGSh.js";import"./Separator-CCXlXQ8s.js";import"./SelectionManager-BTz-o__f.js";import"./useEvent-CCkUFzKP.js";import"./scrollIntoView-CR5VKzw8.js";import"./SelectionIndicator-DaI3oYsN.js";import"./useDescription-B-ccyjfI.js";import"./ListKeyboardDelegate-C40ne4YI.js";import"./PressResponder-DRSxt3i7.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_ZlqpQjL.js";import"./VisuallyHidden-ClvY-xxs.js";import"./useLocalizedStringFormatter-Cgyg9bBm.js";import"./x-Bb0Jqa61.js";import"./createLucideIcon-CroHsTCf.js";import"./Heading-DvBuq4JF.js";import"./info-Cr4xwn4u.js";import"./Popover-DETG9_yb.js";import"./Input-DQG2Ec4A.js";import"./Select-SW8I_uhG.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B_H4vgun.js";import"./DragAndDrop-Buzj178x.js";import"./inertValue-DkIwJFO3.js";import"./useListState-DcouUWP_.js";import"./Tag-KtcbaYwz.js";import"./useHighlightSelectionDescription-CZ5d-cdU.js";import"./useUpdateEffect-DOgjTSiE.js";import"./useHasTabbableChild-C34aJai2.js";import"./chevron-down-Bz6zAxgd.js";import"./Button.module-CtQ1deO8.js";import"./check-D_oAjZXU.js";import"./useToggleState-VSDptohI.js";import"./Virtualizer-CucFkyYp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
