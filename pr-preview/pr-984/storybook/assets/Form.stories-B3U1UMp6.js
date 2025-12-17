import{j as e}from"./iframe-9863yx6x.js";import{$ as c}from"./Form-DTt4sDiQ.js";import{G as d}from"./Grid-Dso2KOrd.js";import{G as i}from"./GridItem-C0kkyo1t.js";import{T as t}from"./TextField-CPIgqKsP.js";import{S as l}from"./Select-C2UBBr5_.js";import{B as a}from"./Button-CX3flpTi.js";import{R as x,a as u}from"./Radio-BlWo8Eox.js";import{C as I}from"./CheckboxGroup-C0MALCIs.js";import{C as G}from"./Checkbox-DPmMryR8.js";import{L as p}from"./ListBoxItem-qjtjTTki.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhQ3vlj8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-eTAg9DIf.js";import"./useFocusRing-Ce48MUY0.js";import"./index-DLd0rQU9.js";import"./index-hIuVGS0q.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DGBaUXvh.js";import"./TextField-Bc5R3XjH.js";import"./FieldError-BVSywb3B.js";import"./Text-DtjOYwSN.js";import"./Text-xbHrSl7O.js";import"./RSPContexts-BzM22-AV.js";import"./Group-Bx99FXR3.js";import"./Input-C6JCCbZZ.js";import"./Hidden-Cu3qX2yN.js";import"./Button-teT3EZQp.js";import"./useLabels-CYasyUGC.js";import"./useButton-CsKKQAqC.js";import"./useTextField-tbhdJosq.js";import"./useControlledState-Dbpms77R.js";import"./useField-BIJ2mXP4.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yLVuVWyr.js";import"./Dialog-B5SyWMQm.js";import"./OverlayArrow-C7pCsMzu.js";import"./useResizeObserver-BxPL0cwk.js";import"./Collection-Di3OkD0q.js";import"./index-CKTGGerH.js";import"./Separator-CDggTgNt.js";import"./SelectionManager-C0j3TdpS.js";import"./useEvent-D-937SH4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eewfSWHW.js";import"./useDescription-CYKtSczo.js";import"./ListKeyboardDelegate-DJGCS9dk.js";import"./PressResponder-CukyNEYP.js";import"./useLocalizedStringFormatter-B_pYp1kt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6NiNjFQ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wlBhk09R.js";import"./x-DcJaNkiM.js";import"./createLucideIcon-DoFpQJ8A.js";import"./useLocalizedStringFormatter-DKcIukCd.js";import"./Heading-DHbz02dp.js";import"./info-Ci8FgCFx.js";import"./Popover-CVyUoliT.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BJcL1Tuf.js";import"./DragAndDrop-oy33mP0s.js";import"./inertValue-CV-it6Ut.js";import"./useListState-CWN2toNr.js";import"./Tag-C4oqZAx9.js";import"./useHighlightSelectionDescription-C4fP-1dp.js";import"./useUpdateEffect-C4tRZBZ8.js";import"./useHasTabbableChild-C1kn08mw.js";import"./chevron-down-HpYDt3Ea.js";import"./Button.module-Co5e5YHp.js";import"./check-DfSoaJvf.js";import"./useToggleState-CP77wEPO.js";import"./Virtualizer-OnHH0LgG.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
