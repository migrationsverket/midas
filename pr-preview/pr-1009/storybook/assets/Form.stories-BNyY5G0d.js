import{j as e}from"./iframe-DnuCDSUx.js";import{$ as c}from"./Form-Cr6ZjpNe.js";import{G as d}from"./Grid-BKVGwtiy.js";import{G as i}from"./GridItem-BCR-BFaS.js";import{T as t}from"./TextField-C3mRjPxx.js";import{S as l}from"./Select-w_EZeiOF.js";import{B as a}from"./Button-dYVCYVgo.js";import{R as x,a as u}from"./Radio-BTM-Kd-Z.js";import{C as I}from"./CheckboxGroup-GBrL186B.js";import{C as G}from"./Checkbox-Dz1n6zca.js";import{L as p}from"./ListBoxItem-CDYU92YP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BCJeDJBm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHcJOJz_.js";import"./useFocusRing-CBqhz9c5.js";import"./index-BbskeeQH.js";import"./index-B7Z8Eyxh.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CAa1Ugvl.js";import"./TextField-CasggVt6.js";import"./FieldError-BbMD8n1O.js";import"./Text-C7HsrZUC.js";import"./Text-B2abyLCt.js";import"./RSPContexts-DFV1IoMw.js";import"./Group-Bc3PhLh2.js";import"./Input-DXvrEQrT.js";import"./Hidden-WrzVtlNW.js";import"./Button-DlLq5SIo.js";import"./useLabels-vpNmVZYd.js";import"./useButton-rZTjLr54.js";import"./useTextField-H-8t7opC.js";import"./useControlledState-BTGs3Wlx.js";import"./useField-txGP6Hv2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BHWiYazT.js";import"./Dialog-CPh1_-84.js";import"./OverlayArrow-DblK16e6.js";import"./useResizeObserver-Bo3ReS7k.js";import"./Collection-Ae8TderM.js";import"./index-BXqSFUSP.js";import"./Separator-DplFeifn.js";import"./SelectionManager-DO-zfREl.js";import"./useEvent-ErL6pKub.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BN0Qylsh.js";import"./useDescription-CmeyrCHK.js";import"./ListKeyboardDelegate-BY9B8zni.js";import"./PressResponder-BgQopFxD.js";import"./useLocalizedStringFormatter-hTpHsBhz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3xKCcSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-mqlBAgrk.js";import"./x-CumWaLE8.js";import"./createLucideIcon-DLtu9yR0.js";import"./useLocalizedStringFormatter-D6ETHzho.js";import"./Heading-w25QJ7GD.js";import"./info-DLj81B5_.js";import"./Popover-CxYgoTUG.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CTl6qpJp.js";import"./DragAndDrop-BruOYl9j.js";import"./inertValue-C0dfk_0h.js";import"./useListState-Bbtn9ugn.js";import"./Tag-Cg0_L7N5.js";import"./useHighlightSelectionDescription-tXkqnVsS.js";import"./useUpdateEffect-Czzvrg6M.js";import"./useHasTabbableChild-DOyyMRwq.js";import"./chevron-down-BFHDBp1V.js";import"./Button.module-Co5e5YHp.js";import"./check-tojK1YQU.js";import"./useToggleState-BPQ7iI7E.js";import"./Virtualizer--I9vE7-H.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
