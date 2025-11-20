import{j as e}from"./iframe-BBV6b5lG.js";import{$ as c}from"./Form-CdyuF1WR.js";import{G as d}from"./Grid-DQwSKngb.js";import{G as i}from"./GridItem-zibu6gVg.js";import{T as t}from"./TextField-6qAY3QVm.js";import{S as l}from"./Select-BNZT_daR.js";import{B as a}from"./Button-D_woJjNv.js";import{R as x,a as u}from"./Radio-8cFY3pe1.js";import{C as I}from"./CheckboxGroup-BGPYeazp.js";import{C as G}from"./Checkbox-B_aSW43r.js";import{L as p}from"./ListBoxItem-B1dVx630.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cl8pVGWb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DK1VssBA.js";import"./useFocusRing-BKoWjM3h.js";import"./index-BzpXdeZq.js";import"./index-D_KHeT1o.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase--a5sydyX.js";import"./TextField-BtOXys8w.js";import"./FieldError-Dn4KLTgh.js";import"./Text-CxqhfGOZ.js";import"./Text-BpMSL69-.js";import"./RSPContexts-hzdcErwp.js";import"./Group-BPGuVPcW.js";import"./Input-CaLwBHBa.js";import"./Hidden-Ds8YvxI_.js";import"./Button-DLszx2Y7.js";import"./useLabels-pCbqYqJF.js";import"./useButton-tezIzvTx.js";import"./useTextField-BPKBCyFY.js";import"./useControlledState-DB16enQ5.js";import"./useField-CJHeRl7h.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-h4NsAjk6.js";import"./Dialog-BFEWe8TO.js";import"./OverlayArrow-BomDHho0.js";import"./useResizeObserver-CAjCmXVf.js";import"./Collection-qoeOD1CS.js";import"./index-CYJ9XJJR.js";import"./Separator-Dh0tBHbj.js";import"./SelectionManager-Durd4biJ.js";import"./useEvent-BthYEK7x.js";import"./scrollIntoView-DPNGSIfh.js";import"./SelectionIndicator-Dny4s1sY.js";import"./useDescription-CgE8AlaE.js";import"./ListKeyboardDelegate-DnVSv-_P.js";import"./PressResponder-BNJfbrMZ.js";import"./useLocalizedStringFormatter-DxPLpvAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSPXvemZ.js";import"./VisuallyHidden-DebLyYO_.js";import"./x-Cq4GRLQZ.js";import"./createLucideIcon-CQjagoR0.js";import"./useLocalizedStringFormatter-8FdOFj4F.js";import"./Heading-yZSSjkRN.js";import"./info-VT6Pjcpf.js";import"./Popover-BMbwZ4Q9.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-h4AGS3DZ.js";import"./DragAndDrop-B8ow0g4m.js";import"./inertValue-BbBVDHTU.js";import"./useListState-C8o1sgZi.js";import"./Tag-uTy2V4CV.js";import"./useHighlightSelectionDescription-6xyP6NJu.js";import"./useUpdateEffect-IehWp5Pq.js";import"./useHasTabbableChild-CwxrLDtd.js";import"./chevron-down-DGGX0s8U.js";import"./Button.module-CtQ1deO8.js";import"./check-Djp71Zgg.js";import"./useToggleState-DafGnFSD.js";import"./Virtualizer-s2a5OmJe.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
