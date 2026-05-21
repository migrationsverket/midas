import{j as e}from"./iframe-BXzs3x0C.js";import{c}from"./Form-BXZvEm0b.js";import{G as d}from"./Grid-COdl9Mha.js";import{G as i}from"./GridItem-B1CZ4k03.js";import{a as x,R as u}from"./Radio-BGYhS1Bw.js";import{C as I}from"./CheckboxGroup-BNxnIbSZ.js";import{C as G}from"./Checkbox-DrV7U7_H.js";import{T as t}from"./TextField-8c1uFL8P.js";import{S as l}from"./Select-BVQOrqr_.js";import{L as p}from"./ListBoxItem-zJnf0Se-.js";import{B as a}from"./Button-Bvp28ihJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DAr84UVu.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./clsx-Ciqy0D92.js";import"./Group-Ct6065UP.js";import"./FieldError-ZWe9d950.js";import"./Text-a0ukmHPT.js";import"./Text-DYh5wK03.js";import"./Button-_6aq1n6B.js";import"./Hidden-HpZioBNJ.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./SelectionIndicator-BG5WiYa3.js";import"./useField-B3Bcv_v3.js";import"./VisuallyHidden-C6-1r25j.js";import"./useControlledState-DXnq9ftx.js";import"./Label-BBep1N8t.js";import"./Dialog-BEMaGKOQ.js";import"./RSPContexts-CQe6j-NN.js";import"./OverlayArrow-CQqIg-Jb.js";import"./useResizeObserver-CEMKu04O.js";import"./Collection-CPe6OLkZ.js";import"./index-BK7PRc4P.js";import"./Separator-B0USoDoM.js";import"./SelectionManager-BeubQEj5.js";import"./useEvent-Bna1V34X.js";import"./scrollIntoView-DmyPyYUI.js";import"./useDescription-BDCx7FV_.js";import"./ListKeyboardDelegate-C5EkxWNC.js";import"./PressResponder-DIcn1mDB.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-s3i8KAlX.js";import"./getScrollParent-CeZ4u_Xo.js";import"./ModalOverlay-CK8WAiZ8.js";import"./x-BmIXIepj.js";import"./createLucideIcon-DAXq1X88.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Heading-CccHM0rx.js";import"./info-D2DDSkAW.js";import"./Popover-DDaDm9KL.js";import"./check-CDX3eKgG.js";import"./useToggleState-BVvEJoaZ.js";import"./TextFieldBase-lqxoD9oy.js";import"./Input-D0hNwtRc.js";import"./useTextField-BV2_ohzC.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DQ2Jjh-4.js";import"./DragAndDrop-DMmSoamv.js";import"./inertValue-C4QuZyNL.js";import"./useListState-wtNBXgMq.js";import"./TagGroup-CrFo4VzD.js";import"./useHighlightSelectionDescription-BUo0JnlK.js";import"./useUpdateEffect-CyCKLu2a.js";import"./useHasTabbableChild-C0etAkR_.js";import"./chevron-down-1nMUQnB4.js";import"./Virtualizer-Cwv9PNYv.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
