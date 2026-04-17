import{j as e}from"./iframe-DAlGZfQW.js";import{c}from"./Form-DSNATSPd.js";import{G as d}from"./Grid-DVjtmEBG.js";import{G as i}from"./GridItem-wzttHVTX.js";import{a as x,R as u}from"./Radio-C6fcHbxG.js";import{C as I}from"./CheckboxGroup-CDwg6VUR.js";import{C as G}from"./Checkbox-QpN8ctcU.js";import{T as t}from"./TextField-B1koq0Iz.js";import{S as l}from"./Select-DtHHzxJr.js";import{L as p}from"./ListBoxItem-DawsxthI.js";import{B as a}from"./Button-xgyBGP3u.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-aL1wDNV0.js";import"./utils-C0mXnx3L.js";import"./clsx-B-dksMZM.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./clsx-Ciqy0D92.js";import"./Group-BzULb40h.js";import"./FieldError-CkH1bdUQ.js";import"./Text-LSJ9RRHV.js";import"./Text-BD2SYZAb.js";import"./Button-DEU34lA6.js";import"./Hidden-o3xiVHpT.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./SelectionIndicator-D-XJWEBG.js";import"./useField-BW3jrAKK.js";import"./VisuallyHidden-CtB5gR65.js";import"./useControlledState-CvHTtUWm.js";import"./Label-x7AqFGig.js";import"./Dialog-oZrWN6-T.js";import"./RSPContexts-ogBeYVaG.js";import"./OverlayArrow-D9PTXaeg.js";import"./useResizeObserver-BmlX3wcb.js";import"./Collection-DdampRoJ.js";import"./index-Bt3b7xy3.js";import"./Separator-BDHwiclq.js";import"./SelectionManager-DJWipqTn.js";import"./useEvent-CF3bDdPT.js";import"./scrollIntoView-DhLsBgUV.js";import"./useDescription-7yGeAH-h.js";import"./ListKeyboardDelegate-2D-TSKOA.js";import"./PressResponder-BPzeGbel.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DykFtkea.js";import"./getScrollParent-CPI0vVZ2.js";import"./ModalOverlay-BGHVT9Lo.js";import"./x-4pQMUwmc.js";import"./createLucideIcon-D-D7lNm8.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Heading-7wa5xHuv.js";import"./info-CyGQFkmI.js";import"./Popover-4SaABhvX.js";import"./check-B19l-unv.js";import"./useToggleState-BJH-wfzk.js";import"./TextFieldBase-BurqOTv8.js";import"./Input--HBA1EQM.js";import"./useTextField-BdwaRRev.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BQ1dMfOE.js";import"./DragAndDrop-DW_74-Am.js";import"./inertValue-CROlb0j8.js";import"./useListState-CVQOXQRd.js";import"./TagGroup-DSD8V4t1.js";import"./useHighlightSelectionDescription-DR5tayqx.js";import"./useUpdateEffect-YgxQwquL.js";import"./useHasTabbableChild-DVW2HaS2.js";import"./chevron-down-CHXoOtBi.js";import"./Virtualizer-D9qebxmX.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
