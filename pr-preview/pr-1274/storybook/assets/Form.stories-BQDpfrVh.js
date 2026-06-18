import{j as e}from"./iframe-CX9u6T8Y.js";import{c}from"./Form-CcjwXvgg.js";import{G as d}from"./Grid-BaPZcGR5.js";import{G as i}from"./GridItem-Cv6zvB20.js";import{a as x,R as u}from"./Radio-BM4BW-4n.js";import{C as I}from"./CheckboxGroup-bD8usdR1.js";import{C as G}from"./Checkbox-B64UhwDO.js";import{T as t}from"./TextField-0CKbJ89o.js";import{S as l}from"./Select-B60E6IbE.js";import{L as p}from"./ListBoxItem-BFUc6yO5.js";import{B as a}from"./Button-DlDZpI3n.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-VvtcDzXm.js";import"./utils-B_VHG1Gv.js";import"./clsx-B-dksMZM.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./clsx-Ciqy0D92.js";import"./Group-DykfZ54i.js";import"./FieldError--tTRVDtY.js";import"./Text-C6_BqquS.js";import"./Text-e2IPEiX4.js";import"./Button-DNtvrS_L.js";import"./Hidden-BBME2lcH.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./SelectionIndicator-hxR0v41A.js";import"./useField-B8XYujKH.js";import"./VisuallyHidden-CQlGnIWD.js";import"./useControlledState-CqdFbIjJ.js";import"./Label-DUzdzQsm.js";import"./Dialog-KMkeEz2A.js";import"./RSPContexts-BNooXlrN.js";import"./OverlayArrow-DyKE0IPh.js";import"./useResizeObserver-C6yuo73Q.js";import"./Collection-BQaK6DiV.js";import"./index-BxaUb3R0.js";import"./Separator-4Z7SGmJN.js";import"./SelectionManager-B23DL8iR.js";import"./useEvent-zf2pcSAO.js";import"./scrollIntoView-DpK8DHna.js";import"./useDescription-EWWy_tBC.js";import"./ListKeyboardDelegate-DbPEeBPI.js";import"./PressResponder-BB8d3xdq.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEO9m3RA.js";import"./getScrollParent-CX4KiXNJ.js";import"./ModalOverlay-Cp1C1FLx.js";import"./x-3RPgUNSS.js";import"./createLucideIcon-B3Yd5B-T.js";import"./useLocalizedStringFormatter-BMBTKo38.js";import"./Heading-RxnKE-X9.js";import"./info-B2F7-Zsm.js";import"./Popover-CL4ZuKS5.js";import"./check-BnSBNMEB.js";import"./useToggleState-CPgn4uGM.js";import"./TextFieldBase-RuJPELT0.js";import"./Input-MSTc-SIR.js";import"./useTextField-DJBn353g.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CRX8fU2-.js";import"./DragAndDrop-BWXUic4m.js";import"./inertValue-CSY_DUks.js";import"./useListState-QQZ0TLdy.js";import"./TagGroup-DsOH7iEs.js";import"./useHighlightSelectionDescription-CY9Wfcjh.js";import"./useUpdateEffect-DLzyy33s.js";import"./useHasTabbableChild-Ce9cWAHu.js";import"./chevron-down-Cdrh22J3.js";import"./Virtualizer-CpNly50x.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
