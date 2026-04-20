import{j as e}from"./iframe-DHMeiSea.js";import{c}from"./Form-BA5p4_Pr.js";import{G as d}from"./Grid-lcXYH7UY.js";import{G as i}from"./GridItem-DOu3bePy.js";import{a as x,R as u}from"./Radio-BlK5DFCD.js";import{C as I}from"./CheckboxGroup-BZmUhPW4.js";import{C as G}from"./Checkbox-kagJyTLV.js";import{T as t}from"./TextField-vbVgYcA4.js";import{S as l}from"./Select-BQDaNgHM.js";import{L as p}from"./ListBoxItem-B8aLLegv.js";import{B as a}from"./Button-DRj-uv9d.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BZqNlBLL.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./clsx-Ciqy0D92.js";import"./Group-D0pRYruO.js";import"./FieldError-lPOYj5uT.js";import"./Text-BM4AoGMt.js";import"./Text-OJU2i65y.js";import"./Button-X7Yqj24b.js";import"./Hidden-BDTDIVWX.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./SelectionIndicator-D6PB-Vso.js";import"./useField-DM8ENoK0.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./useControlledState-CMV_FSB4.js";import"./Label-n0zIZ0YP.js";import"./Dialog-D_XYb5Vc.js";import"./RSPContexts-BSo_BzMb.js";import"./OverlayArrow-DxS57IzR.js";import"./useResizeObserver-Ze8rZcGU.js";import"./Collection-B5CYATRa.js";import"./index-CyT7ybeZ.js";import"./Separator-oRvQrtC5.js";import"./SelectionManager-qRhNxfSP.js";import"./useEvent-lEqisOMe.js";import"./scrollIntoView-CXJd081A.js";import"./useDescription-D2PosSZ6.js";import"./ListKeyboardDelegate-DrOjYDNI.js";import"./PressResponder-C89v-ZUc.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BShm4XID.js";import"./getScrollParent-DqcIICEx.js";import"./ModalOverlay--PxWcUJn.js";import"./x-C9bWyskH.js";import"./createLucideIcon-DHfZe-cT.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Heading-BSgX0T3V.js";import"./info-DNKVSWHx.js";import"./Popover-BdjDmCqu.js";import"./check-DVj13SaZ.js";import"./useToggleState-C90nGXgz.js";import"./TextFieldBase-DyboGV0n.js";import"./Input-f9ifWMLK.js";import"./useTextField-3cQ0mlc5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CI0wrKRg.js";import"./DragAndDrop-LOFF9F86.js";import"./inertValue-CCpIiRRt.js";import"./useListState-Bqgau6mD.js";import"./TagGroup-By0zNulN.js";import"./useHighlightSelectionDescription-D560zI-9.js";import"./useUpdateEffect-BU2k-Oau.js";import"./useHasTabbableChild-BVbSPOhb.js";import"./chevron-down-C94rWpt7.js";import"./Virtualizer-XXE7r8h_.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
