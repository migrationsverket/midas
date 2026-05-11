import{j as e}from"./iframe-CWKpWNkk.js";import{c}from"./Form-ClSFU7sX.js";import{G as d}from"./Grid-CRa6hk9u.js";import{G as i}from"./GridItem-aY3NCcGI.js";import{a as x,R as u}from"./Radio-myhIcyak.js";import{C as I}from"./CheckboxGroup-BJ5W0TFN.js";import{C as G}from"./Checkbox-DglGRtgS.js";import{T as t}from"./TextField-CrOiwtg3.js";import{S as l}from"./Select-UYAzX9zU.js";import{L as p}from"./ListBoxItem-BR_YulQU.js";import{B as a}from"./Button-WdsjujPh.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CpL5jV2W.js";import"./utils-DZaHz_Vy.js";import"./clsx-B-dksMZM.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./clsx-Ciqy0D92.js";import"./Group-C9US1aCF.js";import"./FieldError-CQ-FvnYz.js";import"./Text-C7LaV_aB.js";import"./Text-Ds_oVnWP.js";import"./Button-apqjWUoz.js";import"./Hidden-bt019v0w.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./SelectionIndicator-DXuHsU9n.js";import"./useField-CPp_IGdL.js";import"./VisuallyHidden-CUqCo7Kt.js";import"./useControlledState-DvoS3sKo.js";import"./Label-DOnkAzhc.js";import"./Dialog-oKb8weP7.js";import"./RSPContexts-BCpmha9C.js";import"./OverlayArrow-BQEkmKGr.js";import"./useResizeObserver-DF1U3k9v.js";import"./Collection-B8p0MI6F.js";import"./index-DpCjz9aE.js";import"./Separator-B3w0uZHa.js";import"./SelectionManager-BLRpOlsc.js";import"./useEvent-Bvf1pRIU.js";import"./scrollIntoView-EiYcHJPI.js";import"./useDescription-DoPJm1n-.js";import"./ListKeyboardDelegate-EIc5NKm6.js";import"./PressResponder-D9mL1KKw.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuvQWEod.js";import"./getScrollParent-8ZOlHmZ1.js";import"./ModalOverlay-DEjIIPXs.js";import"./x-BvIy6Ou7.js";import"./createLucideIcon-DmuvpfBU.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Heading-D-lMrc2Q.js";import"./info-Cy_crO9Y.js";import"./Popover-B5gHq_qy.js";import"./check-DsRVGfFf.js";import"./useToggleState-ny1TT4OT.js";import"./TextFieldBase-QnRtYC6f.js";import"./Input-Dl4b6tmI.js";import"./useTextField-CSQ8xXA8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-erjU510L.js";import"./DragAndDrop-DSJ8AIiX.js";import"./inertValue-D0Tb-67e.js";import"./useListState-CMxSqw6G.js";import"./TagGroup-BeU2tpPS.js";import"./useHighlightSelectionDescription-BCLjXpE-.js";import"./useUpdateEffect-BAAXu-b_.js";import"./useHasTabbableChild-9C3zyikp.js";import"./chevron-down-Bau7gudF.js";import"./Virtualizer-DM4Lxpng.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
