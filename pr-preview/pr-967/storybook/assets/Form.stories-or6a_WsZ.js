import{j as e}from"./iframe-Duvzi_mO.js";import{$ as c}from"./Form-BNxCnv7m.js";import{G as d}from"./Grid-D0UwNARH.js";import{G as i}from"./GridItem-PIbMJv2a.js";import{T as t}from"./TextField-D7N8zzqr.js";import{S as l}from"./Select-D62B2T0W.js";import{B as a}from"./Button-agFIfSf8.js";import{R as x,a as u}from"./Radio-Cl8-M65S.js";import{C as I}from"./CheckboxGroup-CJPVH39B.js";import{C as G}from"./Checkbox-Bp9IYAA1.js";import{L as p}from"./ListBoxItem-D0xbT5Av.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DXbn0oqq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dyub27PJ.js";import"./useFocusRing--hZOMB0E.js";import"./index-D5Xrr1Vj.js";import"./index-C3jNp5eG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CfZkajY9.js";import"./TextField-Cmxw3_Ih.js";import"./FieldError-KymSBWrt.js";import"./Text--15STIft.js";import"./Text-B2Au3uTF.js";import"./RSPContexts-DD0p7Dx-.js";import"./Group-SQOlcb54.js";import"./Input-fgPw_9lK.js";import"./Hidden-Cj6eSEvr.js";import"./Button-DEGU7aUv.js";import"./useLabels-D1kjihVB.js";import"./useButton-DiocC29F.js";import"./useTextField-D7mbQ9lJ.js";import"./useControlledState-DUm4m-rZ.js";import"./useField-CXIum541.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B_j0zLgj.js";import"./Dialog-yEDAbKl5.js";import"./OverlayArrow-DkyzPOpF.js";import"./useResizeObserver-CoTKjDz1.js";import"./Collection-D7bZwKND.js";import"./index-QULG0cx_.js";import"./Separator-DwD2mKZu.js";import"./SelectionManager-CHE_IsgN.js";import"./useEvent-C1kRtpn3.js";import"./scrollIntoView-CoN4CEq9.js";import"./SelectionIndicator-BrZdy_PU.js";import"./useDescription-hfMxyp8f.js";import"./ListKeyboardDelegate-CxFnV7s1.js";import"./PressResponder-BvLGxz5i.js";import"./useLocalizedStringFormatter-BU47f0l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dn_cR8X0.js";import"./VisuallyHidden-DFNT7U81.js";import"./x-BUjRGG1p.js";import"./createLucideIcon-Pkzd9K88.js";import"./useLocalizedStringFormatter-CJvV6lOf.js";import"./Heading-DxyAYdrG.js";import"./info-DO9Ya7qW.js";import"./Popover-BRL_o9DX.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-JJzELVRV.js";import"./DragAndDrop-C32no4kM.js";import"./inertValue-DcqnnvM4.js";import"./useListState-BY-wOlsP.js";import"./Tag-DTm2zL1B.js";import"./useHighlightSelectionDescription-CJ7E4XFW.js";import"./useUpdateEffect-BFc5C6-Z.js";import"./useHasTabbableChild-q0cqOJdP.js";import"./chevron-down-DY_MjnfN.js";import"./Button.module-Co5e5YHp.js";import"./check-DKo4wzKZ.js";import"./useToggleState-zN1TdYqi.js";import"./Virtualizer-CdMrxNTV.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
