import{j as e}from"./iframe-BB7xjXo9.js";import{$ as c}from"./Form-B-Za89Dc.js";import{G as d}from"./Grid-BFw6aeBi.js";import{G as i}from"./GridItem-DAvXgp-Z.js";import{a as x,R as u}from"./Radio-cDDJD0tJ.js";import{C as I}from"./CheckboxGroup-CY6n0NBO.js";import{C as G}from"./Checkbox-Dj2a_83T.js";import{T as t}from"./TextField-BbZINX10.js";import{S as l}from"./Select-BD2R9yCw.js";import{L as p}from"./ListBoxItem-DtxO-woq.js";import{B as a}from"./Button-C22OOxtQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dvy0y2aN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DQxousKG.js";import"./useFocusRing-CktrVIaE.js";import"./index-C09hS3mR.js";import"./index-B8nO0JsZ.js";import"./clsx-Ciqy0D92.js";import"./Group-DuVpEFpY.js";import"./FieldError-DiGNmRuv.js";import"./Text-CLZT0tYL.js";import"./Text-CpUAtCa1.js";import"./Button-BkFJO1eK.js";import"./Hidden-7SCFpwar.js";import"./number-DfkVkf0F.js";import"./useLabels-B4AtxOYQ.js";import"./useButton-Bm946jai.js";import"./SelectionIndicator-DTX9bUP0.js";import"./useField-BdVdo0-E.js";import"./VisuallyHidden-CR7zfsA4.js";import"./useControlledState-Cfde8CUP.js";import"./Label-DTcS8O-X.js";import"./Dialog-BFigsiQU.js";import"./RSPContexts-D2NFs19Y.js";import"./OverlayArrow-BUingdP0.js";import"./useResizeObserver-C3AGslVR.js";import"./Collection-DNeu2an7.js";import"./index-BWQBBC6S.js";import"./Separator-DxoFAerF.js";import"./SelectionManager-CyLtq4iJ.js";import"./useEvent-BMI0Onkw.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Ct3uDuK8.js";import"./ListKeyboardDelegate-DihKRIfe.js";import"./PressResponder-CobclrHp.js";import"./useLocalizedStringFormatter-CVUyHfN-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BlCy8TIS.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-qX-DO-vR.js";import"./x-Dc3uFHWe.js";import"./createLucideIcon-3X7COU7u.js";import"./useLocalizedStringFormatter-D-8KGrO3.js";import"./Heading-DIypV1uE.js";import"./info-cN5kNVqQ.js";import"./Popover-DBK9DmTS.js";import"./check-Ctl5eiDY.js";import"./useToggleState-B6EvRaQb.js";import"./TextFieldBase-CmpfaP9d.js";import"./Input-B84_xjya.js";import"./useTextField-D9jJj16b.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cu1E2jPX.js";import"./DragAndDrop-C5rbG92B.js";import"./inertValue-BOhDx6Zk.js";import"./useListState-B-eQbb5d.js";import"./Tag-CUChA2P3.js";import"./useHighlightSelectionDescription-BTkg5pdy.js";import"./useUpdateEffect-CFbfYyJZ.js";import"./useHasTabbableChild-Ddq0yJuL.js";import"./chevron-down-GOBePNbb.js";import"./Virtualizer-DSR3fFQ4.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
