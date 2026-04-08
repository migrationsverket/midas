import{j as e}from"./iframe-D1quRbgW.js";import{c}from"./Form-CYOiDrvK.js";import{G as d}from"./Grid-dvqRD5E2.js";import{G as i}from"./GridItem-deJ-cRgM.js";import{a as x,R as u}from"./Radio-oNT0-Sj9.js";import{C as I}from"./CheckboxGroup-BEEDJdNt.js";import{C as G}from"./Checkbox-cytQzq2b.js";import{T as t}from"./TextField-BjIEIJth.js";import{S as l}from"./Select-Bn4WCpbN.js";import{L as p}from"./ListBoxItem-C6-mwnlQ.js";import{B as a}from"./Button-BfQ6mpwy.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-9kJRwLWf.js";import"./utils-5jbBDEho.js";import"./clsx-B-dksMZM.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./clsx-Ciqy0D92.js";import"./Group-BYE11aio.js";import"./FieldError-tCCfgJxh.js";import"./Text-3Qvoq1in.js";import"./Text-D_OKwN2L.js";import"./Button-BhbL5JV7.js";import"./Hidden-CE_f7fkS.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./SelectionIndicator-BQcve-Om.js";import"./useField-Cufj8K7g.js";import"./VisuallyHidden-BTPkzFD2.js";import"./useControlledState-DeZ6Yvot.js";import"./Label-CQyhlHOY.js";import"./Dialog-CRuSb46z.js";import"./RSPContexts-BOAQgN9e.js";import"./OverlayArrow-Cu_hZ8Ow.js";import"./useResizeObserver-mi6LLgFF.js";import"./Collection-D07AIaI6.js";import"./index-DVsa0PpW.js";import"./Separator-Bm91EQOq.js";import"./SelectionManager-BfK7m5GQ.js";import"./useEvent-l8liJTej.js";import"./scrollIntoView-Bo7c4HRy.js";import"./useDescription-CYq7ZcY8.js";import"./ListKeyboardDelegate-abc3RMeL.js";import"./PressResponder-B1v66ZVJ.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7P9G73n.js";import"./getScrollParent-BuLIPRgk.js";import"./Dialog-B0MaM1ld.js";import"./x-C6gJ_9jG.js";import"./createLucideIcon-xiP51FEZ.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Heading-DBO9UxDb.js";import"./info-C4xCLEuX.js";import"./Popover-o2aALoW-.js";import"./check-GvY84bn_.js";import"./useToggleState-Hc7uiKPK.js";import"./TextFieldBase-Bz22Anl9.js";import"./Input-D6BpUq6c.js";import"./useTextField-vt5FCW9J.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D5-_pfbz.js";import"./DragAndDrop-D83qtKKN.js";import"./inertValue-CG9XGZkV.js";import"./useListState-OAVH06Sm.js";import"./TagGroup-ClUbUb_2.js";import"./useHighlightSelectionDescription-CnbCm_ld.js";import"./useUpdateEffect-DfrNQfxH.js";import"./useHasTabbableChild-DNcO0Xj2.js";import"./chevron-down-Be-TceOB.js";import"./Virtualizer-BxERZkQr.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
