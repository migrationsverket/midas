import{j as e}from"./iframe-_Hk9HBhX.js";import{c}from"./Form-CJTM5oJs.js";import{G as d}from"./Grid-DMId3ox6.js";import{G as i}from"./GridItem-Bgs0M1MX.js";import{a as x,R as u}from"./Radio-D7uap-s7.js";import{C as I}from"./CheckboxGroup-DrHacWu4.js";import{C as G}from"./Checkbox-C0KZoCr8.js";import{T as t}from"./TextField-iJoJs1gF.js";import{S as l}from"./Select-Bx7YRYX-.js";import{L as p}from"./ListBoxItem-BxVrRiI7.js";import{B as a}from"./Button-BPI35lWH.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CUpBT6GV.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./clsx-Ciqy0D92.js";import"./Group-DhBe_ig_.js";import"./FieldError-BnqaSw3Q.js";import"./Text-CFXOaGuN.js";import"./Text-4AExYRWh.js";import"./Button-BcVwX6wB.js";import"./Hidden-vPthIoGd.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./SelectionIndicator-BOwLDBzR.js";import"./useField-JEZIk8ke.js";import"./VisuallyHidden-CE55BuvM.js";import"./useControlledState-CXVEjKuF.js";import"./Label-CPIJO4oY.js";import"./Dialog-gbJqnVCn.js";import"./RSPContexts-BkY4NJgN.js";import"./OverlayArrow-C8dc221V.js";import"./useResizeObserver-Dob1-ek4.js";import"./Collection-38fQTHAm.js";import"./index-D0DH_Og7.js";import"./Separator-mZ0uLOGM.js";import"./SelectionManager-CHKeKSA7.js";import"./useEvent-BoXIj02p.js";import"./scrollIntoView-DeSIzk3n.js";import"./useDescription-Br1cNKJN.js";import"./ListKeyboardDelegate-CTPIAQRz.js";import"./PressResponder-DSjXrWnb.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BrdO1Epl.js";import"./getScrollParent-arYGATXV.js";import"./ModalOverlay-C_u5Ore6.js";import"./x-3memj5xE.js";import"./createLucideIcon-qIP4byR5.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Heading-CVFjfB5H.js";import"./info-CxjPhrtp.js";import"./Popover-BFw3zMr4.js";import"./check-D8LrGIdX.js";import"./useToggleState-CMh-QzHR.js";import"./TextFieldBase-6Ma4Jhxc.js";import"./Input-BnOd_loK.js";import"./useTextField-D8pq1Yhc.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cki0ef1o.js";import"./DragAndDrop-BkZbnh7V.js";import"./inertValue-Nj7XzT2_.js";import"./useListState-oe3bG2m6.js";import"./TagGroup-BqYIjtJK.js";import"./useHighlightSelectionDescription-Bqanswuw.js";import"./useUpdateEffect-BotRKgqK.js";import"./useHasTabbableChild-DN8lqkd0.js";import"./chevron-down-Dc-lcVcz.js";import"./Virtualizer-C4hwgoa3.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
