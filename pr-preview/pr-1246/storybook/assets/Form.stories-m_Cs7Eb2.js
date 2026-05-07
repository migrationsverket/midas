import{j as e}from"./iframe-Dy3Rw66z.js";import{c}from"./Form-wengfQtM.js";import{G as d}from"./Grid-BXjxV1AP.js";import{G as i}from"./GridItem-DpU0gQe4.js";import{a as x,R as u}from"./Radio-cxW2MPaq.js";import{C as I}from"./CheckboxGroup-ClOjVjgJ.js";import{C as G}from"./Checkbox-DEfX6SC9.js";import{T as t}from"./TextField-DsyFTRzW.js";import{S as l}from"./Select-C5nt8Wfa.js";import{L as p}from"./ListBoxItem-CC26dmD_.js";import{B as a}from"./Button-Cl_Vf5i1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-OfUNuA-J.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./clsx-Ciqy0D92.js";import"./Group-m_LNitHg.js";import"./FieldError-CRQYtwdw.js";import"./Text-CjiLEpJA.js";import"./Text-BOYOdsAw.js";import"./Button-DWNrJ0qN.js";import"./Hidden-BiAiu52X.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./SelectionIndicator-D2Bve7Mk.js";import"./useField-CNgzpJU1.js";import"./VisuallyHidden-ke2bwlqF.js";import"./useControlledState-CujSUpWY.js";import"./Label-B4GuKtlR.js";import"./Dialog-bkeEYBpC.js";import"./RSPContexts-C0IvGsnI.js";import"./OverlayArrow-JVmpp-8a.js";import"./useResizeObserver-C9I6YQo1.js";import"./Collection-B5ifOA6k.js";import"./index-B66NDRAz.js";import"./Separator-CBYmdaTi.js";import"./SelectionManager-CfByhG1g.js";import"./useEvent-DcOaT4Vn.js";import"./scrollIntoView-DNWLzZw6.js";import"./useDescription-BNi02mG9.js";import"./ListKeyboardDelegate-BafHrM3o.js";import"./PressResponder-CmoNFUc_.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6VEx1B6.js";import"./getScrollParent-sGEfSoh4.js";import"./ModalOverlay-BHj0afcc.js";import"./x-BY2wOibv.js";import"./createLucideIcon-CGcaihwO.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Heading-CVTdlCZ7.js";import"./info-CP5B5L4I.js";import"./Popover-M-vUiPMz.js";import"./check-D_PuwPYh.js";import"./useToggleState-8NVzvk0V.js";import"./TextFieldBase-CxlPTmXs.js";import"./Input-DYmzIH_X.js";import"./useTextField-D0gzukQn.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CVKiEa3F.js";import"./DragAndDrop-BMJcSO9_.js";import"./inertValue-C5lU86JA.js";import"./useListState-CwL70QV2.js";import"./TagGroup-C6r0jMgS.js";import"./useHighlightSelectionDescription-DYaqZ9Lq.js";import"./useUpdateEffect-tVGoV8hb.js";import"./useHasTabbableChild-BuNbKlDZ.js";import"./chevron-down-4EEoGNJf.js";import"./Virtualizer-DwsW1WvO.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
