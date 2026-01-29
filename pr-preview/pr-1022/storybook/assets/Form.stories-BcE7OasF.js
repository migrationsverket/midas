import{j as e}from"./iframe-BCXCe90E.js";import{$ as c}from"./Form-CtVU-881.js";import{G as d}from"./Grid-JVqTxGXV.js";import{G as i}from"./GridItem-BuT8E2Q2.js";import{T as t}from"./TextField-C26hj39i.js";import{S as l}from"./Select-DYhgEcrM.js";import{B as a}from"./Button-BS-I6Qwk.js";import{R as x,a as u}from"./Radio-BOYEyB56.js";import{C as I}from"./CheckboxGroup-OSddVKil.js";import{C as G}from"./Checkbox-kjRtHD0F.js";import{L as p}from"./ListBoxItem-Bl05Sm_q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B2hL7Xtf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CAH07Xla.js";import"./useFocusRing-Co2TT7uq.js";import"./index-76xwZrhG.js";import"./index-B-ZR8m7d.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BgNXRJWI.js";import"./TextField-BGxkX_et.js";import"./FieldError-DNJHuSL6.js";import"./Text-CYwVMw3N.js";import"./Text-fzRhbvnE.js";import"./RSPContexts-CVV_Wn8t.js";import"./Group-B31_kW0Y.js";import"./Input-B0TT6aJr.js";import"./Hidden-D9V9PO0C.js";import"./Button-z4xgqBUc.js";import"./useLabels-DbiDlhVN.js";import"./useButton-B4EsMdme.js";import"./useTextField-BlPhWzmL.js";import"./useControlledState-BL0GCU23.js";import"./useField-CLuxjErM.js";import"./TextField.module-1fNSVGjT.js";import"./Label-PTgkZzgo.js";import"./Dialog-giQh8Zxm.js";import"./OverlayArrow-rvG0Eb8p.js";import"./useResizeObserver-iLvwzQL8.js";import"./Collection-CgSxkCek.js";import"./index-vy3r0aE-.js";import"./Separator-usxipfbJ.js";import"./SelectionManager-DoV6tR3f.js";import"./useEvent-CwYHdveY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BG6RjwoQ.js";import"./useDescription-B6k3_lVu.js";import"./ListKeyboardDelegate-EBsbCgeV.js";import"./PressResponder-B-h0FrIV.js";import"./useLocalizedStringFormatter-CfJXxR3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPmfOGYn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DNi7GGMW.js";import"./x-7u9so2rQ.js";import"./createLucideIcon-D-C2mOoH.js";import"./useLocalizedStringFormatter-DS_myY-E.js";import"./Heading-DlCRUbGB.js";import"./info-YvDByK68.js";import"./Popover-0JZtF-Z2.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-4aTuhu-h.js";import"./DragAndDrop-ZP2uMO0e.js";import"./inertValue-25mSsNZ8.js";import"./useListState-C3jq8VDF.js";import"./Tag-CVhwEUiu.js";import"./useHighlightSelectionDescription-BndxHaE2.js";import"./useUpdateEffect-c2XD16BF.js";import"./useHasTabbableChild-D7GKcpXw.js";import"./chevron-down-WZVm7qIE.js";import"./Button.module-Co5e5YHp.js";import"./check-czZCZMX1.js";import"./useToggleState-JJW-DLaI.js";import"./Virtualizer-CH2aTAEy.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
