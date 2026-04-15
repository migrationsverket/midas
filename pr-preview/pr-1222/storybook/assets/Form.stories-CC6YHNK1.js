import{j as e}from"./iframe-DjTiQbk5.js";import{c}from"./Form-DuGe5VBy.js";import{G as d}from"./Grid-DigVC6M-.js";import{G as i}from"./GridItem-D_0gwd7C.js";import{a as x,R as u}from"./Radio-0KJbuMUv.js";import{C as I}from"./CheckboxGroup-CBA4A9pF.js";import{C as G}from"./Checkbox-BewAFLzM.js";import{T as t}from"./TextField-C7vbjUGT.js";import{S as l}from"./Select-C5sLyQ9Q.js";import{L as p}from"./ListBoxItem-D5EEb6z6.js";import{B as a}from"./Button-DB82qK_z.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DMf_tcM8.js";import"./utils-ionmxpx_.js";import"./clsx-B-dksMZM.js";import"./index-zhJsHxyL.js";import"./index-D7ZGMXkv.js";import"./clsx-Ciqy0D92.js";import"./Group-Cbp4935P.js";import"./FieldError-CUTcgzRi.js";import"./Text-C_ch0y44.js";import"./Text-Cem6pM3f.js";import"./Button-DA9JAHIV.js";import"./Hidden-CDamOlST.js";import"./useLabel-CLuSEdHo.js";import"./useLabels-BB0a4MRb.js";import"./useButton-CB170Mhz.js";import"./SelectionIndicator-B-7ORbHv.js";import"./useField-DuPle7CC.js";import"./VisuallyHidden-CQ7IztLz.js";import"./useControlledState-DLtB8m1U.js";import"./Label-BUGbDP7s.js";import"./Dialog-B9NbVbMu.js";import"./RSPContexts-BQojnwjm.js";import"./OverlayArrow-vh-4yc6Y.js";import"./useResizeObserver-IzOrHPod.js";import"./Collection-CI2wp3yd.js";import"./index-ByyGrUS2.js";import"./Separator-CLKONL4g.js";import"./SelectionManager-B0aIZvXy.js";import"./useEvent-DGEghV1n.js";import"./scrollIntoView-JFwGorYi.js";import"./useDescription-DnMRFmWg.js";import"./ListKeyboardDelegate-uf4UQ6xb.js";import"./PressResponder-CWPEEGkL.js";import"./useLocalizedStringFormatter-b3SQCftA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-whHVtgH7.js";import"./getScrollParent-X2PToduC.js";import"./ModalOverlay-DCv5gjfJ.js";import"./x-B1F8kTQk.js";import"./createLucideIcon-CJ41k5Dv.js";import"./useLocalizedStringFormatter-Bs_4plvK.js";import"./Heading-xT31pYvP.js";import"./info-DfvZcCpI.js";import"./Popover-CB09FxHq.js";import"./check-QtkebUHe.js";import"./useToggleState-Dl0_mti0.js";import"./TextFieldBase-DjphOGlJ.js";import"./Input-CDNzlbFx.js";import"./useTextField-DoHnYcWO.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CioifrRj.js";import"./DragAndDrop-CnFxajfN.js";import"./inertValue-By7wj24D.js";import"./useListState-4sjMg1zb.js";import"./TagGroup-CpOAU5aI.js";import"./useHighlightSelectionDescription-CKNdZXTd.js";import"./useUpdateEffect-bxD2f_cG.js";import"./useHasTabbableChild-BG4zkpsT.js";import"./chevron-down-Bed5B976.js";import"./Virtualizer-Bx9rWguY.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
