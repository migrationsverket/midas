import{j as e}from"./iframe-DDrwZSUr.js";import{c}from"./Form-CrG6ievP.js";import{G as d}from"./Grid-Byw2vXXL.js";import{G as i}from"./GridItem-DKLT2-fr.js";import{a as x,R as u}from"./Radio-BKUfo57W.js";import{C as I}from"./CheckboxGroup-DzFzvJsp.js";import{C as G}from"./Checkbox-r_4UI1fM.js";import{T as t}from"./TextField-knUhISpR.js";import{S as l}from"./Select-Ck6sUtD2.js";import{L as p}from"./ListBoxItem-C1mP2FWK.js";import{B as a}from"./Button-B7DQCmWQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Co7KnI-2.js";import"./utils-fZpJvyFO.js";import"./clsx-B-dksMZM.js";import"./index-BDdESxF6.js";import"./index-2ekyzgHz.js";import"./clsx-Ciqy0D92.js";import"./Group-BdlcR2wJ.js";import"./FieldError-Dwx20Li1.js";import"./Text-C8zREkr5.js";import"./Text-CsbHuTMa.js";import"./Button-BBtH1XqU.js";import"./Hidden-BbxqZPAf.js";import"./useLabel-B-iHNEQ-.js";import"./useLabels-C-XwBesu.js";import"./useButton-DTzMuBwj.js";import"./SelectionIndicator-BA7AxvgT.js";import"./useField-CG9QcYio.js";import"./VisuallyHidden-Dfp2PUpV.js";import"./useControlledState-CoaU-25M.js";import"./Label-zFg_rysu.js";import"./Dialog-B_fIIImm.js";import"./RSPContexts-DBeOTN7L.js";import"./OverlayArrow-DdmkYdL-.js";import"./useResizeObserver-CAKse5q8.js";import"./Collection-DdrG0jfe.js";import"./index-D2JzpI49.js";import"./Separator-CyG8sSw9.js";import"./SelectionManager-Pdt05C2-.js";import"./useEvent-v--lpn9l.js";import"./scrollIntoView-Dk5DfXO6.js";import"./useDescription-Bqe-Zf64.js";import"./ListKeyboardDelegate-TygQEIe6.js";import"./PressResponder-D59WGRsi.js";import"./useLocalizedStringFormatter--0SdXCip.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RS1PcHRn.js";import"./getScrollParent-DB8NtD2D.js";import"./Modal-DKVo_TS5.js";import"./x-CGnJ7BA1.js";import"./createLucideIcon-YccigzIq.js";import"./useLocalizedStringFormatter-CaCMCUjI.js";import"./Heading-D6s1WcTy.js";import"./info-IOZI_zMf.js";import"./Popover-BKmRYmCQ.js";import"./check-Dnl8T4ia.js";import"./useToggleState-x7Sen6KP.js";import"./TextFieldBase-B889jH7X.js";import"./Input-BwSKmiC0.js";import"./useTextField-Ce454HzC.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C0z_mKDI.js";import"./DragAndDrop-DF_lpz6x.js";import"./inertValue-ELbYNg_D.js";import"./useListState-DPzFd2tG.js";import"./TagGroup-DKPJezmp.js";import"./useHighlightSelectionDescription-DNO8bR3m.js";import"./useUpdateEffect-C6rNjT7k.js";import"./useHasTabbableChild-DyAQ4h2W.js";import"./chevron-down-Bir2Rm-M.js";import"./Virtualizer-VLxEMXiW.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
