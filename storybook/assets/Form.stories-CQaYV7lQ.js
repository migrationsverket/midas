import{j as e}from"./iframe-BKRZxWBZ.js";import{c}from"./Form-fTlquUmi.js";import{G as d}from"./Grid-C-k-dlJu.js";import{G as i}from"./GridItem-DsAATPGk.js";import{a as x,R as u}from"./Radio-S-DgShrV.js";import{C as I}from"./CheckboxGroup-mma3vbio.js";import{C as G}from"./Checkbox-0YrGI_86.js";import{T as t}from"./TextField-BgiYSQwT.js";import{S as l}from"./Select-WWcHqEqF.js";import{L as p}from"./ListBoxItem-Bf1Hj3Vw.js";import{B as a}from"./Button-D0aetTqs.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CbgDMaVp.js";import"./utils-Y4JGSljl.js";import"./clsx-B-dksMZM.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./clsx-Ciqy0D92.js";import"./Group-B955Gz_D.js";import"./FieldError-DG-tonkS.js";import"./Text-DGzS_SrA.js";import"./Text-8xjuYN6y.js";import"./Button-Bag6HyT1.js";import"./Hidden-D261fXZx.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./SelectionIndicator-DfHJkRwt.js";import"./useField-CPhZds7-.js";import"./VisuallyHidden-DbkQs6Cg.js";import"./useControlledState-C2ay6qCb.js";import"./Label-IMJYRpEG.js";import"./Dialog-C7WdF5zb.js";import"./RSPContexts-BLR_J2o2.js";import"./OverlayArrow-CvFYChOZ.js";import"./useResizeObserver-BVT5-EIf.js";import"./Collection-Dp6UAv6j.js";import"./index-Kq-8Ist-.js";import"./Separator-C7yLVvrB.js";import"./SelectionManager-DBzFzXpy.js";import"./useEvent-CJgh-wfk.js";import"./scrollIntoView-9DVoBKAT.js";import"./useDescription-BeUx0Y0j.js";import"./ListKeyboardDelegate-rL3nlI98.js";import"./PressResponder-BNXMCjL5.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sv7RN9Kz.js";import"./getScrollParent-5vt1eUdP.js";import"./ModalOverlay-DEAZgSQq.js";import"./x-BTizcETx.js";import"./createLucideIcon-B2GxFjYG.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./Heading-CtngZd_I.js";import"./info-Dk1VuCco.js";import"./Popover-DSUknNwg.js";import"./check-UICM5qqQ.js";import"./useToggleState-DcSWHhrE.js";import"./TextFieldBase-D_7tL4Fk.js";import"./Input-By6lc-FN.js";import"./useTextField-CBLab7Xb.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-47gf2Yvl.js";import"./DragAndDrop-aMhwIHG8.js";import"./inertValue-BM86dB9b.js";import"./useListState-DSKB1e5l.js";import"./TagGroup-BUfmXVBE.js";import"./useHighlightSelectionDescription-D_0_lXVq.js";import"./useUpdateEffect-D3DbWrTB.js";import"./useHasTabbableChild-Dk9Eivfg.js";import"./chevron-down-CgNOsSIB.js";import"./Virtualizer-DSk8DF3u.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
