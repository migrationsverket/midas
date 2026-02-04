import{j as e}from"./iframe-B_SSSC13.js";import{$ as c}from"./Form-zRNHTqke.js";import{G as d}from"./Grid-COvKFGmr.js";import{G as i}from"./GridItem-BuNBNh2a.js";import{a as x,R as u}from"./Radio-BwPYIwTU.js";import{C as I}from"./CheckboxGroup-CKSwzIgA.js";import{C as G}from"./Checkbox-Dg7OiCJn.js";import{T as t}from"./TextField-LG3FA51z.js";import{S as l}from"./Select-Obk1F8tK.js";import{L as p}from"./ListBoxItem-CWg1KPdM.js";import{B as a}from"./Button-DwlyzCZV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvDYbPsX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DeX5ISQ4.js";import"./useFocusRing-DD9UXZoZ.js";import"./index-h5wgbRS0.js";import"./index-CUO7TZGi.js";import"./clsx-Ciqy0D92.js";import"./Group-DucwkJ-c.js";import"./FieldError-D1TT9t70.js";import"./Text-WBWevH5_.js";import"./Text-zzyNhY3P.js";import"./Button-BRuyYegt.js";import"./Hidden-1_dFGxWz.js";import"./useLabels-MYW5pJHL.js";import"./useButton-D3rl8s_R.js";import"./SelectionIndicator-C1ClyJxV.js";import"./useField-D5ATrzWx.js";import"./VisuallyHidden-DBwHi6uI.js";import"./useControlledState-7bOzaDvk.js";import"./Label-C6DEhGpe.js";import"./Dialog-BNNNvoc9.js";import"./RSPContexts-Bo6wL8nR.js";import"./OverlayArrow-CAsLYpF3.js";import"./useResizeObserver-7p9RzYhX.js";import"./Collection-Bc4Mkmlx.js";import"./index-DdHBG9m2.js";import"./Separator-Crb950pg.js";import"./SelectionManager-DsvtZaIh.js";import"./useEvent-CNY1qaAe.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CXeCeKMo.js";import"./ListKeyboardDelegate-GR3jqGFe.js";import"./PressResponder-B0_TIU_P.js";import"./useLocalizedStringFormatter-8PuQ8rfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6L3jXhq.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CjWkaJ06.js";import"./createLucideIcon-BX44XqHc.js";import"./useLocalizedStringFormatter-2Krnf2lE.js";import"./Heading-CNoL31sb.js";import"./info-BhBHDNKZ.js";import"./Popover-frimzjzU.js";import"./check-CfoAM94Y.js";import"./useToggleState-BefAz5vn.js";import"./TextFieldBase-RjvbqXqL.js";import"./TextField-BDIIj_nL.js";import"./Input--2a9vmyY.js";import"./useTextField-DcRRIu_F.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-U2CWRPy4.js";import"./DragAndDrop-RCe6ODU0.js";import"./inertValue-D9DsvI77.js";import"./useListState-B3BPwtY4.js";import"./Tag-DT1A0QHd.js";import"./useHighlightSelectionDescription-BYeKMXiS.js";import"./useUpdateEffect-Cr_yvhAT.js";import"./useHasTabbableChild-_TERZ2pq.js";import"./chevron-down-BzpWjUXJ.js";import"./Virtualizer-CNiOvFLg.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
