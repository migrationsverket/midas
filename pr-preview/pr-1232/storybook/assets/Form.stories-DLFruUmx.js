import{j as e}from"./iframe-BzE31zAh.js";import{c}from"./Form-arZIN1dN.js";import{G as d}from"./Grid-CbDBvfIP.js";import{G as i}from"./GridItem-DY3SAYA1.js";import{a as x,R as u}from"./Radio-C8Jt3Z-T.js";import{C as I}from"./CheckboxGroup-CJXUIFsl.js";import{C as G}from"./Checkbox-C0Pgj78M.js";import{T as t}from"./TextField-Tqbbrt-y.js";import{S as l}from"./Select-W_tjWcow.js";import{L as p}from"./ListBoxItem-Dj2SA_PQ.js";import{B as a}from"./Button-D6ialrwI.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CqeBj5xm.js";import"./utils-DEtUikZw.js";import"./clsx-B-dksMZM.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./clsx-Ciqy0D92.js";import"./Group-w0fPDDmc.js";import"./FieldError-Bs0ZVONG.js";import"./Text-BM4F5w0Y.js";import"./Text-DWgTuz7g.js";import"./Button-DG_UrG-_.js";import"./Hidden-7JIM7zeN.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./SelectionIndicator-BedaVpk3.js";import"./useField-BBuU5S3O.js";import"./VisuallyHidden-C6-4w0VX.js";import"./useControlledState-PVT6AeJ2.js";import"./Label-D1Qa8Q1B.js";import"./Dialog-CuD4dufr.js";import"./RSPContexts-BP6VbO9Z.js";import"./OverlayArrow-Ci1-Yomt.js";import"./useResizeObserver-CiM13zj7.js";import"./Collection-CIijpQf2.js";import"./index-CtPUYOy2.js";import"./Separator-D6GUJf06.js";import"./SelectionManager-C7mBAcgV.js";import"./useEvent-BLL5UQ6m.js";import"./scrollIntoView-De1qC2jD.js";import"./useDescription-Dn7H1kUN.js";import"./ListKeyboardDelegate-6zhjV-lS.js";import"./PressResponder-C02FpRAV.js";import"./useLocalizedStringFormatter-iW6IrIfx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1YFdzJi3.js";import"./getScrollParent-B2Y1TED_.js";import"./ModalOverlay-D5u7i0Mo.js";import"./x-23zMaYXZ.js";import"./createLucideIcon-Lrfi9yqC.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./Heading-CN3On5_t.js";import"./info-Dc03G-UN.js";import"./Popover-FzrbKsT2.js";import"./check-BpnwENMz.js";import"./useToggleState-DdV0NQQ6.js";import"./TextFieldBase-DXJPHyOc.js";import"./Input-v2RlOuXS.js";import"./useTextField-CWJDtFat.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-GlLX_SBL.js";import"./DragAndDrop-Ozpi9w2O.js";import"./inertValue-BFSsLsiY.js";import"./useListState-B0P-YanG.js";import"./TagGroup-otuazJ32.js";import"./useHighlightSelectionDescription-CofV8eub.js";import"./useUpdateEffect-Bsm0VQD6.js";import"./useHasTabbableChild-CDeQgP87.js";import"./chevron-down-BfjgQe7K.js";import"./Virtualizer-DYlnr_Zn.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
