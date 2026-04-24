import{j as e}from"./iframe-Cpv3N_Z7.js";import{c}from"./Form-N1eN9l9p.js";import{G as d}from"./Grid-DK_9Ry14.js";import{G as i}from"./GridItem-DIoDJjKn.js";import{a as x,R as u}from"./Radio-vXZcR_fN.js";import{C as I}from"./CheckboxGroup-B2avJSgQ.js";import{C as G}from"./Checkbox-CHYgH7bZ.js";import{T as t}from"./TextField-BKVHEzWQ.js";import{S as l}from"./Select-D1J9tjsj.js";import{L as p}from"./ListBoxItem-DsJlZfs-.js";import{B as a}from"./Button-DMMScCvt.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-ypjCw1vR.js";import"./utils-Ds8IarQh.js";import"./clsx-B-dksMZM.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./clsx-Ciqy0D92.js";import"./Group-DtMaHiC2.js";import"./FieldError-DDdPNrDK.js";import"./Text-CBaNxGOV.js";import"./Text-CywvhZI_.js";import"./Button-yYifVGdg.js";import"./Hidden-CRjjTzwz.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./SelectionIndicator-DNA7WQpC.js";import"./useField-D1U1wsM_.js";import"./VisuallyHidden-UFh7Pb-i.js";import"./useControlledState-BJT8QsD-.js";import"./Label-Dx3VCdGV.js";import"./Dialog-Bb2YMCi0.js";import"./RSPContexts-B7j5fLyU.js";import"./OverlayArrow-sE3WTDMd.js";import"./useResizeObserver-DVNf1EMT.js";import"./Collection-CQWma8za.js";import"./index-zYi_m5tq.js";import"./Separator-Be3iiyzN.js";import"./SelectionManager-BKEpkWWf.js";import"./useEvent-ryaXYS60.js";import"./scrollIntoView-CvDQ6PuP.js";import"./useDescription-zO_rmDkP.js";import"./ListKeyboardDelegate--0GCoeKZ.js";import"./PressResponder-DGGSGX2J.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DhQs2maB.js";import"./getScrollParent-DFT_DoLJ.js";import"./ModalOverlay-58Zq4NHN.js";import"./x-F7c5yWaB.js";import"./createLucideIcon-CPN07aPY.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Heading-DYvz3_Q8.js";import"./info-Dl1Xxg5G.js";import"./Popover-Bc1Ybz7d.js";import"./check-DlLjoKJV.js";import"./useToggleState-CwdLunz8.js";import"./TextFieldBase-CnCPEd4J.js";import"./Input-DZ9x1R94.js";import"./useTextField-BGLj0zfE.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cz9KVsFN.js";import"./DragAndDrop-aABONeGY.js";import"./inertValue-CE5iK2Q2.js";import"./useListState-Bngd9ImP.js";import"./TagGroup-D0-HNnXZ.js";import"./useHighlightSelectionDescription-BfzLHFVw.js";import"./useUpdateEffect-D0eEjsqV.js";import"./useHasTabbableChild-CrMMLqZT.js";import"./chevron-down-BqJsmMHs.js";import"./Virtualizer-Ct3qfYX6.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
