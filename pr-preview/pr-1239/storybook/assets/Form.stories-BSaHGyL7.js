import{j as e}from"./iframe-D2jWlRbY.js";import{c}from"./Form-CrsOPGrC.js";import{G as d}from"./Grid-6RBWGRtK.js";import{G as i}from"./GridItem-D_QaJGJO.js";import{a as x,R as u}from"./Radio-BojfF1jk.js";import{C as I}from"./CheckboxGroup-N6cvd26e.js";import{C as G}from"./Checkbox-Cmvmc15Q.js";import{T as t}from"./TextField-BnrLbzKl.js";import{S as l}from"./Select-BlyiZo8N.js";import{L as p}from"./ListBoxItem-BEdlWeGr.js";import{B as a}from"./Button-Cx6hm3Pz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DCfgz9z-.js";import"./utils-BgILje6T.js";import"./clsx-B-dksMZM.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./clsx-Ciqy0D92.js";import"./Group-CuzXyiPi.js";import"./FieldError-BlwhWSc6.js";import"./Text-BlnXWmBt.js";import"./Text-dwHB4N6Q.js";import"./Button-C20mW5cN.js";import"./Hidden-BQ9eCogI.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./SelectionIndicator-De0BlSZX.js";import"./useField-DthL3lsX.js";import"./VisuallyHidden-DcHq__qP.js";import"./useControlledState-TsNhVwVg.js";import"./Label-Qo-mTOaY.js";import"./Dialog-BB7LJBGw.js";import"./RSPContexts-DBHxiWWN.js";import"./OverlayArrow-C3g-jDCJ.js";import"./useResizeObserver-BkJ1iT0c.js";import"./Collection-CDPRulZI.js";import"./index-ClO5XkG8.js";import"./Separator-ChK8l3B3.js";import"./SelectionManager-GdUQ0_3g.js";import"./useEvent-CcxES9pj.js";import"./scrollIntoView-ZO2UpkDZ.js";import"./useDescription-CJaXbPeA.js";import"./ListKeyboardDelegate-fCGrHL_b.js";import"./PressResponder-8J5GFZ_B.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dbg56SLM.js";import"./getScrollParent-Bttan2TX.js";import"./ModalOverlay-TKpdu6VL.js";import"./x-CXavF2G1.js";import"./createLucideIcon-3nESSKIe.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Heading-15Bg67se.js";import"./info-C44TV-1j.js";import"./Popover-COKgRpeE.js";import"./check-BaXb2ZAW.js";import"./useToggleState-BbzWPpkt.js";import"./TextFieldBase-DWAmswxv.js";import"./Input-D-UT_ZU8.js";import"./useTextField-D3Jer9O5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B_mZMKH3.js";import"./DragAndDrop--juY4dfn.js";import"./inertValue-DvBY2X1T.js";import"./useListState-DFyj9VAO.js";import"./TagGroup-D8wuEnGx.js";import"./useHighlightSelectionDescription-CaICZmpR.js";import"./useUpdateEffect-BpAfY_Tt.js";import"./useHasTabbableChild-B3ChlGsF.js";import"./chevron-down-C-S7JX47.js";import"./Virtualizer-J1PdJOAS.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
