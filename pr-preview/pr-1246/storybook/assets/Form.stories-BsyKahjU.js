import{j as e}from"./iframe-CkvNFrYQ.js";import{c}from"./Form-CWYzH3eB.js";import{G as d}from"./Grid-BWHppO_m.js";import{G as i}from"./GridItem-OFz4Xc7J.js";import{a as x,R as u}from"./Radio-B603QYGT.js";import{C as I}from"./CheckboxGroup-BmvuInDE.js";import{C as G}from"./Checkbox-BjDCCwZt.js";import{T as t}from"./TextField-BRaHDKri.js";import{S as l}from"./Select-huWFoW55.js";import{L as p}from"./ListBoxItem-7KHRm1cJ.js";import{B as a}from"./Button-D17vaezS.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DW5q3Sep.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./clsx-Ciqy0D92.js";import"./Group-C9L071lP.js";import"./FieldError-BN50R8Gs.js";import"./Text-DIpvUzoX.js";import"./Text-DsB1bVac.js";import"./Button-vUvfAWls.js";import"./Hidden-Bsx77DlA.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./SelectionIndicator-U0aQAuvT.js";import"./useField-C89JW0cR.js";import"./VisuallyHidden-DC7QTvoq.js";import"./useControlledState-Dmid9ay2.js";import"./Label-D_35a4FG.js";import"./Dialog-Cwzi9hHL.js";import"./RSPContexts-DGIABOWW.js";import"./OverlayArrow-DXo6ErSR.js";import"./useResizeObserver-qcJ7l2JQ.js";import"./Collection-B_3MCUvb.js";import"./index-TiB-bmTE.js";import"./Separator-D9Pii1fS.js";import"./SelectionManager-BSCYUInq.js";import"./useEvent-DbWchgAK.js";import"./scrollIntoView-CCwmtkiF.js";import"./useDescription-CapqPYkv.js";import"./ListKeyboardDelegate-BEgF-Rly.js";import"./PressResponder-Bvpu2RL6.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By-NOSqI.js";import"./getScrollParent-Dj3KhtFY.js";import"./ModalOverlay-DfM4Ks9W.js";import"./x-DsRbZUfb.js";import"./createLucideIcon-CeEwKqzx.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Heading-Bxkil-M5.js";import"./info-IKa_d3Rd.js";import"./Popover-BtXLH4Y0.js";import"./check-CejbZSkD.js";import"./useToggleState-8XREYqB5.js";import"./TextFieldBase-B3HZVH9j.js";import"./Input-D72VaGU6.js";import"./useTextField-B4kTnNrI.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bp1RuQwe.js";import"./DragAndDrop-Ct342tjl.js";import"./inertValue-BZ5WLW1k.js";import"./useListState-BKTcqct-.js";import"./TagGroup-B8cl7p_j.js";import"./useHighlightSelectionDescription-C5OpJZrd.js";import"./useUpdateEffect-Hr8RCabG.js";import"./useHasTabbableChild-DJZB_qp-.js";import"./chevron-down-BQFEfQJD.js";import"./Virtualizer-6hxuphkL.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
