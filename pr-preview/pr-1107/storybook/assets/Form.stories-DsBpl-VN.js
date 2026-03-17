import{j as e}from"./iframe-DfM6kEgP.js";import{$ as c}from"./Form-QMfqrVHt.js";import{G as d}from"./Grid-BCOqMMya.js";import{G as i}from"./GridItem-gSTKgYlB.js";import{a as x,R as u}from"./Radio-n1ACv9PK.js";import{C as I}from"./CheckboxGroup-nORJA49m.js";import{C as G}from"./Checkbox-DxkXM5S5.js";import{T as t}from"./TextField-HdSFhgPJ.js";import{S as l}from"./Select-gvn8PZUv.js";import{L as p}from"./ListBoxItem-CgQ1xkow.js";import{B as a}from"./Button-6n3SyLgE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D8PGfxYb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BQsgNnye.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./clsx-Ciqy0D92.js";import"./Group-Dj2SQDcn.js";import"./FieldError-D7g57v3N.js";import"./Text-BibBkfuq.js";import"./Text-19RelmEi.js";import"./Button-Czn9lX0K.js";import"./Hidden-B-o_Z7ot.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./SelectionIndicator-B7PNH1gU.js";import"./useField-DDZqH5hv.js";import"./VisuallyHidden-B1MOHF_-.js";import"./useControlledState-kzArnBYE.js";import"./Label-if6eFtKI.js";import"./Dialog-OKjalaOk.js";import"./RSPContexts-BeTSInpY.js";import"./OverlayArrow-DiNb5Fu3.js";import"./useResizeObserver-Dhz32DFD.js";import"./Collection-09IBPkRq.js";import"./index-3kktDTdc.js";import"./Separator-CRnSeFy5.js";import"./SelectionManager-Dcw7EeBz.js";import"./useEvent-gEY0uIrq.js";import"./scrollIntoView-DF5-5d4s.js";import"./useDescription-CAoO2SDf.js";import"./ListKeyboardDelegate-zBpsm9mR.js";import"./PressResponder--6CUqe1-.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsUrANvt.js";import"./getScrollParent-C3WNykc8.js";import"./x-YUyJRI2G.js";import"./createLucideIcon-DO7HuIXt.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./Heading-Dh4ztEp9.js";import"./info-DjPwzfYU.js";import"./Popover--A1GvFMU.js";import"./check-CmJcoH6o.js";import"./useToggleState-Dg1EUDNI.js";import"./TextFieldBase-CUXJo1JP.js";import"./Input-D0dqnymk.js";import"./useTextField-BAx9P39W.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D0azdkZv.js";import"./DragAndDrop-Dk2yWXgD.js";import"./inertValue-DAhGPrD2.js";import"./useListState-S8x-XfJs.js";import"./TagGroup-YmrIPPyr.js";import"./useHighlightSelectionDescription-B6Y-83OY.js";import"./useUpdateEffect-56KrdJM3.js";import"./useHasTabbableChild-C2PxgtPW.js";import"./chevron-down-BST0rhAg.js";import"./Virtualizer-xl9ClfXv.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
