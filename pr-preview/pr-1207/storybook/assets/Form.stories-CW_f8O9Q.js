import{j as e}from"./iframe-iqG9Nh4p.js";import{c}from"./Form-CbmDO35g.js";import{G as d}from"./Grid-Bo8I2euL.js";import{G as i}from"./GridItem-BdgNpXwq.js";import{a as x,R as u}from"./Radio-Dz-JxaGU.js";import{C as I}from"./CheckboxGroup-BpS_zY3n.js";import{C as G}from"./Checkbox-5oTqIDkb.js";import{T as t}from"./TextField-Ct3tPOOr.js";import{S as l}from"./Select-zNdlhC83.js";import{L as p}from"./ListBoxItem-PilFchSz.js";import{B as a}from"./Button-DtcyQC3H.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DlPMedN0.js";import"./utils-CoA-xVnF.js";import"./clsx-B-dksMZM.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./clsx-Ciqy0D92.js";import"./Group-Lj4AaGC3.js";import"./FieldError-BAXhhZix.js";import"./Text-CGCkUK8m.js";import"./Text-CSjoqRHi.js";import"./Button-DY22xJQl.js";import"./Hidden-CGqHEiYj.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./SelectionIndicator-xMaCnY94.js";import"./useField-BsvjlsG3.js";import"./VisuallyHidden-DzRCdULp.js";import"./useControlledState-_AGiuRBn.js";import"./Label-C5mNtC66.js";import"./Dialog-CW1jNIiP.js";import"./RSPContexts-DhG5bWz2.js";import"./OverlayArrow-di8VuV2e.js";import"./useResizeObserver-CbqIe_2D.js";import"./Collection-U_BfqLcj.js";import"./index-BLKoWDIL.js";import"./Separator-BWcDzKjK.js";import"./SelectionManager-mV9s15G1.js";import"./useEvent-BB-kg239.js";import"./scrollIntoView-BjOH4z_I.js";import"./useDescription-Cj0GwJ4J.js";import"./ListKeyboardDelegate-DdqydRaK.js";import"./PressResponder-CSABQyF4.js";import"./useLocalizedStringFormatter-Cghfuk7K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMO9jmw5.js";import"./getScrollParent-D-DaScmO.js";import"./x-ItA_xlKi.js";import"./createLucideIcon-Boi8XEVW.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./Heading-BP9YWUvV.js";import"./info-CObpy4VF.js";import"./Popover-BFBBT22R.js";import"./check-_q8zxWoL.js";import"./useToggleState-K4iyFcmu.js";import"./TextFieldBase-BuDgUV4j.js";import"./Input-C49iH8T-.js";import"./useTextField-DruNV9Kq.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CfGJeLCo.js";import"./DragAndDrop-CLUaf_jL.js";import"./inertValue-CXeFcZWn.js";import"./useListState-CfsekH89.js";import"./TagGroup-UqZr3YYz.js";import"./useHighlightSelectionDescription-BVuCNXt-.js";import"./useUpdateEffect-BJ9VVEyY.js";import"./useHasTabbableChild-DrZ9reqj.js";import"./chevron-down-UNOhVyKY.js";import"./Virtualizer-DeSZs6m9.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
