import{j as e}from"./iframe-B63rKYqU.js";import{$ as c}from"./Form-G2zsCk4o.js";import{G as d}from"./Grid-BTcYZ08P.js";import{G as i}from"./GridItem-CpXSNqZd.js";import{T as t}from"./TextField-RtuTHvwy.js";import{S as l}from"./Select-ZRcaaM2B.js";import{B as a}from"./Button-CpkwJ8HO.js";import{R as x,a as u}from"./Radio-TEMajEbY.js";import{C as I}from"./CheckboxGroup-DgE4CMYB.js";import{C as G}from"./Checkbox-DtwcM_Wn.js";import{L as p}from"./ListBoxItem-CGWaPLVl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B8PawZ4p.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bsz9sBLD.js";import"./useFocusRing-DmPhrr6X.js";import"./index-BYawnw9P.js";import"./index-uItY6MEj.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D2rRUc1x.js";import"./TextField-4N9it18c.js";import"./FieldError-D2ragNVA.js";import"./Text-Bq093QF5.js";import"./Text-BAZ032Hu.js";import"./RSPContexts--nuT990L.js";import"./Group-5VzZnMEU.js";import"./Input-DPke8Hdy.js";import"./Hidden-BYyNs38Y.js";import"./Button-C9TkbvA1.js";import"./useLabels-Vvrocbqw.js";import"./useButton-BJDVqpSD.js";import"./useTextField-BcH3O51m.js";import"./useControlledState-D2SrYs4q.js";import"./useField-qBosTa6s.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CNTpYo0b.js";import"./Dialog-D83Cds8z.js";import"./OverlayArrow-L791iWYJ.js";import"./useResizeObserver-mVBAO9cG.js";import"./Collection-CY2MdGwK.js";import"./index-B8cjTzbQ.js";import"./Separator-DvfsOdRN.js";import"./SelectionManager-DzCv25Xr.js";import"./useEvent-BtzPI4lT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9usOHSg.js";import"./useDescription-kCZJFcL9.js";import"./ListKeyboardDelegate-CM7zLjwQ.js";import"./PressResponder-CehoTQ2a.js";import"./useLocalizedStringFormatter-KGBF3wy6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5ezL5Ud.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D1fJoZKk.js";import"./x-CqJOIyZm.js";import"./createLucideIcon-Cv9mqkPS.js";import"./useLocalizedStringFormatter-Bjx4e2b1.js";import"./Heading-CZ9K5txu.js";import"./info-CcxI7oxh.js";import"./Popover-DTwx4U23.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Zejh9oJ6.js";import"./DragAndDrop-DR359QfD.js";import"./inertValue-CeF-1fD2.js";import"./useListState-CytX-AUr.js";import"./Tag-aiNRCt_K.js";import"./useHighlightSelectionDescription-VwprQTTC.js";import"./useUpdateEffect-CiWfi01D.js";import"./useHasTabbableChild-Bu2bTVBq.js";import"./chevron-down-CrdcmVav.js";import"./Button.module-Co5e5YHp.js";import"./check-Dl-n2SkS.js";import"./useToggleState-DddEmw4p.js";import"./Virtualizer-CIswqj3_.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
