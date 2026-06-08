import{j as e}from"./iframe-C8RsNfgP.js";import{c}from"./Form-_BW7u1yO.js";import{G as d}from"./Grid-vNC3Hs1R.js";import{G as i}from"./GridItem-CCo31tVO.js";import{a as x,R as u}from"./Radio-DxbdpUxX.js";import{C as I}from"./CheckboxGroup-Cx6Nvl6d.js";import{C as G}from"./Checkbox-7LsmJBQS.js";import{T as t}from"./TextField-DdrZsIxn.js";import{S as l}from"./Select-BTDgmBix.js";import{L as p}from"./ListBoxItem-MqLhp-js.js";import{B as a}from"./Button-Cfe9iLIu.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Cez6wS5f.js";import"./utils-CoNQ4mwz.js";import"./clsx-B-dksMZM.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./clsx-Ciqy0D92.js";import"./Group-DXZilGFj.js";import"./FieldError-Dx0wLbZk.js";import"./Text-COO1Tk0x.js";import"./Text-C2A-yzmp.js";import"./Button-A6crx_HM.js";import"./Hidden-BIvUufzC.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./SelectionIndicator-CXMu-wz6.js";import"./useField-CTSoVGUk.js";import"./VisuallyHidden-D7WZRGTo.js";import"./useControlledState-LFxBnaBs.js";import"./Label-PfsZVWpI.js";import"./Dialog-B1YZPLrY.js";import"./RSPContexts-DnHOF8LL.js";import"./OverlayArrow-9TJsQCNt.js";import"./useResizeObserver-DyyEm7tl.js";import"./Collection-B6ieSp3r.js";import"./index-Db_2pBFe.js";import"./Separator-CK2ElXWA.js";import"./SelectionManager-CBA1K6Fq.js";import"./useEvent-Bt-5AhA-.js";import"./scrollIntoView-D2l_qE3A.js";import"./useDescription-CbZGxods.js";import"./ListKeyboardDelegate-B2GotOUx.js";import"./PressResponder-CsdNKVT2.js";import"./useLocalizedStringFormatter-6GffOhcG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YvurAC38.js";import"./getScrollParent-DXaGcTkj.js";import"./ModalOverlay---ngcfhz.js";import"./x-D8ZbVwK0.js";import"./createLucideIcon-BIQyFJ8n.js";import"./useLocalizedStringFormatter-CdlaUYB9.js";import"./Heading-BmK9CANu.js";import"./info-CW9rTFtw.js";import"./Popover-BAo-GLwB.js";import"./check-ZFOexXGg.js";import"./useToggleState-C_LJMjGl.js";import"./TextFieldBase-0ff9tgyv.js";import"./Input-BIxzzi3V.js";import"./useTextField-BIRklZ0Y.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D1Ubu-cz.js";import"./DragAndDrop-C2lgAauG.js";import"./inertValue-DIqsqZBb.js";import"./useListState-C8DVC9v1.js";import"./TagGroup-BS3RtkYq.js";import"./useHighlightSelectionDescription-BwdT4M9m.js";import"./useUpdateEffect-BtHyaZ9z.js";import"./useHasTabbableChild-DooEG5WD.js";import"./chevron-down-DnX8Fsuo.js";import"./Virtualizer-DDgsmISX.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
