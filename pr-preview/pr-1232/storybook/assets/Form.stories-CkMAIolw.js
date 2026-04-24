import{j as e}from"./iframe-IJuqoOmk.js";import{c}from"./Form-D4TqUibt.js";import{G as d}from"./Grid-BzTMTAVt.js";import{G as i}from"./GridItem-Cbyz_Zph.js";import{a as x,R as u}from"./Radio-Dvmho_TF.js";import{C as I}from"./CheckboxGroup-inhQZmny.js";import{C as G}from"./Checkbox-CANdvbbZ.js";import{T as t}from"./TextField-BG32DNIq.js";import{S as l}from"./Select-dl354yuM.js";import{L as p}from"./ListBoxItem-CceShMs6.js";import{B as a}from"./Button-DQFlWi2u.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CkLNsvno.js";import"./utils-B1FkGHW3.js";import"./clsx-B-dksMZM.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./clsx-Ciqy0D92.js";import"./Group-Dh2KQ9lo.js";import"./FieldError-BFehnrZy.js";import"./Text-B8nSOSOw.js";import"./Text-Dbv6zmdw.js";import"./Button-E9T7cgY3.js";import"./Hidden-DzRh-64e.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./SelectionIndicator-BxSO78Cy.js";import"./useField-C73EInUm.js";import"./VisuallyHidden-Bdyvpnxr.js";import"./useControlledState-DL7f2Wr3.js";import"./Label-HhRYMSA5.js";import"./Dialog-D2Gdenpy.js";import"./RSPContexts-BaJeT4Si.js";import"./OverlayArrow-B05urvva.js";import"./useResizeObserver-B_Aj4v-9.js";import"./Collection-Dbvuv6fS.js";import"./index-_UICZ5rp.js";import"./Separator-ButKc24M.js";import"./SelectionManager-DPPUnvtT.js";import"./useEvent-tP2LEsJ9.js";import"./scrollIntoView-Cek-eHKE.js";import"./useDescription--7_MWUV8.js";import"./ListKeyboardDelegate-OIAI4zXm.js";import"./PressResponder-C0Ft6gtK.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFB-t0y7.js";import"./getScrollParent-CQ3nADdi.js";import"./ModalOverlay-CuG1KHeC.js";import"./x-BhOMJrhI.js";import"./createLucideIcon-9OQLRRNP.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Heading-Crc-KCwN.js";import"./info-CW6QV4tx.js";import"./Popover-4MHobK71.js";import"./check-CjqUkIyP.js";import"./useToggleState-CaCY45Zr.js";import"./TextFieldBase-csDj7HpE.js";import"./Input-C9csjcmV.js";import"./useTextField-C2-ei7Yz.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CiWlgPJE.js";import"./DragAndDrop-Cz4BzUBm.js";import"./inertValue-D34pZZFP.js";import"./useListState-BG2FoM_G.js";import"./TagGroup-Dci6esjR.js";import"./useHighlightSelectionDescription-BXQjKKlY.js";import"./useUpdateEffect-Bw5hbbwF.js";import"./useHasTabbableChild-B3D98cHZ.js";import"./chevron-down-FntpTxAm.js";import"./Virtualizer-B_EDNxQ4.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
