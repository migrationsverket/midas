import{j as e}from"./iframe-UJ3BwdI6.js";import{c}from"./Form-BoynS74H.js";import{G as d}from"./Grid-C4lGmUek.js";import{G as i}from"./GridItem-C2E36AuN.js";import{a as x,R as u}from"./Radio-STT8TDCz.js";import{C as I}from"./CheckboxGroup-ru6N-TT7.js";import{C as G}from"./Checkbox-CLJ7wkUL.js";import{T as t}from"./TextField-DLkwnSjB.js";import{S as l}from"./Select-Bv6uqZcM.js";import{L as p}from"./ListBoxItem-6b0RBvpq.js";import{B as a}from"./Button-C7x5CU1C.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CLeeQzke.js";import"./utils-BYceCV3C.js";import"./clsx-B-dksMZM.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./clsx-Ciqy0D92.js";import"./Group-Cj4qpDe1.js";import"./FieldError-CS9phB3k.js";import"./Text-BU9YFTb1.js";import"./Text-C99-Gc34.js";import"./Button-C3rI1i5q.js";import"./Hidden-Dl3PKEKv.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./SelectionIndicator-D_gUha_f.js";import"./useField-XAlNn7CP.js";import"./VisuallyHidden-KE5d7FBc.js";import"./useControlledState-SS_iM14g.js";import"./Label-B2wEGgYc.js";import"./Dialog-BD0IRIUG.js";import"./RSPContexts-JudtSyi0.js";import"./OverlayArrow-CHGQ6Qmq.js";import"./useResizeObserver-DTE2Kg-d.js";import"./Collection-VaBd8FzM.js";import"./index-Cm_EPirj.js";import"./Separator-CZoAQZ-8.js";import"./SelectionManager-BujgrAkT.js";import"./useEvent-CTyOrL8U.js";import"./scrollIntoView-CTYRmDo1.js";import"./useDescription-C3PTeJJa.js";import"./ListKeyboardDelegate-BDLnRayo.js";import"./PressResponder-BMknpfIK.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_ZWVv1J.js";import"./getScrollParent-DHFOoCum.js";import"./ModalOverlay-CijLMVMM.js";import"./x-BHjLPSUz.js";import"./createLucideIcon-C1FynrDV.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./Heading-CWOFI80Y.js";import"./info-DT2O-hN9.js";import"./Popover-CHtRHt4o.js";import"./check-DdGCdeFn.js";import"./useToggleState-DKYAthNW.js";import"./TextFieldBase-OBJy9Fjs.js";import"./Input-TdTFBGXk.js";import"./useTextField-VNOp8-r0.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DnfcrNZF.js";import"./DragAndDrop-DtipxoSH.js";import"./inertValue-DIyF4aEx.js";import"./useListState-BXQmOGwx.js";import"./TagGroup-Ct1XZnZt.js";import"./useHighlightSelectionDescription-D65I50oZ.js";import"./useUpdateEffect-Wx61miHq.js";import"./useHasTabbableChild-BKzX5ew-.js";import"./chevron-down-CpoBGTBh.js";import"./Virtualizer-CYncALse.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
