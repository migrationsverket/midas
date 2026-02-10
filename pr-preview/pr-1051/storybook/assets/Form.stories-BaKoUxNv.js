import{j as e}from"./iframe-B5c7-TS8.js";import{$ as c}from"./Form-Cv6_3fLN.js";import{G as d}from"./Grid-Bs9aY8rH.js";import{G as i}from"./GridItem-BivCRuEO.js";import{a as x,R as u}from"./Radio-BPdnXIPr.js";import{C as I}from"./CheckboxGroup-CGo5B7o9.js";import{C as G}from"./Checkbox-C37WXJ92.js";import{T as t}from"./TextField-CKTdGkC0.js";import{S as l}from"./Select-BE1uiAzA.js";import{L as p}from"./ListBoxItem-FFyHo3iM.js";import{B as a}from"./Button-MSp50WJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-OlD28Oco.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-fe3exVFC.js";import"./useFocusRing-C18dDj3L.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./clsx-Ciqy0D92.js";import"./Group-B3WUkKss.js";import"./FieldError-BUOTNQMM.js";import"./Text-DYD59UTl.js";import"./Text-CXLpjGso.js";import"./Button-C5Qp8sRI.js";import"./Hidden-DgJfQ7aj.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./SelectionIndicator-CA3Uq9OB.js";import"./useField-BXzSvw9G.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./useControlledState-DEZrae_z.js";import"./Label-iOCuPFms.js";import"./Dialog-BEf9ZAnF.js";import"./RSPContexts-yBqgqokE.js";import"./OverlayArrow-Cl1qYup9.js";import"./useResizeObserver-15Bzp4gu.js";import"./Collection-BNPzsOfb.js";import"./index-CoLrQld2.js";import"./Separator-BSZDTc6g.js";import"./SelectionManager-Bwh8qqDD.js";import"./useEvent-LUYrey9d.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BhjMw0Jb.js";import"./ListKeyboardDelegate-GShWNoVd.js";import"./PressResponder-CBrq5ngO.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bh91Q0k3.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-LkEAYfSs.js";import"./createLucideIcon-DHsWZlEk.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";import"./Heading-C6uCjmJK.js";import"./info-CZLFldIB.js";import"./Popover-BKydzdZ2.js";import"./check-DF6IRbNH.js";import"./useToggleState-j3KQvAYo.js";import"./TextFieldBase-CpJF1U1V.js";import"./TextField-CPIhbfuM.js";import"./Input-zoCnMoQY.js";import"./useTextField-CYI-qgQw.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bo0LRWh5.js";import"./DragAndDrop-CgS4hfmc.js";import"./inertValue-I3xaj-I2.js";import"./useListState-CXRDInJL.js";import"./Tag-BSph7ruT.js";import"./useHighlightSelectionDescription-B8yVgjH1.js";import"./useUpdateEffect-DBJWHIG4.js";import"./useHasTabbableChild-DLC17nPu.js";import"./chevron-down-DEVgWGUn.js";import"./Virtualizer-Cu7fxs7l.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
