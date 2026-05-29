import{j as e}from"./iframe-CDEaDO_F.js";import{c}from"./Form-CMCMqyJK.js";import{G as d}from"./Grid-kvoPpcSF.js";import{G as i}from"./GridItem-BExZD8BJ.js";import{a as x,R as u}from"./Radio-CplAOlWS.js";import{C as I}from"./CheckboxGroup-BCOCsWFM.js";import{C as G}from"./Checkbox-DazsdxzI.js";import{T as t}from"./TextField-hFunfDLT.js";import{S as l}from"./Select-BK3FzYHl.js";import{L as p}from"./ListBoxItem-ut18vOau.js";import{B as a}from"./Button-BRFWodMz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D6D_N6j5.js";import"./utils-OMrxCTYB.js";import"./clsx-B-dksMZM.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./clsx-Ciqy0D92.js";import"./Group-KrKl25VN.js";import"./FieldError-28bsvyp8.js";import"./Text-BM9CJ7ZD.js";import"./Text-I0yIqnfi.js";import"./Button-VtRoDegr.js";import"./Hidden-DV64-eP0.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./SelectionIndicator-1032K0bl.js";import"./useField-DLK70uIH.js";import"./VisuallyHidden-D_heY0RE.js";import"./useControlledState-DL-5sHQJ.js";import"./Label-BBH0OudU.js";import"./Dialog-CkXE7XRd.js";import"./RSPContexts-ByGtY0Qq.js";import"./OverlayArrow-BfqAbg3c.js";import"./useResizeObserver-BlflmIY_.js";import"./Collection-DpglE9eU.js";import"./index-oXSIQico.js";import"./Separator-C1yvXGtZ.js";import"./SelectionManager-BONC5nvo.js";import"./useEvent-CWkInWDY.js";import"./scrollIntoView-Bi7y7USg.js";import"./useDescription-DD-0CJF1.js";import"./ListKeyboardDelegate-DjIVihIp.js";import"./PressResponder-CemorAbx.js";import"./useLocalizedStringFormatter-BYvnlSsE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPjnfsCI.js";import"./getScrollParent-DqH0lpOQ.js";import"./ModalOverlay-oqnbdp2F.js";import"./x-jshiSbcB.js";import"./createLucideIcon-B5m9rABL.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./Heading-CLMFJaeB.js";import"./info-BZqraZA3.js";import"./Popover-Dn0J3jUe.js";import"./check-D90t5UYS.js";import"./useToggleState-CoyhYIoY.js";import"./TextFieldBase-B6g_i_ol.js";import"./Input-DsPCZRUt.js";import"./useTextField-BtLcvdq1.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DmFnqPYL.js";import"./DragAndDrop-P92mhDFu.js";import"./inertValue-DgsoyWHb.js";import"./useListState-e4jjO6ID.js";import"./TagGroup-DaKMHS9k.js";import"./useHighlightSelectionDescription-DIRy1bOg.js";import"./useUpdateEffect-B1msOMiu.js";import"./useHasTabbableChild-DCYlqm56.js";import"./chevron-down-Zhr9COnU.js";import"./Virtualizer-bSk3RjOC.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
