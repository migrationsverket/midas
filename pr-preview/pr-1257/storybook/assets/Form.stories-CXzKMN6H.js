import{j as e}from"./iframe-BgrJi1dO.js";import{c}from"./Form-BYQG3pHA.js";import{G as d}from"./Grid-ByymHTq-.js";import{G as i}from"./GridItem-BlV-FgIC.js";import{a as x,R as u}from"./Radio-DKiCccw1.js";import{C as I}from"./CheckboxGroup-DLpmTXqG.js";import{C as G}from"./Checkbox-l9jmAejL.js";import{T as t}from"./TextField-DU6e5Iq8.js";import{S as l}from"./Select-DFT135UJ.js";import{L as p}from"./ListBoxItem-DUeayZnv.js";import{B as a}from"./Button-B_tSlyMA.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BS9YqB89.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./clsx-Ciqy0D92.js";import"./Group-Cmswapzf.js";import"./FieldError-CK0qCQ53.js";import"./Text-BwTtjMDe.js";import"./Text-U40rqCZc.js";import"./Button-CzM4r0Q8.js";import"./Hidden-B-ocAKFH.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./SelectionIndicator--LpreWkm.js";import"./useField-DQisryMe.js";import"./VisuallyHidden-BtrvhTUL.js";import"./useControlledState-D4OQ_QAh.js";import"./Label-BdWzYcgR.js";import"./Dialog-Dx5PGef6.js";import"./RSPContexts-DvRO0UAG.js";import"./OverlayArrow-BxhCGC-N.js";import"./useResizeObserver-DsBe658C.js";import"./Collection-B928yBNj.js";import"./index-hMpkQrUO.js";import"./Separator-CFMUc0y5.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./scrollIntoView-BBkPTMW6.js";import"./useDescription-jfs0LzVP.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./PressResponder-oCaC_hiz.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoZL00eg.js";import"./getScrollParent-D_EmKFyf.js";import"./ModalOverlay-ByFsZVVk.js";import"./x-DF1DvVFb.js";import"./createLucideIcon-Xa2G53WL.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Heading-Pcy6kdR-.js";import"./info-CKFRirRj.js";import"./Popover-ClRnZYFV.js";import"./check-BaBKIaX1.js";import"./useToggleState-Ct7i5QmH.js";import"./TextFieldBase-DBzcXZKY.js";import"./Input-DXAbBT3f.js";import"./useTextField-Bc0a0Wov.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CXMNU2lb.js";import"./DragAndDrop-D9bWvhRF.js";import"./inertValue-hTPLVWAe.js";import"./useListState-DzDqmCya.js";import"./TagGroup-BF___Br3.js";import"./useHighlightSelectionDescription-M5bvHCnY.js";import"./useUpdateEffect-DbAMDDv6.js";import"./useHasTabbableChild-BBHF-kZN.js";import"./chevron-down-BRZCbCLL.js";import"./Virtualizer-ZqSPXoln.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
