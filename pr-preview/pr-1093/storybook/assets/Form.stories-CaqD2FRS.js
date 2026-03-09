import{j as e}from"./iframe-DsfFtxS2.js";import{$ as c}from"./Form-D_rqxDoy.js";import{G as d}from"./Grid-CkbbkvtR.js";import{G as i}from"./GridItem-DsV9kw7Z.js";import{a as x,R as u}from"./Radio-CSh00ZHl.js";import{C as I}from"./CheckboxGroup-p_WoKCuP.js";import{C as G}from"./Checkbox-DvPh3ViJ.js";import{T as t}from"./TextField-k6QPGyzv.js";import{S as l}from"./Select-BL3mzKvF.js";import{L as p}from"./ListBoxItem-Mhv-unoo.js";import{B as a}from"./Button-4tH0viW2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CiHeKsB_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B-yMnowL.js";import"./useFocusRing-1z_ufVt_.js";import"./index-DgLlfILw.js";import"./index-DnB7KTmW.js";import"./clsx-Ciqy0D92.js";import"./Group-DauG9CdL.js";import"./FieldError-87EUhy5h.js";import"./Text-DAqpMgoy.js";import"./Text-BpQb7gs6.js";import"./Button-BUGcuGOU.js";import"./Hidden-Bs3ILcuK.js";import"./useLabels-MWmyC4Dm.js";import"./useButton-D8CT0FKr.js";import"./SelectionIndicator-ByFt_7yz.js";import"./useField-DWMKBFFt.js";import"./VisuallyHidden-DfQN_1Bp.js";import"./useControlledState-DnlDaLL1.js";import"./Label-CzWde2FY.js";import"./Dialog-cfG1ezoC.js";import"./RSPContexts-jD7fw_oN.js";import"./OverlayArrow-B61mHoC6.js";import"./useResizeObserver-C10VmoZ0.js";import"./Collection-CYyT56Hz.js";import"./index-XJC_7r9v.js";import"./Separator-RByjOD7L.js";import"./SelectionManager-xps8xe94.js";import"./useEvent-Ck1U2V-h.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D22BvyuU.js";import"./ListKeyboardDelegate-C0g_y3Uk.js";import"./PressResponder-Dm__tjHd.js";import"./useLocalizedStringFormatter-BJ5DWpkF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXEqQox9.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BIaZFj52.js";import"./createLucideIcon-B2R5tymB.js";import"./useLocalizedStringFormatter-DZ4cvEMe.js";import"./Heading-CG1qb6l2.js";import"./info-DJ6Oy54s.js";import"./Popover-Cz1opACQ.js";import"./check-BFjo-E2y.js";import"./useToggleState-B-5QtxSP.js";import"./TextFieldBase-FKKoGE1k.js";import"./Input-BbbPZupP.js";import"./useTextField-31tCsnnV.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ZWGTHupr.js";import"./DragAndDrop-CCYyl8VQ.js";import"./inertValue-D8wczNMJ.js";import"./useListState-YEZ_yKpN.js";import"./TagGroup-C0m1dnu3.js";import"./useHighlightSelectionDescription-CmUM6mCC.js";import"./useUpdateEffect-bv54uylV.js";import"./useHasTabbableChild-yNk8wAC6.js";import"./chevron-down-BTWJAbcm.js";import"./Virtualizer-C_L2zRo7.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
