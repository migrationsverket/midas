import{j as e}from"./iframe-a-0QSjcf.js";import{$ as c}from"./Form-BGTqQH8a.js";import{G as d}from"./Grid-BElmsuaJ.js";import{G as i}from"./GridItem-BqmDPqzr.js";import{a as x,R as u}from"./Radio-CTCfCj42.js";import{C as I}from"./CheckboxGroup-1gK9-8HD.js";import{C as G}from"./Checkbox-sxI50tZB.js";import{T as t}from"./TextField-Daimn2oW.js";import{S as l}from"./Select-BL9FpqVV.js";import{L as p}from"./ListBoxItem--iNO6ECJ.js";import{B as a}from"./Button-D2oQUHVT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_-tSBeZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Du4LTqk6.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./clsx-Ciqy0D92.js";import"./Group-mS_sftn7.js";import"./FieldError-DsswgMzG.js";import"./Text-BKQI6ihA.js";import"./Text-B2LxCzJs.js";import"./Button-C60PLABZ.js";import"./Hidden-B9ZA2jSe.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./SelectionIndicator-3aVRxCVz.js";import"./useField-CGPrKXG5.js";import"./VisuallyHidden-B518bO6H.js";import"./useControlledState-DQziIZ9T.js";import"./Label-YgUgumpZ.js";import"./Dialog-w2u3UMAw.js";import"./RSPContexts-D7vEIwAp.js";import"./OverlayArrow-b72sAqXS.js";import"./useResizeObserver-W2ayqQuc.js";import"./Collection-ErSyUHVz.js";import"./index-DWKJl1jK.js";import"./Separator-BxqIoaxC.js";import"./SelectionManager-Cos7Ara1.js";import"./useEvent-DG_5MX2s.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DFv-da9o.js";import"./ListKeyboardDelegate-B5PjmmDN.js";import"./PressResponder-Cl2-_IoC.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2sqxsit.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CIpaA31e.js";import"./createLucideIcon-Dsg6rjRC.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./Heading-D2oXPaON.js";import"./info-_GEbiMwg.js";import"./Popover-DY7AGX_k.js";import"./check-aa384UvO.js";import"./useToggleState-Ch8vNtgH.js";import"./TextFieldBase-DW_PjiB9.js";import"./TextField-BRt79qr6.js";import"./Input-DbfA93Bb.js";import"./useTextField-NOopuUc-.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BWsx5uGG.js";import"./DragAndDrop-DwmQC6a1.js";import"./inertValue-C55LIryD.js";import"./useListState-az2GWLwE.js";import"./Tag-B072HDvQ.js";import"./useHighlightSelectionDescription-oyey0ogK.js";import"./useUpdateEffect-B3Cg0W0K.js";import"./useHasTabbableChild-C4HgUrRB.js";import"./chevron-down-4hpgzCU9.js";import"./Virtualizer-DEYC5Y7I.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
