import{j as e}from"./iframe-CxnkivWk.js";import{c}from"./Form-DkPx28L8.js";import{G as d}from"./Grid-EPonFwIh.js";import{G as i}from"./GridItem-BWQKN5ZQ.js";import{a as x,R as u}from"./Radio-Bi7K8U2Z.js";import{C as I}from"./CheckboxGroup-Bc-ip05v.js";import{C as G}from"./Checkbox-GNEh45uS.js";import{T as t}from"./TextField-DRddSBJ0.js";import{S as l}from"./Select-D1AkVbmm.js";import{L as p}from"./ListBoxItem-VtTeFZsj.js";import{B as a}from"./Button-gL8l0gpP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DuH0mTQw.js";import"./utils-D9spTQed.js";import"./clsx-B-dksMZM.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./clsx-Ciqy0D92.js";import"./Group-BNGUzLFf.js";import"./FieldError-CXKQ23yv.js";import"./Text-C1PtMghN.js";import"./Text-DEFKyO3K.js";import"./Button-bNvppfaR.js";import"./Hidden-DV_3dmeB.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./SelectionIndicator-DnuaDN2e.js";import"./useField-B3iEvv-2.js";import"./VisuallyHidden-CHjZ0tZh.js";import"./useControlledState-DslVItvC.js";import"./Label-CQ464mk5.js";import"./Dialog-DwLoy7Vv.js";import"./RSPContexts-BoJ1S5Xk.js";import"./OverlayArrow-BG0VBke4.js";import"./useResizeObserver-DaS98GU_.js";import"./Collection-CXm-x1nl.js";import"./index-B3NRX8rx.js";import"./Separator-Dnq--nuB.js";import"./SelectionManager-Cl7E85EL.js";import"./useEvent-CQPjNeLr.js";import"./scrollIntoView-CctMTOtZ.js";import"./useDescription-DJZJclYp.js";import"./ListKeyboardDelegate-1o8DOqqA.js";import"./PressResponder-CjKLrE4L.js";import"./useLocalizedStringFormatter-B8oxEIA6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cek9N8W3.js";import"./getScrollParent-ClxdokLI.js";import"./ModalOverlay-NDRHYBNJ.js";import"./x-CesJmbak.js";import"./createLucideIcon-DTCD7Iny.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./Heading-COAl1DmL.js";import"./info-lbJk4b3T.js";import"./Popover-x6b8bzWC.js";import"./check-CFYs0Agm.js";import"./useToggleState-rJ8EvEdc.js";import"./TextFieldBase-ulqYpEHE.js";import"./Input-D9JcCxco.js";import"./useTextField-BIzTlx2_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cdzq3cDG.js";import"./DragAndDrop-BSWvojsI.js";import"./inertValue-BwBYHasu.js";import"./useListState-DecrYKCa.js";import"./TagGroup-ym0JyfDm.js";import"./useHighlightSelectionDescription-wKujnCol.js";import"./useUpdateEffect-CpukhZt0.js";import"./useHasTabbableChild-BLeWALU-.js";import"./chevron-down-Ccy2ugDn.js";import"./Virtualizer-DfDScPke.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
