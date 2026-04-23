import{j as e}from"./iframe-CM9gzC_-.js";import{c}from"./Form-C7eTyKCv.js";import{G as d}from"./Grid-hMkY4tHf.js";import{G as i}from"./GridItem-D_0M-Hze.js";import{a as x,R as u}from"./Radio-B2kFQGDZ.js";import{C as I}from"./CheckboxGroup-BTBhz0Z3.js";import{C as G}from"./Checkbox-DU66hm4C.js";import{T as t}from"./TextField-D8qexgeV.js";import{S as l}from"./Select-dLQka6iv.js";import{L as p}from"./ListBoxItem-g7uCoYSK.js";import{B as a}from"./Button-DVDe5XTB.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bz17EpSW.js";import"./utils-CXcBw8mX.js";import"./clsx-B-dksMZM.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./clsx-Ciqy0D92.js";import"./Group-CFJbaa2e.js";import"./FieldError-Br-BXIw9.js";import"./Text-Bft1iTTC.js";import"./Text-DvQTbzsU.js";import"./Button-4PfHMxFE.js";import"./Hidden-D0XxjEDh.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./SelectionIndicator-CXNqpn4L.js";import"./useField-DZeEaImT.js";import"./VisuallyHidden-CyPA52id.js";import"./useControlledState-D7RofSAB.js";import"./Label-DEaMeTX8.js";import"./Dialog-D2hci_5_.js";import"./RSPContexts-BGBhlXAt.js";import"./OverlayArrow-DDdq8LLH.js";import"./useResizeObserver-ChNZACRA.js";import"./Collection-BtQP2I1Q.js";import"./index-BDQxevPm.js";import"./Separator-Cz6RPDpT.js";import"./SelectionManager-CoSHJlpm.js";import"./useEvent-CmguT4Gg.js";import"./scrollIntoView-3rRtgk00.js";import"./useDescription-BQW7Zq6D.js";import"./ListKeyboardDelegate-DZJ2K8C0.js";import"./PressResponder-CMByKJLe.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-chQcOBj7.js";import"./getScrollParent-B7Te1-pw.js";import"./ModalOverlay-CDYj_QTs.js";import"./x-CRr9CCYv.js";import"./createLucideIcon-gLaeDi4P.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Heading-DcYuxKBt.js";import"./info-DSV1pWOH.js";import"./Popover-CpRqXlTL.js";import"./check-BFOc9BMq.js";import"./useToggleState-DzOz3edW.js";import"./TextFieldBase-CLWmP1Ll.js";import"./Input-Cgewi5HM.js";import"./useTextField-BsaCBvZg.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BF2eVmVQ.js";import"./DragAndDrop-BT8nfd50.js";import"./inertValue-Drt515ki.js";import"./useListState-D1qeYDMB.js";import"./TagGroup-Dw1QkBDO.js";import"./useHighlightSelectionDescription-BbjpRuFL.js";import"./useUpdateEffect-CdFwj8T2.js";import"./useHasTabbableChild-q2kzMOIK.js";import"./chevron-down-Cx3COGiv.js";import"./Virtualizer-CRDyhRW9.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
