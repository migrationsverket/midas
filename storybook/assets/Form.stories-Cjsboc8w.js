import{j as e}from"./iframe-FULtcQ5y.js";import{$ as c}from"./Form-D8Z9-zNv.js";import{G as d}from"./Grid-Db7E7fWW.js";import{G as i}from"./GridItem-CwMKXTvl.js";import{T as t}from"./TextField-BogCeHAH.js";import{S as l}from"./Select-DZV_SjA8.js";import{B as a}from"./Button-C3cOR8o0.js";import{R as x,a as u}from"./Radio-Di2SwCOu.js";import{C as I}from"./CheckboxGroup-DjXPE76s.js";import{C as G}from"./Checkbox-Dfv8E6To.js";import{L as p}from"./ListBoxItem-BQ6WOVz7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BZWW7WJA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C9QOJ6L1.js";import"./useFocusRing-Cf9gdL2X.js";import"./index-DZLJKQEi.js";import"./index-DEQebrT3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D5tvvj3J.js";import"./TextField-B7h8MzBs.js";import"./FieldError-C797vA19.js";import"./Text-DnzX-OyP.js";import"./Text-Ccs4qaSZ.js";import"./RSPContexts-DakiloPX.js";import"./Group-BnxCVhO1.js";import"./Input-AcXThbYp.js";import"./Hidden-DwNxrma0.js";import"./Button-D0gHO-KH.js";import"./useLabels-0cbaIQ_Y.js";import"./useButton-Okn-2P08.js";import"./useTextField-BIp1oEBQ.js";import"./useControlledState-b-x_Bn66.js";import"./useField-N9zIyGWG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BTNIT-XO.js";import"./Dialog-ChnS1c7i.js";import"./OverlayArrow-B4xHAU9K.js";import"./useResizeObserver-DzkMWGBj.js";import"./Collection-DhJEN3cp.js";import"./index-RRdF-DV5.js";import"./Separator-DCgd4plg.js";import"./SelectionManager-fkm3gmUA.js";import"./useEvent-zOk05Ty3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5fKujRu.js";import"./useDescription-B6nXjKiy.js";import"./ListKeyboardDelegate-BgoZQiFu.js";import"./PressResponder-DIxYZTyT.js";import"./useLocalizedStringFormatter-CzRjru41.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zs0ohSnu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BAXKzm-M.js";import"./x-Dw0QuZBZ.js";import"./createLucideIcon-rSkXk1i2.js";import"./useLocalizedStringFormatter-DRhb472R.js";import"./Heading-BC8nbTcr.js";import"./info-cP1CelqL.js";import"./Popover-CwZ7GKO1.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-PpqtK8ZI.js";import"./DragAndDrop-B-QgNyvK.js";import"./inertValue-CYJLr5AG.js";import"./useListState-r1SXzyRi.js";import"./Tag-BW3YY1Ba.js";import"./useHighlightSelectionDescription-Ds0K4A0E.js";import"./useUpdateEffect-M02V7yMX.js";import"./useHasTabbableChild-BIklKE0K.js";import"./chevron-down-BwXJ1m_y.js";import"./Button.module-Co5e5YHp.js";import"./check-UBo99_A9.js";import"./useToggleState-BWdXZANR.js";import"./Virtualizer-ByW46jsz.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
