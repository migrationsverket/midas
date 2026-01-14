import{j as e}from"./iframe-KzFLTGr0.js";import{$ as c}from"./Form-CBvpL72C.js";import{G as d}from"./Grid-BouLzWJv.js";import{G as i}from"./GridItem-Be-JEdrq.js";import{T as t}from"./TextField-B8DqlYD3.js";import{S as l}from"./Select-B04e5Ug7.js";import{B as a}from"./Button-BLxQJ6AW.js";import{R as x,a as u}from"./Radio-CN1KdQEh.js";import{C as I}from"./CheckboxGroup-CxanwUZK.js";import{C as G}from"./Checkbox-DFNnsow4.js";import{L as p}from"./ListBoxItem-D_gvODv7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CO2yYsr6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DOWv8OTt.js";import"./useFocusRing-C4wRgiR-.js";import"./index-hPDntuQZ.js";import"./index-BiyGu_5v.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bc1uXMbg.js";import"./TextField-vwODPiAo.js";import"./FieldError-B1daGC65.js";import"./Text-Cmn4JyoG.js";import"./Text-BH1PFH25.js";import"./RSPContexts-sIRx7DsI.js";import"./Group-Dc48kuVs.js";import"./Input-DnVHbUsY.js";import"./Hidden-DzrKcQON.js";import"./Button-BBRIbgdT.js";import"./useLabels-8Z9kmpB8.js";import"./useButton-BxP8bzWM.js";import"./useTextField-Cie2w3CG.js";import"./useControlledState-C-UjGiCO.js";import"./useField-YY8zXIMp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BZyjLgDi.js";import"./Dialog-jqE6dH9h.js";import"./OverlayArrow-CofwM2Qh.js";import"./useResizeObserver-C-PipfoT.js";import"./Collection-DVOI67sL.js";import"./index-CKRnJMQr.js";import"./Separator-As3w6HQx.js";import"./SelectionManager-DVLI_Hyy.js";import"./useEvent-BFDZwV-z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BtQryPzY.js";import"./useDescription-BVYDnjYQ.js";import"./ListKeyboardDelegate-CksOf0SS.js";import"./PressResponder-CaBihIus.js";import"./useLocalizedStringFormatter-cXa5F6yq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D04kpmJ_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kcpL8sOO.js";import"./x-QPO1I7pH.js";import"./createLucideIcon-QW7mSHEY.js";import"./useLocalizedStringFormatter-Cvui8YbN.js";import"./Heading-NeDBoCJT.js";import"./info-CMR4dw2l.js";import"./Popover-BFbr7TL5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dl__riMk.js";import"./DragAndDrop-CkTFKjYf.js";import"./inertValue-ByPjCt7s.js";import"./useListState-Cagp6OBD.js";import"./Tag-CUsFOvma.js";import"./useHighlightSelectionDescription-2ztqQBHq.js";import"./useUpdateEffect-CKJgZURY.js";import"./useHasTabbableChild-Ct2M1DP7.js";import"./chevron-down-u95KQXIa.js";import"./Button.module-Co5e5YHp.js";import"./check-LadfRCBj.js";import"./useToggleState-BdEUfvgb.js";import"./Virtualizer-DTpFjo7i.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
