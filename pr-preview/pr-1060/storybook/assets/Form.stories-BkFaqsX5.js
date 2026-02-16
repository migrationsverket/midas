import{j as e}from"./iframe-DzQsNUlN.js";import{$ as c}from"./Form-BeAR6TLt.js";import{G as d}from"./Grid-DaNH1wwN.js";import{G as i}from"./GridItem-9ILYC0v4.js";import{a as x,R as u}from"./Radio-CVI0JnF9.js";import{C as I}from"./CheckboxGroup-9pLyVw60.js";import{C as G}from"./Checkbox-Cbyp8FES.js";import{T as t}from"./TextField-B29SO7s-.js";import{S as l}from"./Select-C3b5x4DD.js";import{L as p}from"./ListBoxItem-CnqTtPsZ.js";import{B as a}from"./Button-D9Fs-ZCK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BK4Wbdgl.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D42naTnG.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./clsx-Ciqy0D92.js";import"./Group-DEVosZCD.js";import"./FieldError-DdUwEQrU.js";import"./Text-B9j4IbHz.js";import"./Text-DQ3iFp2f.js";import"./Button-B-ooyoCL.js";import"./Hidden-BJckUxlD.js";import"./number-DfkVkf0F.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./SelectionIndicator-KGcuLJQY.js";import"./useField-B2ZM_ZrS.js";import"./VisuallyHidden-ukn47BBG.js";import"./useControlledState-BDeuRVdh.js";import"./Label-1qazq_on.js";import"./Dialog-LG_3aT-X.js";import"./RSPContexts-Bo3qcagQ.js";import"./OverlayArrow-CstN0B1C.js";import"./useResizeObserver-DL5KAaCe.js";import"./Collection-DfWP-8XQ.js";import"./index-CG45YEOG.js";import"./Separator-B9l0ixbi.js";import"./SelectionManager-G1dsFni-.js";import"./useEvent-DPJfrH0C.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CghOEtAM.js";import"./ListKeyboardDelegate-C7E5D8Pm.js";import"./PressResponder-CJ1jfwsf.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Y2lLmc0U.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-C-1Lneyt.js";import"./x-euwJmRQG.js";import"./createLucideIcon-BcyF_Y89.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./Heading-DRrzocmn.js";import"./info-mZDG11IN.js";import"./Popover-BdJuk0ES.js";import"./check-C9oHi_RA.js";import"./useToggleState-a0alaVyJ.js";import"./TextFieldBase-CUXB2iMi.js";import"./TextField-D9vKoWQU.js";import"./Input-BomnZ-U8.js";import"./useTextField-B_FDF847.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C0KVjz_s.js";import"./DragAndDrop-ufUCrBIo.js";import"./inertValue-DLjfQkDI.js";import"./useListState-6jvXl2S0.js";import"./Tag-BdlSPj93.js";import"./useHighlightSelectionDescription-DKPmrDgg.js";import"./useUpdateEffect-CscfdfxB.js";import"./useHasTabbableChild-AUv5JIdi.js";import"./chevron-down-DLJoI9m8.js";import"./Virtualizer-BraXcxYs.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
