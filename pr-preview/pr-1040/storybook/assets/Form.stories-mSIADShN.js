import{j as e}from"./iframe-Bu2zzzE-.js";import{$ as c}from"./Form-BrEUFrti.js";import{G as d}from"./Grid-CeUkliFw.js";import{G as i}from"./GridItem-CLkj_55L.js";import{a as x,R as u}from"./Radio-CXR8KHWl.js";import{C as I}from"./CheckboxGroup-mWN-gfqY.js";import{C as G}from"./Checkbox-CTviHg7C.js";import{T as t}from"./TextField-oDjOxJAE.js";import{S as l}from"./Select-TtdLwFqQ.js";import{L as p}from"./ListBoxItem-B11YrpgH.js";import{B as a}from"./Button-q_TKGLf8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D4qoxq6V.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CYLG9fgC.js";import"./useFocusRing-YWhjqEgC.js";import"./index-B4VLM8wj.js";import"./index-CLepp-yy.js";import"./clsx-Ciqy0D92.js";import"./Group-BY8-8PfZ.js";import"./FieldError-C-kLbmfj.js";import"./Text-CyZW-0MA.js";import"./Text-CbpLUl1P.js";import"./Button-S1cZ3oDo.js";import"./Hidden-B80qSbZA.js";import"./useLabels-CBl0gRZS.js";import"./useButton-D1KNfoAL.js";import"./SelectionIndicator-DiW9jQwU.js";import"./useField-wWbyNm1N.js";import"./VisuallyHidden-DvEZM9Lw.js";import"./useControlledState-DGpDrNxO.js";import"./Label-DrW1IDND.js";import"./Dialog-BEckTAmw.js";import"./RSPContexts-DghJNKta.js";import"./OverlayArrow-BDsNbTge.js";import"./useResizeObserver-d3X9sJcN.js";import"./Collection-CZk8itpW.js";import"./index-lgmsj2SM.js";import"./Separator-rJNtfHwJ.js";import"./SelectionManager-B1dioWQj.js";import"./useEvent-BM4aK4KA.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DN9USHD9.js";import"./ListKeyboardDelegate-2Wzj6kBl.js";import"./PressResponder-Ck7XRF-Q.js";import"./useLocalizedStringFormatter-Bgu754vE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CIZ16NRu.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-dhS2SloF.js";import"./createLucideIcon-DOjvHL5l.js";import"./useLocalizedStringFormatter-Dt6zB3aB.js";import"./Heading-DmmunIUe.js";import"./info-D6UN05sj.js";import"./Popover-MYxmXvPm.js";import"./check-DZppye7Z.js";import"./useToggleState-D3W7VI4z.js";import"./TextFieldBase-DsATsc7v.js";import"./TextField-Bs6aDF_N.js";import"./Input-Do5bfAkw.js";import"./useTextField-Dr9sigZv.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BPo7Jcqs.js";import"./DragAndDrop-Cs9V-qh7.js";import"./inertValue-CT4EsmNv.js";import"./useListState-BGuFYko2.js";import"./Tag-Cc2Umfw2.js";import"./useHighlightSelectionDescription-BYu6kPLF.js";import"./useUpdateEffect-BxmxfV1Y.js";import"./useHasTabbableChild-d06Xt_kK.js";import"./chevron-down-DsuBH7Hj.js";import"./Virtualizer-BXpZ_H2O.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
