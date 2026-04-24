import{j as e}from"./iframe-EPbYJ3aH.js";import{c}from"./Form-Bo93hY_x.js";import{G as d}from"./Grid-DCd_S0Ow.js";import{G as i}from"./GridItem-C6yQcyZx.js";import{a as x,R as u}from"./Radio-DFHiIfp_.js";import{C as I}from"./CheckboxGroup-CEI4xg8B.js";import{C as G}from"./Checkbox-C0IG6UXq.js";import{T as t}from"./TextField-BS5g1SiG.js";import{S as l}from"./Select-vQyuUdRX.js";import{L as p}from"./ListBoxItem-DlNs4mO3.js";import{B as a}from"./Button-CF00LYtn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-vFk-w4SV.js";import"./utils-BFyuPOg-.js";import"./clsx-B-dksMZM.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./clsx-Ciqy0D92.js";import"./Group-BQ6Jklka.js";import"./FieldError-QU59tQ0w.js";import"./Text-DXPQUnae.js";import"./Text-DaRCpEpM.js";import"./Button-D1GYvhMH.js";import"./Hidden-CHhsJSI8.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./SelectionIndicator-Zdxp2d1B.js";import"./useField-Czz-xLhT.js";import"./VisuallyHidden-CRUsIDEu.js";import"./useControlledState-B7DCF9AW.js";import"./Label-hTDzrJT1.js";import"./Dialog-n78VMrVu.js";import"./RSPContexts-BCgG5sDy.js";import"./OverlayArrow-CYxpLZMe.js";import"./useResizeObserver-BbDP_QOM.js";import"./Collection-BCcQ8_2d.js";import"./index-Cx30adBd.js";import"./Separator-ZzheoSvB.js";import"./SelectionManager-fY8UI5b1.js";import"./useEvent-DrVet--T.js";import"./scrollIntoView-DIrfA17L.js";import"./useDescription-B2aIStsg.js";import"./ListKeyboardDelegate-CBTehG4B.js";import"./PressResponder-CbR5kRKy.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2RjG4Qj.js";import"./getScrollParent-IjDHduKu.js";import"./ModalOverlay-Dmzx1hCu.js";import"./x-DpzpagIl.js";import"./createLucideIcon-CDlkFEI-.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Heading-Dg6ksqRs.js";import"./info-Bz-zzsad.js";import"./Popover-OahhESU-.js";import"./check-p1RnRgI8.js";import"./useToggleState-30gFcbfu.js";import"./TextFieldBase-sHZ6h9LG.js";import"./Input-CLcVXigI.js";import"./useTextField-CQExyJqA.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-wcGIzY8u.js";import"./DragAndDrop-DKGMDmL2.js";import"./inertValue-Dh2-7trN.js";import"./useListState-BVDs0-Tx.js";import"./TagGroup-CRH_xTNN.js";import"./useHighlightSelectionDescription-DoEUofaS.js";import"./useUpdateEffect-BuQrKDqm.js";import"./useHasTabbableChild-Crg7iMMJ.js";import"./chevron-down-DwgrtFGU.js";import"./Virtualizer-ChsCZl58.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
