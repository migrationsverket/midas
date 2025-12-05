import{j as e}from"./iframe-DuaKi7xD.js";import{$ as c}from"./Form-DibndPIs.js";import{G as d}from"./Grid-D3gXmhOh.js";import{G as i}from"./GridItem-B3qqTCsH.js";import{T as t}from"./TextField-yH7dkN-e.js";import{S as l}from"./Select-C_jsfTtZ.js";import{B as a}from"./Button-B9O2nQjc.js";import{R as x,a as u}from"./Radio-RRR3hIGB.js";import{C as I}from"./CheckboxGroup-BfA5K0Ch.js";import{C as G}from"./Checkbox-Jkj3fpq2.js";import{L as p}from"./ListBoxItem-CTKRnl9o.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BCB57b2F.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B8lCzVVQ.js";import"./useFocusRing-CQC8CYmg.js";import"./index-D03P8HqJ.js";import"./index-Ch7u2l1l.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DCideqZ_.js";import"./TextField-B9pFxynO.js";import"./FieldError-H771sQdp.js";import"./Text-CQdB-g-f.js";import"./Text-BSDD80o3.js";import"./RSPContexts-Dp-lO0G2.js";import"./Group-CIoYZdfL.js";import"./Input-DYNm0iR9.js";import"./Hidden-DKSH1Rie.js";import"./Button-C2VTZsyg.js";import"./useLabels-CpVDs9CP.js";import"./useButton-DBitaRdE.js";import"./useTextField-Cv5deoUh.js";import"./useControlledState-DAMN56Mb.js";import"./useField-Cu-a3CrC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BZBLIiUE.js";import"./Dialog-CXAViKrp.js";import"./OverlayArrow-Csf7zr_A.js";import"./useResizeObserver-CYs8NOIf.js";import"./Collection-BrbeAAJJ.js";import"./index-uZ48yn5V.js";import"./Separator-CddXaqSa.js";import"./SelectionManager-Dfyyw9Ox.js";import"./useEvent-BT4STeC0.js";import"./scrollIntoView-CssqY3lX.js";import"./SelectionIndicator-_Z4rczi7.js";import"./useDescription-h7oYQVdW.js";import"./ListKeyboardDelegate-DrqN3Bz_.js";import"./PressResponder-CzqIdO87.js";import"./useLocalizedStringFormatter-j_Zj2lr5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bl2sq5hu.js";import"./VisuallyHidden-DOdw6P18.js";import"./x-BaABe5aY.js";import"./createLucideIcon-BniL5whM.js";import"./useLocalizedStringFormatter-CH44G-u9.js";import"./Heading-uceAp6q4.js";import"./info-uyk6d1fQ.js";import"./Popover-Sb6B6YNt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BnVGGowU.js";import"./DragAndDrop-duAbL8DO.js";import"./inertValue-Ca_Q_gHQ.js";import"./useListState-jI4I0WQ1.js";import"./Tag-ggxHI0Ga.js";import"./useHighlightSelectionDescription-S_RjNVF6.js";import"./useUpdateEffect-9yihMPqB.js";import"./useHasTabbableChild-6oMaSigf.js";import"./chevron-down-5jtS47UX.js";import"./Button.module-Co5e5YHp.js";import"./check-B0RW2aVw.js";import"./useToggleState-Dxo55OsM.js";import"./Virtualizer-CYWi7kxJ.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
