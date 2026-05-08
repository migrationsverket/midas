import{j as e}from"./iframe-Wguf_Vhy.js";import{c}from"./Form-FggfkEks.js";import{G as d}from"./Grid-BL57_Hax.js";import{G as i}from"./GridItem-Cxw7QxsB.js";import{a as x,R as u}from"./Radio-BY-T5pVL.js";import{C as I}from"./CheckboxGroup-DJd4Zeqv.js";import{C as G}from"./Checkbox--I9LJBRa.js";import{T as t}from"./TextField-CC8tbmn6.js";import{S as l}from"./Select-CVC1N0hT.js";import{L as p}from"./ListBoxItem-sR9PDYiZ.js";import{B as a}from"./Button-CZM9PIob.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BMPGM_9a.js";import"./utils-Cayzu3dl.js";import"./clsx-B-dksMZM.js";import"./index-Bm1qHM15.js";import"./index-CtVtkHSB.js";import"./clsx-Ciqy0D92.js";import"./Group-C0LDHsLm.js";import"./FieldError-BgJaT6Rf.js";import"./Text-BApMudW2.js";import"./Text-D697qKcG.js";import"./Button-BzF2ZkA0.js";import"./Hidden-YVq9ta1r.js";import"./useLabel-tYdicVQf.js";import"./useLabels-vxl1SBYw.js";import"./useButton-CeOXStth.js";import"./SelectionIndicator-Ca_0lo5K.js";import"./useField-BDcsyyOt.js";import"./VisuallyHidden-kcCEeVgO.js";import"./useControlledState-BlF8Bv-9.js";import"./Label-BwphzhnD.js";import"./Dialog-BeohllCS.js";import"./RSPContexts-DhG_A9LD.js";import"./OverlayArrow-Vo-iL8qO.js";import"./useResizeObserver-B4uFZilJ.js";import"./Collection-DVuI5cgK.js";import"./index-C7F45JvX.js";import"./Separator-B11vY-6A.js";import"./SelectionManager-PUFdyFS7.js";import"./useEvent-DJgQxyut.js";import"./scrollIntoView-B9bW_vYG.js";import"./useDescription-eDDocBsi.js";import"./ListKeyboardDelegate-BoNyATYx.js";import"./PressResponder-D_DY215S.js";import"./useLocalizedStringFormatter-CLhcV9N0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRum0qO9.js";import"./getScrollParent-BHQ6aUJm.js";import"./ModalOverlay-289ygUXv.js";import"./x-C-si90AP.js";import"./createLucideIcon-2JkbB8ZB.js";import"./useLocalizedStringFormatter-CNmg9gE-.js";import"./Heading-CFOJwOMj.js";import"./info-BLgRDO_3.js";import"./Popover-CNJSBtqe.js";import"./check-6Zu3bBrH.js";import"./useToggleState-54V4PwhR.js";import"./TextFieldBase-D2JEizeh.js";import"./Input-Borbf7By.js";import"./useTextField-GAKGcDg8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BOg45_Ye.js";import"./DragAndDrop-c97xWJv3.js";import"./inertValue-CwXQc-Dz.js";import"./useListState-CeZ7-eTJ.js";import"./TagGroup-FQk903u4.js";import"./useHighlightSelectionDescription-D-WwJFMA.js";import"./useUpdateEffect-ZTrsLFWQ.js";import"./useHasTabbableChild-DkkXZur2.js";import"./chevron-down-BqIfa17R.js";import"./Virtualizer-BAH4QzQS.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
