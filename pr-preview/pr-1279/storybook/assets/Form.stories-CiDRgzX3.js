import{j as e}from"./iframe-BdqauXPx.js";import{c}from"./Form-Bsw9pKS8.js";import{G as d}from"./Grid-Cgie3gnU.js";import{G as i}from"./GridItem--2A6zFvE.js";import{a as x,R as u}from"./Radio-DHOsdENX.js";import{C as I}from"./CheckboxGroup-YU4b02BH.js";import{C as G}from"./Checkbox-D_TaEQOj.js";import{T as t}from"./TextField-D_02OPdK.js";import{S as l}from"./Select-edmc5JTr.js";import{L as p}from"./ListBoxItem-Be7W-aXt.js";import{B as a}from"./Button-lQ7FTiYx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Djhyctp1.js";import"./utils-TjQiWSfv.js";import"./clsx-B-dksMZM.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./clsx-Ciqy0D92.js";import"./Group-DAsAupNi.js";import"./FieldError-DGaJEWvC.js";import"./Text-BL07whN_.js";import"./Text-Cb3R__HW.js";import"./Button-BdENfSlN.js";import"./Hidden-D68chLs-.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./SelectionIndicator-DT1mAUJL.js";import"./useField-C7HioUHP.js";import"./VisuallyHidden-d4YRXwAI.js";import"./useControlledState-BqbfbBFv.js";import"./Label-DCSqFwNN.js";import"./Dialog-Cb0whWoD.js";import"./RSPContexts-DWJwZTPK.js";import"./OverlayArrow-FJZRRUyJ.js";import"./useResizeObserver-RW1CuN27.js";import"./Collection-JvjnwjmG.js";import"./index-BS8HcPx6.js";import"./Separator-DFeV47hE.js";import"./SelectionManager-C6Y-w3s-.js";import"./useEvent-DExcb2G1.js";import"./scrollIntoView-jrzWWzlM.js";import"./useDescription-t_eySs42.js";import"./ListKeyboardDelegate-BhDiJ6PN.js";import"./PressResponder-TOh589vR.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3uQY02MS.js";import"./getScrollParent-H79fyDJz.js";import"./ModalOverlay-BxhYsu4X.js";import"./x-CmpCUEVG.js";import"./createLucideIcon-BaaLPnxs.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Heading-KnoXvYNa.js";import"./info-C_WL5t3o.js";import"./Popover-Cn8zo7bE.js";import"./check-DX4_yozZ.js";import"./useToggleState-BjvLjD6y.js";import"./TextFieldBase-gnGT8lg0.js";import"./Input-DFZxFk2j.js";import"./useTextField-CyrS5BG0.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-W0vrENo7.js";import"./DragAndDrop-CfOVhm88.js";import"./inertValue-BrRpBS-R.js";import"./useListState-T5MC22-o.js";import"./TagGroup-Biwz6as6.js";import"./useHighlightSelectionDescription-Beji8SQD.js";import"./useUpdateEffect-Bsb1Gk4E.js";import"./useHasTabbableChild-DRS95lGL.js";import"./chevron-down-C6dUQlqw.js";import"./Virtualizer-B0OOwHBi.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
