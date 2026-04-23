import{j as e}from"./iframe-CUW_txz6.js";import{c}from"./Form-DNzUj6ms.js";import{G as d}from"./Grid-C1MKydlq.js";import{G as i}from"./GridItem-CkFATJTw.js";import{a as x,R as u}from"./Radio-C_7HmnKu.js";import{C as I}from"./CheckboxGroup-CJcRW33h.js";import{C as G}from"./Checkbox-CkRoptQj.js";import{T as t}from"./TextField-DUHDyQbO.js";import{S as l}from"./Select-BXvMPH0U.js";import{L as p}from"./ListBoxItem-Dl-hn4gk.js";import{B as a}from"./Button-yberURbp.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Ow8z5BMJ.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./clsx-Ciqy0D92.js";import"./Group-C3Ht6QcB.js";import"./FieldError-BBiP0jfO.js";import"./Text-Bi2kB5GC.js";import"./Text-DvPi9pFM.js";import"./Button-DJT34vsz.js";import"./Hidden-C6dZGZNF.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./SelectionIndicator-Byd9q1Hf.js";import"./useField-CLP_zsZ0.js";import"./VisuallyHidden-C2eTcyAK.js";import"./useControlledState-BuDrosJG.js";import"./Label-CzaPhy5Y.js";import"./Dialog-D7fJEhAE.js";import"./RSPContexts-DYx0iF5j.js";import"./OverlayArrow-B36CX_JF.js";import"./useResizeObserver-B50A-UTA.js";import"./Collection-3mxxC9eU.js";import"./index-DjmmA6Oh.js";import"./Separator-CbzyhqqZ.js";import"./SelectionManager-aJ-j4EKa.js";import"./useEvent-CHrrjSKK.js";import"./scrollIntoView-D8kVtkIc.js";import"./useDescription-DeV7fvLF.js";import"./ListKeyboardDelegate-DyYd3gII.js";import"./PressResponder-DTTKATG8.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGNa_fMh.js";import"./getScrollParent-DWW6JN_D.js";import"./ModalOverlay-Dd-5tipM.js";import"./x-pwSsQ8xV.js";import"./createLucideIcon-Cc0DwuLE.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Heading-rIzkF3u3.js";import"./info-BGBnsoll.js";import"./Popover-DgFfSiXP.js";import"./check-LolfXL1H.js";import"./useToggleState-DfZegFVL.js";import"./TextFieldBase-1OGcydtw.js";import"./Input-DpnB_kNM.js";import"./useTextField-DOX9ofpd.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DlX14AY9.js";import"./DragAndDrop-oQdb3Ig6.js";import"./inertValue-Bfj06wpd.js";import"./useListState-uPoOmyM5.js";import"./TagGroup-B-apQB7O.js";import"./useHighlightSelectionDescription-BU8VFG1L.js";import"./useUpdateEffect-BFPmFjx-.js";import"./useHasTabbableChild-BBqsLMs3.js";import"./chevron-down-O6qc83Am.js";import"./Virtualizer-xlPPt1hL.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
