import{j as e}from"./iframe-BpM72smZ.js";import{$ as c}from"./Form-FPFt4zkx.js";import{G as d}from"./Grid-DDX--xPl.js";import{G as i}from"./GridItem-DyOK1Jj5.js";import{a as x,R as u}from"./Radio-CsDvmxHZ.js";import{C as I}from"./CheckboxGroup-BohU2WRe.js";import{C as G}from"./Checkbox-8kNPtuLS.js";import{T as t}from"./TextField-CJ6jPXta.js";import{S as l}from"./Select-htlIrUCT.js";import{L as p}from"./ListBoxItem-D5KrQJd7.js";import{B as a}from"./Button-DN_yypM1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSddBXAp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CSg5xMEa.js";import"./useFocusRing-B6IWB5Bj.js";import"./index-B1wLjkVC.js";import"./index-D8NVrDNK.js";import"./clsx-Ciqy0D92.js";import"./Group-Bije_k8r.js";import"./FieldError-B0e9S7Wf.js";import"./Text-DmFT7SRM.js";import"./Text-CSnhZWSM.js";import"./Button-7Fdf0MuP.js";import"./Hidden-CTCJ1xpV.js";import"./useLabels-Ea9VM8la.js";import"./useButton--NSdMDnV.js";import"./SelectionIndicator-DF3FxvI0.js";import"./useField-BGaaNjBC.js";import"./VisuallyHidden-DUZEOl0B.js";import"./useControlledState-uArUOdKs.js";import"./Label-DV9XF5g0.js";import"./Dialog-BSRGfE2e.js";import"./RSPContexts-D1rmZtkk.js";import"./OverlayArrow-BJ5HPsXX.js";import"./useResizeObserver-2BdCSdQg.js";import"./Collection-ND38OKSz.js";import"./index-DKxQIn9a.js";import"./Separator-rmji4_VZ.js";import"./SelectionManager-BHK_Z65C.js";import"./useEvent-CMTJTOYm.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B07oMV39.js";import"./ListKeyboardDelegate-pLN-qXGz.js";import"./PressResponder-CZ5wDDKP.js";import"./useLocalizedStringFormatter-BjnJAUau.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkw_x4CV.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Dk78go1P.js";import"./createLucideIcon-CC1B6wl6.js";import"./useLocalizedStringFormatter-tgvWDsgd.js";import"./Heading-DVqoRldl.js";import"./info-BR8TOA7y.js";import"./Popover-DfM2ENbz.js";import"./check-B9Yb0FMt.js";import"./useToggleState-CHiz6xLs.js";import"./TextFieldBase-Dlm8kDkB.js";import"./Input-C1r-Whkg.js";import"./useTextField-D5BmevWh.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BqtsiSpJ.js";import"./DragAndDrop-D2-uPOCN.js";import"./inertValue-C0W4utbr.js";import"./useListState-C1qUv9Rz.js";import"./Tag-bjCaQEoq.js";import"./useHighlightSelectionDescription-C2Z69wAd.js";import"./useUpdateEffect-C5jdWMwh.js";import"./useHasTabbableChild-D0x_py2J.js";import"./chevron-down-Clplw9bh.js";import"./Virtualizer-Dewdcd9U.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
